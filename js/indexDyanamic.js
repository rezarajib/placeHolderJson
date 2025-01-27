function dyData(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => displayData(data))
}

function displayData(data){

    const ul = document.getElementById('users-list');
    for(const user of data){
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
    // console.log(data);
    // for (const user of data){
    //     console.log(user.email);
    // }
}

//  important thing down the repeat 