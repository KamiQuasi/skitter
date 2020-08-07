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

import PFElement from "../../pfelement/dist/pfelement.js";
import PfeIcon from "../../pfe-icon/dist/pfe-icon.js";

class PfeNavigationItem extends PFElement {
  static get version() {
    return "1.0.0-prerelease.54";
  }

  get html() {
    return `<style>:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray{position:relative;display:block;width:100%;padding:16px;padding:var(--pfe-theme--container-spacer,16px)}::slotted([slot=trigger]){font-family:Overpass,Overpass,Helvetica,helvetica,arial,sans-serif;font-family:var(--pfe-theme--font-family, "Overpass", Overpass, Helvetica, helvetica, arial, sans-serif);font-size:16px!important;font-size:var(--pfe-navigation__trigger--FontSize,var(--pfe-theme--font-size--heading--epsilon,16px))!important;font-weight:300;font-weight:var(--pfe-navigation--FontWeight,var(--pfe-theme--font-weight--light,300));color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));z-index:2;line-height:1.1;margin:0!important;max-width:100%;text-align:center}@media screen and (min-width:0){::slotted([slot=trigger]){max-width:100%}}@media screen and (min-width:1200px){::slotted([slot=trigger]){max-width:190px}}:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;line-height:1.2;height:100%;min-width:auto;min-width:var(--pfe-navigation--MinWidth,auto)}@media screen and (max-width:1200px){:host{width:100%}}@media screen and (min-width:500px){:host{--pfe-navigation__trigger--Padding:var(--pfe-theme--container-padding, 16px)}}:host([aria-current=location]){--pfe-navigation--BorderTopColor:var(--pfe-theme--color--ui-accent, #06c)}:host(.expanded){--pfe-navigation__trigger-icon--Visible:visible;--pfe-navigation--BorderColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-navigation--BorderTopColor:var(--pfe-theme--color--ui-accent, #06c);--pfe-navigation--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-navigation--Color:var(--pfe-theme--color--text, #151515)}:host([pfe-icon]){--pfe-navigation--MinWidth:50px;--pfe-navigation__trigger--FontSize:12px;--pfe-navigation__trigger--Padding:calc(var(--pfe-theme--container-padding, 16px) * .625);--pfe-navigation__trigger-icon--Visible:hidden;-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto;width:auto;min-width:65px}@media screen and (min-width:640px){:host([pfe-icon]){width:70px}}@media screen and (max-height:500px){:host([pfe-icon]){--pfe-navigation__trigger--Padding:calc(var(--pfe-theme--container-padding, 16px) / 3) calc(var(--pfe-theme--container-padding, 16px) *.5)}}@media screen and (min-width:1024px){:host([pfe-icon]){-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}}:host(:not([pfe-icon])){--pfe-navigation__trigger--Padding:calc(var(--pfe-theme--container-padding, 16px) * .75)}:host(:not([has_tray])),:host(:not([pfe-icon]):not([is_nested]):not(.expanded)){--pfe-navigation__trigger-icon--Visible:hidden}:host([is_nested]:not([parent_hidden])){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;max-width:100%;max-width:var(--pfe-navigation--Width,100%)}.pfe-navigation-item__trigger{--pfe-theme--link--text-decoration:none;--pfe-theme--link--text-decoration--hover:none;--pfe-theme--link--text-decoration--focus:none;--pfe-broadcasted--text:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff));--pfe-broadcasted--link:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff));--pfe-broadcasted--link--hover:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff));--pfe-broadcasted--link--focus:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff));--pfe-broadcasted--link--visited:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff));--pfe-theme--font-size--alpha:var(--pfe-navigation__trigger--FontSize, var(--pfe-theme--font-size--heading--epsilon, 16px));--pfe-theme--font-weight--alpha:var(--pfe-navigation--FontWeight, var(--pfe-theme--font-weight--light, 300));--pfe-theme--font-size--beta:var(--pfe-navigation__trigger--FontSize, var(--pfe-theme--font-size--heading--epsilon, 16px));--pfe-theme--font-weight--beta:var(--pfe-navigation--FontWeight, var(--pfe-theme--font-weight--light, 300));--pfe-theme--font-size--gamma:var(--pfe-navigation__trigger--FontSize, var(--pfe-theme--font-size--heading--epsilon, 16px));--pfe-theme--font-weight--gamma:var(--pfe-navigation--FontWeight, var(--pfe-theme--font-weight--light, 300));border-top:4px solid transparent;border-top:var(--pfe-theme--surface--border-width--heavy,4px) var(--pfe-theme--surface--border-style,solid) var(--pfe-navigation--BorderTopColor,transparent);border-right:1px dashed transparent;border-right:var(--pfe-theme--surface--border-width,1px) dashed var(--pfe-navigation--BorderColor,transparent);border-bottom:1px dashed transparent;border-bottom:var(--pfe-theme--surface--border-width,1px) dashed var(--pfe-navigation--BorderColor,transparent);border-left:1px dashed transparent;border-left:var(--pfe-theme--surface--border-width,1px) dashed var(--pfe-navigation--BorderColor,transparent);background-color:transparent;background-color:var(--pfe-navigation--BackgroundColor,transparent);color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));padding:calc(16px * .5);padding:var(--pfe-navigation__trigger--Padding,calc(var(--pfe-theme--container-padding,16px) * .5));position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all cubic-bezier(.465,.183,.153,.946);transition:all cubic-bezier(.465,.183,.153,.946);-webkit-transition:all var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:all var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));outline:0;cursor:pointer}.pfe-navigation-item__trigger:hover{--pfe-navigation--BorderTopColor:var(--pfe-theme--color--ui-accent, #06c);--pfe-navigation__trigger-icon--Visible:visible}:host([variant=wind]) .pfe-navigation-item__trigger:hover{--pfe-navigation--Color:var(--pfe-theme--color--link--hover, #004080)}:host([has_tray]:not([pfe-icon]):not([is_nested]):not(.expanded)) .pfe-navigation-item__trigger:hover{--pfe-navigation__trigger-icon--Visible:visible;border-top-color:#fff;border-top-color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff))}@media screen and (min-width:1200px){:host([has_tray]:not(.expanded)) .pfe-navigation-item__trigger:hover{--pfe-navigation__trigger-icon--Visible:visible}}.pfe-navigation-item__trigger:focus{--pfe-navigation--BorderTopColor:var(--pfe-theme--color--ui-accent, #06c);--pfe-navigation--BorderColor:var(--pfe-theme--color--surface--lightest, #fff)}:host([variant=wind]) .pfe-navigation-item__trigger:focus{--pfe-navigation--Color:var(--pfe-theme--color--link--focus, #004080)}:host(:not([pfe-icon])) .pfe-navigation-item__trigger::after{display:block;content:" ";visibility:hidden;visibility:var(--pfe-navigation__trigger-icon--Visible,hidden);border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);border-width:6px 6px 0;border-color:transparent;border-top-color:#4f5255;border-top-color:var(--pfe-theme--color--feedback--default,#4f5255);-webkit-transform:rotate(0);transform:rotate(0);position:absolute;bottom:calc(16px / 2);bottom:calc(var(--pfe-theme--container-spacer,16px)/ 2)}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger{--pfe-navigation--Color:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text:var(--pfe-navigation__tray--Color, var(--pfe-theme--color--text, #151515));--pfe-broadcasted--link:var(--pfe-navigation__tray--Color, var(--pfe-theme--color--text, #151515));--pfe-broadcasted--link-decoration:var(--pfe-navigation__tray--Color, var(--pfe-theme--color--text, #151515));--pfe-navigation--BorderBottomWidth:0;--pfe-navigation--ZIndex:3;--pfe-navigation__trigger--Padding:var(--pfe-navigation__base--Padding) 50px var(--pfe-navigation__base--Padding) calc(var(--pfe-navigation__base--Padding) * 1.5);margin:0;width:100%;width:var(--pfe-navigation--Width,100%);max-width:calc(100% - 4px);max-width:calc(100% - var(--pfe-theme--surface--border-width--heavy,4px));height:auto;position:relative;background-color:transparent;background-color:var(--pfe-navigation--BackgroundColor,transparent);color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));border:0 solid transparent;border:0 var(--pfe-theme--surface--border-style,solid) var(--pfe-navigation--BorderColor,transparent);border-top-width:var(--pfe-navigation--BorderTopWidth);border-right-width:var(--pfe-navigation--BorderRightWidth);border-bottom-width:var(--pfe-navigation--BorderBottomWidth);border-left:var(--pfe-navigation--BorderLeftWidth) solid var(--pfe-navigation--BorderColor--accent);border-left:var(--pfe-navigation--BorderLeftWidth) var(--pfe-theme--surface--border-style,solid) var(--pfe-navigation--BorderColor--accent);-webkit-box-shadow:var(--pfe-navigation--BoxShadow);box-shadow:var(--pfe-navigation--BoxShadow);z-index:var(--pfe-navigation--ZIndex);cursor:pointer;font-family:inherit;font-size:calc(16px * 1.1);font-size:var(--pfe-navigation--FontSize--header,calc(var(--pfe-theme--font-size,16px) * 1.1));font-weight:700;font-weight:var(--pfe-theme--font-weight--bold,700);text-align:left;text-align:var(--pfe-navigation--TextAlign,left);line-height:1.5;line-height:var(--pfe-theme--line-height,1.5);padding:calc(16px * .5);padding:var(--pfe-navigation__trigger--Padding,calc(var(--pfe-theme--container-padding,16px) * .5));-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger:hover{--pfe-navigation--BorderColor--accent:var(--pfe-navigation--accent)}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger:hover{outline:0;border-left-width:4px;border-left-width:var(--pfe-theme--surface--border-width--heavy,4px)}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger:focus{outline:0;text-decoration:underline}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger::-moz-focus-inner{border:0}:host([is_nested].expanded:not([parent_hidden])) .pfe-navigation-item__trigger{--pfe-navigation--BorderColor:var(--pfe-theme--color--surface--border, #d2d2d2);--pfe-navigation--BorderRightWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-navigation--BorderLeftWidth:var(--pfe-theme--surface--border-width--heavy, 4px);--pfe-navigation--BackgroundColor:white;--pfe-navigation--Color:var(--pfe-theme--color--text, #151515);--pfe-navigation--BorderColor--accent:var(--pfe-navigation--accent);--pfe-navigation--BoxShadow:0 5px var(--pfe-theme--surface--border-width--heavy, 4px) rgba(140, 140, 140, 0.35);--pfe-navigation--ZIndex:3}:host([is_nested][last]:not(.expanded):not([parent_hidden])) .pfe-navigation-item__trigger{--pfe-navigation--BorderBottomWidth:var(--pfe-theme--surface--border-width, 1px)}:host([is_nested]:not(.expanded):not([parent_hidden])) .pfe-navigation-item__trigger::after{content:"";position:absolute;top:calc(16px + 0px);top:calc(var(--pfe-theme--container-spacer,16px) + 0px);display:block;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);height:.4em;width:.4em;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;border-width:0 .1em .1em 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);right:calc(16px * 1.3125);right:calc(var(--pfe-theme--container-spacer,16px) * 1.3125)}:host([is_nested].expanded:not([parent_hidden])) .pfe-navigation-item__trigger::after{content:"";position:absolute;top:calc(16px + 4px);top:calc(var(--pfe-theme--container-spacer,16px) + 4px);display:block;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);height:.4em;width:.4em;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;border-width:.1em .1em 0 0;border-bottom:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:calc(16px + 4px);top:calc(var(--pfe-theme--container-spacer,16px) + 4px);right:calc(16px * 1.3125);right:calc(var(--pfe-theme--container-spacer,16px) * 1.3125)}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger::after{--pfe-navigation__trigger-icon--Visible:visible;border-color:#fff;border-color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff))}:host([is_nested]:not([has_tray]):not([parent_hidden])) .pfe-navigation-item__trigger::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}:host([variant=wind]) .pfe-navigation-item__trigger{--pfe-navigation__trigger--Padding:calc(var(--pfe-theme--container-padding, 16px) / 2) 0 calc(var(--pfe-theme--container-padding, 16px) / 2) calc(var(--pfe-theme--container-spacer, 16px) * 1.5);--pfe-navigation--Color:pfe-var(link);--pfe-navigation--BackgroundColor:transparent!important;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border:none}.pfe-navigation-item__trigger pfe-icon{--pfe-icon--Color:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff))}:host([variant=wind]) .pfe-navigation-item__trigger pfe-icon{margin-bottom:0;margin-right:calc(16px / 2);margin-right:calc(var(--pfe-theme--container-spacer,16px)/ 2)}.pfe-navigation-item__trigger pfe-icon[icon=web-plus]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}:host([pfe-icon]) ::slotted([slot=trigger]){margin:.25em 0 0 0!important;max-width:100px}::slotted(*){font-size:inherit!important;font-weight:300!important;font-weight:var(--pfe-navigation--FontWeight,var(--pfe-theme--font-weight--light,300))!important}.pfe-navigation-item__tray{--pfe-navigation--FontWeight:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none);-webkit-transition:all cubic-bezier(.465,.183,.153,.946);transition:all cubic-bezier(.465,.183,.153,.946);-webkit-transition:all var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:all var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));-webkit-box-sizing:border-box;box-sizing:border-box;display:none;visibility:hidden}.pfe-navigation-item__tray[aria-expanded=true]{display:block;visibility:visible}:host([show_links]:not([parent_hidden])) .pfe-navigation-item__tray{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;visibility:visible;width:100%;padding-right:40px}:host(:not([pfe-icon=web-mobile-menu]):not([is_nested])) .pfe-navigation-item__tray,:host([is_nested][parent_hidden]) .pfe-navigation-item__tray,:host([pfe-icon=web-mobile-menu]:not([show_links])) .pfe-navigation-item__tray{position:absolute;top:100%;left:0;background-color:#fff;background-color:var(--pfe-navigation__tray--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff));color:#151515;color:var(--pfe-navigation__tray--Color,var(--pfe-theme--color--text,#151515));padding:var(--pfe-navigation__tray--Padding);width:100%;max-height:calc(100vh - 84px);max-height:calc(100vh - var(--pfe-navigation--Height,84px));overflow-x:hidden;overflow-y:scroll;padding-right:9px}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray{display:none;overflow:hidden;will-change:height;border-color:transparent;opacity:0;margin:0;width:100%;width:var(--pfe-navigation--Width,100%);max-width:calc(100% - 4px);max-width:calc(100% - var(--pfe-theme--surface--border-width--heavy,4px));height:auto;position:relative;background-color:transparent;background-color:var(--pfe-navigation--BackgroundColor,transparent);color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));border:0 solid transparent;border:0 var(--pfe-theme--surface--border-style,solid) var(--pfe-navigation--BorderColor,transparent);border-top-width:var(--pfe-navigation--BorderTopWidth);border-right-width:var(--pfe-navigation--BorderRightWidth);border-bottom-width:var(--pfe-navigation--BorderBottomWidth);border-left:var(--pfe-navigation--BorderLeftWidth) solid var(--pfe-navigation--BorderColor--accent);border-left:var(--pfe-navigation--BorderLeftWidth) var(--pfe-theme--surface--border-style,solid) var(--pfe-navigation--BorderColor--accent);-webkit-box-shadow:var(--pfe-navigation--BoxShadow);box-shadow:var(--pfe-navigation--BoxShadow);z-index:var(--pfe-navigation--ZIndex);--pfe-navigation--BoxShadow:none;padding:var(--pfe-navigation__panel-container--Padding);padding:calc(var(--pfe-navigation--Padding--vertical)/ 2) calc(var(--pfe-navigation--Padding--horizontal) * 1.75)}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray:hover{--pfe-navigation--BorderColor--accent:var(--pfe-navigation--accent)}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray *,:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray ::after,:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray ::before{-webkit-box-sizing:border-box;box-sizing:border-box}:host([is_nested].expanded:not([parent_hidden])) .pfe-navigation-item__tray{--pfe-navigation--BorderColor:var(--pfe-theme--color--surface--border, #d2d2d2);--pfe-navigation--BorderRightWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-navigation--BorderLeftWidth:var(--pfe-theme--surface--border-width--heavy, 4px);--pfe-navigation--BackgroundColor:white;--pfe-navigation--Color:var(--pfe-theme--color--text, #151515);--pfe-navigation--BorderColor--accent:var(--pfe-navigation--accent);--pfe-navigation--BoxShadow:0 5px var(--pfe-theme--surface--border-width--heavy, 4px) rgba(140, 140, 140, 0.35);--pfe-navigation--ZIndex:3;--pfe-navigation--BorderTopWidth:0;--pfe-navigation--BoxShadow:0 5px var(--pfe-theme--surface--border-width--heavy, 4px) rgba(140, 140, 140, 0.35);display:block;position:relative;opacity:1}::slotted([slot=tray]){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}:host(:not(.expanded):not([show_links])) .pfe-navigation-item__tray,:host([hidden]) .pfe-navigation-item__tray,:host([hidden]) .pfe-navigation-item__trigger,:host([hidden]:not([show_tray])),:host([show_links])>.pfe-navigation-item__trigger{display:none;visibility:hidden}:host([show_links]) ::slotted([slot=tray][hidden]),:host([show_tray]){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;visibility:visible;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}:host([is_nested]) ::slotted([slot=trigger]){text-align:left}:host([is_nested]) [slot=trigger]>a{color:#151515!important;color:var(--pfe-theme--color--text,#151515)!important}:host([pfe-icon=web-mobile-menu]){-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-flex:0;-webkit-flex:0 1 99%;-ms-flex:0 1 99%;flex:0 1 99%}:host([is_nested][parent_hidden][pfe-full-width]) .pfe-navigation-item__tray{padding:var(--pfe-navigation__tray--Padding) 0 var(--pfe-navigation__tray--Padding)}
/*# sourceMappingURL=pfe-navigation-item.min.css.map */
</style><div class="pfe-navigation-item__trigger" aria-expanded="false" tabindex="0">
    ${this.hasIcon ? `<pfe-icon icon="${this.iconName}"></pfe-icon>` : ""}
    <slot name="trigger"></slot>
</div>
${ this.has_slot("tray") ? `<div class="pfe-navigation-item__tray">
    <slot name="tray"></slot>
</div>` : ""}`;
  }

