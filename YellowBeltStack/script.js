// function myFunc(#imgChange) {
//     var img = img.src = "#succulents-2.jpg";
// }
// img.onmouseover = myFunc;

// function myFunc2(element) {
//     var img = img.src = "#succulents-1.jpg";
// }
// img.onmouseout = myFunc2;

//no idea why this wouldnt work but i found the below code on a stackover question.


var img = document.getElementById("imgChange");
img.onmouseover = () => { img.src = "succulents-2.jpg"; }
img.onmouseout = () => { img.src = "succulents-1.jpg"; }


//above is the hover functions

var c = document.querySelector("#cookies");

function byebtn(element) {
    console.log("button is being pressed")
    c.remove();
}


//above is the remove alert button function