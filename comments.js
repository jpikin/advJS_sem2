const btn = document.querySelector('.button');
const ulList = document.querySelector('.comments_list');
const input = document.querySelector('.input');
const ID = 0;


/** 
 * Заполняем комментариями из базы данных
 */
initialData.forEach(product => {
    product.reviews.forEach(review =>{
        const li = document.createElement('li');
        li.textContent = review.text;
        ulList.appendChild(li);
    });
});


btn.addEventListener('click', (e) => {
    const inputText = input.value;
    
    try {
        validator(inputText);
        addNewComment(inputText);
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
function addNewComment(text) {
    const li = document.createElement('li');
    li.classList.add('comment');
    li.textContent = text;
    ulList.appendChild(li);
    input.value = '';
}
