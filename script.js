const quoteText = document.querySelector('#quote');
const authorGuessInput = document.querySelector('#guess')
const softKeyCenter = document.querySelector('.softkey-center');
const softKeyRight = document.querySelector('.softkey-right')
const quoteParent = document.querySelector('.list-item')
const changeMode = document.querySelector('#changeMode')
const guessDiv = document.querySelector('#guess')
const multipleChoices = document.querySelectorAll('.radio-container__text')

let hintCount = 0;
let offlineQuotes = [{ content: "Follow your instincts. That is where true wisdom manifests itself.", author: "Oprah Winfrey" }, { content: "One fails forward toward success.", author: "Charles F. Kettering" }, { content: "All truths are easy to understand once they are discovered; the point is to discover them.", author: "Galileo Galilei" }, { content: "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.", author: "Robert Graves" }, { content: "Learn from yesterday, live for today, hope for tomorrow.", author: "Albert Einstein" }, { content: "Every great advance in science has issued from a new audacity of the imagination.", author: "John Dewey" }, { content: "True friendship can afford true knowledge. It does not depend on darkness and ignorance.", author: "Henry David Thoreau" }, { author: "Abraham Lincoln", content: "Government of the people, by the people, for the people, shall not perish from the Earth." }, { content: "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.", author: "Chuck Swindoll" }, { content: "The mind unlearns with difficulty what it has long learned.", author: "Seneca the Younger" }, { content: "Experience is not what happens to you; it's what you do with what happens to you.", author: "Aldous Huxley" }, { content: "The three great essentials to achieve anything worthwhile are: Hard work, Stick-to-itiveness, and Common sense.", author: "Thomas Edison" }, { content: "Today you are you! That is truer than true! There is no one alive who is you-er than you!", author: "Dr. Seuss" }, { content: "I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.", author: "Muhammad Ali" }, { content: "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.", author: "Swami Vivekananda" }, { content: "Without hard work, nothing grows but weeds.", author: "Gordon Hinckley" }, { content: "The greatest way to live with honor in this world is to be what we pretend to be.", author: "Socrates" }, { author: "Theodore Isaac Rubin", content: "Happiness does not come from doing easy work but from the afterglow of satisfaction that comes after the achievement of a difficult task that demanded our best." }, { content: "Life's most persistent and urgent question is, 'What are you doing for others?'", author: "Martin Luther King Jr." }, { content: "Miracles come in moments. Be ready and willing.", author: "Wayne Dyer" }, { content: "There is nothing permanent except change.", author: "Heraclitus" }, { content: "When we seek to discover the best in others, we somehow bring out the best in ourselves.", author: "William Arthur Ward" }, { content: "Your attitude, not your aptitude, will determine your altitude.", author: "Zig Ziglar" }, { content: "All achievements, all earned riches, have their beginning in an idea.", author: "Napoleon Hill" }, { content: "Beauty is not in the face; beauty is a light in the heart.", author: "Kahlil Gibran" }, { content: "Make it your habit not to be critical about small things.", author: "Edward Everett Hale" }, { content: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" }, { content: "But what is liberty without wisdom, and without virtue? It is the greatest of all possible evils; for it is folly, vice, and madness, without tuition or restraint.", author: "Edmund Burke" }, { content: "All great men are gifted with intuition. They know without reasoning or analysis, what they need to know.", author: "Alexis Carrel" }, { content: "Whatever you do in life, surround yourself with smart people who'll argue with you.", author: "John Wooden" }, { content: "The hours of folly are measured by the clock; but of wisdom, no clock can measure.", author: "William Blake" }, { author: "Abraham Lincoln", content: "I have always found that mercy bears richer fruits than strict justice." }, { content: "You don't choose your family. They are God's gift to you, as you are to them.", author: "Desmond Tutu" }, { content: "There is no failure except in no longer trying.", author: "Elbert Hubbard" }, { content: "The truth of the matter is that you always know the right thing to do. The hard part is doing it.", author: "Norman Schwarzkopf" }, { content: "Don't be afraid to go out on a limb. That's where the fruit is.", author: "H. Jackson Brown Jr." }, { content: "Victory belongs to the most persevering.", author: "Napoleon" }, { content: "The power of intuitive understanding will protect you from harm until the end of your days.", author: "Laozi" }, { content: "To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.", author: "Plutarch" }, { content: "The most certain sign of wisdom is cheerfulness.", author: "Michel de Montaigne" }, { content: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.", author: "Helen Keller" }, { content: "We never understand how little we need in this world until we know the loss of it.", author: "J. M. Barrie" }, { content: "Sustaining true friendship is a lot more challenging than we give it credit for.", author: "Mariella Frostrup" }, { content: "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.", author: "Napoleon Hill" }, { content: "Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.", author: "Aristotle" }, { author: "Kyle Chandler", content: "Opportunity does not knock, it presents itself when you beat down the door." }, { content: "Build a better mousetrap and the world will beat a path to your door.", author: "Ralph Waldo Emerson" }, { content: "Forgiveness is choosing to love. It is the first skill of self-giving love.", author: "Mahatma Gandhi" }, { content: "There are two ways of spreading light: to be the candle or the mirror that reflects it.", author: "Edith Wharton" }, { content: "I have learned that friendship isn't about who you've known the longest, it's about who came and never left your side.", author: "Yolanda Hadid" }];
let quote = {};
function getQuote() {
    quoteText.innerText = "Loading quote..."
    quote = offlineQuotes[parseInt(Math.random() * offlineQuotes.length)]
    if (navigator.onLine == false) {
        showQuote(quote)
    }
    fetch('https://api.quotable.io/random').then(response => {
        if (!response.ok) {
            showQuote(quote)
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        quote = data;
        setUpQuote();
        console.log(data);
        authorGuessInput.value = ""
        showQuote(data);

    }).catch(error => {
        console.warn('There was a problem with the fetch operation:', error);
    });
}

function setUpQuote() {
    let usableQuotes = offlineQuotes.concat(quote)
    let a = multipleChoices[parseInt(Math.random()*4)]
    a.innerText = quote.author
    let b = [...multipleChoices].filter(item => item !== a)
    console.log(b)
    showQuote(quote)
    for (let i = 0; i < b.length; i++) {
        if (navigator.onLine == true) {
            console.log('offline guess')
            
        } else {
            console.log('onlne guess')
            fetch('https://api.quotable.io/random').then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then(data => {
                usableQuotes.concat(data)
                console.log(data)
            }).catch(error => {
                b[i].innerText = usableQuotes[parseInt(Math.random() * usableQuotes.length)].author;
                console.warn('There was a problem with the fetch operation:', error);
            });
        }
        usableQuotes.filter(item => item.author !== quote.author)
        b[i].innerText = usableQuotes[parseInt(Math.random() * usableQuotes.length)].author;
    }
}

function showQuote(quote) {
    quoteText.innerText = quote.content
}


function checkAnswer() {
    let a = authorGuessInput.value.toLowerCase();
    if (a == "") return
    let b = quote.author.toLowerCase();
    if (check(a, b, 3)) showToast('Correct!', 2500, "008000"), softKeyRight.innerText = "Hint", authorGuessInput.value = quote.author, setTimeout(() => { authorGuessInput.value = "", getQuote(), hintCount = 0 }, 800)
    else showToast('Wrong! Try again!', 2500, "e00000")
}

document.addEventListener('keydown', e => {
    if (e.key == "ArrowDown") nav(1);
    if (e.key == "ArrowUp") nav(-1)

    if (e.key == "Enter") {
        if (document.activeElement.checked == true) {
            checkAnswer();
            document.body.focus();
        } else if (document.activeElement == quoteParent) {
            let text = `${quote.content} - ${quote.author}`
            let shareText = new MozActivity({
                name: "share",
                data: {
                    type: "text/plain",
                    blobs: text
                }
            });
        }
    }
    if (e.key == "SoftRight") {
    }
    if (e.key == "SoftLeft") {
        getQuote();
        hintCount = 0;
    }
})

quoteParent.addEventListener('focus', () => {
    softKeyCenter.innerText = "SHARE"
})

quoteParent.parentNode.addEventListener('blur', () => {
    softKeyCenter.innerText = ""
})

authorGuessInput.addEventListener('focus', () => {
    softKeyCenter.innerText = "CHECK"
})

authorGuessInput.addEventListener('blur', () => {
    softKeyCenter.innerText = ""
})

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
                distances[i - 1][j] + 1,
                distances[i][j - 1] + 1,
                distances[i - 1][j - 1] + cost
            );
        }
    }

    return distances[len1][len2];
}

function check(str1, str2, maxAllowedDistance) {
    const distance = levenshteinDistance(str1, str2);
    return distance <= maxAllowedDistance;
}


getKaiAd({
    publisher: 'fe2d9134-74be-48d8-83b9-96f6d803efef',
    app: 'quotle',
    h: 70,
    w: 230,
    test: 1,
    container: document.getElementById('ad'),
    onerror: err => console.error('Custom catch:', err),
    onready: ad => {
        ad.call('display', {
            tabindex: 1,
            navClass: 'ad',
            display: 'block',
        })
    }
})