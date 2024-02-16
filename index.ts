
/*RETO 1*/

// interface getRandomSliceProps {
//     array: any[]
//     long: number
// }

// const getRandomslice = ({array, long}:getRandomSliceProps):any[] => {

//     if(array.length < long){
//         throw new Error ("La longitud es mayor que la del array inicial")
//     }

//     let aleatorio: number = Math.floor(Math.random()*(array.length-long))
//     console.log(aleatorio)
//     let segmento: any[] = miArreglo.slice(aleatorio, aleatorio+long)
//     console.log(segmento)

//     return segmento
// }

// let miArreglo: any[] = [7,10,2,45,6,22,4,9,98]

// getRandomslice({array: miArreglo, long: 3})


/*RETO 2*/

// interface Role {
//     id: number;
//     name: string;
// };
    
// const UserRoles: { [key: string]: Role }
//     = {
//     ADMIN: { id: 1, name: "admin" },
//     MANAGER: { id: 2, name: "manager" },
//     USER: { id: 3, name: "user" },
// };

// const getRoleFromRoleName = (searchName:string): Role | undefined => {
//     for(const [key, Role] of Object.entries(UserRoles)) {
//         if (searchName === Role.name){
//             console.log(`${key}: {id: ${Role.id}, name: "${Role.name}"}`)
//             return Role
//         }
//     }
//     return undefined
// }

// const yea = getRoleFromRoleName("admin")


/*RETO 3*/

// let password:string = "Password@4all"

// const validarContraseña = (pass:string): boolean => {
//     let minuscula:boolean = false
//     let mayuscula:boolean = false
//     let numero:boolean = false
//     let caracterEspecial:boolean = false
    
//     for(let letra of pass) {
//         let codePoint = letra.codePointAt(0)
        
//         if(codePoint){
//             /*Valor unicode de la "a" a la "z" -> 97 a 122*/
//             if (codePoint >= 97 && codePoint <= 122){
//                 minuscula = true
//             }
//             /*Valor unicode de la "A" a la "Z" -> 65 a 90*/
//             if (codePoint >= 65 && codePoint <= 90){
//                 mayuscula = true
//             }
//             /*Valor unicode del "0" al "9" -> 48 a 57*/
//             if (codePoint >= 48 && codePoint <= 57){
//                 numero = true
//             }
//             /*Valor unicode de: "@" -> 64, "$" -> 36, "!" -> 33, "%" -> 37, "*" -> 42, "?" -> 63, "&" -> 38, "." -> 46 */ 
//             if (codePoint === 64 || codePoint === 36 || codePoint === 33 || codePoint === 37 || codePoint === 42 || codePoint === 63 || codePoint === 38 || codePoint === 46){
//                 caracterEspecial = true
//             }
//         }
//     }
    
//     if (!minuscula || !mayuscula || !numero || !caracterEspecial){
//         return false
//     }
//     return true
// }

// validarContraseña(password)

/*RETO 4*/

// let matrixA: number[][] = [[1,2,3],[4,5,6],[7,8,9]]
// let matrixB: number[][] = [[1,2,3],[4,5,6],[7,8,9]]
// let matrixAdd: number[][] = []
// console.log(matrixA)
// console.log(matrixB)

// if(matrixA.length !== matrixB.length){
//     throw new Error("Las matrices no tienen el mismo tamaño")
// }

// for(let i = 0; i < matrixA.length; i++){
//     if(matrixA[i].length !== matrixB[i].length){
//         throw new Error("Las matrices no tienen el mismo tamaño2")
//     }
//     matrixAdd[i] = []
//     for(let j = 0; j < matrixA[i].length; j++){
//         matrixAdd[i].push(matrixA[i][j] + matrixB[i][j])
//     }
// }

// console.log(matrixAdd)

/*RETO 5*/

// let passLength: number = 10

// const generarContraseña = (passLength:number): string => {
//     let mayuscula: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let minuscula: string = "abcdefghijklmnopqrstuvwxyz"
//     let numeros: string = "0123456789"
//     let caracteresEspeciales: string = "!@#$%^&*."
//     let todasOpciones: string = mayuscula + minuscula + numeros + caracteresEspeciales
//     let contraseña: string = ""

