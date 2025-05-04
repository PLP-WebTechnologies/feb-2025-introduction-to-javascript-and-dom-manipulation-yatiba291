// Change text content dynamically
function changeText() {
    const textElement = document.getElementById('changeable-text');
    const messages = [
        "Early life:Ibrahim Traoré was born in Kéra, Bondokuy, Mouhoun Province, on 14 March 1988",
        " After receiving his primary education in Bondokuy, he attended a high school in Bobo-Dioulasso, the second-largest city in Burkina Faso.",
        "He graduated from the University of Ouagadougou in 2010 with a degree in law.",
        "He joined the military in 2011 and was trained as a paratrooper.",
        "He was promoted to the rank of captain in 2015.",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    textElement.textContent = randomMessage;
}

// Modify CSS styles through JavaScript
function toggleStyle() {
    const styleTarget = document.getElementById('style-target');
    styleTarget.classList.toggle('highlight');
}

// Element creation and removal
let elementCounter = 1;

function createNewElement() {
    const container = document.getElementById('element-container');
    const newElement = document.createElement('div');
    newElement.textContent = `New Element ${elementCounter}`;
    newElement.classList.add('dynamic-element');
    container.appendChild(newElement);
    elementCounter++;
}

function removeLastElement() {
    const container = document.getElementById('element-container');
    const elements = container.getElementsByClassName('dynamic-element');
    if (elements.length > 0) {
        elements[elements.length - 1].remove();
        elementCounter--;
    }
}