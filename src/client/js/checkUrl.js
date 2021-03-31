function checkUrl(formText) { 
    var url = document.getElementById('url').value; 
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; 
    if (pattern.test(url)) { 
        alert("Url is valid"); 
        return true; 
    }  
        alert(`URL entered is not Valid. Please submit a valir URL and try again`); 
        return false; 
} 

export {checkUrl}