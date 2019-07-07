/*   Set values to inputs from settings   */
var setSettings = function(){
    $("#subtitle-text").val(settings.text.subtitle_text);
    $("#subtitle-color").val(settings.text.subtitle_color);
    $("#title-text").val(settings.text.title_text);
    $("#title-color").val(settings.text.title_color);
    $("#description-text").val(settings.text.description_text);
    $("#description-color").val(settings.text.description_color)
    $("#countdown-value").val(settings.countdown.countdown_value);
    $("#form-url").val(settings.form.form_url);
    //$("input[name='form-width']:checked").val()
    $("#product1_url").val(settings.products.product1_url);
    $("#product2_url").val(settings.products.product2_url);
    $("#product3_url").val(settings.products.product3_url);
    $("#button1-text").val(settings.buttons.button1_text);
    $("#button1-url").val(settings.buttons.button1_url);
    $("#button1-color").val(settings.buttons.button1_color);
    $("#button1-background").val(settings.buttons.button1_background);
    $("#button2-text").val(settings.buttons.button2_text);
    $("#button2-url").val(settings.buttons.button2_url);
    $("#button2-color").val(settings.buttons.button2_color);
    $("#button2-background").val(settings.buttons.button2_background);
    $("#image-url").val(settings.image.image_url);
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
        "text" : {
            "subtitle_text"         : $("#subtitle-text").val(),
            "subtitle_color"        : $("#subtitle-color").val(),
            "title_text"            : $("#title-text").val(),
            "title_color"           : $("#title-color").val(),
            "description_text"      : $("#description-text").val(),
            "description_color"     : $("#description-color").val()
        },
        "countdown" : {
            "countdown_value"       : $("#countdown-value").val()
        },
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
            "popup_class"           : $("#popup-class").val(),
            "popup_overlay"         : $("input[name='overlay']:checked").val(),
            "popup_mobile"          : $("input[name='mobile']:checked").val(),
            "popup_cancel"          : $("#popup-cancel").val(),
            "popup_cancel_position" : $("#popup-cancel-position").val(),
        }
    }
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
    $(".popup-image").attr('src', settings.image.image_url);
    $("#popup-container").addClass(settings.image.image_position);
}
var trySettings = function () {
    $('.popup-container').SlickModals({
        popup_type: settings.animations.popup_type,
        popup_animation: settings.animations.popup_animation,
        popup_position: settings.animations.popup_position,
        popup_closeButtonPlace: settings.advanced.popup_cancel_position,
        popup_css: settings.advanced.popup_class,
        overlay_isVisible: false,
    });
}
var classFormat = function(val){
    var ret = "";
    for(let [key, value] of Object.entries(val)){
        ret += key + ": " + value + "; ";
    }
    return ret;
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
    setSettings();
    populateSettings();
    trySettings();
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
$("input").on('change keyup', function(){
    switch($(this).attr('id')){
        case 'subtitle-text':
            $(".popup-subtitle").html($(this).val());
            break;
        case 'subtitle-color':
            $(".popup-subtitle").attr('style', 'color: #' + $(this).val());
            break;
        case 'title-text':
            $(".popup-title").html($(this).val());
            break;
        case 'title-color':
            $(".popup-title").attr('style', 'color: #' + $(this).val());
            break;
        case 'description-text':
            $(".popup-description").html($(this).val());
            break;
        case 'description-color':
            $(".popup-description").attr('style', 'color: #' + $(this).val());
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
        case 'button1-color':
            $(".popup-button1").attr('style', 'color: #' + $(this).val());
            break;
        case 'button1-background':
            $(".popup-button1").attr('style', 'background: #' + $(this).val());
            break;
        case 'image-url':
            let prevUrl = $('.popup-image-full img').attr('src');
            let newUrl = $(this).val();
            $('.popup-image').attr('src', $(this).val());
            break;
        case 'image-path':
            if(this.files && this.files[0]){
                let reader = new FileReader();
                let filename = this.files[0].name;
                reader.onload = function(e) {
                    $('#image-url').val(filename);
                    $('.popup-image-full').html("");
                    $('.popup-image-full').append("<img style='max-width: 100%; max-height: 360px;' src='" + e.target.result + "'/>");
                }
                reader.readAsDataURL(this.files[0]);
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
        default:
            break;
    }
})
/*   -Modifying settings end-   */
$('#image-upload').on('click', function() {
    $('#image-path').click();
})
/*   -Generate code-   */
$("#generate-code").click(function(){
    settings = {
        "text" : {
            "subtitle_text"         : $("#subtitle-text").val(),
            "subtitle_color"        : $("#subtitle-color").val(),
            "title_text"            : $("#title-text").val(),
            "title_color"           : $("#title-color").val(),
            "description_text"      : $("#description-text").val(),
            "description_color"     : $("#description-color").val()
        },
        "countdown" : {
            "countdown_value"       : $("#countdown-value").val()
        },
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
            "popup_class"           : $("#popup-class").val(),
            "popup_overlay"         : $("input[name='overlay']:checked").val(),
            "popup_mobile"          : $("input[name='mobile']:checked").val(),
            "popup_cancel"          : $("#popup-cancel").val(),
            "popup_cancel_position" : $("#popup-cancel-position").val(),
        }
    }
})
/*   -Generate code end-   */