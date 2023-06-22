let count = 1;
function right(){
    document.querySelector("#right").style.display = "initial" ;
    document.querySelector('#right_comp').style.display = "none";
}
function add(){
    
    const content = prompt("Enter your work");
    if(content != null && content != ""){
        const elmt = document.createElement("div");
        elmt.class = 'list'; 
        elmt.innerHTML = ` ${count++} ${content} <button onclick = completed(this) style="float: right;"> Completed </button> 
                            <button onclick = remove(this) style="float: right;"> Remove </button>`;
        elmt.style.color = "red";
        elmt.style.fontSize = "18px";
        elmt.style.backgroundColor = "black";
        elmt.style.padding = '1%';
        elmt.style.margin = '5px';
        elmt.style.textAlign = "center";

        document.querySelector('#todolists').appendChild(elmt);
    }
}
function remove(e){
    e.parentElement.remove();
}
// ----
function complete(){
    document.querySelector("#right").style.display = "none" ;
    document.querySelector('#right_comp').style.display = "initial";
}
function completed(e){
    e.parentElement.remove();
    e.parentElement.style.color = "white";
    e.parentElement.style.fontSize = "20px";
    e.parentElement.style.fontWeight = "bold";
    document.querySelector("#Completedlists").appendChild(e.parentElement);
    e.remove();
    
}



