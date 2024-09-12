// next prev
var divs = $('.show-section section');
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first

//show active step
function showActiveStep()
{
    if ($('#step1').is(':visible'))
    {
        $(".step-bar .fill").css('width', '0%');
        $(".sideimg").attr('src','assets/images/side-1.png')
    }
    else if ($('#step2').is(':visible'))
    {
        $(".step-bar .fill").css('width', '20%');
        $(".sideimg").attr('src','assets/images/side-2.png')

    }
    else if ($('#step3').is(':visible'))
    {
        $(".step-bar .fill").css('width', '40%');
        $(".sideimg").attr('src','assets/images/side-3.png')

    }
    else if ($('#step4').is(':visible'))
    {
        $(".step-bar .fill").css('width', '60%');
        $(".sideimg").attr('src','assets/images/side-4.png')

    }
    else if ($('#step5').is(':visible'))
    {
        $(".step-bar .fill").css('width', '80%');
        $(".sideimg").attr('src','assets/images/side-5.png')

    }
    else
    {
    console.log("error");
    }
}


function next()
{
    divs.eq(now).hide();
    now = (now + 1 < divs.length) ? now + 1 : 0;
    divs.eq(now).show(); // show next
    console.log(now);

    showActiveStep();
}


$(".prev").on('click', function()
{

    $('.radio-field').addClass('bounce-left');
    $('.radio-field').removeClass('bounce-right');
    divs.eq(now).hide();
    now = (now > 0) ? now - 1 : divs.length - 1;
    divs.eq(now).show(); // show previous
    console.log(now);

    showActiveStep();

})


// quiz validation
var checkedradio = false;

function radiovalidate(stepnumber)
{
    var checkradio = $("#step"+stepnumber+" input").map(function()
    {
    if($(this).is(':checked'))
    {
        return true;
    }
    else
    {
        return false;
    }
    }).get();

    checkedradio = checkradio.some(Boolean);
}



// form validation
$(document).ready(function()
{

    // check step1
    $("#step1btn").on('click', function()
    {

        radiovalidate(1);

        if(checkedradio == false)
        {
            
            
        (function (el) {
            setTimeout(function () {
                el.children().remove('.reveal');
            }, 3000);
            }($('#error').append('<div class="reveal alert alert-danger">Choose an option!</div>')));
            
            radiovalidate(1);

        }
        
        else
        {

            var unit_id=$('.unit_name input[name="op1"]:checked').attr('data-id');
           
            show_pricing(unit_id);

            
            $('#step1 .radio-field').removeClass('bounce-left');
            $('#step1 .radio-field').addClass('bounce-right');
            setTimeout(function()
            {
                next();
            }, 900)
            countresult(1);

        }


    })

    // check step2
    $("#step2btn").on('click', function()
    {
        radiovalidate(2);

        if(checkedradio == false)
        {
            
        (function (el) {
            setTimeout(function () {
                el.children().remove('.reveal');
            }, 3000);
            }($('#error').append('<div class="reveal alert alert-danger">Choose an option!</div>')));
            
            radiovalidate(2);

        }

        else
        {
            $('#step2 .radio-field').removeClass('bounce-left');
            $('#step2 .radio-field').addClass('bounce-right');
            setTimeout(function()
            {
                next();
            }, 900)
            countresult(2);

        }
    })

    // check step3
    $("#step3btn").on('click', function()
    {
        radiovalidate(3);

        if(checkedradio == false)
        {
            
        (function (el) {
            setTimeout(function () {
                el.children().remove('.reveal');
            }, 3000);
            }($('#error').append('<div class="reveal alert alert-danger">Choose an option!</div>')));
            
            radiovalidate(3);

        }

        else
        {
            $('#step3 .radio-field').removeClass('bounce-left');
            $('#step3 .radio-field').addClass('bounce-right');
            setTimeout(function()
            {
                next();
            }, 900)
            countresult(3);

        }
    })

    // check step4
    $("#step4btn").on('click', function()
    {
        radiovalidate(4);

        if(checkedradio == false)
        {
            
        (function (el) {
            setTimeout(function () {
                el.children().remove('.reveal');
            }, 3000);
            }($('#error').append('<div class="reveal alert alert-danger">Choose an option!</div>')));
            
            radiovalidate(4);

        }

        else
        {
            $('#step4 .radio-field').removeClass('bounce-left');
            $('#step4 .radio-field').addClass('bounce-right');
            setTimeout(function()
            {
                next();
            }, 900)
            countresult(4);

        }
    })

    // check last step
    $("#sub").on('click', function()
    {
        radiovalidate(5);

        if(checkedradio == false)
        {
            
        (function (el) {
            setTimeout(function () {
                el.children().remove('.reveal');
            }, 3000);
            }($('#error').append('<div class="reveal alert alert-danger">Choose an option!</div>')));
            
            radiovalidate(5);

        }

        else
        {
            countresult(5);
            showresult();
            $("#sub").html('done');

        }
    })
})

function showresult()
{
    $('.loadingresult').css('display', 'grid');

    setTimeout(function()
    {
        $('.result_page').addClass('result_page_show');

    },1000)
};

        
        
//correct answers
var correct_answers = ['horse','Lion','horse','Lion', 'horse'];

// user answers
let correct = 0;

var steps = $('section').length;



console.log(steps);
function countresult(resultnumber)
{
    $('#step'+resultnumber+' .radio-field input').each(function()
    {
        for(var i = 0; i<=correct_answers.length; i++)
        {
            if($(this).is(':checked'))
        {
            if($(this).val() == correct_answers[i])
            {
                
    
                correct++;

                break;
    
            }
        }
        }
    
    })

    var correctprcnt = correct / steps * 100;

    $('.u_prcnt').html(correctprcnt + '%');
    $('.prcnt_bar .fill').css('width', correctprcnt + '%');
    if(correctprcnt < 50)
    {
        $('.prcnt_bar_lvl').html('low');
        $('.u_prcnt, .prcnt_bar_lvl, .result_msg').css('color', 'rgb(229, 0, 26)');
        $('.prcnt_bar .fill').css('background-color', 'rgb(229, 0, 26)');
        $('.result_msg').html('<img src="assets/images/cross.png" alt="cross"> You Failed!')
    }
    else if(correctprcnt < 80)
    {
        $('.prcnt_bar_lvl').html('Medium');
        $('.u_prcnt, .prcnt_bar_lvl, .result_msg').css('color', 'rgb(255, 89, 0)');
        $('.prcnt_bar .fill').css('background-color', 'rgb(255, 89, 0)');
        $('.result_msg').html('<img src="assets/images/warning.png" alt="warning"> Could have done better!')


    }
    else if(correctprcnt >= 80)
    {
        $('.prcnt_bar_lvl').html('High');
        $('.u_prcnt, .prcnt_bar_lvl, .result_msg').css('color', 'rgb(60, 196, 52)');
        $('.prcnt_bar .fill').css('background-color', 'rgb(60, 196, 52)');
        $('.result_msg').html('<img src="assets/images/check.png" alt="check"> Wow! You are Brilliant!')


    }
}

function show_pricing(unit_id)
{
    
    $.ajax({

        url:base_url+'ajax/quiz_pricing.php',
        data:{unit_id:unit_id},
        type:'POST',
        dataType:'json',
        beforeSend:function()
        {

        },
        success:function(r)
        {
            $('.price_range').html(r.data);
        }

    });
}



