for(let i=0; i<5; i++){
    console.log("*".repeat(i+1));
}

for(let i=0; i<5; i++){
    console.log(" ".repeat(4-i) + "*".repeat(i+1));
}

for(let i=0; i<5; i++){
    for(let j=0; j<5-i-1; j++){
        process.stdout.write(" ");
    }
    console.log("*".repeat(i+1));
}