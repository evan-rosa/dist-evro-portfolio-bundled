//Foundation JS
$(document).foundation();

var popup = new Foundation.Reveal($('#exampleModal1'));
popup.open();

//Title Bar Sticky
$('.sticky').on('sticky.zf.stuckto:top', function () {
    $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function () {
    $(this).removeClass('shrink');
});
//Logo color swap, menu icon color swap, and  on scroll in top nav
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('object#logo1').css({'opacity': 0});
        $('object#logo2').css({'opacity': 1});
        $('a#search-head').css({'color': '#061A40', 'border-color':'#061A40'});
        $('button.menu-icon').removeClass('menu-icon').addClass('menu-icon-scroll');
    } else {
        $('object#logo1').css({'opacity': 1});
        $('object#logo2').css({'opacity': 0});
        $('a#search-head').css({'color': '#fefefe', 'border-color':'#fefefe'});
        $('button.menu-icon-scroll').removeClass('menu-icon-scroll').addClass('menu-icon');
        //fade-out nav
    }
    if ($(this).scrollTop() > 1 && $(this).width() > 767) {
        $('.a-c').removeClass('nav a').addClass('a-color');
    } else {
        $('.a-color').removeClass('a-color').addClass('nav a');
    }
    if ($(this).scrollTop() > 1000) {
        $('#intro-arrow').css({'opacity': 0});
    } else {
        $('#intro-arrow').css({'opacity': 1});
    }
});

//line over header nav links
$('.a-c').click(function () {
    $('.nav li a').addClass('hvr-overline-from-center');
});
//Mobile menu anchor click with slideTo section
$(document).ready(function () {
    /* prepend menu icon */
    $('.menu-icon').prepend('');
        /* toggle nav */
        $(".a-c").on("click", function () {
            if ($(window).width() < 767) {
                $("#top-menu").slideToggle();
                $(this).toggleClass("active");
            }
        });
    $('#mobile-menu li a').on("click", function(){
        $('#mobile-menu').foundation('close');
    });
});

