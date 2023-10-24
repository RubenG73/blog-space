const postForm = document.getElementById('post-form')
const titleInput = document.getElementById("title-input")
const bodyInput = document.getElementById("text-input") 
let postsArray = []

function renderPosts() {
    let html = '';
    for(let post of postsArray) {
        html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr/>
    `
}
    document.getElementById('blogs-container').innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
        })

postForm.addEventListener('submit', function(e){
    e.preventDefault();
    const postTitle =  titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody
    }

    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: 'POST',
        body : JSON.stringify(data),
        headers: {'content-type' : 'application/json'}
    })
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
            postForm.reset()
        })



    })

 