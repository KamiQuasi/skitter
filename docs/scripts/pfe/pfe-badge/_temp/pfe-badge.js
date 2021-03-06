/*!
 * PatternFly Elements: PfeBadge 1.0.0-prerelease.54
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

class PfeBadge extends PFElement {
  static get version() {
    return "1.0.0-prerelease.54";
  }

  get html() {
    return `<style>:host{display:inline-block;line-height:calc(1.5 * .75);line-height:calc(var(--pfe-theme--line-height,1.5) * .75);text-align:center;text-rendering:optimizelegibility}span{background-color:#f0f0f0;background-color:var(--pfe-badge--BackgroundColor,var(--pfe-theme--color--feedback--default--lightest,#f0f0f0));border-radius:calc(2px * 30);border-radius:var(--pfe-badge--BorderRadius,calc(var(--pfe-theme--ui--border-radius,2px) * 30));color:#151515;color:var(--pfe-badge--Color,var(--pfe-theme--color--text,#151515));font-size:calc(16px * .75);font-size:var(--pfe-badge--FontSize,calc(var(--pfe-theme--font-size,16px) * .75));font-weight:600;font-weight:var(--pfe-badge--FontWeight,var(--pfe-theme--font-weight--semi-bold,600));min-width:calc(1px * 2);min-width:var(--pfe-badge--MinWidth,calc(var(--pfe-theme--ui--border-width,1px) * 2));padding-left:calc(16px / 2);padding-left:var(--pfe-badge--PaddingLeft,calc(var(--pfe-theme--container-padding,16px)/ 2));padding-right:calc(16px / 2);padding-right:var(--pfe-badge--PaddingRight,calc(var(--pfe-theme--container-padding,16px)/ 2))}:host([pfe-state=moderate]) span{--pfe-badge--BackgroundColor:var(--pfe-theme--color--feedback--moderate, #ffc024);--pfe-badge--Color:var(--pfe-theme--color--text--on-dark, #fff)}:host([pfe-state=important]) span{--pfe-badge--BackgroundColor:var(--pfe-theme--color--feedback--important, #d73401);--pfe-badge--Color:var(--pfe-theme--color--text--on-dark, #fff)}:host([pfe-state=critical]) span{--pfe-badge--BackgroundColor:var(--pfe-theme--color--feedback--critical, #bb0000);--pfe-badge--Color:var(--pfe-theme--color--text--on-dark, #fff)}:host([pfe-state=success]) span{--pfe-badge--BackgroundColor:var(--pfe-theme--color--feedback--success, #2e7d32);--pfe-badge--Color:var(--pfe-theme--color--text--on-dark, #fff)}:host([pfe-state=info]) span{--pfe-badge--BackgroundColor:var(--pfe-theme--color--feedback--info, #0277bd);--pfe-badge--Color:var(--pfe-theme--color--text--on-dark, #fff)}:host([hidden]){display:none}
/*# sourceMappingURL=pfe-badge.min.css.map */
</style><span></span>`;
  }

  static get properties() {
    return {"state":{"title":"Background color","type":"string","enum":["default","moderate","important","critical","success","info"],"default":"default","prefixed":true},"number":{"title":"Numeric Value","type":"number","prefixed":false},"pfe-threshold":{"title":"Threshold Value","type":"number","prefixed":false}};
  }

  static get slots() {
    return {};
  }
  static get tag() {
    return "pfe-badge";
  }

  get templateUrl() {
    return "pfe-badge.html";
  }

  get styleUrl() {
    return "pfe-badge.scss";
  }

  get schemaUrl() {
    return "pfe-badge.json";
  }

  static get observedAttributes() {
    return ["number", "pfe-threshold"];
  }

  get threshold() {
    return this.getAttribute("pfe-threshold");
  }

  constructor() {
    super(PfeBadge);
    this._textContainer = this.shadowRoot.querySelector("span");
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    switch (attr) {
      case "pfe-threshold":
        this.textContent =
          Number(this.threshold) < Number(this.textContent)
            ? `${this.threshold}+`
            : this.textContent;
        break;
      case "number":
        this.textContent =
          this.threshold && Number(this.threshold) < Number(newVal)
            ? `${this.threshold}+`
            : newVal;
        break;
      default:
        return;
    }
    this._textContainer.textContent = this.textContent;
  }
}

PFElement.create(PfeBadge);

export default PfeBadge;
