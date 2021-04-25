import {checkUrl} from "./checkUrl";



document.getElementById('submit').addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let formUrl = document.getElementById('url').value
        if(checkUrl(formUrl)) {
            console.log(formUrl)
            fetch('http://localhost:8001/analysis', {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'cors',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body:JSON.stringify({formUrl: formUrl}),
            })    
            .then(res => {
                return res.json()
            })
            .then(function(data) {
                console.log(data);
                document.getElementById('report').innerHTML = data.message
            })
        console.log(":::Form Submitted:::");
            
        } else {
                alert('invalid URL')
                console.log(formUrl)
                errorMessage()
            }  
};

//need to change this, it is creating a new paragraph on each wrong submission instead of removing and updating the same one
function errorMessage() {
    const validator = document.getElementById('url_validation');
    const newP = document.createElement('p');
    newP.innerText = "URL is not valid, please use a correct URL and try again";
    validator.appendChild(newP);    
};   



export {handleSubmit}
