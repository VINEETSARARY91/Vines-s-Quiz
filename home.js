const h4tag = document.querySelectorAll('h4')
const start = document.querySelector('.start')
let opacitylevel = 0.1;
let intervalId;

function upadeteh4() {
   
   opacitylevel= opacitylevel + .1
   h4tag.forEach((e, ind) => {
   e.style.opacity = `${opacitylevel}`
   if(opacitylevel>=1){
   clearInterval(intervalId)
   console.log("clearInterval")
}

});
};
intervalId = setInterval(upadeteh4,100)

start.addEventListener('click', function (){
   window.location.href = "quiz.html"
});
