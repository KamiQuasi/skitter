/*!
 * PatternFly Elements: PfeNavigation 1.0.0-prerelease.54
 * @license
 * Copyright 2020 Red Hat, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
*/

// -- @TODO Set icons to hide if they all fail to load, else set them to preserve space

// Import polyfills: filter, matches, closest, includes, path
import "./polyfills--pfe-navigation.js";

import PFElement from "../../pfelement/dist/pfelement.js";
import PfeNavigationItem from "./pfe-navigation-item.js";
import PfeNavigationMain from "./pfe-navigation-main.js";

class PfeNavigation extends PFElement {
  static get version() {
    return "1.0.0-prerelease.54";
  }

  get html() {
    return `<style>.pfe-navigation__skip{position:absolute;overflow:hidden;clip:rect(0,0,0,0);height:1px;width:1px;margin:-1px;padding:0;border:0}:host{--pfe-navigation--sm-mobile:500px;--pfe-navigation--lg-mobile:640px;--pfe-navigation--sm-desktop:1024px;--pfe-navigation--Padding--vertical:var(--pfe-theme--container-padding, 16px);--pfe-navigation--Padding--horizontal:var(--pfe-theme--container-padding, 16px);--pfe-navigation--BackgroundColor:var(--pfe-theme--color--surface--darkest, #151515);--pfe-navigation--Color:var(--pfe-theme--color--text--on-dark, #fff);--pfe-navigation--BorderTopColor:transparent;--pfe-navigation--BorderColor:transparent;--pfe-navigation--MaxHeight:72px;--pfe-navigation--MobileMenuHeight:60px;--pfe-navigation--MaxWidth:calc(var(--pfe-theme--container-padding, 16px) * 4);--pfe-navigation--icon:none;--pfe-navigation__overlay--BackgroundColor:var(--pfe-theme--color--overlay, rgba(37, 37, 37, 0.5));--pfe-navigation__trigger--FontSize:16px;--pfe-navigation__trigger--FontWeight:100;--pfe-navigation__tray--Padding:var(--pfe-theme--container-padding, 16px);--pfe-navigation__logo--MinWidth:135px;--pfe-navigation--Padding:0 var(--pfe-navigation--Padding--horizontal, var(--pfe-theme--container-padding, 16px));--pfe-navigation--Border:var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-navigation--BorderColor, transparent);display:block;--pfe-accordion__base--Padding:var(--pfe-theme--container-spacer, 16px);--pfe-accordion__panel-container--Padding:0 calc(var(--pfe-accordion__base--Padding) * 3) var(--pfe-accordion__base--Padding) calc(var(--pfe-accordion__base--Padding) * 1.5);z-index:0;z-index:var(--pfe-theme--zindex--content,0);width:100%}@media print{:host{--pfe-navigation--Padding:calc(var(--pfe-navigation--Padding--vertical, var(--pfe-theme--container-padding, 16px)) / 2) var(--pfe-navigation--Padding--horizontal, var(--pfe-theme--container-padding, 16px))}}:host(.pfe-sticky){position:-webkit-sticky;position:sticky;top:0;left:0;z-index:98;z-index:var(--pfe-theme--zindex--navigation,98)}@media screen and (min-width:768px){:host([pfe-full-width]) .pfe-navigation__container{--pfe-navigation--Width:calc(100% - var(--pfe-navigation--Padding--horizontal, var(--pfe-theme--container-padding, 16px)) * 4)}}@media screen and (min-width:992px){:host([pfe-full-width]) .pfe-navigation__container{--pfe-navigation--Width:calc(100% - var(--pfe-navigation--Padding--horizontal, var(--pfe-theme--container-padding, 16px)) * 4)}}@media screen and (min-width:1200px){:host([pfe-full-width]) .pfe-navigation__container{--pfe-navigation--Width:calc(100% - var(--pfe-navigation--Padding--horizontal, var(--pfe-theme--container-padding, 16px)) * 8)}}pfe-icon{--pfe-icon--Color:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff))}::slotted([slot=logo]){margin:0!important;max-width:100%;max-height:72px;max-height:var(--pfe-navigation--MaxHeight,72px);min-width:135px;min-width:var(--pfe-navigation__logo--MinWidth,135px);display:block}::slotted([slot=mobile-language]),::slotted([slot=mobile-login]){color:#06c;color:var(--pfe-broadcasted--link,#06c);text-decoration:none;-webkit-text-decoration:var(--pfe-broadcasted--link-decoration,none);text-decoration:var(--pfe-broadcasted--link-decoration,none)}::slotted([slot=mobile-menu--label]){font-family:var(--pfe-navigation--font-family);font-size:var(--pfe-navigation--FontSize);font-weight:var(--pfe-navigation--FontWeight);color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));margin-bottom:0}.pfe-navigation__wrapper{--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;z-index:98;z-index:var(--pfe-theme--zindex--navigation,98);background-color:#151515;background-color:var(--pfe-navigation--BackgroundColor,var(--pfe-theme--color--surface--darkest,#151515));color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));min-height:72px;min-height:var(--pfe-navigation--MaxHeight,72px)}@media only screen and (max-height:500px){.pfe-navigation__wrapper{min-height:60px;min-height:var(--pfe-navigation--MobileMenuHeight,60px)}}.pfe-navigation__container{width:100%;margin:0 auto;padding:0 16px;padding:0 var(--pfe-navigation--Padding--horizontal,var(--pfe-theme--container-padding,16px));display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (min-width:768px){.pfe-navigation__container{padding:0;max-width:var(--pfe-navigation--Width)}}@media screen and (min-width:768px){.pfe-navigation__container{--pfe-navigation--Width:calc(768px - var(--pfe-navigation--MaxWidth, calc(var(--pfe-theme--container-padding, 16px) * 4)))}}@media screen and (min-width:992px){.pfe-navigation__container{--pfe-navigation--Width:calc(992px - var(--pfe-navigation--MaxWidth, calc(var(--pfe-theme--container-padding, 16px) * 4)))}}@media screen and (min-width:1200px){.pfe-navigation__container{--pfe-navigation--Width:calc(1200px - var(--pfe-navigation--MaxWidth, calc(var(--pfe-theme--container-padding, 16px) * 4)))}}.pfe-navigation__overlay{display:block;background-color:rgba(37,37,37,.5);background-color:var(--pfe-navigation__overlay--BackgroundColor,var(--pfe-theme--color--overlay,rgba(37,37,37,.5)));position:fixed;top:0;left:0;width:100%;height:100%;z-index:97;z-index:var(--pfe-theme--zindex--overlay,97)}.pfe-navigation__overlay[hidden]{display:none}.pfe-navigation__logo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:155px;width:var(--pfe-navigation__logo--MinWidth,155px);-webkit-box-flex:0;-webkit-flex:0 0 135px;-ms-flex:0 0 135px;flex:0 0 135px;-webkit-flex:0 0 var(--pfe-navigation__logo--MinWidth,135px);-ms-flex:0 0 var(--pfe-navigation__logo--MinWidth,135px);flex:0 0 var(--pfe-navigation__logo--MinWidth,135px);padding-top:16px;padding-top:var(--pfe-navigation--Padding--vertical,var(--pfe-theme--container-padding,16px));padding-bottom:16px;padding-bottom:var(--pfe-navigation--Padding--vertical,var(--pfe-theme--container-padding,16px));padding-right:calc(16px + 9px);padding-right:calc(var(--pfe-theme--container-padding,16px) + 9px)}@media screen and (min-width:768px){.pfe-navigation__logo{padding-right:calc(16px * 3);padding-right:calc(var(--pfe-theme--container-padding,16px) * 3)}}@media screen and (max-height:500px){.pfe-navigation__logo{padding-top:calc(16px/2);padding-top:calc(var(--pfe-navigation--Padding--vertical,var(--pfe-theme--container-padding,16px))/ 2);padding-bottom:calc(16px/2);padding-bottom:calc(var(--pfe-navigation--Padding--vertical,var(--pfe-theme--container-padding,16px))/ 2)}}@media screen and (min-width:640px){.pfe-navigation__logo{-webkit-box-flex:0;-webkit-flex:0 1 10%;-ms-flex:0 1 10%;flex:0 1 10%}}.pfe-navigation__logo>*{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.pfe-navigation__logo{-webkit-box-flex:1;-webkit-flex:1 0 15%;-ms-flex:1 0 15%;flex:1 0 15%}}.pfe-navigation__skip{display:block;margin:0 -2em -1px -1px}.pfe-navigation__main{display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));height:100%;width:100%}.pfe-navigation__main--menu-label{color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff))}[show_login][show_language] .pfe-navigation__main,[show_search] .pfe-navigation__main{grid-gap:16px;grid-gap:var(--pfe-theme--container-spacer,16px)}.pfe-navigation__main ::slotted(:not([hidden])){display:block;grid-column:1/-1}.pfe-navigation__utility{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}@media screen and (min-width:1024px){.pfe-navigation__utility{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto;margin-left:auto}}
/*# sourceMappingURL=pfe-navigation.min.css.map */
</style><div class="pfe-navigation__wrapper">
  <div class="pfe-navigation__container">
    ${ this.has_slot("logo") ? `<div class="pfe-navigation__logo">
      <slot name="logo" tabindex="2"></slot>
    </div>` : ""}
    ${ this.has_slot("skip") ? `<div class="pfe-navigation__skip">
      <slot name="skip" tabindex="1"></slot>
    </div>` : ""}
    <pfe-navigation-item pfe-icon="web-mobile-menu">
      ${this.hasAttribute("pfe-menu-label") ? `<h2 slot="trigger" class="pfe-navigation__main--menu-label">${this.getAttribute("pfe-menu-label")}</h2>` : `<span slot="trigger"></span>`}
      <div slot="tray">
        <div class="pfe-navigation__main">
          <slot name="mobile-search"></slot>
          <slot></slot>
          ${ this.has_slot("mobile-login") ? `<pfe-navigation-item pfe-icon="web-user" variant="wind" hidden>
            <slot name="mobile-login"></slot>
          </pfe-navigation-item>` : ``}
          ${ this.has_slot("mobile-language") ? `<pfe-navigation-item pfe-icon="web-globe" variant="wind" hidden>
            <slot name="mobile-language"></slot>
          </pfe-navigation-item>` : ``}
        </div>
      </div>
    </pfe-navigation-item>
    ${ this.has_slot("language") || this.has_slot("search") || this.has_slot("login") || this.has_slot("site-switcher") ? `<div class="pfe-navigation__utility">
      <slot name="language"></slot>
      <slot name="search"></slot>
      <slot name="login"></slot>
      <slot name="site-switcher"></slot>
    </div>` : ""}
  </div>
</div>
<div class="pfe-navigation__overlay" hidden></div>`;
  }

