$(document).ready(function(){
	// var burgers = [{"id":1,"name":"Bacon Burger","pricesmall":"£19.90","pricebig":"£25.90","imgUrl":"images/Bacon-Burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	// {"id":2,"name":"Cheese Butter","pricesmall":"£19.90","pricebig":"£10.00","imgUrl":"images/Cheese-Butter.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	// {"id":3,"name":"Chicken burger","pricesmall":"£19.90","pricebig":"£15.90","imgUrl":"images/Chicken-burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	// {"id":4,"name":"Chicken burger","pricesmall":"£19.90","pricebig":"£25.90","imgUrl":"images/Chicken-burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	// {"id":5,"name":"Double Beef Burger","pricesmall":"£19.90","pricebig":"£25.90","imgUrl":"images/Double-Beef-burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	// {"id":6,"name":"Double Cheese","pricesmall":"£19.90","pricebig":"£21.90","imgUrl":"images/Double-Cheese.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	// {"id":7,"name":"Mushroom Burger","pricesmall":"£19.90","pricebig":"£20.90","imgUrl":"images/Mushroom-Burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	// {"id":8,"name":"Original Burger","pricesmall":"£19.90","pricebig":"£30.90","imgUrl":"images/Original-Burger.png","mighty":"A mighty meaty double helping of all the reasons you love our burger."},
	// ];
	var  burgers = 
	[{"id":1,"name":"Apricot Chicken","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Bacon-Burger.png"},{"pic":"images/Apricot-Chicken1.jpg"},{"pic":"images/Apricot-Chicken1.jpg"}],"description":"Crispy bacon, tasty ham, pineapple, onion and stretchy mozzarella, finished with a BBQ swirl."},
	{"id":2,"name":"Chicken Hawaii","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Cheese-Butter.png"},{"pic":"images/Chicken-Hawaii1.jpg"},{"pic":"images/Chicken-Hawaii1.jpg"}],"description":"Extra-virgin olive oil, mozzarella cheese, thinly-sliced steak meat, garlic, green peppers, mushrooms and tomatoes"},
	{"id":3,"name":"Grand Italiano","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Chicken-burger.png"},{"pic":"images/Grand-Italiano.jpg"},{"pic":"images/Grand-Italiano.jpg"}],"description":"Quisque pretium turpis non tempus cursus. Nulla consequat, mi nec pellentesque imperdiet, mi quam congue magna, tristique commodo."},
	{"id":4,"name":"Hawaii Vegetarian Pizza","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Chicken-burger.png"},{"pic":"images/Hawaii-Vegetarian-Pizza.jpg"},{"pic":"images/Hawaii-Vegetarian-Pizza.jpg"}],"description":"Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella, seasoned with garlic and oregano."},
	{"id":5,"name":"Italiano Original","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Double-Beef-burger.png"},{"pic":"images/Italiano-Original1.jpg"},{"pic":"images/Italiano-Original1.jpg"}],"description":"Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped with lightly drizzled red sauce, pesto, and fresh basil"},
	{"id":6,"name":"Pepperoni Calzone","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Double-Cheese.png"},{"pic":"images/Pepperoni-Calzone1.jpg"},{"pic":"images/Pepperoni-Calzone1.jpg"}],"description":"Piled with shrimp, calamari, clams, mussels, surimi and stretchy mozzarella, seasoned with tangy lemon pepper."},
	{"id":7,"name":"Pepperoni Pizza","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Mushroom-Burger.png"},{"pic":"images/Pepperoni-Pizza1.jpg"},{"pic":"images/Pepperoni-Pizza1.jpg"}],"description":"Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes."},
	{"id":8,"name":"Primo Meat","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Original-Burger.png"},{"pic":"images/Primo-Meat1.jpg"},{"pic":"images/Primo-Meat1.jpg"}],"description":"Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella."},
	
	];
	var Pizzas = 
	[{"id":1,"name":"Apricot Chicken","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Apricot-Chicken.jpg"},{"pic":"images/Apricot-Chicken1.jpg"},{"pic":"images/Apricot-Chicken1.jpg"}],"description":"Crispy bacon, tasty ham, pineapple, onion and stretchy mozzarella, finished with a BBQ swirl."},
	{"id":2,"name":"Chicken Hawaii","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Chicken-Hawaii.jpg"},{"pic":"images/Chicken-Hawaii1.jpg"},{"pic":"images/Chicken-Hawaii1.jpg"}],"description":"Extra-virgin olive oil, mozzarella cheese, thinly-sliced steak meat, garlic, green peppers, mushrooms and tomatoes"},
	{"id":3,"name":"Grand Italiano","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Grand-Italiano.jpg"},{"pic":"images/Grand-Italiano.jpg"},{"pic":"images/Grand-Italiano.jpg"}],"description":"Quisque pretium turpis non tempus cursus. Nulla consequat, mi nec pellentesque imperdiet, mi quam congue magna, tristique commodo."},
	{"id":4,"name":"Hawaii Vegetarian Pizza","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Hawaii-Vegetarian-Pizza.jpg"},{"pic":"images/Hawaii-Vegetarian-Pizza.jpg"},{"pic":"images/Hawaii-Vegetarian-Pizza.jpg"}],"description":"Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella, seasoned with garlic and oregano."},
	{"id":5,"name":"Italiano Original","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Italiano-Original.jpg"},{"pic":"images/Italiano-Original1.jpg"},{"pic":"images/Italiano-Original1.jpg"}],"description":"Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped with lightly drizzled red sauce, pesto, and fresh basil"},
	{"id":6,"name":"Pepperoni Calzone","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Pepperoni-Calzone.jpg"},{"pic":"images/Pepperoni-Calzone1.jpg"},{"pic":"images/Pepperoni-Calzone1.jpg"}],"description":"Piled with shrimp, calamari, clams, mussels, surimi and stretchy mozzarella, seasoned with tangy lemon pepper."},
	{"id":7,"name":"Pepperoni Pizza","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Pepperoni-Pizza.jpg"},{"pic":"images/Pepperoni-Pizza1.jpg"},{"pic":"images/Pepperoni-Pizza1.jpg"}],"description":"Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes."},
	{"id":8,"name":"Primo Meat","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Primo-Meat.jpg"},{"pic":"images/Primo-Meat1.jpg"},{"pic":"images/Primo-Meat1.jpg"}],"description":"Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella."},
	{"id":9,"name":"Summer Pizza","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Summer-Pizza.jpg"},{"pic":"images/Summer-Pizza1.jpg"},{"pic":"images/Summer-Pizza1.jpg"}],"description":"Shrimp, Red Capsicum, Green Capsicum, Onion, Chilli flakes, Lemon Pepper, Mozzarella, finished with Aioli"},
	{"id":10,"name":"Supreme Pizza","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Supreme-Pizza.jpg"},{"pic":"images/Supreme-Pizza1.jpg"},{"pic":"images/Supreme-Pizza1.jpg"}],"description":"Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped with lightly drizzled red sauce, pesto, and fresh basil."},
	{"id":11,"name":"Trio Cheese","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Trio-Cheese.jpg"},{"pic":"images/Trio-Cheese1.jpg"},{"pic":"images/Trio-Cheese1.jpg"}],"description":"Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella."},
	{"id":12,"name":"Vegge Lover","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":'£19.90',"pricebig":'£25.90',"imgUrl":[{"pic":"images/Vegge-Lover.jpg"},{"pic":"images/Vegge-Lover1.jpg"},{"pic":"images/Vegge-Lover1.jpg"}],"description":"Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes"}
	];
	var cool_drink = [{"id":1,"name":"Blueberry-Shake","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Blueberry-Shake-1.jpg"},{"pic":"images/Blueberry-Shake-2.jpg"},{"pic":"images/Blueberry-Shake-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":2,"name":"Chocolate-cake","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Chocolate-cake-1.jpg"},{"pic":"images/Chocolate-cake-2.jpg"},{"pic":"images/Chocolate-cake-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":3,"name":"Chocolate-Muffin","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Chocolate-Muffin-1.jpg"},{"pic":"images/Chocolate-Muffin-2.jpg"},{"pic":"images/Chocolate-Muffin-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":4,"name":"Cola-Bottle","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Cola-Bottle-1.jpg"},{"pic":"images/Cola-Bottle-2.jpg"},{"pic":"images/Cola-Bottle-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":5,"name":"Fresh-Lime","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Fresh-Lime-1.jpg"},{"pic":"images/Fresh-Lime-2.jpg"},{"pic":"images/Fresh-Lime-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":6,"name":"Ice-Lime-Cola","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Ice-Lime-Cola-1.jpg"},{"pic":"images/Ice-Lime-Cola-2.jpg"},{"pic":"images/Ice-Lime-Cola-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":7,"name":"Iced-Tea","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Iced-Tea-1.jpg"},{"pic":"images/Iced-Tea-2.jpg"},{"pic":"images/Iced-Tea-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":8,"name":"Iced-Tea-Bottle","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Iced-Tea-Bottle-1.jpg"},{"pic":"images/Iced-Tea-Bottle-2.jpg"},{"pic":"images/Iced-Tea-Bottle-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":9,"name":"Kiwi-Smoothie","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Kiwi-Smoothie-1.jpg"},{"pic":"images/Kiwi-Smoothie-2.jpg"},{"pic":"images/Kiwi-Smoothie-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":10,"name":"Lemonades-Drink","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Lemonades-Drink-1.jpg"},{"pic":"images/Lemonades-Drink-2.jpg"},{"pic":"images/Lemonades-Drink-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":11,"name":"Muffin-Chocolate","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Muffin-Chocolate-1.jpg"},{"pic":"images/Muffin-Chocolate-2.jpg"},{"pic":"images/Muffin-Chocolate-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":12,"name":"Orange-Juice","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Orange-Juice-1.jpg"},{"pic":"images/Orange-Juice-2.jpg"},{"pic":"images/Orange-Juice-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":13,"name":"Red-Chocolate-Cake","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Red-Chocolate-Cake-1.jpg"},{"pic":"images/Red-Chocolate-Cake-2.jpg"},{"pic":"images/Red-Chocolate-Cake-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":14,"name":"Red-Velvet-Cake","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Red-Velvet-Cake-1.jpg"},{"pic":"images/Red-Velvet-Cake-2.jpg"},{"pic":"images/Red-Velvet-Cake-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":15,"name":"Stawberry-Ice","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Stawberry-Ice-1.jpg"},{"pic":"images/Stawberry-Ice-2.jpg"},{"pic":"images/Stawberry-Ice-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":16,"name":"Strawberry-Shake","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Strawberry-Shake.jpg"},{"pic":"images/Strawberry-Shake.jpg"},{"pic":"images/Strawberry-Shake.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":17,"name":"Strawberry-Tea","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Strawberry-Tea.jpg"},{"pic":"images/Strawberry-Tea.jpg"},{"pic":"images/Strawberry-Tea.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":18,"name":"Trio-Cafe","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Trio-Cafe.jpg"},{"pic":"images/Trio-Cafe.jpg"},{"pic":"images/Trio-Cafe.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":19,"name":"Tropicana Juice","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Tropicana-Juice.jpg"},{"pic":"images/Tropicana-Juice.jpg"},{"pic":"images/Tropicana-Juice.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
	{"id":20,"name":"Water Bottle","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":2.9,"imgUrl":[{"pic":"images/Water-Bottle.jpg"},{"pic":"images/Water-Bottle.jpg"},{"pic":"images/Water-Bottle.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."}
	];
	// data = {"id":1,"name":"Bacon Burger","price-1":19.99,"price-2":25.90,"imgUrl":"images/hao.jpg","mighty":"A mighty meaty double helping of all the reasons you love our burger."};


	$('.content-burger').empty();
	
	var gendata = function($data) {
		$('.content-burger').empty();
		
		for(i=0;i< $data.length;i++){
			console.log($data[i].imgUrl[0])
			var html ='<div class="col-lg-4 col-md-6 col-sm-12 card-h">'+'<p class="text-center"><img  src="'+ $data[i].imgUrl[0].pic+'" width="246px" ></p>'
			+'<p class="Bacon-h text-center">'+$data[i].name+'</p>'+'<p class="Pick-h text-center"><del>----------</del> <span>Pick Size</span> <del>----------</del></p>'
			+'<ul class="ul-money-h">'+'<li class="check-h">22 <br> cm</li>'+'<li class="amount-of-money">'
			+ $data[i].pricesmall+'</li>'+'<li class="check-h">29<br> cm</li>'+'<li class="amount-of-money">'+ $data[i].pricebig+'</li></ul>'+'<div class="clear-h"></div>'
			+'<div class=" Select-Options-h">'
			+'<p class="Select-Options-P-h"><i class="far fa-check-circle"></i> Select Options</p></div></div>'
			$('.content-burger').append(html)
			}
		
	};
	
	// var text = '<p class="text-center"><img  src='+data.imgUrl+' width="246px"></p>' +'<p class="Bacon-h text-center">'+data.name+'</p>'+''
	// for(i=0;i< burgers.length;i++){
	// 	// console.log(i)
	// 	var html ='<div class="col-lg-4 col-md-6 col-sm-12 card-h">'+'<p class="text-center"><img  src="'+ burgers[i].imgUrl[]+'" width="246px" ></p>'
	// 	+'<p class="Bacon-h text-center">'+burgers[i].name+'</p>'+'<p class="Pick-h text-center"><del>----------</del> <span>Pick Size</span> <del>----------</del></p>'
	// 	+'<ul class="ul-money-h">'+'<li class="check-h">22 <br> cm</li>'+'<li class="amount-of-money">'
	// 	+ burgers[i].price1+'</li>'+'<li class="check-h">29<br> cm</li>'+'<li class="amount-of-money">'+ burgers[i].price2+'</li></ul>'+'<div class="clear-h"></div>'
	// 	+'<div class=" Select-Options-h">'
	// 	+'<p class="Select-Options-P-h"><i class="far fa-check-circle"></i> Select Options</p></div></div>'
	// 	$('.content-burger').append(html)
	// }

	gendata(burgers);




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



	$('.center-left-h li').click(function(){
		if ($.trim($(this).text())=="Pizza") {
			gendata(Pizzas);
		}
		if ($.trim($(this).text())=="Burgers") {
			gendata(burgers);
		}
			if ($.trim($(this).text())=="Salads") {
			gendata(Salads);
		}
			if ($.trim($(this).text())=="Tacos") {
			gendata(Salads);
		}
			if ($.trim($(this).text())=="Wraps") {
			gendata(Salads);
		}
			if ($.trim($(this).text())=="Fries") {
			gendata(Salads);
		}
			if ($.trim($(this).text())=="Salads") {
			gendata(Salads);
		}
			if ($.trim($(this).text())=="Drinks") {
			gendata(cool_drink);
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


