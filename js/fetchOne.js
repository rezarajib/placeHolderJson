function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(responsive => responsive.json())
    .then(json => console.log(json))

}
loadData();