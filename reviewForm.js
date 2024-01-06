let rating = document.querySelector('.rating-container');
document.body.style.pointerEvents

for (const child of rating.children) {
    child.addEventListener("click", (event)=>{
        let target = event.target;
        let id = target.getAttribute('id');
        id = id.slice(id.indexOf('-')+1);
        for (let index = 5; index > id; index--) {
            document.getElementById(`rating-${index}`).style.color = 'black';
        }
        for (let index = 1; index <= id; index++) {
            document.getElementById(`rating-${index}`).style.color = 'orange';
        }
    })
}

