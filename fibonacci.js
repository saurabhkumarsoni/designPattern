let number =parseInt(prompt('ENTER NUMBER'));
let n1= 0, n2=1, next;
let printFibo =() =>{
    for(let i =0; i<=number; i++){
      console.log(n1)
        next =n1+n2;
        n1= n2;
        n2=next;
    }
}

printFibo();