  static get properties() {
    return {"sticky":{"title":"Sticky navigation","type":"boolean","default":true,"prefixed":true},"full-width":{"title":"Full width navigation","type":"boolean","default":false,"prefixed":true},"close-on-click":{"title":"Close navigation on click event","type":"string","enum":["external"],"default":"external","prefixed":true},"menu-label":{"title":"Mobile menu label","type":"string","default":"Menu","prefixed":true}};
  }

  static get slots() {
    return {"skip":{"title":"Skip navigation","type":"array","namedSlot":true,"items":{"title":"Item","oneOf":[{"$ref":"raw"}]}},"logo":{"title":"Logo","type":"array","namedSlot":true,"items":{"title":"Item","oneOf":[{"$ref":"raw"}]}},"search":{"title":"Search","type":"array","namedSlot":true,"items":{"title":"Item","oneOf":[{"$ref":"pfe-navigation-item"}]}},"mobile-search":{"title":"Mobile search functionality","type":"array","namedSlot":true,"items":{"title":"Item","oneOf":[{"$ref":"raw"}]}},"main":{"title":"Main navigation","type":"array","namedSlot":false,"items":{"title":"Item","oneOf":[{"$ref":"nav"},{"$ref":"raw"}]}},"language":{"title":"Language switcher","type":"array","namedSlot":true,"items":{"title":"Item","oneOf":[{"$ref":"pfe-navigation-item"}]}},"mobile-language":{"title":"Mobile link to language page","type":"array","namedSlot":true,"items":{"title":"Item","oneOf":[{"$ref":"a"}]}},"login":{"title":"Log in","type":"array","namedSlot":true,"items":{"title":"Item","oneOf":[{"$ref":"pfe-navigation-item"}]}},"mobile-login":{"title":"Mobile link to log in page","type":"array","namedSlot":true,"items":{"title":"Item","oneOf":[{"$ref":"a"}]}},"site-switcher":{"title":"Site switcher","type":"array","namedSlot":true,"items":{"title":"Item","oneOf":[{"$ref":"pfe-navigation-item"}]}}};
  }
  static get tag() {
    return "pfe-navigation";
  }

