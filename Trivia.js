$(document).ready(function(){
    $.get("https://opentdb.com/api.php?amount=5&category=24&difficulty=easy&type=multiple", function(data){
        general = data.results;
        for(var i = 0; i < 5; i++){
            $(`.${i}`).html("<div class='center'><p>"+general[i].question+"</p><br><p>"+general[i].incorrect_answers[0]+"</p><p>"+general[i].incorrect_answers[1]+"</p><p>"+general[i].correct_answer+"</p><p>"+general[i].incorrect_answers[2]+"</p></div>")
        }
    })
})