  static get properties() {
    return {"icon":{"title":"Icon name","type":"string","prefixed":true}};
  }

  static get slots() {
    return {"trigger":{"title":"Navigation trigger","type":"array","namedSlot":true,"items":{"title":"Item","oneOf":[{"$ref":"raw"}]}},"tray":{"title":"Navigation tray","type":"array","namedSlot":true,"items":{"title":"Item","oneOf":[{"$ref":"raw"}]}}};
  }
  static get tag() {
    return "pfe-navigation-item";
  }

  get templateUrl() {
    return "pfe-navigation-item.html";
  }

  get styleUrl() {
    return "pfe-navigation-item.scss";
  }

  get schemaUrl() {
    return "pfe-navigation-item.json";
  }

  static get PfeType() {
    return PFElement.PfeTypes.Container;
  }

  static get observedAttributes() {
    return ["pfe-icon", "pfe-full-width"];
  }

  static get cascadingAttributes() {
    return {
      "pfe-full-width": ".pfe-navigation-item__tray"
    };
  }

  get hasIcon() {
    return this.hasAttribute("pfe-icon");
  }

  get iconName() {
    return this.getAttribute("pfe-icon");
  }

  get nested() {
    return this.hasAttribute("is_nested");
  }

  set nested(isNested) {
    isNested = Boolean(isNested);

    if (isNested) {
      this.setAttribute("is_nested", "");
    } else {
      this.removeAttribute("is_nested");
    }
  }

