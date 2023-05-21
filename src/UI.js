function showHideForm() {
    const formBox = document.querySelector('.addForm');
    const form = document.querySelector('.bookForm');
    const addButton = document.querySelector('.add');
    formBox.classList.toggle('showForm')
    addButton.classList.toggle('hideAdd')
    form.reset()
}

function displayAddForm() {
    const addButton = document.querySelector(".addButton");
    const cancelAdd = document.querySelector('.cancelAdd');

    addButton.addEventListener('click', showHideForm)
    cancelAdd.addEventListener('click', function() {
        const inputs = document.querySelectorAll('.bookForm input');
        inputs.forEach(input => input.classList.remove('invalid'))
        showHideForm();
    })
}

function inputIsValid() {
    const inputs = document.querySelectorAll('.bookForm input');
    function isInvalid(input) {
        input.classList.toggle('invalid', input.value === '');
    };

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            isInvalid(input);
        })
        isInvalid(input)
    })
};

function readStatus(button, book) {
    const isRead = book.getReadStat() ? true:false;
    const buttonText = isRead ? 'Have Read' : 'To Read';
    const toggleClass = 'haveRead';

    button.textContent = buttonText;
    button.classList.toggle(toggleClass, isRead);
}

function deleteBook(button) {
    button.parentNode.remove();
}


export default {
    displayAddForm,
    showHideForm,
    inputIsValid,
    readStatus,
    deleteBook,
}