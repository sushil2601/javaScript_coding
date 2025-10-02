## Q.1 Create Hashtag from String.
Ans :-
    function createHashTag(str){

        let result = '#'
        let words = str.split(' ')

        for(let i=0;i<words.length;i++){
            result = result+words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        }

        return result;

    }

    console.log(createHashTag('javascript is awesome'))

## Q.2 convert first letter of string capital.

# Input :- hello sushil, Output :- Hello Sushil

Ans:-
    function toTitlecase(str){

        let words = str.split(' ');

        // let result = words.map(word=>word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase());

        let result = words.map((word)=>{
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        })

        return result.join(' ')
    }

    console.log(toTitlecase('hello sushil'))

## Q.3.1 Reverse string
Ans :-
    function reverseStr(str){

        let result = '';

        for(let i=str.length-1;i>=0;i--){
            result = result+str[i]
        }

        return result;

        or

        const result = str.split('').reverse().join('')
        return result;

    }

    console.log(reverseStr('hello world'))

## Q.3.2 Reverse word in a sentence.
Ans :-
    function reverseString(str){

        let result = str.split(' ').map(word=>word.split('').reverse().join('')).join(' ')

        return result;
    }

    console.log(reverseString('hello world'))

## Q.4 Find longest word in a sentence.
Ans :-

    const str = 'I love javascript coding';

    function longestWord(str){

        let words = str.split(' ')
        let longest = "";

        for(let i=0;i<words.length;i++){
            if(words[i].length>longest.length){
                longest=words[i]
            }
        }

            or

        for(let word of words){
            if(word.length>longest.length){
                longest = word
            }
        }

        return longest;

    }

    console.log(longestWord(str))

## Q.5 To check palindrome.
Ans :-
    function palindrone(str){

        let newStr = str.toLowerCase();
        let reverStr = newStr.split('').reverse().join('')

        return newStr===reverStr;
    }

    console.log(palindrone('momo'))
    console.log(palindrone("moom"))

## Q.6 To check anagrams.
Ans :-
    function checkAnagrams(str1,str2){

        let newStr1 = str1.toLowerCase().split('').reverse().sort().join('')
        let newStr2 = str2.toLowerCase().split('').reverse().sort().join('')

        if(newStr1===newStr2) return `Anagrams`
        return `Anagrams not exit`

    }

    console.log(checkAnagrams('Listen','silent'))

## Q.7 Count no. of vowels and consonent in a string.
Ans :-
    const str = 'Hello World'

    function countVAndC(str){

        const vowel = 'AEIOUaeiou';
        let consCount = 0;
        let vowCount  = 0;

        for(let word of str){
            if(vowel.includes(word)){
                vowCount++;
            }else{
                consCount++;
            }
        }

        return {vowels : vowCount,consonent :consCount }
    }

    console.log(countVAndC(str))

## Q.8 Count no. of character.
Ans :-
        const str = 'Hello worLd'

        function countNoOfChar(str){


            let str1 = str.split() //{'Hello worLd' : 1}

            let newStr = str.split('');

            let count = {};

            for(let word of newStr){
                count[word] = (count[word] || 0) +1
            }

            return count;

        }

        console.log(countNoOfChar(str))


## Q.9 Input :- let str = "sabyasachi, Techno Exponent Techno I sabyasachhi"

# Output :- sabyasachi-2,Techno-2,Exponent-1,I-1.

Ans :-
    //M-1
    function countWord(str){

        let words = str.replace(/,/g,'').split(' ')

        let wordCount = {};

        words.forEach((word)=>{
            if(wordCount[word]){
                wordCount[word]++
            }else{
                wordCount[word] = 1
            }
        })

        for(let word in wordCount){
            console.log(`${word}-${wordCount[word]}`)
        }
    }
    countWord(str)

    //M-2

    function wordCount(str){

        let words = str.replace(/,/g,'').split(' ')

        let count = {};

        for(let word of words){
            count[word] = (count[word] || 0) +1
        }

        return count
    }

    console.log(wordCount(str))

## Q.10 To find first non-repeating characters.
Ans :-
    const str = 'hello hello world'

    function findNonRepeat(str){

        const words = str.split('')

        const count = {};

        for(let word of words){
            count[word] = (count[word] || 0) + 1
        }

        for(let char in count){
            if(count[char] === 1){
                return char
            }
        }
    }

    console.log(findNonRepeat(str))

## Q.11 To find first repeating characters.
Ans :-
    const str = 'hello hello world'

    function findRepeatChar(str){

        let seen = new Set();

        for(let char of str){
            if(seen.has(char)){
                return char
            }
            seen.add(char)
        }

        return null
    }

    console.log(findRepeatChar(str))

## Q.12 To check if a string contains only unique characters.
Ans :-
    function checkStrHasUniChar(str){

        let seen = new Set();

        for(let char of str){
            if(seen.has(char)){
                return false;
            }
            seen.add(char)
        }
        return true
    }

    console.log(checkStrHasUniChar("World"))
    console.log(checkStrHasUniChar("Hello"))

## Q.13 Input :- aaabbcccc , Output : a3b2c4
Ans :-
    function countChar(str){

        let result = '';
        let count = 1;

        for(let i=0;i<str.length;i++){
            if(str[i] === str[i+1]){
                count++
            }else{
                result = result+str[i]+count;
                count = 1
            }
        }
        return result;
    }

    console.log(countChar("aaabbcccc"))
    console.log(countChar('aaaaaaaaaaaaa'))

## Q.14 Input :- programming, Output :- progaming
Ans :-

    function removeRepeatChar(str){

        let seen = new Set();
        let result = '';

        for(let char of str){
            if(!seen.has(char)){
                seen.add(char)
                result+=char
            }
        }
        return result
    }

    console.log(removeRepeatChar("programming")) //output :- progaming

#### DSA ####

## Q.15 








