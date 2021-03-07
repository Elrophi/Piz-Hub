$(document).ready(function(){
    $('button#btn-man').hide();
    $('select#size-name')
})

$(document).ready(function(){
    event.preventDefault();
    $('.navbar-toggler').slideToggle("slow");
})

$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.form-slide').slideToggle("fast")
    });
})


$(document).ready(function(){
    $('.custom-select').click(function(){
        $('.btn').show("slow")
    });
})
