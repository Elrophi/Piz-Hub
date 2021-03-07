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


function Pizza(size, crust, topping){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}


function myForm(){
    event.preventDefault()

    var mySize = document.getElementById('size-name').value;
    var myCrust = document.getElementById('crust-name').value;
    var myTop = document.getElementById('top-name').value;

    let piz = new Pizza(mySize, myCrust, myTop);
    if(mySize == "0"){
        alert('please select size')
    }else{
    document.getElementById('popForm').style.display = "block"; 
    }
}

function exitForm(){
    event.preventDefault()
    document.getElementById('popForm').style.display = "none";

}