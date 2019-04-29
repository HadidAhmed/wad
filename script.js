/*
https://developer.mozilla.org/en-US/docs/Web/Events
https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

/*var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("mouseenter",function () {
    console.log("mouse entered !")
})*/

var button = document.getElementById("enter");

var input = document.getElementById("user-input");

var ul = document.getElementsByTagName("ul")[0];



function add(){
    var li = document.createElement("li");
    li.append(document.createTextNode(input.value));
    ul.append(li);
    input.value='';
}
function afterclick(){
        if(input.value.length>0 ) {
            add();

        }

}
function afterpress(e){
    if(getlength() && e.which === 13 ) {
        add();
    }
}

 function getlength(){
     if(input.value.length > 0){
         return true;
     }
     else{
         return false;
     }
 }
button.addEventListener("click",afterclick);
input.addEventListener("keypress",afterpress);

