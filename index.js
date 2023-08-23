const mainNode = document.querySelector('#main');
mainNode.remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
const yourName = 'George'; 
newHeader.textContent = `${yourName} is the champion`;
document.body.appendChild(newHeader);