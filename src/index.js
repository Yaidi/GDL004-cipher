const start = document.getElementById("save").addEventListener("click", getEncode);
//Inicia la función getEncode al hacer click en el botón con Id "save"
function getEncode(){
  let text = document.getElementById("text").value;
  //obtiene lo que el usuario escribió
  let mayus = text.toUpperCase();
  // Convierte lo que el usuario escribió y lo convierte a Mayúsculas
  let array = mayus.split("")
  let offset = parseInt(document.getElementById("number").value);
  // Obtiene el valor del offset para saber cuantas letras se desplaza
document.getElementById("textEncode").value = window.cipher.encode(mayus, offset);
//Da el resultado final del cifrado
}
function decode(){

}
