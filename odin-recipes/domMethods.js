/*a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
div.style.[CSS}
div.style.color = 'red'
div.style.cssText = 'color:red;property:name'
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const container = document.querySelector("#container");

const para = document.createElement('p');
const heading = document.createElement('h3');
const div = document.createElement('div');
    const headingInDiv = document.createElement('h1');
    const paraInDiv = document.createElement('p');

para.textContent = 'Hey I\'m red!'
para.style.color = 'red'

heading.textContent = 'I’m a blue h3!'
heading.style.color = 'blue'

div.style.cssText = 'border:black;background:pink'

headingInDiv.textContent = 'I\'m in a div'
paraInDiv.textContent = 'ME TOO!'

div.appendChild(headingInDiv);
div.appendChild(paraInDiv);

container.appendChild(div);
container.appendChild(para);
container.appendChild(heading);