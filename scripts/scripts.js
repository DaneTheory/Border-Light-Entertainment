$(window).load(function() {

	// Preloader
	$('body').jpreLoader({
		closeBtnText: "",
		autoClose: true,
		showPercentage: false,
		loaderVPos: "0%",
		splashFunction: function() {
				$('#jpreSlide');
			}
	});

});

$(document).ready(function() {

	// Define Page Height
	$('#container').height($(window).height());
		$(window).resize(function() {
    	location.reload();
	});
	
	// Define URL History
	$(function(){
		var url_def = window.location.hash.split('#')[1];
			
		if(url_def){
			
			$('a[href="#' + url_def + '"]').click();
			
		}else{
			
		$('a[href="#home"]').click();
		
		}	
	});

	// Main Nav Hover Effect
	$('.pt-trigger').hover(
		function() {
			$(this).children('span').stop(true).fadeIn("fast").animate({ 'right': '15px' }, 200 );
			$(this).children('title').stop(true).animate({ 'opacity': '0' }, 300 );
		}, function() {
			$(this).children('span').stop(true).animate({ 'right': '' }, 200 ).fadeOut("slow");
			$(this).children('title').stop(true).animate({ 'opacity': '1' }, 150 );
		}	
	);
	
	// FullScreen Background
	$(".background-holder").fullscreenBackground({
		extraWidth: 0,
        extraHeight: 0
	});
	
	// Pagepilling
	$('#pagepiling').pagepiling({
        direction: 'vertical',
        verticalCentered: true,
        //sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000', '#4BEBC1', '#2EAABE'],
        anchors: ['home', 'about', 'project-treecat', 'artists', 'shop', 'news', 'contact'],
        menu: '#mainNav',
        scrollingSpeed: 300,
        easing: 'ease-in-out',
        loopBottom: false,
        loopTop: false,
        css3: true,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,

        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });

});