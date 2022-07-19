// document.querySelectorAll("button").addEventListener("click", function () {
//     alert("I got clicked!");
// });
//safer to use drum instead of button incase we add more button to other elements
for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        //alert("I got clicked!");

        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        this.style.color = "#fff";
    });
}

