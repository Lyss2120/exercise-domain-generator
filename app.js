let pronoun = ['el', 'mi', 'nuestro'];
let adj = ['gran', 'maravilloso', 'buen'];
let noun = ['gato', 'conde', 'maltes'];
let extensions = ['.com', '.cl'];
let domainHacks = ['.es', '.de'];


for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            let lastWord = noun[i];
            let lastSlice = lastWord.slice(0, lastWord.length - 2);
            if (lastWord[lastWord.length - 1] == "s" && lastWord[lastWord.length - 2] == "e") {
                console.log(pronoun[i]+adj[j]+lastSlice+".es");
            }
            else if (lastWord[lastWord.length - 1] == "e" && lastWord[lastWord.length - 2] == "d") {
                console.log(pronoun[i]+adj[j]+lastSlice+".de");
            }
            else{
                for (let l = 0; l < extensions.length; l++) {
                    console.log(pronoun[i]+adj[j]+noun[k]+extensions[l])}
                }
        }//ciclo anidado, se pausa con una condicional que divide los dos resultados 
        //en el primer caso se dan dos opciones en el segundo se sigue con otro ciclo
    }
}


/*
Deberás usar los bucles o loops anidados para mezclar los diferentes valores.

Tus herramientas: Para bucles o loops, concatenación de strings.
Agrega varios tipos de extensiones por ejemplo: .com, .net, .us, .io, etc.
Agrega "domain hacks" donde la extension forma parte del dominio, por ejemplo:
 En lugar de puedes.com el "hack" seria pued.es porque sigue diciendo "puedes"
  pero se aprovecha de la extension .es.
  https://www.youtube.com/watch?v=oXHJBHCXsnw*/