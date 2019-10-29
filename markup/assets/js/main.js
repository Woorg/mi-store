import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import magnificPopup from 'magnific-popup';
// import slick from 'slick-carousel';
// import LazyLoad from 'vanilla-lazyload';

// import "webp-hero/dist-cjs/polyfills";
// import WebpMachine from "webp-hero/dist/webp-machine"
// import 'jquery-mask-plugin';
// import 'ion-rangeslider';
// import Dropzone from 'dropzone';

// import "jquery-mask-plugin";
// import bound from 'bounds.js';

(function ($) {

  svg4everybody();

  let styles = [
    'padding: 2px 9px',
    'background: #82B93C',
    'color: #fff',
    'display: inline-block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
    'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 1.56',
    'text-align: left',
    'font-size: 16px',
      'font-weight: 400'
  ].join(';');

  console.log('%c developed by igor gorlov gorlov https://webjeb.ru', styles);

  $(function() {

    /*
      Leave popup
    */

    $.exitIntent('enable');

    $(document).bind('exitintent',
    function() {
      $.magnificPopup.open({
        items: {
            src: '#leave'
        },
        type: 'inline'
      });
    });

    /*
      Phone Mask
    */

    $('.form__field_phone input').mask("+ 7(999)999-99-99", {
      placeholder: "Введите номер"
    });

    /* 
        Form
    */

    $('.open-popup').magnificPopup({
        type:'inline',
        midClick: true 
    });


    var form = $('.form .form__w'),
        popup = $('.popup'),
        form_data;

    // Success function
    function done_func(response) {
        console.log('success');
        openPopup();

        function openPopup() {

            $.magnificPopup.open({
                items: {
                    src: '#thanks'
                },
                type: 'inline'
            });

        }


     
    }

    // Fail function
    function fail_func(data) {

        console.log('failed');
        // setTimeout(function () {
        //     popup.fadeOut();
        // }, 2000);

        // openPopup();

        // function openPopup() {
        //     $.magnificPopup.open({
        //         items: {
        //             src: '#fail'
        //         },
        //         type: 'inline'
        //     });
        // }


    }

    form.submit(function (e) {
      e.preventDefault();
      form_data = $(this).serialize();

      
      $.ajax({
          type: 'POST',
          url:  form.attr('action'),
          data:  form_data
      })
      .done(done_func)
      .fail(fail_func);
    });


  });


    

})(jQuery);
