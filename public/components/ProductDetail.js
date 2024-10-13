import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Product Details");
  }

  async getHtml() {
    console.log(this.params.id);
    return `
    <div>
        <h2>Product No: 22/h2>
        <p>temporary product No.X view</p>
      </div>
    `;
  }
}
