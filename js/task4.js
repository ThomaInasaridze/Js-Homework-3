function validatePalin(str) {  
    let result='It is a palindrome'

    const len = string.length;  

      for (let i = 0; i < len / 2; i++) {  

        if (string[i] !== string[len - 1 - i]) {  
            result='It is not a palindrome'
        }  
    }  
    return result 
}  
  

const string = prompt('Enter a string or number: ');  
  
const resoult = validatePalin(string);
console.log(resoult)  