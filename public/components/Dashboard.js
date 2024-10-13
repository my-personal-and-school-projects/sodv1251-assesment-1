import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }
  async getHtml() {
    return `
    <div>
        <h2>Dashboard</h2>
        <p><strong>Welcome Manolin</strong>. This is a temporary dashboard</p>
    </div>
    `;
  }
}
