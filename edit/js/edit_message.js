function charge(){
    var data={
        id:$("#id").val(),
        messagetext:$("#messagetext").val()
    }
    var dataToSend=JSON.stringify(data);
    $.ajax({
            dataType: 'json',
            data:data,
            url:"https://gad20835e6abd98-db202109232038.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
            type:'POST',

            success:function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {

            }
        });
}