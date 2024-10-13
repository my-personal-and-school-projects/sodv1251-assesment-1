import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Inventory");
  }
  async getHtml() {
    return `
    <div>
        <h2>Inventory</h2>
        <p><strong>Welcome Manolin</strong>. This is a temporary Inventory view</p>
    </div>
    `;
  }
}