  get templateUrl() {
    return "pfe-navigation.html";
  }

  get styleUrl() {
    return "pfe-navigation.scss";
  }

  get schemaUrl() {
    return "pfe-navigation.json";
  }

  get overlay() {
    return !this._overlay.hasAttribute("hidden");
  }

  set overlay(state) {
    if (state) {
      // Add the overlay to the page
      this._overlay.removeAttribute("hidden");

      // This prevents background scroll while nav is open
      // document.body.style.overflow = "hidden";

      this._wrapper.setAttribute("expanded", "");
    } else {
      // Remove the overlay from the page
      this._overlay.setAttribute("hidden", "");

      // Allow background to scroll again
      // document.body.style.overflow = "auto";

      this._wrapper.removeAttribute("expanded");
    }
  }

  static get cascadingAttributes() {
    return {
      "pfe-full-width": "pfe-navigation-item"
    };
  }

  static get observedAttributes() {
    return ["pfe-full-width"];
  }

  constructor() {
    super(PfeNavigation);

    // Attach functions for use below
    this._init = this._init.bind(this);
    this._setVisibility = this._setVisibility.bind(this);

    // -- handlers
    this._resizeHandler = this._resizeHandler.bind(this);
    this._stickyHandler = this._stickyHandler.bind(this);
    this._outsideListener = this._outsideListener.bind(this);
    this._menuItemClickHandler = this._menuItemClickHandler.bind(this);
    this._overlayClickHandler = this._overlayClickHandler.bind(this);
    this._observer = new MutationObserver(this._init);

    // Capture shadow elements
    this._overlay = this.shadowRoot.querySelector(`.${this.tag}__overlay`);
    this._wrapper = this.shadowRoot.querySelector(`.${this.tag}__wrapper`);
    this._menuItem = this.shadowRoot.querySelector(
      `${PfeNavigationItem.tag}[pfe-icon="web-mobile-menu"]`
    );

    this._slots = {
      language: this.shadowRoot.querySelector(
        `${PfeNavigationItem.tag}[pfe-icon="web-user"]`
      ),
      login: this.shadowRoot.querySelector(
        `${PfeNavigationItem.tag}[pfe-icon="web-globe"]`
      )
    };

    // Initialize active navigation item to empty array
    this._activeNavigationItems = [];
    this.overlay = false;

    // make sure we close all of the nav items and hide the overlay when
    // the mobile menu button is closed
    this._menuItem.shadowRoot
      .querySelector(".pfe-navigation-item__trigger")
      .addEventListener("click", this._menuItemClickHandler);

    // make sure we close all of the nav items and hide the overlay
    // when it's clicked
    this._overlay.addEventListener("click", this._overlayClickHandler);
  }

