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
    // var myCheck = document.getElementById('ch1');

    let piz = new Pizza(mySize, myCrust, myTop);
    if(myTop == "No" || mySize == "No"){
        alert('please select a size and flavour')
    }else{
    // document.getElementById('popForm').style.display = "block"; 
    var res = prompt("How many would you like to order");
    if(res == 0){
        alert("Pick a valid number")
        $('.form-slide').show()
        document.getElementById('size-name').value="No";
        document.getElementById('crust-name').value="No";
        document.getElementById('top-name').value="No";
        // document.getElementById('ch1').value = "";
    }else{
        var add = prompt("For delivery to your home enter your address (fee = 250kshs)! if not just type NO")
        document.getElementById('theDeliv').innerHTML = add;
        document.getElementById('theNo').innerHTML = res;
        document.getElementById('theSize').innerHTML = mySize;
        document.getElementById('theCrust').innerHTML = myCrust;
        document.getElementById('theTop').innerHTML = myTop;
        document.getElementById('popForm').style.display = "block"; 
    }
    }

    var final = total * res;

    if(mySize == "Small" && add == "NO"){
        if(res){
            document.getElementById('total').innerHTML = "kshs " + 800 + " * " + (res);
        }else 
        document.getElementById('total').innerHTML = "kshs " + 800 ; 
    }else if(mySize == "Medium" && add == "NO"){
        if(res){
            document.getElementById('total').innerHTML = "kshs " + 1000 + " * " + (res); 
        }else
        document.getElementById('total').innerHTML = "kshs " + 1000; 

    }else if(mySize == "Large" && add =="NO"){
        if(res){
            document.getElementById('total').innerHTML = "kshs " + 1200 + " * " + (res); 
        }else
        document.getElementById('total').innerHTML = "kshs " + 1200; 

    }else if(mySize == "Small"){
        if(res){
            document.getElementById('total').innerHTML = "kshs " + 1050 + " * " + (res);
        }else
        document.getElementById('total').innerHTML = 1050 + "kshs "; 

    }else if(mySize == "Medium"){
        if(res){
            document.getElementById('total').innerHTML = "kshs " + 1250 + " * " + (res);
        }else
        document.getElementById('total').innerHTML = "kshs " + 1250; 

    }else if(mySize == "Large"){
        if(res){
            document.getElementById('total').innerHTML = "kshs " + 1450 + " * " + (res);
        }
        document.getElementById('total').innerHTML = "kshs " + 1450; 

    }
    
}

function exitForm(){
    document.getElementById('popForm').style.display = "none";
    document.getElementById('form-slide').reset();

    document.getElementById('size-name').value="0";
    document.getElementById('crust-name').value="0";
    document.getElementById('top-name').value="0";
    

}

function checkout(){
    event.preventDefault()
    var name = prompt("enter your name");
    document.getElementById('theName').innerHTML = "Boss "+ name + " Your request has been accepted give us 30mins";


}

$('.btn').on('click', function() { 
    var arr = []; 
    $("input:checked").each(function() { 
        arr.push($(this).val()); 
    }); 
    $('#theTops').text(arr.join(", ")); 
}); 


 