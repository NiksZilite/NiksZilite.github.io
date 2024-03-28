const FeedbackArray = [];
const FeecbackContainerPlacment = document.getElementById('targetedPlace');

let About = document.title; 
let DateTime = new Date().toLocaleString();

const inputField = document.getElementById('inputField');

function createFeedback(name, text, about, dateTime) {
    const FeedbackName = document.createElement('div');
    const FeedbackAbout = document.createElement('div');
    const FeedbackText = document.createElement('div');
    const FeedbackDateTime = document.createElement('div');
    FeedbackName.textContent = `${name}`;
    FeedbackAbout.textContent = `About: ${about}`;
    FeedbackText.textContent = `${text}`;
    FeedbackDateTime.textContent = `${dateTime}`;
    
    const newFeedback = document.createElement('div');
    newFeedback.classList.add('feedback_container');
    newFeedback.appendChild(FeedbackName);
    newFeedback.appendChild(FeedbackAbout);
    newFeedback.appendChild(FeedbackText);
    newFeedback.appendChild(FeedbackDateTime);



    FeedbackName.classList.add('--Name');    //Give the chile elements a class
    FeedbackAbout.classList.add('--Abaut');    
    FeedbackText.classList.add('--Text');
    FeedbackDateTime.classList.add('--Date');

    return newFeedback;
}


function submitText() {
    var InputedName = document.getElementById("inputName").value;
    var InputedText = document.getElementById("inputText").value;
    let DateTime = new Date().toLocaleString();
    const newFeedback = createFeedback(InputedName, InputedText, About, DateTime);

    FeedbackArray.push(newFeedback);    // Add new created div to an array
    FeecbackContainerPlacment.appendChild(newFeedback); //Place div in html
    inputField.classList.toggle('active');
}

function openInput() {
    inputField.classList.toggle('active');
}