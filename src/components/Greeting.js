import { defineComponent } from "vue"
import { html } from "vue-sys"

class BasicCustomElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
          h1 {
            font-size: 2.5rem;
            color: orange;
            font-family: monospace;
            text-align: center;
            text-decoration: green solid underline;
            text-decoration-skip: ink;
          }
        </style>
        <h1>Hello!</h1>
      `
  }
}

window.customElements.define("hello-message", BasicCustomElement)

export default defineComponent({
  render() {
    return html`<hello-message />`
  }
})
