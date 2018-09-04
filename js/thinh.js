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
        console.log(response.data.data.best_deals);
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
			url: 'http://localhost:3000/review',
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
    // Chọn loại category để khai báo biến products

    $routeParams.linkcategory="pizzas";
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
