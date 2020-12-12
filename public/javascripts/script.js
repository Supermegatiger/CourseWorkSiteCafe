$(document).ready(function(){


let clCh = true;
let w = "20%";
let w1 = $(".nav_search_cont").css("width");
let w100 = "90%";
let main_bckgrnd ="radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(70,5,33,0.87) 89%)"; 


/////// Изменение верхнего отступа у элемента .main при изменении размеров экрана /////////////

$(window).resize(function(){
	let h = $("header").css("height");
	$(".main").css("marginTop", h);
	$(".main").css("marginTop", "+=1%");
	let w = $(".main").css("width");
	$("header").css("width", h);
});

$(window).resize();


///////////////////////////////////////////////////////////////////////////////////////////////






//////////////////////////////// Нажатие на кнопку поиска //////////////////////////////

let navLinkImgClick = $(".nav_link_img:last").click(function(){
	if(clCh){
		$(".nav_search_cont").animate({ width: w },500, function(){$(".nav_search").toggle("clip").focus();});
		clCh = false;
		
	}else{
		$(".nav_search").toggle("clip", function(){$(".nav_search_cont").animate({ width: w1},500);});
		clCh = true;
	}
	
});

//////////////////////////////////////////////////////////////////////////////////////


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



/////// Обработчики событий mouseover и mouseout для кнопки Категории (появление подменю) //////////

$(".cat_menu").stop(100,100).on("mouseover", function(e){
	e.preventDefault();
	if(b){
 	   $(".cat_menu_link").css({"display":"flex"});
    	$("div.cat_menu").show("blind", function(){ $(".cat_menu").css({"display": "flex"});});
	}else{
		$(".cat_menu_link").css({"display":"flex"});
    	$(".cat_menu").css({"display": "flex"});
    	$(".cat_menu_link").css({"display":"none"});
		$(".cat_menu").css({"display":"none"});
		$(".o").css({"display":"flex", width:"auto"});
	}
  
});

function idIsHovered(id){
    return $("." + id + ":hover").length > 0;
}

$(".cat_menu").stop(100,100).on("mouseout", async function(e){
	e.preventDefault();
	await sleep(500);
	if(!idIsHovered("cat_menu")){		
		$("div.cat_menu").hide("blind",function(){
			$(".cat_menu_link").css({"display":"none"});
			$(".cat_menu").css({"display":"none"});
			$(".o").css({"display":"flex", width:"auto"});
		});  	
	}
});

let b = 0;
$(".cat_menu").trigger("mouseover");
b=1;

/////////////////////////////////////////////////////////////////////////////////





// $(window).scroll(function(){
// 	if($(window).scrollTop() > scrl ){
// 		$(".nav_menu_link").css({"padding": "0%" });
// 		$(".nav_search_cont").css({"padding": "0.5%" });
// 		$(".cat_menu_link").css({"paddingLeft": "7%", "paddingRight": "7%"});
// 		$(".featured_link").css({"paddingBottom": "20px" });
// 		scrl = $(window).scrollTop();

// 	}else{
// 		$(".nav_menu_link").css({"padding": "1%" });
// 		$(".cat_menu_link").css({"paddingLeft": "7%", "paddingRight": "7%"});
// 		$(".featured_link").css({"paddingBottom": "20px" });
// 		scrl = $(window).scrollTop();
// 	}
// });



//////// Обработчик события click для картинки Бургер (появление подменю) ///////


// let bool = 1;
// $(".f").stop(100,100).on("click",function(){
// 	if(bool){
// 	    $(".featured").stop(100,100).show("blind", function(){ $(".featured").css({"display": "block"});});
// 	 	bool = 0;
// 	}else{
// 		$(".featured").stop(100,100).hide("blind",function(){
// 				$(".featured").css({"display":"none"});
// 		});
// 		bool = 1;
// 	}
// });



/////////////////////////////////////////////////////////////////////////////////////////////










////////////////// Обработчик события scroll для сайта (изменение панели навигации) ///////////////////


let $feat = $(".featured li").clone(true,true);
let $nav = $("nav>div, nav>a.nav_menu_link").clone(true,true);

let scrl = $(window).scrollTop();



$(window).scroll(function(){
	if($(window).scrollTop() > scrl ){
			$(".nav_menu_link").css({"padding":"0"});
			$("nav").html("");
			$feat.clone(true, true).appendTo("nav");
				$(".featured").css({"marginTop": "0px" });
				$(".featured_link, .nav_link").css({"padding": "0","display":"flex" });
				$(".nav_menu_link").css({"padding":"0"});
				$(".cat_menu_link").css({"paddingLeft": "3%", "paddingRight": "3%"});
				scrl = $(window).scrollTop();
				bool=1;
				clCh = true;
	}else{
		
			$("nav").html("");
			$nav.clone(true, true).appendTo("nav");
				
				$(".nav_link").css({"padding": "1","display":"flex" });
				$(".featured").css({"padding": "0","display":"none" });
				$(".nav_menu_link").css({"padding":"1%"});
				$(".cat_menu_link").css({"paddingLeft": "3%", "paddingRight": "3%"});
				
				scrl = $(window).scrollTop();
	}

});


/////////////////////////////////////////////////////////////////////////////////////////////////////



});

