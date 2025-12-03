import { List } from "./functions.js";
import { content } from "./../../db/content.ar.js"
import { logo } from "./logo.js";

export const Header = () => {

  return (`

  <nav class="nav_bar">
  <ul class='mainMenu menu'>
  ${List(content.localLinks.names, content.localLinks.urls)}
  </ul>
${logo()}

    <button id="btn" class="humburger-btn button  hide">
    <span></span>
    <span></span>
    <span></span>
  </button>
  
  <div class="dropDown-list hide">

  
  <ul class='smallMenu menu'>
  <button id="btn-X" class="humburger-btn hide">
    <span class="span-1"></span>
    <span class="span-2"></span>
  </button>
  
  ${List(content.localLinks.names, content.localLinks.urls)}
  </ul>
  </div>

  </nav>

`);

}
