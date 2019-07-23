/*   Set values to inputs from settings   */

var CONFIG = {
    "base64_img": true,
    "base64_online": false, //exception on other domain images
    "max_code_length": 2000,
};
var x; //Countdown timer 
var applyFormSetting = function() {
    $("#title-text").val(settings.text.title_text);
    $("#title-color").val(settings.text.title_color);
    $("#subtitle-text").val(settings.text.subtitle_text);
    $("#subtitle-color").val(settings.text.subtitle_color);
    $("#description-text").val(settings.text.description_text);
    $("#description-color").val(settings.text.description_color)
    $("#button1-text").val(settings.buttons.button1_text);
    $("#button1-url").val(settings.buttons.button1_url);
    $("#button1-color").val(settings.buttons.button1_color);
    $("#button1-background").val(settings.buttons.button1_background);
    $("#button2-text").val(settings.buttons.button2_text);
    $("#button2-url").val(settings.buttons.button2_url);
    $("#button2-color").val(settings.buttons.button2_color);
    $("#button2-background").val(settings.buttons.button2_background);    
}

var applyCountdownSetting = function () {
    console.log(settings.countdown);
    if (settings.countdown.attached == true || settings.countdown.attached == "true") {
        var date = new Date();
        $("#countdown-value").attr('min', dateString(date));
        if (settings.countdown.countdown_value == '') {
            date.setDate(date.getDate() + 1);
            settings.countdown.countdown_value = dateString(date);
        }
        $("#countdown-value").val(settings.countdown.countdown_value);
        $("#countdown-value").change();

        $(".popup-countdown").show();
        // $("#countdown-switch").val(true);
        // $("#countdown-switch").trigger('click');
    } else {
        $(".popup-countdown").hide();
        // $("#countdown-switch").val(false);
        // $("#countdown-switch").trigger('click');
    }
}

