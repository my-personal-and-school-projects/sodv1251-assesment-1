import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Promotions");
  }

  async getHtml() {
    console.log(this.params.id);
    return `
    <div>
        <h2>Current Promotions</h2>
        <p>temporary Promotions view</p>
      </div>
    `;
  }
}
