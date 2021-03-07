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

Pizza.prototype.fullPizza = function(){
    return this.size + "\n";
}

function myForm(){
    event.preventDefault()

    var mySize = document.getElementById('size-name').value;
    var myCrust = document.getElementById('crust-name').value;
    var myTop = document.getElementById('top-name').value;

    let piz = new Pizza(mySize, myCrust, myTop);
    if(mySize == "No"){
        alert('please select a size')
    }else{
    // document.getElementById('popForm').style.display = "block"; 
    var res = prompt("How many would you like to order");
    document.getElementById('theNo').innerHTML = res;
    document.getElementById('theSize').innerHTML = mySize;
    document.getElementById('theCrust').innerHTML = myCrust;
    document.getElementById('theTop').innerHTML = myTop;
    document.getElementById('popForm').style.display = "block"; 

    }
}

function exitForm(){
    event.preventDefault()
    document.getElementById('popForm').style.display = "none";

    document.getElementById('size-name').value="0";
    document.getElementById('crust-name').value="0";
    document.getElementById('top-name').value="0";

}