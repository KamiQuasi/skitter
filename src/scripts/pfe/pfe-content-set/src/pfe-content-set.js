import PFElement from "../../pfelement/dist/pfelement.js";
import PfeAccordion from "../../pfe-accordion/dist/pfe-accordion.js";
import PfeTabs from "../../pfe-tabs/dist/pfe-tabs.js";

class PfeContentSet extends PFElement {
  static get tag() {
    return "pfe-content-set";
  }

  get templateUrl() {
    return "pfe-content-set.html";
  }

  get styleUrl() {
    return "pfe-content-set.scss";
  }

  get schemaUrl() {
    return "pfe-content-set.json";
  }

  static get pfeType() {
    return PFElement.pfeType.combo;
  }

  static get cascadingAttributes() {
    return {
      "pfe-tab-history": "pfe-tabs"
    };
  }

  static get observedAttributes() {
    return ["pfe-tab-history"];
  }

  get isTab() {
    var breakpointValue;
    if (this.hasAttribute("pfe-breakpoint")) {
      breakpointValue = this.getAttributeNode("pfe-breakpoint").value;
      breakpointValue = breakpointValue.replace(/\D/g, "");
    } else {
      breakpointValue = 700;
    }
    return this.parentNode
      ? this.parentNode.offsetWidth > breakpointValue
      : window.outerWidth > breakpointValue;
  }

  get contentSetId() {
    return this.id || this.getAttribute("pfe-id") || this.randomId;
  }

  constructor() {
    super(PfeContentSet, { delayRender: true });

    this._init = this._init.bind(this);
    this._observer = new MutationObserver(this._init);
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.children.length) {
      this._init();
    }

    this._observer.observe(this, { childList: true });
  }

  disconnectedCallback() {
    this._observer.disconnect();
  }

  _init() {
    if (window.ShadyCSS) {
      this._observer.disconnect();
    }

    if (this.isTab) {
      this._buildTabs();
    } else {
      this._buildAccordion();
    }

    this.render();
    this.context_update();

    if (window.ShadyCSS) {
      setTimeout(() => {
        this._observer.observe(this, { childList: true });
      }, 0);
    }
  }

  _buildAccordion() {
    let accordion;

    // Use the existing accordion if it exists
    const existingAccordion = this.querySelector(
      `[pfe-id="${this.contentSetId}"]`
    );

    // Use a document fragment for efficiency
    const fragment = document.createDocumentFragment();

    // Create the accordion wrapper component or use the existing component
    if (!existingAccordion) {
      // Create the accordion wrapper component with a unique ID
      accordion = document.createElement("pfe-accordion");
      accordion.setAttribute("pfe-id", this.contentSetId);
    } else {
      accordion = existingAccordion;
    }

    // Iterate over each element in the light DOM
    [...this.children].forEach(child => {
      // If one of them has the attribute indicating they belong in the header region
      if (child.hasAttribute("pfe-content-set--header")) {
        const header = document.createElement("pfe-accordion-header");

        header.appendChild(child);
        accordion.appendChild(header);
      }

      if (child.hasAttribute("pfe-content-set--panel")) {
        const panel = document.createElement("pfe-accordion-panel");

        panel.appendChild(child);
        accordion.appendChild(panel);
      }
    });

    if (!existingAccordion) {
      fragment.appendChild(accordion);
      this.appendChild(fragment);
    }
  }

  _buildTabs() {
    let tabs;

    // Use the existing tabs if they exist
    let existingTabs = this.querySelector(`[pfe-id="${this.contentSetId}"]`);

    // Use a document fragment for efficiency
    const fragment = document.createDocumentFragment();

    // Create the tabs wrapper component or use the existing tabs
    if (!existingTabs) {
      tabs = document.createElement("pfe-tabs");
      tabs.setAttribute("pfe-id", this.contentSetId);
    } else {
      tabs = existingTabs;
    }

    // Iterate over each element in the light DOM
    [...this.children].forEach(child => {
      // If one of them has the attribute indicating they belong in the panel region
      if (child.hasAttribute("pfe-content-set--header")) {
        const header = document.createElement("pfe-tab");

        header.setAttribute("slot", "tab");

        if (child.id) {
          header.setAttribute("pfe-id", child.id);
        }

        header.appendChild(child);
        tabs.appendChild(header);
      }

      if (child.hasAttribute("pfe-content-set--panel")) {
        const panel = document.createElement("pfe-tab-panel");

        panel.setAttribute("slot", "panel");

        if (child.id) {
          panel.setAttribute("pfe-id", child.id);
        }

        panel.appendChild(child);
        tabs.appendChild(panel);
      }
    });

    if (!existingTabs) {
      fragment.appendChild(tabs);
    }

    // If the orientation is set to vertical, add that attribute to the tabs
    if (this.vertical.value !== null && this.vertical.value !== false) {
      tabs.setAttribute("vertical", true);
    }

    // Pass the variant attribute down to the tabs component
    if (this.variant.value !== this.variant.default) {
      tabs.setAttribute("pfe-variant", this.variant.value);
    }

    if (this.align.value) {
      tabs.setAttribute("pfe-tab-align", this.align.value);
    }

    if (this.hasAttribute("pfe-tab-history")) {
      tabs.setAttribute("pfe-tab-history", true);
    }

    if (!existingTabs) {
      this.appendChild(fragment);
    }
  }
}

PFElement.create(PfeContentSet);

export default PfeContentSet;
