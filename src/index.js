const start = document.getElementById("save").addEventListener("click", getEncode);save.addEventListener("click", getQuestion);
// Inicia las funciones getEncode y getQuestion
function getQuestion(){
  if(document.getElementById("text").value == ""){alert("No has escrito todavía");}
  //Si no escribe nada en el cuadro de texto le sale una alerta
  else if (document.getElementById("number").value == ""){confirm("No has puesto un número, ¿Estás seguro que lo quieres dejar así?");}
  //Si no pone un número le sale un confirm y le pregunta si así lo quiere guardar
  else{
  let question = prompt("Pon una pregunta para recordar el número");
  //Abre un prompt para que escribe el usuario algo que lo haga recordar el número que ingresó
  localStorage.setItem("question", JSON.stringify(question));
  //Guarda la variable question en el "navegador" para que se pueda usar libremente donde se ocupe

  }}
function getEncode() {
  let text = document.getElementById("text").value;
  //obtiene lo que el usuario escribió
  let offset = parseInt(document.getElementById("number").value);
//  return offset
  // Obtiene el valor del number y lo convierte de un string a un number
   localStorage.setItem("offset", JSON.stringify(offset));
   //Guarda la variable offset para que se pueda usar donde se necesite
   let textEncode = document.getElementById("textEncode").value = window.cipher.encode(text, offset);
   // Hace una variable con el resultado cifrado y lo muestra en el cuadro de texto con el Id textEncode
   //Da el resultado final del cifrado
   localStorage.setItem("textEncode", JSON.stringify(textEncode));
   //Guarda la variable textEncode para que pueda ser llamado en otro lado
}


const openCode= document.getElementById("code").addEventListener("click", code ); //Inicia la función code cuando se hace click en Id code
function code(){
  let question = JSON.parse(localStorage.getItem("question"));
  //Guarda el valor de question que guardé en el "navegador"
  let questionP = prompt((question.valueOf()));
  //Inicia un prompt que pregunta lo que guardó el usuario antes
//  return questionP
  let clave = parseInt(questionP)
  //Guarda el valor de la respuesta obtenida en prompt y lo convierte a number
  let confirm = JSON.parse(localStorage.getItem("offset"));
  // Llama el valor de offset que guardé en el "Navegador"
  if (clave = confirm){
  //  function getDecode() {
      let textEncode = JSON.parse(localStorage.getItem("textEncode")); // Llama el valor de textEncode que guardé en el "Navegador"
      let offset = JSON.parse(localStorage.getItem("offset"));
      // Llama el valor de offset que guardé en el "Navegador"
      let textDecode = document.getElementById("prove").value = window.cipher.decode(textEncode, offset);
      //Pide que el valor puesto en  text se cambie por lo que esté en decode
   }else{alert("Clave incorrecta")}}
