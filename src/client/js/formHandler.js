import {checkUrl} from "./checkUrl";



document.getElementById('submit').addEventListener('click', handleSubmit);
document.getElementById('reset').addEventListener('click', pageReset);
const validator = document.getElementById('url_validation');

function handleSubmit(event) {
    event.preventDefault();
    let formUrl = document.getElementById('url').value
    validator.innerHTML = '';
    document.getElementById('report').style.display = "none";

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
            .then(function(res) {
                return res.json()
            })
            .then(function(data) {
                console.log(data);
                
                document.getElementById('report').style.display = "block";
                document.getElementById('agreement').innerHTML = "<p>Agreement:</p>" + data.agreement
                document.getElementById('confidence').innerHTML = "<p>Confidence:</p>" + data.confidence
                document.getElementById('irony').innerHTML = "<p>Irony:</p>" + data.irony
                document.getElementById('score').innerHTML = "<p>Score:</p>" + data.score_tag
            })
        console.log(":::Form Submitted:::");
            
        } else {
                console.log(formUrl)
                errorMessage()
            }  
};

//need to change this, it is creating a new paragraph on each wrong submission instead of removing and updating the same one
function errorMessage() {    
    validator.innerHTML = "<p>URL is not valid, please use a correct URL and try again</p>"; 
};   


function pageReset() {
    const validator = document.getElementById('url_validation');
    validator.innerHTML = '';
    document.getElementById('report').style.display = "none";
}




export {handleSubmit}