////ScrollMagic Pin/Parallax
$(function () {
    //init Controller
    var controller = new ScrollMagic.Controller();

    //pin intro
    var pin = new ScrollMagic.Scene({
        triggerElement: 'OnEnter',
        triggerHook: 0,
        duration: '100%'
    })
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);

    //loop parallax parent
    $('.parallaxParent').each(function () {
        //build parallax scene
        var Scene1 = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '200%',
            triggerHook: 1
        })
        .setTween(TweenMax.from('.office-back, .contact-back', 1, {y: '-25%', ease: Power0.easeNone}))
        .addTo(controller);
    });

    $('#services').each(function () {
        //build parallax scene
        var Scene1 = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '200%',
            triggerHook: 1
        })
        .setTween(TweenMax.from('.what-int', 1, {y: '-40%', ease: Power0.easeNone}))
        .addTo(controller);
    });

    //Intro down fade-in
    var name = $('#name'),
        itype = $('#text-fade'),
        list = $('#s-list'),
        btnIntro = $('#intro-btn'),
        arrow = $('#intro-arrow');
    var tlIntro = new TimelineMax();
    //timeline
    tlIntro.from(name, 0.6, {delay: 0.1, y: -25, autoAlpha: 0, ease: Power0.easeInOut})
        .from(itype, 0.45, { y: -25, autoAlpha: 0, ease: Power0.easeInOut})
        .from(list, 0.35, { y: -25, autoAlpha: 0, ease: Power0.easeInOut})
        .from(btnIntro, 0.15, {y: -20, autoAlpha: 0, ease: Power0.easeInOut})
        .from(arrow, 0.5, {y: -25, autoAlpha: 0, ease: Power0.easeInOut});

    var ifade = new ScrollMagic.Scene({
        triggerElement: 'OnEnter',
        triggerHook: 1,
        duration: '100%'
    })
    .addTo(controller);

});
$(document).ready(function() {
    //Body text fade-in
    $(function () {
        $('[data-scrollmagic]').each(function (index, elem) {
            // Init ScrollMagic Controller
            var controller = new ScrollMagic.Controller();
            // Create Animations
            var title = $(elem).find('h1'),
                title2 = $(elem).find('h2'),
                titleS = $(elem).find('h2 strong'),
                text1 = $(elem).find('.block-animate'),
                btn = $(elem).find('section a'),
                aniUxi = $(elem).find('.desk-animate-uxi'),
                aniUxd = $(elem).find('.desk-animate-uxd');
            var tlFade = new TimelineMax({pause: true});
            tlFade.add("start") // add timeline label
                //fade-in
                .fromTo(title, 0.4, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
                .fromTo(title2, 0.4, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
                .fromTo(titleS, 0.4, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
                .fromTo(text1, 0.4, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
                .fromTo(btn, 0.4, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start");
            var sceneTop = new ScrollMagic.Scene({
                triggerElement: this,
                offset: 0,
                triggerHook: 0.7,
                duration: '90%'
            })
            .setTween(tlFade)
            .addTo(controller);
            //Job Description slide
            var tlT = new TimelineMax({pause: false});
            tlT.fromTo(aniUxi, 1, {opacity: 0 }, {opacity: 1, transform: "translateX(0)" })
               .fromTo(aniUxd, 1, {opacity: 0 }, {opacity: 1, transform: "translateX(0)" });
            // Create the Scene and trigger when visible
            var sceneBottom = new ScrollMagic.Scene({
                triggerElement: this,
                offset: 0,
                triggerHook: 0.4
            })
            .setTween(tlT)
            .addTo(controller);
        });
    });
    //UX, FE, Metrics Desktop animation
    $(function() {
        $('section .what-align').each(function (index, elem) {
            // Init ScrollMagic Controller
            var controller = new ScrollMagic.Controller();
            // Create Animations
            var aniFei = $(elem).find('.desk-animate-fei'),
                aniFed = $(elem).find('.desk-animate-fed');
            //Job Description slide
            var tlSlide = new TimelineMax({pause: false});
            tlSlide.fromTo(aniFei, 1, {opacity: 0 }, {opacity: 1, transform: "translateX(0)" })
                   .fromTo(aniFed, 1, {opacity: 0 }, {opacity: 1, transform: "translateX(0)" });
            // Create the Scene and trigger when visible
            var sceneBottom = new ScrollMagic.Scene({
                triggerElement: this,
                offset: 0,
                delay: 0.5,
                triggerHook: 0.5
            }).setTween(tlSlide).addTo(controller);
        });
    });
    //Experience
    $(function () {
        //init Controller
        var controller = new ScrollMagic.Controller();

        //Intro down fade-in
        var expR = $('#my-experience');
        var tlExp = new TimelineMax();
        //timeline
        tlExp.fromTo(expR, 1, {opacity: 0 }, {opacity: 1});

        var sceneTop = new ScrollMagic.Scene({
            triggerElement: "#my-experience",
            offset: 0,
            triggerHook: 0.55,
            delay: 0.5,
            duration: '90%'
        })
        .setTween(tlExp)
        .addTo(controller);
    });
});

///****************TIMELINE JS ****************
jQuery(document).ready(function($){
    var timelines = $('.cd-horizontal-timeline'),
        eventsMinDistance = 100;

    (timelines.length > 0) && initTimeline(timelines);

    function initTimeline(timelines) {
        timelines.each(function(){
            var timeline = $(this),
                timelineComponents = {};
            //cache timeline components
            timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
            timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
            timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
            timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
            timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
            timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
            timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
            timelineComponents['eventsContent'] = timeline.children('.events-content');

            //assign a left postion to the single events along the timeline
            setDatePosition(timelineComponents, eventsMinDistance);
            //assign a width to the timeline
            var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
            //the timeline has been initialize - show it
            timeline.addClass('loaded');

            //detect click on the next arrow
            timelineComponents['timelineNavigation'].on('click', '.next', function(event){
                event.preventDefault();
                updateSlide(timelineComponents, timelineTotWidth, 'next');
            });
            //detect click on the prev arrow
            timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
                event.preventDefault();
                updateSlide(timelineComponents, timelineTotWidth, 'prev');
            });
            //detect click on the a single event - show new event content
            timelineComponents['eventsWrapper'].on('click', 'a', function(event){
                event.preventDefault();
                timelineComponents['timelineEvents'].removeClass('selected');
                $(this).addClass('selected');
                updateOlderEvents($(this));
                updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
                updateVisibleContent($(this), timelineComponents['eventsContent']);
            });

            //on swipe, show next/prev event content
            timelineComponents['eventsContent'].on('swipeleft', function(){
                var mq = checkMQ();
                ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
            });
            timelineComponents['eventsContent'].on('swiperight', function(){
                var mq = checkMQ();
                ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
            });

            //keyboard navigation
            $(document).keyup(function(event){
                if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
                    showNewContent(timelineComponents, timelineTotWidth, 'prev');
                } else if( event.which=='39' && elementInViewport(timeline.get(0))) {
                    showNewContent(timelineComponents, timelineTotWidth, 'next');
                }
            });
        });
    }

    function updateSlide(timelineComponents, timelineTotWidth, string) {
        //retrieve translateX value of timelineComponents['eventsWrapper']
        var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
            wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
        //translate the timeline to the left('next')/right('prev')
        (string == 'next')? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
        : translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
    }

    function showNewContent(timelineComponents, timelineTotWidth, string) {
        //go from one event to the next/previous one
        var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
            newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();

        if ( newContent.length > 0 ) { //if there's a next/prev event - show it
            var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
                newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');

            updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
            updateVisibleContent(newEvent, timelineComponents['eventsContent']);
            newEvent.addClass('selected');
            selectedDate.removeClass('selected');
            updateOlderEvents(newEvent);
            updateTimelinePosition(string, newEvent, timelineComponents);
        }
    }

    function updateTimelinePosition(string, event, timelineComponents) {
        //translate timeline to the left/right according to the position of the selected event
        var eventStyle = window.getComputedStyle(event.get(0), null),
            eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
            timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
            timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
        var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

        if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
            translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
        }
    }

    function translateTimeline(timelineComponents, value, totWidth) {
        var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
        value = (value > 0) ? 0 : value; //only negative translate value
        value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
        setTransformValue(eventsWrapper, 'translateX', value+'px');
        //update navigation arrows visibility
        (value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
        (value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
    }

    function updateFilling(selectedEvent, filling, totWidth) {
        //change .filling-line length according to the selected event
        var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
            eventLeft = eventStyle.getPropertyValue("left"),
            eventWidth = eventStyle.getPropertyValue("width");
        eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
        var scaleValue = eventLeft/totWidth;
        setTransformValue(filling.get(0), 'scaleX', scaleValue);
    }

    function setDatePosition(timelineComponents, min) {
        for (i = 0; i < timelineComponents['timelineDates'].length; i++) {
            var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
                distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
            timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
        }
    }

    function setTimelineWidth(timelineComponents, width) {
        var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
            timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
            timeSpanNorm = Math.round(timeSpanNorm) + 4,
            totalWidth = timeSpanNorm*width;
        timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
        updateFilling(timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents['fillingLine'], totalWidth);
        updateTimelinePosition('next', timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents);

        return totalWidth;
    }

    function updateVisibleContent(event, eventsContent) {
        var eventDate = event.data('date'),
            visibleContent = eventsContent.find('.selected'),
            selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
            selectedContentHeight = selectedContent.height();

        if (selectedContent.index() > visibleContent.index()) {
            var classEnetering = 'selected enter-right',
                classLeaving = 'leave-left';
        } else {
            var classEnetering = 'selected enter-left',
                classLeaving = 'leave-right';
        }

        selectedContent.attr('class', classEnetering);
        visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
            visibleContent.removeClass('leave-right leave-left');
            selectedContent.removeClass('enter-left enter-right');
        });
        eventsContent.css('height', selectedContentHeight+'px');
    }

    function updateOlderEvents(event) {
        event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
    }

    function getTranslateValue(timeline) {
        var timelineStyle = window.getComputedStyle(timeline.get(0), null),
            timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
            timelineStyle.getPropertyValue("-moz-transform") ||
            timelineStyle.getPropertyValue("-ms-transform") ||
            timelineStyle.getPropertyValue("-o-transform") ||
            timelineStyle.getPropertyValue("transform");

        if( timelineTranslate.indexOf('(') >=0 ) {
            var timelineTranslate = timelineTranslate.split('(')[1];
            timelineTranslate = timelineTranslate.split(')')[0];
            timelineTranslate = timelineTranslate.split(',');
            var translateValue = timelineTranslate[4];
        } else {
            var translateValue = 0;
        }

        return Number(translateValue);
    }

    function setTransformValue(element, property, value) {
        element.style["-webkit-transform"] = property+"("+value+")";
        element.style["-moz-transform"] = property+"("+value+")";
        element.style["-ms-transform"] = property+"("+value+")";
        element.style["-o-transform"] = property+"("+value+")";
        element.style["transform"] = property+"("+value+")";
    }

    //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
    function parseDate(events) {
        var dateArrays = [];
        events.each(function(){
            var singleDate = $(this),
                dateComp = singleDate.data('date').split('T');
            if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
                var dayComp = dateComp[0].split('/'),
                    timeComp = dateComp[1].split(':');
            } else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
                var dayComp = ["2000", "0", "0"],
                    timeComp = dateComp[0].split(':');
            } else { //only DD/MM/YEAR
                var dayComp = dateComp[0].split('/'),
                    timeComp = ["0", "0"];
            }
            var    newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
            dateArrays.push(newDate);
        });
        return dateArrays;
    }

    function daydiff(first, second) {
        return Math.round((second-first));
    }

    function minLapse(dates) {
        //determine the minimum distance among events
        var dateDistances = [];
        for (i = 1; i < dates.length; i++) {
            var distance = daydiff(dates[i-1], dates[i]);
            dateDistances.push(distance);
        }
        return Math.min.apply(null, dateDistances);
    }

    /*
        How to tell if a DOM element is visible in the current viewport?
        http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    */
    function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }

    function checkMQ() {
        //check if mobile or desktop device
        return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
    }
});
///END TIMELINE JS
//Contact
$('.c-form').hide();

