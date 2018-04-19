function multiplyBy10(array) {
    return array.map(function (element) {
        return element * 10
    })
};

function shiftRight(array) {
    var lastElement;
    var newArray = [];
     array.map(function (element, index) {
        if(index === 2) {
            newArray.unshift(element);
        }else{
            newArray.push(element);
        }
    });
    return newArray
};

function onlyVowels(array) {
   var  newArray;
        return array.map(function(words){

            var word = words.split("");
            return word.map(function(letter){
                if(letter === 'a' || letter ==='e'|| letter ==='i'|| letter ==='o'|| letter ==='u'){
                return letter
            }
            }).join("")
        })

};

function doubleMatrix(array) {
return array.map(function (lowerArray) {
    return lowerArray.map(function(element){
        return element*2
    })
})
};

module.exports = {
    multiplyBy10: multiplyBy10,
    shiftRight: shiftRight,
    onlyVowels: onlyVowels,
    doubleMatrix: doubleMatrix
};