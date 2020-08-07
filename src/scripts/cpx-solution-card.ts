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

class CPXSolutionCard extends HTMLElement {
  static tag = 'cpx-solution-card';
  constructor() {
    super();
    this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));
  }
  
  connectedCallback() {
    
  }
}

window.customElements.define(CPXSolutionCard.tag,CPXSolutionCard);