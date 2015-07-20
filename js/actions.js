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

    for(var i = 0; i<thumbImg.length; i++){
        thumbImg[i].addEventListener("click", thumbClick, false);
        thumbImg[i].addEventListener("mouseover", thumbMouseOver, false);
        thumbImg[i].addEventListener("mouseout", thumbMouseOut, false);
    }
}

var thumbImg = document.getElementsByClassName("thumbImg");

var tt = TweenLite.to;
var tf = TweenLite.from;
var ts = TweenLite.set;
var td = TweenLite.delayedCall;

function thumbClick(){
    console.log("thumb clicked");
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

