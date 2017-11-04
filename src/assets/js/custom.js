$(document).ready(function () {
	$('.fb-pop-btn').click(function (){
		$(this).addClass('active');
		$('.tw-pop-btn').removeClass('active');
		$('.inst-pop-btn').removeClass('active');
		$('.yt-pop-btn').removeClass('active');
		$('.fb-pop').show();
		$('.tw-pop').hide();
		$('.inst-pop').hide();
		$('.yt-pop').hide();
	});
	$('.tw-pop-btn').click(function (){
		$(this).addClass('active');
		$('.fb-pop-btn').removeClass('active');
		$('.inst-pop-btn').removeClass('active');
		$('.yt-pop-btn').removeClass('active');
		$('.tw-pop').show();
		$('.fb-pop').hide();
		$('.inst-pop').hide();
		$('.yt-pop').hide();
	});	
	$('.inst-pop-btn').click(function (){
		$(this).addClass('active');
		$('.fb-pop-btn').removeClass('active');
		$('.tw-pop-btn').removeClass('active');
		$('.yt-pop-btn').removeClass('active');
		$('.inst-pop').show();
		$('.tw-pop').hide();
		$('.fb-pop').hide();
		$('.yt-pop').hide();
	});
	$('.yt-pop-btn').click(function (){
		$(this).addClass('active');
		$('.fb-pop-btn').removeClass('active');
		$('.tw-pop-btn').removeClass('active');
		$('.inst-pop-btn').removeClass('active');
		$('.yt-pop').show();
		$('.fb-pop').hide();
		$('.tw-pop').hide();
		$('.inst-pop').hide();
	});	
	
	$('.close-icon').click(function (){
		$('.share-pop').hide();
		$('.fb-pop-btn').removeClass('active');
		$('.tw-pop-btn').removeClass('active');
		$('.inst-pop-btn').removeClass('active');
	});	
    
    $('.close-btn').click(function (){
        $('.main-landing-pop').hide();
    }); 
});

$(function() {

  var timer = setInterval( showDiv, 5000);

  var counter = 0;

  function showDiv() {
    if (counter ==0) { counter++; return; }

    $('div','#share-pop-cont')
      .stop()
      .hide()
      .filter( function() { return this.id.match('div' + counter); })   
      .fadeIn('slow');
    counter == 4? counter = 0 : counter++; 
  }
});
    
$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
    });
    });
    
$(window).scroll(function () {
    $(".scroll-header").each(function () {
        var pageScrolled = $(window).scrollTop();
        // console.log(pageScrolled);
        if (400 < pageScrolled) { $(this).addClass('fixed-scroll'); }
        else { $(this).removeClass('fixed-scroll'); }
    });
});



/*-------------Written By: Arjun Rana----------*/

function hidelogin(){
$('#loginPopup').hide();
}



/*------------User Registration---------------*/
$(document).ready(function (e) 
{
			$('#regForm').validate({
					// Specify the validation rules
					rules: {
						userName: "required",
						name: 	"required",
						email: {
							required: true,
							email: true
						},
						password:{
							required: true,
							minlength: 8
						  },
					   	confirmpassword:{
							required: true,
							equalTo: "#password"
						  },
						//termCondition:"required"
					},
					
					// Specify the validation error messages
					messages: {
						userName: "Please Enter User Name",
						email: {
							required: "Please Enter Email",
							email: "Please Enter Valid Email"
						},
						name: 	"Please enter Name",
						password: {
							required: "Please Enter Password",
							minlength: "Please enter at least 8 characters"
						},
						confirmpassword: {
							required: "Please Enter Password",
							equalTo: "Password Not Matched"
						},
						//termCondition:"Please Accept Term & Condition"
					  },
					
					submitHandler: function(form) {
           						 $.ajax({
											url: "http://www.halaljourney.com/js/user_submit.php",
											dataType: 'html',
											type: 'POST',
											data: $(form).serialize(),
											success: function(response)
											{
												if(response==1)
												  {
													$("#userName").trigger("reset");
													$('#uservalidError').show();
													$('#userName').addClass('error');
													 $("#uservalidError").fadeOut(5000);
													
												  }
												 else if(response==2)
												  	{
														$("#email").trigger("reset");
														$('#emailvalidError').show();
														$('#email').addClass('error');
														 $("#emailvalidError").fadeOut(5000);
													}else{
														$("#regForm").trigger("reset");
														window.location.href = 'http://www.halaljourney.com/js/thanksforreg.php';
													}
											},
											error: function() {}
										});
        			}
   			 });

});

/*------------ Function Ends---------------*/


