// Nome - Nota 1 - Nota 2 - Media - Aprovado/Reprovado

var nomes = ["luis", "carlos", "bianca", "joao"];
var notaA = [5,8,4,8];
var notaB = [9,6,8,10];

function media(nA,nB){
    return (nA+nB)/2;
}

function passou(media){

    if (media >= 7){
        return "Aprovado";
    }    else {
         return "Reprovado";
    }

}


for (var index in nomes){

    var n = nomes[index]
    var n1 = notaA[index]
    var n2 = notaB[index]
    var m = media(n1,n2)

    console.log( 
        n +
        " - " +
        n1 +
        " - " + 
        n2 +
        " - " +
        m +
        " - " +
        passou(m)
    )

}