  connectedCallback() {
    super.connectedCallback();

    Promise.all([
      customElements.whenDefined(PfeNavigationItem.tag),
      customElements.whenDefined(PfeNavigationMain.tag)
    ]).then(() => {
      // If this element contains light DOM, initialize it
      if (this.children.length) {
        // If only one value exists in the array, it starts at that size and goes up
        this.breakpoints = {
          main: [0, 1023], // visible from 0 - 1200px
          search: [640], // visible from 768px +
          "mobile-search": [0, 639],
          language: [640],
          "mobile-language": [0, 639],
          login: [640],
          "mobile-login": [0, 639]
        };

        // Kick off the initialization of the light DOM elements
        this._init();

        // Watch for screen resizing
        window.addEventListener("resize", this._resizeHandler);
      } else {
        console.error(
          "This component does not have any light DOM children.  Please check documentation for requirements."
        );
      }

      this._observer.observe(this, { childList: true });
    });
  }

  disconnectedCallback() {
    // Remove the scroll, resize, and outside click event listeners
    window.removeEventListener("resize", this._resizeHandler);

    if (
      this.hasAttribute("pfe-close-on-click") &&
      this.getAttribute("pfe-close-on-click") === "external"
    ) {
      document.removeEventListener("click", this._outsideListener);
    }

    if (
      this.hasAttribute("pfe-sticky") &&
      this.getAttribute("pfe-sticky") != "false"
    ) {
      window.removeEventListener("scroll", this._stickyHandler);
    }

    this._menuItem.shadowRoot
      .querySelector(".pfe-navigation-item__trigger")
      .removeEventListener("click", this._menuItemClickHandler);
    this._overlay.removeEventListener("click", this._overlayClickHandler);

    this._observer.disconnect();
  }

