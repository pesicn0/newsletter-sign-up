let subscribe = document.querySelector('#subscribe-btn');
let dissimis = document.querySelector('#dissimis-btn');
let page1 = document.querySelector('.container');
let page2 = document.querySelector('.container2');
let error = document.querySelector('#error');
subscribe.addEventListener('click', e => {
    let input = document.querySelector('input').value;
    let mpos = input.indexOf('@');
    let dpos = input.indexOf('.');
    let inputLenght = input.length;
    //let error = document.createElement('p');
    //error.id = 'error';
    if (input === '') {
        error.innerText = "Please enter your email address"
    } else if (input.includes('@') && input.includes('.')) {
        if (input.substring(dpos + 1, inputLenght) === 'com') {
            if (parseInt(input.substring(0, mpos).length) > 3 && parseInt(input.substring(mpos + 1, dpos).length) > 3) {  //minimum 3 characters in company and domain name 
                page2.style.display = 'block';
                page1.style.display = 'none';
            } else {
                error.innerText = 'Valid email required'
            }
        } else {
            error.innerText = 'Valid email required'
        }
    } else {
        error.innerText = 'Valid email required'
    }
    //errorDiv.appendChild(error);
})

dissimis.addEventListener('click', e => {
    page2.style.display = 'none';
    page1.style.display = 'flex';
    input.value = '';
})