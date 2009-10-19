//*************************** FUNCTIONS ***************************//

// find the Object
function findObj(n, d) {
	var p,i,x;
	if (!d) d = document;
	if ((p = n.indexOf('?'))>0 && parent.frames.length) {
		d = parent.frames[n.substring(p + 1)].document;
		n = n.substring(0, p);
	}
	if (!(x=d[n]) && d.all) x = d.all[n];
	for (i=0;!x&&i<d.forms.length;i++) x = d.forms[i][n];
	for (i=0;!x&&d.layers&&i<d.layers.length;i++) x = findObj(n, d.layers[i].document);
	if (!x && d.getElementById) x = d.getElementById(n);
	return x;
}

//validate the Poll
function validatePoll()
{
	var radioChecked = false;
	var obj = findObj('poll');
	for (i = 0; i < obj.length; i++) 
	{
		if (obj[i].checked)
			radioChecked = true;
	}

	if (!radioChecked)
	{
		document.getElementById('pollwarning').style.display = 'block';
		return false;
	}
	else
	{
		document.getElementById('pollwarning').style.display = 'none';
		return true;
	}
}

//Player Open
function openPlayer(url) 
{
	window.open(url, 'player', 'location=0,status=0,scrollbars=0,width=700,height=600')
}
//Cam Open
function openCam(url) 
{
	window.open(url, 'player', 'location=0,status=0,scrollbars=0,width=700,height=535')
}

//Cam Flip
jQuery(function(){
	jQuery("#cam1_link").click(function() {
		jQuery("#cam1").css({'display' : 'block'});
		jQuery("#cam2").css({'display' : 'none'});
    });
	jQuery("#cam2_link").click(function() {
		jQuery("#cam2").css({'display' : 'block'});
		jQuery("#cam1").css({'display' : 'none'});
    });
});

//PNG Fix
jQuery(function(){
	jQuery(document).pngFix();
});
	
//Home Updates Block - Hovers/Hides
jQuery(function(){
	jQuery(".chunk_body").mouseenter(function() {
		jQuery(this).find('p.upd_pic').css({'display' : 'none'});
		jQuery(this).find('p.upd_cat span.upd_catname').css({'display' : 'none'});
		jQuery(this).find('p.upd_cat span.upd_meta').css({'display' : 'block'});
		jQuery(this).find('h2 a').css({'color' : '#fff'});
		jQuery(this).find('p').css({'color' : '#000'});
		jQuery(this).find('p a').css({'color' : '#fff'});
    });
	jQuery(".chunk_body").mouseleave(function() {
		jQuery(this).find('p.upd_pic').css({'display' : 'block'});
		jQuery(this).find('p.upd_cat span.upd_catname').css({'display' : 'block'});
		jQuery(this).find('p.upd_cat span.upd_meta').css({'display' : 'none'});
		jQuery(this).find('h2 a').css({'color' : '#000'});
		jQuery(this).find('p a').css({'color' : '#e20a16'});
    });
});

//Shows/DJs - Hovers/Hides
jQuery(function(){
	jQuery(".post_intro").mouseenter(function() {
		jQuery(this).find('p.pi_social').css({'display' : 'block'});
		jQuery(this).find('p.pi_blurb').css({'display' : 'block'});
		jQuery(this).find('h2 a').css({'color' : '#fff'});
		jQuery(this).find('h2').css({'color' : '#fff'});
		jQuery(this).find('p').css({'color' : '#fff'});
		jQuery(this).find('p a').css({'color' : '#fff'});
		jQuery(this).find('p span').css({'color' : '#fff'});
    });
	jQuery(".post_intro").mouseleave(function() {
		jQuery(this).find('p.pi_social').css({'display' : 'none'});
		jQuery(this).find('p.pi_blurb').css({'display' : 'none'});
		jQuery(this).find('h2 a').css({'color' : '#000'});
		jQuery(this).find('h2').css({'color' : '#000'});
		jQuery(this).find('p').css({'color' : '#999'});
		jQuery(this).find('p.pi_meta').css({'color' : '#ED1C24'});
		jQuery(this).find('p a').css({'color' : '#000'});
		jQuery(this).find('p span').css({'color' : '#000'});
    });
});

