import { createApp, defineComponent, ref } from "vue"
import { html } from "vue-sys"
import Counter from "./components/Counter.js"
import Greeting from "./components/Greeting.js"
import PreactGreeting from "./components/PreactGreeting.js"
import PreactGreetingLite from "./components/PreactGreetingLite.js"
import ReactGreeting from "./components/ReactGreeting.js"
import ReactGreeting2 from "./components/ReactGreeting2.js"

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
      <${ReactGreeting} />
      <${ReactGreeting2} />
      <${PreactGreetingLite} />
    `
  }
})

createApp(App).mount("#app")
