function findDuplicate(){
    const arr = [1,2,1,3,4,5,58,2,3,10];
    const dublicate  = arr.filter((value, index, arr) => arr.indexOf(value)!== index);
    console.log(dublicate);
 }
 
 findDuplicate();

 //example 2

 function findDuplicates(){

    let array = [6, 9, 15, 6, 13, 9, 11, 15];
    let index = 0, newArr = [];
    const length = array.length; // to get length of array
    function findDuplicates(arr) {
        for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
        if (arr[i] === arr[j]) {
                newArr[index] = arr[i];
                index++;
            }
        }
        }
        return newArr;
    }
}


// example 3
function find(){

    let arr= [1,1,2,3,4,4,5,10,20,30,40,10,40];
    let uniqueElement =[];
    let duplicateElement =[]

    for(i =0; i<arr.length; i++){
        if(uniqueElement.indexOf(arr[i]) === -1){
            uniqueElement.push(arr[i])
        } else{
            duplicateElement.push(arr[i])
        }
    }
    console.log('dublicateArray', duplicateElement);
    console.log('unique', uniqueElement);
}

find();