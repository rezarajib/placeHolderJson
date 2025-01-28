function postData(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(data){
    // console.log(data);

    for(posts of data){
        // console.log(posts.title);
        const ul = document.getElementById('user-posts');
        const li = document.createElement('li');
        li.innerText = posts.body;
        ul.appendChild(li);
        
        
        
        
    }
}