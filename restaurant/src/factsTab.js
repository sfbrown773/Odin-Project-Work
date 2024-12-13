function facts() {
    const factsTab = document.querySelector('#facts');
    
    factsTab.addEventListener('click', () => {
        function clearDom() {
            while (document.body.firstChild) {
                document.body.removeChild(document.body.firstChild);
              }
        }
        clearDom();

        const contentDiv = document.createElement('div')

        const para = document.createElement('p')
        para.textContent = 'Some other text'
     
        contentDiv.appendChild(para);
    })
}



export {facts}