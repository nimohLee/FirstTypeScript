function add(n1: number, n2: number, showResult: boolean, phrase: string){
    const result = n1 + n2;    
    if(showResult){
        console.log(phrase+ result);
        return
    }
    return result;
}

const number1 = 5; // 선언과 할당을 동시에 할 시에는 typeScript가 타입 자동추론
let number2: number;
number2 =  2.8;
const printResult = true;
const resultPhrase = "Result is : ";

add(number1, number2, printResult, resultPhrase);