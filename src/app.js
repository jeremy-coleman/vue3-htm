import { createApp, defineComponent, ref } from "vue"
import { html } from "vue-sys"
import PreactGreeting from "./components/PreactGreeting.js"
import ReactGreeting from "./components/ReactGreeting.js"
import HelloMessage from "./components/HelloMessage.js"
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
    PreactGreeting,
    ReactGreeting
  },
  render() {
    return html`
      <${HelloMessage} />
      <p>${this.count}</p>
      <button onClick=${this.increase}>increase</button>

      <${PreactGreeting} name="Friend#${this.count}" />
      <preact-element name="Friend#${this.count}" />

      <div>get these to work</div>
      <${ReactGreeting} recipient="Friend#${this.count}" />
      <react-message recipient="Friend#${this.count}" />
    `
  }
})

createApp(App).mount("#app")
