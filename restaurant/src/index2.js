function createContent() {
//destination
const contentDiv = document.querySelector('div#content');

//content
const para = document.createElement('p')
para.textContent = 'Here is some text'
 
contentDiv.appendChild(para);
}
export {createContent}