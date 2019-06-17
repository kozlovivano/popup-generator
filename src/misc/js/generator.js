(function ($) {
    $(window).on('load', function () {
        var esc = $.Event("keydown", { keyCode: 27 });
        $('#preview-popup>div').attr('style', "position: absolute; transform: scale(0.5); left: 50px; top: 10px;");

        var $preview = $('.preview').eq(0);
        var $livePreview;
        /*----*/
        var selectedStyle = -1;
        $('#field-popupTitle').on('keyup', function(){
            $('.popup-title').html($(this).val());
        })

        $('#field-popupText').on('keyup', function(){
            $('.popup-content').html($(this).val());
        })

        $('#field-popupTextSecondary').on('keyup', function(){
            $('.popup-money').html($(this).val());
        })

        $('#field-buttonText').on('keyup', function(){
            $('.button-text').html($(this).val());
        })

        $('#field-buttonUrl').on('keyup', function(){
            $('.button-url').html($(this).val());
            $('.button-text').attr('onclick', 'location.href="' + $(this).val() + '"');
        })

        $('#field-buttonPrimaryColor').change(function(){
            console.log($(this).val());
            $('.primary-color').html('#' + $(this).val());
            $('.action.primary-color-style').attr('style', 'background-color: #' + $(this).val() + ';');
        })
        $('#field-buttonSecondaryColor').change(function(){
            $('.secondary-color').html('#' + $(this).val());
            $('.action.secondary-color-style').attr('style', 'background-color: #' + $(this).val() + ';');
        })

        $('#field-popupStyle').on('change', function(){
            $("body").trigger(esc);
            //
            if($(this).val() != -1){
                $('.select-popup').hide();
                $('.console').show();
                $('.field-main-detail').show();
                $('.field-restriction').show();
                $('.field-overlay').show();
                $('.field-popup').show();
                $('.field-mobile').show();
                $('.actions').show();
            }else{
                $('.select-popup').show();
                $('.console').hide();
                $('.field-main-detail').hide();
                $('.field-restriction').hide();
                $('.field-overlay').hide();
                $('.field-popup').hide();
                $('.field-mobile').hide();
                $('.actions').hide();
            }

            $('#field-popupTitle').val('Lorem ipsum!');
            $('#field-popupTitle').trigger('change');

            $('#field-popupText').val('Lorem ipsum dolor sit amet, verterem assentior pertinacia eos in, cetero argumentum eos.');
            $('#field-popupText').trigger('change');
            $('.popup-type').hide();
            $('.endDate').hide();
            $('.style3').hide();
            var type = $(this).val();
            if(type == 0){
                selectedStyle = 0;
                $preview = $('.preview').eq(0);
                $livePreview = $('.preview-live').eq(0);

                $('.popup-type.style1').show();
                $('#field-popup_type').val('instant');
                $('#field-popup_type').trigger('change');
                $('#field-popup_animation').val('slideTop');
                $('#field-popup_animation').trigger('change');
                $('#field-popup_position').val('topCenter');
                $('#field-popup_position').trigger('change');
                $('#field-popup_closeButtonPlace').val('inside');
                $('#field-popup_closeButtonPlace').trigger('change');
                $('#field-popup_css').html("'width': '420px', 'background': '#fff', 'padding': '0', 'margin': '30px'"
                );
                $('#field-popup_css').trigger('change');
                $('#field-overlay_closesPopup').val('false');
                $('#field-overlay_closesPopup').trigger('change');
                $('#field-overlay_css').html("'background': 'rgba(0,0,0,0.1)'");
                $('#field-overlay_css').trigger('change');
                $('#field-mobile_breakpoint').val('480');
                $('#field-mobile_breakpoint').trigger('change');
                $('#field-mobile_position').val('topCenter');
                $('#field-mobile_position').trigger('change');
                $('#field-mobile_css').html("'width': '100%', 'background': '#fff', 'padding': '0', 'margin': '0'");
                $('#field-mobile_css').trigger('change');
                $('#field-restrict_cookieSet').val('false');
                $('#field-restrict_cookieSet').trigger('change');
            }else if(type == 1){
                selectedStyle = 1;
                $preview = $('.preview').eq(1);
                $livePreview = $('.preview-live').eq(1);
                $('.popup-type.style2').show();
                $('#field-popup_animation').val('slideTop');
                $('#field-popup_animation').trigger('change');
                $('#field-popup_position').val('topCenter');
                $('#field-popup_position').trigger('change');
                $('#field-popup_css').html("'padding': '40px', 'margin' : '30px'");
                $('#field-popup_css').trigger('change');

                $('#field-popup_type').val('none');
                $('#field-popup_type').trigger('change');
                $('#field-popup_closeButtonPlace').val('inside');
                $('#field-popup_closeButtonPlace').trigger('change');
                $('#field-popup_closeButtonPlace').val('outside');
                $('#field-popup_closeButtonPlace').trigger('change');
                $('#field-overlay_closesPopup').val('true');
                $('#field-overlay_closesPopup').trigger('change');
                $('#field-overlay_css').html("");
                $('#field-overlay_css').trigger('change');
                $('#field-mobile_position').val('center');
                $('#field-mobile_position').trigger('change');
                $('#field-mobile_css').html("");
                $('#field-mobile_css').trigger('change');
                $('#field-restrict_cookieSet').val('false');
                $('#field-restrict_cookieSet').trigger('change');
            }else if(type == 2){
                selectedStyle = 2;
                $preview = $('.preview').eq(2);
                $livePreview = $('.preview-live').eq(2);
                $('.style3').show();
                $('.endDate').show();
                $('#field-popup_type').val('instant');
                $('#field-popup_type').trigger('change');
                $('#field-popup_animation').val('slideTop');
                $('#field-popup_animation').trigger('change');
                $('#field-popup_position').val('topCenter');
                $('#field-popup_position').trigger('change');
                $('#field-popup_css').html("'width': '1140px', 'background': '#333', 'padding': '0', 'margin': 'auto'");
                $('#field-popup_css').trigger('change');
                $('#field-overlay_css').html("'background': 'rgba(255,255,255,0.9)'");
                $('#field-overlay_css').trigger('change');
                $('#field-mobile_breakpoint').val('1140');
                $('#field-mobile_breakpoint').trigger('change');
                $('#field-mobile_position').val('topCenter');
                $('#field-mobile_position').trigger('change');
                $('#field-mobile_css').html("'width': '100%', 'background': '#333', 'padding': '0', 'margin': 'auto'");
                $('#field-mobile_css').trigger('change');

                $('#field-endDate').on('change', function(){
                    $('.end-date').html($(this).val());
                })

                $('#field-restrict_cookieSet').val('true');
                $('#field-restrict_cookieSet').trigger('change');
                $('#field-restrict_cookieName').val('sm-setNotificationBannerCookie-1');
                $('#field-restrict_cookieName').trigger('change');
                $('#field-restrict_cookieScope').val('page');
                $('#field-restrict_cookieScope').trigger('change');
                $('#field-restrict_cookieDays').val('20');
                $('#field-restrict_cookieDays').trigger('change');
                $('#field-restrict_cookieSetClass').val('20');
                $('#field-restrict_cookieSetClass').trigger('change');

                $('#field-popupTitle').val('One time offer!');
                $('#field-popupTitle').trigger('change');

                $('#field-popupText').val('Get your limited bundle of items for only $');
                $('#field-popupText').trigger('change');
            }
            $livePreview.SlickModals('openPopup');
        })
        
        /*----*/
        // Populate selects
        $('.populate-animations').each(function () {
            $(this).append(
                '<option value="fadeIn" selected>fadeIn</option>\n' +
                '<option value="zoomIn">zoomIn</option>\n' +
                '<option value="zoomOut">zoomOut</option>\n' +
                '<option value="slideInTop">slideInTop</option>\n' +
                '<option value="slideInBottom">slideInBottom</option>\n' +
                '<option value="slideInRight">slideInRight</option>\n' +
                '<option value="slideInLeft">slideInLeft</option>\n' +
                '<option value="slideTop">slideTop</option>\n' +
                '<option value="slideBottom">slideBottom</option>\n' +
                '<option value="slideRight">slideRight</option>\n' +
                '<option value="slideLeft">slideLeft</option>\n' +
                '<option value="rotateIn">rotateIn</option>\n' +
                '<option value="rotateOut">rotateOut</option>\n' +
                '<option value="flipInX">flipInX</option>\n' +
                '<option value="flipInY">flipInY</option>\n' +
                '<option value="swingTop">swingTop</option>\n' +
                '<option value="swingBottom">swingBottom</option>\n' +
                '<option value="swingRight">swingRight</option>\n' +
                '<option value="swingLeft">swingLeft</option>\n' +
                '<option value="flash">flash</option>\n' +
                '<option value="pulse">pulse</option>\n' +
                '<option value="rubberBand">rubberBand</option>\n' +
                '<option value="shake">shake</option>\n' +
                '<option value="swing">swing</option>\n' +
                '<option value="tada">tada</option>\n' +
                '<option value="wobble">wobble</option>\n' +
                '<option value="bounce">bounce</option>\n' +
                '<option value="bounceIn">bounceIn</option>\n' +
                '<option value="bounceInUp">bounceInUp</option>\n' +
                '<option value="bounceInDown">bounceInDown</option>\n' +
                '<option value="bounceInRight">bounceInRight</option>\n' +
                '<option value="bounceInLeft">bounceInLeft</option>\n' +
                '<option value="unFold">unFold</option>\n' +
                '<option value="flowIn">flowIn</option>'
            )
        });
        $('.populate-positions').each(function () {
            $(this).append(
                '<option value="center" selected>Center</option>\n' +
                '<option value="left">Left</option>\n' +
                '<option value="right">Right</option>\n' +
                '<option value="topLeft">Top Left</option>\n' +
                '<option value="topCenter">Top Center</option>\n' +
                '<option value="topRight">Top Right</option>\n' +
                '<option value="bottomLeft">Bottom Left</option>\n' +
                '<option value="bottomCenter">Bottom Center</option>\n' +
                '<option value="bottomRight">Bottom Right</option>'
            )
        });

        // Globals

        var $generator = $('#generator');
        var $results = $('#results');
        var $console = $results.children('.console');
        var $hasSettings = $results.find('.hasSettings');
        var $noSettings = $results.find('.noSettings');
        var emptySpace = '&nbsp;';
        var defaults = {
            restrict_hideOnUrls                   : '',
            restrict_cookieSet                    : 'false',
            restrict_cookieName                   : '',
            restrict_cookieScope                  : 'domain',
            restrict_cookieDays                   : '30',
            restrict_cookieSetClass               : '',
            restrict_dateRange                    : 'false',
            restrict_dateRangeStart               : '',
            restrict_dateRangeEnd                 : '',
            restrict_dateRangeServerTime          : 'true',
            restrict_dateRangeServerTimeFile      : '',
            restrict_dateRangeServerTimeZone      : '',
            restrict_showAfterVisits              : '1',
            restrict_showAfterVisitsResetWhenShown: 'false',
            popup_scriptPath             : 'path',
            popup_selector               : 'myPopup',
            popup_type                   : 'instant',
            popup_delayedTime            : '1s',
            popup_scrollDistance         : '400px',
            popup_scrollHideOnUp         : 'false',
            popup_exitShowAlways         : 'false',
            popup_autoClose              : 'false',
            popup_autoCloseAfter         : '5s',
            popup_openWithHash           : '',
            popup_redirectOnClose        : 'false',
            popup_redirectOnCloseUrl     : '',
            popup_redirectOnCloseTarget  : '_blank',
            popup_redirectOnCloseTriggers: 'overlay button',
            popup_position               : 'center',
            popup_animation              : 'fadeIn',
            popup_closeButtonEnable      : 'true',
            popup_closeButtonStyle       : 'cancel simple',
            popup_closeButtonAlign       : 'right',
            popup_closeButtonPlace       : 'outside',
            popup_closeButtonText        : '',
            popup_reopenClass            : '',
            popup_reopenClassTrigger     : 'click',
            popup_reopenStickyButtonEnable: 'false',
            popup_reopenStickyButtonText  : '',
            popup_enableESC              : 'true',
            popup_bodyClass              : '',
            popup_wrapperClass           : '',
            popup_draggableEnable        : 'false',
            popup_allowMultipleInstances : 'false',
            popup_css                    : {},
            overlay_isVisible  : 'true',
            overlay_closesPopup: 'true',
            overlay_animation  : 'fadeIn',
            overlay_css        : {},
            content_loadViaAjax: 'false',
            content_animate    : 'false',
            content_animation  : 'zoomIn',
            content_css        : {},
            page_animate          : 'previewfalse',
            page_animation        : 'scale',
            page_animationDuration: '.4s',
            page_blurRadius       : '1px',
            page_scaleValue       : '.9',
            page_moveDistance     : '30%',
            mobile_show      : 'true',
            mobile_breakpoint: '480px',
            mobile_position  : 'bottomCenter',
            mobile_css       : {}
        };

        // Insert whitespaces and break lines
        $console.find('.setting').each(function () {
            $(this).prepend(emptySpace.repeat(8)).append('<br />');
        });
        $console.find('.lvl1').prepend(emptySpace.repeat(4));
        $console.find('.lvl2').prepend(emptySpace.repeat(8));
        $console.find('.lvl3').prepend(emptySpace.repeat(12));
        $console.find('.lvl4').prepend(emptySpace.repeat(16));
        $console.find('.html .row').each(function () {
            $(this).append('<br />');
        });

        // Generator
        $('#generator input, #generator select, #generator textarea').on('change', function () {
            var $el   = $(this);
            var elName = $el.attr('id').replace('field-', '');
            var elVal = $el.val();

            for (var key in defaults) {
                if (key === elName) {
                    var $target = $console.find('span.' + elName);

                    // Field specifics
                    if (elName === 'popup_scriptPath' || elName === 'popup_selector') {
                        elVal = elVal.replace(/\s/g, '');
                        $el.val(elVal);
                        if (elName === 'popup_selector') {
                            if (elVal.charAt(0) === '#') {
                                toggleSelector('id', '#');
                                elVal = elVal.replace('#', '');
                            } else if (elVal.charAt(0) === '.') {
                                toggleSelector('class', '.');
                                elVal = elVal.replace('.', '');
                            } else {
                                alert('Selector needs an ID or CLASS prefix (hash or dot).');
                                $el.val('').focus();
                                return;
                            }
                        }
                    }
                    if (elVal !== '') {
                        if (elName === 'popup_openWithHash') {
                            if (elVal.charAt(0) !== '#') {
                                elVal = '#' + elVal;
                                $el.val(elVal);
                            }
                        }
                        if (elName === 'restrict_hideOnUrls') elVal = sortHiddenPages(elVal);
                        if (elName === 'restrict_dateRangeStart' || elName === 'restrict_dateRangeEnd') elVal = checkDateFormat(elVal);
                        if (elName === 'popup_redirectOnCloseUrl') elVal = checkUrlFormat(elVal);
                        if (elName.indexOf('_css') > -1) {
                            $preview.SlickModals('styleElement', elName.replace('_css', ''), checkCssFormat(elVal, false, false));
                            $livePreview.SlickModals('styleElement', elName.replace('_css', ''), checkCssFormat(elVal, false, false));
                            elVal = checkCssFormat(elVal, true, true);
                        }
                    } else {
                        if (elName.indexOf('_css') > -1) elVal = null;
                    }

                    // Preview settings
                    if (elName === 'popup_type') {
                        var typeVal = '';
                        if (elVal === 'delayed') typeVal = $('#field-popup_delayedTime').val() + 's';
                        if (elVal === 'scrolled') typeVal = $('#field-popup_scrollDistance').val() + 'px';
                        $preview.SlickModals('setType', (elVal !== 'none') ? elVal : 'instant', typeVal);
                        $livePreview.SlickModals('setType', (elVal !== 'none') ? elVal : 'instant', typeVal);
                    }
                    if (elName === 'popup_delayedTime'){
                         $preview.SlickModals('setType', $('#field-popup_type').val(), elVal + 's');
                         $livePreview.SlickModals('setType', $('#field-popup_type').val(), elVal + 's');
                    }
                    if (elName === 'popup_scrollDistance'){
                         $preview.SlickModals('setType', $('#field-popup_type').val(), elVal + 'px');
                         $livePreview.SlickModals('setType', $('#field-popup_type').val(), elVal + 'px');
                    }
                    if (elName === 'popup_position'){
                         $preview.SlickModals('popupPosition', elVal);
                         $livePreview.SlickModals('popupPosition', elVal);
                    }
                    if (elName.indexOf('_animation') > -1){
                         $preview.SlickModals('setEffect', elName.replace('_animation', ''), elVal);
                         $livePreview.SlickModals('setEffect', elName.replace('_animation', ''), elVal);
                    }
                    if (elName === 'popup_autoClose'){
                         $preview.SlickModals('autoClose', (elVal === 'true') ? 'enable' : 'disable', $('#field-popup_autoCloseAfter').val() + 's');
                         $livePreview.SlickModals('autoClose', (elVal === 'true') ? 'enable' : 'disable', $('#field-popup_autoCloseAfter').val() + 's');
                    }
                    if (elName === 'popup_autoCloseAfter'){
                         $preview.SlickModals('autoClose', 'enable', elVal + 's');
                         $livePreview.SlickModals('autoClose', 'enable', elVal + 's');
                    }
                    if (elName === 'popup_closeButtonEnable'){
                         (elVal === 'true') ? $preview.prev().show() : $preview.prev().hide();
                         (elVal === 'true') ? $livePreview.prev().show() : $livePreview.prev().hide();
                    }
                    if (elName === 'popup_closeButtonStyle'){
                         $preview.prev().attr('data-sm-button-style', elVal);
                         $livePreview.prev().attr('data-sm-button-style', elVal);
                    }
                    if (elName === 'popup_closeButtonAlign'){
                         $preview.prev().attr('data-sm-button-align', elVal);
                         $livePreview.prev().attr('data-sm-button-align', elVal);
                    }
                    if (elName === 'popup_closeButtonPlace'){
                         $preview.prev().attr('data-sm-button-place', elVal);
                         $livePreview.prev().attr('data-sm-button-place', elVal);
                    }
                    if (elName === 'popup_closeButtonText'){
                         $preview.prev().attr('data-sm-button-text', elVal);
                         $livePreview.prev().attr('data-sm-button-text', elVal);
                    }
                    if (elName === 'overlay_isVisible'){
                         (elVal === 'true') ? $preview.parent().prev().show() : $preview.parent().prev().hide();
                         (elVal === 'true') ? $livePreview.parent().prev().show() : $livePreview.parent().prev().hide();
                    }
                    if (elName === 'overlay_closesPopup'){
                         (elVal === 'true') ? $preview.parent().prev().css('pointer-events', 'auto') : $preview.parent().prev().css('pointer-events', 'none');
                         (elVal === 'true') ? $livePreview.parent().prev().css('pointer-events', 'auto') : $livePreview.parent().prev().css('pointer-events', 'none');
                    }
                    if (elName === 'content_animate'){
                         (elVal === 'true') ? $preview.attr('data-sm-animated', 'true').attr('data-sm-effect', $('#field-content_animation').val()).css({'animation-duration': '0.4s', 'animation-delay': '0.4s'}) : $preview.attr('data-sm-animated', 'false').attr('data-sm-effect', '');
                         (elVal === 'true') ? $livePreview.attr('data-sm-animated', 'true').attr('data-sm-effect', $('#field-content_animation').val()).css({'animation-duration': '0.4s', 'animation-delay': '0.4s'}) : $livePreview.attr('data-sm-animated', 'false').attr('data-sm-effect', '');
                    }
                    if (elName === 'content_animation'){
                         $preview.attr('data-sm-effect', elVal);
                         $livePreview.attr('data-sm-effect', elVal);
                    }

                    // Show / hide settings
                    var diffVals = (defaults[key] !== elVal);
                    (diffVals) ? $target.addClass('visible') : $target.removeClass('visible');
                    if (elVal === null) $target.removeClass('visible');

                    // Toggle sub settings
                    if (elVal === 'true') {
                        toggleSubSettings('enable', elName, diffVals);
                    } else if (elVal === 'false') {
                        toggleSubSettings('disable', elName, diffVals);
                    } else if (elName === 'popup_type') {
                        (elVal !== 'none') ? toggleSubSettings('enable', elName, diffVals) : toggleSubSettings('disable', elName, diffVals);
                    }

                    // Populate values
                    $target.children('span').text(elVal);

                    break;
                }
            }

            if ($console.children('.setting:visible').length === 0) {
                $noSettings.show();
                $hasSettings.hide();
            } else {
                $noSettings.hide();
                $hasSettings.show();
            }

            // Last comma
            $console.children('.setting').removeClass('hideComma');
            $console.children('.setting:visible:last').addClass('hideComma');
        });

        // Toggle subsettings
        function toggleSubSettings (action, sel, diffVals) {
            var $generatorElems = $generator.find('[data-depends="' + sel + '"]');

            if (action === 'enable') {
                $generatorElems.show();
            } else {
                $generatorElems.hide();
                $results.find('[data-depends="' + sel + '"]').removeClass('visible');
                if (diffVals) {
                    $results.find('.' + sel).addClass('visible');
                }
            }
        }

        // Toggle selector
        function toggleSelector (attr, symbol, elVal) {
            $console.find('span.attr-html').text(attr);
            $console.find('span.attr-js').text(symbol);
        }

        // Toggle more info
        $generator.find('.moreInfo_cta').on('click', function () {
            $generator.find('.moreInfo_content').toggle();
        });

        // Select generated code
        $results.find('.copyCode').on('click', function () {
            var s = window.getSelection();
            var r = document.createRange();
            r.selectNodeContents($console[0]);
            s.removeAllRanges();
            s.addRange(r);
            document.execCommand('copy');

            var $this = $(this);
            var originalText = $this.text();
            $this.text('Code copied!').addClass('active');
            setTimeout(function () {
                $this.text(originalText).removeClass('active');
                s.removeAllRanges();
            }, 2000);
        });

        // Sort hidden pages
        function sortHiddenPages (val) {
            var vals = val.split(',');
            for (var i = 0; i < vals.length; i++) {
                vals[i] = "'" + vals[i].trim() + "'";
            }
            return vals;
        }
        
        // Check date format
        function checkDateFormat (date) {
            try {
                new Date(date.split(',')[0] + 'T' + date.split(',')[1].replace(' ', '')).getTime();
                return date;
            } catch (e) {
                alert('Date must be formatted as Y-M-D, H:M:S.');
                return '';
            }
        }
        
        // Check URL format
        function checkUrlFormat (url) {
            if (url.indexOf('http://') > -1 || url.indexOf('https://') > -1) {
                return url;
            } else {
                alert('URL is missing http(s) protocol.');
                return '';
            }
        }

        // Check CSS format
        function checkCssFormat (val, format, alertUser) {
            if (val === '') return null;
            if (val.split(':').length > 1 &&
                val.split(':')[0] !== ''  &&
                val.split(':')[1] !== ''  &&
                val !== ':') {
                return formatCSS(val, format);
            } else {
                if (alertUser) alert('CSS properties are not formatted properly.');
                return null;
            }
        }

        // Format CSS
        function formatCSS (val, format) {
            var properties = val.replace(/'/g, '').split(', ');
            var obj = {};

            properties.forEach(function (property) {
                var parts = property.split(':');
                obj[parts[0].trim()] = parts[1].trim();
            });

            if (format) {
                var result = JSON.stringify(obj);
                return result.replace(/"/g, " '").replace(/ /g, '');
            } else {
                return obj;
            }
        }
        // Preview
        $('.openPreview').on('click', function () {
            $("body").trigger(esc);
            $preview.SlickModals('openPopup');
        });
    });
}) (jQuery);