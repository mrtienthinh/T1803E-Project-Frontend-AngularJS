$(document).ready(function(){
	$('.li-first-h').click(function(){
		if ($('#hn-h').hasClass('none-h')) {
			$('#k-h').addClass('none-h');
			$('#hcm-h').addClass('none-h');
			$('#hn-h').removeClass('none-h');
			$('.li-menu').css("background",'');
			$('.li-first-h').css("background",'red');
		}
		else{
			
			$('#k-h').addClass('none-h');
			$('#hcm').addClass('none-h');
			$('#hn-h').addClass('none-h');
			$('.li-first-h').css("background",'');
		}

		
	});
	$('.li-no2').click(function(){
		if ($('#hcm-h').hasClass('none-h')) {
			$('#k-h').addClass('none-h');
			$('#hn-h').addClass('none-h');
	$('.li-menu').css("background",'');
			$('#hcm-h').removeClass('none-h');
			$('.li-no2').css("background",'red');

		}
		else{
			$('#k-h').addClass('none-h');
			$('#hn-h').addClass('none-h');
			$('.li-no2').css("background",'');
			$('#hcm-h').addClass('none-h');
		}

	});

	$('.li-no3').click(function(){
		if ($('#k-h').hasClass('none-h')) {
			$('#hcm-h').addClass('none-h');
			$('#hn-h').addClass('none-h');
				$('.li-menu').css("background",'');
$('.li-no3').css("background",'red');
			$('#k-h').removeClass('none-h');
		}
		else{
			$('#hcm-h').addClass('none-h');
			$('#hn-h').addClass('none-h');
			$('.li-no3').css("background",'');
			$('#k-h').addClass('none-h');
		}

	});
	$('a ').click(function(){
		// $('a').attr('title','Học Web Chuẩn');
		var a=$(this).attr('href');
		 console.log(a);
		$(".map").each(function () {
  var m=$(this).attr("id");
 
  if (m==a) {
$('.map').hide(300);
$(this).show(300);

  console.log(m);
  console.log('da bang')
   
  }

});
		// for (var i=0;i<=map.length; i++) {
		// 	console.log[i];
		// }

		return false;
	});
	
});
