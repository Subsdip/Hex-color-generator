const color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const a = document.querySelector(".feed");
const b = document.querySelector(".clk");

b.addEventListener('click', ()=> {
    let hc = "#"
    for(i=0;i<6;i++)
    {
        hc += color[getRandomNumber()];
    }
    document.body.style.backgroundColor = hc;
    a.innerHTML = hc;
})

function getRandomNumber(){
    return Math.floor(Math.random() * color.length);
}