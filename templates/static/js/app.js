const links = document.querySelectorAll('.link')

links[0].onclick = () => {
    document.querySelector('.about').scrollIntoView({
        behavior: "smooth",
    })
}
links[1].onclick = () => {
    document.querySelector('.order').scrollIntoView({
        behavior: "smooth",
    })
}
links[2].onclick = () => {
    document.querySelector('.trust').scrollIntoView({
        behavior: "smooth",
    })
}
links[4].onclick = () => {
    document.querySelector('.cost').scrollIntoView({
        behavior: "smooth",
    })
}
links[3].onclick = () => {
    document.querySelector('.contact').scrollIntoView({
        behavior: "smooth",
    })
}

const buttons = document.querySelectorAll('.btn')

for (let i = 0; i < buttons.length; i++){
    buttons[i].onclick = () => {
        document.querySelector('.contact').scrollIntoView({
        behavior: "smooth",
    })
    }
}
