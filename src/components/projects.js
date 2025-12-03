import { content } from "./../../db/content.ar.js";
export const Projects = () => {
  return `
    <h2 class="heading-secondary">${content.heading.projects}</h2>
    <div class="container sliders">
        ${project()}
    </div>
    `;
};

export let slides = {
  picList: [],
  picNow: 1,
  goRight: function () {},
  goLeft: function () {},
  autoSlide: function () {},
};

function project() {
  let html = ``;
  for (let i = 0; i < content.projects.names.length; i++) {
    html =
      html +
      ` 
        <div class="project">
          <h3 class="small-heading">${content.projects.names[i]}</h3>
          <div class="image">
            <img src="${content.projects.pictures[i]}" alt="${content.projects.names[i]}" />
          </div>
          <button type="button" class="pop seeMore${content.projects.id[i]} button">see more</button>
        </div>

        <div class="popup${content.projects.id[i]}   hide">
          <div id="overlay${content.projects.id[i]}" class='overlay'>
              <div class='popo'>
              <h3 class="small-heading">${content.projects.names[i]}</h3>
              <div class="image">
                <img src="${content.projects.pictures[i]}" alt="${content.projects.names[i]}" />
              </div>
              <div class="details">${content.projects.details[i]}</div>
              <div class="tecnics">${content.projects.ticnics[i]}</div>
              <button class="button">
                <a href="${content.projects.links[i]}">visit</a>
              </button>
            </div>
              <button id="btn-pop${content.projects.id[i]}" class="pop-btn humburger-btn ">
                <span class="span-1"></span>
                <span class="span-2"></span>
              </button>
            </div>    
        </div>
    `;
  }
  return html;
}
