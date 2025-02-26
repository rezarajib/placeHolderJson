const loadCommentsData = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))

}


const loadCommentsDataFetch =async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/comments');
    const comments = await res.json();
    console.log(comments);
    
}


const loadCommentsDataFetchTwo = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')

    const comments = await res.json();
    console.log(comments);
}

const loadCommentsDataFetchTree = async () =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');

    const comments = await res.json();
    console.log(comments);

    }
    catch{
        console.log("this is page error")
    }
}