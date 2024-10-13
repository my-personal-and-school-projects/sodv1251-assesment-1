import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Orders");
  }
  async getHtml() {
    return `
    <div>
        <h2>Orders</h2>
        <p><strong>Welcome Manolin</strong>. This is a temporary Orders view</p>
    </div>
    `;
  }
}
