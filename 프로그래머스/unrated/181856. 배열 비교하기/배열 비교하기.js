function solution(arr1, arr2) {
     let arr2Total = arr2.reduce((arr,curr)=> arr + curr,0)
     let arr1Total = arr1.reduce((arr,curr)=> arr + curr,0)
   
     if(arr2.length > arr1.length ||
        (arr2.length === arr1.length && arr2Total > arr1Total)){
       return -1
   }else if(
       (arr2.length === arr1.length && arr1Total > arr2Total) 
            || 
       arr2.length < arr1.length) {
        return 1 
   }else if(arr2.length === arr1.length && arr1Total === arr2Total) {
       return 0
   }
}