//Shows/DJs - Head Toggle
jQuery(function(){
	jQuery(".page_head[class=expanded]").find("div.dj_info").slideToggle("medium");
	jQuery(".page_head h1 a").click(function() {
		jQuery(".page_head").toggleClass("expanded").toggleClass("collapsed").find("div.dj_info").slideToggle("medium");
	});
});

//Shows/DJs Landing - Hovers/Hides
jQuery(function(){
	jQuery(".block").mouseenter(function() {
		jQuery(this).find('p.block_name a').css({'color' : '#fff'});
		jQuery(this).find('p.block_meta').css({'color' : '#fff'});
    });
	jQuery(".block").mouseleave(function() {
		jQuery(this).find('p.block_name a').css({'color' : '#292929'});
		jQuery(this).find('p.block_meta').css({'color' : '#666'});
    });
});

//Galleries - Hovers/Hides
jQuery(function(){
	jQuery(".block").mouseenter(function() {
		jQuery(this).find('p.block_name a.block_name_name').css({'display' : 'none'});
		jQuery(this).find('p.block_name a.block_name_amount').css({'display' : 'inline'});
		jQuery(this).find('p.block_meta span.block_meta_date').css({'display' : 'none'});
		jQuery(this).find('p.block_meta span.block_meta_likes').css({'display' : 'inline'});
		jQuery(this).find('p.block_meta a.block_meta_comments').css({'display' : 'inline'});
    });
	jQuery(".block").mouseleave(function() {
		jQuery(this).find('p.block_name a.block_name_name').css({'display' : 'inline'});
		jQuery(this).find('p.block_name a.block_name_amount').css({'display' : 'none'});
		jQuery(this).find('p.block_meta span.block_meta_date').css({'display' : 'inline'});
		jQuery(this).find('p.block_meta span.block_meta_likes').css({'display' : 'none'});
		jQuery(this).find('p.block_meta a.block_meta_comments').css({'display' : 'none'});
    });
});

//Station Updates - Hovers/Hides
jQuery(function(){
	jQuery(".box_update_item").mouseenter(function() {
		jQuery(this).find('p.bui_pic').css({'display' : 'none'});
		jQuery(this).find('span.bui_meta').css({'display' : 'inline'});
		jQuery(this).find('h2 a').css({'color' : '#fff'});
		jQuery(this).find('p a').css({'color' : '#fff'});
		jQuery(this).find('p span').css({'color' : '#fff'});
    });
	jQuery(".box_update_item").mouseleave(function() {
		jQuery(this).find('p.bui_pic').css({'display' : 'block'});
		jQuery(this).find('span.bui_meta').css({'display' : 'none'});
		jQuery(this).find('h2 a').css({'color' : '#000'});
		jQuery(this).find('p a').css({'color' : '#ED1C24'});
		jQuery(this).find('p span').css({'color' : '#000'});
    });
});

//Share Pop - Hovers/Hides
jQuery(function(){
	jQuery(".share_contain").mouseenter(function() {
		jQuery(document).find('.share').css({'display' : 'block'});
    });
	jQuery(".share_contain").mouseleave(function() {
		jQuery(document).find('.share').css({'display' : 'none'});
    });
	jQuery("#share_link").click(function() {
		this.select();
    });
});

//Comments - Hovers/Hides
jQuery(function(){
	jQuery(".comment").mouseenter(function() {
		jQuery(this).find('span.com_meta_time').css({'display' : 'none'});
		jQuery(this).find('span.com_meta_abuse').css({'display' : 'inline'});
		jQuery(this).find('span.com_meta_name').css({'color' : '#fff'});
		jQuery(this).find('p.com_blurb').css({'color' : '#fff'});
    });
	jQuery(".comment").mouseleave(function() {
		jQuery(this).find('span.com_meta_abuse').css({'display' : 'none'});
		jQuery(this).find('span.com_meta_time').css({'display' : 'inline'});
		jQuery(this).find('span.com_meta_name').css({'color' : '#292929'});
		jQuery(this).find('p.com_blurb').css({'color' : '#999'});
    });
});

