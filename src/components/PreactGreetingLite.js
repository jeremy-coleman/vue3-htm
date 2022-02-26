import * as Preact from "preact"
import { defineComponent } from "vue"
import { html } from "vue-sys"

const HelloMessage = ({ name = "World!" }) => Preact.createElement("p", null, `Hello, ${name}!`)

//from preact/compat
function unmountComponentAtNode(container) {
  if (container._children) {
    Preact.render(null, container)
    return true
  }
  return false
}

export function registerCustomElement(ComponentClass, tagName) {
  class E extends HTMLElement {
    connectedCallback() {
      this.renderElement()
    }
    attributeChangedCallback() {
      this.renderElement()
    }
    disconnectedCallback() {
      unmountComponentAtNode(this)
    }
    renderElement() {
      const props = [].slice.call(this.attributes).reduce((attrs, attr) => {
        attrs[attr.nodeName] = attr.nodeValue
        return attrs
      }, {})
      Preact.render(Preact.createElement(ComponentClass, { ...props }), this)
    }
  }
  return customElements.define(tagName || ComponentClass.displayName, E)
}

registerCustomElement(HelloMessage, "preact-message")

export default defineComponent({
  render() {
    return html`<preact-message name="bob2" />`
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
