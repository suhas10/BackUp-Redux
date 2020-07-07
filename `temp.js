function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}

function getMaxLessThanK(limit , val){ 
    let tempArr = [], answer = [], tempVar;
    for(var i = 0; i < limit; i++){
        tempArr[i].push(i);
    }

    console.log(tempArr);

}