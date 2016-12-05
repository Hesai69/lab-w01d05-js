console.log('JS linked');

var input = document.querySelector('.new-todo');

var handleInput = function(event){
  // runs after user presses Enter key
  if(event.keyCode===13){
    // saves entered input
    var value = event.target.value;
    // create list and display input to list
    var list = document.querySelector('.todos');
    // create list item
    var newListItem = document.createElement('li');
    // create span
    var newSpan = document.createElement('span');
    // create remove option
    var removeLi = null;

    // sets list item content to user input
    newListItem.textContent = value;
    // set list item class to 'todo'
    newListItem.setAttribute('class', 'todo');
    // add text content of 'x'
    newSpan.textContent = ' x';
    // set span class to 'remove'
    newSpan.setAttribute('class', 'remove');
    newSpan.style.setProperty('text-decoration', 'none');
    // adds remove to listItem and listItem to the list
    newListItem.appendChild(newSpan);
    list.appendChild(newListItem);
    // resets input field
    input.value = '';

    // add listener to remove option
    newSpan.addEventListener('click', removeItem);
    // add event listener to line through list item
    newListItem.addEventListener('click', isComplete);
  }
}
var removeItem = function(event){
  // remove clicked listItem from the list
  this.parentNode.remove();
}
var isComplete = function(event){
  console.log('this=' + this);
  // add complete status
  if(this.getAttribute('class')==='todo'){
    // add class complete to listItem
    this.setAttribute('class', 'todo complete');
    console.log('line through');
    // put line through list item
    this.style.setProperty('text-decoration', 'line-through');
  } // remove complete status
  else if(this.getAttribute('class')==='todo complete'){
    // removing class complete from listItem
    this.setAttribute('class', 'todo');
    console.log('remove line through');
    // remove line through list item
    this.style.setProperty('text-decoration', 'none');
  }
}
input.addEventListener('keyup', handleInput);