var setSettings = function(){
    applyFormSetting();
    applyCountdownSetting();

    $("#form-url").val(settings.form.form_url);
    //$("input[name='form-width']:checked").val()
    $("#product1_url").val(settings.products.product1_url);
    $("#product2_url").val(settings.products.product2_url);
    $("#product3_url").val(settings.products.product3_url);
    $("#image-url").val(settings.image.image_url);
    $checked = $("input[name='image-position']:checked");
    if (settings.image.image_position !== undefined && settings.image.image_position !== '' && $checked.val() != settings.image.image_position) {
        $checked.prop('checked', false);
        var $radios = $('input:radio[name=image-position]');
        // if($radios.is(':checked') !== false) {

        // }
        $radios.filter(`[value=${settings.image.image_position}]`).prop('checked', true);
    }
    //$("input[name='image-position']:checked").val()
    $("#popup-type").val(settings.animations.popup_type);
    $("#popup-delay").val(settings.animations.popup_delay);
    $("#popup-position").val(settings.animations.popup_position);
    $("#popup-animation").val(settings.animations.popup_animation);
    $("#popup-auto").val(settings.animations.popup_auto)
    $("#popup-class").val(classFormat(settings.advanced.popup_class));
    //$("input[name='overlay']:checked").val(settings);
    //$("input[name='mobile']:checked").val(settings);
    $("#popup-cancel").val(settings.advanced.popup_cancel);
    $("#popup-cancel-position").val(settings.advanced.popup_cancel_position);
}
/*   Get settings from inputs   */
var getSettings = function(){
    settings = {
        "html": settings.html,
        "text" : {
            "subtitle_text"         : $("#subtitle-text").val(),
            "subtitle_color"        : $("#subtitle-color").val(),
            "title_text"            : $("#title-text").val(),
            "title_color"           : $("#title-color").val(),
            "description_text"      : $("#description-text").val(),
            "description_color"     : $("#description-color").val()
        },
        "countdown" : settings.countdown,
        "form" : {
            "form_url"              : $("#form-url").val(),
            "form_width"            : $("input[name='form-width']:checked").val()
        },
        "products" : {
            "product1_url"          : $("#product1_url").val(),
            "product2_url"          : $("#product2_url").val(),
            "product3_url"          : $("#product3_url").val(),
        },
        "buttons" : {
            "button1_text"          : $("#button1-text").val(),
            "button1_url"           : $("#button1-url").val(),
            "button1_color"         : $("#button1-color").val(),
            "button1_background"    : $("#button1-background").val(),
            "button2_text"          : $("#button2-text").val(),
            "button2_url"           : $("#button2-url").val(),
            "button2_color"         : $("#button2-color").val(),
            "button2_background"    : $("#button2-background").val(),
        },
        "image" : {
            "image_data"            : settings.image.image_data,
            "image_url"             : $("#image-url").val(),
            "image_content"         : "",
            "image_position"        : $("input[name='image-position']:checked").val()
        },
        "animations" : {
            "popup_type"            : $("#popup-type").val(),
            "popup_delay"           : $("#popup-delay").val(),
            "popup_position"        : $("#popup-position").val(),
            "popup_animation"       : $("#popup-animation").val(),
            "popup_auto"            : $("#popup-auto").val()
        },
        "advanced" : {
            "popup_class"           : classObj($("#popup-class").val()),
            "popup_overlay"         : $("input[name='overlay']:checked").val(),
            "popup_mobile"          : $("input[name='mobile']:checked").val(),
            "popup_cancel"          : $("#popup-cancel").val(),
            "popup_cancel_position" : $("#popup-cancel-position").val(),
        }
    };
    if (settings.advanced.popup_cancel == null) settings.advanced.popup_cancel = "";
}
/*   Populate setting values   */
var populateSettings = function(){
    $(".popup-subtitle").html(settings.text.subtitle_text);
    $(".popup-subtitle").attr('style', 'color: #' + settings.text.subtitle_color);
    $(".popup-title").html(settings.text.title_text);
    $(".popup-title").attr('style', 'color: #' + settings.text.title_color);
    $(".popup-description").html(settings.text.description_text);
    $(".popup-description").attr('style', 'color: #' + settings.text.description_color);
    if($('.popup-button1').prop("tagName") == "INPUT"){
        $(".popup-button1").val(settings.buttons.button1_text);
    }else{
        $(".popup-button1").html(settings.buttons.button1_text);
    }
    $(".popup-button1").attr('style', 'color: #' + settings.buttons.button1_color);

    // Form settings
    if (settings.image.image_data === undefined || settings.image.image_data === null || settings.image.image_data == '')
        $(".popup-image").attr('src', settings.image.image_url);
    else
        $(".popup-image").attr('src', settings.image.image_data);
    $("#popup-container").addClass(settings.image.image_position);
}
var generateCode = function (selector, callback) {

    var params = {
        popup_type: settings.animations.popup_type,
        popup_animation: settings.animations.popup_animation,
        popup_position: settings.animations.popup_position,
        popup_closeButtonPlace: settings.advanced.popup_cancel_position,
        popup_css: settings.advanced.popup_class,
        overlay_isVisible: false,
    };
    //https://www.twik.io/css
    //http://localhost:3333
    //"http://www.twik.io/css/normalize.css", "http://www.twik.io/css/components.css", "http://www.twik.io/css/twik-v3.css"
    // var cssList = [ "http://www.twik.io/css/slick.css" ];
    // var cssStr = "";
    // for (var i = 0; i < cssList.length; i++) {
    //     cssStr = cssStr + '<link href="' + cssList[i] + '" rel="stylesheet" type="text/css"> ';
    // }
    // cssStr = cssStr.replace(/>[\n\t ]+</g, "><");
    // var cssScript = "$('" + cssStr + "').appendTo('head');"
    var cssScript = "";
    // var html = '<div id="popup-container" class="popup-container" data-sm-init="true" data-state="success"> ' + $('.popup-container').html() + '</div>';
    var html = settings.html;
    if (html == null) html = "";

    $('div.test').html('');
    settings.formHtml = $('div.test').append($('form').clone()).html();    

    html = html.replace(/>[\n\t ]+</g, "><").replace(/'/g, '&#39;');
    $('div.test').html(html);
    if (settings.formHtml !== undefined && settings.formHtml != null && settings.formHtml != '') {
        $('div.test form').remove();
        $(settings.formHtml).appendTo('div.test div.popup-form-block');
    }
    setSettings();
    populateSettings();

    //slice toggle-off components
    if (selector != '') {
        if (settings.countdown.attached != true && settings.countdown.attached != "true") {
            $('div.test .popup-countdown').remove();
        }
    }

    convertImagesToBase64(selector, function () {
        html = "$('" + $('div.test').html().replace(/>[\n\t ]+</g, "><").replace(/'/g, '&#39;') + "').appendTo('div.regularsection');";
        $('div.test').html('');

        var runScript = "$('.popup-container').SlickModals({ popup_type: '" + settings.animations.popup_type + "', popup_animation: '" + settings.animations.popup_animation + "', popup_position: '" + settings.animations.popup_position + "', popup_closeButtonPlace: '" + settings.advanced.popup_cancel_position + "', popup_css: '" + settings.advanced.popup_class + "', overlay_isVisible: false,});";
        runScript = "var params = " + JSON.stringify(params) + "; $('.popup-container').SlickModals(params);";
        if (settings.countdown.attached == true || settings.countdown.attached == "true") {
            //inject count-down script
            // runScript = runScript + `var _0x6cc0=["\x30","\x67\x65\x74\x54\x69\x6D\x65","\x76\x61\x6C","\x23\x63\x6F\x75\x6E\x74\x64\x6F\x77\x6E\x2D\x76\x61\x6C\x75\x65","\x20\x30\x30\x3A\x30\x30\x3A\x30\x30","\x66\x6C\x6F\x6F\x72","\x68\x74\x6D\x6C","\x2E\x70\x6F\x70\x75\x70\x2D\x68\x6F\x75\x72\x73","\x2E\x70\x6F\x70\x75\x70\x2D\x6D\x69\x6E\x75\x74\x65\x73","\x2E\x70\x6F\x70\x75\x70\x2D\x73\x65\x63\x6F\x6E\x64\x73","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x64\x65\x6D\x6F","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x45\x58\x50\x49\x52\x45\x44"];function formatting(_0x3316x2){return _0x3316x2< 10?_0x6cc0[0]+ _0x3316x2:_0x3316x2}clearInterval($count_down_timer_x);var countDownDate= new Date($(_0x6cc0[3])[_0x6cc0[2]]()+ _0x6cc0[4])[_0x6cc0[1]]();$count_down_timer_x= setInterval(function(){var _0x3316x4= new Date()[_0x6cc0[1]]();var _0x3316x5=countDownDate- _0x3316x4;var _0x3316x6=Math[_0x6cc0[5]](_0x3316x5/ (1000* 60* 60* 24));var _0x3316x7=Math[_0x6cc0[5]]((_0x3316x5% (1000* 60* 60* 24))/ (1000* 60* 60));var _0x3316x8=Math[_0x6cc0[5]]((_0x3316x5% (1000* 60* 60))/ (1000* 60));var _0x3316x9=Math[_0x6cc0[5]]((_0x3316x5% (1000* 60))/ 1000);var _0x3316xa=_0x3316x7+ _0x3316x6* 24;if(_0x3316xa> 100){_0x3316xa= 99;_0x3316x8= 59;_0x3316x9= 59};$(_0x6cc0[7])[_0x6cc0[6]](formatting(_0x3316xa));$(_0x6cc0[8])[_0x6cc0[6]](formatting(_0x3316x8));$(_0x6cc0[9])[_0x6cc0[6]](formatting(_0x3316x9));if(_0x3316x5< 0){clearInterval($count_down_timer_x);document[_0x6cc0[12]](_0x6cc0[11])[_0x6cc0[10]]= _0x6cc0[13]}},1000)`;
            runScript = runScript + `function formatting(target){return target<10?'0'+target:target;} var count_down_timer_x = clearInterval(count_down_timer_x);var countDownDate=new Date('${settings.countdown.countdown_value} 00:00:00').getTime();count_down_timer_x=setInterval(function(){var now=new Date().getTime();var distance=countDownDate-now;var days=Math.floor(distance/(1000*60*60*24));var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));var minutes=Math.floor((distance%(1000*60*60))/(1000*60));var seconds=Math.floor((distance%(1000*60))/1000);var hh=hours+days*24;if(hh>100){hh=99;minutes=59;seconds=59;} $(".popup-hours").html(formatting(hh));$(".popup-minutes").html(formatting(minutes));$(".popup-seconds").html(formatting(seconds));if(distance<0){clearInterval(count_down_timer_x);document.getElementById("demo").innerHTML="EXPIRED";}},1000);`;
        }
        // runScript = '$.getScript("https://cdn.twik.io/generator/js/jquery.slickmodal.min.js", function () {' + runScript + '});';

        callback(cssScript + html + runScript);
    });
}
var convertFileToBase64 = function(file, callback) {

    let reader = new FileReader();
    let filename = file.name;
    reader.onload = function(e) {
        callback(filename, e.target.result);
    }
    reader.readAsDataURL(file);
}

var convertImgToBase64 = function (img, callback) {
    if (img === undefined) callback('');
    var url = img.src;
    var outputFormat = "image/png";
    if (url.startsWith('data:image/')) {
        callback(url);
        return;
    }
    if (CONFIG.base64_online == false && url.startsWith('http') == true) {
        callback(url);
        return;
    }
    
    img.onload = function () {        
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL = '';
        var ratioX = img.width * 1.0 / img.naturalWidth;
        var ratioY = img.height * 1.0 / img.naturalHeight;
        var ratio = (ratioX > ratioY) ? ratioX : ratioY;
        if (ratio > 1.0) ratio = 1.0;
        canvas.height = img.naturalHeight * ratio;
        canvas.width = img.naturalWidth * ratio;
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, canvas.width, canvas.height);
        try {
            dataURL = canvas.toDataURL(outputFormat);
        }catch(e) {
            dataURL = this.src;
            console.log(e);
        }
        callback (dataURL);
        this.onload = undefined;
    }
    if (img.complete == true) {
        img.onload();
    }
}

var convertImageToBase64 = function (url, callback) {
    $('div.test').html('');
    $img = $('.popup-container img');
    if ($img[0] === undefined) {
        $('div.test').append($('<img>'));
    } else {
        $('div.test').append($img.clone());
    }
    var img = $('div.test img')[0];
    img.src = url;
    convertImgToBase64(img, function(data) {
        $('div.test').html('');
        callback(data);
    });
}

var convertImagesToBase64 = function(selector, callback) {
    if (CONFIG.base64_img == false) {
        callback();
        return;
    }
    var deferreds = [];
    $(selector).each(function() {        
        var deferred = $.Deferred();
        $(this).one('load', deferred.resolve);
        deferreds.push(deferred);
    });
    $.when.apply($, deferreds).done(function() {
        $(selector).each(function() {
            var img = $(this)[0];
            convertImgToBase64(img, function (data) {
                img.src = data;
            });
        });
        callback();
    }).fail(function() {
        console.log('fail to convertImagesToBase64');
        callback();
    });
}
var classFormat = function(val){
    var ret = "";
    for(let [key, value] of Object.entries(val)){
        ret += key + ": " + value + "; ";
    }
    return ret;
}
var classObj = function(cssStr){
    var fields = cssStr.split('; ');
    var obj = new Object();
    for (var i = fields.length - 1; i >= 0; i--) {
        var itemStr = fields[i];
        if (itemStr == "") continue;
        var items = itemStr.split(': ');
        obj[items[0]] = items[1];
    }
    return obj;
}

var setProduct = function(url, idx){
    // $.ajax({
    //     crossOrigin: true,
    //     url: url,
    //     success: function(data) {
    //         console.log(data);
    //     }
    // });
    // $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data){
    //     alert(data.contents);
    // });
    //https://cors-anywhere.herokuapp.com/https://themes.woocommerce.com/storefront/product/lowepro-slingshot-edge-250-aw
    scrapeProduct(url, idx);
    return;

    var _url = "https://cors-anywhere.herokuapp.com/" + url;
    var xhr=null;
    try
    {
        xhr = new XMLHttpRequest(); 
    } catch(e)
    { 
            try { xhr = new ActiveXObject("Msxml2.XMLHTTP"); } 
            catch (e2)
        { 
            try { xhr = new ActiveXObject("Microsoft.XMLHTTP"); } 
            catch (e) {}
        }
    }
    xhr.onload = function() {
        console.log(`Loaded: ${xhr.status} ${xhr.response}`);
      };
    xhr.open("GET", _url, true);
    xhr.send(null);
    setTimeout(() => {
        let headers = xhr
        .getAllResponseHeaders()
        .split('\r\n')
        .reduce((result, current) => {
            let [name, value] = current.split(': ');
            result[name] = value;
            return result;
        }, {});
        console.log('response header', headers)
    }, 3000);
}

function formatting(target) {
  return target < 10 ? '0' + target : target;
}

function dateString(date) {
    var dd = formatting(date.getDate());
    var mm = formatting(date.getMonth()+1); //January is 0!
    var yyyy = date.getFullYear();
    var str = yyyy + "-" + mm + "-" + dd;
    return str
}

$(document).ready(function(){
    
    /*  -Switch button check-  */
    for(var item of $('input[name$="-switch"]:checked')){
        if($(item).val() == "true"){
            $("." + $(item).attr('name').split("-")[0] + "-div").show(300);
        }else{
            $("." + $(item).attr('name').split("-")[0] + "-div").hide(300);
            $("." + $(item).attr('name').split("-")[0] + "-div").find("input[type='text']").val("");
        }
    }
    /*   -Switch button check end-   */
    /*   -Populate-   */
    generateCode('', function (code) {
        console.log(code);
        eval(code);

        // setSettings();
        // populateSettings();
    });
    
    /*   -Populate end-   */
})
/*   -Switch button control-   */
$('input[name$="-switch"]').click(function(){
    if($(this).val() == "true"){
        $("." + $(this).attr('name').split("-")[0] + "-div").show(300);
    }else{
        $("." + $(this).attr('name').split("-")[0] + "-div").hide(300);
        $("." + $(this).attr('name').split("-")[0] + "-div").find("input").val("");
        $("." + $(this).attr('name').split("-")[0] + "-div").find("input").trigger('change');
    }
})
/*   -Switch button control end-   */

/*   -Modifying settings-   */
$("input").on('keyup', function(){
    switch($(this).attr('id')){
        case 'subtitle-text':
            $(".popup-subtitle").html($(this).val());
            break;
        case 'title-text':
            $(".popup-title").html($(this).val());
            break;
        case 'description-text':
            $(".popup-description").html($(this).val());
            break;
        case 'button1-text':
            $(".popup-button1").val($(this).val());
            if($('.popup-button1').prop("tagName") == "INPUT"){
                $(".popup-button1").val($(this).val());
            }else{
                $(".popup-button1").html($(this).val());
            }
            break;
        case 'button1-url':
            $(".popup-form").attr('action', $(this).val());
            break;
        case 'image-url':
            let prevUrl = $('.popup-image-full img').attr('src');
            let newUrl = $(this).val();
            settings.image.image_url = newUrl;
            settings.image.image_data = undefined;
            var img = $('.popup-image')[0];
            img.src = newUrl;
            break;
        case 'product1_url':
            setProduct($(this).val(), 0);
            break;
        case 'product2_url':
            setProduct($(this).val(), 1);
            break;
        case 'product3_url':
            setProduct($(this).val(), 2);
            break;
        case 'form-url':
            console.log('form-url');
            scrapeGoogleForm($(this).val());
            break;
        case 'subtitle-color':
            $(".popup-subtitle").attr('style', 'color: #' + $(this).val());
            break;
        case 'title-color':
            $(".popup-title").attr('style', 'color: #' + $(this).val());
            break;
        case 'description-color':
            $(".popup-description").attr('style', 'color: #' + $(this).val());
            break;
        case 'button1-color':
            $(".popup-button1").attr('style', 'color: #' + $(this).val());
            break;
        case 'button1-background':
            $(".popup-button1").attr('style', 'background: #' + $(this).val());
            break;
    }
});
$("input").on('change', function(){
    switch($(this).attr('id')){
        case 'subtitle-color':
            $(".popup-subtitle").attr('style', 'color: #' + $(this).val());
            break;
        case 'title-color':
            $(".popup-title").attr('style', 'color: #' + $(this).val());
            break;
        case 'description-color':
            $(".popup-description").attr('style', 'color: #' + $(this).val());
            break;
        case 'button1-color':
            $(".popup-button1").attr('style', 'color: #' + $(this).val());
            break;
        case 'button1-background':
            $(".popup-button1").attr('style', 'background: #' + $(this).val());
            break;
        case 'image-path':
            if(this.files && this.files[0]){
                var file = this.files[0];
                convertFileToBase64(file, function (filename, base64) {                    
                    $('#image-url').val(filename);
                    $img = $('.popup-image-full img')[0];
                    $img.src = base64;
                    convertImgToBase64($img, function (data) {
                        $img.src = data;
                        settings.image.image_url = file.path;
                        settings.image.image_data = data;
                    })
                })
            }
            break;
        case 'image-position':
            $('#popup-container').removeClass('image-left image-on-top image-on-bottom image-right');
            let layout = $(this).val();
            $("#popup-container").addClass(layout);
            if (layout == 'image-on-top' || layout == 'image-on-bottom') {
                //vertical
                $('.sm-popup').width('390px');
            } else {
                //horizontal
                $('.sm-popup').width('780px');
            }
            break;
        case 'countdown-switch':
            console.log($(this).val());
            settings.countdown.attached = $(this).val();
            applyCountdownSetting();
            break;
        case 'countdown-value':
            clearInterval(x);
            if ($(this).val()) {
                settings.countdown.countdown_value = $(this).val();
                var countDownDate = new Date($(this).val()+ ' 00:00:00').getTime();
                x = setInterval(function() {
                    // Get today's date and time
                    var now = new Date().getTime();

                    // Find the distance between now and the count down date
                    var distance = countDownDate - now;

                    // Time calculations for days, hours, minutes and seconds
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    var hh = hours + days * 24;
                    if (hh > 100) {
                        hh = 99;
                        minutes = 59;
                        seconds = 59;
                    }
                    $(".popup-hours").html(formatting(hh));
                    $(".popup-minutes").html(formatting(minutes));
                    $(".popup-seconds").html(formatting(seconds));
                    // If the count down is finished, write some text 
                    if (distance < 0) {
                        clearInterval(x);
                        $('#demo').html("EXPIRED");
                    }
                }, 1000);
            }
            break;
        case 'form-width':
            if($(this).val() == '50'){
                $('form .popup-field').removeClass('field-style-2 w-input');
                $('form .popup-field').addClass('field-50');
                console.log('width-50');
            }else{
                $('form .popup-field').removeClass('field-50');
                $('form .popup-field').addClass('field-style-2 w-input');
                console.log('width-100');
            }
            break;
        default:
            break;
    }
})
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(settings.exportCode).select();
  document.execCommand("copy");
  $temp.remove();
}

