let arr = Array.from({length:5},(_,i) => i + 1)

const myCustomFilter = function(cb){
  let result = []

  for(let i = 0; i < this.length; i ++){
    if(cb(this[i],i,this)){
      result.push(this[i])
    }
  }

  return result
}

Array.prototype.myFilter = myCustomFilter


// test 1: [4]
console.log(arr.myFilter((a,i) => i === 3))

// test 2: [1,2,3,5]
console.log(arr.myFilter((a,i) => i !== 3))

// test 3: [5]
console.log(arr.myFilter((a,i) => a > 4))

// test 4: [4,5]
console.log(arr.myFilter((a,i) => a >= 4))

// test string ["greater"]
arr = ["hello","word","omg","greater"]
console.log(arr.myFilter(a => a.length > 5))