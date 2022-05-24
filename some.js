const arr = Array.from({length:5},(_,i)=> i + 1)

const myCustomSome = function(cb){
  for(let i = 0; i < this.length; i ++){
    if(cb(this[i],i,this)){
      return true
    }
  }

  return false
}

Array.prototype.mySome = myCustomSome


// text 1  output true
console.log(arr.mySome(a => typeof a === "number"))

// text 2  output true
console.log(arr.mySome(a => a  === 3))

// text 3 output false
console.log(arr.mySome( (a,b,c)=> c.length === 4))

// text 4 output true
console.log(arr.mySome( (a,b,c)=> c.length === 5))

// text 5 output true
console.log(arr.mySome( (a,b,c)=> a === b + 1))