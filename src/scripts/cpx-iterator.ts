const template = document.createElement('template');
template.innerHTML = `
<h1>${}
`;

class CPXIterator extends HTMLElement {
    static tag = 'cpx-iterator';

    constructor() {
        super();
    }

    connectedCallback() {

    }
}


window.customElements.define(CPXIterator.tag,CPXIterator);