  get expanded() {
    return this.classList.contains("expanded");
  }

  set expanded(isExpanded) {
    isExpanded = Boolean(isExpanded);

    if (isExpanded) {
      this.classList.add("expanded");

      if (this.iconName === "web-mobile-menu") {
        if (this._icon) this._icon.setAttribute("icon", "web-plus");
      }

      if (this._trigger) {
        this._trigger.setAttribute("aria-expanded", true);
      }

      if (this.tray) {
        this.tray.removeAttribute("hidden");
      }

      if (this._tray) {
        this._tray.setAttribute("aria-expanded", true);
      }
    } else {
      this.classList.remove("expanded");

      if (this.iconName === "web-mobile-menu") {
        if (this._icon) this._icon.setAttribute("icon", "web-mobile-menu");
      }

      if (this._trigger) {
        this._trigger.setAttribute("aria-expanded", false);
      }

      if (this.tray) {
        this.tray.setAttribute("hidden", "");
      }

      if (this._tray) {
        this._tray.setAttribute("aria-expanded", false);
      }
    }
  }

  get visible() {
    return !this.hasAttribute("hidden");
  }

  set visible(isVisible) {
    isVisible = Boolean(isVisible);

    if (isVisible) {
      this.removeAttribute("hidden");
    } else {
      this.setAttribute("hidden", "");
    }
  }

