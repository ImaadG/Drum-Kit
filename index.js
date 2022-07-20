// document.querySelectorAll("button").addEventListener("click", function () {
//     alert("I got clicked!");
// });
//safer to use drum instead of button incase we add more button to other elements
for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        //alert("I got clicked!");

        var buttonInnerHTML = this.innerHTML; //stores the html element that is clicked

            switch(buttonInnerHTML){
                case "w":
                    var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    break
                case 'a':
                    var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;
                case 's':
                    var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                    break;
                case 'd':
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
                case 'j':
                    var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;
                case 'k':
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
                case 'l':
                    var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break;
                default:
            }
    });
}

