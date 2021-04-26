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
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({formUrl: formUrl}),
            })    
            .then(res => {
                return res.json()
            })
            .then(function(data) {
                console.log(data);
                document.getElementById('report').style.display = "block";
                document.getElementById('agreement').innerHTML = data.agreement
                document.getElementById('confidence').innerHTML = data.confidence
                document.getElementById('irony').innerHTML = data.irony
                document.getElementById('model').innerHTML = data.model
                document.getElementById('score').innerHTML = data.score_tag
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
    validator.innerHTML = "<p>URL is not valid, please use a correct URL and try again</p>";
       
};   



export {handleSubmit}
