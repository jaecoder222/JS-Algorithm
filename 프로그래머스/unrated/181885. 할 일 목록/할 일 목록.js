function solution(todo_list, finished) {
     return todo_list.filter((a,i) => finished[i] === false)
}