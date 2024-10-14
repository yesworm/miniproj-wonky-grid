const section = document.querySelector("section");
const slides = section.querySelectorAll("div");

let index = 0

let pattern = [
    [4, 5, 2, 0, 0, 0],
    [3, 4, 2, 5, 0, 0],
    [0, 3, 4, 2, 0, 0],
    [0, 2, 3, 2, 1, 0],
    [0, 0, 2, 4, 3, 2],
    [0, 0, 0, 1, 2, 1],
]

const nextSlide = () => {
    index += 1
    index %= pattern.length

    section.style.gridTemplateColumns = pattern[index].map((p) => {
        return `${p}fr`
    }).join(" ")

    slides.forEach((slide, slideIndex) => {
        if (pattern[index][slideIndex] === 0) {
            slide.classList.add("hide")
        } else {
            slide.classList.remove("hide")
        }
    })
}

section.addEventListener("click", nextSlide)