  _resizeHandler(event) {
    // Set the visibility of items
    this._setVisibility(this.offsetWidth);

    // Check what the active item is
    this._activeNavigationItems.forEach(item => {
      // If the item is open but not visible, update it to hidden
      if (item.expanded && !item.visible) {
        item.expanded = false;
        this._activeNavigationItems = this._activeNavigationItems.filter(
          i => i !== item
        );
      } else if (item.expanded && item.parent && item.parent.visible) {
        // if the parent is the mobile menu item and the size of the window is within
        // the main breakpoint, make sure that the mobile menu is expanded
        if (
          item.parent === this._menuItem &&
          window.innerWidth <= this.breakpoints.main[1]
        ) {
          item.parent.expanded = true; // Ensure the parent is open
          // If the parent item doesn't exist in the active array, add it
          if (!this._activeNavigationItems.includes(item.parent)) {
            this._activeNavigationItems.push(item.parent);
          }
        }
      }
    });

    this.overlay = this._activeNavigationItems.length > 0;

    // update the reported height
    this._reportHeight();
  }

  _stickyHandler() {
    if (window.pageYOffset >= this.top) {
      this.classList.add("pfe-sticky");
    } else {
      this.classList.remove("pfe-sticky");
    }
  }

  _outsideListener(event) {
    // Check if the clicked element is the navigation object
    let isSelf = event.target === this;
    // Check if the clicked element contains or is contained by the navigation element
    let isChild = event.target.closest("pfe-navigation");
    let insideWrapper = event.target.tagName.includes("-")
      ? event.target.shadowRoot.querySelector("pfe-navigation")
      : null;

    // Check states to determine if the navigation items should close
    if (!isSelf && !(isChild || insideWrapper)) {
      this._activeNavigationItems.map(item => item.close());
    }
  }

