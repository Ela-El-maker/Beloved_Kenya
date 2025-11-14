$(document).ready(function() {

	$('.mainbanner').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: true,
	autoplayTimeout:10000,
	animateOut: 'fadeOut',
  	nav: true,
  	singleItem:true
  })
  $('#main-con-01').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	nav: true,
  	singleItem:true
  })
  $('#main-con-03').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	nav: true,
  	singleItem:true
  })
/*
  $('#main-con-04-1').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	nav: true,
  	singleItem:true
  })
  $('#main-con-04-2').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	nav: true,
  	singleItem:true
  })
*/
  $('#main-con-05').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	nav: true,
  	singleItem:true
  })
  $('#main-con-06-1').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	nav: true,
  	singleItem:true
  })
  $('#main-con-06-2').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	nav: true,
  	singleItem:true
  })
  $('#main-con-06-3').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	nav: true,
  	singleItem:true
  })

  $('#main-con-07-1').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	nav: false,
  	singleItem:true
  })
  $('#main-con-07-2').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	nav: false,
  	singleItem:true
  })
  $('#main-con-07-3').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	nav: false,
  	singleItem:true
  })
  $('.best-book-m').owlCarousel({
  	items: 1,
  	loop: true,
  	nav: true,
  	autoplay: false,
  	singleItem:true
  })

  $('.pastorbn').owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: true,
  	responsiveClass:true,
  	responsive:{
        0:{
            nav: false,
        },
        620:{
            nav: true,
        },
        960:{
            nav: true,
        }
    }
  })
  $('.maincts00').owlCarousel({
  	loop:true,
  	items: 1
  })
  $('.maincts01').owlCarousel({
  	loop:true,
  	items: 1
  })
  $('.maincts02').owlCarousel({
  	loop:true,
  	items: 1
  })
  $('.maincts03').owlCarousel({
  	loop:true,
  	items: 1
  })
  $('.historyImg').owlCarousel({
  	loop:true,
  	items: 1,
  	nav: true,
    lazyLoad : true,
    lazyFollow : false,
    lazyEffect : "fade",
  	autoHeight: true
  })
  $('.facilities_img').owlCarousel({
  	loop:true,
  	items: 1,
  	nav: true,
  	autoHeight: true
  })
  $('.wdhall_img').owlCarousel({
  	loop:true,
  	items: 1,
  	nav: true,
  	autoHeight: true
  })
  $('.nFam_img').owlCarousel({
  	loop:true,
  	items: 1,
  	nav: true,
  	autoHeight: true
  })
  $('.surroundImg').owlCarousel({
  	loop:true,
  	items: 1,
  	nav: true,
  	autoHeight: true
  })
  $('.tab-slide').owlCarousel({
  	stagePadding: 50,
  	nav: true,
  	dots: false,
  	responsiveClass:true,
  	responsive:{
        0:{
            items:2
        },
        620:{
            items:3
        },
        960:{
            items:5
        }
    }
  })

  $('.tab-staffs').owlCarousel({
  	dots: false,
  	responsiveClass:true,
  	responsive:{
        0:{
            items:2,
            nav: true,
            stagePadding: 50
        },
        620:{
            items:3
        }
    }
  })

  $('.tab-staffs2').owlCarousel({
  	dots: false,
  	responsiveClass:true,
  	responsive:{
        0:{
            items:2,
            nav: true,
            stagePadding: 50
        },
        620:{
            items:4
        }
    }
  })

  $('.tab-facilities').owlCarousel({
  	dots: false,
  	responsiveClass:true,
  	responsive:{
        0:{
            items:2,
            nav: true,
            stagePadding: 50
        },
        620:{
            items:5
        }
    }
  })


  $('.tab-faq').owlCarousel({
  	dots: false,
  	responsiveClass:true,
  	responsive:{
        0:{
            items:2,
            nav: true,
            stagePadding: 50
        },
        620:{
            items:4,
            nav: true,
            stagePadding: 50
        },
        768:{
            items:6
        }
    }
  })

	//SYNCED OWL CAROUSEL (version 2.0.0-beta.2.4)
        var
                $sync1 = $("#sync1"), //big photo
                $sync2 = $("#sync2"), //thumbs
                duration = 300;

        //big photo
        $sync1
                .owlCarousel({
                    items: 1,
                    dots: true
                })
                .on('changed.owl.carousel', function (e) {
                    var syncedPosition = syncPosition(e.item.index);

                    if ( syncedPosition != "stayStill" ) {
                        $sync2.trigger('to.owl.carousel', [syncedPosition, duration, true]);
                    }
                });

        //thumbs
        $sync2
                .on('initialized.owl.carousel', function() { //must go before owl carousel initialization
                    addClassCurrent( 0 );
                })
                .owlCarousel({ //owl carousel init
                    items: 4
                })
                .on('click', '.owl-item', function () {
                    $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
                });


        //adds 'current' class to the thumbnail
        function addClassCurrent( index ) {
            $sync2
                    .find(".owl-item")
                    .removeClass("current")
                    .eq( index ).addClass("current");
        }

        //syncs positions. argument 'index' represents absolute position of the element
        function syncPosition( index ) {

            //PART 1 (adds 'current' class to thumbnail)
            addClassCurrent( index );


            //PART 2 (counts position)

            var itemsNo = $sync2.find(".owl-item").length; //total items
            var visibleItemsNo = $sync2.find(".owl-item.active").length; //visible items

            //if all items are visible
            if (itemsNo === visibleItemsNo) {
                return "stayStill";
            }

            //relative index (if 4 elements are visible and the 2nd of them has class 'current', returns index = 1)
            var visibleCurrentIndex = $sync2.find(".owl-item.active").index( $sync2.find(".owl-item.current") );

            //if it's first visible element and if there is hidden element before it
            if (visibleCurrentIndex == 0 && index != 0) {
                    return index - 1;
            }

            //if it's last visible element and if there is hidden element after it
            if (visibleCurrentIndex == (visibleItemsNo - 1) && index != (itemsNo - 1)) {
                    return index - visibleItemsNo + 2;
            }

            return "stayStill";
        }
        // ./SYNCED OWL CAROUSEL


	//팝업
	$('#history_all').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#area_search').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#vod_tag').popup({
	 type: 'tooltip',
		vertical: 'bottom',
	  outline: true, // optional
	  focusdelay: 400, // optional
	  opacity: 0.8
	});
	$('#vod_lately').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#vod_lately').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#id_find').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
  $('#pay_info').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#family_add1').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#family_add2').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#family_add3').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#weekly_reg').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#nFam_pic1').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#nFam_pic2').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#nFam_pic3').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#nFam_pic4').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#nFam_pic5').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#qna_pop').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	$('#mms_addr').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});
	 $('#upload_plate').popup({
	  transition: 'all 0.3s',
	  scrolllock: true,
      onclose:function(){
        $('#editor_form').html("");
      }
	});
    $('#editor_image_view').popup({
	  transition: 'all 0.3s',
	  scrolllock: true
	});

	//팝업
		$('#mmenu').popup({
		  outline: true, // optional
		  focusdelay: 400, // optional
		  opacity: 0.8,
		  horizontal: 'left', //optional
		  vertical: 'top',
		  setzindex: true,
		  autozindex: true,
          blur:true
		});

		$('.sb_menu > li > a').on('click',function(){
			$(this).next().slideToggle();
			$(this).parent().toggleClass('open');
		});

		$('.sb_menu > li > ul > li > a.on').on('click',function(){
			$(this).next().slideToggle();
			$(this).parent().toggleClass('open');
		});

		$('.floor_info a.in_btn').on('click',function(){
			$(this).parent().parent().parent().next().find('.floorImg').slideToggle();
			$(this).parent().parent().parent().next().toggleClass('open');
		});
	//display:none;position:absolute;z-index:9999;top:900px;left:50%;width:489px;height:600px;margin-left:-225px;border:4px solid #777;background:#FFF
	//탭
	$('#main_boardlist').idTabs();
	$('#main_worship').idTabs();
	$('#tab-history').idTabs();
	$('#tab-directions').idTabs();
	$('#new_family_list').idTabs();
	$('#family_regist').idTabs();
	$('#family_regist').idTabs();
	//$('#staffs_list').idTabs();
	$('#faq_tab').idTabs();
	$('#idpw_find').idTabs();
	$('#facilities').idTabs();

	$('#main-con-04').idTabs();
	$('#main-con-08').idTabs();
	$('#pastor-book-list').idTabs();



	$('.sub-nav > a').on('click',function(){
		if($(this).parent().hasClass('open')){
			$(this).parent().removeClass('open');
		}
		else{
			$(".sub-nav").removeClass("open");
			$(this).parent().addClass('open');
		}
	});

	$('.slct > a').on('click',function(){
		if($(this).parent().hasClass('open')){
			$(this).parent().removeClass('open');
		}
		else{
			$(".slct").removeClass("open");
			$(this).parent().addClass('open');
		}
	});

	$('.info > a').on('click',function(){
		$(this).parent().parent().parent().toggleClass('open');
	});

	$('.regist_step_wrap h5').on('click',function(){
		$(this).parent().parent().toggleClass('open');
	});

    /*
	$('.reply').click(function(){
		$('.reply_area').slideToggle();
	});

	$('.faq_bd a').on('click',function(){
		$(this).parent().toggleClass('open');
		$(this).next().slideToggle();
	});*/

	$('.btn_favor').on('click',function(){
		$(this).toggleClass('on');
	});

	$('.my_menu > a').on('click',function(){
		$(this).parent().toggleClass('open');
		$('.my_list').slideToggle();
	});

	$('.m_sum .head').on('click',function(){
		$(this).parent().toggleClass('open');
		$(this).next().slideToggle();
	});

	$('.tag_list a').on('click',function(){
		$(this).toggleClass('on');
	});
});