  open(event) {
    if (event) event.preventDefault();

    // Close the other active item(s) unless it's this item's parent
    if (this.navigationWrapper) {
      this.navigationWrapper._activeNavigationItems = this.navigationWrapper._activeNavigationItems.filter(
        item => {
          let stayOpen = item === this.parent;
          if (!stayOpen) item.close();
          return stayOpen;
        }
      );

      // Open that item and add it to the active array
      this.navigationWrapper._activeNavigationItems.push(this);

      this.expanded = true;
      this.navigationWrapper.overlay = true;
    }

    // Dispatch the event
    this.dispatchEvent(
      new CustomEvent(`${this.tag}:open`, {
        detail: {},
        bubbles: true,
        composed: true
      })
    );
  }

  close(event) {
    if (event) event.preventDefault();

    // Close the children elements
    this.navigationWrapper._activeNavigationItems = this.navigationWrapper._activeNavigationItems.filter(
      item => {
        let close = this.nestedItems && this.nestedItems.includes(item);
        if (close) item.close();
        return !close && item !== this;
      }
    );

    this.expanded = false;

    // Clear the overlay
    this.navigationWrapper.overlay =
      this.navigationWrapper._activeNavigationItems.length > 0;

    this.focus();

    // Dispatch the event
    this.dispatchEvent(
      new CustomEvent(`${this.tag}:close`, {
        detail: {},
        bubbles: true,
        composed: true
      })
    );
  }

