
    let string = `rararararttt`;
    let letter = `a`;

    function letterCounter(str) {
        let counter = 0;
        for (let i = 0; i <= string.length; i++) {
            if (string[i] == letter) counter++;
        }
        console.log(`Number of repetitions: ${counter}`);
    }
    console.log(`What word?:${string}`);
    console.log(`What letter to consider?:${letter}`);
    
    letterCounter(string);
