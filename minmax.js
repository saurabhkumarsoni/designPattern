function findMax(){
    const arr =[1,2,3,4,5,6,7,8,9,10,77];

    const maxValue = arr.reduce((curr, pre) =>{
        return curr > pre ? curr: pre;
    })

    console.log('maxValue', maxValue);
}
findMax();


// 3 step to find second largest value from an array

    // step 1 - find largest from an array
    // step 2 - find the index of largest value
    // step 3 - delete index from array using splice method
    //step 4 - apply same logic to find the second largest
   
function getSecondLargest(arr){
    let firrstLargest = Math.max(...arr);
    let index = arr.indexOf(firrstLargest);
    arr.splice(index, 1);
    let secondtLargest = Math.max(...arr);
    console.log('second largest =>', secondtLargest);
    
}
 const arr = [1,2,3,4,5,6,8,9];

getSecondLargest(arr);