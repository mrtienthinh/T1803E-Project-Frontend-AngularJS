$(document).ready(function(){
	var combo_ofers = [{"id":1,"name":"BIG STAR COMBO","price1":"£19.90","imgUrl":"Images/BIG-STAR-COMBO.png"},
	{"id":2,"name":"BIG STAR COMBO","price1":"£19.90","price2":"£25.90","imgUrl":"images/BIG-STAR-COMBO.png"},
	{"id":3,"name":"BURGER-CHICKEN-RICE-COMBO","price1":"£19.90","price2":"£25.90","imgUrl":"images/BURGER-CHICKEN-RICE-COMBO.png"},
	{"id":4,"name":"BURGER COCONUT COMB","price1":"£19.90","price2":"£25.90","imgUrl":"images/BURGER-COCONUT-COMB.png"},
	{"id":5,"name":"BURGER FISH COMBO","price1":"£19.90","price2":"£25.90","imgUrl":"images/BURGER-FISH-COMBO.png"},
	{"id":6,"name":"BURGER-PHO MAI COMBO","price1":"£19.90","price2":"£25.90","imgUrl":"images/BURGER-PHO-MAI-COMBO.png"},
	{"id":7,"name":"BURGER TOM COMBO","price1":"£19.90","price2":"£25.90","imgUrl":"images/BURGER-TOM-COMBO.png"},
	{"id":8,"name":"FAMILY SET 1","price1":"£19.90","price2":"£25.90","imgUrl":"images/FAMILY-SET-1.png"},
	{"id":9,"name":"FAMILY SET 2","price1":"£19.90","price2":"£25.90","imgUrl":"images/FAMILY-SET-2.png"},
	];

	for(i=0;i< combo_ofers.length;i++){
		 console.log(i);
		var html ='<div class="col-lg-4 col-md-6 col-sm-12 container-h ">'+'<a class="text-center "><img src="'+combo_ofers[i].imgUrl+'" class="img-h"></a>'+'<h3 class="text-center name-h">'+combo_ofers[i].name+'</h3>'
		+'<p class="price"><span>'+combo_ofers[i].price1+'</span></p>'
		
		+'<div class=" Select-Options-h">'
		+'<p class="Select-Options-P-h"><i class="far fa-check-circle"></i> Select Options</p></div></div>'
		$('.Page').append(html)
	}


});
