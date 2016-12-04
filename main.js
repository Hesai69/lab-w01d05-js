console.log('JS linked');

var input = document.querySelector('.new-todo');
var handleInput = function(event){
  if(event.keyCode===13){
    // saves entered input
    var value = event.target.value;
    // create list and display input to list
    var list = document.querySelector('.todos');
    // create list item
    var newListItem = document.createElement('li');
    // create span
    var newSpan = document.createElement('span');
    // sets list item content to user input
    newListItem.textContent = value;
    // set list item class to 'todo'
    newListItem.setAttribute('class', 'todo');
    // add text content of 'x'
    newSpan.textContent = 'x';
    // set span class to 'remove'
    newSpan.setAttribute('class', 'remove');
    // adds list item to the list
    newListItem.appendChild(newSpan);
    list.appendChild(newListItem);
    // resets input field
    input.value = '';
  }
}
input.addEventListener('keyup', handleInput);
