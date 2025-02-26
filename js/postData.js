function jsonPostData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(responsive => responsive.json())
        .then(data => displayData(data))
}
jsonPostData()
// get the container element where you want to add the new elements
// create child elements
// set innerText or innerHtml
// set innerText or innerHTML
// SET THE APPENDcHILD

function displayData(posts) {
    // console.log(data)
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h2>Title:${post.userId} </h2>
      <p><strong>User ID: ${post.title}</p>
      <p class="body">Body:${post.body} </p>
        `;
        postsContainer.appendChild(div);

        //  console.log(post);
        // const ul = document.getElementById('post-Data');
        // const li = document.createElement('li');
        // li.innerText = posts.body;
        // ul.appendChild(li);



    }
}

function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}

function patchPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createPost() {
    etch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}