//contact text fade-in-up
$(function() {
    //init Controller
    var controller = new ScrollMagic.Controller();
    //Intro down fade-in
    var con = $('.contact-text');
    var tlCon = new TimelineMax();
    //timeline
    tlCon.fromTo(con, 1, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut })

    var sceneTop = new ScrollMagic.Scene({
        triggerElement: "#contact",
        offset: 0,
        triggerHook: .65,
        delay: .5,
        duration: '90%'
    })
    .setTween(tlCon)
    .addTo(controller);
});
//contact arrow click loop
$(document).ready(function(){
    $( ".contact-click" ).each(function() {
        $(this).data('clicked', true);
        $(this).click(function(){
            if ($(this).data('clicked')){
                $('object#d').css({'opacity': 0});
                $('object#u').css({'opacity': 1});
                $(this).data('clicked', false);
            }
            else {
                $('object#u').css({'opacity': 0});
                $('object#d').css({'opacity': 1});
                $(this).data('clicked', true);
            }
        })
    })
});
$('#mail-contact')
// field element is invalid
    .on("i3nvalid.zf.abide", function(ev,elem) {
    console.log("Field id "+ev.target.id+" is invalid");
})
// field element is valid
    .on("valid.zf.abide", function(ev,elem) {
    console.log("Field name "+elem.attr('name')+" is valid");
})
// form validation failed
    .on("forminvalid.zf.abide", function(ev,frm) {
    console.log("Form id "+ev.target.id+" is invalid");
})
// form validation passed, form will submit if submit event not returned false
    .on("formvalid.zf.abide", function(ev,frm) {
    console.log("Form id "+frm.attr('id')+" is valid");
    // ajax post form
    var $form = $(this);
    $('#cf-thank').foundation('reveal', 'open');
    $('.c-form').slideUp();
    $.post($form.attr("action"), $form.serialize()).then(function() {
        $('#mail-contact input').val("");
        $('#mail-contact textarea').val("");
        $('object#u').css({'opacity': 0});
        $('object#d').css({'opacity': 1});
    });
})
// to prevent form from submitting upon successful validation
    .on("submit", function(ev) {
    ev.preventDefault();
    console.log("Submit for form id "+ev.target.id+" intercepted");
    //$('object#d').css({'opacity': 1});
    //$('object#u').css({'opacity': 0});
    //$('.c-form').slideUp();
});
// You can bind field or form event selectively
$("#foo").on("invalid.zf.abide", function(ev,el) {
    alert("Input field foo is invalid");
});







