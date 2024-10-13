import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Customers");
  }
  async getHtml() {
    return `
    <div>
        <h2>Customers</h2>
        <p><strong>Welcome Manolin</strong>. This is a temporary Customers view</p>
    </div>
    `;
  }
}
