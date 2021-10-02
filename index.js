var textInput = document.querySelector("#text");

var output = document.querySelector("#morse");

var button = document.querySelector("#button");
// var
var URL = "https://api.funtranslations.com/translate/morse.json";

function errorHandler(error){
    console.log(error.message);
    alert("Server is Down, please try again later");
}

function changeHandler(){
    var visitURL = URL +"?text=" + textInput.value;

    fetch(visitURL).then(response => response.json()).then(json => {
        output.innerText =  json.contents.translated;}).catch(errorHandler);
}
button.addEventListener("click",changeHandler);
