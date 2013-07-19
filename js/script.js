$(function(){

    var k = 1;
    var current = 1;
    var next = 2;

    var timeStamp = new Date().getTime();

    $(window).bind('mousewheel', function (event, deltaY) {
        var timeNow = new Date().getTime();

        // Need to prevent the default scrolling behavior
        event.preventDefault();

        // If the last mousescroll happened less that 100 ms ago, update
        // timeStamp and do nothing
        if (timeNow - timeStamp < 100) {
            timeStamp = timeNow;
            return;
        } else {
            timeStamp = timeNow;

            current += -deltaY;

            $('#win_' + current).ScrollTo({
                duration: 500
            });

        }
    });
    
});