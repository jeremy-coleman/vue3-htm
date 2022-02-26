import { default as htm } from "htm"
import { h } from "vue"

export * from "./vue@3.2.31"

const html = htm.bind(h)

export { html }
