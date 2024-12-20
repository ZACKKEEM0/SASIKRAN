function upTime(countTo) {
    now = new Date(); // Current date
    countTo = new Date(countTo); // Target date
    difference = now - countTo; // Calculate the difference in milliseconds

    // Calculate years, months, days, hours, minutes, and seconds
    days = Math.floor(difference / (60 * 60 * 1000 * 24));
    years = Math.floor(days / 365);
    if (years >= 1) {
        days -= years * 365;
    }

    months = Math.floor(days / 30); // Approximate months as 30 days
    if (months >= 1) {
        days -= months * 30;
    }

    hours = Math.floor((difference % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000));
    mins = Math.floor(((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000));
    secs = Math.floor((((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000);

    // Update the HTML with the calculated values
    $(".up_y").text(years);
    $(".up_mn").text(months);
    $(".up_d").text(days);
    $(".up_h").text(hours);
    $(".up_m").text(mins);
    $(".up_s").text(secs);

    // Recalculate every second
    clearTimeout(upTime.to);
    upTime.to = setTimeout(function () {
        upTime(countTo);
    }, 1000);
}


// init datetimepicker ใน id yearinput
$('#yearinput').appendDtpicker({
    "inline": false,
    "current": "2022-6-18 00:00"

});
START()
// จับ event ในการกดปุ่มคำนวณ	 
function START() {

    // ดึง object date จาก datepicker
    var date = $('#yearinput').handleDtpicker('getDate');


    // ส่วนนี้เป็นการจัดเรียงรูปแบบ date ให้เป็น string เพื่อใส่ใน function upTime()			
    var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov',
        'Dec'
    ];
    var month = month_names_short[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
    var h_r = date.getHours();
    var m_r = date.getMinutes();
    var s_r = date.getMilliseconds();
    var usein = month + ',' + day + ',' + year + ',' + h_r + ':' + m_r + ':' + s_r;

    // เรียกใช้ upTime			
    upTime(usein);
    return false;

};
// Add this at the end of your body or in index.js
document.addEventListener('DOMContentLoaded', function () {
    var IMG_DATA = [
        'https://cdn.discordapp.com/attachments/675285645916372992/1185633941215006822/IMG_3767.jpg',
        'https://cdn.discordapp.com/attachments/675285645916372992/1185633941676368044/IMG_3716.jpg',
        'https://cdn.discordapp.com/attachments/675285645916372992/1185633942112587776/IMG_3717.jpg',
        'https://cdn.discordapp.com/attachments/675285645916372992/1185633942590726194/IMG_3705.jpg',
        'https://cdn.discordapp.com/attachments/675285645916372992/1185633943039524885/IMG_3664.jpg',
        'https://cdn.discordapp.com/attachments/675285645916372992/1185633943354089492/3D7EBA46-E65F-4F78-A94B-3798055BCF8B.jpg',
        'https://cdn.discordapp.com/attachments/675285645916372992/1185633943651893298/95E084C7-B711-4E01-A8BA-CE818FC6268F.jpg',
        'https://cdn.discordapp.com/attachments/675285645916372992/1185633944213934171/IMG_2664.jpg'
    ];

    function createBubble(imgSrc) {
        var bubble = document.createElement('div');
        bubble.classList.add('bubble');

        var img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'Bubble Image';

        bubble.appendChild(img);
        document.querySelector('.bubbles-container').appendChild(bubble);
    }

    function createBubbles() {
        IMG_DATA.forEach(function (imgSrc) {
            // Create bubbles at random positions
            var leftPos = Math.random() * window.innerWidth;
            var topPos = Math.random() * window.innerHeight;

            createBubble(imgSrc);

            // Animate the bubbles to float across the screen
            var bubble = document.querySelector('.bubble:last-child');
            bubble.style.left = leftPos + 'px';
            bubble.style.top = topPos + 'px';
            bubble.style.animationDuration = Math.floor(Math.random() * 2) + 2 + 's'; // Random duration between 5-10 seconds
        });
    }

    // Call the function to create bubbles
    createBubbles();
});