///TYPER
var Typer = function(element) {
    console.log("constructor called");
    this.element = element;
    var delim = element.dataset.delim || ","; // default to comma
    var words = element.dataset.words || "override these,sample typing";
    this.words = words.split(delim).filter(function(v){return v;}); // non empty words
    this.delay = element.dataset.delay || 200;
    this.deleteDelay = element.dataset.deleteDelay || 800;

    this.progress = { word:0, char:0, building:true, atWordEnd:false };
    this.typing = true;

    var colors = element.dataset.colors || "#$black";
    this.colors = colors.split(",");
    this.element.style.color = this.colors[0];
    this.colorIndex = 0;

    this.doTyping();
};

Typer.prototype.start = function() {
    if (!this.typing) {
        this.typing = true;
        this.doTyping();
    }
};
Typer.prototype.stop = function() {
    this.typing = false;
};
Typer.prototype.doTyping = function() {
    var e = this.element;
    var p = this.progress;
    var w = p.word;
    var c = p.char;
    var currentChar = this.words[w][c];
    p.atWordEnd = false;
    if (this.cursor) {
        this.cursor.element.style.opacity = "1";
        this.cursor.on = true;
        clearInterval(this.cursor.interval);
        var itself = this.cursor;
        this.cursor.interval = setInterval(function() {itself.updateBlinkState();}, 400);
    }
    if (p.building) {
        e.innerHTML += currentChar;
        p.char += 1;
        if (p.char == this.words[w].length) {
            p.building = false;
            p.atWordEnd = true;
        }
    } else {
        e.innerHTML = e.innerHTML.slice(0, -1);
        if (!this.element.innerHTML) {
            p.building = true;
            p.word = (p.word + 1) % this.words.length;
            p.char = 0;
            this.colorIndex = (this.colorIndex + 1) % this.colors.length;
            this.element.style.color = this.colors[this.colorIndex];
        }
    }
    var myself = this;
    setTimeout(function() {
        if (myself.typing) { myself.doTyping(); };
    }, p.atWordEnd ? this.deleteDelay : this.delay);
};

