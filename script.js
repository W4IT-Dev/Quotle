const quoteText = document.querySelector('#quote');
const authorGuessInput = document.querySelector('#guess')
const softKeyCenter = document.querySelector('.softkey-center');
const guessParent = document.querySelector('.list-item')

let hintCount = 0;
let offlineQuotes = [{ "_id": "FpnW9R8x6Fr", "content": "Follow your instincts. That is where true wisdom manifests itself.", "author": "Oprah Winfrey", "tags": ["Famous Quotes"], "authorSlug": "oprah-winfrey", "length": 66, "dateAdded": "2020-12-17", "dateModified": "2023-04-14" }, { "_id": "WAtpd3n0mH2", "content": "One fails forward toward success.", "author": "Charles F. Kettering", "tags": ["Success"], "authorSlug": "charles-f-kettering", "length": 33, "dateAdded": "2019-10-18", "dateModified": "2023-04-14" }, { "_id": "iDSY05hYTVIU", "content": "All truths are easy to understand once they are discovered; the point is to discover them.", "author": "Galileo Galilei", "tags": ["Famous Quotes"], "authorSlug": "galileo-galilei", "length": 90, "dateAdded": "2019-10-18", "dateModified": "2023-04-14" }, { "_id": "TGQrxqaS3rW9", "content": "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.", "author": "Robert Graves", "tags": ["Famous Quotes"], "authorSlug": "robert-graves", "length": 130, "dateAdded": "2019-12-23", "dateModified": "2023-04-14" }, { "_id": "bcAbPetiKzd", "content": "Learn from yesterday, live for today, hope for tomorrow.", "author": "Albert Einstein", "tags": ["Famous Quotes", "Inspirational"], "authorSlug": "albert-einstein", "length": 56, "dateAdded": "2019-08-08", "dateModified": "2023-04-14" }, { "_id": "TVKd28qkqWvg", "content": "Every great advance in science has issued from a new audacity of the imagination.", "author": "John Dewey", "tags": ["Famous Quotes"], "authorSlug": "john-dewey", "length": 81, "dateAdded": "2019-06-13", "dateModified": "2023-04-14" }, { "_id": "LHNqJ5K7nY", "content": "True friendship can afford true knowledge. It does not depend on darkness and ignorance.", "author": "Henry David Thoreau", "tags": ["Friendship"], "authorSlug": "henry-david-thoreau", "length": 88, "dateAdded": "2020-12-17", "dateModified": "2023-04-14" }, { "_id": "Yg7xaxX5bj", "author": "Abraham Lincoln", "content": "Government of the people, by the people, for the people, shall not perish from the Earth.", "tags": ["History", "Politics", "Famous Quotes"], "authorSlug": "abraham-lincoln", "length": 89, "dateAdded": "2022-03-12", "dateModified": "2023-04-14" }, { "_id": "CDRr80kEq75j", "content": "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.", "author": "Chuck Swindoll", "tags": ["Famous Quotes"], "authorSlug": "chuck-swindoll", "length": 101, "dateAdded": "2020-01-26", "dateModified": "2023-04-14" }, { "_id": "1sVeX5R0Ct3", "content": "The mind unlearns with difficulty what it has long learned.", "author": "Seneca the Younger", "tags": ["Famous Quotes"], "authorSlug": "seneca-the-younger", "length": 59, "dateAdded": "2021-01-10", "dateModified": "2023-04-14" }, { "_id": "XskWCCo89r", "content": "Experience is not what happens to you; it's what you do with what happens to you.", "author": "Aldous Huxley", "tags": ["Wisdom"], "authorSlug": "aldous-huxley", "length": 81, "dateAdded": "2021-03-08", "dateModified": "2023-04-14" }, { "_id": "-4WQ_JwFWI", "content": "The three great essentials to achieve anything worthwhile are: Hard work, Stick-to-itiveness, and Common sense.", "author": "Thomas Edison", "tags": ["Wisdom"], "authorSlug": "thomas-edison", "length": 111, "dateAdded": "2019-02-13", "dateModified": "2023-04-14" }, { "_id": "mVZ3mhSDcX15", "content": "Today you are you! That is truer than true! There is no one alive who is you-er than you!", "author": "Dr. Seuss", "tags": ["Famous Quotes"], "authorSlug": "dr-seuss", "length": 89, "dateAdded": "2020-06-24", "dateModified": "2023-04-14" }, { "_id": "FcLA4jk7UL", "content": "I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.", "author": "Muhammad Ali", "tags": ["Inspirational"], "authorSlug": "muhammad-ali", "length": 119, "dateAdded": "2019-03-24", "dateModified": "2023-04-14" }, { "_id": "qXO3CA1R5kmS", "content": "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.", "author": "Swami Vivekananda", "tags": ["Success"], "authorSlug": "swami-vivekananda", "length": 239, "dateAdded": "2021-05-12", "dateModified": "2023-04-14" }, { "_id": "7iHuW7YOO", "content": "Without hard work, nothing grows but weeds.", "author": "Gordon Hinckley", "tags": ["Inspirational"], "authorSlug": "gordon-hinckley", "length": 43, "dateAdded": "2020-09-05", "dateModified": "2023-04-14" }, { "_id": "SjSXV2RqMnq3", "content": "The greatest way to live with honor in this world is to be what we pretend to be.", "author": "Socrates", "tags": ["Famous Quotes"], "authorSlug": "socrates", "length": 81, "dateAdded": "2021-01-20", "dateModified": "2023-04-14" }, { "_id": "Aooogq1lu-", "author": "Theodore Isaac Rubin", "content": "Happiness does not come from doing easy work but from the afterglow of satisfaction that comes after the achievement of a difficult task that demanded our best.", "tags": ["Business"], "authorSlug": "theodore-isaac-rubin", "length": 160, "dateAdded": "2022-07-06", "dateModified": "2023-04-14" }, { "_id": "U50kYf5u3f4B", "content": "Life's most persistent and urgent question is, 'What are you doing for others?'", "author": "Martin Luther King Jr.", "tags": ["Famous Quotes"], "authorSlug": "martin-luther-king-jr", "length": 79, "dateAdded": "2020-04-15", "dateModified": "2023-04-14" }, { "_id": "qnZp8X0a7ju1", "content": "Miracles come in moments. Be ready and willing.", "author": "Wayne Dyer", "tags": ["Famous Quotes"], "authorSlug": "wayne-dyer", "length": 47, "dateAdded": "2019-12-14", "dateModified": "2023-04-14" }, { "_id": "GaR6_XoJwohj", "content": "There is nothing permanent except change.", "author": "Heraclitus", "tags": ["Change", "Wisdom"], "authorSlug": "heraclitus", "length": 41, "dateAdded": "2019-08-03", "dateModified": "2023-04-14" }, { "_id": "RP2z5Ir_xwF2", "content": "When we seek to discover the best in others, we somehow bring out the best in ourselves.", "author": "William Arthur Ward", "tags": ["Famous Quotes", "Friendship", "Self Help"], "authorSlug": "william-arthur-ward", "length": 88, "dateAdded": "2021-02-27", "dateModified": "2023-04-14" }, { "_id": "uraOlla6vVZW", "content": "Your attitude, not your aptitude, will determine your altitude.", "author": "Zig Ziglar", "tags": ["Famous Quotes"], "authorSlug": "zig-ziglar", "length": 63, "dateAdded": "2020-09-29", "dateModified": "2023-04-14" }, { "_id": "wdTamcKIF6Oc", "content": "All achievements, all earned riches, have their beginning in an idea.", "author": "Napoleon Hill", "tags": ["Famous Quotes"], "authorSlug": "napoleon-hill", "length": 69, "dateAdded": "2019-02-21", "dateModified": "2023-04-14" }, { "_id": "HrDfFDfT_HDs", "content": "Beauty is not in the face; beauty is a light in the heart.", "author": "Kahlil Gibran", "tags": ["Life"], "authorSlug": "kahlil-gibran", "length": 58, "dateAdded": "2019-02-13", "dateModified": "2023-04-14" }, { "_id": "96eV21NlZKJ", "content": "Make it your habit not to be critical about small things.", "author": "Edward Everett Hale", "tags": ["Wisdom"], "authorSlug": "edward-everett-hale", "length": 57, "dateAdded": "2021-05-12", "dateModified": "2023-04-14" }, { "_id": "__7E1LEXGN_0", "content": "Spread love everywhere you go. Let no one ever come to you without leaving happier.", "author": "Mother Teresa", "tags": ["Famous Quotes"], "authorSlug": "mother-teresa", "length": 83, "dateAdded": "2020-01-26", "dateModified": "2023-04-14" }, { "_id": "zUEhc50DjK7", "content": "But what is liberty without wisdom, and without virtue? It is the greatest of all possible evils; for it is folly, vice, and madness, without tuition or restraint.", "author": "Edmund Burke", "tags": ["Wisdom"], "authorSlug": "edmund-burke", "length": 163, "dateAdded": "2020-03-01", "dateModified": "2023-04-14" }, { "_id": "AJz6p_LzwiiM", "content": "All great men are gifted with intuition. They know without reasoning or analysis, what they need to know.", "author": "Alexis Carrel", "tags": ["Famous Quotes"], "authorSlug": "alexis-carrel", "length": 105, "dateAdded": "2019-10-12", "dateModified": "2023-04-14" }, { "_id": "5SHro-fGJ9P", "content": "Whatever you do in life, surround yourself with smart people who'll argue with you.", "author": "John Wooden", "tags": ["Wisdom"], "authorSlug": "john-wooden", "length": 83, "dateAdded": "2021-03-26", "dateModified": "2023-04-14" }, { "_id": "TvwuG9MG0CQ", "content": "The hours of folly are measured by the clock; but of wisdom, no clock can measure.", "author": "William Blake", "tags": ["Wisdom"], "authorSlug": "william-blake", "length": 82, "dateAdded": "2021-05-05", "dateModified": "2023-04-14" }, { "_id": "ztXFU0-KGBx", "author": "Abraham Lincoln", "content": "I have always found that mercy bears richer fruits than strict justice.", "tags": ["Wisdom"], "authorSlug": "abraham-lincoln", "length": 71, "dateAdded": "2022-03-12", "dateModified": "2023-04-14" }, { "_id": "7CqA_-kKZKKF", "content": "You don't choose your family. They are God's gift to you, as you are to them.", "author": "Desmond Tutu", "tags": ["Famous Quotes"], "authorSlug": "desmond-tutu", "length": 77, "dateAdded": "2020-01-12", "dateModified": "2023-04-14" }, { "_id": "h8BL2VGEZfK", "content": "There is no failure except in no longer trying.", "author": "Elbert Hubbard", "tags": ["Famous Quotes"], "authorSlug": "elbert-hubbard", "length": 47, "dateAdded": "2021-04-15", "dateModified": "2023-04-14" }, { "_id": "d4my6t1iI1q1", "content": "The truth of the matter is that you always know the right thing to do. The hard part is doing it.", "author": "Norman Schwarzkopf", "tags": ["Famous Quotes"], "authorSlug": "norman-schwarzkopf", "length": 97, "dateAdded": "2021-01-11", "dateModified": "2023-04-14" }, { "_id": "Ip75UWJEwuV4", "content": "Don't be afraid to go out on a limb. That's where the fruit is.", "author": "H. Jackson Brown Jr.", "tags": ["Famous Quotes"], "authorSlug": "h-jackson-brown-jr", "length": 63, "dateAdded": "2021-04-08", "dateModified": "2023-04-14" }, { "_id": "V5ekc_oeKEV", "content": "Victory belongs to the most persevering.", "author": "Napoleon", "tags": ["Famous Quotes"], "authorSlug": "napoleon", "length": 40, "dateAdded": "2019-12-14", "dateModified": "2023-04-14" }, { "_id": "Ig8FLVp7MUGN", "content": "The power of intuitive understanding will protect you from harm until the end of your days.", "author": "Laozi", "tags": ["Wisdom"], "authorSlug": "laozi", "length": 91, "dateAdded": "2019-10-03", "dateModified": "2023-04-14" }, { "_id": "dMJ9b4iwZ0Lj", "content": "To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.", "author": "Plutarch", "tags": ["Famous Quotes", "Wisdom"], "authorSlug": "plutarch", "length": 129, "dateAdded": "2019-03-17", "dateModified": "2023-04-14" }, { "_id": "GM68LOEYM9", "content": "The most certain sign of wisdom is cheerfulness.", "author": "Michel de Montaigne", "tags": ["Wisdom"], "authorSlug": "michel-de-montaigne", "length": 48, "dateAdded": "2020-01-12", "dateModified": "2023-04-14" }, { "_id": "MZW3t0KRxWNU", "content": "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.", "author": "Helen Keller", "tags": ["Character"], "authorSlug": "helen-keller", "length": 182, "dateAdded": "2019-02-11", "dateModified": "2023-04-14" }, { "_id": "vpHGlmeIu3Oz", "content": "We never understand how little we need in this world until we know the loss of it.", "author": "J. M. Barrie", "tags": ["Famous Quotes", "Wisdom"], "authorSlug": "j-m-barrie", "length": 82, "dateAdded": "2019-08-08", "dateModified": "2023-04-14" }, { "_id": "Q8AlUDqUpT", "content": "Sustaining true friendship is a lot more challenging than we give it credit for.", "author": "Mariella Frostrup", "tags": ["Friendship"], "authorSlug": "mariella-frostrup", "length": 80, "dateAdded": "2021-03-08", "dateModified": "2023-04-14" }, { "_id": "Rp9oE96Hqv9j", "content": "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.", "author": "Napoleon Hill", "tags": ["Famous Quotes"], "authorSlug": "napoleon-hill", "length": 121, "dateAdded": "2020-06-24", "dateModified": "2023-04-14" }, { "_id": "pvYXttE__hcb", "content": "Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.", "author": "Aristotle", "tags": ["Famous Quotes"], "authorSlug": "aristotle", "length": 96, "dateAdded": "2020-03-07", "dateModified": "2023-04-14" }, { "_id": "qKv9nrdgS0M", "author": "Kyle Chandler", "content": "Opportunity does not knock, it presents itself when you beat down the door.", "tags": ["Motivational"], "authorSlug": "kyle-chandler", "length": 75, "dateAdded": "2022-07-06", "dateModified": "2023-04-14" }, { "_id": "3E7C0r4EhlHT", "content": "Build a better mousetrap and the world will beat a path to your door.", "author": "Ralph Waldo Emerson", "tags": ["Famous Quotes"], "authorSlug": "ralph-waldo-emerson", "length": 69, "dateAdded": "2020-05-21", "dateModified": "2023-04-14" }, { "_id": "A5l8yCGO4BL5", "content": "Forgiveness is choosing to love. It is the first skill of self-giving love.", "author": "Mahatma Gandhi", "tags": ["Wisdom"], "authorSlug": "mahatma-gandhi", "length": 75, "dateAdded": "2019-12-13", "dateModified": "2023-04-14" }, { "_id": "4MRaRRKq4Tcg", "content": "There are two ways of spreading light: to be the candle or the mirror that reflects it.", "author": "Edith Wharton", "tags": ["Famous Quotes"], "authorSlug": "edith-wharton", "length": 87, "dateAdded": "2020-01-12", "dateModified": "2023-04-14" }, { "_id": "favYAKme1n", "content": "I have learned that friendship isn't about who you've known the longest, it's about who came and never left your side.", "author": "Yolanda Hadid", "tags": ["Friendship"], "authorSlug": "yolanda-hadid", "length": 118, "dateAdded": "2020-10-29", "dateModified": "2023-04-14" }]
let quote = {};
function getQuote() {
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
        // Handle the data
        console.log(data);
        showQuote(data);
    }).catch(error => {
        // Handle errors
        console.warn('There was a problem with the fetch operation:', error);
    });
}

