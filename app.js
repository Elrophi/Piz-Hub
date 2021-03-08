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
    var myCheck = document.getElementById('ch1');

    let piz = new Pizza(mySize, myCrust, myTop, myCheck);
    if(myTop == "No" || mySize == "No"){
        alert('please select a size and flavour')
    }else{
    // document.getElementById('popForm').style.display = "block"; 
    var res = prompt("How many would you like to order");
    var add = prompt("For delivery to your home enter your address (fee = 250kshs)! if not just type NO")
    if(res == 0){
        $('.form-slide').show()
        document.getElementById('size-name').value="No";
        document.getElementById('crust-name').value="No";
        document.getElementById('top-name').value="No";
        document.getElementById('ch1').value = "";
    }else{
        document.getElementById('theDeliv').innerHTML = add;
        document.getElementById('theNo').innerHTML = res;
        document.getElementById('theSize').innerHTML = mySize;
        document.getElementById('theCrust').innerHTML = myCrust;
        document.getElementById('theTop').innerHTML = myTop;
        document.getElementById('popForm').style.display = "block"; 
    }
    }
    
}

function exitForm(){
    event.preventDefault()
    document.getElementById('popForm').style.display = "none";

    document.getElementById('size-name').value="0";
    document.getElementById('crust-name').value="0";
    document.getElementById('top-name').value="0";
    document.getElementById('ch1').value = "";


}



// var markedCheckbox = document.getElementsById('ch1').value;  
//         for (var checkbox of markedCheckbox) {  
//           if (checkbox.checked)  
//             document.getElementById('theTops').value = checkbox;  
//       }  