$(document).ready(function(){
	var burgers = [{"id":1,"name":"Bacon Burger","price1":"£19.90","price2":"£25.90","imgUrl":"images/Bacon-Burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":2,"name":"Cheese Butter","price1":"£19.90","price2":"£25.90","imgUrl":"images/Cheese-Butter.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":3,"name":"Chicken burger","price1":"£19.90","price2":"£25.90","imgUrl":"images/Chicken-burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":4,"name":"Chicken burger","price1":"£19.90","price2":"£25.90","imgUrl":"images/Chicken-burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":5,"name":"Double Beef Burger","price1":"£19.90","price2":"£25.90","imgUrl":"images/Double-Beef-burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":6,"name":"Double Cheese","price1":"£19.90","price2":"£25.90","imgUrl":"images/Double-Cheese.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":7,"name":"Mushroom Burger","price1":"£19.90","price2":"£25.90","imgUrl":"images/Mushroom-Burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":8,"name":"Original Burger","price1":"£19.90","price2":"£25.90","imgUrl":"images/Original-Burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	];
	
	data = {"id":1,"name":"Bacon Burger","price-1":19.99,"price-2":25.90,"imgUrl":"images/hao.jpg","mighty":"A mighty meaty double helping of all the reasons you love our burger."};

	$('.content-burger').empty();
	

	
	var text = '<p class="text-center"><img  src='+data.imgUrl+' width="246px"></p>' +'<p class="Bacon-h text-center">'+data.name+'</p>'+''
	for(i=0;i< burgers.length;i++){
		// console.log(i)
		var html ='<div class="col-lg-4 col-md-6 col-sm-12 card-h">'+'<p class="text-center"><img  src="'+ burgers[i].imgUrl+'" width="246px" ></p>'
		+'<p class="Bacon-h text-center">'+burgers[i].name+'</p>'+'<p class="Pick-h text-center"><del>----------</del> <span>Pick Size</span> <del>----------</del></p>'
		+'<ul class="ul-money-h">'+'<li class="check-h">22 <br> cm</li>'+'<li class="amount-of-money">'
		+ burgers[i].price1+'</li>'+'<li class="check-h">29<br> cm</li>'+'<li class="amount-of-money">'+ burgers[i].price2+'</li></ul>'+'<div class="clear-h"></div>'
		+'<div class=" Select-Options-h">'
		+'<p class="Select-Options-P-h"><i class="far fa-check-circle"></i> Select Options</p></div></div>'
		$('.content-burger').append(html)
	}




	$('#header_search_query').keypress(function(event){

		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			var check=0;
			$('.content-burger').empty();
			var val=$('#header_search_query').val();  
			for(i=0;i<burgers.length;i++){
				if(val==burgers[i].name){
					check++
					var content='<div class="col-lg-4 col-md-6 col-sm-12 card-h">'+'<p class="text-center"><img  src="'+ burgers[i].imgUrl+'" width="246px" ></p>'
					+'<p class="Bacon-h text-center">'+burgers[i].name+'</p>'+'<p class="Pick-h text-center"><del>----------</del> <span>Pick Size</span> <del>----------</del></p>'
					+'<ul class="ul-money-h">'+'<li class="check-h">22 <br> cm</li>'+'<li class="amount-of-money">'
					+ burgers[i].price1+'</li>'+'<li class="check-h">29<br> cm</li>'+'<li class="amount-of-money">'+ burgers[i].price2+'</li></ul>'+'<div class="clear-h"></div>'
					+'<div class=" Select-Options-h">'
					+'<p class="Select-Options-P-h"><i class="far fa-check-circle"></i> Select Options</p></div></div>'
					$('.content-burger').append( content)

				} 
				
				console.log(burgers[i].name)

			}
			if(check==0){
				$('.content-burger').append( "<p>Không tìm thấy kết quả phù hợp</p>")

			}
			console.log(check);
		}

	});
	// $(document).on('mousemove', ".card-h", function()
	// $('.card-h').mousemove(function()
	$(document).on('mousemove', ".card-h", function(){
		$('.card-h').css( "border" ,"0px solid #fff");
		$('.Select-Options-h').css( {"display":'none',});
		$(this).css( "border" ,"2px solid  #E9E9E9");
		$(this).children('.Select-Options-h').css("display",'block')
	});
	// $('.card-h').mouseleave(function()
	$(document).on('mouseleave', ".card-h", function(){
		$('.card-h').css( "border" ,"0px solid #fff");
		$('.Select-Options-h').css( {"display":'none',});
		// $(this).css( "border" ,"0px solid  #E9E9E9");
		// $(this).children('.Select-Options-h').css("display",'none')
	});

});


