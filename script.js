let elem = document.querySelectorAll(".elem")
let elemImg = document.querySelectorAll(".elem img")

elem.forEach((eachElem, index) => {
    console.log(index)
    // eachElem.style.position = "relative"
    eachElem.style.position = "relative";
    // eachElem.children[1].style.position = "absolute"; // Ensure the image can be positioned correctly
    // eachElem.children[1].style.transition = "opacity 0.3s, left 0.3s, top 0.3s"; // Smooth transition

    eachElem.addEventListener("mouseenter", () => {
        console.log(index)
        eachElem.children[1].style.opacity = "1";
    })
    eachElem.addEventListener("mouseleave", () => {
        eachElem.children[1].style.opacity = "0";

    })
    eachElem.addEventListener("mousemove", (dets) => {
        // console.log(dets.y)
        eachElem.children[1].style.left = (dets.offsetX) + "px";
        eachElem.children[1].style.top = (dets.offsetY) + "px";
    })
})

// let elem = document.querySelectorAll(".elem");

// elem.forEach((eachElem) => {
//     let img = eachElem.querySelector("img"); // Assuming there's only one image per .elem

//     eachElem.style.position = "relative";
//     img.style.position = "absolute"; // Ensure the image can be positioned correctly
//     img.style.transition = "opacity 0.3s, left 0.3s, top 0.3s"; // Smooth transition

//     eachElem.addEventListener("mouseenter", () => {
//         img.style.opacity = "1";
//     });

//     eachElem.addEventListener("mouseleave", () => {
//         img.style.opacity = "0";
//     });

//     eachElem.addEventListener("mousemove", (dets) => {
//         img.style.left = (dets.offsetX) + "px"; // Use offsetX and offsetY for relative positioning
//         img.style.top = (dets.offsetY) + "px";
//     });
// });