/*   -Modifying settings end-   */
$('#image-upload').on('click', function() {
    $('#image-path').click();
})
/*   -Generate code-   */
$("#generate-code").click(function(){
    getSettings();

    var code = generateCode('div.test .popup-container img', function (code) {
        var text = code;
        if (text.length > CONFIG.max_code_length) {
            text = text.substr(0, text.lastIndexOf(' ', CONFIG.max_code_length - 3)) + '...';
        }
        $('.snippetcode').text(text);
        settings.exportCode = code;
    });
});
$('.copyCode').click(function(){
    copyToClipboard('.snippetcode');

    var $this = $(this);
    var originalText = $this.text();
    $this.text('CODE COPIED!').addClass('active');
    setTimeout(function () {
        $this.text(originalText).removeClass('active');
    }, 2000);
});
/*   -Generate code end-   */
 
//Google form
// let accept = true; // accept only one time for valid google form url
// $('#field-googleFormUrl').on('keyup', function(){
//     $(".form-warning").html("");
//     $('.ajax-script').hide();
//     formCode = [];
//     let formURL = $(this).val();
//     $('.google-form form').html("");
//     if(formURL.indexOf('https://docs.google.com/forms') != -1){
//         if(accept){
//             $('.response-form').remove();
//             $('.form-elements').html('');
//             $('.loader').show();
//             $('body').addClass('loading');
//             $.ajax({
//                 url: '/googleFormHandle',
//                 data: {
//                     "_token": $('#csrf-token').val(),
//                     "url": formURL
//                 },
//                 type: 'post',
//                 success: function(res){
//                     $('.loader').hide();
//                     $('body').removeClass('loading');
//                     if(res.status == 'success'){
//                         $('#generator').append(res.data);
//                         googleFormGenerate();
//                     }else{
//                         $(".form-warning").html("This form is private and we're unable to render it. Please make it public and try again.");
//                     }
//                 }
//             });
//         }
//         accept = false;
//     }else{
//         accept = true;
//         $('.google-form').hide();
//         $('.google-form-code').hide();
//         $('.action-buttons').show();
//     }
// })

