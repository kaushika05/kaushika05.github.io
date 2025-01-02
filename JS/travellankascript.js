// travellankascript.js
const faqAnswers = {
    1: {
        question: "Is Sri Lanka an independent country?",
        answer: "Yes, Sri Lanka, formerly Ceylon, gained independence from the British empire on February 4th, 1948."
    },
    2: {
        question: "Is Sri Lanka safe to visit?",
        answer: "Sri Lanka is one of the safest countries in the world for tourists! However, with respect to the country's extremely religious society, exercise caution with PDA, especially if you are a member of the LGBTQ+ community."
    },
    3: {
        question: "Is the app available in all regions?",
        answer: "The TravelLanka app is available in all regions except those currently sanctioned by the United States: Russia, Iran, North Korea, Somalia and Afghanistan."
    },
    4: {
        question: "Can I contribute to the app?",
        answer: "Thank you for your interest in this project. If you would like to help with development or funding, please contact us at travellanka@gmail.com!"
    },
    5: {
        question: "Where can I find more comprehensive Sinhala learning resources?",
        answer: "Our app only offers basic conversational Sinhala. However if you would like to learn Sinhala as a second language, please email us."
    }
};

function showAnswer(id) {
    const answerDiv = document.getElementById('faqAnswer');
    const faq = faqAnswers[id];
    answerDiv.innerHTML = `
        <h3>${faq.question}</h3>
        <p>${faq.answer}</p>
    `;
}