// Chạy json sever: cd C:\xampp\htdocs\project\js> 
// json-server --watch data.json
// angular
var shopApp = angular.module("shopApp",["ui.bootstrap","ngRoute"]);
shopApp.run(function($rootScope,$http){
	$http.get("js/data.json")
    .then(function(response) {
        var $categorys = response.data.data.categorys;
        var $combo_ofers = response.data.data.combo_ofers;
        var $best_deals = response.data.data.best_deals;
        $rootScope.categorys = $categorys;
        $rootScope.combo_ofers = $combo_ofers;
        $rootScope.best_deals = $best_deals;
    });
})
// Sử dụng directive thêm vào các trang
shopApp.directive('ngHeaderPage',function(){
	return {
		restrict: 'AE',
		templateUrl:'block/header-page.htm',
	}
});
shopApp.directive('ngScrollupButton',function(){
	return {
		restrict: 'AE',
		templateUrl:'block/scrollup-button.htm',
	}
});
shopApp.directive('ngFooterPage',function(){
	return {
		restrict: 'AE',
		templateUrl:'block/footer-page.htm',
	}
});
// Cấu hình các đường link bằng routeProvider
shopApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "block/home-page.htm",
        controller: "shopController"
    })
    .when("/category/:linkcategory",{
        templateUrl: "block/list-product.htm",
        controller: "listController"
    })
    .when("/product/:linkcategory/:linkproduct",{
        templateUrl: "block/single-product.htm",
        controller: "productController"
    })
    .when("/franchise",{
        templateUrl: "block/franchise.htm",
        controller: "franchiseController"
    })
    .when("/combo",{
        templateUrl: "block/combo-offers-page.htm",
        controller: "comboController"
    })
    .when("/weekendspecial",{
        templateUrl: "block/weekendspecial.htm",
        controller: "weekenspecialController"
    })
    .when("/galary",{
        templateUrl: "block/galary.htm",
        controller: "galaryController"
    })
    .when("/contact",{
        templateUrl: "block/contactus.htm",
        controller: "contactController"
    })
    .when("/storelocation",{
        templateUrl: "block/store-location.htm",
        controller: "storelocationController"
    })
    .otherwise({ redirectTo: '/' });
}]);
// Dùng controller đề điều khiển các block
shopApp.controller("shopController", function($rootScope,$scope,$routeParams){

    // Khai báo linkcategory
    $routeParams.linkcategory="pizzas";
    $scope.linkcategory = $routeParams.linkcategory;
    // jquery của scrollup
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollup-t').fadeIn();
            } else {
                $('.scrollup-t').fadeOut();
            }
        });
    
        $('.scrollup-t').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });
    // Binding data in home page
    if(typeof $routeParams.linkcategory !== "undefined"){
		angular.forEach($rootScope.categorys,function(category){
			if(category.link == $routeParams.linkcategory){
                $scope.products = category.products;
                $scope.nameCategory = category.name;
			};		
		});
    };
    $scope.changecategory = function(item){
        $routeParams.linkcategory=item.link;
        $scope.linkcategory = $routeParams.linkcategory;
        if(typeof $routeParams.linkcategory !== "undefined"){
            angular.forEach($rootScope.categorys,function(category){
                if(category.link == $routeParams.linkcategory){
                    $scope.products = category.products;
                    $scope.nameCategory = category.name;
                };		
            });
        };
    };
    $scope.countupitem = 0
    
    $scope.choicedrinkitem = function(){
        if($scope.nextitemdrink>1){
            $scope.nextitemdrink = $scope.nextitemdrink-1;
        };
    }
    $scope.choicedrinkitemnext = function(){
        if($scope.nextitemdrink<3){
            $scope.nextitemdrink = $scope.nextitemdrink+1;
        };
    }
    $scope.choiceitem = function(){
        if($scope.countupitem>1){
            $scope.countupitem = $scope.countupitem-1;
        };
    }
    $scope.choiceitemnext = function(){
        if($scope.countupitem<$scope.products.length-3){
            $scope.countupitem = $scope.countupitem+1;
        };
    }
});
shopApp.controller("listController", function($rootScope,$scope,$routeParams){
    // Chọn loại category để khai báo biến products
    $scope.linkcategory = $routeParams.linkcategory;
    if(typeof $routeParams.linkcategory !== "undefined"){
		angular.forEach($rootScope.categorys,function(category){
			if(category.link == $routeParams.linkcategory){
                $scope.products = category.products;
                $scope.nameCategory = category.name;
			};		
		});
    };
    // Funtion cho phân trang
    $scope.viewby = 10;
    $scope.totalItems = $scope.products.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 9;
    $scope.maxSize = 5; //Number of pager buttons to show
    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };
    // Funtion chọn trang thì scrollup lên đầu
    $scope.scrollupChoosePage = function(){
        $("html, body").animate({
            scrollTop: 100
        }, 600);
    }
    // Funtion chọn các sản phẩm vào giỏ hàng

});
shopApp.controller("productController", function($rootScope,$scope,$routeParams,$http){
    // Chọn product từ 
    $scope.linkcategory = $routeParams.linkcategory;
    $scope.linkproduct = $routeParams.linkproduct;
    if(typeof $routeParams.linkcategory !== "undefined"){
        if(typeof $routeParams.linkproduct !== "undefined"){
            angular.forEach($rootScope.categorys,function(category){
                if(category.link == $routeParams.linkcategory){
                    $scope.products = category.products;
                    $scope.nameCategory = category.name;
                    angular.forEach($scope.products,function(product){
                        if(product.id == $routeParams.linkproduct){
                            $scope.product = product;
                        };		
                    });        
                };		
            });
        };
    };
    // jquery của trang single-products
    $(document).ready(function(){
        $('#img-zoom-t').zoom();
    });
    // Chọn ảnh sản phẩm
    $scope.imageInit = $scope.product.imgUrl[0].pic;
    $scope.getImage0 = function(){
        $scope.imageInit = $scope.product.imgUrl[0].pic;
        $(document).ready(function(){
            $('#img-zoom-t').zoom();
        });
    };
    $scope.getImage1 = function(){
        $scope.imageInit = $scope.product.imgUrl[1].pic;
        $(document).ready(function(){
            $('#img-zoom-t').zoom();
        });
    };
    $scope.getImage2 = function(){
        $scope.imageInit = $scope.product.imgUrl[2].pic;
        $(document).ready(function(){
            $('#img-zoom-t').zoom();
        });
    };
    // post review email
    $scope.submitreviewproduct = function(){
		$http({
			method: 'POST',
			url: 'http://localhost/project/js/review.json',
            data: $.param({
                    email_reviewer: $scope.review.email, 
                    needreply: $scope.review.reply, 
                    reviewtext: $scope.review.text, 
                    product_reviewer: $scope.product.name
            }),
            contentType: "application/json",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
			.then(function (response) {
                alert("Send review done!");
                console.log($scope.review.email,$scope.review.reply,$scope.review.text,$scope.product.name);
			});
    }
    // Tính tiền của sản phẩm
    $scope.showSizeOption = true;
    $scope.quantitySelectItem = 1;
    $scope.priceofproduct=$scope.product.pricebig;
    $scope.choicesmallproduct = function(){
        $scope.showSizeOption=false;
        $scope.priceofproduct=$scope.product.pricesmall;
    }
    $scope.choicebigproduct = function(){
        $scope.showSizeOption=true;
        $scope.priceofproduct=$scope.product.pricebig;
    }
});
shopApp.controller("franchiseController", function($rootScope,$scope,$routeParams){
});
shopApp.controller("comboController", function($rootScope,$scope,$routeParams){
});
shopApp.controller("weekenspecialController", function($rootScope,$scope,$routeParams){
});
shopApp.controller("galaryController", function($rootScope,$scope,$routeParams){
});
shopApp.controller("contactController", function($rootScope,$scope,$routeParams){
});
shopApp.controller("storelocationController", function($rootScope,$scope,$routeParams){
    $(document).ready(storelocation());
});
// jquery
$('.carousel').carousel({
    interval: 3000
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup-t').fadeIn();
        } else {
            $('.scrollup-t').fadeOut();
        }
    });

    $('.scrollup-t').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
// Thử nghiệm ở trang rating.html
shopApp.controller("tryhard", function($rootScope,$scope,$routeParams){

});
// jquery trang store location
function storelocation(){
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
        $(".map").each(function () {
  var m=$(this).attr("id");
 
  if (m==a) {
$('.map').hide(300);
$(this).show(300);
  }
});
        return false;
    });
    
};