var _download_mp3 = function(vod_idx, fname, title){
    var url = "/download/mp3/?vod_idx="+vod_idx+"&fname="+fname+"&title="+title
    location.href = url;
}

$(function() {
    //$('.main_vod').matchHeight();
    $('.main-card1').matchHeight();
    $('.main-card2').matchHeight();
    $('.main-card3').matchHeight();
    $('.pastor_book_all li').matchHeight();
    $('.main_family_list li').matchHeight();
    $('.row3 > .section').matchHeight();
    $('.match1').matchHeight();
    $('.match2').matchHeight();
    $('.match3').matchHeight();
    $('.mlink').matchHeight();
    $('.way').matchHeight();
    $('.sum_year > li a > div').matchHeight();
    $('.input_wrap_01 dt, .input_wrap_01 dd').matchHeight();
    $('.staffs_list li').matchHeight();
    $('.vod_list > li').matchHeight();
    $('.vod_link > li').matchHeight();
    $('.pastor_book > li').matchHeight();
});

var setComma = function(obj){
	//var tmp = addComma(obj.value);
	//obj.value=tmp;
	var istr = obj.value;
	var fstr = istr.substring(0,1);
	var lstr = istr.substring(1,istr.length);

	if(fstr=="-"){
		var tmp = addComma(lstr);
		obj.value=fstr+tmp;
	}
	else{
		var tmp = addComma(istr);
		obj.value = tmp;
	}
};

