// filter() => Return an array containing element that satisfied the conditions 


function xyz(arr){
    const filteredValue = arr.filter((item) => item>4)
    console.log(filteredValue);
    
}

const arr = [1,2,3,4,5,6,7,8];
xyz(arr); //  [5,6,7,8]



//find =>Return first element of an array that statisfied the condition and terminate from that satifiied element

function abc(arr){
    const findValue = arr.find((item) => item>4)
    console.log(findValue)
}
abc(arr); //5