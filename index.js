const imageContainerEl = document.querySelector(".image-container")
const btnEl = document.querySelector(".btn")

btnEl = document.addEventListener("click" , () =>{
    imageNum = 10;
    addNewImages()
});
for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement("img")

    newImgEl.src = `https://picsum.photos/300?random=${(Math.floor(Math.random() * 2000)}`;

imageContainerEl.appendChild
(newImgEl);
    
}
function addNewImages() {
    const newImgEl = document.createElement("img")

    newImgEl.src = `https://picsum.photos/300?random=${(Math.floor(Math.random() * 2000)}`;

imageContainerEl.appendChild
(newImgEl)
}
