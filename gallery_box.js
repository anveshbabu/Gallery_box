//For Clicking Next Button
function rightButton() {
    var link = $('.modal_img_app a');
    var number = parseInt(link.attr('title').match(/\S+$/));
    var lastTitle = $('div .gallery_box_sp a').last().attr('title');
    var firstTitle = $('div .gallery_box_sp a').first().attr('title');
    number++;
    if (number === lastTitle) {
        number = firstTitle;
    }
    $('.galery_left_btn').show();
    $('.modal_img_app').html($('div').find('a[title="' + number + '"]').parent('span').html());
    $('.modal-title').text('Image ' + number);
//For hiding next button in last img

    if (Number(number) === Number(lastTitle)) {
        $('.galery_right_btn').hide();
    } else if (Number(number) === Number(lastTitle)) {
        $('.galery_right_btn').show();
    }
    $(".modal_img_app a img").removeClass("acc-img");
    $(".modal_img_app a img").removeClass("gallery_view");
}
 //For Clicking previous Button
function leftButton() {
    var link = $('.modal_img_app a');
    var number = parseInt(link.attr('title').match(/\S+$/));
    var lastTitle = $('div .gallery_box_sp a').last().attr('title');
    var firstTitle = $('div .gallery_box_sp a').first().attr('title');
    number--;
    if (number === -1) {
        number = +1;
    }
    $('#next-btn').show();
    $('.modal_img_app').html($('div').find('a[title="' + number + '"]').parent('span').html());
    $('.modal-title').text('Image ' + number);
    //For hiding next button in last img

    if (Number(number) === Number(firstTitle)) {
        $('.galery_left_btn').hide();
    } else if (Number(number) === Number(firstTitle)) {
        $('.galery_left_btn').show();
    }
    $(".modal_img_app a img").removeClass("acc-img");
    $(".modal_img_app a img").removeClass("gallery_view");

}
 //For Clicking count script
function count() {
    var i = 1;
    $('div .gallery_box_sp').each(function (index) {
        $(this).find('a').attr("title", index + 1);
    });
}
$(function () {
    //For showing Image in Model Window
    $('div').on('click', '.gallery_view', function (e) {
		 $("span").find('a').attr("title", "");
   count();
        $('.modal_img_app').empty();
        var title = $(this).parent('a').attr("title");
        $('.modal-title').html(title);
        $($(this).parents('span').html()).appendTo('.modal_img_app');
		 var img_last = $('div span a').last().attr('title');
        var img_first = $('div span a').first().attr('title');
        var current_last = $('.modal_img_app a').last().attr('title');
        var current_first = $('.modal_img_app a').first().attr('title');
        $('.galery_right_btn').show();
        $('.galery_left_btn').show();
        if (current_first == img_first)
        {
            $('.galery_left_btn').hide();
            $('.galery_right_btn').show();
        } else if (current_last == img_last) {
            $('.galery_right_btn').hide();
            $('.galery_left_btn').show();
        }

        $('#gallery_Modal').modal({show: true, backdrop: 'static', keyboard: false});
        $(".modal_img_app a img").removeClass("gallery_view");
    });


    //For Clicking Next Button
    $('.galery_right_btn').click(function () {
        rightButton();
    });


    //For Clicking previous Button
    $('.galery_left_btn').click(function () {
        leftButton();
    });

    //For Clicking Delete Button
    $('div').on('click', '.gallery_view', function (e) {
        $('.gallery_download').attr('href', $(this).attr('src'));
        $('.gallery_delete').attr('id', $(this).attr('id'));
    });
    $('.gallery_delete').on('click', function () {
        var link = $('.modal_img_app a');
        var id = $("span a").attr("id");
        var titel = $("#imageDiv span a").attr("titel");
        $("#" + id).remove();
       rightButton();
    });

    //Getting src here for downloading image
    $('.galery_left_btn').on('click', function () {
        setTimeout(function () {
            $('.gallery_download').attr('href', $(".gallery_body a img").attr('src'));
            $('.gallery_delete').attr('id', $(".gallery_body a img").attr('src'));
        }, 1000);
    });
    $('.galery_right_btn').on('click', function () {
        setTimeout(function () {
            $('.gallery_download').attr('href', $(".gallery_body a img").attr('src'));
            $('.gallery_delete').attr('id', $(".gallery_body a img").attr('src'));
        }, 1000);
    });

    //Closing Model Window
    $('.gallery_close').click(function () {
	  $('#gallery_Modal').modal('hide');
    });

    //For next & prev for Keyboard Function
    $(document.documentElement).keyup(function (e) {
        if (e.keyCode == 39)
        {
             rightButton();
     }

        if (e.keyCode == 37)
        {
             leftButton();
        }

    });

//end of script 




});