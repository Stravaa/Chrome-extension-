const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");

let myLeads = [];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = " ";

  renderLead();
});

function renderLead() {
  ulEl.innerHTML = "Leads :";
  for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += `
      <li>
        <a target='_blank' href='${myLeads[i]}'> 
        ${myLeads[i]}  
        </a>
    </li>`;
  }
}
