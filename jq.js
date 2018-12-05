$.getJSON("https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN", function (file) {
    
    var html="<div class='carousel-inner row w-100 mx-auto'>";
    var active="active";
    for (var i=1 ; i<=file.data.length ; i++) {
        if (i>1)
        active="";
        html+=
       " <div class='carousel-item col-md-4 " + active + "'> "+
       "<div class='card'> "+
          " <img class='card-img-top img-fluid' src='http://"+file.data[i].imagePath+"' alt='Card image cap'> "+
          "<div class='card-body'> "+
          " <h4 class='card-title'>" +file.data[i].label+"</h4> "+
          " <p class='card-text'>"+file.data[i].Services[0].label_service+"<br>"+file.data[i].Services[1].label_service+".</p> "+
          " <p class='card-text'><small class='text-muted'>"+file.data[i].Services[1].id_service+"</small></p> "+
          "</div>"+
          " </div>"+
          " </div>";


                document.getElementById("test").innerHTML = html;
    
        }

        
        

});





