function postData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(responsive => responsive.json())
        .then(posts => displayData(posts))

}

function displayData(posts) {
     console.log(posts)
    const postTag = document.getElementById('postTag');
    // console.log(postTag)
    for (const post of posts) {
        // console.log(post.title);
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
          <h1> hi user id: ${post.userId} </h1>
          <h1> hi title: ${post.title} </h1>
          <p> hi name : ${post.body} </p> 
        `;
        postTag.appendChild(div);
    }
}
postData();

function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
}

function pathPost(){
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

function createPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
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
