// aerrow
var names = ["giri", 'vidya', 'gokul', "subashree"]

var a = (names)=>{
    let st = []
        for (na of names){
        name_out = na.charAt(0).toUpperCase() + na.substr(1).toLowerCase();
        st.push(name_out)
    }
    return st
}
console.log("\n\nArrow Function for First char is uppercase:-",a(names));

//  // Sum 
var m = [40,50,0,90,10]
var t = (marks) => {
  let sum = 0;
for (let mark of marks){
  sum = sum+mark;
}
let avg = sum/marks.length
// console.log(avg)
return avg 
 }
 console.log("Arrow Function for Sum:-",t(m))


// odd

var m = [1,2,3,4,5,6,7,8,9,10]

var an = (marks) => {
    let sum = 2;
    let odd = []
    for (let mark of marks){
        if (mark%sum != 0){
            odd.push(mark)
        }
        }
        return odd
        }
console.log("Arrow Function for ODD Numbers:-",an(m));

var nu = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

var arrow_prime =(numbers) => {
  for (let start = 2; numbers > start; start++) {
    if (numbers % start == 0) {
      return false;
    }
  }
  return numbers > 1;
}
console.log("Arrow Function for prime numbers:-",nu.filter(arrow_prime));

let out = []
var aerrow_palind=(string)=> {
  const toArray = string.replace(/ /g, '').toLowerCase().split('');
  const reverseArray = toArray.slice().reverse();
  const original = toArray.join('');
  const reversed = reverseArray.join('');
  
  if (original === reversed) {
    return out.push(reversed)
  }
  // console.log("out",out.length)
}

var names = ["tamil","madam","racecar","malayalam"];
for (var i=0; i<names.length;i++){
  // console.log(name[i])
  aerrow_palind(names[i]);
}
console.log("Arrow Function for palindrome",out)