/*------------User Login---------------*/
$(document).ready(function (e) 
{
			$('#loginForm').validate({
					// Specify the validation rules
					rules: {
						userEmail: {
							required: true,
							email: true
						},
						userPass:"required"
					},
					
					// Specify the validation error messages
					messages: {
						userEmail: {
							required: "Please Enter Email",
							email: "Please Enter Valid Email"
						},
						userPass:"Please Enter Password"
					  },
					submitHandler: function(form) {
           						 $.ajax({
											url: "http://www.halaljourney.com/js/userLogin.php",
											dataType: 'html',
											type: 'POST',
											data: $(form).serialize(),
											success: function(response)
											{	
												if(response==1)
												  {
													$("#loginForm").trigger("reset");
													$('#validationError').show();
													$('#userEmail').addClass('error');
													$('#userPass').addClass('error');
													$("#validationError").fadeOut(4000);
													
												  }
												 else if(response==2)
												  	{
														$("#loginForm").trigger("reset");
														//window.location.href = 'http://www.halaljourney.com/js/dashboard.php';
														 window.location.href = $.cookie('currentUrl');
													}else{
														$("#unknownError").trigger("reset");
														$('#unknownError').show();
														$('#userEmail').addClass('error');
														$('#userPass').addClass('error');
														$("#unknownError").fadeOut(4000);
													}
													  
											},
											error: function() {}
										});
        			}
   			 });

});

function logoutFun(page){
	
			goto(page);	
}
/*------------ Function Ends---------------*/

function goto(page,type)
 {
	 window.location.href = ''+page+'.php';
	 
 }
 
    $( function() {
    $( ".datepicker" ).datepicker();
  } );
 /*------------ Function Ends---------------*/
 
 
 /*------------Contact Submission Function---------------*/

$(document).ready(function (e) 
{
			$('#contactfrm').validate({
					// Specify the validation rules
					rules: {
						cEmail: {
							required: true,
							email: true
						},
						cName:"required",
						cmessage:"required"
					},
					
					// Specify the validation error messages
					messages: {
						cEmail: {
							required: "Please Enter Email",
							email: "Please Enter Valid Email"
						},
						cName:"Please Enter Name",
						cmessage:"Please Enter Message"
					  },
					submitHandler: function(form) {
           						 $.ajax({
											url: "http://www.halaljourney.com/js/contactsubmit.php",
											dataType: 'html',
											type: 'POST',
											data: $(form).serialize(),
											success: function(response)
											{	
														//$("#contactfrm").trigger("reset");
//														$('#successmsg').show();
//														$("#successmsg").fadeOut(5000);
														window.location.href = 'http://www.halaljourney.com/js/thankyou.php';
											},
											error: function() {}
										});
        			}
   			 });

});
 /*------------ Function Ends---------------*/
 
 /*------------Affiliate submit Function---------------*/
$(document).ready(function (e) 
{
			$('#affForm').validate({
					// Specify the validation rules
					rules: {
						category: "required",
						compname: 	"required",
						website: "required",
						targetaud: 	"required",
						contactprsn: "required",
						contactpos: 	"required",
						aemail: {
							required: true,
							email: true
						},
						empcount: {
								  required: true,
								  number: true
						},
						/*founddate: {
								  required: true,
								  date: true
						},*/
						aphone:	"required",
						compadd:"required"
					},
					
					// Specify the validation error messages
					messages: {
						category: "Please Enter Cayegory",
						compname: "Please Enter Company Name",
						website: "Please Enter website",
						empcount: "Please Enter No. of Employee",
						targetaud: "Please Enter Target Market",
						contactprsn: "Please Enter Contact Person",
						contactpos: "Please Enter Position",
						aphone: "Please Enter Contact No.",
						aemail: {
							required: "Please Enter Email",
							email: "Please Enter Valid Email"
						},
						empcount: {
								  required: "Please Enter No. of Employees",
								  number: "Please Enter Valid Number"
						},
						/*founddate: {
								  required: "Please Enter Date",
								  date: "Enter Valid Date"
						},*/
						compadd:"Please Enter Company Address"
					  },
					
					submitHandler: function(form) {
           						 $.ajax({
											url: "http://www.halaljourney.com/js/affiliatesubmit.php",
											dataType: 'html',
											type: 'POST',
											data: $(form).serialize(),
											success: function(response)
											{
														//$("#affForm").trigger("reset");
//														$('#successmsg').show();
//														 $("html, body").animate({
//																	scrollTop: 700
//																}, 500);
//														$("#successmsg").fadeOut(20000);
														
														
														window.location.href = 'http://www.halaljourney.com/js/thanksforreg.php';
											},
											error: function() {}
										});
        			}
   			 });

});

