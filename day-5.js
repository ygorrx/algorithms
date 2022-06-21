function DNAStrand(dna){
  return dna.split('').map((a) => {
    if(a === 'T'){ return 'A' }
    if(a === 'A'){ return 'T' }
    if(a === 'C'){ return 'G' }
    if(a === 'G'){ return 'C' }
}).join('')
}

console.log(DNAStrand("AAAA"))
console.log(DNAStrand("ATTGC"))
console.log(DNAStrand("GCATC"))