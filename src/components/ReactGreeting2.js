import * as React from "react"
import * as ReactDOM from "react-dom"
import { defineComponent } from "vue"
import { html } from "vue-sys"

export function registerCustomElement(ComponentClass, tagName) {
  class E extends HTMLElement {
    connectedCallback() {
      this.renderElement()
    }
    attributeChangedCallback() {
      this.renderElement()
    }
    disconnectedCallback() {
      ReactDOM.unmountComponentAtNode(this)
    }
    renderElement() {
      const props = [].slice.call(this.attributes).reduce((attrs, attr) => {
        attrs[attr.nodeName] = attr.nodeValue
        return attrs
      }, {})
      ReactDOM.render(React.createElement(ComponentClass, { ...props }), this)
    }
  }
  return customElements.define(tagName || ComponentClass.displayName, E)
}

const ReactHelloMessage = ({ recipient = "friend2" }) => React.createElement("p", null, `Hello, ${recipient}!`)

registerCustomElement(ReactHelloMessage, "react-message")

export default defineComponent({
  render() {
    return html`<react-message recipient="friend33" />`
  }
})
