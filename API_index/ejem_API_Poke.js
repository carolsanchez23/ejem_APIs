var idp=1;
var long=0;

   const url="https://carolsanchez23.github.io/ejem_json_api/API_index.json";
   
   
   function buscar(){
    
    fetch(url)
    .then(function(response){
        return response.json();    
    })

    .then(function(data){
        console.log(data.figures);
        long=data.figures.length;
        console.log("lenght:"+ long);
    
        var res= data.figures.filter(item=>item.id===idp);
        console.log(res);
        var imagen=document.getElementById('pkm-img');
        imagen.src=res[0].figure;
        var p1=document.getElementById('name');
        p1.innerHTML="<b>Nombre: </b>"+res[0].name;
    })

    .catch(function(error){
        console.log(error);           
    });

    if (idp >= long){
        idp=1;
    }else{
        idp++;
    }
    
}