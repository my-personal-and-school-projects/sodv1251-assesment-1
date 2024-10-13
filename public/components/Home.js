import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }
  async getHtml() {
    return `
    <div>
        <h2>Home</h2>
        <p><strong>Welcome Manolin</strong>. This is a temporary Home Page</p>
    </div>
    `;
  }
}
