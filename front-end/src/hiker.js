const hikersURL = "http://localhost:3000/hikers"

document.addEventListener("DOMContentLoaded", (e) => {

    handleNewPostHikers();
    newHikerForm();

    const newHikerButton = document.getElementById("new-hiker-button");

    newHikerButton.addEventListener("click", () => {
        const newMountainForm = document.getElementById("new-mountain-form");
        const newPostForm = document.getElementById("new-post-form");

        if (newMountainForm.classList.contains("show")) {
            newMountainForm.classList.remove("show")
        }

        if (newPostForm.classList.contains("show")) {
            newPostForm.classList.remove("show");
        }

    });

});

function newHikerForm() {
    const hikerForm = document.getElementById("new-hiker-form")
    hikerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addNewHiker(e);
        hikerForm.reset();
    })
}

function addNewHiker(event) {

    const data = {
        name: event.target[0].value,
        age: event.target[1].value,
        skill: event.target[2].value
    }

    fetch(hikersURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(handleNewPostHikers)
}

function handleNewPostHikers() {
    const newUserInput = document.getElementById("new-post-hiker-input")
    newUserInput.innerHTML = ""

    fetch(hikersURL)
    .then(res => res.json())
    .then(hikers => hikers.forEach(hiker => {
        addHiker(hiker)
    }));
};

function addHiker(hiker) {
    const newUserInput = document.getElementById("new-post-hiker-input")
    const hikerOption = document.createElement("option")
    hikerOption.value = hiker.id
    hikerOption.innerText = hiker.name

    newUserInput.appendChild(hikerOption)
}