var addComma = function(str){
    var tmps, tmps2

	tmps = str.replace(/[^0-9]/g, '');
	tmps2 = tmps.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

	return tmps2;
};

/* 지교회 로그인 버튼 */
var branch_login = function(){
    var ret_url = location.href;
    location.href = "/login/?ret_url="+ret_url;
}

/* 상단 로그인 */
var g_login = function(){
    var this_url = location.href;
    location.href = "/login/?ret_url="+this_url;
}

/* 로그인 물어보기*/
var _ask_login = function(){
    var this_url = location.href;
    var ans;

    if(ans=confirm('로그인이 필요한 서비스 입니다.\n\n지금 로그인 하시겠습니까?')){
        location.href = "/login/?ret_url="+this_url;
    }
    else{
        return;
    }
};

/* 게시판 이미지 보기 */
var editor_image_view = function(fname){
    var w, h;
    var plate = $("#editor_image_view");
    plate.css("border", "5px solid #DDD");

    var img = document.createElement('img');
    img.src = fname;
    w = img.width;
    h = img.height;
    img = null;

    b_w = window.innerWidth;

    if(b_w >540){   //Desktop
        if(w > 870)
            plate.html("<img src='/image.php?image="+fname+"&width=870'/>");
        else
            plate.html("<img src='"+fname+"'/>");
    }
    else{   //Mobile
        plate.html("<img src='"+fname+"' width='95%'/>");
    }
    plate.popup('show');
};


/* 통합검색 팝업 */
var _g_search_form = function(flag){
	var plate;
	if(flag=="w_s")	//web
		plate = $(".newsearpop");
	else
		plate = $(".newsearpop_m");

	if(plate.css("display")=="block"){
		plate.fadeOut();
	}
	else{
		plate.fadeIn();
	}
}

var g_top_search = function(flag){
	var kword;
	var mword;
	if(flag=='w'){	//web
		kword = $("#w_keyword");
		kword.css("border", "1px solid #CCC");
		if(kword.val()==""){
			alert("검색어를 입력해주세요.");
			kword.css("border", "2px solid red");
			kword.focus();
			return;
		}
		else{
			document.w_search_form.submit();
		}
	}
	else{
		mword = $("#m_keyword");
		mword.css("border", "1px solid #CCC");
		if(mword.val()==""){
			alert("검색어를 입력해주세요.");
			mword.css("border", "2px solid red");
			mword.focus();
			return;
		}
		else{
			document.w_search_form.w_keyword.value = mword.val();
			document.w_search_form.submit();
		}
	}
}

var search_checkenter = function(flag){
	if(event.keyCode=="13"){
		if(flag=="w"){
			g_top_search('w');
		}
		else{
			g_top_search('m');
		}
	}
}

var eraseComma = function(str){

    var i = 0;
    var pos_str = 0;
    var rtn_str = "";

	if(str==""){
		rtn_str = "";
	}
	else{
		while( i < str.length ) {
			pos_str = str.indexOf(",",i);

			if( pos_str == -1 ) {
				rtn_str += str.substring(i, str.length );
				break;
			}else {
				rtn_str += str.substring(i, pos_str );
				i = pos_str+1;
			}
		}
	}

	return rtn_str;
};
