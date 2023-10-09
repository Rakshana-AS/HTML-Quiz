const questions = 
[
    {
        "question": "What does HTML stand for?",
        "choices": [
            "Hyper Text Markup Language",
            "Highly Textured Modern Language",
            "Hyperlink and Text Markup Language",
            "Hyper Transfer Markup Language"
        ],
        "correctAnswer": "Hyper Text Markup Language"
    },
    {
        "question": "Which HTML tag is used to define an unordered (bulleted) list?",
        "choices": [
            "<ul>",
            "<ol>",
            "<li>",
            "<dl>"
        ],
        "correctAnswer": "<ul>"
    },
    {
        "question": "What is the correct HTML for creating a hyperlink?",
        "choices": [
            "<a href='http://www.example.com'>Example</a>",
            "<link href='http://www.example.com'>Example</link>",
            "<a url='http://www.example.com'>Example</a>",
            "<hyperlink>http://www.example.com</hyperlink>"
        ],
        "correctAnswer": "<a href='http://www.example.com'>Example</a>"
    },
    {
        "question": "Which HTML element is used to define the structure of an HTML document?",
        "choices": [
            "<head>",
            "<body>",
            "<html>",
            "<structure>"
        ],
        "correctAnswer": "<html>"
    },
    {
        "question": "What does CSS stand for?",
        "choices": [
            "Cascading Style Sheet",
            "Computer Style Sheet",
            "Colorful Style Sheet",
            "Creative Style Sheet"
        ],
        "correctAnswer": "Cascading Style Sheet"
    },
    {
        "question": "Which HTML element is used to specify a header for a document or a section?",
        "choices": [
            "<header>",
            "<h1>",
            "<head>",
            "<section>"
        ],
        "correctAnswer": "<header>"
    },
    {
        "question": "In HTML, which tag is used to define the footer for a document or a section?",
        "choices": [
            "<footer>",
            "<ftr>",
            "<end>",
            "<bottom>"
        ],
        "correctAnswer": "<footer>"
    },
    {
        "question": "Which HTML element is used to create a hyperlink?",
        "choices": [
            "<link>",
            "<a>",
            "<hlink>",
            "<url>"
        ],
        "correctAnswer": "<a>"
    },
    {
        "question": "What is the purpose of the HTML <meta> tag?",
        "choices": [
            "To define a meta description for SEO",
            "To create a meta file for storing data",
            "To include metadata about the document",
            "To define a metronome for audio"
        ],
        "correctAnswer": "To include metadata about the document"
    },
    {
        "question": "Which HTML element is used to define a table row?",
        "choices": [
            "<row>",
            "<tr>",
            "<table-row>",
            "<tbl-row>"
        ],
        "correctAnswer": "<tr>"
    },
    {
        "question": "What is the purpose of the HTML5 <aside> element?",
        "choices": [
            "A subheading",
            "Main content of the webpage",
            "Tangentially related content",
            "A footer"
        ],
        "correctAnswer": "Tangentially related content"
    },
    {
        "question": "Which HTML5 attribute is used for responsive web design and adjusts the size of the text based on the viewport size?",
        "choices": [
            "<viewport>",
            "<media-query>",
            "<responsive>",
            "<viewport-meta>"
        ],
        "correctAnswer": "<viewport-meta>"
    },
    {
        "question": "What is the purpose of the HTML5 <details> and <summary> elements?",
        "choices": [
            "To create animations",
            "To create forms",
            "To create interactive collapsible content",
            "To style text"
        ],
        "correctAnswer": "To create interactive collapsible content"
    },
    {
        "question": "In HTML, which attribute is used to associate a label with a form input element?",
        "choices": [
            "<for>",
            "<label>",
            "<input-label>",
            "<assoc>"
        ],
        "correctAnswer": "<for>"
    },
    {
        "question": "What is the purpose of the HTML5 <nav> element?",
        "choices": [
            "To create a table of contents",
            "To define a footer",
            "To mark text for navigation",
            "To represent navigation menus"
        ],
        "correctAnswer": "To represent navigation menus"
    },
    {
        "question": "Which HTML5 element is used for drawing graphics on a web page?",
        "choices": [
            "<canvas>",
            "<svg>",
            "<img>",
            "<figure>"
        ],
        "correctAnswer": "<canvas>"
    },
    {
        "question": "What does the 'alt' attribute in an HTML image tag provide?",
        "choices": [
            "The image's width and height",
            "The image's alignment",
            "A description of the image for accessibility",
            "The image's file format"
        ],
        "correctAnswer": "A description of the image for accessibility"
    },
    {
        "question": "Which HTML element is used to define important text?",
        "choices": [
            "<strong>",
            "<em>",
            "<i>",
            "<b>"
        ],
        "correctAnswer": "<strong>"
    },
    {
        "question": "Which HTML element is used to create a table?",
        "choices": [
            "<table>",
            "<tr>",
            "<td>",
            "<th>"
        ],
        "correctAnswer": "<table>"
    },
    {
        "question": "What is the purpose of the HTML <section> element?",
        "choices": [
            "To create a numbered list",
            "To define a table row",
            "To represent a standalone section of content",
            "To create a hyperlink"
        ],
        "correctAnswer": "To represent a standalone section of content"
    },
    {
        "question": "What is the role of the HTML <ol> element?",
        "choices": [
            "To create an ordered (numbered) list",
            "To define a table cell",
            "To create a navigation menu",
            "To insert an image"
        ],
        "correctAnswer": "To create an ordered (numbered) list"
    },
    {
        "question": "What is the purpose of the HTML <blockquote> element?",
        "choices": [
            "To define a block-level quote",
            "To create a bullet list",
            "To include metadata about the document",
            "To create a form"
        ],
        "correctAnswer": "To define a block-level quote"
    },
    {
        "question": "Which HTML element is used to embed audio content in a webpage?",
        "choices": [
            "<audio>",
            "<video>",
            "<embed>",
            "<sound>"
        ],
        "correctAnswer": "<audio>"
    },
    {
        "question": "What is the purpose of the HTML <iframe> element?",
        "choices": [
            "To insert an image",
            "To create a navigation menu",
            "To embed external content in a webpage",
            "To define a block-level quote"
        ],
        "correctAnswer": "To embed external content in a webpage"
    },
    {
        "question": "Which HTML attribute is used to provide additional information about an element for accessibility?",
        "choices": [
            "class",
            "id",
            "aria-label",
            "src"
        ],
        "correctAnswer": "aria-label"
    },
];


            
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
        const choiceItem = document.createElement("li");
        choiceItem.textContent = choice;
        choiceItem.addEventListener("click", () => handleChoiceClick(choice));
        choicesElement.appendChild(choiceItem);
    });

    // Display the current score next to the question
    scoreElement.textContent = `Score: ${score} `;
}

function handleChoiceClick(selectedChoice) {
    checkAnswer(selectedChoice);
}

function checkAnswer(selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];
    const choices = choicesElement.querySelectorAll("li");

    choices.forEach((choice, index) => {
        choice.removeEventListener("click", () => handleChoiceClick(choice));

        if (choice.textContent === currentQuestion.correctAnswer) {
            choice.classList.add("correct-answer");
        }

        if (choice.textContent === selectedChoice && selectedChoice !== currentQuestion.correctAnswer) {
            choice.classList.add("wrong-answer");
        }
    });

    if (selectedChoice === currentQuestion.correctAnswer) {
        score++; // Increase score for correct answers
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            displayQuestion();
        }, 1000);
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionElement.textContent = "Quiz completed!";
    choicesElement.innerHTML = "";
    scoreElement.textContent = `Final score: ${score} out of ${questions.length}`;
}

displayQuestion();