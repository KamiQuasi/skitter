/*!
 * PatternFly Elements: PfeDropdown 1.0.0-prerelease.54
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

import PFElement from "../../pfelement/dist/pfelement.js";

class PfeDropdownItem extends PFElement {
  static get version() {
    return "1.0.0-prerelease.54";
  }

  get html() {
    return `<style>::slotted(*){display:block;width:100%;padding:calc(16px * .5) calc(16px * .5);padding:var(--pfe-dropdown--spacing--vertical,var(--pfe-dropdown--SpacingHorizontal,calc(var(--pfe-theme--container-padding,16px) * .5))) var(--pfe-dropdown--spacing--horizontal,var(--pfe-dropdown--SpacingHorizontal,calc(var(--pfe-theme--container-padding,16px) * .5)));color:#030303;color:var(--pfe-dropdown--Color,#030303);font-size:16px;font-size:var(--pfe-dropdown--FontSize,var(--pfe-theme--font-size,16px));font-weight:400;font-weight:var(--pfe-dropdown--FontWeight,400);line-height:1.5;line-height:var(--pfe-dropdown--LineHeight,var(--pfe-theme--line-height,1.5));text-align:left;text-align:var(--pfe-dropdown--TextAlign,left);white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;text-decoration:none;font-family:inherit;font-family:var(--pfe-theme--font-family,inherit);cursor:pointer}::slotted(button){background-color:transparent;background-color:var(--pfe-dropdown--BackgroundColor,transparent);border:none;border:var(--pfe-dropdown--Border,none)}.pfe-dropdown-item__container:active,.pfe-dropdown-item__container:focus,.pfe-dropdown-item__container:hover{background-color:#f0f0f0;background-color:var(--pfe-dropdown--BackgroundColor--hover,var(--pfe-theme--color--surface--lighter,#f0f0f0));color:#151515;color:var(--pfe-dropdown--Color--hover,#151515)}:host([pfe-item-type=separator]) .pfe-dropdown-item__container{height:1px;background-color:#f0f0f0}:host([is_disabled]) .pfe-dropdown-item__container{pointer-events:none;--pfe-dropdown--Color:#6a6e73}
/*# sourceMappingURL=pfe-dropdown-item.min.css.map */
</style><li class="pfe-dropdown-item__container">
  <slot></slot>
</li>`;
  }

  static get properties() {
    return {"item-type":{"title":"List item type","type":"string","enum":["link","action","separator"],"default":null,"prefixed":true}};
  }

  static get slots() {
    return {};
  }
  static get tag() {
    return "pfe-dropdown-item";
  }

  get templateUrl() {
    return "pfe-dropdown-item.html";
  }

  get styleUrl() {
    return "pfe-dropdown-item.scss";
  }

  get schemaUrl() {
    return "pfe-dropdown-item.json";
  }

  static get observedAttributes() {
    return ["pfe-item-type", "is_disabled"];
  }

  constructor() {
    super(PfeDropdownItem);

    this._container = this.shadowRoot.querySelector(`.${this.tag}__container`);
    this._item = this.shadowRoot.querySelector("slot").assignedNodes()[1];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case "pfe-item-type":
        this._setAccessibility();
        break;
      case "is_disabled":
        this._setDisabled();
        break;
      default:
        break;
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  _setAccessibility() {
    if (this._container) {
      const type = this.getAttribute("pfe-item-type");
      if (type) {
        switch (type) {
          case "link":
            this._container.setAttribute("role", "none");
            this._item && this._item.setAttribute("role", "menuitem");
            break;
          case "action":
            this._container.setAttribute("role", "menuitem");
            this._item && this._item.removeAttribute("role");
            break;
          case "separator":
            this._container.setAttribute("role", "separator");
            break;
          default:
            break;
        }
      }
    }
  }

  _setDisabled() {
    const isDisabled = this.hasAttribute("is_disabled");
    if (isDisabled) {
      this.removeAttribute("tabindex");
      this.setAttribute("aria-disabled", "true");
    } else {
      this.removeAttribute("is_disabled");
      this.setAttribute("tabindex", "0");
      this.setAttribute("aria-disabled", "false");
    }
  }
}

export default PfeDropdownItem;
