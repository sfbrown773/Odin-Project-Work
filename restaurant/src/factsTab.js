import { createContent } from "./index2";
function facts() {
    const factsTab = document.querySelector('#facts');
    function clearDom() {
        const oldContent = document.querySelector('#content');
        while (oldContent.firstChild) {
            oldContent.removeChild(oldContent.firstChild);
          }
    }
    
    factsTab.addEventListener('click', () => {

        function displayFacts() {
                const contentDiv = document.querySelector('#content');
                const newContent = document.createElement('div')

                const para = document.createElement('p')
                para.textContent = 'you broke the website'

                const backButton = document.createElement('button')
                backButton.textContent = 'Back to home page'
                backButton.id = 'backHome'
            
                contentDiv.appendChild(newContent);
                newContent.appendChild(para);
                contentDiv.appendChild(backButton);
                
                backButton.addEventListener('click', () => {
                    clearDom();
                    createContent();
                }); 
        }
        clearDom();
        displayFacts();       
    });
}
export {facts}