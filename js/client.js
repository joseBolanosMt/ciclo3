function load(){
    $.ajax({
        url:'https://gad20835e6abd98-db202109232038.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: "GET",
        dataType: "json",
        success: function(respuesta){
            console.log(respuesta);
            $("#resultado").html("");
            pintarRespuesta(respuesta.items);
        }
    });
}

function pintarRespuesta(items){
    var myTable = "<table class='table table-striped'> <thead> <tr><th scope='col'>Id</th><th scope='col'>Name</th><th scope='col'>E-mail</th><th scope='col'>Age</th></tr></thead>";
    for(i=0;i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"</td>";
        myTable += "<td>"+items[i].name+"</td>";
        myTable += "<td>"+items[i].email+"</td>";
        myTable += "<td>"+items[i].age+"</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function remove(){
    let mydata={
       id:$("#idr")
   }
   let dataToSend = JSON.stringify(mydata);
   $.ajax({
       url:"https://gbe31928932c95e-db202109232118.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
       type:"DELETE",
       data: dataToSend,
       contentType:"application/JSON",
       dataType:'json',
       success:function(respuesta){
           console.log(respuesta);
       }
   });

}
