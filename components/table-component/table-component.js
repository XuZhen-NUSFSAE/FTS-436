new gridjs.Grid({
  columns: ["Component", "Weight R25e", "Weight R26e", "Weight difference", "FOS"],
  data: [
    ["Front uprights (x2)", "688.3", "646.64", "-41.66", "2"],
    ["Front hubs (x2)", "722.2", "683.52", "-38.68", "2"],
    ["Front hub bearings (x4)", "436", "436", "0", "NA"],
  ],
}).render(document.getElementById("table-1"));

class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
