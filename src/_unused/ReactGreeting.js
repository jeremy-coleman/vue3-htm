import * as React from "react"
import * as ReactDOM from "react-dom"
import { defineComponent } from "vue"
import { html } from "vue-sys"

const ReactHelloMessage = ({ recipient = "friend" }) => React.createElement("p", null, `Hello, ${recipient}!`)

class ReactCustomElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div")
    this.attachShadow({ mode: "open" }).appendChild(mountPoint)

    const name = this.getAttribute("name")
    ReactDOM.render(React.createElement(ReactHelloMessage, name), mountPoint)
  }
}

customElements.define("react-element", ReactCustomElement)

export default defineComponent({
  render() {
    return html`<react-element name="not-friend-yet-still-friend-fuck" />`
  }
})
