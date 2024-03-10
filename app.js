alert("Bem vindo ao jogo no número secreto!");
let chute;
let numeroMaximo= prompt("Digite número máximo");

let nS= parseInt(Math.random() * numeroMaximo + 1 );
console.log(nS);  //{}
let tentativa=1;

while(chute != nS ){
    let chute = prompt(`Digite um número entre 1 a ${numeroMaximo}`);
    if(chute == nS){ 
        break;
    }else {
        if(chute > nS){
            alert(`o número secreto é menor que ${chute}!`);
        } else {
            alert(`o número secreto é maior que ${chute}!`);}
    } tentativa++;
} 
    let Ptentativa = tentativa > 1 ? `tentativas`: `tentativa`;
        alert(`Parabéns, Vc acertou o número secreto ${nS} com ${tentativa} ${Ptentativa}` );



//if(tentativa > 1 ){
    //alert(`Parabéns, Vc acertou o número secreto ${nS} com ${tentativa} tentativas` );
//} else {alert(`Parabéns, Vc acertou o número secreto ${nS} com ${tentativa} tentativa` );
//}