  _setVisibility(width) {
    Object.keys(this.breakpoints).forEach(label => {
      let bps = this.breakpoints[label];
      let start = bps[0];
      let end = bps[1];
      let isVisible = false;

      // If the slot exists, set attribute based on supported breakpoints
      if (
        this.slots[label] &&
        this.slots[label].nodes &&
        this.slots[label].nodes.length > 0
      ) {
        if (width >= start && (!end || (end && width <= end))) {
          isVisible = true;
        }

        this.slots[label].nodes.forEach(node => {
          switch (label) {
            case "main":
              if (isVisible) {
                node.removeAttribute("show_content");
                this._menuItem.removeAttribute("show_links");
              } else {
                node.setAttribute("show_content", "");
                this._menuItem.setAttribute("show_links", "");
                this._menuItem.expanded = false;
                this._menuItem.tray.removeAttribute("hidden");
                // Remove menuItem from active items
                this._activeNavigationItems = this._activeNavigationItems.filter(
                  item => item !== this._menuItem
                );
              }
              node.navItems.forEach(item => {
                if (isVisible) {
                  item.removeAttribute("parent_hidden");
                } else {
                  item.setAttribute("parent_hidden", "");
                }
              });
              break;
            case (label.match(/^mobile/) || {}).input:
              if (isVisible) {
                // Set an attribute to show this region (strip the mobile prefix)
                this._menuItem.setAttribute(`show_${label.slice(7)}`, "");
                if (this._slots[label.slice(7)])
                  this._slots[label.slice(7)].removeAttribute("hidden");
                node.removeAttribute("hidden");
              } else {
                this._menuItem.removeAttribute(`show_${label.slice(7)}`);
                if (this._slots[label.slice(7)])
                  this._slots[label.slice(7)].setAttribute("hidden", "");
                node.setAttribute("hidden", "");
              }
              break;
            default:
              node.visible = isVisible;
              break;
          }
        });
      }
    });
  }

  _init() {
    // @IE11 This is necessary so the script doesn't become non-responsive
    if (window.ShadyCSS) {
      this._observer.disconnect();
    }

    // Initial position of this element from the top of the screen
    this.top = this.getBoundingClientRect().top || 0;

    // Get all nav items contained in this element
    this.navItems = [...this.querySelectorAll("pfe-navigation-item")];

    // Add the menu element to the list of navigation items
    // do this manually because menu item is in the shadow dom
    if (this._menuItem) this.navItems.push(this._menuItem);

    // Attach a reference to the navigation container to the children
    this.navItems.forEach(item => {
      item.navigationWrapper = this;
    });

    // Connect the shadow menu with the main component
    let mainNav = this.querySelector("pfe-navigation-main");
    if (mainNav && mainNav.navItems) {
      mainNav.navItems.forEach(item => {
        item.parent = this._menuItem;
      });
    }

    // Start by setting the visibility of the slots
    this._setVisibility(this.offsetWidth);

    // If the nav is set to sticky, inject the height of the nav to the next element in the DOM
    if (
      this.hasAttribute("pfe-sticky") &&
      this.getAttribute("pfe-sticky") != "false"
    ) {
      // Run the sticky check on first page load
      this._stickyHandler();

      // Attach the scroll event to the window
      window.addEventListener("scroll", this._stickyHandler);
    }

    // Listen for clicks outside the navigation element
    if (
      this.hasAttribute("pfe-close-on-click") &&
      this.getAttribute("pfe-close-on-click") === "external"
    ) {
      document.addEventListener("click", this._outsideListener);
    }

    // report the height of this pfe-navigation element
    this._reportHeight();

    // @IE11 This is necessary so the script doesn't become non-responsive
    if (window.ShadyCSS) {
      setTimeout(() => {
        this._observer.observe(this, {
          childList: true,
          subtree: true,
          characterData: true
        });
      }, 0);
    }
  }

  _menuItemClickHandler(event) {
    if (event.currentTarget.getAttribute("aria-expanded") === "false") {
      this._activeNavigationItems.map(item => item.close());
      this.overlay = false;
    }
  }

  _overlayClickHandler(event) {
    this._activeNavigationItems.map(item => item.close());
    this.overlay = false;
  }

  /**
   * Set a global CSS variable reporting the height of this navigation item.
   * Used to position sticky subnavigation items under this.
   *
   * The name of the global CSS variable is `--pfe-navigation--Height--actual`.
   */
  _reportHeight() {
    const cssVarName = `--${this.tag}--Height--actual`;
    const height = this.clientHeight + "px";
    document.body.style.setProperty(cssVarName, height);
  }
}

PFElement.create(PfeNavigationItem);
PFElement.create(PfeNavigationMain);
PFElement.create(PfeNavigation);

export default PfeNavigation;
