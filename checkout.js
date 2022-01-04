
var atom = document.querySelector("#check");
var data = JSON.parse(localStorage.getItem("foodlist"));
data.forEach(function(elem)
{
    let ghenv =document.createElement("h1");
    ghenv.innerText = elem;
    atom.append(ghenv);

})