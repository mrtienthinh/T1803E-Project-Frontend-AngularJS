// data
var pizzas = 
[{"id":1,"name":"Apricot Chicken","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Apricot-Chicken.jpg"},{"pic":"images/Apricot-Chicken1.jpg"},{"pic":"images/Apricot-Chicken1.jpg"}],"description":"Crispy bacon, tasty ham, pineapple, onion and stretchy mozzarella, finished with a BBQ swirl."},
{"id":2,"name":"Chicken Hawaii","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Chicken-Hawaii.jpg"},{"pic":"images/Chicken-Hawaii1.jpg"},{"pic":"images/Chicken-Hawaii1.jpg"}],"description":"Extra-virgin olive oil, mozzarella cheese, thinly-sliced steak meat, garlic, green peppers, mushrooms and tomatoes"},
{"id":3,"name":"Grand Italiano","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Grand-Italiano.jpg"},{"pic":"images/Grand-Italiano.jpg"},{"pic":"images/Grand-Italiano.jpg"}],"description":"Quisque pretium turpis non tempus cursus. Nulla consequat, mi nec pellentesque imperdiet, mi quam congue magna, tristique commodo."},
{"id":4,"name":"Hawaii Vegetarian Pizza","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Hawaii-Vegetarian-Pizza.jpg"},{"pic":"images/Hawaii-Vegetarian-Pizza.jpg"},{"pic":"images/Hawaii-Vegetarian-Pizza.jpg"}],"description":"Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella, seasoned with garlic and oregano."},
{"id":5,"name":"Italiano Original","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Italiano-Original.jpg"},{"pic":"images/Italiano-Original1.jpg"},{"pic":"images/Italiano-Original1.jpg"}],"description":"Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped with lightly drizzled red sauce, pesto, and fresh basil"},
{"id":6,"name":"Pepperoni Calzone","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Pepperoni-Calzone.jpg"},{"pic":"images/Pepperoni-Calzone1.jpg"},{"pic":"images/Pepperoni-Calzone1.jpg"}],"description":"Piled with shrimp, calamari, clams, mussels, surimi and stretchy mozzarella, seasoned with tangy lemon pepper."},
{"id":7,"name":"Pepperoni Pizza","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Pepperoni-Pizza.jpg"},{"pic":"images/Pepperoni-Pizza1.jpg"},{"pic":"images/Pepperoni-Pizza1.jpg"}],"description":"Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes."},
{"id":8,"name":"Primo Meat","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Primo-Meat.jpg"},{"pic":"images/Primo-Meat1.jpg"},{"pic":"images/Primo-Meat1.jpg"}],"description":"Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella."},
{"id":9,"name":"Summer Pizza","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Summer-Pizza.jpg"},{"pic":"images/Summer-Pizza1.jpg"},{"pic":"images/Summer-Pizza1.jpg"}],"description":"Shrimp, Red Capsicum, Green Capsicum, Onion, Chilli flakes, Lemon Pepper, Mozzarella, finished with Aioli"},
{"id":10,"name":"Supreme Pizza","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Supreme-Pizza.jpg"},{"pic":"images/Supreme-Pizza1.jpg"},{"pic":"images/Supreme-Pizza1.jpg"}],"description":"Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped with lightly drizzled red sauce, pesto, and fresh basil."},
{"id":11,"name":"Trio Cheese","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Trio-Cheese.jpg"},{"pic":"images/Trio-Cheese1.jpg"},{"pic":"images/Trio-Cheese1.jpg"}],"description":"Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella."},
{"id":12,"name":"Vegge Lover","size":[{"option":22,"unit":"cm"},{"option":29,"unit":"cm"}],"pricesmall":19.99,"pricebig":25.99,"imgUrl":[{"pic":"images/Vegge-Lover.jpg"},{"pic":"images/Vegge-Lover1.jpg"},{"pic":"images/Vegge-Lover1.jpg"}],"description":"Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes"}
];
var burgers = [{"id":1,"name":"Bacon Burger","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":19.99,"pricebig":25.90,"imgUrl":[{"pic":"images/Bacon-Burger.png"},{"pic":"images/Bacon-Burger.png"},{"pic":"images/Bacon-Burger.png"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":2,"name":"Cheese Butter","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":19.99,"pricebig":25.90,"imgUrl":[{"pic":"images/Cheese-Butter.png"},{"pic":"images/Cheese-Butter.png"},{"pic":"images/Cheese-Butter.png"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":3,"name":"Chicken burger","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":19.99,"pricebig":25.90,"imgUrl":[{"pic":"images/Chicken-burger.png"},{"pic":"images/Chicken-burger.png"},{"pic":"images/Chicken-burger.png"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":4,"name":"Chicken burger","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":19.99,"pricebig":25.90,"imgUrl":[{"pic":"images/Chicken-burger.png"},{"pic":"images/Chicken-burger.png"},{"pic":"images/Chicken-burger.png"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":5,"name":"Double Beef Burger","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":19.99,"pricebig":25.90,"imgUrl":[{"pic":"images/Double-Beef-burger.png"},{"pic":"images/Double-Beef-burger.png"},{"pic":"images/Double-Beef-burger.png"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":6,"name":"Double Cheese","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":19.99,"pricebig":25.90,"imgUrl":[{"pic":"images/Double-Cheese.png"},{"pic":"images/Double-Cheese.png"},{"pic":"images/Double-Cheese.png"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":7,"name":"Mushroom Burger","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":19.99,"pricebig":25.90,"imgUrl":[{"pic":"images/Mushroom-Burger.png"},{"pic":"images/Mushroom-Burger.png"},{"pic":"images/Mushroom-Burger.png"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":8,"name":"Original Burger","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":19.99,"pricebig":25.90,"imgUrl":[{"pic":"images/Original-Burger.png"},{"pic":"images/Original-Burger.png"},{"pic":"images/Original-Burger.png"}],"description":"A mighty meaty double helping of all the reasons you love our burger."}
];
var passta = [{"id":1,"name":"BBQ chicken breast","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/BBQ-chicken-breast.jpg"},{"pic":"images/BBQ-chicken-breast.jpg"},{"pic":"images/BBQ-chicken-breast.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":2,"name":"Bolognese Pasta","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Bolognese-Pasta.jpg"},{"pic":"images/Bolognese-Pasta.jpg"},{"pic":"images/Bolognese-Pasta.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":3,"name":"Molto Tagliatelle","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Molto-Tagliatelle.jpg"},{"pic":"images/Molto-Tagliatelle.jpg"},{"pic":"images/Molto-Tagliatelle.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":4,"name":"Pene Salmone","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Pene-Salmone.jpg"},{"pic":"images/Pene-Salmone.jpg"},{"pic":"images/Pene-Salmone.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":5,"name":"Penne Funghi Chicken","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Penne-Funghi-Chicken.jpg"},{"pic":"images/Penne-Funghi-Chicken.jpg"},{"pic":"images/Penne-Funghi-Chicken.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":6,"name":"Spaghetti Bolognese","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Spaghetti-Bolognese.jpg"},{"pic":"images/Spaghetti-Bolognese.jpg"},{"pic":"images/Spaghetti-Bolognese.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
{"id":7,"name":"Tagliatelle Molto","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Tagliatelle-Molto.jpg"},{"pic":"images/Tagliatelle-Molto.jpg"},{"pic":"images/Tagliatelle-Molto.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."}
];
var hot_drink = [{"id":1,"name":"Black Coffee","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Black-Coffee-1.jpg"},{"pic":"images/Black-Coffee-2.jpg"},{"pic":"images/Black-Coffee-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
    {"id":2,"name":"Hot Cappuccino","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Hot-Cappuccino-1.jpg"},{"pic":"images/Hot-Cappuccino-2.jpg"},{"pic":"images/Hot-Cappuccino-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
    {"id":3,"name":"Iced Coffee","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Iced-Coffee-1.jpg"},{"pic":"images/Iced-Coffee-2.jpg"},{"pic":"images/Iced-Coffee-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
    {"id":4,"name":"Pizzaro Coffee","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Pizzaro-Coffee-1.jpg"},{"pic":"images/Pizzaro-Coffee-2.jpg"},{"pic":"images/Pizzaro-Coffee-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
    {"id":5,"name":"Plain Tea","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Plain-Tea-1.jpg"},{"pic":"images/Plain-Tea-2.jpg"},{"pic":"images/Plain-Tea-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."}
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
var best_deals = [{"id":1,"name":"Black Coffee","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Black-Coffee-1.jpg"},{"pic":"images/Black-Coffee-2.jpg"},{"pic":"images/Black-Coffee-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
    {"id":2,"name":"Hot Cappuccino","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Hot-Cappuccino-1.jpg"},{"pic":"images/Hot-Cappuccino-2.jpg"},{"pic":"images/Hot-Cappuccino-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
    {"id":3,"name":"Iced Coffee","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Iced-Coffee-1.jpg"},{"pic":"images/Iced-Coffee-2.jpg"},{"pic":"images/Iced-Coffee-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
    {"id":4,"name":"Pizzaro Coffee","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Pizzaro-Coffee-1.jpg"},{"pic":"images/Pizzaro-Coffee-2.jpg"},{"pic":"images/Pizzaro-Coffee-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."},
    {"id":5,"name":"Plain Tea","size":[{"option":"Small","unit":"size"},{"option":"Big","unit":"size"}],"pricesmall":1.5,"pricebig":25.90,"imgUrl":[{"pic":"images/Plain-Tea-1.jpg"},{"pic":"images/Plain-Tea-2.jpg"},{"pic":"images/Plain-Tea-3.jpg"}],"description":"A mighty meaty double helping of all the reasons you love our burger."}
];
// jqure
$(document).ready(function(){
    $('#img-zoom-t').zoom();
});
$('.carousel').carousel({
    interval: 3000
});
$( "#dropdown-menu-hover-t" ).hover(
    function() {
      $( "#dropdown-menu-t" ).show();
    }
);
$( "#dropdown-menu-hover-t" ).mouseleave(
    function() {
      $( "#dropdown-menu-t" ).hide();
    }
);
// angular
// Khai báo các sản phẩm
var shopApp = angular.module("shopApp",['ui.bootstrap']);
shopApp.controller("shopController", function($scope){
// Thêm các sản phẩm vào main-contain
    $scope.products = pizzas;
    $scope.bestDeals = best_deals;
    $scope.choosepizza = function (){
        $scope.products = pizzas;
        return products;
    }
    $scope.chooseburgers = function (){
        $scope.products = burgers;
        return products;
    }
    $scope.choosewraps = function (){
        $scope.products = hot_drink;
        return products;
    }
    $scope.choosefries = function (){
        $scope.products = passta;
        return products;
    }
    $scope.choosedrinks = function (){
        $scope.products = cool_drink;
        return products;
    }
// Khai báo biến dùng để chứa các sản phẩm
    var selectedItems = [];
    $scope.selectedItems = selectedItems;
// Sự kiện click sản phẩm vào giỏ hàng
    $scope.addToCart = function (product) {
        var existItem = {};
        // Kiểm tra sự tồn tại của sản phẩm trong giỏ hàng (selectedItems)
        angular.forEach($scope.selectedItems, function (item, index) {
            if (item.id === product.id) {
                existItem = item; // đối tượng existItem = item
                return false; // break loop
            }
        });
        // Nếu tồn tại thì tăng quantity thêm 1
        if (existItem.id !== undefined) {
            existItem.quantity++;
        }
        // ngược lại thì thêm mới vào giỏ hàng
        else {

            var cartItem = angular.copy(product);
            cartItem.quantity = 1;
            $scope.selectedItems.push(cartItem);
        }
    };
    // xóa bỏ khỏi giỏ hàng
    $scope.remove = function(cartItem){
        var index = $scope.selectedItems.indexOf(cartItem);
        $scope.selectedItems.splice(index,1);
    }
    // Tính tổng tiền
    $scope.getTotal = function (){
        var total = 0;
        angular.forEach($scope.selectedItems, function(item, index){
            total+=(item.price*item.quantity);
        })
        return total;
    }
    $scope.viewby = 10;
    $scope.totalItems = $scope.products.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 9;
    $scope.maxSize = 5; //Number of pager buttons to show
  
  
    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };
  

});



