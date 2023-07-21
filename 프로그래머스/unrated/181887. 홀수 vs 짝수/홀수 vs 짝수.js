function solution(num_list) {
    let even = num_list.filter((a,i) => (i+1) % 2 ===0 ).reduce((a,b) => a+b, 0)
     let odd = num_list.filter((a,i) => (i+1) % 2 !==0 ).reduce((a,b) => a+b, 0)
     return even > odd ? even : odd
}