$(document).ready(function(){

	$('.img2').click(function(){
		
		$('.clck-img').css({'border-bottom':'0px solid #fff','opacity':'0.5'});
		$('.img2').css({'border-bottom':'2px solid red','opacity':'1'});
		
		$('.ul-margin').animate({'margin-left':'-500'},1000
				
				
			);

	});
		$('.img3').click(function(){
			$('.clck-img').css({'border-bottom':'0px solid #fff','opacity':'0.5'});
		$('.img3').css({'border-bottom':'2px solid red','opacity':'1'});
		$('.ul-margin').animate({'margin-left':'-1000'},1000
			
				
			);

	});
		$('.img1').click(function(){
			$('.clck-img').css({'border-bottom':'0px solid #fff','opacity':'0.5'});
		$('.img1').css({'border-bottom':'2px solid red','opacity':'1'});
		$('.ul-margin').animate({'margin-left':'0'},1000
				
				
			);

	});

});
