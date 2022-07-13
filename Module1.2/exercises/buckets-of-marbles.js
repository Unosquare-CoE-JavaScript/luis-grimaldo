// RED(1)
const howMany=100;
// Sieve of Eratosthenes
function findPrimes(howMany) {
    // BLUE(2)
    var sieve=Array(howMany).fill(true);
    var max=Math.sqrt(howMany);
    for(let i=2; i<max; i++) {
        // GREEN(3)
        if(sieve[i]) {
            // ORANGE(4)
            let j=Math.pow(i,2);
            for(let k=j; k<howMany; k+=i) {
                // PURPLE(5)
                sieve[k]=false;
            }
        }
    }
    return sieve
    .map(function getPrime(flag,prime){
        // PINK(6)
        if(flag) returnprime;
        return flag;
    })
    .filter(function onlyPrimes(v){
        // YELLOW(7)
        return!!v;
    })
    .slice(1);
}

findPrimes(howMany); 
// [
//    2, 3, 5, 7, 11, 13, 17,
//    19, 23, 29, 31, 37, 41,
//    43, 47, 53, 59, 61, 67,
//    71, 73, 79, 83, 89, 97
// ]