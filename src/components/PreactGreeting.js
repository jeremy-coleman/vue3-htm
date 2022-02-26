import * as Preact from "preact"
import { defineComponent } from "vue"
import { html } from "vue-sys"

const HelloMessage = ({ name = "World!" }) => Preact.createElement("p", null, `Hello, ${name}!`)

class PreactElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div")
    this.attachShadow({ mode: "open" }).appendChild(mountPoint)

    const name = this.getAttribute("name")
    Preact.render(Preact.createElement(HelloMessage, name), mountPoint)
  }
}

customElements.define("preact-element", PreactElement)

export default defineComponent({
  render() {
    return html`<preact-element />`
  }
})
