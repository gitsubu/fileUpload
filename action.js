if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

function ready(){
    console.log("inside ready function");
    document.getElementById("pick-btn").addEventListener("click", () =>{
        color_picked = document.getElementById("pickcolor").value;
        document.getElementById("body").style.color = color_picked;
    });
    
    document.getElementById("search").addEventListener("input", () =>{
        console.log(document.getElementById("search").value);

    });
}