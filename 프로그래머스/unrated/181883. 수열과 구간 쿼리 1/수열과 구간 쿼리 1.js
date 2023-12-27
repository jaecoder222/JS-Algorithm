function solution(arr, queries) {
    queries.map(a=> {
        for(let i = a[0]; i <= a[1]; i++) {
            arr[i]+=1
        }
    }) 
    return arr;
}