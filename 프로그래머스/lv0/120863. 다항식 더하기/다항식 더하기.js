function solution(polynomial) {
    const poly = polynomial.split(" + ");
    
    let numX = 0;
    let num = 0;
    
    poly.forEach((item) => {
        if(item.includes("x")){
            const xArr = item.split("x");
            
            if(xArr[0] === ""){
               numX += 1;
            }
            
            if(xArr[0] !== ""){
                numX += Number(xArr[0]);
            }
        }
        
        if(!item.includes("x")){
            num += Number(item);
        }
    })
    
    if(numX !== 0 && num !== 0){
        return numX === 1 ? `x + ${num}` : `${numX}x + ${num}`;    
    }
    
    if(numX !== 0 && num === 0){        
        return numX === 1 ? "x" : `${numX}x`;
    }
    
    if(numX === 0 && num !== 0){
        return `${num}`;
    }
    
    if(numX === 0 && num === 0){
        return "0";
    }
}