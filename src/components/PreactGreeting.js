import * as Preact from "preact"
import register from 'preact-custom-element'
import { defineComponent } from "vue"
import { html } from "vue-sys"

const HelloMessage = ({ name = "World!" }) => Preact.createElement("p", null, `Hello, ${name}!`)

//the third arg is props. it can also be automatically infered from propTypes.
//there is a vscode extension for flow or javascript (no typescript) that has really good automatic propType generation

register(HelloMessage, 'preact-element', ['name']);

export default defineComponent({
  render() {
    return html`<preact-element name="bob"/>`
  }
})

//you can also do this, but then the custom element wont accept props, which means we cant pass them through vue

// class PreactElement extends HTMLElement {
//   connectedCallback() {
//     const mountPoint = document.createElement("div")
//     this.attachShadow({ mode: "open" }).appendChild(mountPoint)

//     const name = this.getAttribute("name")
//     Preact.render(Preact.createElement(HelloMessage, name), mountPoint)
//   }
// }
// customElements.define("preact-element", PreactElement)