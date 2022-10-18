// new Set([1,1,2,2,3,4]) // [1,2,3,4]

// [...new Set("referee")].join("") // ref


// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
/*
    [1,2,3]: true,
    [1,2,3]: false
*/


function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length
}



function vowelCount(str){
    const newMap = new Map();
    for(let x of str){
      let char = x.toLowerCase()
      if("aeiou".includes(char)){
        if(newMap.has(char)){
          newMap.set(char, newMap.get(char) + 1);
        } else {
          newMap.set(char, 1);
        }
      }
    }
    return newMap;
  }