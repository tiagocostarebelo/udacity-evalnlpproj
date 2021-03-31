function handleSubmit(event) {
    event.preventDefault();
    let formUrl = document.getElementById('url').value;
    console.log(formUrl);
}

export {handleSubmit}
