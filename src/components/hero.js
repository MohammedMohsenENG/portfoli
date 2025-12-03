import { content } from "../../db/content.ar.js";

export const Hero = () => {

  return `
  <div class="contacting animated-card-a">
    <div>
      <p>phone number : <br>${content.accounts.links[4][0]} | ${content.accounts.links[4][1]}</p>
      <p class="button">gmail : <a href="${content.accounts.links[1]}" blank>${content.accounts.links[1]}</a></p>
    </div>
  </div>
  
  <div class="hero">
    <div class="profile">
      <img src="${content.pictures.profile.url}" alt="${content.pictures.profile.alt}"></img>
    </div>
    <div class="heading">
      <h1>${content.profile.name}</h1>
      <h2>${content.profile.work}</h2>
    </div>
  </div>

  <div class="actions">
    <button class="button main-btn"><a href="${content.localLinks.content}">Have awork</a></button>
    <button class="btn button main-btn"><a href="${content.localLinks.content}">say hi</a></button>
  </div>

`
}