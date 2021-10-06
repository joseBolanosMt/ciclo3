function charge(){
    var data={
        id:$("#id").val(),
        address:$("#address").val(),
        exension:$("#exension").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
    }
    var dataToSend=JSON.stringify(data);
    $.ajax({
            dataType: 'json',
            data:data,
            url:"https://gad20835e6abd98-db202109232038.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
            type:'POST',

            success:function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {

            }
        });
}
