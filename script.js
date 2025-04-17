
const container=document.querySelector(".container");
// container.style.display="flex";
// container.style.justifyContent="space-around";

const GRID_NUM=16;

for (let i=0; i<GRID_NUM;i++){
    const row=document.createElement("div");
    row.style.display="flex";

    for (let j=0; j<GRID_NUM;j++){
        //create new square and attach it to container
        const square=document.createElement("div");
        square.style.width="50px";
        square.style.height ="50px";
        square.style.backgroundColor= "black";
        square.addEventListener("mouseover",()=>{
            square.style.backgroundColor= "blue";
        })

        row.appendChild(square);
    }
    container.appendChild(row);

}