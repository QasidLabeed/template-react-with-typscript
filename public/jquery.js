$(document).ready(function(){
    
    $('body').delegate('#all_categories,#all_categories_ul_list','click',function(e){
        if(!$('#all_categories').hasClass('openBox'))
        {
            e.stopPropagation();
            $('#all_categories_ul_list').toggle(500);   
            $('#all_categories').addClass('openBox');
        }else{
        $('#all_categories').removeClass('openBox')
        }
    });



    $('body').delegate('#all_tags,#all_tags_ul_list','click',function(e){
        if(!$('#all_tags').hasClass('openBox'))
        {
            e.stopPropagation();
            $('#all_tags_ul_list').toggle(500);   
            $('#all_tags').addClass('openBox');
        }else{
        $('#all_tags').removeClass('openBox')
        }
    });


})
$('body').click(function(){
    $('#all_categories_ul_list').hide();
    $('#all_tags_ul_list').hide();
});