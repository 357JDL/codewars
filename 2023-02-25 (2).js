// Complementary DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function DNAStrand(dna){
    const rules = {
        A : 'T',
        T : 'A',
        C : 'G',
        G : 'C'
    };
    let newArr = dna.split('')
    let finalArr = []
    for(let i = 0; i < newArr.length; i++){
        for(let j in rules){
            if(newArr[i] === rules[j])
            finalArr.push(j)
        }
    }
    return finalArr.join('')
}