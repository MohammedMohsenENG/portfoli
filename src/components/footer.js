import {content} from "./../../db/content.ar.js"
import { List } from "./functions.js"
import { logo } from "./logo.js"
export const Footer =()=>{
    return `
    <div class="container">
      <div class="content"><ul class="list">${List(content.footer.links,content.footer.urls)}</ul></div>
      <div class="content">${logo()}</div>
      <div class="content"><ul class="list">${List(content.footer.names,content.footer.account)}</ul></div>
    </div>
    <div class="copy">Mohammed Mohsen 2026 &copy; copy right reserved </div>
    `
}