/*------------ Function Ends---------------*/

/*------------Special Offer Submission Function---------------*/

$(document).ready(function (e) 
{
			$('#subsform').validate({
					// Specify the validation rules
					rules: {
						subsmail: {
							required: true,
							email: true
						}
					},
					
					// Specify the validation error messages
					messages: {
						subsmail: {
							required: "Please Enter Email",
							email: "Please Enter Valid Email"
						}
					  },
					submitHandler: function(form) {
           						 $.ajax({
											url: "http://www.halaljourney.com/js/subscription.php",
											dataType: 'html',
											type: 'POST',
											data: $(form).serialize(),
											success: function(response)
											{	
												if(response==1)
												  {
													$("#subsform").trigger("reset");
													$('#subemailvalidError').show();
													$("#subemailvalidError").fadeOut(5000);
													
												  }
												 else if(response==2)
												  	{
														$("#subsform").trigger("reset");
														$('#subsuccessmsg').show();
														$("#subsuccessmsg").fadeOut(5000);
													}else{
															
														$("#subsform").trigger("reset");
														$('#othererror').show();
														$("#othererror").fadeOut(5000);	
													}
											},
											error: function() {}
										});
        			}
   			 });

});
 /*------------ Function Ends---------------*/
 
 $(document).ready(function (e) 
{
			$('#subsformtop').validate({
					// Specify the validation rules
					rules: {
						subsmail: {
							required: true,
							email: true
						}
					},
					
					// Specify the validation error messages
					messages: {
						subsmail: {
							required: "Please Enter Email",
							email: "Please Enter Valid Email"
						}
					  },
					submitHandler: function(form) {
           						 $.ajax({
											url: "http://www.halaljourney.com/js/subscription.php",
											dataType: 'html',
											type: 'POST',
											data: $(form).serialize(),
											success: function(response)
											{	
												if(response==1)
												  {
													$("#subsformtop").trigger("reset");
													$('#subemailvalidError').show();
													$("#subemailvalidError").fadeOut(5000);
													
												  }
												 else if(response==2)
												  	{
														$("#subsformtop").trigger("reset");
														$('#subsuccessmsg').show();
														$("#subsuccessmsg").fadeOut(5000);
													}else{
															
														$("#subsformtop").trigger("reset");
														$('#othererror').show();
														$("#othererror").fadeOut(5000);	
													}
											},
											error: function() {}
										});
        			}
   			 });

});

 
 /*------------Forgot Password Function---------------*/

$(document).ready(function (e) 
{
			$('#forgotpassForm').validate({
					// Specify the validation rules
					rules: {
						passEmail: {
							required: true,
							email: true
						}
					},
					
					// Specify the validation error messages
					messages: {
						passEmail: {
							required: "Please Enter Email",
							email: "Please Enter Valid Email"
						}
					  },
					submitHandler: function(form) {
           						 $.ajax({
											url: "http://www.halaljourney.com/js/forgotpassword.php",
											dataType: 'html',
											type: 'POST',
											data: $(form).serialize(),
											success: function(response)
											{	
												$("#forgotpassForm").trigger("reset");
												window.location.href = 'http://www.halaljourney.com/js/passwordrecovery.php';
											},
											error: function() {}
										});
        			}
   			 });

});
 /*------------ Function Ends---------------*/
 
 
function showRooms(countryCode,checkInDt,checkOutDt,adultsCount,kidsCount,hotelId,rooms,cityId){
	$(".roomTbl").html('');
	$.post('roomInfo.php?countryCode='+countryCode +'&checkInDt='+ checkInDt + '&checkOutDt='+checkOutDt + '&adults='+adultsCount + '&kids='+kidsCount +'&hotelId='+hotelId +'&rooms='+rooms+'&cityId='+cityId, function(data) {																																												   			$(".roomTbl").html(data);
        });

}

 function getSearchLocation1(keyword) {
    if (keyword.length > 1) {
        $('.searchIndIcn').attr('src', 'images/load.gif'/*tpa=http://www.halaljourney.com/js/images/load.gif*/);
        $.post('searchLocation.php?keyword=' + keyword, function(data) {
            $('.searchResultIndst ul').html(data);
            $('.searchIndIcn').attr('src', 'images/magnifier.png'/*tpa=http://www.halaljourney.com/js/images/magnifier.png*/);
            if (!$.trim(data)) {
                $('.searchResultIndst').hide();
            } else {
                $('.searchResultIndst').slideDown();
            }
            $('.selectLocationID').val('');
        });
    } else {
        $('.searchResultIndst').slideUp();
    }
    hideLoader();
    $(".indEror").hide()
}


