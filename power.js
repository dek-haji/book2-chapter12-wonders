
// const powerList = document.querySelectorAll(".power");
// for(let i = 0; i < powerList.length; i++){
//     powerList.item(1).addEventListener("click", flightHandler() )
// }



let flightHandler = () => {
    document.querySelector(".power").classList.remove("disabled")
    document.querySelector(".power").classList.add("enabled")
    
}



const readingHandler = () => {
    document.querySelector("#mindreading").classList.remove("disabled")
    document.querySelector("#mindreading").classList.add("enabled")
    
}

const visionHandler = () => {
    document.querySelector("#xray").classList.remove("disabled")
    document.querySelector("#xray").classList.add("enabled")
    
}


document.querySelector("#activate-flight").addEventListener("click",flightHandler());
document.querySelector("#activate-mindreading").addEventListener("click",readingHandler());
document.querySelector("#activate-xray").addEventListener("click",visionHandler())

console.log(document.querySelectorAll(".power"))