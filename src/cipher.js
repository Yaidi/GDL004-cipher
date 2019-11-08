window.cipher = {
encode(text, offset){
  let encodeResult = "";
  for (let i = 0; i < text.length; i++){
if(offset < 0){
    if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){ encodeText = (text.charCodeAt(i) - 90 + offset) % 26 + 90;
    }else if(text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122){
      encodeText = (text.charCodeAt(i) - 122 + offset) % 26 + 122;
    }else{
        encodeText = text.charCodeAt(i);
    }

}
else{
    if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){     encodeText = (text.charCodeAt(i) - 65 + offset) % 26 + 65;
    }else if(text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122){
      encodeText = (text.charCodeAt(i) - 97 + offset) % 26 + 97;
    }else{
      encodeText = text.charCodeAt(i);
    }
    }
    encodeResult = encodeResult + String.fromCharCode(encodeText);
    }
  return encodeResult
  }
  ,
decode(textEncode, offset){
  let decodeResult="";

  for (let i = 0; i < textEncode.length; i++){
   if (textEncode.charCodeAt(i)>=65 && textEncode.charCodeAt(i)<=90){
      decodeText = (textEncode.charCodeAt(i) + 65 - offset) % 26 + 65;
    }else if(textEncode.charCodeAt(i)>=97 && textEncode.charCodeAt(i)<=122){
       decodeText = (textEncode.charCodeAt(i) - 97 - (offset)) % 52 + 97;
     }else{
      decodeText = textEncode.charCodeAt(i)
    }
    decodeResult = decodeResult + String.fromCharCode(decodeText);
    }
  return decodeResult
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
