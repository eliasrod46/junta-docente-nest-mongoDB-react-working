// let reg = new RegExp("ab+c");
// let reg3 = new RegExp('r"m"');
// console.log(reg);
// console.log(reg2);
//------------------------------------------
// let reg = new RegExp('r"m"');
// const text = "bails";
// const consologuear = text.search(reg);
// console.log(consologuear); //-1
//------------------------------------------
// //search (devuelve el indice de donde se encuentra la primer coincidencia, no tiene que ser en toda la cadena algo asi como un include)
// const texto = "Este es un ejemplo de texto con algunas coincidencias.";
// const patron = /coincidencias/g;
// // const patron2 = new RegExp(/coincidencias/g);
// const resultado = texto.search(patron);
// console.log(resultado); //40
// //1
// const texto = "Mi nombre es Elias";
// const patron = /nom/g;
// // const patron2 = new RegExp(/coincidencias/g);
// const resultado = texto.search(patron);
// console.log(resultado); //3
// //2
// const texto = "Mi nombre es Elias";
// const patron = /i/g;
// // const patron2 = new RegExp(/coincidencias/g);
// const resultado = texto.search(patron);
// console.log(resultado); //3
//------------------------------------------
//match
// const texto = "Este es un ejemplo de texto con algunas coincidencias.";
// const patron = /coincidencias/g;
// // const patron2 = new RegExp(/coincidencias/g);
// const resultado = texto.match(patron);
// console.log(resultado); //[ 'coincidencias' ]
//1
// const texto = "Este es un ejemplo de texto con algunas coincidencias.";
// const patron = /i/g;
// // const patron2 = new RegExp(/coincidencias/g);
// const resultado = texto.match(patron);
// console.log(resultado); //[ 'coincidencias' ]
//------------------------------------------
//matchAll
// const texto = "Este es un ejemplo de texto con algunas coincidencias.";
// const patron = /i/g;
// // const patron2 = new RegExp(/coincidencias/g);
// const resultado = [...texto.matchAll(patron)];
// console.log(resultado); //arreglo con data de todas las coinciencias
// //1
// const texto = "Mi nombre el Elias";
// const patron = /(E|e)lias/g;
// // const patron2 = new RegExp(/coincidencias/g);
// const resultado = [...texto.matchAll(patron)];
// console.log(resultado); //arreglo con data de todas las coinciencias
//2
// const texto = "E";
// const texto2 = "Mi nombre el Elias";
// const texto3 = "Eeeeeeeee";
// const patron = /(E|e)lias/g;
// const patron2 = /(E|e)/g;
// const patron3 = /(E|e)/g;
// const resultado = [...texto3.matchAll(patron3)];
// const resultado2 = texto3.search(patron3);
// console.log(resultado2); //arreglo con data de todas las coinciencias
const texto = "11-01-1989";
const patron =
  /([0-3])([0-1])(-)([0-1])([0-2])(-)([1-3])([0-9])([0-9])([0-9])/g;
const resultado2 = texto.search(patron);
console.log(resultado2); //arreglo con data de todas las coinciencias
