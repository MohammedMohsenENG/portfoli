"use strict";
import { content } from "../../db/content.ar.js";
import { optionList } from "./functions.js";

export const Contact = () => {
  return `

<h2 class="heading-secondary">contact me</h2>
<div class="container">

    <div class="left">
      <div class="contact-card contacting animated-card-a">
        <div>
          <p>phone number : 
             📞 ${content.accounts.links[4][0]}
           <br> 📞 ${content.accounts.links[4][1]}
        </p>
          <p class="button">
            Gmail ✉️ :
            <a href="${content.accounts.links[1]}" blank
              >${content.accounts.links[1]}</a
            >
          </p>
        </div>
      </div>
      <div class="massage">
      <h3 class="small-heading">work hours 📅</h3>
      <div>
      <h4>⌚ 24 H / 7️⃣ Days</h4>
      <p> Allways Ready To Have work 😎</p>

       <h4>call me now</h4>
      </div>
      </div>
    </div>
    <div class="right">
  
        <div class="massage">
          <h3 class="small-heading">massage me now</h3>
          <form action="send" method="post">
            <div class="form-body">
              <div class="form-control">
                <label for="name">name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name ..."
                  class="input"
                  id="name"
                  required
                />
              </div>
              <div class="form-control">
                <label for="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  class="input"
                  id="email"
                  required
                />
              </div>
              <div class="form-control">
                <label for="subject">subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter your Subject"
                  class="input"
                  id="subject"
                />
              </div>
              <div class="form-control">
                <label for="massage">massage</label>
                <input
                  type="text"
                  name="massage"
                  id="text"
                  placeholder="Enter your Massage"
                  class="input"
                  required
                />
              </div>
            </div>
          </form>
          <div class="actions">
            <button class="main-btn" id="submit" type="submit">send</button>
          </div>
        </div>
    </div>

     <div class="massage work">
<div>
          <h3 class="small-heading">you want a project</h3>
          <form action="send" method="post">
            <div class="form-body">
              <div class="form-control">
                <label for="name">name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name ..."
                  class="input"
                  id="workName"
                  required
                />
              </div>
              <div class="form-control">
                <label for="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  class="input"
                  id="workEmail"
                  required
                />
              </div>

              <div class="form-control">
                <label for="name">Project name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Project name ..."
                  class="input"
                  id="projectName"
                  required
                />
              </div>

              <div class="form-control">
                <label for="catgeory">catgeory</label>
                <input
                  type="text"
                  name="catgeory"
                  placeholder="select the category"
                  class="input"
                  id="category"
                  list="categories"
                  required
                />
              </div>
              ${optionList(content.autocomplete.options)}

              <div class="form-control">
                <label for="figmurl">figm url</label>
                <input
                  type="url"
                  name="figmurl"
                  placeholder="enter project url from figma "
                  class="input"
                  id="figmurl"
                  required
                />
              </div>

              <div class="form-control">
                <label for="pdfDesign">pdf design</label>
                <input
                  type="file"
                  name="pdfDesign"
                  placeholder="have you a pdf "
                  class="input"
                  id="pdfDesign"
                />
              </div>


              <div class="form-control">
                <label for="pictue">picture 1</label>
                <input
                  type="file"
                  name="pictue"
                  placeholder="picture 1"
                  class="input"
                  id="pictue"
                />
              </div>
              <div class="form-control">
                <label for="picture2">picture 2</label>
                <input
                  type="file"
                  name="picture2"
                  placeholder="picture 2"
                  class="input"
                  id="picture2"
                />
              </div>

              <div class="form-control">
                <label for="cost">cost</label>
                <input
                  type="number"
                  name="cost"
                  placeholder="cost"
                  class="input"
                  id="cost"
                  required
                />
              </div>
              
 
              <div class="form-control">
                <label for="notes">notes</label>
                <input
                  type="text"
                  name="notes"
                  placeholder="Enter your notes"
                  class="input"
                  id="notes"
                />
              </div>

              <div class="form-control">
                <label for="description">description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Enter your description"
                  class="input"
                  required
                />
              </div>
            </div>
          </form>
          <div class="actions">
            <button class="main-btn" id="submit" type="submit">send</button>
          </div>
        </div>
        </div>
</div>

      `;
};

export function sendMassage() {
  const button = document.getElementById("submit");

  button.addEventListener("click", () => {
    const massage = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      text: document.getElementById("text").value,
    };
    console.log(massage);
  });
}
