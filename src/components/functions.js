import { content } from "../../db/content.ar.js";

export const List = (Array, url) => {
  let text = ``;
  for (let i = 0; i < Array.length; i++) {
    text =
      text +
      ` <li ><a class="item button" href='${url[i]}'>${Array[i]}</a></li>`;
  }
  return text;
};

export const optionList = (Array) => {
  let text = ` <option class='option'>${Array[0]}</option>`;
  for (let i = 1; i < Array.length; i++) {
    text = text + ` <option class='option'>${Array[i]}</option>`;
  }
  return `<datalist id="categories" class='datalist'>${text}</datalist>`;
};

export const events = () => {
  // the drop down in header
  let button = document.getElementById("btn");
  let button_x = document.getElementById("btn-X");
  let list = document.querySelector(".dropDown-list");

  button.addEventListener("click", () => {
    console.log("click");
    list.classList.remove("hide");
    button.classList.add("hide");
    button_x.classList.remove("hide");
  });

  button_x.addEventListener("click", () => {
    list.classList.add("hide");
    button_x.classList.add("hide");
  });
};

// add space to begiin of the statment
export const Space = () => {
  return `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
};

// progress
export const progress = (present) => {
  return `
    <div>
      <span style="width : ${present}%"></span>
    </div>
    `;
};

export const buttons = (ar) => {
  for (let i = 0; i < ar.length; i++) {
    let popup, button;
    let popBtn = document.getElementById(`btn-pop${ar[i]}`);
    let overlay = document.getElementById(`overlay${ar[i]}`);
    button = document.querySelector(`.seeMore${ar[i]}`);
    popup = document.querySelector(`.popup${ar[i]}`);
    button.addEventListener("click", () => {
      popup.classList.remove("hide");

      function hide() {
        popup.classList.add("hide");
      }
      popBtn.addEventListener("click", hide);
      overlay.addEventListener("click", hide);
    });
  }
};
