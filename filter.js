const arr = Array.from({length:5},(_,i) => i + 1)

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


// text 1: [4]
console.log(arr.myFilter((a,i) => i === 3))

// text 2: [1,2,3,5]
console.log(arr.myFilter((a,i) => i !== 3))

// text 3: [5]
console.log(arr.myFilter((a,i) => a > 4))

// text 4: [4,5]
console.log(arr.myFilter((a,i) => a >= 4))