var typers = {};
var elements = document.getElementsByClassName("typer");
for (var i = 0, e; e = elements[i++];) {
    typers[e.id] = new Typer(e);
}
var elements = document.getElementsByClassName("typer-stop");
for (var i = 0, e; e = elements[i++];) {
    var owner = typers[e.dataset.owner];
    e.onclick = function(){owner.stop();};
}
var elements = document.getElementsByClassName("typer-start");
for (var i = 0, e; e = elements[i++];) {
    var owner = typers[e.dataset.owner];
    e.onclick = function(){owner.start();};
}


var Cursor = function(element) {
    this.element = element;
    this.cursorDisplay = element.dataset.cursorDisplay || "_";
    this.owner = typers[element.dataset.owner] || "";
    element.innerHTML = this.cursorDisplay;
    this.on = true;
    element.style.transition = "all 0.1s";
    var myself = this;
    this.interval = setInterval(function() {
        myself.updateBlinkState();
    }, 400);
}
Cursor.prototype.updateBlinkState = function() {
    if (this.on) {
        this.element.style.opacity = "0";
        this.on = false;
    } else {
        this.element.style.opacity = "1";
        this.on = true;
    }
}

var elements2 = document.getElementsByClassName("cursor");
for (var i = 0, e; e = elements2[i++];) {
    var t = new Cursor(e);
    t.owner.cursor = t;
    console.log(t.owner.cursor);
}
///END Typer
//MAP
var i,c,y,v,s,n;var im=[];v=document.getElementsByClassName("codegena_iframe");for(n=0;n<v.length;n++){im[n]=v[n].hasAttribute("data-img")?v[n].getAttribute("data-img"):"../assets/img/pics/map.png";}
if(v.length>0){s=document.createElement("style");s.type="text/css";s.innerHTML='.codegena_iframe{overflow:hidden;position:relative;cursor:hand;cursor:pointer;}'+'.codegena_iframe .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto;-webkit-filter: brightness(1.0);}'+'.codegena_iframe .thumb:hover{transform: scale(1.3);transition: all 1s cubic-bezier(0.71, 0.15, 0.37, 0.82);}'+'.responsive_iframe{position:relative;padding-bottom:65.25%;padding-top:30px;height:0;-webkit-overflow-scrolling:touch;}.responsive_iframe iframe{position:absolute;top:0;left:0;width:100%;height:100%;}';document.body.appendChild(s);}
for(n=0;n<v.length;n++){y=v[n];if(y.getAttribute("data-responsive")=="true"){var sty="height:"+ y.style.height+";width:100%;max-width:"+ y.style.width+";";y.setAttribute("style",sty);}
                        i=document.createElement("img");i.setAttribute("src",im[n]);i.setAttribute("class","thumb");y.appendChild(i);y.onclick=function(){var t=document.createElement("iframe");t.setAttribute("src",this.getAttribute("data-src"));t.setAttribute("style",this.getAttribute("data-css"));t.width=this.style.width;t.height=this.style.height;if(this.hasAttribute("data-Id")==true&&this.getAttribute("data-Id")!=""){t.setAttribute("id",this.getAttribute("data-Id"));}
if(this.hasAttribute("data-Class")==true&&this.getAttribute("data-Class")!=""){t.setAttribute("class",this.getAttribute("data-Class"));}
if(this.hasAttribute("data-name")==true&&this.getAttribute("data-name")!=""){t.setAttribute("name",this.getAttribute("data-name"));}
if(this.hasAttribute("data-srcdoc")==true&&this.getAttribute("data-srcdoc")!=""){t.setAttribute("srcdoc",this.getAttribute("data-srcdoc"));}
if(this.hasAttribute("data-sandbox")==true){t.setAttribute("sandbox",this.getAttribute("data-sandbox"));}
var div=document.createElement("div");div.setAttribute("class","codegena_iframe");div.appendChild(t);if(this.getAttribute("data-responsive")=="true"){div.setAttribute("class","codegena_iframe responsive_iframe");}
this.parentNode.replaceChild(div,this);}
                        function load_iframe(x){v[x- 1].click();}};
