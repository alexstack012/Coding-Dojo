function nameChange() {
    document.getElementById("name").innerHTML = ('Rachel Greene');
    console.log("im at least getting this far")
}



function hide(element) {
    var bye = document.getElementById("toddprofile");
    bye.remove();

    subOne();
}

function hide2(element) {
    console.log("im working")
    var byebye = document.getElementById("philprofile");
    byebye.remove();

    subOne();
}


//bonus js functions and below


var i = 500;
var q = 2;
var asdf = document.querySelector("#number")
var qwerty = document.querySelector("#number2")

function addOne(number) {
    i++;
    asdf.innerText = i;
    hide();
}

function subOne(number) {
    i--;
    asdf.innerText = i;
    qwerty.innerText = q;
}

function aaddOne(number) {
    i++;
    asdf.innerText = i;
    hide2();
}