  toggle(event) {
    if (event) event.preventDefault();

    if (this.visible && !this.expanded) {
      this.open(event);
    } else {
      this.close(event);
    }
  }

  constructor() {
    super(PfeNavigationItem);

    this._handlersAdded = false;

    // States
    this.nested = false;
    this.expanded = false;

    // Objects
    this.trigger = null;
    this.tray = null;
    this.directLink = null;
    this.linkUrl = null;

    // Lists
    this.nestedItems = [];

    // Shadow elements
    this._trigger = this.shadowRoot.querySelector(`.${this.tag}__trigger`);
    this._icon = this.shadowRoot.querySelector("pfe-icon");
    this._tray = this.shadowRoot.querySelector(`.${this.tag}__tray`);

    // Externally accessible events
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.toggle = this.toggle.bind(this);

    // Initializers
    this._init__trigger = this._init__trigger.bind(this);
    this._init__tray = this._init__tray.bind(this);

    // Event handlers
    this._keydownHandler = this._keydownHandler.bind(this);
    this._keyupHandler = this._keyupHandler.bind(this);
    this._navigateToUrl = this._navigateToUrl.bind(this);
    this._directLinkHandler = this._directLinkHandler.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this._init__trigger();
    this._init__tray();

    // Add a slotchange listeners to the lightDOM elements
    if (this.trigger)
      this.trigger.addEventListener("slotchange", this._init__trigger);
    if (this.tray) this.tray.addEventListener("slotchange", this._init__tray);
  }

