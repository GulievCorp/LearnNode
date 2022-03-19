import fs from 'fs';

let filez = document.getElementsByClassName('.filez');



let fileInput = document.createElement('input');

fileInput.value = 'Загрузить';
fileInput.type = 'file';

console.log(document);
console.log(filez);


document.body.appendChild(fileInput);

fileInput.addEventListener('change', (e) => {
    console.log(e);
});