function scrapeUrl(url, callback) {
    var xhr=null;
    try
    {
        xhr = new XMLHttpRequest(); 
    } 
    catch(e)
    { 
        try { xhr = new ActiveXObject("Msxml2.XMLHTTP"); } 
        catch (e2)
        { 
            try { xhr = new ActiveXObject("Microsoft.XMLHTTP"); } 
            catch (e) {}
        }
    }

    xhr.onload = function() {
        callback(xhr.response);
    };
    // var providers = ['https://cors-anywhere.herokuapp.com/', 'https://crossorigin.me/']
    xhr.open("GET", `https://cors-anywhere.herokuapp.com/${url}`, true);           
    xhr.setRequestHeader('Content-Type', 'text/html');
    xhr.send(null);
}

function displayProductErr(idx, err) {
    var msg = '';
    if (err != undefined) {
        console.log(err.message);
        msg = 'There was error loading the product.';
    }
    $(`.product${idx+1}-div .error`).text(msg);
}

function scrapeProduct(url, idx)
{
    try {
        scrapeUrl(url, function (data) {
            try {
                console.log('scrapped!');
                var prod = getProductInfo(data);
                applyProducInfo(prod, idx);
                displayProductErr(idx)
            }
            catch(err) {
                displayProductErr(idx, err);
            }
        });
    }
    catch(err) {
        displayProductErr(idx, err);
    }
}