  disconnectedCallback() {
    this.trigger.removeEventListener("slotchange", this._init);

    if (this.tray) {
      this.tray.removeEventListener("slotchange", this._init);

      this.removeEventListener("keydown", this._keydownHandler);
      this.removeEventListener("keyup", this._exit);

      this._trigger.removeEventListener("click", this.toggle);
      this._trigger.removeEventListener("keyup", this._keyupHandler);
    } else {
      this._trigger.removeEventListener("click", this._navigateToUrl);
      this._trigger.removeEventListener("keyup", this._directLinkHandler);
    }
  }

  _init__trigger() {
    // If no slots have been assigned, assign it to the trigger slot
    const unassigned = [...this.children].filter(
      child => !child.hasAttribute("slot")
    );
    unassigned.map(item => item.setAttribute("slot", "trigger"));

    // Get the LightDOM trigger & tray content
    this.trigger = this.querySelector(`[slot="trigger"]`);

    // Check the light dom for the link
    if (this.trigger) {
      this.directLink = this.trigger.querySelector("a");
      // Check the slotted content for the link if it can't be found
      if (!this.directLink && this.trigger.tagName === "SLOT") {
        let slottedContent = this.trigger.assignedNodes();
        if (slottedContent.length > 0 && slottedContent[0].tagName === "A") {
          this.directLink = slottedContent[0];
        }
      }

      // Turn off the fallback link if the tray does not exist
      if (this.directLink) {
        this.directLink.setAttribute("tabindex", "-1");
        this.linkUrl = this.directLink.href;
      } else {
        this.linkUrl = "#";
      }

      this._trigger.addEventListener("click", this._navigateToUrl);
      this._trigger.addEventListener("keyup", this._directLinkHandler);
    }
  }

