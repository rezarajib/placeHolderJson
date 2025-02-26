const loadData = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(responsive => responsive.json())
    .then(data => displayData(data))
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}


const loadComments2 = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    console.log(data);
}


const loadDataAsync = async () => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    console.log(data)
}
catch{
    console.log('data load error ')
}
    }
// console.log("added the fetch button for the clicked");