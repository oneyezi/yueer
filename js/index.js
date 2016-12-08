// JavaScript Document
window.onload=function(){
var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");  
var Stamp = new Date();  
var sj= document.getElementById("shijian");
var c=("" + dayNames[Stamp.getDay()] +"&nbsp;&nbsp;&nbsp;&nbsp;" + Stamp.getFullYear() + "/"+(Stamp.getMonth() + 1) +"/"+Stamp.getDate()+ " ");  
		sj.innerHTML=c
}

//头部下拉
$(document).ready(function(){	

		$("#zhm").hover(function(){
			$("#zhcz").toggle() ;
		})

	})


$(function(){
	$(".thead ul li").click(function(){
		$(this).addClass("index").siblings().removeClass("index")
		var ind = $(".thead ul li ").index(this)
		$(".tbody").children("div")
							 .removeClass()
							 .eq(ind)
							 .addClass("block")
							 .siblings()
							 .addClass("none")
	})
	$(".zhuti").hover(function(){
	$("dt",this).animate({
		"top":-170
		},300);
		$(".Play",this).animate({
		"top":0
		})
	},function(){
	$("dt",this).animate({
		"top":0
		},300);
		$(".Play",this).animate({
		"top":-170
		})
	})
})


//点击弹出
	$(document).ready(function(){		
	
			$(".select_box").click(function(event){   
				event.stopPropagation();
				$(this).find(".option").toggle();
				$(this).parent().siblings().find(".option").hide();
			});
			$(document).click(function(event){
				var eo=$(event.target);
				if($(".select_box").is(":visible") && eo.attr("class")!="option" && !eo.parent(".option").length)
				$('.option').hide();									  
			});
			/*赋值给文本框*/
			$(".option a").click(function(){
				var value=$(this).text();
				$(this).parent().siblings(".select_txt").text(value);
				$(this).parent().siblings(".select_txt").parent().siblings(".select_value").val(value);
				
			 })		 
			
		})	




//选择按钮
	function hide(obj){       
	if(obj.className){      
	if(obj.className=="b0"){       
	obj.className="b1"; }
	else{       obj.className="b0"; }    
	 }}
	 
	 
	 
	 
//弹框、、	 
	$(document).ready(function(){
		})
		//弹出隐藏层
		function ShowDiv(show_div,bg_div){
		document.getElementById(show_div).style.display='block';
		document.getElementById(bg_div).style.display='block' ;
		var bgdiv = document.getElementById(bg_div);
		bgdiv.style.width = document.body.scrollWidth;
		// bgdiv.style.height = $(document).height();
		$("#"+bg_div).height($(document).height());
		};
		//关闭弹出层
		function CloseDiv(show_div,bg_div)
		{
		document.getElementById(show_div).style.display='none';
		document.getElementById(bg_div).style.display='none';
		};
						$(document).ready(function(){	
			$("#top_head_cart").hover(function(){
				$("#cart_bd").toggle() ;
			})
			$(".xk").click(function(){				
				if($(this).attr("class")=="xk"){
					$(this).addClass("xk2");
					$(this).css({'background':'url(images/bg.png) -297px -120px'});
				}
				else{
					$(this).css({'background':'url(images/bg.png) -297px -69px'});
					$(this).removeClass("xk2");
				}
			 })		
		})	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 