function sing() {
    let phrases = [
        "let it be", "let it be", "let it be", "let it be",
        "there will be an answer",
        "let it be", "let it be", "let it be", "let it be", "let it be",
        "whisper words of wisdom",
        "let it be"
    ];

    let result = "";
    for (let i = 0; i < phrases.length; i++) {
        if (i < phrases.length - 1) {
            result += phrases[i] + ", ";
        } else {
            result += phrases[i];
        }
    }

    return result;
}

console.log(sing());