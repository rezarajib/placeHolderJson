function commentsData(){
    const url =  'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(responsive => responsive.json())
    .then(data => loadData(data))
}

function loadData(data) {
    const namesList = document.createElement('ul'); // Create a <ul> element
    for (const comment of data) {
        const listItem = document.createElement('li'); // Create a <li> element for each name
        listItem.textContent = comment.name; // Set the text content to the comment's name
        namesList.appendChild(listItem); // Append the <li> to the <ul>
    }
    document.body.appendChild(namesList); // Append the <ul> to the body
}

commentsData();