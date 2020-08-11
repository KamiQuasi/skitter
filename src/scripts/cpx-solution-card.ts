const shareIco = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"><defs><style>.a{fill:#1f99c5;}</style></defs><path class="a" d="M17.765,5.545l-4.5,4.25A.751.751,0,0,1,12,9.249V7c-4.518.03-6.424,1.1-5.149,5.355a.5.5,0,0,1-.781.542A6.015,6.015,0,0,1,3.75,8.417C3.75,3.919,7.425,3.026,12,3V.75A.751.751,0,0,1,13.265.2l4.5,4.25A.75.75,0,0,1,17.765,5.545ZM12,11.848V14H2V4H3.591a.375.375,0,0,0,.27-.115A6.092,6.092,0,0,1,5.456,2.707.375.375,0,0,0,5.282,2H1.5A1.5,1.5,0,0,0,0,3.5v11A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5V11.725a.375.375,0,0,0-.5-.353,2.245,2.245,0,0,1-1.068.106.376.376,0,0,0-.431.371Z" transform="translate(0 0)"/></svg>';
const bookmarkIco = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><defs><style>.a{fill:#1f99c5;}</style></defs><path class="a" d="M0,16V1.5A1.5,1.5,0,0,1,1.5,0h9A1.5,1.5,0,0,1,12,1.5V16L6,12.5Z"/></svg>';
const solutionStatusText = {
  "in-progress": "In progress", 
  "expired": "A dependency has expired",
  "complete": "Complete"
}

class CPXSolutionCard extends HTMLElement {
  static tag = 'cpx-solution-card';
  template = document.createElement('template');
  _id = '';
  _status = '';
  _bookmark = false;
  _complete = 0;
  _name = 'Unnamed Solution';
  _description = '';
  _lastChangeTimestamp: Date;
  _duration = 0;
  _categories: string[];
  _authors: string[];

  get status() {
    return this._status;
  }
  set status(val) {
    if (this._status === val) return;
    this._status = val;
    this.shadowRoot.querySelector('.status').className = 'status '+this._status;
    this.update('status', solutionStatusText[this._status]);
  }

  get complete() {
    return this._complete;
  }
  set complete(val) {
    if (this._complete === val) return;
    this._complete = val;
    this.update('complete', this.complete ? `${this.complete}% complete` : '');
    this.update('duration', this.complete ? `${Math.floor((this.complete/100)*this.duration)} minutes to go` : `${this.duration} minutes`);
  }

  get duration() {
    return this._duration;
  }
  set duration(val) {
    if (this._duration === val) return;
    this._duration = val;
    this.update('duration', this.complete ? `${Math.floor((this.complete/100)*this.duration)} minutes to go` : `${this.duration} minutes`);
  }

  constructor() {
    super();
    this.template.innerHTML = `
      <style>
      :host {
        cursor: pointer;
        display: inline-block;
        box-shadow: 0px 3px 6px #00000029;
      }
      :host:hover {
        cursor: pointer;
      }
      pfe-card {
          position: relative;
      }
      .personal { 
          position: absolute; 
          top: 32px;
          right: 32px;
      }
      
      .status { font-size:10px; }
      .in-progress #status { background-color: var(--blue); color: white; }
      .expired #status { background-color: var(--yellow); color: #3C3F42; }
      .complete #status { background-color: var(--red); color: white; }

      #complete {font-size:12px; color: var(--complete-color, #000); }
      .in-progress #complete { --complete-color: var(--blue); }
      .expired #complete { --complete-color: #333; }
      .complete #complete { --complete-color: var(--red); }

      </style>
      <pfe-card>
          <div class="status ${this.status}">${this.status ? `<a id="status" href="#">${solutionStatusText[this.status]}</a> <span id="complete">${this.complete ? `${this.complete}% complete` : ''}</span>`:'&nbsp;'}</div>
          <slot></slot>
          <pfe-cta slot="pfe-card--footer">
              <a href="#">Continue</a>
          </pfe-cta>
          <div id="duration">${this.complete ? `${Math.floor((this.complete/100)*this.duration)} minutes to go` : `${this.duration} minutes`}</div>
          <div class="personal"><a href="#">${shareIco}</a> <a  href="#">${bookmarkIco}</a></div>
      </pfe-card>
      `;    
    this.attachShadow({mode: 'open'}).appendChild(this.template.content.cloneNode(true));
  }
  
  connectedCallback() {
    this.addEventListener('click', e => console.log('Navigate'));
  }

  static get observedAttributes() {
    return ['status', 'complete', 'duration'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
      this[name] = newVal;
  }

  update(id, txt) {
    this.shadowRoot.querySelector(`#${id}`).innerHTML = txt;
  }

  
}

window.customElements.define(CPXSolutionCard.tag,CPXSolutionCard);