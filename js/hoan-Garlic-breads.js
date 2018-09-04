
    $(document).ready(function(){
	var Garlic_breads= [{"id":1,"name":"Garlic Breads","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Garlic_breads1.jpg"},{"pic":"images/Bolognese-Pasta.jpg"},{"pic":"images/BBQ-chicken-breast.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
        {"id":2,"name":"Bolognese Pasta","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Garlic_breads2.jpg"},{"pic":"images/Garlic_breads2.jpg"},{"pic":"images/Penne-Funghi-Chicken.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
        {"id":3,"name":"Molto Tagliatelle","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Garlic_breads3.jpg"},{"pic":"images/Molto-Tagliatelle.jpg"},{"pic":"images/Molto-Tagliatelle.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
        {"id":4,"name":"Pene Salmone","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Pene-Salmone.jpg"},{"pic":"images/Garlic_breads3.jpg"},{"pic":"images/Pene-Salmone.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
        {"id":5,"name":"Penne Funghi Chicken","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Penne-Funghi-Chicken.jpg"},{"pic":"images/Spaghetti-Bolognese.jpg"},{"pic":"images/Garlic_breads4.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
        {"id":6,"name":"Spaghetti Bolognese","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Spaghetti-Bolognese.jpg"},{"pic":"images/Penne-Funghi-Chicken.jpg"},{"pic":"images/Garlic_breads5.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
        {"id":7,"name":"Tagliatelle Molto","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Tagliatelle-Molto.jpg"},{"pic":"images/Penne-Funghi-Chicken.jpg"},{"pic":"images/Molto-Tagliatelle.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."}
	];

	for(i=0;i<  Garlic_breads.length;i++){
		
				var html ='<div class="col-lg-4 col-md-6 col-sm-12 container-h ">'+'<a class="text-center "><img src="'+Garlic_breads[i].imgUrl[0]+'" class="img-h"></a>'+'<h3 class="text-center name-h">'+combo_ofers[i].name+'</h3>'
		+'<p class="price"><span>'+combo_ofers[i].pricesmall+'</span></p>'
		
		+'<div class=" Select-Options-h">'
		+'<p class="Select-Options-P-h"><i class="far fa-check-circle"></i> Select Options</p></div></div>'
		$('.Page').append(html)
	}


});
