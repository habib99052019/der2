

$('.applynow').on('click',function(e){
    
$('.modal').attr('style','display:none');
$('.jquery-modal').removeClass('blocker');
    
});


$('.video-close').on('click',function(e){

//$('#myVideo').prop('muted', true);

var video = $('#myVideo')[0]; // Get the native video element
video.currentTime = 0; // Reset the current time to 0
video.pause(); // Pause the video
});


$('.c-video-btn').on('click',function(e){
   
   
      var video = $('#myVideo')[0]; // Get the native video element
    video.play(); // Start playing the video
});


$('.modal').attr('style','display:none');
$('.jquery-modal').removeClass('blocker');


/*Book valuation validation starts*/

$('#book-val-frm').validate({
    
   rules:
   {
       name:
       {
           required:true
       },
       email:
       {
           required:true,
           email:true
       },
       phone:
       {
           required:true,
           number:true
       },
       location:
       {
           required:true
       },
       appointment_date:
       {
           required:true
       },
       appointment_time:
       {
           required:true
       },
                        captcha_bookval_text: 
    {
    required: true,
    remote: {
        url: ""+base_url+"captcha/check-bookval-captcha.php",
        type: "post",
        data: {
            captcha: function() {
                return $("#captcha_bookval_text").val();
            }
        }
    }
}
   },
   messages:
   {
        name:
       {
           required:'Name is required'
       },
       email:
       {
           required:'Email ID is required',
           email:'Enter a valid Email ID'
       },
       phone:
       {
           required:'Phone Number is required',
           number:'Phone Number must be a numeric value'
       },
       location:
       {
           required:'Location is required'
       },
       appointment_date:
       {
           required:'Appointment Date is required'
       },
       appointment_time:
       {
           required:'Appointment Time is required'
       },
         captcha_bookval_text: 
     {
    required: "Please Enter Captcha",
    remote: "The code you entered does not match the captcha"

   }
   },
      submitHandler:function(form)
{
   var book_val_phone_hidden=$('#book-val-frm .iti__selected-country').attr('title');
   $('input[name="book_val_phone_hidden"]').val(book_val_phone_hidden);

    $.ajax({
   
   url:base_url+'ajax/bookval_frm.php',
   data:$('#book-val-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('input[name="book_val_submit"]').val('WAIT...');
     $('input[name="book_val_submit"]').prop('disabled',true);

   },
   success:function(r)
   {

     if(r.status=='success')
     {
        alert(r.msg);
        $('input[name="book_val_submit"]').val('Submit');
        $('input[name="book_val_submit"]').prop('disabled',false);
        $('#book-val-frm')[0].reset();
     }
     else
     {
	 	alert(r.msg);
	    $('input[name="book_val_submit"]').val('Submit');
	    $('input[name="book_val_submit"]').prop('disabled',false);
	    $('#book-val-frm')[0].reset();
     }

   }


   });

	
}
    
    
});


/*Book valuation validation ends*/

/*Bitcoin form validation starts*/

$('#bitcoin-frm').validate({
    
   rules:
   {
       name:
       {
           required:true
       },
       email:
       {
           required:true,
           email:true
       },
       mobile:
       {
           required:true,
           number:true
       }
   },
   messages:
   {
        name:
       {
           required:'Name is required'
       },
       email:
       {
           required:'Email ID is required',
           email:'Enter a valid Email ID'
       },
       mobile:
       {
           required:'Mobile Number is required',
           number:'Mobile Number must be a numeric value'
       }
   },
   submitHandler:function(form)
{
   var bitcoin_phone_number_hidden=$('#bitcoin-frm .iti__selected-country').attr('title');
   $('input[name="bitcoin_phone_number_hidden"]').val(bitcoin_phone_number_hidden);

    $.ajax({
   
   url:base_url+'ajax/bitcoin_frm.php',
   data:$('#bitcoin-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('button[name="bitcoin_submit"]').text('WAIT...');
     $('button[name="bitcoin_submit"]').prop('disabled',true);

   },
   success:function(r)
   {

     if(r.status=='success')
     {
		alert(r.msg);
	    $('button[name="bitcoin_submit"]').text('Submit Your Information');
	    $('button[name="bitcoin_submit"]').prop('disabled',false);
	    $('#bitcoin-frm')[0].reset();
     }
     else
     {
	 	alert(r.msg);
	    $('button[name="bitcoin_submit"]').text('Submit Your Information');
	    $('button[name="bitcoin_submit"]').prop('disabled',false);
	    $('#bitcoin-frm')[0].reset();
     }

   }


   });

	
}
    
    
});


/*Bitcoin form validation ends*/



/*Apply loan validation starts*/


