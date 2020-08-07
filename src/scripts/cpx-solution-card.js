// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

"use strict";

// @ts-nocheck
/* eslint-disable */
let System, __instantiate;
(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };
  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }
  __instantiate = (m, a) => {
    System = __instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

"use strict";
const template = document.createElement('template');
template.innerHTML = `
<style>
pfe-card {
    position: relative;
}
.personal { 
    position: absolute; 
    top: var(--pfe-card--Padding);
    right: var(--pfe-card--PaddingRight);
}
</style>
<pfe-card>
    <div class="status"><a href="#">In Progress</a> 20% complete</div>
    <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
    <h4>Contributor Name | <pfe-datetime datetime="January 1, 2010" type="local" day="numeric" month="long" year="numeric" locale="en-gb">January 1, 2010</pfe-datetime></h4>
    <hr>
    <p>Et sint proident amet aliqua aliquip. Ut eu cupidatat anim et consectetur amet ut anim duis enim sunt sunt. Mollit aliqua aliqua tempor velit nisi aute mollit Lorem aute. Sit magna ipsum velit occaecat velit deserunt quis. Adipisicing nulla do occaecat non. Dolor quis irure irure in proident qui.</p>
    <pfe-cta slot="pfe-card--footer">
        <a href="#">Continue</a><div class="duration">30 minutes to go</div>
    </pfe-cta>
    <div class="personal"><a href="#">Share</a> <a href="#">Bookmark</a></div>
</pfe-card>
`;
let CPXSolutionCard = (() => {
    class CPXSolutionCard extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
        }
        connectedCallback() {
        }
    }
    CPXSolutionCard.tag = 'cpx-solution-card';
    return CPXSolutionCard;
})();
window.customElements.define(CPXSolutionCard.tag, CPXSolutionCard);

__instantiate("cpx-solution-card", false);
