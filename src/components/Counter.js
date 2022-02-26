import { defineComponent, h, ref } from "vue"
import {html} from 'vue-sys'

const Counter = defineComponent({
  props: ["count"],
  data() {
    return {
      message: "example"
    }
  },
  setup() {
    const text = ref("")
    const test = (event) => {
      text.value = event.target.value
    }
    return {
      test,
      text
    }
  },
  render() {
    return html`<p>${this.count}</p>
      <label style="display: block;">${this.message}</label>
      <input value="${this.text}" onKeydown=${this.test} placeholder="edit me" />
      <p>${this.text}</p>`
  }
})

export default Counter
