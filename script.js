const quoteText = document.querySelector('#quote');
const authorGuessInput = document.querySelector('#guess')
let quote = {};
function getQuote() {
    fetch('https://api.quotable.io/random').then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        quote = data;
        // Handle the data
        console.log(data);
        showQuote(data);
    }).catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
}

function showQuote(quote) {
    quoteText.innerText = quote.content
}


function checkAnswer() {
    let a = authorGuessInput.value.toLowerCase();
    let b = quote.author.toLowerCase();
    if(check(a,b,3)) alert('right'), authorGuessInput.value = "", getQuote()
    else alert('wrong, try again')
}

document.addEventListener('keydown', e => {
    if(e.key == "ArrowDown") {
        if(document.activeElement !== authorGuessInput) authorGuessInput.focus();
        else document.body.focus();
    }
    if(e.key == "ArrowRight" && document.activeElement !==authorGuessInput) {
        getQuote();
        authorGuessInput.value = ""
    }
    if (e.key == "Enter" && document.activeElement == authorGuessInput) {
        checkAnswer();
        document.body.focus();
    }
})

// ChatGPT going brr
function levenshteinDistance(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;

    const distances = Array(len1 + 1).fill(null).map(() => Array(len2 + 1).fill(null));

    for (let i = 0; i <= len1; i++) {
        distances[i][0] = i;
    }
    for (let j = 0; j <= len2; j++) {
        distances[0][j] = j;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            distances[i][j] = Math.min(
                distances[i - 1][j] + 1, // deletion
                distances[i][j - 1] + 1, // insertion
                distances[i - 1][j - 1] + cost // substitution
            );
        }
    }

    return distances[len1][len2];
}

function check(str1, str2, maxAllowedDistance) {
    const distance = levenshteinDistance(str1, str2);
    return distance <= maxAllowedDistance;
}