function showQuote(quote) {
    quoteText.innerText = quote.content
}


function checkAnswer() {
    let a = authorGuessInput.value.toLowerCase();
    if (a == "") return
    let b = quote.author.toLowerCase();
    if (check(a, b, 3)) showToast('Correct!', 2500, "008000"), authorGuessInput.value = "", getQuote(), hintCount = 0
    else showToast('Wrong! Try again!', 2500, "e00000")
}

document.addEventListener('keydown', e => {
    if (e.key == "ArrowDown") {
        if (document.activeElement == authorGuessInput) document.body.focus()
        else if (document.activeElement == guessParent) authorGuessInput.focus()
        else guessParent.focus();
    }
    if (e.key == "Enter") {
        if (document.activeElement == authorGuessInput) {
            checkAnswer();
            document.body.focus();
        } else if (document.activeElement == guessParent) {
            let shareText = new MozActivity({
                name: "share",
                data: {
                    type: "text/plain",
                    blobs: [`${quote.content} - ${quote.author}`]
                }
            });
        }
    }
    if (e.key == "SoftRight") {
        if (hintCount > 0) return
        hintCount = 1
        let a = quote.author.split(' ')
        if (a.length == 1) {
            alert(`First letters are ${quote.author[0] + quote.author[1]}`);
            return
        } else if (a[2] && a[1] == "buddha") {
            alert(`It's the B..`)
            return
        }
        let b = Math.random();
        if (b < 0.5) alert(`First name is ${a[0]}`)
        else alert(`Last name is ${a[a.length - 1]}`)
    }
    if (e.key == "SoftLeft") {
        getQuote();
        authorGuessInput.value = ""
        hintCount = 0;
    }
})

guessParent.addEventListener('focus', () => {
    softKeyCenter.innerText = "SHARE"
})

guessParent.parentNode.addEventListener('blur', () => {
    softKeyCenter.innerText = ""
})

authorGuessInput.addEventListener('focus', () => {
    softKeyCenter.innerText = "CHECK"
})

authorGuessInput.addEventListener('blur', () => {
    softKeyCenter.innerText = ""
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