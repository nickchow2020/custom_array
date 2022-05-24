let arr = Array.from({length:5},(_,i)=> i + 1)

const myCustomSome = function(cb){
  for(let i = 0; i < this.length; i ++){
    if(cb(this[i],i,this)){
      return true
    }
  }

  return false
}

Array.prototype.mySome = myCustomSome


// test 1  output true
console.log(arr.mySome(a => typeof a === "number"))

// test 2  output true
console.log(arr.mySome(a => a  === 3))

// test 3 output false
console.log(arr.mySome((a,b,c)=> c.length === 4))

// test 4 output true
console.log(arr.mySome((a,b,c)=> c.length === 5))

// test 5 output true
console.log(arr.mySome((a,b,c)=> a === b + 1))

// test 6 output false
arr = ["my",5,true,"name"]
console.log(arr.mySome(a => typeof a === "object"))

// test 7 output true
arr = ["my",5,true,"name",[]]
console.log(arr.mySome(a => typeof a === "object"))