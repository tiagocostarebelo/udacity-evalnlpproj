function checkUrl() { 
    const url = document.getElementById('url').value; 
    const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; 
    if (pattern.test(url)) { 
        
        return true; 
    }  else {
       
        return false; 
    }
} 

export {checkUrl}