import "./style.scss";

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

const fillList = () => {
    const ul = document.querySelector('#list');

    ul.innerHTML = '';
    const existingList = JSON.parse(localStorage.getItem('list') ?? '[]');
    existingList.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fillList();

    document.querySelector('#clear-button').addEventListener('click', () => {
        localStorage.setItem('list', JSON.stringify([]));
        fillList();
    })

    document.querySelector('#add-button').addEventListener('click', () => {
        const input = document.querySelector('#input');
        const existingList = JSON.parse(localStorage.getItem('list') ?? '[]');
        existingList.push(input.value);
        localStorage.setItem('list', JSON.stringify(existingList));

        fillList()
        input.value = '';
    })
})