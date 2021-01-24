if(localStorage.getItem("accept") != "true"){
    document.querySelector("#cardie").style.display="inline"
}
AOS.init();
particlesJS.load('particles-js', 'assets/particles.json', function() {});
document.getElementById("accept").addEventListener("click", () => {
    document.getElementById("cardie").classList.add("fade")
    document.querySelector("#cardie").style.display="none"
    localStorage.setItem("accept","true");
})
console.log(localStorage.getItem("accept")=="true");

