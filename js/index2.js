function loadData3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userName (data))
}

function userName (data) {
    const ul = document.getElementById('users-list')
    for(const user of data) {
        console.log(user.username);
        const li = document.createElement('li');
        li.innerText = user.username;
        ul.appendChild(li);
        
    }
}