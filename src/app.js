import { createApp, defineComponent, ref } from "vue"
import { html } from "vue-sys"
import Counter from "./components/Counter.js"
import Greeting from "./components/Greeting.js"
import PreactGreeting from "./components/PreactGreeting.js"

const App = defineComponent({
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
    Counter,
    Greeting,
    PreactGreeting
  },
  render() {
    return html`
      <p>${this.count}</p>
      <${Counter} count=${this.count} />
      <button onClick=${this.increase}>increase</button>
      <${Greeting} />
      <${PreactGreeting} />
    `
  }
})

createApp(App).mount("#app")