//poll Toggle
jQuery(function(){
	jQuery(".polllink").click(function() {
		jQuery(".poll").find('p.poll_answ').css({visibility: "visible", display: "none"}).hide();
		jQuery(".poll").find('p.poll_btn').css({visibility: "visible", display: "none"}).hide();
		jQuery(".poll").find('p.poll_res').css({visibility: "visible", display: "none"}).show();
	});
});

//form Bg Position Shifting
jQuery(function() {
	jQuery(".shift").click(function () {
      jQuery(this).css({'background-position' : '0px -31px'});
    });
	jQuery(".shift input").blur(function () {
      jQuery(".shift").css({'background-position' : '0px 0px'});
    });
	jQuery(".shift_plenty").click(function () {
      jQuery(this).css({'background-position' : '0px -117px'});
    });
	jQuery(".shift_plenty textarea").blur(function () {
      jQuery(".shift_plenty").css({'background-position' : '0px 0px'});
    });
});

//search Bg Position Shifting
jQuery(function() {
	jQuery(".search p.field input").click(function () {
      jQuery(".search p.field").css({'background-position' : '0px -27px'});
    });
	jQuery(".search p.field input").blur(function () {
      jQuery(".search p.field").css({'background-position' : '0px 0px'});
    });
});

//************************* SHINY EFFECTS **************************//

jQuery(document).ready(function() {
	jQuery.easing.def = "easeInOutSine"; 
	jQuery('.chunk_body, .post_intro, .block, .box_update_item, .comment').bind('mouseenter',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#ee1c24" }, 200)
	}).bind('mouseleave',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#ffffff" }, 300)
	});
});

//************************* GALLERY **************************//

jQuery(function() {
jQuery(".thumb_carousel").jCarouselLite({
        btnNext: ".thumbs_next",
        btnPrev: ".thumbs_prev",
    	speed: 500,
		circular: false
    });
});

// Initially set opacity on thumbs and add
// additional styling for hover effect on thumbs
var onMouseOutOpacity = 0.67;
jQuery('#thumbs ul.thumbs li').css('opacity', onMouseOutOpacity)
	.hover(
		function () {
			jQuery(this).not('.selected_thumb').fadeTo('fast', 1.0);
		}, 
		function () {
			jQuery(this).not('.selected_thumb').fadeTo('fast', onMouseOutOpacity);
		}
	);

jQuery(function() {
	// Initialize Advanced Galleriffic Gallery
	var galleryAdv = jQuery('#gallery').galleriffic('#thumbs', {
		delay:                  2000,
		numThumbs:              12,
		preloadAhead:           10,
		enableTopPager:         false,
		enableBottomPager:      false,
		imageContainerSel:      '#slideshow',
		controlsContainerSel:   '#controls',
		captionContainerSel:    '#caption',
		loadingContainerSel:    '#loading',
		renderSSControls:       false,
		renderNavControls:      false,
		playLinkText:           'Play Slideshow',
		pauseLinkText:          'Pause Slideshow',
		prevLinkText:           '&lsaquo; Previous Photo',
		nextLinkText:           'Next Photo &rsaquo;',
		nextPageLinkText:       'Next &rsaquo;',
		prevPageLinkText:       '&lsaquo; Prev',
		enableHistory:          false,
		autoStart:              false,
		onChange:               function(prevIndex, nextIndex) {
			jQuery('#thumbs ul.thumbs').children()
				.eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
				.eq(nextIndex).fadeTo('fast', 1.0);
		},
		onTransitionOut:        function(callback) {
			jQuery('#caption').fadeTo('fast', 0.0);
			jQuery('#slideshow').fadeTo('fast', 0.0, callback);
		},
		onTransitionIn:         function() {
			jQuery('#slideshow').fadeTo('fast', 1.0);
			jQuery('#caption').fadeTo('fast', 1.0);
		},
		onPageTransitionOut:    function(callback) {
			jQuery('#thumbs ul.thumbs').fadeTo('fast', 0.0, callback);
		},
		onPageTransitionIn:     function() {
			jQuery('#thumbs ul.thumbs').fadeTo('fast', 1.0);
		}
	});
});

