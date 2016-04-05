$(function(){
    console.log("jq loading");
    
    $('#submit').click(function(){
        $.post('/?b=b', {
            name: $('#name').val()
        }).then(function(resp){
         //   $('#result').html('<pre>' + JSON.stringify(resp.data) + '</pre>')
            $('<pre>' + JSON.stringify(resp) + '</pre>')
                .appendTo('#result')
                .css('background-color', resp.status == 'ok1' ? 'green' : 'red');
        });
    });
});
