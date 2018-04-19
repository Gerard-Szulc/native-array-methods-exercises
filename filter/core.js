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
var positive = [];
var newArray = [];
array.filter(function(element){
      if( element.filter(function(el){
        if (el < 0) {
          return -1
        }

  })<0){return}else{
  newArray.push(element)}
  });
return newArray;
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