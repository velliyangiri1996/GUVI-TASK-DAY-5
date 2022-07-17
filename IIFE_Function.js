
var names = ["giri", 'vidya', 'gokul', "subashree"];
(function(text){
    let st = []
    for (na of text){
    out = na.charAt(0).toUpperCase() + na.substr(1).toLowerCase();
    st.push(out)
}
console.log("\n \n IIFE for title caps:-",st)
})
(names);

var m = [1,2,3,4,5,6,7,8,9,10];

(function(marks){
//   console.log(marks)
    let sum = 2;
    let odd_num = [];
    // console.log(marks)
    for (let m=0; m<marks.length;m++){
        // console.log(marks[m])
        if (marks[m]%sum){
            odd_num.push(marks[m])
        }
    }
        console.log("IIFE for ODD Number:-",odd_num);
})
(m);


var m = [40,50,0,90,10];

(function(m_n){
  let sum = 0;
  for (let ma of m_n){
  sum = sum+ma; 
}
  console.log("IIFE for SUM Number:-",sum)
})
(m);

(function(num) {
    let prime = [];
    for (let i = 3; i <= num; i++) {
        prime.push(i);
    }
    prime.map((number) => {
      for (let i = 2; i < number; i++) {
          if(number % i === 0) {
              let index = prime.indexOf(number);
              return prime.splice(index, 1);       
          }
      }   
    })
   console.log("IIFE for prime numbers",prime);
  })
  
(10);
var names = ["tamil","madam","racecar","malayalam"];
(function (s) {
  let ano_out = []
  for (var i=0; i<s.length;i++){
    let n = names[i] == s[i].split("").reverse().join("")
    if(n==true){
    ano_out.push(s[i])
    }
  }
  console.log("IIFE for palindromes:-",ano_out);
})
(names);
let na_d = ["giri","vidya","vaishali","giri","vaishali","vijay"];
(function (arr) {
    var seen = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i] in seen)) {
            ret_arr.push(arr[i]);
            seen[arr[i]] = true;
        }
    }
    console.log("IIFE for Remove the duplicates",ret_arr);
 })
(na_d);

var na_rt = ['giri','vidya','vijay','suba'];
(function(arr,val,pos){
    arr=arr.concat(arr.splice(0,arr.indexOf(val)+pos));
    console.log("IIFE Function for rotate:-",arr);
})
(na_rt,'giri',2);
  










