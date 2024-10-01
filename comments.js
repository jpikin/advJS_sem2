const btn = document.querySelector('.button');
const ulList = document.querySelector('.comments_list');
const input = document.querySelector('.input');


btn.addEventListener('click', (e) => {
    const inputText = input.value;
    
    try {
        validator(inputText);
        const li = document.createElement('li');
        li.classList.add('comment');
        li.textContent = inputText;
        ulList.appendChild(li);
        input.value = '';
    } catch (error) {
        console.error(error);
    }
    
});

function validator(text) {
    if (50 <= text.length && text.length <= 100) {
        return text;
    } else {
        throw new Error(`Длина комментария должна быть от 50 до 100 символов. Сейчас длина комментария ${text.length} символов`);
    }
}