//END Map


//Search
(function() {
    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');

        if (results.length) { // Are there any results?
            var appendString = '';

            for (var i = 0; i < results.length; i++) {  // Iterate over the results
                var item = store[results[i].ref];
                appendString += '<li><div class="search-space">';
                appendString += '<a class="clearfix" href="' + item.url + '"><h3><strong>' + item.title + '</strong></h3></a>';
                appendString += '<div class="clearfix"><p class="lead">' + item.category + ' - ' + item.author + '</p></div>';
                appendString += '<p>' + item.content.substring(0, 150) + '...</p>';
                appendString += '<a class="search-url" href="' + item.url + '">' + item.url + '</a>';
                appendString += '<div class="addthis_inline_share_toolbox addthis-pad"></div></div></li>';


            }

            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = '<li>No results found</li>';
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }

    var searchTerm = getQueryVariable('q');

    if (searchTerm) {
        document.getElementById('search-box').setAttribute("value", searchTerm);

        // Initalize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function () {
            this.field('id');
            this.field('title', { boost: 10 });
            this.field('author');
            this.field('category');
            this.field('content');
        });

        for (var key in window.store) { // Add the data to lunr
            idx.add({
                'id': key,
                'title': window.store[key].title,
                'author': window.store[key].author,
                'category': window.store[key].category,
                'content': window.store[key].content
            });

            var results = idx.search(searchTerm); // Get lunr to perform a search
            displaySearchResults(results, window.store); // We'll write this in the next section
        }
    }
})();
//End Search