$('#loan-frm').validate({


rules:
{
	gender:
	{
		required:true
	},
	full_name:
	{
		required:true
	},
	phone_number:
	{
		required:true,
		number:true
	},
	date_of_birth:
	{
		required:true
	}
},
messages:
{
	gender:
	{
		required:'Gender is required'
	},
	full_name:
	{
		required:'Name is required'
	},
	phone_number:
	{
		required:'Mobile Number is required',
		number:'Mobile Number must be a numeric value'
	},
	date_of_birth:
	{
		required:'Date of Birth is required'
	}

},
errorPlacement: function (error, element) {
    var name = $(element).attr("name");
    error.appendTo($("#" + name + "_validate"));
},
submitHandler:function(form)
{

   var loan_phone_number_hidden=$('#loan-frm .iti__selected-country').attr('title');
   $('input[name="loan_phone_number_hidden"]').val(loan_phone_number_hidden);

    $.ajax({
   
   url:base_url+'ajax/loan_frm.php',
   data:$('#loan-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('button[name="loan_submit"]').text('WAIT...');
     $('button[name="loan_submit"]').prop('disabled',true);

   },
   success:function(r)
   {

     if(r.status=='success')
     {
		alert(r.msg);
	    $('button[name="loan_submit"]').text('Submit');
	    $('button[name="loan_submit"]').prop('disabled',false);
	    $('#loan-frm')[0].reset();
     }
     else
     {
	 	alert(r.msg);
	    $('button[name="loan_submit"]').text('Submit');
	    $('button[name="loan_submit"]').prop('disabled',false);
	    $('#loan-frm')[0].reset();
     }

   }


   });

	
}


});


/*Apply loan validation ends*/


/*Quiz js starts*/

$('#dialog-main .popup__close').on('click',function(e){
   
   
$('#dialog-main').removeAttr('open');
    
    
});


/*Quiz js ends*/

/*Mortgage form validation starts*/

$('#mortgage-frm').validate({


rules:
{
	name:
	{
		required:true
	},
	email:
	{
		required:true,
		email:true
	},
	mobile:
	{
		required:true,
		number:true
	},
	         captcha_mortgcal_text: 
    {
    required: true,
    remote: {
        url: ""+base_url+"captcha/check-mortgcal-captcha.php",
        type: "post",
        data: {
            captcha: function() {
                return $("#captcha_mortgcal_text").val();
            }
        }
    }
}
},
messages:
{
	name:
	{
		required:'Name is required'
	},
	email:
	{
		required:'Email ID is required',
		email:'Enter a valid Email ID'
	},
	mobile:
	{
		required:'Mobile Number is required',
		number:'mobile Number must be a numeric value'
	},
	 captcha_mortgcal_text: 
     {
    required: "Please Enter Captcha",
    remote: "The code you entered does not match the captcha"

   }
},
submitHandler:function(form)
{

   var mortg_phone_number_hidden=$('#mortgage-frm .iti__selected-country').attr('title');
   $('input[name="mortg_phone_number_hidden"]').val(mortg_phone_number_hidden);

    $.ajax({
   
   url:base_url+'ajax/mortg_frm.php',
   data:$('#mortgage-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('input[name="mortg_submit"]').val('WAIT...');
     $('input[name="mortg_submit"]').prop('disabled',true);

   },
   success:function(r)
   {

     if(r.status=='success')
     {
		alert(r.msg);
	    $('input[name="mortg_submit"]').val('Submit');
	    $('input[name="mortg_submit"]').prop('disabled',false);
	    $('#mortgage-frm')[0].reset();
     }
     else
     {
	 	alert(r.msg);
	    $('input[name="mortg_submit"]').val('Submit');
	    $('input[name="mortg_submit"]').prop('disabled',false);
	    $('#mortgage-frm')[0].reset();
     }

   }


   });



}




});


/*Mortgage form validation ends*/


/*Quiz validation starts here */


$('#quiz-frm').validate({

rules:
{
	name:
	{
		required:true
	},
	email:
	{
		required:true,
		email:true
	},
	mobile:
	{
		required:true,
		number:true
	}
},
messages:
{
	name:
	{
		required:'Name is required'
	},
	email:
	{
		required:'Email ID is required'
	},
	mobile:
	{
		required:'Mobile Number is required',
		number:'Mobile Number must be a numeric value'
	}
},
submitHandler:function(form)
{
   var quiz_phone_number_hidden=$('#quiz-frm .iti__selected-country').attr('title');
   $('input[name="quiz_phone_number_hidden"]').val(quiz_phone_number_hidden);

    $.ajax({
   
   url:base_url+'ajax/quiz_frm.php',
   data:$('#quiz-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('button[name="quiz_submit"]').text('WAIT...');
     $('button[name="quiz_submit"]').prop('disabled',true);

   },
   success:function(r)
   {

     if(r.status=='success')
     {
		alert(r.msg);
	    $('button[name="quiz_submit"]').text('Submit');
	    $('button[name="quiz_submit"]').prop('disabled',false);
	    $('#quiz-frm')[0].reset();
     }
     else
     {
	 	alert(r.msg);
	    $('button[name="quiz_submit"]').text('Submit');
	    $('button[name="quiz_submit"]').prop('disabled',false);
	    $('#quiz-frm')[0].reset();
     }

   }


   });


	
}


});


/*Quiz validation ends here */


/*Currency Dropdown custom code starts*/


function numberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


