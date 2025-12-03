"use strict";
import { Header } from "./components/header.js";
import { About } from "./components/about.js";
import { Skills } from "./components/skills.js";
import { Contact, sendMassage } from "./components/contact.js";
import { events, buttons } from "./components/functions.js";
import { Projects } from "./components/projects.js";
import { Footer } from "./components/footer.js";
import { Hero } from "./components/hero.js";
import { content } from "../db/content.ar.js";

const App = () => {
  return `
    <header  id="header">${Header()}</header>
    <div class="hole">
      <section id="Hero">${Hero()}</section>
      <section id="about">${About()}</section>
      <section id="skills">${Skills()}</section>
      <section id="contact">${Contact()}</section>
      <section id="project">${Projects()}</section>
      <footer id="footer">${Footer()}</footer>
    </div>
`;
};

document.querySelector("body").innerHTML = App();

events();
buttons(content.projects.id);
