const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});
//dynamic text
const text = "MCA Student | Learning and Growing in Web Development";
let index=0;
function typeEffect(){
    if(index<text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

//smooth scroll 
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
//toggleMode
const modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", function(){
  document.body.classList.toggle("light-mode");
});
