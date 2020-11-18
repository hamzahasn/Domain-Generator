/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our", "a", "thee", "your"];
  var adj = ["scary", "terrifying", "horrific", "frightening", "spooky"];
  var noun = ["dracula", "frankenstein", "werewolf", "ghost", "mummy", "ghoul"];

  var domain = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let newDomain = pronoun[i] + adj[j] + noun[k] + ".com";
        domain.push(newDomain);
      }
    }
  }
  console.log(domain);
  let ul = document.querySelector("#domain-list");
  ul.innerHTML = buildList(domain);
};

function buildList(list) {
  return list
    .map(item => {
      return "<li>" + item + "</li>";
    })
    .join("");
}