// Logout
$(function() {
    $("#sign_out").live("click", function () {
        var currentTime = new Date();
        var time = currentTime.getTime();
        $("#account_links").load("/logout?" + time);
    });
});


// Like
function afterLike(data)
{
    json = eval(data);
    jQuery(".ps_likes_num").text(json.score.score);
}

$(function() {
    $("#like_link").live("click", function () {
        var data = {};
        jQuery.post(jQuery(this).attr('href'), 
            data, 
            afterLike,
            "json"
        );
        return false;
    });
});

// Profile Form
function validateProfile() {
    var validator = $("#frmProfile").validate({
        onkeyup: false,
        onclick: false,
        rules: {
            username: {
                required: true,
                minlength: 4,
                remote: {
                    url: "/validate/username/",
                    type: "post",
                    timeout: 20000,
                    error: function (XMLHttpRequest, textStatus, errorThrown) { showDefaultAjaxError("username", validator); },
                    beforeSend: function (XMLHttpRequest) { showBusy("username"); },
                    onSuccess: function () { hideBusy("username"); }
                }
            },
            password: {
                minlength: 4,
                remote: {
                    url: "/validate/password/",
                    type: "post",
                    timeout: 20000
                }
            },
            password_confirm: {
                minlength: 4,
                remote: {
                    url: "/validate/password-confirm/",
                    type: "post",
                    timeout: 20000,
                    data: {
                        password: function() {
                            return $("#id_password").val();
                        }
                    }
                }
            },
            birth_date_day: {
                birthDate: true
            },
            birth_date_month: {
                birthDate: true
            },
            birth_date_year: {
                birthDate: true
            }
        },

        groups: {
            birth_date: "birth_date_day birth_date_month birth_date_year"
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "birth_date_day" || element.attr("name") == "birth_date_month" || element.attr("name") == "birth_date_year" )
               error.insertAfter("#id_birth_date_year");
            else
                error.insertAfter(element);
        }
    });

    $.validator.addMethod("birthDate",
        function(value, element) {
            day = $("#id_birth_date_day").val();
            month = $("#id_birth_date_month").val();
            year = $("#id_birth_date_year").val();
            if (day != "" & month != "" & year != "") {
                var date = new Date(year, month - 1, day);
                var convertedDate = "" + date.getFullYear() + (date.getMonth()+1) + date.getDate();
                var givenDate = "" + year + month + day;
                return (givenDate == convertedDate);
            }
            return true
        },
        "Invalid date, please try again"
    );
}

// Profile Picture Form
function validateProfilePicture() {
    var validator = $("#frmProfilePicture").validate({
        onkeyup: false,
        onclick: false,
        rules: {
            image: {
                required: true
            }
        }
    });
}

// Competition Form
function validateEnterCompetition() {
    var validator = $("#frmEnterCompetition").validate({
        onkeyup: false,
        onclick: false,
        rules: {
            answer: {
                required: true
            }
        }
    });
}

// Comments
function validateComments() {
    var validator = $("#frmComments").validate({
        onkeyup: false,
        onclick: false,
        submitHandler: function(form) {
            $("#register_buttons").hide();
            $("#register_progress").show();
            $('#frmComments').ajaxSubmit(function(response) { 
                $("#comments").replaceWith(response);
	            bindForm();
                validateComments();
            }); 
        },
        rules: {
            comment: {
                required: true
            }
        }
    });
}
