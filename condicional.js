velocidad=Number(prompt("cual es la velocidad inicial(m/s2)"))
posicion=Number(prompt("A que altura desea llegar? (m)"))
let t=(0-velocidad)/(0-9.8)
let desplazamiento=(velocidad*t)-((9.8*t*t)/2)
if (desplazamiento >= posicion) {
    respuesta= "El proyectil logra llegar a la altura deseada."
} else{
    respuesta= "El proyectil no logra llegar a la altura deseada."
}
document.getElementById("conclusion").innerHTML=respuesta
