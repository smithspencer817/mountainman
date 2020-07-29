const postsURL = "http://localhost:3000/posts"

document.addEventListener("DOMContentLoaded", (e) => {
    
    loadPosts();
    submitForm();
    editPostForm();

    const newPostButton = document.getElementById("new-post-button");

    newPostButton.addEventListener("click", () => {
        const newHikerForm = document.getElementById("new-hiker-form");
        const newMountainForm = document.getElementById("new-mountain-form");

        if (newHikerForm.classList.contains("show")) {
            newHikerForm.classList.remove("show")
        }

        if (newMountainForm.classList.contains("show")) {
            newMountainForm.classList.remove("show");
        }

    });

});

function submitForm() {
    const newPostForm = document.getElementById("new-post-form")
    newPostForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addNewPost(e);
        newPostForm.reset();
    })
}

function addNewPost(event) {
    const data = {
        hiker_id: event.target[0].value,
        mountain_id: event.target[1].value,
        content: event.target[2].value,
        image: event.target[3].value,
        likes: 0
    }

    fetch(postsURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(loadPosts)
}

function loadPosts() {
    fetch(postsURL)
    .then(res => res.json())
    .then(posts => posts.forEach(post => {
        renderPost(post);
    }));
}

function renderPost(post) {
    const postContainer = document.getElementById("post-container")

    const postCard = document.createElement("div")

    postCard.className = "card"
    postCard.style = "width: 18rem;"
    postCard.id = `post-card-${post.id}`
    postCard.innerHTML = `
        <img src="${post.image}" class="card-img-top" alt="${post.mountain.name}">
        <div class="card-body">
            <h5 class="card-title">${post.mountain.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted"> By: ${post.hiker.name}</h6>
            <p class="card-text" style="font-size: 12px; letter-spacing: 1px;">${post.content}</p>
            <br><br><br><br>
            <div class="card-buttons-container">
                <p id="trailmix-count-label-${post.id}">Trailmix: <span id="trailmix-count-${post.id}">${post.likes}</span></p>
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button type="button" id="trailmix-button-${post.id}" class="btn btn-primary">Trailmix</button>
                    <button type="button" class="btn btn-success">Bucket</button>
                    <button type="button" id="edit-button-${post.id}" class="btn btn-secondary" data-toggle="modal" data-target="#modal-edit-button">Edit</button>
                    <button type="button" id="delete-button-${post.id}" class="btn btn-dark">Delete</button>
                </div>
            </div>
        </div>
    `

    postContainer.appendChild(postCard)

    addTrailMixButton(post)
    addDeleteButton(post, postCard)
    editPostForm(post, postCard)
};

function addDeleteButton(post, postCard) {
    const deleteButton = document.getElementById(`delete-button-${post.id}`)
    deleteButton.addEventListener("click", (e) => {
        postCard.remove()
        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: "DELETE"
        })
    })
}

function addTrailMixButton(post) {
    const trailmixButton = document.getElementById(`trailmix-button-${post.id}`)
    trailmixButton.addEventListener("click", (e) => {
        const likeCount = document.getElementById(`trailmix-count-${post.id}`)
        const newLikeCount = (parseInt(likeCount.innerText) + 1).toString();
        const trailMix = document.getElementById(`trailmix-count-label-${post.id}`)
        likeCount.innerText = newLikeCount

        trailMix.style.cssText = "animation: shake 1s; animation-iteration-count: 1;"

        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                likes: newLikeCount
            })
        });
    });
}

function editPostForm(post, postCard) {
    const editButton = document.getElementById(`edit-button-${post.id}`)
    
    editButton.addEventListener("click", (e) => {
        const modalBody = document.getElementById("modal-body")
        modalBody.innerHTML = ""
        modalBody.innerHTML = `
            <form id="edit-post-form">
                <div class="form-group">
                    <label for="edit-post-content-input">Content</label>
                    <textarea type="text" class="form-control" id="edit-post-content-input">${post.content}</textarea>
                </div>
                <div class="form-group">
                    <label for="edit-post-image-input">Image URL</label>
                    <input type="text" class="form-control" id="edit-post-image-input" value="${post.image}">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" id="edit-post-form-submit">Save changes</button>
                </div>
            </form>
        `

        const editPostForm = document.getElementById("edit-post-form")
        editPostForm.addEventListener("submit", (e) => {
            e.preventDefault();
            addEditChanges(e, post);
        })
    });

}

function addEditChanges(event, post) {
    const postCard = document.getElementById(`post-card-${post.id}`)
    postCard.childNodes[1].src = event.target[1].value
    postCard.childNodes[3].childNodes[5].innerText = event.target[0].value

    const data = {
        content: event.target[0].value,
        image: event.target[1].value
    }

    fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(loadPosts)
}