//     contraseña += mayuscula.charAt(Math.floor(Math.random() * mayuscula.length))
//     contraseña += minuscula.charAt(Math.floor(Math.random() * minuscula.length))
//     contraseña += numeros.charAt(Math.floor(Math.random() * numeros.length))
//     contraseña += caracteresEspeciales.charAt(Math.floor(Math.random() * caracteresEspeciales.length))
    
//     for(let i = 0; i < passLength-4; i++){
//         contraseña += todasOpciones.charAt(Math.floor(Math.random() * todasOpciones.length))
//     }
//     return contraseña
// }

// console.log(generarContraseña(passLength))

/*RETO 6*/

// let mail:string = "caramelo@envenedado.com"

// const validarCorreoElectronico = (mail:string): boolean => {
//     let posArroba: number = 0
//     let posPunto: number = 0
//     let numArrobas: number = 0
//     let numpuntos: number = 0
//     let numNoLetras: number = 0
    
//     if(mail.includes(" ")){
//         return false
//     }

//     for( let i = 0; i < mail.length; i++){
//         if(mail[i] === "@"){
//             posArroba = i
//             numArrobas++
//         }
//         if(mail[i] === "."){
//             posPunto = i
//             numpuntos++
//         }
//         /*Según lo visto en un reto anterior, sabemos los codigos de las letras mayusculas y minusculas que son los únicos valores validos para el mail, si es mejor de 65, si está entre 90 y 97, o si es mayor que 122 no debe ser un caracter válido. Las excepciones serán la arroba y el punto, de hecho sabemos que el numero de caracteres invalidos debe ser justamente 2*/
//         let codePoint = mail.codePointAt(i)
//         if (codePoint){
//             if((codePoint < 65) || (codePoint > 90 && codePoint < 97) || (codePoint > 122)){                           
//                 numNoLetras++   
//             }         
//         }
//     }
//     /*no debe estar la arroba por detras del punto, debe haber exactamente 1 arroba y 1 punto, y solo estos dos caracteres deben ser NO letras, además la arroba no puede ser el primer caracter ni el punto el último*/
//     if (posArroba > posPunto || numArrobas !== 1 || numpuntos !== 1 || numNoLetras !== 2 || posArroba === 0 || posPunto === mail.length-1){  
//         return false
//     }
//     return true
// }

// console.log(validarCorreoElectronico(mail))

/*RETO 7*/

// let texto: string = "Ejemplo velozZ de cifrado Cesar $"
// let desplazamiento: number = 3
// console.log("Texto original: " + texto)

// const cifradoCesar = (texto:string, desplazamiento:number): string => {
//     let textoCifrado: string = ""

//     for(let i = 0; i < texto.length; i++){
//         let codePoint = texto.codePointAt(i)
//         /*Al pasar a valor unicode (con string.codePointAt(pos) es fácil sumar 5 posiciones (menos cuando se rebasa la Z que es un caso especial), una vez calculada la posición númerica se convierte con el metodo inverso (string.fromCodePoint) a la letra correspondiente*/
//         if(codePoint){
//             if(codePoint >= 65 && codePoint <= 90){
//                 if(codePoint + desplazamiento <= 90){
//                     textoCifrado += String.fromCodePoint(codePoint + desplazamiento)
//                 } else {
//                     textoCifrado += String.fromCodePoint(64 + (codePoint + desplazamiento - 90))               
//                 }
//             }
//             if(codePoint >= 97 && codePoint <= 122){
//                 if(codePoint + desplazamiento <= 122){
//                     textoCifrado += String.fromCodePoint(codePoint + desplazamiento)
//                 } else {
//                     textoCifrado += String.fromCodePoint(96 + (codePoint + desplazamiento - 122))               
//                 }
//             }
//             if(codePoint < 65 || (codePoint > 90 && codePoint < 97) || codePoint > 122){
//                 textoCifrado += texto[i]
//             }
//         }
//     }

//     return textoCifrado
// }

// console.log("Texto cifrado: " + cifradoCesar(texto, desplazamiento))

/*RETO 8*/

// interface Carta {
//     palo: string
//     valor: string
// }

