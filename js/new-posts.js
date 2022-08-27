function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    for(const post of posts) {
        console.log(post)
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h3>User - ${post.userId}</h3>
            <h4>Id - ${post.id}</h4>
            <h2 style='color: blue'>Title - ${post.title}</h2>
            <p><b>Description:</b> ${post.body}</p>
        `;
        postContainer.appendChild(div);

    }
}
loadPosts()