  _init__tray() {
    // Get the LightDOM trigger & tray content
    this.tray = this.querySelector(`[slot="tray"]`);

    //-- Check for any nested navigation items
    // If a light DOM tray exists, check for descendents
    if (this.tray) {
      this.nestedItems = this.nestedItems.concat([
        ...this.tray.querySelectorAll(`${this.tag}`)
      ]);
      let array = [];

      // Search the tray for nested slots
      if (!window.ShadyCSS) {
        [...this.tray.querySelectorAll("slot")].forEach(slot => {
          [...slot.assignedElements()].forEach(node => {
            array = array.concat([...node.querySelectorAll(`${this.tag}`)]);
          });
        });
      }

      this.nestedItems = this.nestedItems.concat(
        array.filter(el => {
          return !this.nestedItems.includes(el);
        })
      );

      this._init__handlers();
    }
  }

  _init__handlers() {
    this._trigger.removeEventListener("click", this._navigateToUrl);
    this._trigger.removeEventListener("keyup", this._directLinkHandler);

    if (this._handlersAdded) {
      return;
    }

    // Toggle the navigation when the trigger is clicked
    this._trigger.addEventListener("click", this.toggle);

    // Attaching to the parent element allows the exit key to work inside the tray too
    this.addEventListener("keyup", this._exit);
    this.addEventListener("keydown", this._keydownHandler);

    this._trigger.addEventListener("keyup", this._keyupHandler);
    this._handlersAdded = true;
  }

  _navigateToUrl(event) {
    event.preventDefault();
    window.location.href = this.linkUrl;
  }

  _directLinkHandler(event) {
    let key = event.key || event.keyCode;
    switch (key) {
      case "Spacebar":
      case " ":
      case 32:
      case "Enter":
      case 13:
        this._navigateToUrl(event);
        break;
      default:
        return;
    }
  }

  _keydownHandler(event) {
    let key = event.key || event.keyCode;
    let clicked = event.path && event.path.length > 0 ? event.path[0] : this;

    switch (key) {
      case "Spacebar":
      case " ":
      case 32:
        if (!["INPUT", "TEXTAREA", "SELECT"].includes(clicked.tagName)) {
          event.preventDefault();
        }
        break;
    }
  }

  _keyupHandler(event) {
    let key = event.key || event.keyCode;
    let clicked = event.path && event.path.length > 0 ? event.path[0] : this;

    switch (key) {
      case "Spacebar":
      case " ":
      case 32:
        if (!["INPUT", "TEXTAREA", "SELECT"].includes(clicked.tagName)) {
          this.toggle(event);
        }
        break;
      case "Enter":
      case 13:
        if (!["A"].includes(clicked.tagName)) {
          this.toggle(event);
        }
        break;
    }
  }

  // Note: Escape will always exit the entire menu
  _exit(event) {
    let key = event.key || event.keyCode;
    switch (key) {
      case "Esc":
      case "Escape":
      case 27:
        this.close(event);
        break;
    }
  }
}

export default PfeNavigationItem;
