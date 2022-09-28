let base = [
    {id: 1, img: `./image 1.png`, title: `Syltherine`, subtitle: `Stylish cafe chair`},
    {id: 2, img: `./image 2.png`, title: `Leviosa`, subtitle: `Stylish cafe chair`},
    {id: 3, img: `./image 3.png`, title: `Lolito`, subtitle: `Luxury big sofa`},
    {id: 4, img: `./image 4 (1).png`, title: `Respira`, subtitle: `Minimalist fan`},
    {id: 5, img: `./image 5 (1).png`, title: `Grifo`, subtitle: `Night lamp`}, 
    {id: 6, img: `./image 6 (1).png`, title: `Muggo`, subtitle: `Small mug`},
    {id: 7, img: `./image 7.png`, title: `Pingky`, subtitle: `Cute bed set`}, 
    {id: 8, img: `./image 8.png`, title: `Potty`, subtitle: `Minimalist flower pot`}
]

let row = document.querySelector(".row")

const addCardsInRow = () => {
    base.forEach ((item)=>{
        row.innerHTML += `<div class="card" id="${item.id}" >
        <img class= "card__img" src="./${item.img}" alt="${item.subtitle}">
        <h1 class= "card__title">${item.title}</h1>
        <p class= "card__subtitle">${item.subtitle}</p>
        </div>`
    })
}
addCardsInRow()




let h2 = document.querySelector("h2")

h2.addEventListener("click",(event) => {
    base = [...base, {
        id: base[base.length -1].id +1,
        img: `./image 8.png`,
        title: `Potty`,
        subtitle: `Minimalist flower pot`,
        button: `delete`
    }]
    row.innerHTML = ""
    
    addCardsInRow();
})


document.querySelector(".delete").onclick = function(e){
    const btn = e.target.closest(".delete")
    if (!btn) {
        return;
    }
    btn.parentElement.remove();
    // row.innerHTML=""
}