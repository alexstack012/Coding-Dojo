var times = 9;
var times2 = 12;
var times3 = 9;



function buttonClicker(element) {
    // console.log("you clicked me" + times + "times!");

    if (element.id == "clickMe") {
        ++times;
        document.querySelector("#numlikesb1").innerHTML = times + " like(s)";
    }
    if (element.id == "clickMe2") {
        ++times2;
        document.querySelector("#numlikesb2").innerHTML = times2 + " like(s)";
    }
    if (element.id == "clickMe3") {
        ++times3;
        document.querySelector("#numlikesb3").innerHTML = times3 + " like(s)";
    }
    //    console.log(element.id)
}