// AJAX call for autocomplete 
$(document).ready(function(){
	var type = 1;				   
	$(".search").keyup(function(){
		$.ajax({
		type: "POST",
		url: "searchLocation.php?type="+type,
		data:'keyword='+$(this).val(),
		beforeSend: function(){
			$(".search").css("background","none url(LoaderIcon.gif) no-repeat 165px");
		},
		success: function(data){
			$("#suggesstion-box").show();
			$("#suggesstion-box").html(data);
			$(".search").css("background","none");
		}
		});
	});
});

$(document).ready(function(){
	var type = 2;				   
	$(".pin").keyup(function(){
		$.ajax({
		type: "POST",
		url: "searchLocation.php?type="+type,
		data:'keyword='+$(this).val(),
		beforeSend: function(){
			$(".pin").css("background","none url(LoaderIcon.gif) no-repeat 165px");
		},
		success: function(data){
			$("#suggesstion-box-extra").show();
			$("#suggesstion-box-extra").html(data);
			//$(".pin").css("background","none");
		}
		});});
});

function selectCountry(val,country,cityId,type) {
	if(type == 1){
		$(".search").val(val);
		$(".countryId").val(country);
		$(".cityId").val(cityId);
		$("#suggesstion-box").hide();
	}else if(type == 2){
		$(".pin").val(val);
		$(".countryId").val(country);
		$(".cityId").val(cityId);
		$("#suggesstion-box-extra").hide();
	}
}


function goBack() {
    window.history.back();
}
 
function hotelFilter(sortRank){
   var countryName 	= $(".pin").val();
   var countryCode	= $(".countryId").val();
   var cityCode		= $(".cityId").val();
   var checkInDt	= $("#datepicker1").val();
   var checkOutDt	= $("#datepicker2").val();
   var adults		= $(".adultsVal").val();
   var kids			= $(".kidsVal").val();
   var Rooms		= $(".roomsVal").val();
   var ratArr		= new Array();
   var factArr		= new Array();
   var sortRank		= $(".sortRank").val();

	$.each($(".ratChk:checked"), function() {
        ratArr.push($(this).val());
    });
	
    $.each($(".facalityChk:checked"), function() {
        factArr.push($(this).val());
    });

	window.location.href = "http://www.halaljourney.com/js/search.php?countryName="+countryName + "&countryCode=" + countryCode + "&cityCode=" + cityCode + "&checkInDt=" + checkInDt + "&checkOutDt=" + checkOutDt + "&adults=" + adults+ "&kids=" + kids+ "&Rooms=" + Rooms+ "&ratArr=" + ratArr + "&factArr=" + factArr + "&sortRank=" + sortRank;

}


//function searchfilter(searchkeyword,checkdate,chekout,gethouse,page)
//{
// var entroom    =	$("#entrroom").prop("checked") ? 1 : '';
// var prvtRoom   =	$("#prvtroom").prop("checked") ? 2 : '';
// var shrdRoom   =	$("#shrdroom").prop("checked") ? 3 : '';
// var gethouse   =	$('#guestlist :selected').val();
// var relegion	=	$("#relegion").prop("checked") ? 1 : '';
// var gender		=	$("#gender").prop("checked")   ? 2 : '';
// var fast		=	$("#fastbook").prop("checked") ? 1 : '';
// var mi			=	$('#minamount').val();
// var mx			=	$('#maxamount').val();
// var bedrooms   =	$('#fld_studioid :selected').val();
// var beds   	=	$('#fld_rest_item :selected').val();
// var bathrooms   =	$('#fld_total_bathroom :selected').val();
// 
// var aminities = new Array();
//  $.each($("input[id='aminities[]']:checked"), function() {
//   aminities.push($(this).val());
//  });
// var language = new Array();
//  $.each($("input[id='language[]']:checked"), function() {
//   language.push($(this).val());
//  });
// startLoader();
// window.location.href = 'http://www.halaljourney.com/js/search-result.php?searchKeyword='+searchkeyword+'&checkinDate='+checkdate+'&checkoutDate='+chekout+'&guestcount='+gethouse+'&entrroom='+entroom+'&prvtroom='+prvtRoom+'&shrdroom='+shrdRoom+'&page='+page+'&aminities='+aminities+'&minprice='+mi+'&maxprice='+mx+'&relegion='+relegion+'&gender='+gender+'&bedrooms='+bedrooms+'&beds='+beds+'&bathrooms='+bathrooms+'&setlang='+language+'&fast='+fast;
// stopLoader();
//}




