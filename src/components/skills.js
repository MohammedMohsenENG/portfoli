"use strict";
import { content } from "./../../db/content.ar.js";
import { progress } from "./functions.js";

export const Skills = () => {
  return `
    <h2 class="heading-secondary">what can i do?</h2>
    <div class="container">
        ${skill()}
    </div>
    `;
};

function skill() {
 let html = ``;
  for (let i = 0; i < content.skills.names.length; i++) {
    html =
      html +
      ` <div class="skill animated-card-a">
        <div>
            <h3 class="small-heading">${content.skills.names[i]}</h3>
            <div class="image">
                <img 
                  src="${content.skills.pictures[i]}"
                  alt="picture of ${content.skills.names[i]}"
                 />
            </div>
            <h4 class="progress">
              ${content.skills.progress[i]}%${progress(content.skills.progress[i])}
            </h4>
            <p>${content.skills.describtion[i]}</p>
        </div>
    </div> 
    `;
  }
  return html;
}
