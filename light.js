const on = document.querySelector(".on")
const off = document.querySelector(".off")
const light = document.querySelector(".light-box")
const imgOn = document.querySelector(".img-on")
const imgOff = document.querySelector(".img-off")


on.addEventListener("click", () => {
    light == imgOn
    imgOn.style.display = "block"
    imgOff.style.display = "none"
    
})
off.addEventListener("click", () => {
    light == imgOff
    imgOn.style.display = "none"
    imgOff.style.display = "block"
})