function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
function displayComments(comments){
    const commentsContainer = document.getElementById('comments-container');
    for(const comment of comments) {
        console.log(comment)
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
            <h3><b>Id:</b> ${comment.id}</h3>
            <h3><b>Post Id:</b>
            ${comment.postId}</h3>
            <h4><b>Email-</b> ${comment.email}</h4>
            <p><b>Description:</b> ${comment.body}</p>
        `;
        commentsContainer.appendChild(div);
    }
}
loadComments()

