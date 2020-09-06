//11- Um trabalhador de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, 
//dado um salário bruto, calcula o líquido a ser recebido pelo trabalhador.

//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

//INSS

//Salário bruto até R$ 1.556,94: alíquota de 8%

//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

//IR

//Até R$ 1.903,98: isento de imposto de renda

//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salary = 3000;
let afterINSS = 0;
let valueIR = 0;
let afterIR = 0;

if (salary > 5189.82) {
    afterINSS = salary - 570.88;
}
else if (salary >= 2594.93 && salary <= 5189.82) {
    afterINSS = salary - (salary*0.11);
}
else if (salary >= 1556.95 && salary <= 2594.92) {
    afterINSS = salary - (salary*0.09);
}
else if (salary <= 1556.94) {
    afterINSS = salary - (salary*0.08);
}

if (afterINSS > 4664.68) {
    valueIR = afterINSS*0.275 - 839.36;
}
else if (afterINSS >= 3751.06 && afterINSS <= 4664.68) {
    valueIR = afterINSS*0.225 - 636.13;
}
else if (afterINSS >= 2826.66 && afterINSS <= 3751.05) {
    valueIR = afterINSS*0.15 - 354.80;
}
else if (afterINSS >= 1903.99 && afterINSS <=2826.65) {
    valueIR = afterINSS*0.075 - 142.80
}
else if (afterINSS < 1903.99) {
    valueIR = 0;
}

afterIR = afterINSS - valueIR;
console.log('Final salary: R$', afterIR.toFixed(2));
