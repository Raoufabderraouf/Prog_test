let sentence = "Salam alikoum wa rahmatou allah."
console.log(sentence)

const lengthOfSentence = sentence.length
console.log(lengthOfSentence)

const words = sentence.split(" ").length
console.log(words);

const vowels = [`a`, `b`, `i`, `o`, `y`, `u`]

let vowelsCount = 0
for (let i = 0; i < sentence.length; i++){
    if(vowels.includes(sentence[i].toLowerCase()))
    {
        vowelsCount++
    }
console.log(vowelsCount)
}

