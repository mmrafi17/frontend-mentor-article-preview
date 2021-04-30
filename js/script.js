const btnShare = document.querySelector("#btnShare");
const classBox = document.querySelector(".card__share");
const btnShareBack = document.querySelector("#btnShareBack");

btnShare.addEventListener("click", function (){
    
    if(classBox.classList.contains("open")){
        classBox.classList.remove("open");
    } else {
        classBox.classList.add("open");
    }

});


btnShareBack.addEventListener("click", function () {
   
    classBox.classList.add("open");

});