// let baraja: Carta[] = [{palo: "corazones", valor: "A"}, {palo: "corazones", valor: "2"}, {palo: "corazones", valor: "3"}, {palo: "corazones", valor: "4"}, {palo: "corazones", valor: "5"}, {palo: "corazones", valor: "6"}, {palo: "corazones", valor: "7"}, {palo: "corazones", valor: "8"}, {palo: "corazones", valor: "9"}, {palo: "corazones", valor: "10"}, {palo: "corazones", valor: "J"}, {palo: "corazones", valor: "Q"}, {palo: "corazones", valor: "K"}, {palo: "diamantes", valor: "A"}, {palo: "diamantes", valor: "2"}, {palo: "diamantes", valor: "3"}, {palo: "diamantes", valor: "4"}, {palo: "diamantes", valor: "5"}, {palo: "diamantes", valor: "6"}, {palo: "diamantes", valor: "7"}, {palo: "diamantes", valor: "8"}, {palo: "diamantes", valor: "9"}, {palo: "diamantes", valor: "10"}, {palo: "diamantes", valor: "J"}, {palo: "diamantes", valor: "Q"}, {palo: "diamantes", valor: "K"}, {palo: "treboles", valor: "A"}, {palo: "treboles", valor: "2"}, {palo: "treboles", valor: "3"}, {palo: "treboles", valor: "4"}, {palo: "treboles", valor: "5"}, {palo: "treboles", valor: "6"}, {palo: "treboles", valor: "7"}, {palo: "treboles", valor: "8"}, {palo: "treboles", valor: "9"}, {palo: "treboles", valor: "10"}, {palo: "treboles", valor: "J"}, {palo: "treboles", valor: "Q"}, {palo: "treboles", valor: "K"}, {palo: "picas", valor: "A"}, {palo: "picas", valor: "2"}, {palo: "picas", valor: "3"}, {palo: "picas", valor: "4"}, {palo: "picas", valor: "5"}, {palo: "picas", valor: "6"}, {palo: "picas", valor: "7"}, {palo: "picas", valor: "8"}, {palo: "picas", valor: "9"}, {palo: "picas", valor: "10"}, {palo: "picas", valor: "J"}, {palo: "picas", valor: "Q"}, {palo: "picas", valor: "K"}]

// const Barajar = (baraja: Carta[]): Carta[] => {
//     let nuevaBaraja: Carta[] = []

//     while(baraja.length > 0){
//         let aleatorio: number = Math.floor(Math.random()*baraja.length)
//         nuevaBaraja.push(baraja[aleatorio])
//         baraja.splice(aleatorio, 1)
//     }

//     return nuevaBaraja
// }

// let mazoBarajado = Barajar(baraja)

// console.log(mazoBarajado.length)

// const ReparteCartas = (baraja: Carta[]): Carta => {
//     let card: Carta = baraja[Math.floor(Math.random()*baraja.length)]
    
//     return card
// }

// console.log(ReparteCartas(mazoBarajado))

/*RETO 9*/

// const authors: string[] = ["George R. R. Martin", "Akira Toriyama", "J. R. R. Tolkien", "J. K. Rowling", "Patrick Rothfuss"]

// const getRandomValueFromArray = (array: string[]): string => {
//     let aleatorio: number = Math.floor(Math.random()*array.length)
    
//     return array[aleatorio]
// }

// const randomAuthor:string = getRandomValueFromArray(authors)

// console.log("Autor aleatorio: " + randomAuthor)

/*RETO 10*/

// const originalArray: number[] = [1,2,3,4,5,6,7,8,9,10]

// const getRandomSubarray = (array: number[], long: number): number[] => {
//     let newArray: number[] = []

//     if(array.length < long){
//         throw new Error ("La longitud es mayor que la del array inicial")
//     }

//     for(let i = 0; i < long; i++){
//         let aleatorio: number = Math.floor(Math.random()*array.length)
//         newArray.push(array[aleatorio])
//         array.splice(aleatorio, 1)
//     }

//     return newArray
// }

// const randomSubarray: number[] = getRandomSubarray(originalArray, 4)

// console.log("Subarray aleatorio: " + randomSubarray)

