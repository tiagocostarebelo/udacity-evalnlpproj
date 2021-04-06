import {checkUrl} from "./checkUrl";

document.getElementById('submit').addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let formUrl = document.getElementById('url').value
        if(checkUrl(formUrl)) {
            console.log(formUrl)
        } else {
            console.log('invalid URL')
            console.log(formUrl)
            errorMessage()
        }  
};

function errorMessage() {
    const validator = document.getElementById('url_validation');
    const newP = document.createElement('p');
    newP.innerText = "URL is not valid, please use a correct URL and try again";
    validator.appendChild(newP);    
};   


export {handleSubmit}
