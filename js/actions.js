//$(document).ready(function(){
/*	$('.content img').hover(
		function(){
			$(this).stop().fadeTo('fast',0.5);
		},
		
		function(){
			$(this).stop().fadeTo('slow',1);
		});

	$(".content img").click(
		function(){
			$("htmnl, body").stop().fadeTo("slow", 0.5);
			
		})
*/
/*	$('a[href*=#]:not([href=#])').click(
		function(){
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname){
				var target = $(this.hash);
			
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		   
		   if (target.length) {
				$('body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});*/


function init(){
	console.log("actions.js loaded");

	//	Hover effect
	$('#gallery>div>a').each( function(){
		this.addEventListener("mouseover", thumbMouseOver, false);
	});
	$('#gallery>div>a').each( function(){
		this.addEventListener("mouseout", thumbMouseOut, false);
	});

	//	Assign class for Magnific to target
	$('.thumbImg').parent().addClass("popup");

	var href = document.location.href;
	var pageName = href.substr(href.lastIndexOf('/') + 1);

 if(pageName == 'index.html' || pageName == '') {
		$(".popup").magnificPopup({
			type:"image",
			verticalFit: true,
			removalDelay: 150,
			mainClass: "mfp-fade",
			gallery:{
				enabled:true,
				tCounter: "<span class='mfp-counter'>%curr% of %total%</span>"
			},
			image:{titleSrc:'data-title'}
		});
	}
	else if(pageName == 'dev_design.html') {
		$(".video-popup").append(
			"<div class='mfp-bottom-bar'>"+
				"<div class='mfp-title'></div>"+
				"<div class='mfp-counter'></div>"+
			"</div>"
		);

		$(".popup").magnificPopup({
			type:"inline",
			removalDelay: 150,
			mainClass: "mfp-fade",
			//closeBtnInside: false,
			gallery:{
				enabled:true,
				tCounter: "<span class='mfp-counter'>%curr% of %total%</span>"
			},
  			callbacks: {
				markupParse: function(template, values, item) {
					values.title = item.el.attr('data-title');
				},
				change: function(){
					//	Autoplay!
					console.log($(this.content).find('video').get(0));
					$(this.content).find('video').get(0).currentTime = 0;
				//	$(this.content).find('video').get(0).play();
				}
  			}
		});

		$(".video-popup").each( function(){
			$(this).find('video').css('max-height', $(window).height()-80+'px');
			$(this).find('video').css('max-width', $(window).width()-20+'px');
		});
		$(window).resize(function(){
			$(".video-popup").each( function(){
				$(this).find('video').css('max-height', $(window).height()-80+'px');
				$(this).find('video').css('max-width', $(window).width()-20+'px');
			});
		});
	}
}

var tt = TweenLite.to;
var tf = TweenLite.from;
var ts = TweenLite.set;
var td = TweenLite.delayedCall;

function thumbClick(){
	$(this).magnificPopup({type:'image'});
}

function thumbMouseOver(){
	tt(this,.5,{opacity:.5});
}

function thumbMouseOut(){
	tt(this,.5,{opacity:1});
}

function containerExitFrame(){
	console.log("poop out");
	tt(gallery,1,{opacity:0});
	tt(gallery,0,{display:"none",delay:1});
}

function containerEnterFrame(){
	console.log("poop in");
	tt(gallery,0,{display:"inline",delay:1});
	document.getElementById("gallery").style.left=960;
	tt(gallery,1,{left:0,opacity:1});
}

