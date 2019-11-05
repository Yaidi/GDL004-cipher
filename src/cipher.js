window.cipher = {
  encode (mayus, offset){
  let result = "";
  for (i = 0; i < mayus.length; i++){
    let encodeText = (mayus.charCodeAt(i) - 65 + offset) % 26 + 65;

    let ascii = String.fromCharCode(encodeText);
    result += ascii.replace(";", " ");


  }
  return result
}
}
decode (mayus, offset){
let result = "";
for (i = 0; i < mayus.length; i++){
  let encodeText = (mayus.charCodeAt(i) - 90 + offset) % 26 + 90;

  let ascii = String.fromCharCode(encodeText);
  result += ascii.replace(";", " ");


}
return result
}
}
  // Acá escribe tu código.
  /* -Recibir un valor en string
  -Convertirlo a mayúsculas
  -Bloquear números (input string)
  -Recibir valor númerico
  -Guarda el string y el número en una variable
  - Poner fórmula para Convertir
  - Cambiar cada carácter en su valor Ascii
  -Agregar UI (cifrar y descifrar)(borrar)(guardar)
     - btn Cifrar recibe string y número
     - btn Cifrar separa los carácteres
     - Crear un array con los carácteres
     - btn Cifrar convierte el string dependiendo del valor númerico
     - btn Cifrar muestra el string obtenido, en el body
     - btn Guardar guarda el string convertido
     - btn Guardar oculta el string del principio
     - btn Guardar muestra el string convertido
     - btn Descifrar regresa el valor string puesto al principio
     - btn Borrar elimina los datos dados


-Poner clave para descifrar
   - si la clave es correcta, descifra
   - si la clave es incorrecta aparece un mensaje que dice "clave incorrecta"
*/



};
