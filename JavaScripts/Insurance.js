    const styleFocusButton = "btn_c1--focus";
    const styleFocusButton2 = "btn_c1--focus-2";
    const styleFocusTab = "item_c2--focus";
$(document).ready(function () {
   showContent(jQuery('.btn_c1 > button').first() ,'doimoi');
});
    function showContent(event,idContent) {
        const button = jQuery(event);
        jQuery('#' + idContent).show();
        jQuery('#' + idContent).siblings().hide();
        button.parents('.menu_item').children('.btn_c2').show();
        button.parents('.menu_item').siblings().children('.btn_c2').hide();
        focusButton(button);
    };

    function focusButton(button) {
        const otherButton = button.parents('.menu_item').siblings().find(".btn_c1 > button");
        if(button.parents(".menu_item").children('.btn_c2').length == 0){
            button.addClass(styleFocusButton);
        } else {
            if(button.attr('class') == 'item_c2'){
                button.addClass(styleFocusTab);
                button.parent("div").siblings().find("button").removeClass(styleFocusTab);
            } else {
                tabButton = button.parents('.menu_item').find('.btn_c2 > div > button');
                tabButton.removeClass(styleFocusTab);
                tabButton.first().addClass(styleFocusTab);
                button.addClass(styleFocusButton);
            }
        }
        otherButton.removeClass(styleFocusButton);
        otherButton.removeClass(styleFocusButton2);
    }