$(document).delegate('select[name="to"]','change',function(e){


var $t=$(this);
var id=$t.attr('data-id');
var to=$t.val();
var from='AED';
var amnt=$('input[amnt-id='+id+']').val();


$.ajax({

	url:base_url+'ajax/currency.php',
	data:{to:to,from:from,amnt:amnt,id:id},
	type:'POST',
	dataType:'json',
	beforeSend:function()
	{
		$('.cur_price_'+id+'').text('Wait...');
	},
	success:function(r)
	{
	//	alert(r.currency);

		$('.cur_price_'+r.id+'').text(numberWithCommas(r.currency.toFixed(0)));

	}
});



});



/*Currency Dropdown custom code ends*/






$(document).delegate('.popup_click','click',function(e){

	var $t=$(this);
	var pdf_url=$t.attr('data-url');
	var download_type=$t.attr('data-name');
	$('input[name="brochure_url"]').val(pdf_url);
	$('input[name="download_type"]').val(download_type);
});


/*Phone Enquiry phone starts*/



var enq_phone = document.querySelector("#enq_phone");
window.intlTelInput(enq_phone, {
allowDropdown: true,
// autoHideDialCode: false,
autoPlaceholder: "on",
// dropdownContainer: document.body,
// excludeCountries: ["us"],
// formatOnDisplay: false,
// geoIpLookup: function(callback) {
//   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//     var countryCode = (resp && resp.country) ? resp.country : "";
//     callback(countryCode);
//   });
// },
// hiddenInput: "full_number",
initialCountry: "ae",
// localizedCountries: { 'de': 'Deutschland' },
nationalMode: true,
// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
// placeholderNumberType: "MOBILE",
preferredCountries: ['ae'],
separateDialCode: true,
utilsScript: "js/utils.js",
});


/*Phone Enquiry phone ends*/




var pageURL = window.location.href;
var lastSlug = pageURL.replace(/\/$/, "").split("/").pop();


if(lastSlug=='book-valuation' || lastSlug=='mortgage-calculator')
{
    
/* Book your valuation intl input starts*/    
var book_val_phone = document.querySelector("#book_val_phone");
window.intlTelInput(book_val_phone, {
allowDropdown: true,
// autoHideDialCode: false,
autoPlaceholder: "on",
// dropdownContainer: document.body,
// excludeCountries: ["us"],
// formatOnDisplay: false,
// geoIpLookup: function(callback) {
//   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//     var countryCode = (resp && resp.country) ? resp.country : "";
//     callback(countryCode);
//   });
// },
// hiddenInput: "full_number",
initialCountry: "ae",
// localizedCountries: { 'de': 'Deutschland' },
nationalMode: true,
// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
// placeholderNumberType: "MOBILE",
preferredCountries: ['ae'],
separateDialCode: true,
utilsScript: "js/utils.js",
});

/* Book your valuation intl input ends*/
}







