const form = document.getElementById("registroForm");

form.addEventListener("submit", function (event) {
event.preventDefault()
    
const nombre = form.nombre.value.trim(); 
const fecha = form.fecha.value.trim(); 
const email = form.email.value.trim(); 
const celular = form.celular.value.trim(); 
const mensaje = form.mensaje.value.trim(); 
const pais = form.pais.value.trim();  

if((nombre != null) && (fecha != null)  && (email != null) && (celular != null) && (mensaje != null) && (pais != null)){
    alert("¡Bienvenido/a, "+ nombre + "!Gracias por compeltar el formulario!");
 } else {
    alert("Por favor, completa todos los campos.");
}
})
