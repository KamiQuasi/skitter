const shareIco = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"><path class="a" d="M17.765,5.545l-4.5,4.25A.751.751,0,0,1,12,9.249V7c-4.518.03-6.424,1.1-5.149,5.355a.5.5,0,0,1-.781.542A6.015,6.015,0,0,1,3.75,8.417C3.75,3.919,7.425,3.026,12,3V.75A.751.751,0,0,1,13.265.2l4.5,4.25A.75.75,0,0,1,17.765,5.545ZM12,11.848V14H2V4H3.591a.375.375,0,0,0,.27-.115A6.092,6.092,0,0,1,5.456,2.707.375.375,0,0,0,5.282,2H1.5A1.5,1.5,0,0,0,0,3.5v11A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5V11.725a.375.375,0,0,0-.5-.353,2.245,2.245,0,0,1-1.068.106.376.376,0,0,0-.431.371Z" transform="translate(0 0)"/></svg>';
const bookmarkIco = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path class="a" d="M0,16V1.5A1.5,1.5,0,0,1,1.5,0h9A1.5,1.5,0,0,1,12,1.5V16L6,12.5Z"/></svg>';
const userClock = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13"><path class="a" d="M355.6,224a3.657,3.657,0,1,0,3.6,3.656,3.683,3.683,0,0,0-1.054-2.586A3.57,3.57,0,0,0,355.6,224Zm1.6,3.816a.246.246,0,0,1-.242.246h-1.515a.246.246,0,0,1-.242-.246v-1.945a.246.246,0,0,1,.242-.246h.315a.246.246,0,0,1,.242.246v1.379h.958a.246.246,0,0,1,.242.246Z" transform="translate(-343.2 -218.312)"/><path class="a" d="M5.6,6.5A3.225,3.225,0,0,0,8.8,3.25a3.2,3.2,0,1,0-6.4,0A3.225,3.225,0,0,0,5.6,6.5ZM8,9.344a4.51,4.51,0,0,1,.455-1.968,3.282,3.282,0,0,0-.615-.063H7.423a4.291,4.291,0,0,1-3.645,0H3.36A3.387,3.387,0,0,0,0,10.724v1.057A1.209,1.209,0,0,0,1.2,13H9.878A4.489,4.489,0,0,1,8,9.344Z" transform="translate(0 0)"/></svg>';
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
  _url = '#';
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
    let statusBlock = this.shadowRoot.querySelector('#status-block');
    statusBlock.className = 'status '+this._status;
    if (this._status) {
      if (this.shadowRoot.querySelector('#status')) {
        this.update('status', solutionStatusText[this._status]);
      } else {
        statusBlock.innerHTML = `<a id="status" href="#">${solutionStatusText[this.status]}</a> <span id="complete">${this.complete ? `${this.complete}% complete` : ''}</span>`;
      }
    } else {
      statusBlock.innerHTML = '&nbsp;';
    }
  }

  get url() {
    return this._url;
  }
  set url(val) {
    if (this._url === val) return;
    this._url = val;
  }

  get complete() {
    return this._complete;
  }
  set complete(val:any) {
    if (this._complete === parseInt(val)) return;
    this._complete = parseInt(val);
    this.update('complete', this.complete > 0 ? `${this.complete}% complete` : '');
    this.update('duration', this.complete > 0 ? `${Math.floor((this.complete/100)*this.duration)} minutes to go` : `${this.duration} minutes`);
  }

  get duration() {
    return this._duration;
  }
  set duration(val) {
    if (this._duration === val) return;
    this._duration = val;
    this.update('duration', this.complete ? `${Math.floor((this.complete/100)*this.duration)} minutes to go` : `${this.duration} minutes`);
  }

  get bookmark() {
    return this._bookmark;
  }
  set bookmark(val) {
    val = typeof val !== 'undefined' ? true : false;
    if (this._bookmark === val) return;
    this._bookmark = val;
    if (this._bookmark) {
      this.shadowRoot.querySelector('#bookmark').setAttribute('class', 'bookmarked');
    } else {
      this.shadowRoot.querySelector('#bookmark').setAttribute('class','');
    }
    
  }

  constructor() {
    super();
    this.template.innerHTML = `
      <style>
      :host {
        cursor: pointer;
        display: inline-block;
        box-shadow: 0px 3px 6px #00000029;
        --pfe-card--Padding: 16px;
      }
      :host:hover {
        cursor: pointer;
      }

      svg .a {
        fill: var(--blue);
      }

      ::slotted(h3) {
        margin-bottom: 4px;
      }

      ::slotted(h4) {
        color: #a5a6a7;
        font-size: 12px;
        margin-bottom: 16px;
      }

      ::slotted(hr) {
        margin-bottom: 16px;
      }

      ::slotted(p) {
        font-size: 16px;
        margin-bottom: 16px;
        line-height: 21px;
        margin-bottom: 10px;
      }
      pfe-card {
          position: relative;
      }

      pfe-cta {
        --pfe-cta--FontWeight: 400;
        font-size: 16px;
        line-height: 21px;
      }
      .personal { 
        float:right;
      }
      .personal a:first-child {
        margin-right: 14px;
      }
      #duration {
        position: absolute;
        bottom: 16px;
        right: 16px;
        color: #a5a6a7;
      }
      #bookmark .a {
        fill: #e5e5e5;
      }

      #bookmark.bookmarked .a {
        fill: var(--blue);
      }
      .status { font-size:10px; margin-bottom: 10px; }
      .in-progress #status { background-color: var(--blue); color: white; }
      .expired #status { background-color: var(--yellow); color: #3C3F42; }
      .complete #status { background-color: var(--red); color: white; }

      #complete {font-size:12px; color: var(--complete-color, #000); }
      .in-progress #complete { --complete-color: var(--blue); }
      .expired #complete { --complete-color: #333; }
      .complete #complete { --complete-color: var(--red); }

      </style>
      <pfe-card>
        <div class="personal"><a id="share" href="#">${shareIco}</a> <a id="bookmark" class="${this.bookmark ? 'bookmark' : ''}" href="#">${bookmarkIco}</a></div>
        <div id="status-block" class="status ${this.status}">${this.status ? `<a id="status" href="#">${solutionStatusText[this.status]}</a> <span id="complete">${this.complete ? `${this.complete}% complete` : ''}</span>`:'&nbsp;'}</div>
        <slot></slot>
        <pfe-cta slot="pfe-card--footer">
          <a href="#">${this.status ? 'Continue':'Get started'}</a>
        </pfe-cta>
        <div id="duration">${this.complete > 0 ? `${Math.floor((this.complete/100)*this.duration)} minutes to go ${userClock}` : `${this.duration} minutes ${userClock}`}</div>
      </pfe-card>
      `;    
    this.attachShadow({mode: 'open'}).appendChild(this.template.content.cloneNode(true));
  }
  
  connectedCallback() {
    this.addEventListener('click', e => { top.location.href=this.url; } );
  }

  static get observedAttributes() {
    return ['status', 'complete', 'duration', 'url', 'bookmark'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
      this[name] = newVal;
  }

  update(id, txt) {
    let ele = this.shadowRoot.querySelector(`#${id}`);
    if (ele) {
      ele.innerHTML = txt;
    }
  }

  
}

window.customElements.define(CPXSolutionCard.tag,CPXSolutionCard);