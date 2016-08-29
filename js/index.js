/**
 * Created by jamess on 8/29/2016.
 */
var program = function() {

    var startTimer = function (){

    };

    var submitCodeEntry = function (){
        var val = $('#code-input').val();

        if (val.toLowerCase() === 'x17a'){
            
        }
    };

    var init = function() {

        $(document).on('click', '#start-timer', startTimer);
        $(document).on('click', '#submit-code')

        console.log('init');
        var clock = $('.clock').FlipClock(60 * 15, {
            clockFace: 'DailyCounter',
            countdown: true
        });
    };


    init();
}();