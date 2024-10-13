import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Orders View");
  }

  async getHtml() {
    console.log(this.params.id);
    return `
    <div>
        <h2>Order No: 00087-23</h2>
        <p>temporary order No.X view</p>
      </div>
    `;
  }
}
