import { createApp, ref, defineComponent, h } from "vue"
import { html } from "vue-sys"

import Counter from "./components/Counter.js"

const Child = defineComponent({
  setup() {
    const count = ref(0)
    const increase = () => {
      count.value++
    }
    return {
      count,
      increase
    }
  },
  components: {
    Counter
  },
  render() {
    return html` <p>${this.count}</p>
      <${Counter} count=${this.count} />
      <button onClick=${this.increase}>increase</button>`
  }
})

createApp(Child).mount("#app")
