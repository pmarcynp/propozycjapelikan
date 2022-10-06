var ikony = document.querySelectorAll(".imageicon")

var imgarray = []

var leftchange = document.getElementById("leftchange").addEventListener("click" , (wyswietlacz, leftchange, e) => {
    var wyswietlacz = document.getElementById("imageready")
    arrnr = imgarray.indexOf(wyswietlacz.getAttribute("src"))

    if(arrnr == 0) {
        wyswietlacz.setAttribute("src", imgarray[imgarray.length -1]) 
    } else {
        wyswietlacz.setAttribute("src", imgarray[arrnr - 1])
    }
})
var rightchange = document.getElementById("rightchange").addEventListener("click" , (wyswietlacz, leftchange, e) => {
    var wyswietlacz = document.getElementById("imageready")
    arrnr = imgarray.indexOf(wyswietlacz.getAttribute("src"))
    wyswietlacz.setAttribute("src", imgarray[arrnr + 1])
})

ikony.forEach((ikony, i) => {
    ikony.addEventListener("click", ()=> {
        var source = ikony.getAttribute("src")
        document.getElementById("imageready").setAttribute("src", source)
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 100);
    })

    imgarray.push(ikony.getAttribute("src"))
})