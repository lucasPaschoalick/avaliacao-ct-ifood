// PROVA - Coding Tank - Ifood
// Lucas Paschoalick

/* 
EXERCÍCIO 1

Desafio: Conversor de Horários

Ao efetuar a compra de sua refeição no Ifood o sistema, após confirmação do pagamento, 
envia seu pedido ao restaurante, que ao aceitá-lo registra esse momento e lhe retorna o 
horário de previsão da sua entrega. Esse recurso, apesar de interessante começou a gerar 
uma quantidade significativa de reclamações na Central de Atendimento, pois os clientes 
ficaram um pouco confusos com os horários indicados para a entrega. Ao investigar o problema, 
o time de desenvolvimento entendeu que os horários apresentados estavam no formato de 12hs (AM/PM), 
sendo que o correto seria utilizar o formato de 24hs. Sua missão: criar um algoritmo capaz de 
fazer essa conversão! Para isso, crie uma função que receba um horário qualquer, respeitando 
o formato 12hs (06:15:25PM) e retorne o equivalente (18:15:25).
*/

// RESPOSTA EX1
function converterPara24Horas(horario12) {    
    let partes = horario12.split(":");    

    if(partes[2].includes("PM") && parseInt(partes[0]) !== 12){        
        partes[2] = partes[2].replace("PM", "");
        partes[0] = (parseInt(partes[0]) + 12).toString();     

        return partes.join(":");

    } else if (partes[2].includes("PM") && parseInt(partes[0]) === 12) {
        partes[2] = partes[2].replace("PM", "");        

        return partes.join(":");

    } else if (partes[2].includes("AM") && parseInt(partes[0]) === 12) {
        partes[2] = partes[2].replace("AM", "");
        partes[0] = "00";

        return partes.join(":");

    } else if (partes[2].includes("AM") && parseInt(partes[0]) !== 12) {
        partes[2] = partes[2].replace("AM", "");        

        return partes.join(":");
    }
  } 

  let horario12 = "02:15:25AM";
  let horario24 = converterPara24Horas(horario12);

  console.log(`Horário 12 horas: ${horario12}`);
  console.log(`Horário 24 horas: ${horario24}`);



/*
EXERCÍCIO 2

Desafio: Quantidade de Palavras

Neste desafio, sua missão será encontrar a quantidade de palavras existentes na seguinte frase:

"façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"
Como você pode perceber, essa frase está no padrão camelCase, portanto cada nova palavra é 
representada pela inicial em maiúscula. Crie uma função que receba uma string e retorne a 
quantidade de palavras existentes!
*/

// RESPOSTA EX2
function contarPalavras(frase) {    
    if (frase.length > 0) {
        // Começo com 1 palavra, pois a primeira palavra começa com letra minúscula
        let contagem = 1; 
    
        for (let i = 0; i < frase.length; i++) {
            const caractere = frase[i];
            
            if (caractere === caractere.toUpperCase()) {
                contagem++;
            }
        }
    
        return contagem;
    }
    
  }
  
  const frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
  const numPalavras = contarPalavras(frase);
  console.log("Número de palavras:", numPalavras);



/*
EXERCÍCIO 3

Desafio: Número Solitário

Neste desafio, seu objetivo é encontrar o(s) número(s) solitário(s) (que não se repete), 
a partir do array de números fornecido. Para resolver, crie uma função que recebe um array 
com os seguintes números:

[12, 17, 15, 19, 22, 17, 19, 12]
E retorne os que não estiverem repetidos.
*/

// RESPOSTA EX3
function encontrarNumeroSolitario(arr) {
    const numerosSolitarios = [];
  
    for (let i = 0; i < arr.length; i++) {
        let duplicado = false;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                duplicado = true;
                break;
            }
        }
  
        if (!duplicado) {
            numerosSolitarios.push(arr[i]);
        }
    }
  
    return numerosSolitarios;
}
  
  
  const numeros = [12, 17, 15, 19, 22, 17, 19, 12];
  const numerosSolitarios = encontrarNumeroSolitario(numeros);
  console.log("Números Solitários:", numerosSolitarios);



/*
EXERCÍCIO 4

Qual é a saída do código a seguir?
let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}

a. Não imprime nada

b. 1 2 3

c. 1 1 2 1 2 3 1 2 3

d. 1 2 3 4

e. 1 1 2 1 2 3 1 2 3 4
*/

// RESPOSTA EX4 = e



/*
EXERCÍCIO 5

Qual é o resultado da expressão booleana abaixo?
!(true && false) || (false && true)

a. true

b. null

c. false

d. NaN

e. undefined
*/

// RESPOSTA EX5 = a



/*
EXERCÍCIO 6

Qual o valor da saída do código abaixo?
let x = 0;
let a = 0;
let b = -5;
if (a > 0) {
    if (b < 0) {
        x = x + 5;
    } else if (a > 5) {
        x = x + 4;
    } else {
        x = x + 3;
    }
} else {
    x = x + 2;
}
console.log(x);

a) 0

b) 2

c) 3

d) 4
*/

// RESPOSTA EX6 = b
