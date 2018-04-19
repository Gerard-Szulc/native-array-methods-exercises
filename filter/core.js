function onlyEven (array) {
 return array.filter(function(element){
   if (element%2===0){
     return element}
   })


};

function onlyOneWord (array) {
  return array.filter(function (element) {
    if (element === element.split(" ").join("")){
      return element
    }

  })
};

function positiveRowsOnly (array) {
return array.filter(function(littleArray){

    return littleArray.filter(function (element) {
      if (element > 0) {
        return element;
      }

    })
  })

};

function allSameVowels (array) {
  // your code here
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};