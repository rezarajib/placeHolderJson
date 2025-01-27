// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(responsive => responsive.json())
// .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json())
// .then(json => console.log(json))
//  json placeholder
//  .json is not similar but close to json parse

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(responsive => responsive.json()) 
// .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')

// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then(responsive => responsive.json())
// .then(json => console.log(json))
// function loadData(){
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     fetch(url)
//     .then(responsive => responsive.json())
//     .then(json => console.log(json))
// }
// loadData();

// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then(responsive => responsive.json())
// .then(json => console.log(json))

const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then(responsive => responsive.json())
    .then(json => console.log(json));

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(responsive => responsive.json())
        .then(json => console.log(json));

}
