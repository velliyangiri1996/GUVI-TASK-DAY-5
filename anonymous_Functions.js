var m = [1,2,3,4,5,6,7,8,9,10]

var an = function (marks){
    let sum = 2;
    let odd = []
    for (let mark of marks){
        if (mark%sum != 0){
            odd.push(mark)
        }
        }
        return odd
        }
        console.log("\n \n Anonymous Function for ODD Numbers:-",an(m));


// convert all the strings into title caps in string array

var names = ["giri", 'vidya', 'gokul', "subashree"]
let n = [] 
var sen = function(txt) {
    for (data of txt){
    out = data.charAt(0).toUpperCase() + data.substr(1).toLowerCase();
    n.push(out)
  }
  return n;
}
console.log("Anonymous Function for first letter uppercase:-",sen(names))


// sum of all numbers in array
var m = [40,50,0,90,10];

var an = function (marks){
let sum = 0;
for (let mark of marks){
    sum = sum+mark;
  }
  return sum
}
console.log("Anonymous Function for sum:-",an(m));

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

var anoy_prime = function (num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log("Anonymous Function for prime numbers:-",array.filter(anoy_prime));

var names = ["tamil","madam","racecar","malayalam"];
var anon_palind = function (s) {
  let ano_out = []
  for (var i=0; i<s.length;i++){
    let n = names[i] == s[i].split("").reverse().join("")
    if(n==true){
    ano_out.push(s[i])
    }
  }
  return ano_out;
};
console.log("Anonymous Function for palindromes:-",anon_palind(names));

var anon_remove_duplicates =function (arr) {
  var seen = {};
  var ret_arr = [];
  for (var i = 0; i < arr.length; i++) {
      if (!(arr[i] in seen)) {
          ret_arr.push(arr[i]);
          seen[arr[i]] = true;
      }
  }
  return ret_arr;
}

let na = ["giri","vidya","vaishali","giri","vaishali","vijay"]
console.log("Anonymous Function for remove duplicates:-", anon_remove_duplicates(na))

var anony_ratate=function(arr,val,pos){
  arr=arr.concat(arr.splice(0,arr.indexOf(val)+pos));
  return arr;
}
var na_rt = ['giri','vidya','vijay','suba'];
console.log("Anonymous Function for rotate:-",anony_ratate(na_rt,'giri',2));



