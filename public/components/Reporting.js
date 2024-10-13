import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Reporting");
  }

  async getHtml() {
    console.log(this.params.id);
    return `
    <div>
        <h2>Reports</h2>
        <p>temporary Reporting view</p>
      </div>
    `;
  }
}
