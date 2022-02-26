import { default as htm } from "htm"
import { h } from "vue"

export * from "vue"

const html = htm.bind(h)

export { html }

//main purpose of this file is just so u dont have to do this in every vue file
//import { default as htm } from "htm"
//const html = htm.bind(h)