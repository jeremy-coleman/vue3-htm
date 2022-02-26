import { default as htm } from "htm"
import { h } from "vue"

export * from "vue"

const html = htm.bind(h)

export { html }
