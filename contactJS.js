
function movedot(e) {
    var dot = document.getElementById("dot");

    var cs = window.getComputedStyle(dot);
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);
    switch(e.keyCode) {
        case 37:
            if (left > 0)
                dot.style.marginLeft = left - 10+ "px";
            break;
        case 38:
                dot.style.marginTop = top - 10+ "px";
            break;
        case 39:
            if (left < document.documentElement.clientWidth - 100)
                dot.style.marginLeft = left + 10+ "px";
            break;
        case 40:
            if(top < document.documentElement.clientHeight - 100)
                dot.style.marginTop = top + 10+ "px";
            break;
    }
}
addEventListener("keydown", movedot);

function sendForm(f) {
    // ვიღებთ key ველის მნიშვნელობას
    var keyBox = document.search.key;
    var val = keyBox.value;
    if (val.length > 9) {
    alert("სტრიქონის სიგრძე არაა დასაშვები");
    f.preventDefault();
    }
    else
    alert("გაგზავნა ნებადართულია");
    }
var sendButton = document.search.send;
sendButton.addEventListener("click", sendForm);



function setColor(e){
    if (e.type === "mouseover")
        e.target.style.backgroundColor = "#71b7e6";
    else if (e.type === "mouseout")
        e.target.style.backgroundColor= "#9b59b6";
}

var blueRect = document.getElementById("blueRect");
blueRect.addEventListener("mouseover", setColor);

blueRect.addEventListener("mouseout", setColor);
