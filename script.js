const loading = document.getElementById('loading');
const submitBtn = document.querySelector("body > main > section button");


window.addEventListener("DOMContentLoaded", function(){
    loading.style.opacity = 0;

    setTimeout(() => {
        loading.style.display = "none";
    }, 500)
});

submitBtn.addEventListener("click",() => {
    const input = document.getElementById('Nom');
    const colorInput = document.getElementById("Couleur");

    if (input.value !== "" && colorInput.value !== ""){
        ColorBoxClick(colorInput.value, input.value + ` { ${colorInput.value} }`)
    }else{
        input.focus();
    }
});

function ColorBoxClick(color, nom){
    const Box = document.getElementById('ColorBox');
    const contentBox = document.querySelector("#ColorBox > div")
    const closeBtn = document.querySelector("#ColorBox > span");
    const colorBox = document.querySelector("#ColorBox > div > div");
    const ColorName = document.querySelector("#ColorBox > div > span");

    ColorName.innerText = nom;

    if(color !== "#ffffff"){
        contentBox.style.backgroundColor = "white";
    }else{
        contentBox.style.backgroundColor = "black";
    };
    
    colorBox.style.backgroundColor = color;
    Box.style.display = "grid";

    closeBtn.addEventListener("click", function handler(){
        Box.style.display = "none";
        closeBtn.removeEventListener("click", handler);
    });
}