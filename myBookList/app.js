// Dom selection
// Event listner
// basic validation
// Create element
// Append
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    if(title.value == '' && author  == '' && year.value == '') {
        alert('Please value is required');
    }

    const newRow = document.createElement('tr');
    console.log(newRow);
    // Creating new title
    const newTitle = document.createElement('td')
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new newAuthor
    const newAuthor = document.createElement('td')
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // Creating new year
    const newYear = document.createElement('td')
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // Display UI
    bookList.appendChild(newRow);
})