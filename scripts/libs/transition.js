var PageTransitions = (function () {

    var startPageIndex = 0,
        animEndEventNames = {
            'WebkitAnimation'   : 'webkitAnimationEnd',
            'OAnimation'        : 'oAnimationEnd',
            'msAnimation'       : 'MSAnimationEnd',
            'animation'         : 'animationend'
        },

        // animation end event name
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],

        // support css animations
        support = Modernizr.cssanimations;

    function init() {

        // Get all the .pt-page div.
        $('.pt-page').each( function() {
            var $page = $(this);
            $page.data('originalClassList', $page.attr('class'));
        });

        // Get all the .pt-wrapper div which is the parent for all pt-div
        $('.pt-wrapper').each( function() {
            var $wrapperDiv = $(this);
            $wrapperDiv.data('current', 0);
            $wrapperDiv.data('isAnimating', false);
            $wrapperDiv.children('.pt-page').eq(startPageIndex).addClass('pt-page-current');
        });

        // Adding click event to .pt-trigger
        $('.pt-trigger').click(function() {
            
            $('body').css('overflow', 'hidden');

            $pageTrigger = $(this);
            Animate($pageTrigger);
        });
    }

    // All pt-trigger click event calls this function
    // This function gets the animation id, goto page that we define in `data-animation` and 'data-goto' repectively.
    function Animate($pageTrigger) {

        // Checking for 'data-animation' and 'data-goto' attributes.
        if (!($pageTrigger.attr('data-animation'))) {
            alert("Transition.js : Invalid attribute configuration. \n\n 'data-animation' attribute not found");
            return false;
        }
        else if (!($pageTrigger.attr('data-goto'))) {
            
            console.log($pageTrigger.attr('data-goto'));

            alert("Transition.js : Invalid attribute configuration. \n\n 'data-goto' attribute not found");
            return false;
        }

        var animation = $pageTrigger.data('animation').toString(),
            gotoPage, inClass, outClass, selectedAnimNumber;

         // Check if the delimiter '-' is present then create an animation array list.
        if(animation.indexOf('-') != -1) {
            var randomAnimList = animation.split('-');
            selectedAnimNumber = parseInt(randomAnimList[(Math.floor(Math.random() * randomAnimList.length))]);
        }
        else {
            selectedAnimNumber = parseInt(animation);
        }

        // Checking if the animation number is out of bound, max allowed value is 1 to 67.
        if (selectedAnimNumber > 69) {
            alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67");
            return false;
        }

        switch(selectedAnimNumber) {
            case 1:
                inClass = 'pt-page-moveFromRight';
                outClass = 'pt-page-moveToLeft';
                break;
            case 2:
                inClass = 'pt-page-moveFromLeft';
                outClass = 'pt-page-moveToRight';
                break;
            case 3:
                inClass = 'pt-page-moveFromBottom';
                outClass = 'pt-page-moveToTop';
                break;
            case 4:
                inClass = 'pt-page-moveFromTop';
                outClass = 'pt-page-moveToBottom';
                break;
            case 5:
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                outClass = 'pt-page-fade';
                break;
            case 6:
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                outClass = 'pt-page-fade';
                break;
            case 7:
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                outClass = 'pt-page-fade';
                break;
            case 8:
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                outClass = 'pt-page-fade';
                break;
            case 9:
                inClass = 'pt-page-moveFromRightFade';
                outClass = 'pt-page-moveToLeftFade';
                break;
            case 10:
                inClass = 'pt-page-moveFromLeftFade';
                outClass = 'pt-page-moveToRightFade';
                break;
            case 11:
                inClass = 'pt-page-moveFromBottomFade';
                outClass = 'pt-page-moveToTopFade';
                break;
            case 12:
                inClass = 'pt-page-moveFromTopFade';
                outClass = 'pt-page-moveToBottomFade';
                break;
            case 13:
                inClass = 'pt-page-moveFromRight';
                outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
                break;
            case 14:
                inClass = 'pt-page-moveFromLeft';
                outClass = 'pt-page-moveToRightEasing pt-page-ontop';
                break;
            case 15:
                inClass = 'pt-page-moveFromBottom';
                outClass = 'pt-page-moveToTopEasing pt-page-ontop';
                break;
            case 16:
                inClass = 'pt-page-moveFromTop';
                outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
                break;
            case 17:
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                outClass = 'pt-page-scaleDown';
                break;
            case 18:
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                outClass = 'pt-page-scaleDown';
                break;
            case 19:
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                outClass = 'pt-page-scaleDown';
                break;
            case 20:
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                outClass = 'pt-page-scaleDown';
                break;
            case 21:
                inClass = 'pt-page-scaleUpDown pt-page-delay300';
                outClass = 'pt-page-scaleDown';
                break;
            case 22:
                inClass = 'pt-page-scaleUp pt-page-delay300';
                outClass = 'pt-page-scaleDownUp';
                break;
            case 23:
                inClass = 'pt-page-scaleUp';
                outClass = 'pt-page-moveToLeft pt-page-ontop';
                break;
            case 24:
                inClass = 'pt-page-scaleUp';
                outClass = 'pt-page-moveToRight pt-page-ontop';
                break;
            case 25:
                inClass = 'pt-page-scaleUp';
                outClass = 'pt-page-moveToTop pt-page-ontop';
                break;
            case 26:
                inClass = 'pt-page-scaleUp';
                outClass = 'pt-page-moveToBottom pt-page-ontop';
                break;
            case 27:
                inClass = 'pt-page-scaleUpCenter pt-page-delay400';
                outClass = 'pt-page-scaleDownCenter';
                break;
            case 28:
                inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
                outClass = 'pt-page-rotateRightSideFirst';
                break;
            case 29:
                inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
                outClass = 'pt-page-rotateLeftSideFirst';
                break;
            case 30:
                inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
                outClass = 'pt-page-rotateTopSideFirst';
                break;
            case 31:
                inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
                outClass = 'pt-page-rotateBottomSideFirst';
                break;
            case 32:
                inClass = 'pt-page-flipInLeft pt-page-delay500';
                outClass = 'pt-page-flipOutRight';
                break;
            case 33:
                inClass = 'pt-page-flipInRight pt-page-delay500';
                outClass = 'pt-page-flipOutLeft';
                break;
            case 34:
                inClass = 'pt-page-flipInBottom pt-page-delay500';
                outClass = 'pt-page-flipOutTop';
                break;
            case 35:
                inClass = 'pt-page-flipInTop pt-page-delay500';
                outClass = 'pt-page-flipOutBottom';
                break;
            case 36:
                inClass = 'pt-page-scaleUp';
                outClass = 'pt-page-rotateFall pt-page-ontop';
                break;
            case 37:
                inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
                outClass = 'pt-page-rotateOutNewspaper';
                break;
            case 38:
                inClass = 'pt-page-moveFromRight';
                outClass = 'pt-page-rotatePushLeft';
                break;
            case 39:
                inClass = 'pt-page-moveFromLeft';
                outClass = 'pt-page-rotatePushRight';
                break;
            case 40:
                inClass = 'pt-page-moveFromBottom';
                outClass = 'pt-page-rotatePushTop';
                break;
            case 41:
                inClass = 'pt-page-moveFromTop';
                outClass = 'pt-page-rotatePushBottom';
                break;
            case 42:
                inClass = 'pt-page-rotatePullRight pt-page-delay180';
                outClass = 'pt-page-rotatePushLeft';
                break;
            case 43:
                inClass = 'pt-page-rotatePullLeft pt-page-delay180';
                outClass = 'pt-page-rotatePushRight';
                break;
            case 44:
                inClass = 'pt-page-rotatePullBottom pt-page-delay180';
                outClass = 'pt-page-rotatePushTop';
                break;
            case 45:
                inClass = 'pt-page-rotatePullTop pt-page-delay180';
                outClass = 'pt-page-rotatePushBottom';
                break;
            case 46:
                inClass = 'pt-page-moveFromRightFade';
                outClass = 'pt-page-rotateFoldLeft';
                break;
            case 47:
                inClass = 'pt-page-moveFromLeftFade';
                outClass = 'pt-page-rotateFoldRight';
                break;
            case 48:
                inClass = 'pt-page-moveFromBottomFade';
                outClass = 'pt-page-rotateFoldTop';
                break;
            case 49:
                inClass = 'pt-page-moveFromTopFade';
                outClass = 'pt-page-rotateFoldBottom';
                break;
            case 50:
                inClass = 'pt-page-rotateUnfoldLeft';
                outClass = 'pt-page-moveToRightFade';
                break;
            case 51:
                inClass = 'pt-page-rotateUnfoldRight';
                outClass = 'pt-page-moveToLeftFade';
                break;
            case 52:
                inClass = 'pt-page-rotateUnfoldTop';
                outClass = 'pt-page-moveToBottomFade';
                break;
            case 53:
                inClass = 'pt-page-rotateUnfoldBottom';
                outClass = 'pt-page-moveToTopFade';
                break;
            case 54:
                inClass = 'pt-page-rotateRoomLeftIn';
                outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
                break;
            case 55:
                inClass = 'pt-page-rotateRoomRightIn';
                outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
                break;
            case 56:
                inClass = 'pt-page-rotateRoomTopIn';
                outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
                break;
            case 57:
                inClass = 'pt-page-rotateRoomBottomIn';
                outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
                break;
            case 58:
                inClass = 'pt-page-rotateCubeLeftIn';
                outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
                break;
            case 59:
                inClass = 'pt-page-rotateCubeRightIn';
                outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
                break;
            case 60:
                inClass = 'pt-page-rotateCubeTopIn';
                outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
                break;
            case 61:
                inClass = 'pt-page-rotateCubeBottomIn';
                outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
                break;
            case 62:
                inClass = 'pt-page-rotateCarouselLeftIn';
                outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
                break;
            case 63:
                inClass = 'pt-page-rotateCarouselRightIn';
                outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
                break;
            case 64:
                inClass = 'pt-page-rotateCarouselTopIn';
                outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
                break;
            case 65:
                inClass = 'pt-page-rotateCarouselBottomIn';
                outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
                break;
            case 66:
                inClass = 'pt-page-rotateSidesIn pt-page-delay200';
                outClass = 'pt-page-rotateSidesOut';
                break;
            case 67:
                inClass = 'pt-page-rotateSlideIn';
                outClass = 'pt-page-rotateSlideOut';
                break;
            case 68:
                inClass = 'pt-page-FadeIn';
                outClass = 'pt-page-moveToLeft';
                break;
            case 69:
                inClass = 'pt-page-FadeIn';
                outClass = 'pt-page-FadeOut';
                break;
        }

        // This will get the pt-trigger elements parent wrapper div
        var $pageWrapper = $pageTrigger.closest('.pt-wrapper');
        var currentPageIndex = $pageWrapper.data('current'), tempPageIndex,
            $pages = $pageWrapper.children('div.pt-page'),
            pagesCount = $pages.length,
            endCurrentPage = false,
            endNextPage = false;

        gotoPage = parseInt($pageTrigger.data('goto'));

        // check if 'data-goto' value is greater than total pages inside 'pt-wrapper'
        if (!(pagesCount < gotoPage)) {
            
            tempPageIndex = currentPageIndex;

            if($pageWrapper.data('isAnimating')) {
                return false;
            }

            // Setting the isAnimating property to true.
            $pageWrapper.data('isAnimating', true);

            // Current page to be removed.
            var $currentPage = $pages.eq(currentPageIndex);

            // Checking gotoPage value and decide what to do
            // -1 Go to next page
            // -2 Go to previous page
            // 0+ Go to custom page number.
            // NEXT PAGE
            if (gotoPage == -1) {

                // Incrementing page counter to diplay next page
                if(currentPageIndex < pagesCount - 1) {
                    ++currentPageIndex;
                }
                else {
                    currentPageIndex = 0;
                }
            }
            // PREVOUS PAGE
            else if (gotoPage == -2) {
                if (currentPageIndex == 0){
                    currentPageIndex = pagesCount - 1;

                }
                else if(currentPageIndex <= pagesCount - 1 ) {
                    --currentPageIndex;
                }
                else {
                    currentPageIndex = 0;
                }

            }
            // GOTO PAGE
            else {
                currentPageIndex = gotoPage - 1 ;
            }

            // Check if the current page is same as the next page then do not do the animation
            // else reset the 'isAnimatiing' flag
            if (tempPageIndex != currentPageIndex) {
                $pageWrapper.data('current', currentPageIndex);

                // Next page to be animated.
                var $nextPage = $pages.eq(currentPageIndex).addClass('pt-page-current');

                $currentPage.addClass(outClass).on(animEndEventName, function() {
                    $currentPage.off(animEndEventName);
                    endCurrentPage = true;
                    if(endNextPage) {
                        onEndAnimation($pageWrapper, $nextPage, $currentPage);
                    }
                });

                $nextPage.addClass(inClass).on(animEndEventName, function() {
                    $nextPage.off(animEndEventName);
                    endNextPage = true;
                    if(endCurrentPage) {
                        onEndAnimation($pageWrapper, $nextPage, $currentPage);
                    }
                });

            }
            else {
                $pageWrapper.data('isAnimating', false);
            }

        }
        else {
            alert("Transition.js : Invalid 'data-goto' attribute configuration.");
        }

        // Check if the animation is supported by browser and reset the pages.
        if(!support) {
            onEndAnimation($currentPage, $nextPage);
        }

    }

    function onEndAnimation($pageWrapper, $nextPage, $currentPage) {
        resetPage($nextPage, $currentPage);
        $pageWrapper.data('isAnimating', false);
    }

    function resetPage($nextPage, $currentPage) {
        $currentPage.attr('class', $currentPage.data('originalClassList'));
        $nextPage.attr('class', $nextPage.data('originalClassList') + ' pt-page-current');

        $('body').css('overflow', 'visible');
    }

    return {
        init : init,
    };

})();

$(document).ready(function() {
    // initializing page transition.
    PageTransitions.init();
});