function searchMovie() {  
    let xhr = new XMLHttpRequest();  
    let query = document.getElementById("movie_name").value;

    console.log("apiKey");
    console.log(config.apiKey);
    debugger;
    console.log("query");
    console.log(query);
    debugger;
        
   
    xhr.onreadystatechange = function() {
         
        if (this.readyState == 4 && this.status == 200) {
            console.log("readyState == 4 && this.status == 200");
            debugger;
            console.log(this.responseText);
            debugger;
            displayText(this.responseText);
            debugger;
        }
        else {
            console.log("no data");
            debugger;  
            console.log(this.readyState);
            debugger;
            console.log(this.status);
            debugger;          
        }
    };
    
    xhr.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=" + config.apiKey + "&language=en-US&query=" + query + "&page=1&include_adult=false");
    xhr.send();
}

function displayText(data) {
    data = JSON.parse(data);
    let list = "";
    
    for (let i in data.results) {
        list += "<li>" + data.results[i].title + "</li>";
    }
    
    document.getElementById("data").innerHTML = "<ul>" + list + "</ul>";
    
    $("li").click(function() {
        alert(this.textContent);
    });
}
