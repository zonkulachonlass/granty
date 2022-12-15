var randomlinks = [];
randomlinks[0]="https://granty.ga/granty.png";
randomlinks[1]="https://granty.ga/grant.png";

function randomlink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}
