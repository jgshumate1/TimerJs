/**
 * Created by jamess on 8/29/2016.
 */
var program = function() {
    var clock = null;

    var countdownDone = function (){
        console.log('done');
        $('body').css('background-color', 'green');
        $('.message').text('Launch Successful!');

    };

    var startTimer = function (){

        $('#start-timer').remove();
        clock = $('.clock').FlipClock(60 * 15, {
            clockFace: 'DailyCounter',
            countdown: true,
            callbacks: {
                stop: countdownDone

            }
        });
    };

    var submitCodeEntry = function (){
        var val = $('#code').val();
console.log(val);
        if (!val)
        {
            return;
        }

        if (val.toLowerCase() === 'x17a'){
            clock.stop();
            console.log('success stoping launch');
            $('body').css('background-color', 'red');
            $('.message').text('Launch Aborted!');
        }
    };

    var init = function() {

        $(document).on('click', '#start-timer', startTimer);
        $(document).on('click', '#submit-code', submitCodeEntry);
    };
    init();
}();