const mountainURL = "http://localhost:3000/mountains"

document.addEventListener("DOMContentLoaded", (e) => {

    handleNewPostMountains();
    newMountainForm();

    const newMountainButton = document.getElementById("new-mountain-button");

    newMountainButton.addEventListener("click", () => {
        const newHikerForm = document.getElementById("new-hiker-form");
        const newPostForm = document.getElementById("new-post-form");

        if (newHikerForm.classList.contains("show")) {
            newHikerForm.classList.remove("show")
        }

        if (newPostForm.classList.contains("show")) {
            newPostForm.classList.remove("show");
        }

    });

});

function newMountainForm() {
    const mountainForm = document.getElementById("new-mountain-form")
    mountainForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addNewMountain(e);
        mountainForm.reset();
    })
}

function addNewMountain(event) {

    const data = {
        name: event.target[0].value,
        height: event.target[1].value,
        location: event.target[2].value,
        difficulty: event.target[3].value
    }

    fetch(mountainURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(handleNewPostMountains)
    console.log(data)
    console.log(event)
}

function handleNewPostMountains() {
    const newMountainInput = document.getElementById("new-post-mountain-input")
    newMountainInput.innerHTML = ""


    fetch(mountainURL)
    .then(resp => resp.json())
    .then(mountains => mountains.forEach(mountain => {
        addMountain(mountain)
    }));
}

function addMountain(mountain) {
    const newMountainInput = document.getElementById('new-post-mountain-input')
    const mountainOption = document.createElement('option')
    mountainOption.value = mountain.id
    mountainOption.innerText = mountain.name

    newMountainInput.appendChild(mountainOption)
}
