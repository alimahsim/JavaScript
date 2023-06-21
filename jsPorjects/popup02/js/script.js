let open = document.querySelector(".pop-up"),
    close = document.querySelector(".pop-close"),
    pop = document.querySelector(".pop");

open.addEventListener("click", () =>{
    pop.style.display = "flex"
    document.body.style.overflowY = "hidden"
})

close.addEventListener("click", () =>{
    pop.style.display = "none"
    document.body.style.overflowY = ""
});