/*Pagination for testimonial start*/
$(document).delegate('.paging_testimonial','click',function(e){

var $t=$(this);
var page_id=$t.attr('data-id');

$.ajax({

url:base_url+'ajax/testimonial_paging.php',
data:{page_id:page_id},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('html, body').animate({
scrollTop: $(".test_pos").offset().top
}, 250);

$('.test_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});

/*Pagination for testimonial ends*/

/*Pagination for awards start*/
$(document).delegate('.paging_awards','click',function(e){


var $t=$(this);
var page_id=$t.attr('data-id');

$.ajax({

url:base_url+'ajax/awards_paging.php',
data:{page_id:page_id},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('html, body').animate({
scrollTop: $(".award_pos").offset().top
}, 250);

$('.award_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});
/*Pagination for awards ends*/


/*Pagination for Blog start*/
$(document).delegate('.paging_blog','click',function(e){

var $t=$(this);
var page_id=$t.attr('data-id');
var name=$('input[name="search_blog"]').val();


$.ajax({

url:base_url+'ajax/blog_paging.php',
data:{page_id:page_id,name:name},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('html, body').animate({
scrollTop: $(".blog_pos").offset().top
}, 250);

$('.blog_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});

/*Pagination for Blog ends*/

/*blog search starts*/

$(document).delegate('input[name="search_blog"]','keyup',function(e){

var $t=$(this);
var name=$t.val();

$.ajax({

url:base_url+'ajax/blog_search.php',
data:{name:name},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('.blog_data').html(r.record);
$('.pagination').html(r.paging); 
}
});



});

/*blog search ends*/


/*Pagination for Blog Detail start*/
$(document).delegate('.paging_blog_detail','click',function(e){

var $t=$(this);
var page_id=$t.attr('data-id');
var blg_slug=$t.attr('blg-slug');

$.ajax({

url:base_url+'ajax/blog_detail_paging.php',
data:{page_id:page_id,blg_slug:blg_slug},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('.blog_detail_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});

/*Pagination for Blog Detail ends*/



/*Pagination for Community start*/
$(document).delegate('.paging_comm','click',function(e){

var $t=$(this);
var page_id=$t.attr('data-id');
var name=$('input[name="search_comm"]').val();


$.ajax({

url:base_url+'ajax/comm_paging.php',
data:{page_id:page_id,name:name},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('html, body').animate({
scrollTop: $(".comm_pos").offset().top
}, 250);

$('.comm_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});

/*Pagination for Community ends*/



/*Pagination for Community detail page start*/
$(document).delegate('.paging_comm_detail','click',function(e){

var $t=$(this);
var page_id=$t.attr('data-id');
var proj_id=$t.attr('proj-id');


$.ajax({

url:base_url+'ajax/comm_detail_paging.php',
data:{page_id:page_id,proj_id:proj_id},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('html, body').animate({
scrollTop: $(".comm_pos").offset().top
}, 250);

$('.comm_detail_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});

/*Pagination for Community detail page ends*/

/*Community search starts*/

$(document).delegate('input[name="search_comm"]','keyup',function(e){

var $t=$(this);
var name=$t.val();


$.ajax({

url:base_url+'ajax/comm_search.php',
data:{name:name},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('.comm_data').html(r.record);
$('.pagination').html(r.paging); 
}
});



});

/*Community search ends*/

/*Pagination for Media start*/
$(document).delegate('.paging_media','click',function(e){

var $t=$(this);
var page_id=$t.attr('data-id');


$.ajax({

url:base_url+'ajax/media_paging.php',
data:{page_id:page_id},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('html, body').animate({
scrollTop: $(".media_pos").offset().top
}, 250);

$('.media_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});

/*Pagination for Media ends*/



/*Pagination for Developer start*/
$(document).delegate('.paging_dev','click',function(e){

var $t=$(this);
var page_id=$t.attr('data-id');
var name=$('input[name="search_dev"]').val();


$.ajax({

url:base_url+'ajax/dev_paging.php',
data:{page_id:page_id,name:name},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('html, body').animate({
scrollTop: $(".dev_pos").offset().top
}, 250);

$('.dev_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});

/*Pagination for Developer ends*/


/*Developer search starts*/

$(document).delegate('input[name="search_dev"]','keyup',function(e){

var $t=$(this);
var name=$t.val();


$.ajax({

url:base_url+'ajax/dev_search.php',
data:{name:name},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('.dev_data').html(r.record);
$('.pagination').html(r.paging); 
}
});



});

/*Developer search ends*/



/*Pagination for Offplan start*/
$(document).delegate('.paging_offplan','click',function(e){


var $t=$(this);
var page_id=$t.attr('data-id');
var name=$('input[name="search_offpan"]').val();
var prj_type=$('input[name="prj_type"]').val();
var dev_id=$('input[name="dev_id"]').val();
var comm_id=$('input[name="comm_id"]').val();




$.ajax({

url:base_url+'ajax/offplan_paging.php',
data:{page_id:page_id,name:name,prj_type:prj_type,dev_id:dev_id,comm_id:comm_id},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('html, body').animate({
scrollTop: $(".offplan_pos").offset().top
}, 250);

$('.offplan_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});

/*Pagination for Offplan ends*/

/*Offplan search starts*/

$(document).delegate('input[name="search_offpan"]','keyup',function(e){

var $t=$(this);
var name=$t.val();
var prj_type=$('input[name="prj_type"]').val();
var dev_id=$('input[name="dev_id"]').val();
var comm_id=$('input[name="comm_id"]').val();


$.ajax({

url:base_url+'ajax/offplan_search.php',
data:{name:name,prj_type:prj_type,dev_id:dev_id,comm_id:comm_id},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('.offplan_data').html(r.record);
$('.pagination').html(r.paging); 
}
});
});

/*Offplan search ends*/



/*Pagination for Ready to move in start*/
$(document).delegate('.paging_readytomovein','click',function(e){

var $t=$(this);
var page_id=$t.attr('data-id');
var order_by=$('select[name="order_by_readytomovein"]').val();
var prj_type=$('input[name="prj_type"]').val();
var dev_id=$('input[name="dev_id"]').val();
var comm_id=$('input[name="comm_id"]').val();


$.ajax({

url:base_url+'ajax/readytomovein_paging.php',
data:{page_id:page_id,order_by:order_by,prj_type:prj_type,dev_id:dev_id,comm_id:comm_id},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('html, body').animate({
scrollTop: $(".readytomovein_pos").offset().top
}, 250);

$('.readytomovein_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});

/*Pagination for Ready to move in ends*/



/*Order By for Ready to move in starts*/
$(document).delegate('select[name="order_by_readytomovein"]','change',function(e){

var $t=$(this);
var order_by=$t.val();
var prj_type=$('input[name="prj_type"]').val();
var dev_id=$('input[name="dev_id"]').val();
var comm_id=$('input[name="comm_id"]').val();


$.ajax({

url:base_url+'ajax/readytomovein_orderby.php',
data:{order_by:order_by,prj_type:prj_type,dev_id:dev_id,comm_id:comm_id},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('.readytomovein_data').html(r.record);
$('.pagination').html(r.paging); 
}
});



});


/*Order By for Ready to move in ends*/



/*Pagination for International Property start*/
$(document).delegate('.paging_internationalproperty','click',function(e){

var $t=$(this);
var page_id=$t.attr('data-id');
var order_by=$('select[name="order_by_internationalproperty"]').val();
var prj_type=$('input[name="prj_type"]').val();
var dev_id=$('input[name="dev_id"]').val();
var comm_id=$('input[name="comm_id"]').val();



$.ajax({

url:base_url+'ajax/internationalproperty_paging.php',
data:{page_id:page_id,order_by:order_by,prj_type:prj_type,dev_id:dev_id,comm_id:comm_id},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('html, body').animate({
scrollTop: $(".internationalproperty_pos").offset().top
}, 250);

$('.internationalproperty_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});

/*Pagination for International Property ends*/



/*Pagination for News start*/
$(document).delegate('.paging_news','click',function(e){

var $t=$(this);
var page_id=$t.attr('data-id');


$.ajax({

url:base_url+'ajax/news_paging.php',
data:{page_id:page_id},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('html, body').animate({
scrollTop: $(".news_pos").offset().top
}, 250);

$('.news_data').html(r.record);
$('.pagination').html(r.paging); 
}
});

});

/*Pagination for News ends*/


/*Order By for International Property starts*/
$(document).delegate('select[name="order_by_internationalproperty"]','change',function(e){

var $t=$(this);
var order_by=$t.val();
var prj_type=$('input[name="prj_type"]').val();
var dev_id=$('input[name="dev_id"]').val();
var comm_id=$('input[name="comm_id"]').val();


$.ajax({

url:base_url+'ajax/internationalproperty_orderby.php',
data:{order_by:order_by,prj_type:prj_type,dev_id:dev_id,comm_id:comm_id},
type:'POST',
dataType:'json',
beforeSend:function()
{
},
success:function(r)
{
$('.internationalproperty_data').html(r.record);
$('.pagination').html(r.paging); 
}
});



});


/*Order By for International Property ends*/


/*Book your validation starts*/

$('#book-val-frm').validate({
   
   rules:
   {
       name:
       {
           required:true
       },
       email_id:
       {
           required:true,
           email:true
       },
       mobile:
       {
           required:true,
           number:true
       }
   },
   messages:
   {
       name:
       {
           required:'Name is required'
       },
       email:
       {
           required:'Email ID is required',
           email:'Enter a valid Email ID'
       },
       mobile:
       {
           required:'Mobile Number is required',
           number:'Mobile Number must be a numeric value'
       }
   },
   submitHandler:function(form)
   {
 
   var book_val_number_hidden=$('#book-val-frm .iti__selected-country').attr('title');
   $('input[name="book_val_number_hidden"]').val(book_val_number_hidden);

  $.ajax({
   
   url:base_url+'ajax/book_val_frm.php',
   data:$('#book-val-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('input[name="btnSubmit"]').val('WAIT...');
     $('input[name="btnSubmit"]').prop('disabled',true);

   },
   success:function(r)
   {

     if(r.status=='success')
     {
		Swal.fire(
		'Success!',
		''+r.msg+'',
		'success'
		);
	    $('input[name="btnSubmit"]').val('Send Message');
	    $('input[name="btnSubmit"]').prop('disabled',false);
	    $('#book-val-frm')[0].reset();
     }
     else
     {
	 	Swal.fire(
		'Error!',
		''+r.msg+'',
		'error'
		);

	    $('input[name="btnSubmit"]').val('Send Message');
	    $('input[name="btnSubmit"]').prop('disabled',false);
	    $('#book-val-frm')[0].reset();
     }

   }


   });
       
   }
    
    
});

/*Book your validation ends*/

/*Blog form validation starts */

$('#blog-frm').validate({

rules:
{
	blog_comment:
	{
		required:true
	},
	blog_name:
	{
		required:true
	},
	blog_email:
	{
		required:true,
		email:true
	},
	blog_phone:
	{
		required:true,
		number:true
	}
},
messages:
{
	blog_comment:
	{
		required:'Message is required'
	},
	blog_name:
	{
		required:'Name is required'
	},
	blog_email:
	{
		required:'Email ID is required',
		email:'Enter a valid Email ID'
	},
	blog_phone:
	{
		required:'Phone Number is required',
		number:'Phone Number must be numeric'
	}

},
submitHandler:function(form)
{

  var blog_hidden=$('#blog-frm .iti__selected-country').attr('title');
  $('input[name="blog_number_hidden"]').val(blog_hidden);

  $.ajax({
   
   url:base_url+'ajax/blog_frm.php',
   data:$('#blog-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('input[name="blog_submit"]').val('WAIT...');
     $('input[name="blog_submit"]').prop('disabled',true);

   },
   success:function(r)
   {

     if(r.status=='success')
     {
		Swal.fire(
		'Success!',
		''+r.msg+'',
		'success'
		);
	    $('input[name="blog_submit"]').val('Submit Comment');
	    $('input[name="blog_submit"]').prop('disabled',false);
	    $('#blog-frm')[0].reset();
     }
     else
     {
	 	Swal.fire(
		'Error!',
		''+r.msg+'',
		'error'
		);

	    $('input[name="blog_submit"]').val('Submit Comment');
	    $('input[name="blog_submit"]').prop('disabled',false);
	    $('#blog-frm')[0].reset();
     }

   }


   });

}


});

/*Blog form validation ends */


/*Subscribe us form validation starts*/

$('button[name="subscribe_submit"]').on('click',function(e){

	var subscribe_email=$('input[name="subscribe_email"]').val();
	var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

	if(subscribe_email=='')
	{
		alert('Email ID is required');
		$('input[name="subscribe_email"]').focus();
		return false;
	}
	else if(!pattern.test(subscribe_email))
    {
		alert( 'Enter a valid Email ID' );
		$('input[name="subscribe_email"]').focus();
		return false;
	}
	else
	{

		
		 $.ajax({
   
   url:base_url+'ajax/subscribe_frm.php',
   data:$('#subscribe-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('button[name="subscribe_submit"]').text('WAIT...');
     $('button[name="subscribe_submit"]').prop('disabled',true);

   },
   success:function(r)
   {

     if(r.status=='success')
     {
		alert(r.msg);
	    $('button[name="subscribe_submit"]').text('Subscribe');
	    $('button[name="subscribe_submit"]').prop('disabled',false);
	    $('#subscribe-frm')[0].reset();
     }
     else
     {
	 	alert(r.msg);
	    $('button[name="subscribe_submit"]').val('Subscribe');
	    $('button[name="subscribe_submit"]').prop('disabled',false);
	    $('#subscribe-frm')[0].reset();
     }

   }


   });
	}

})


/*Subscribe us form validation ends*/


/*Footer Enquiry validation starts*/


$('#enquiry-frm').validate({


rules:
{
	first_name:
	{
		required:true
	},
	email_id:
	{
		required:true,
		email:true
	},
	enquiry_phone:
	{
		required:true,
		number:true
	},
	             captcha_footer_text: 
    {
    required: true,
    remote: {
        url: ""+base_url+"captcha/check-footer-captcha.php",
        type: "post",
        data: {
            captcha: function() {
                return $("#captcha_footer_text").val();
            }
        }
    }
}
},
messages:
{
	first_name:
	{
		required:'First Name is required'
	},
	email_id:
	{
		required:'Email ID is required',
		email:'Enter a valid Email ID'
	},
	enquiry_phone:
	{
		required:'Phone Number is required',
		number:'Phone Number must be a numeric value'
	},
	     captcha_footer_text: 
     {
    required: "Please Enter Captcha",
    remote: "The code you entered does not match the captcha"

   }
},
submitHandler:function(form)
{
    
   
   var enq_phone_hidden=$('#enquiry-frm .iti__selected-country').attr('title');
   $('input[name="enq_phone_hidden"]').val(enq_phone_hidden);

  $.ajax({
   
   url:base_url+'ajax/enq_frm.php',
   data:$('#enquiry-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('button[name="enquiry_submit"]').text('WAIT...');
     $('button[name="enquiry_submit"]').prop('disabled',true);

   },
   success:function(r)
   {

     if(r.status=='success')
     {
		alert(r.msg);
	    $('button[name="enquiry_submit"]').text('Submit');
	    $('button[name="enquiry_submit"]').prop('disabled',false);
	    $('#enquiry-frm')[0].reset();
     }
     else
     {
        alert(r.msg);
	    $('button[name="enquiry_submit"]').text('Submit');
	    $('button[name="enquiry_submit"]').prop('disabled',false);
	    $('#enquiry-frm')[0].reset();
     }

   }


   });
}


});


/*Footer Enquiry validation ends*/


/*Golden Visa validation starts*/



$('#golden-visa-frm').validate({


rules:
{
	name:
	{
		required:true
	},
	email_id:
	{
		required:true,
		email:true
	},
	number:
	{
		required:true,
		number:true
	},
	         captcha_visa_text: 
    {
    required: true,
    remote: {
        url: ""+base_url+"captcha/check-visa-captcha.php",
        type: "post",
        data: {
            captcha: function() {
                return $("#captcha_visa_text").val();
            }
        }
    }
}
},
messages:
{
	name:
	{
		required:'Name is required'
	},
	email_id:
	{
		required:'Email ID is required',
		email:'Enter a valid Email ID'
	},
	number:
	{
		required:'Mobile Number is required',
		number:'Mobile Number must be a numeric value'
	},
	 captcha_visa_text: 
     {
    required: "Please Enter Captcha",
    remote: "The code you entered does not match the captcha"

   }
},
submitHandler:function(form)
{
   var golden_visa_phone_hidden=$('#golden-visa-frm .iti__selected-country').attr('title');
   $('input[name="golden_visa_phone_hidden"]').val(golden_visa_phone_hidden);
   
   $.ajax({
   
   url:base_url+'ajax/golden_visa_frm.php',
   data:$('#golden-visa-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('input[name="golden_visa_submit"]').val('WAIT...');
     $('input[name="golden_visa_submit"]').prop('disabled',true);

   },
   success:function(r)
   {

     if(r.status=='success')
     {
		  alert(r.msg);
	    $('input[name="golden_visa_submit"]').val('Submit');
	    $('input[name="golden_visa_submit"]').prop('disabled',false);
	    $('#golden-visa-frm')[0].reset();
     }
     else
     {
        alert(r.msg);
	    $('input[name="golden_visa_submit"]').val('Submit');
	    $('input[name="golden_visa_submit"]').prop('disabled',false);
	    $('#golden-visa-frm')[0].reset();
     }

   }


   });


}


});

/*Golden Visa validation ends*/


/*Comm Dev validation start*/


$('#comm-dev-frm').validate({


rules:
{
	name:
	{
		required:true
	},
	email_id:
	{
		required:true,
		email:true
	},
	phone:
	{
		required:true,
		number:true
	},
	            captcha_dev_text: 
    {
    required: true,
    remote: {
        url: ""+base_url+"captcha/check-dev-captcha.php",
        type: "post",
        data: {
            captcha: function() {
                return $("#captcha_dev_text").val();
            }
        }
    }
}
},
messages:
{
	name:
	{
		required:'Name is required'
	},
	email_id:
	{
		required:'Email ID is required',
		email:'Enter a valid Email ID'
	},
	phone:
	{
		required:'Phone Number is required',
		number:'Phone Number must be a numeric value'
	},
	         captcha_dev_text: 
     {
    required: "Please Enter Captcha",
    remote: "The code you entered does not match the captcha"

   }
},
submitHandler:function(form)
{

   var comm_dev_phone_hidden=$('#comm-dev-frm .iti__selected-country').attr('title');
   $('input[name="comm_dev_phone_hidden"]').val(comm_dev_phone_hidden);

  $.ajax({
   
   url:base_url+'ajax/comm_dev_frm.php',
   data:$('#comm-dev-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('button[name="comm_dev_submit"]').text('WAIT...');
     $('button[name="comm_dev_submit"]').prop('disabled',true);

   },
   success:function(r)
   {

     if(r.status=='success')
     {
		  alert(r.msg);
	    $('button[name="comm_dev_submit"]').text('Submit');
	    $('button[name="comm_dev_submit"]').prop('disabled',false);
	    $('#comm-dev-frm')[0].reset();
     }
     else
     {
        alert(r.msg);
	    $('button[name="comm_dev_submit"]').text('Submit');
	    $('button[name="comm_dev_submit"]').prop('disabled',false);
	    $('#comm-dev-frm')[0].reset();
     }

   }


   });
	
}


});

/*Comm Dev validation ends*/


/*Pdf validation starts*/

$('#pdf-frm').validate({

rules:
{
	pdf_name:
	{
		required:true
	},
	pdf_phone:
	{
		required:true,
		number:true
	},
	pdf_email:
	{
		required:true,
		email:true
	}
},
messages:
{

	pdf_name:
	{
		required:'Name is required'
	},
	pdf_phone:
	{
		required:'Phone Number is required',
		number:'Phone Number must be a numeric value'
	},
	pdf_email:
	{
		required:'Email ID is required',
		email:'Enter a valid Email ID'
	}

},
submitHandler:function(form)
{
   var pdf_frm_hidden=$('#pdf-frm .iti__selected-country').attr('title');
   $('input[name="pdf_number_hidden"]').val(pdf_frm_hidden);
   var brochure_url=$('input[name="brochure_url"]').val();


  $.ajax({
   
   url:base_url+'ajax/pdf_frm.php',
   data:$('#pdf-frm').serializeArray(),
   type:'POST',
   dataType:'json',
   beforeSend:function()
   {
     $('button[name="pdf_submit"]').html('<i class="fa fa-paper-plane"></i>WAIT...');
     $('button[name="pdf_submit"]').prop('disabled',true);
   },
   success:function(r)
   {

     if(r.status=='success')
     {
$('.succ_msg').text(r.msg);
$('button[name="pdf_submit"]').html('<i class="fa fa-paper-plane"></i>Send');
$('button[name="pdf_submit"]').prop('disabled',false);
$('#pdf-frm')[0].reset();

				 var req = new XMLHttpRequest();
  req.open("GET", base_url+'admin_d8p7Q69Btdcxdxmg/assets/media/project/pdf/'+brochure_url, true);
  req.responseType = "blob";

  req.onload = function (event) {
    var blob = req.response;
    console.log(blob.size);
    var link=document.createElement('a');
    link.href=window.URL.createObjectURL(blob);
    link.download="pdf_" + new Date() + ".pdf";
    link.click();
  };

  req.send();

     }
     else
     {
				$('.succ_msg').text(r.msg);
				$('button[name="pdf_submit"]').text('Send');
				$('button[name="pdf_submit"]').prop('disabled',false);
				$('#pdf-frm')[0].reset();
     }

   }


   });
}


});

/*Pdf validation ends*/




/*Career form validation starts*/


$('#career-frm').validate({


rules:
{
	first_name:
	{
		required:true
	},
	email_id:
	{
		required:true,
		email:true
	},
	phone:
	{
		required:true,
		number:true
	},
	linkedin_url:
	{
		required:true,
		url:true
	},
	resume:
	{
		required:true,
		extension: "pdf"

	},
	subject:
	{
		required:true
	},
		captcha_text: 
	{
    required: true,
    remote: {
        url: ""+base_url+"captcha/check-captcha.php",
        type: "post",
        data: {
            captcha: function() {
                return $("#captcha_text").val();
            }
        }
    }
}
},
messages:
{

	first_name:
	{
		required:'Name is required'
	},
	email_id:
	{
		required:'Email ID is required',
		email:'Enter a valid Email ID'
	},
	phone:
	{
		required:'Phone Number is required',
		number:'Phone Number must be a numeric value'
	},
	linkedin_url:
	{
		required:'Linkedin URL is required',
		url:'Enter a valid URL'
	},
	resume:
	{
		required:'Resume is required',
		extension: "Resume must be in pdf format"
	},
	subject:
	{
		required:'Subject is required'
	},
		 captcha_text: 
	 {
    required: "Please Enter Captcha",
    remote: "The code you entered does not match the captcha"

   }

},
submitHandler:function(form)
{
   var career_phone_hidden=$('#career-frm .iti__selected-country').attr('title');
   $('input[name="career_phone_hidden"]').val(career_phone_hidden);
   document.getElementById('career-frm')[0].submit();	
	
}


});


/*Career form validation ends*/


/*insta feed start here*/
var userFeed = new Instafeed({
		get: 'user',
		target: "instafeed-container",
    	resolution: 'low_resolution',
		accessToken: 'YOUR_INSTAGRAM_ACCESS_TOKEN_GOES_HERE'
	});
	userFeed.run();

/*insta feed ends here*/

/*social share popup start here*/

function genericSocialShare(url){
    window.open(url,'sharer','toolbar=0,status=0,width=648,height=395');
    return true;
}

/*social share popup ends here*/





/*Comm Dev phone starts*/

 var comm_dev_phone = document.querySelector("#comm_dev_phone");
window.intlTelInput(comm_dev_phone, {
allowDropdown: true,
// autoHideDialCode: false,
autoPlaceholder: "on",
// dropdownContainer: document.body,
// excludeCountries: ["us"],
// formatOnDisplay: false,
// geoIpLookup: function(callback) {
//   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//     var countryCode = (resp && resp.country) ? resp.country : "";
//     callback(countryCode);
//   });
// },
// hiddenInput: "full_number",
initialCountry: "ae",
// localizedCountries: { 'de': 'Deutschland' },
nationalMode: true,
// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
// placeholderNumberType: "MOBILE",
preferredCountries: ['ae'],
separateDialCode: true,
utilsScript: "js/utils.js",
});

/*Comm Dev phone ends*/


/*Bitcoin phone starts*/

 var bitcoin_phone = document.querySelector("#bitcoin_phone");
window.intlTelInput(bitcoin_phone, {
allowDropdown: true,
// autoHideDialCode: false,
autoPlaceholder: "on",
// dropdownContainer: document.body,
// excludeCountries: ["us"],
// formatOnDisplay: false,
// geoIpLookup: function(callback) {
//   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//     var countryCode = (resp && resp.country) ? resp.country : "";
//     callback(countryCode);
//   });
// },
// hiddenInput: "full_number",
initialCountry: "ae",
// localizedCountries: { 'de': 'Deutschland' },
nationalMode: true,
// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
// placeholderNumberType: "MOBILE",
preferredCountries: ['ae'],
separateDialCode: true,
utilsScript: "js/utils.js",
});

/*Bitcoin phone ends*/





/*Book Valuation phone starts*/

 var book_val_phone = document.querySelector("#book_val_phone");
window.intlTelInput(book_val_phone, {
allowDropdown: true,
// autoHideDialCode: false,
autoPlaceholder: "on",
// dropdownContainer: document.body,
// excludeCountries: ["us"],
// formatOnDisplay: false,
// geoIpLookup: function(callback) {
//   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//     var countryCode = (resp && resp.country) ? resp.country : "";
//     callback(countryCode);
//   });
// },
// hiddenInput: "full_number",
initialCountry: "ae",
// localizedCountries: { 'de': 'Deutschland' },
nationalMode: true,
// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
// placeholderNumberType: "MOBILE",
preferredCountries: ['ae'],
separateDialCode: true,
utilsScript: "js/utils.js",
});

/*Book Valuation phone ends*/







function ShowAndHide() {
var x = document.getElementById('SectionName');
if (x.style.display == 'none') {
x.style.display = 'block';
} else {
x.style.display = 'none';
}
}


/*Regenerate captcha starts*/

function captcha_refresh(){
            $("#captcha").attr('src', ''+base_url+'captcha/captcha.php');
             return false;
}

function captcha_dev_refresh(){
            $("#captcha_dev").attr('src', ''+base_url+'captcha/captcha-dev.php');
             return false;
}

function captcha_bookval_refresh(){
            $("#captcha_bookval").attr('src', ''+base_url+'captcha/captcha-bookval.php');
             return false;
}

function captcha_mortgcal_refresh(){
            $("#captcha_mortgcal").attr('src', ''+base_url+'captcha/captcha-mortgcal.php');
             return false;
}


function captcha_visa_refresh(){
            $("#captcha_visa").attr('src', ''+base_url+'captcha/captcha-visa.php');
             return false;
}


function captcha_footer_refresh(){
            $("#captcha_footer").attr('src', ''+base_url+'captcha/captcha-footer.php');
             return false;
}

/*Regenerate captcha ends*/


