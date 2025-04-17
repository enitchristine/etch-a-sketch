
function createBoard(num){
    board=document.createElement("div");
    // board.style.display="flex";
    for (let i=0; i<num;i++){
        const row=document.createElement("div");
        row.style.display="flex";
    
        for (let j=0; j<num;j++){
            //create new square and attach it to container
            const square=document.createElement("div");
            square.style.width="10px";
            square.style.height ="10px";
            square.style.backgroundColor= "black";
            square.addEventListener("mouseover",()=>{
                square.style.backgroundColor= "blue";
            })
    
            row.appendChild(square);
        }
        board.appendChild(row);
    }
    container.appendChild(board);
}


const container=document.querySelector(".container");
// container.style.display="flex";
// container.style.justifyContent="space-around";

const GRID_NUM=16;
let board;
createBoard(GRID_NUM);

const button=document.querySelector("button");
button.addEventListener("click",()=>{
    let input = prompt("What is the size? (e.g. 16)");
    container.removeChild(board);
    createBoard(input);
})