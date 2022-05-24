const arr = Array.from({length:5},(_,i)=> i + 1)


// first approach 
// const myCustomReduce = function(cb,initial){
//   let accumulator
//   let i = 0

//   if(!initial){
//     accumulator = this[0]
//     i = 1
//   }else{
//     accumulator = initial
//   }

//   for(; i < this.length; i++){
//     accumulator = cb(accumulator,this[i],i,this)
//   }

//   return accumulator
// }



// second approach 
const myCustomReduce = function(cb,init){
  let accumulator = init, i = 0

  if(!init){
    accumulator = this[0]
    i = 1
  }

  for(; i < this.length; i ++){
    accumulator = cb(accumulator,this[i],i,this)
  }

  return accumulator
}

Array.prototype.myReduce = myCustomReduce

// text 1 output 15
console.log(arr.myReduce((acc,cur) => acc + cur))

// text 2 output 25
console.log(arr.myReduce((acc,cur) => acc + cur, 10))

// text 3 output 12345 (because concatenation)
console.log(arr.myReduce((acc,cur) => acc + cur, " "))

// text 2 output [2,4,6,8,10]
console.log(arr.myReduce((acc,cur,i) => {
  acc[i] = cur * 2
  return acc
},[]))