function formatCurrency(name, value) {
    if (value === undefined) return '';
    const def = '$';
    var currency_symbols = {
        'USD': '$', // US Dollar
        'EUR': '€', // Euro
        'CRC': '₡', // Costa Rican Colón
        'GBP': '£', // British Pound Sterling
        'ILS': '₪', // Israeli New Sheqel
        'INR': '₹', // Indian Rupee
        'JPY': '¥', // Japanese Yen
        'KRW': '₩', // South Korean Won
        'NGN': '₦', // Nigerian Naira
        'PHP': '₱', // Philippine Peso
        'PLN': 'zł', // Polish Zloty
        'PYG': '₲', // Paraguayan Guarani
        'THB': '฿', // Thai Baht
        'UAH': '₴', // Ukrainian Hryvnia
        'VND': '₫', // Vietnamese Dong
    };

    var currency_name = 'INR';

    if(currency_symbols[name]!==undefined) {
        return currency_symbols[name] + ' ' + value;
    } else {
        return def + ' ' + value;
    }
}

function getProductInfo(htmlString) {
    var products = [];
    const regex = /(?:(?:<!--JSON-LD data generated by ([\w\s]+)-->)?\s*<script type="application\/ld\+json">)([\s{}"@:.,\[\]\-&#'\!;\/\\﻿%?=\w]*)(?:<\/script>)/gm;
    const str = htmlString;
    let m;
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // console.log(m);
        const idxLd = 2;
        var jsonLd = JSON.parse(m[idxLd]);
        // console.log(m.index, m[1], jsonLd['@type'], jsonLd);
        var graphs = [];
        if (jsonLd['@type'] === undefined) {
            graphs = jsonLd['@graph'];
        } else {
            graphs = [jsonLd];
        }
        for (graph of graphs) {
            if (graph['@type'] != 'Product') continue;
            // console.log(m.index, m[1], jsonLd['@type'], jsonLd);
            var info = {
                "title": graph.name, 
                "description": graph.description, 
                "imgUrl": graph.image, 
                "price2": graph.offers[0].price, 
                "lowPrice": graph.offers[0].lowPrice, 
                "highPrice": graph.offers[0].highPrice, 
                "priceCurrency": graph.offers[0].priceCurrency 
            };
            if (info.price2 === undefined) {
                info["price"] = formatCurrency(info.priceCurrency, info.lowPrice) + ' - ' + formatCurrency(info.priceCurrency, info.highPrice);
            } else {
                info["price"] =  formatCurrency(info.priceCurrency, info.price2);
            }
            info["len"] = Object.keys(info).length;
            products.push(info);
        }

        // The result can be accessed through the `m`-variable.
        // m.forEach((match, groupIndex) => {
        //     if (groupIndex == 0) return;
        //     // console.log(`Found match, group ${groupIndex}: ${match}`);
        // });
    }
    var prodIdx = 0, max = 0;
    for (var i = products.length - 1; i >= 0; i--) {
        var prod = products[i];
        if (max < prod.len) {
            max = prod.len;
            prodIdx = i;
        }
    }
    console.log(products[prodIdx]);
    return products[prodIdx];
}

function applyProducInfo(prod, idx) {
    var title = prod.title;
    var price = prod.price;
    var imgUrl = prod.imgUrl;
    if (title != null & price != null && imgUrl != null) {
        $('.popup-product-name:eq('+idx+')').text(title);
        $('.old-price:eq('+idx+')').text(price);
        $('.new-price:eq('+idx+')').text(price);
        $('.popup-product-image:eq('+idx+')').attr('src', imgUrl);
    }
}

//Google Form
function scrapeGoogleForm(url)
{
    scrapeUrl(url, function (data) {
        var formData = getFormData(data);
        applyGoogleForm(formData);
    });

}

function getFormData(htmlString) {
    var el = document.createElement( 'html' );
    el.innerHTML = htmlString;
    var elForm = el.querySelector('form');
    var formAction = elForm.action;
    var formMethod = elForm.method;
    var formTitle = elForm.querySelector('.freebirdFormviewerViewHeaderTitle') ? elForm.querySelector('.freebirdFormviewerViewHeaderTitle').innerText : '';
   
    var FormviewerViewHeaderRequiredLegend = elForm.querySelector('.freebirdFormviewerViewHeaderRequiredLegend') ? elForm.querySelector('.freebirdFormviewerViewHeaderRequiredLegend').innerText : '';

    var mainFieldListContainers = elForm.querySelectorAll('.freebirdFormviewerViewItemList .freebirdFormviewerViewItemsItemItem ');
    var mainFieldList = [];

    mainFieldListContainers.forEach(fieldWrapper => {
        let fieldLabel = fieldWrapper.querySelector('.freebirdFormviewerViewItemsItemItemTitle').innerText;
        let fieldInputArea = fieldWrapper.querySelector('.exportContentArea');
        if (fieldInputArea != null) {
            let fieldInput = fieldInputArea.querySelector('input') ? fieldInputArea.querySelector('input') : fieldInputArea.querySelector('textarea') ? fieldInputArea.querySelector('textarea') : null;
            let placeholder = fieldWrapper.querySelector('.exportLabel') ? fieldWrapper.querySelector('.exportLabel').innerText : '';
            let fieldName = fieldInput.name;
            mainFieldList.push({fieldName, fieldLabel, fieldInput, placeholder});
        }
    })

    var navigationNavControlsWrapper = elForm.querySelector('.freebirdFormviewerViewNavigationNavControls');
    var freebirdFormviewerViewHeaderDescription = elForm.querySelector('.freebirdFormviewerViewHeaderDescription') ? elForm.querySelector('.freebirdFormviewerViewHeaderDescription').innerText: '';

    var submitButtonLabel = navigationNavControlsWrapper.querySelector('.freebirdFormviewerViewNavigationButtons .exportLabel').innerText;

    var hiddenFields = [];

    elForm.querySelectorAll('input[type="hidden"]').forEach(item => {
        hiddenFields.push(item);
    });
    
    return {
        "action": formAction,
        "method": formMethod,
        "title": formTitle,
        "requireLegend": FormviewerViewHeaderRequiredLegend,
        "mainFields": mainFieldList,
        "sub_title": freebirdFormviewerViewHeaderDescription,
        "submit": submitButtonLabel,
        "hiddenFields": hiddenFields
    };
    // return {formAction, formMethod, formTitle, FormviewerViewHeaderRequiredLegend, mainFieldList, freebirdFormviewerViewHeaderDescription, submitButtonLabel, hiddenFields};
}

function applyGoogleForm(formData) {
    var widthClz = ' field-style-2 w-input';
    if ($('#form-width:checked').val() == '50')
        widthClz = ' field-50';

    settings.text.title_text = formData.title;
    settings.text.description_text = formData.sub_title;
    settings.buttons.button1_text = formData.submit;

    var mainFieldList = formData.mainFields;
    var html = '';
    for (var i = 0; i < mainFieldList.length; i++) {
        var field = mainFieldList[i];
        html = html + `<input type="text" class="popup-field ${widthClz}" maxlength="256" name="${field.fieldName}" data-name="${field.fieldName}" id="${field.fieldName}" placeholder="${field.fieldLabel}">` + "\n";
    }
    html = html + `<input type="submit" value="" data-wait="Please wait..." class="popup-main-button w-button popup-button1">`;

    $frm = $('form');
    $frm.html(html);
    $frm.attr('action', formData.action);
    $frm.attr('method', formData.method);

    applyFormSetting();
    populateSettings();

    return html;
}

//Form generator
function googleFormGenerate(){
    formAction = $('form').attr('action');
    let formTitle = $('form').find('.exportFormTitle').html();
    let elements = [];
    for(let element of $("[role='listitem']")){
        let placeholder = $(element).find('.freebirdFormviewerViewItemsItemItemTitle').text();
        let tag = $(element).find('.exportContentArea').children().prop("tagName");
        let name;
        let type;
        if(tag == "DIV"){
            name = $(element).find('.exportContentArea').children().children().attr('name');
            tag = $(element).find('.exportContentArea').children().children().prop("tagName");
            type = $(element).find('.exportContentArea').children().children().attr('type')
        }else{
            name = $(element).find('.exportContentArea').children().attr('name');
        }
        if(tag == undefined){
            $(".form-warning").html("This form is private and we're unable to render it. Please make it public and try again.");
        }else{
            elements.push({
                'placeholder': placeholder,
                'tag': tag,
                'name': name,
                'type': type
            });
        }
    }
    if(elements.length > 0){
        $('.response-form').css('display', 'none');
        $('.google-form').show();
        $('.google-form-code').show();
        $('.action-buttons').hide();
        $('.form-elements').text("");
        for(let element of elements){
            switch(element.tag){
                case 'INPUT':
                    let input = "";
                    if(element.placeholder.indexOf("*") > 0){
                        input = "<" + element.tag + ' name="' + element.name + '" placeholder="' + element.placeholder + '" type="' + element.type + '" class="google-input" required/>';
                    }else{
                        input = "<" + element.tag + ' name="' + element.name + '" placeholder="' + element.placeholder + '" type="' + element.type + '" class="google-input" />';
                    }
                    $('.google-form form').append($(input));
                    let inputCode = "";
                    inputCode = "$('<input name=\"" + element.name + "\" placeholder=\"" + element.placeholder + "\" type=\"" + element.type + "\" class=\"google-input-field\"/>').appendTo('#smForm-1');";
                    formCode.push(inputCode);
                    //$('.form-elements').text($('.form-elements').text() + inputCode);
                    break;
                case 'TEXTAREA':
                    let textarea = "<" + element.tag + ' name="' + element.name + '" placeholder="' + element.placeholder + '" type="' + element.type + '" class="google-input"/>';
                    $('.google-form form').append($(textarea));
                    let textCode = "";
                    textCode = "$('<textarea name=\"" + element.name + "\" placeholder=\"" + element.placeholder + "\"  class=\"google-input-field\"></textarea>').appendTo('#smForm-1');";
                    formCode.push(textCode);
                    //$('.form-elements').text($('.form-elements').text() + textCode);
                    break;
                default:
                    break;
            }
        }
        let submit = "<input type='submit' class='send' value='" + $("#field-buttonText").val() + "' style='background-color: #" + $('#field-buttonPrimaryColor').val() + "'/>";
        let cancel = "<input type='button' class='cancel' value='" + $("#field-buttonSecondaryText").val() + "' style='background-color: #" + $('#field-buttonSecondaryColor').val() + "'/>";

        $('.google-form form').append($(submit));
        $('.google-form form').append($(cancel));
        
        $('.form-title').html(formTitle);
        $('.form-action').html(formAction);
        $('.ajax-script').show();
        //$('.google-form form').attr('action', formAction);
        $('.google-form .form-title').html(formTitle);
    }
        }