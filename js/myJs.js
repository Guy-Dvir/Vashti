-$(document).ready(function () {

    $('.menuTitle').click(function () {
        $('.sideMenu').toggleClass('collapsedR');
    });

    $('.sideCloseBtn').click(function () {
        $('.sideMenu').toggleClass('collapsedR');


        /*SIDEMENU HOVER*/
        elHover($('.sideLinksWrap a'));
        elHover($('.categories a'));
    });

    function elHover(el) {
        el.hover(function () {
            $(this).parent().children('img').toggleClass('hideImg');
        }, function () {
            $(this).parent().children('img').toggleClass('hideImg');
        });
    };

    /*IMAGE HOVER*/
    imgHover($('.video a.artImg'), 'gif');
    imgHover($('.artCollection a.artImg'), 'jpg');

    function imgHover(el, fin) {
        var $imgSrcA;
        var $imgSrcB;

        el.hover(function () {
            $imgSrcA = $(this).css('background-image');
            $imgSrcB = $imgSrcA.replace('A', 'B');
            $imgSrcB = $imgSrcB.replace('jpg', fin);

            $(this).css('background-image', $imgSrcB);

        }, function () {
            $(this).css('background-image', $imgSrcA);
        });
    };

    /******PRIVATE AREA SUBMENU*****/
    var $prvtP = $('.navLinks .prvt'),
        $prvt = $('.navLinks .prvtArea');

    $prvtP.hover(function () {
        $prvt.slideToggle();
    }, function () {
        $prvt.slideToggle();
    });


    /**********SEARCHBOX**********/

    var $searchBoxP = $('.navLinks > li:eq(2)'),
        $searchBox = $('.navLinks .searchBox');

    $searchBoxP.hover(function () {
        $searchBox.slideToggle();
    }, function () {
        $searchBox.slideToggle();
    });

    /**********LOGIN**********/

    /*stage progress*/

    $('#mailNext').click(function () {
        $('.logMail').toggleClass('hidden');
        $('.logName').toggleClass('hidden');
    });

    $('#nameNext').click(function () {
        $('.logName').toggleClass('hidden');
        $('.interests').toggleClass('hidden');
    });

    $('#chooseNext').click(function () {
        $('.interests').toggleClass('hidden');
        $('.followChoose').toggleClass('hidden');
    });

    $('#followNext').click(function () {
        $('.followChoose').toggleClass('hidden');
        $('.loadingStage').toggleClass('hidden');
        window.setTimeout(function () {
            window.location.href = "../home.htm";
        }, 2500);
    });



    /*choose proccess*/
    $('.flowToggle').click(function (e) {
        $(this).children('span').toggleClass('hidden');
        $(this).parent().toggleClass('selected');
    });

    $('.categories a').click(function (e) {
        $(this).parent().children('img.hideImg').toggle();
        $(this).parent().children('img:not(.hideImg)').toggleClass('slctdC')
    });






    /***********ARTICLE************/
    /*article indicator*/

    var scrollPercentRounded = 0;
    var fixedPercentRounded = -3;

    function repositionLabel() {
        if (scrollPercentRounded < 100) {
            $('.readIndicator').css({
                position: 'fixed',
                top: 'calc(' + fixedPercentRounded + '% + 200px)'
            });
        } else {
            $('.readIndicator').css({
                position: 'absolute',
                top: 'calc(98%)'
            });
        }
    }

    $(window).scroll(function (e) {
        var scrollTop = $(window).scrollTop();

        var navOffset = $('.readIndicator').offset().top;
        var navTop = (navOffset - scrollTop);
        var artHeight = $("article").height() + navTop;
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop) / (artHeight - winHeight - 60);
        scrollPercentRounded = Math.round(scrollPercent * 100);

        var docEnd = $('.commentArea').height();
        var docHeight = $(document).height();
        var fixedPercent = (scrollTop - 170) / (docHeight - winHeight + docEnd + artHeight);
        fixedPercentRounded = Math.round(fixedPercent * 100);


        if (scrollPercentRounded > 100) {
            scrollPercentRounded = 100;
        }

        $('.readIndicator>span').html(scrollPercentRounded);
        repositionLabel();
    });

    $(window).resize(function () {
        repositionLabel();
    });



    repositionLabel();



    $(document.body).bind('mouseup', function (e) {
        var selection;

        if (window.getSelection) {
            selection = window.getSelection();
        } else if (document.selection) {
            selection = document.selection.createRange();
        }

        if (e.pageY < $('article').height() &&
            e.pageY > $('article').offset().top &&
            selection.toString() !== '') {

            var a = (e.pageX - 20);
            var b = (e.pageY - 60);

            console.log(a);
            console.log(b);

            $(".toolTip").css("top", b + "px");
            $(".toolTip").css("left", a + "px");

            $(".toolTip").hide();
            $(".toolTip").fadeIn(300);



        } else {
            $(".toolTip").fadeOut(300);
        }

    });


    /*   var images = ['vashtishape1.svg', 'vashtishape2.svg', 'vashtishape3.svg', 'vashtishape4.svg', 'vashtishape5.svg', 'vashtishape6.svg', 'vashtishape7.svg'];
-    var links = ['#', '#', '#', '#', '#'];
-    var artclTitles = [
-        'שופט: ״למה לא יכולת פשוט להשאיר את הברכיים שלך ביחד?״',
-        'סיוע מדמם: האבולוציה של תרופות נגד כאבי מחזור',
-        'כיצד להגן על תמונות הסלפי-עירום שלך מפני אקסים נקמניים וטרולים אינטרנטיים?',
-        'נשים מתארות את הלידות האורגזמיות שלהן',
-        'אמנית הציפורניים שמחזיקה את העולם על קצות האצבעות'];
-
-    for (var i = 0; i < links.length ; i++) {
-        var idNum = (i + 1).toString()
-        var randArt = Math.floor(Math.random() * artclTitles.length);
-
-        $('<a id="artclLink' + idNum + '" class="artclLink" href ="' + links[i] + '"></a>').appendTo('.articleLinks');
-        $('<p id="title' + idNum + '">' + artclTitles[i] + '</p>').appendTo("#artclLink" + idNum);
-        $('<img class="fade-in" src="imgs/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo("#artclLink" + idNum);
-    }
-
-    */
    -
    -    /*RANDOM SHAPE LOCATION - HOMEPAGE*/
    -/*
 -    var maxSearchIterations = 12;
 -    var containerPos = $(".articleLinks").position();
 -    var min_x = containerPos.left - 50;
 -    var max_x = $(".articleLinks").width();
 -    var min_y = containerPos.top - 50;
 -    var max_y = $(".articleLinks").height();
 -    var filled_areas = [];
 -    var degRand = ['0', '90', '-90', '180'];
 -
 -    function calc_overlap(a1) {
 -        var overlap = 0;
 -        for (i = 0; i < filled_areas.length; i++) {
 -
 -            var a2 = filled_areas[i];
 -
 -            // no intersection cases
 -            if (a1.x + a1.width < a2.x) {
 -                continue;
 -            }
 -            if (a2.x + a2.width < a1.x) {
 -                continue;
 -            }
 -            if (a1.y + a1.height < a2.y) {
 -                continue;
 -            }
 -            if (a2.y + a2.height < a1.y) {
 -                continue;
 -            }
 -
 -            // intersection exists : calculate it !
 -            var x1 = Math.max(a1.x, a2.x);
 -            var y1 = Math.max(a1.y, a2.y);
 -            var x2 = Math.min(a1.x + a1.width, a2.x + a2.width);
 -            var y2 = Math.min(a1.y + a1.height, a2.y + a2.height);
 -
 -            var intersection = ((x1 - x2) * (y1 - y2));
 -
 -            overlap += intersection;
 -        }
 -
 -        return overlap;
 -    }
 -
 -    function randomize() {
 -
 -        filled_areas.splice(0, filled_areas.length);
 -
 -        var index = 0;
 -        $('.artclLink').each(function () {
 -            var rand_x = 0;
 -            var rand_y = 0;
 -            var i = 0;
 -            var smallest_overlap = 9007199254740992;
 -            var best_choice;
 -            var area;
 -            for (i = 0; i < maxSearchIterations; i++) {
 -                rand_x = Math.round(min_x + ((max_x - min_x) * (Math.random() % 1)));
 -                rand_y = Math.round(min_y + ((max_y - min_y) * (Math.random() % 1)));
 -                area = {
 -                    x: rand_x,
 -                    y: rand_y,
 -                    width: $(this).width(),
 -                    height: $(this).height()
 -                };
 -                var overlap = calc_overlap(area);
 -                if (overlap < smallest_overlap) {
 -                    smallest_overlap = overlap;
 -                    best_choice = area;
 -                }
 -                if (overlap === 0) {
 -                    break;
 -                }
 -            }
 -
 -            filled_areas.push(best_choice);
 -
 -            var randDeg = degRand[Math.floor(Math.random() * degRand.length)];
 -
 -            $(this).css({
 -                position: "absolute",
 -                "z-index": index++
 -            });
 -            $(this).css({
 -                'left': rand_x - rand_y + 'px',
 -                'top': rand_y + rand_y + rand_y + rand_y + 'px'
 -            });
 -            $(this).children("img").css({
 -                transform: 'rotate(' + randDeg + 'deg)'
 -            });
 -
 -            // console.log("and the winner is : " + smallest_overlap);
 -        });
 -        return false;
 -    }
 -
 -    randomize();
 -    */

    /*SHAPE LINKS ANIMATION*/

    $('.fadeU img').hover(function () {
        var c = $(this).siblings('p');
        upFade(c);
    }, function () {
        var c = $(this).siblings('p');
        moveEndVert(c);
    });

    $('.fadeD img').hover(function () {
        var c = $(this).siblings('p');
        downFade(c);
    }, function () {
        var c = $(this).siblings('p');
        moveEndVert(c);
    });

    $('.fadeL img').hover(function () {
        var c = $(this).siblings('p');
        leftFade(c);
    }, function () {
        var c = $(this).siblings('p');
        moveEndSides(c);
    });

    $('.fadeR img').hover(function () {
        var c = $(this).siblings('p');
        rightFade(c);
    }, function () {
        var c = $(this).siblings('p');
        moveEndSides(c);
    });


    function upFade(c) { c.animate({ top: -55, opacity: 1 }, 'fast'); }
    function downFade(c) { c.animate({ top: 40, opacity: 1 }, 'fast'); }
    function moveEndVert(c) { c.animate({ top: 0, opacity: 0 }, 'fast'); }
    function leftFade(c) { c.animate({ left: -345, opacity: 1 }, 'fast'); }
    function rightFade(c) { c.animate({ left: -10, opacity: 1 }, 'fast'); }
    function moveEndSides(c) { c.animate({ left: -180, opacity: 0 }, 'fast'); }


});