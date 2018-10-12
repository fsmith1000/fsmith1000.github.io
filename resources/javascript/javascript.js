// All javascript was validated using
// http://esprima.org/demo/validate.html

// Global Variables

var check = 0;


// Contact

//------------------- Button Selection -----------------------------------

function email() {
    var x = document.getElementById('email');
    var y = document.getElementById('mailinglist')
    var z = document.getElementById('clubmember');
    userselection(x,y,z)
    }
    
function club() {
	var x = document.getElementById('clubmember');
    var y = document.getElementById('email');
    var z = document.getElementById('mailinglist');
    userselection(x,y,z)
    }
    	
function mailing() {
	var x = document.getElementById('mailinglist');
    var y = document.getElementById('email');
    var z = document.getElementById('clubmember');
    userselection(x,y,z)
    }
    
function userselection(x,y,z) { 
	reseterrors()
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    	}
    	y.style.display = 'none'
    	z.style.display = 'none'
    }
    

//------------------- Error Reset -----------------------------------

function reseterrors() {

	// Email Address
	
	document.getElementById("errorem1").innerHTML = "";
	document.getElementById("errorem2").innerHTML = "";
	document.getElementById("errorem3").innerHTML = "";
	
	
	document.getElementById("errorem11").style.removeProperty( 'border' );
    document.getElementById("errorem22").style.removeProperty( 'border' );
    document.getElementById("errorem33").style.removeProperty( 'border' );
	
	// First Name
	
	document.getElementById("errorfn1").innerHTML = "";
	document.getElementById("errorfn2").innerHTML = "";
   	document.getElementById("errorfn3").innerHTML = "";
   	
   	document.getElementById("errorfn11").style.removeProperty( 'border' );
   	document.getElementById("errorfn22").style.removeProperty( 'border' );
	document.getElementById("errorfn33").style.removeProperty( 'border' );
	
	// Last Name
	
	document.getElementById("errorln1").innerHTML = "";
	document.getElementById("errorln2").innerHTML = "";
	document.getElementById("errorln3").innerHTML = "";
	
	document.getElementById("errorln11").style.removeProperty( 'border' );
   	document.getElementById("errorln22").style.removeProperty( 'border' );
	document.getElementById("errorln33").style.removeProperty( 'border' );
	
	// Street
	
	document.getElementById("errorse2").innerHTML = "";
	document.getElementById("errorse3").innerHTML = "";
	
	document.getElementById("errorse22").style.removeProperty( 'border' );
   	document.getElementById("errorse33").style.removeProperty( 'border' );
	
	// City
	
	document.getElementById("errorct2").innerHTML = "";
	document.getElementById("errorct3").innerHTML = "";
	
	document.getElementById("errorct22").style.removeProperty( 'border' );
   	document.getElementById("errorct33").style.removeProperty( 'border' );
			
	// State
	
	document.getElementById("errorst2").innerHTML = "";
	document.getElementById("errorst3").innerHTML = "";
	
	document.getElementById("errorst22").style.removeProperty( 'border' );
   	document.getElementById("errorst33").style.removeProperty( 'border' );
	
	// Zipcode
	
	document.getElementById("errorzp2").innerHTML = "";
	document.getElementById("errorzp3").innerHTML = "";
	
	document.getElementById("errorzp22").style.removeProperty( 'border' );
   	document.getElementById("errorzp33").style.removeProperty( 'border' );
	
	// Phone
	
	document.getElementById("errorph2").innerHTML = "";
	
	document.getElementById("errorph22").style.removeProperty( 'border' );
	
	// Payment
	
	document.getElementById("errorpy2").innerHTML = "";
	
	document.getElementById("errorpy22").style.removeProperty( 'border' );
	
	}
	





// ------------------ Validation ------------------------------------


//------------------- Email Validation ------------------------------

function valemail(x) {
    
    // Assign array
    
    var y = x.indexOf("@");
    var z = x.lastIndexOf(".");
    check = 0;
    
    // return Bad
    
    if (y < 3 || z < (y + 3) ||  x.length <= z + 2 ) {
        document.getElementById("errorem1").innerHTML = "Invalid Email Address.";
        document.getElementById("errorem2").innerHTML = "Invalid Email Address.";
        document.getElementById("errorem3").innerHTML = "Invalid Email Address.";
        document.getElementById("errorem11").style.border = "thick solid #FFB6C1";
    	document.getElementById("errorem22").style.border = "thick solid #FFB6C1";
    	document.getElementById("errorem33").style.border = "thick solid #FFB6C1";
    	check = check - 1;
        return false;
        
    // Return Good
    
    } else {
    	document.getElementById("errorem1").innerHTML = "";
    	document.getElementById("errorem2").innerHTML = "";
    	document.getElementById("errorem3").innerHTML = "";
    	document.getElementById("errorem11").style.removeProperty( 'border' );
    	document.getElementById("errorem22").style.removeProperty( 'border' );
    	document.getElementById("errorem33").style.removeProperty( 'border' );
    	return true;
    	}
    }	
 
//------------------- Email Validation FAQ-------------------------------   
// I wanted to have just one function, but I wasn't able to since I designed it for one page.
// I found a way to pass the ID of the form into the function, but I dont have the time to 
// modify the functions. I wish I remembered that I had more forms on other pages!
    
function valemailfaq(x) {
    
    // Assign array
    
    var y = x.indexOf("@");
    var z = x.lastIndexOf(".");
    check = 0;
    
    // return Bad
    
    if (y < 3 || z < (y + 3) ||  x.length <= z + 2 ) {
        document.getElementById("errorem4").innerHTML = "Invalid Email Address.";
        document.getElementById("errorem44").style.border = "thick solid #FFB6C1";
    	check = check - 1;
        return false;
        
    // Return Good
    
    } else {
    	document.getElementById("errorem4").innerHTML = "";
    	document.getElementById("errorem44").style.removeProperty( 'border' );
    	return true;
    	}
    }	

//------------------- Name Validation Contact -------------------------------
    
function valnames(x,y) {

	var z = "0";

	// First Name
	
	var first = indexall(x);
	first = indexodds(x,first);
	first = indexuse(x,first);
	
	// Last Name
	
	var last = indexall(y);
	last = indexodds(y,last);
	last = indexuse(y,last);
	
	// First Name
	
	if (x == "" || x != "") {
    	if (x == "") {
    		document.getElementById("errorfn1").innerHTML = "Invalid First Name.";
    		document.getElementById("errorfn2").innerHTML = "Invalid First Name.";
    		document.getElementById("errorfn3").innerHTML = "Invalid First Name.";
    		document.getElementById("errorfn11").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorfn22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorfn33").style.border = "thick solid #FFB6C1";
    		z = z + 1;
    	} else if (first != -1) {
    		document.getElementById("errorfn1").innerHTML = "Invalid Character.";
    		document.getElementById("errorfn2").innerHTML = "Invalid Character.";
    		document.getElementById("errorfn3").innerHTML = "Invalid Character.";
    		document.getElementById("errorfn11").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorfn22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorfn33").style.border = "thick solid #FFB6C1";
    		z = z + 1;
		} else {
			document.getElementById("errorfn1").innerHTML = "";
			document.getElementById("errorfn2").innerHTML = "";
			document.getElementById("errorfn3").innerHTML = "";
			document.getElementById("errorfn11").style.removeProperty( 'border' );
    		document.getElementById("errorfn22").style.removeProperty( 'border' );
    		document.getElementById("errorfn33").style.removeProperty( 'border' );
    		}
    	}  	
    	
    // Last Name
	
	if (y == "" || y != "") {
    	if (y == "") {
    		document.getElementById("errorln1").innerHTML = "Invalid Last Name.";
    		document.getElementById("errorln2").innerHTML = "Invalid Last Name.";
    		document.getElementById("errorln3").innerHTML = "Invalid Last Name.";
    		document.getElementById("errorln11").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorln22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorln33").style.border = "thick solid #FFB6C1";
    		z = z + 1;
    	} else if (last != -1) {
    		document.getElementById("errorln1").innerHTML = "Invalid Character.";
    		document.getElementById("errorln2").innerHTML = "Invalid Character.";
    		document.getElementById("errorln3").innerHTML = "Invalid Character.";
    		document.getElementById("errorln11").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorln22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorln33").style.border = "thick solid #FFB6C1";
    		z = z + 1;
		} else {
			document.getElementById("errorln1").innerHTML = "";
			document.getElementById("errorln2").innerHTML = "";
			document.getElementById("errorln3").innerHTML = "";
			document.getElementById("errorln11").style.removeProperty( 'border' );
    		document.getElementById("errorln22").style.removeProperty( 'border' );
    		document.getElementById("errorln33").style.removeProperty( 'border' );
    		}
    	}
    	
    	
    	
    	// False Failed, True Pass
    	
    	if (z > 0) {
    		check = check - 1;
    		return false;
    	} else {
    		return true;
    		}
    }
    

//------------------- Name Validation FAQ-------------------------------
// I wanted to have just one function, but I wasn't able to since I designed it for one page.
// I found a way to pass the ID of the form into the function, but I dont have the time to 
// modify the functions. I wish I remembered that I had more forms on other pages!
   
    
    function valnamesfaq(x,y) {

	var z = "0";

	// First Name
	
	var first = indexall(x);
	first = indexodds(x,first);
	first = indexuse(x,first);
	
	// Last Name
	
	var last = indexall(y);
	last = indexodds(y,last);
	last = indexuse(y,last);
	
	// First Name
	
	if (x == "" || x != "") {
    	if (x == "") {
    		document.getElementById("errorfn4").innerHTML = "Invalid First Name.";
    		document.getElementById("errorfn44").style.border = "thick solid #FFB6C1";
    		z = z + 1;
    	} else if (first != -1) {
    		document.getElementById("errorfn4").innerHTML = "Invalid Character.";
    		document.getElementById("errorfn44").style.border = "thick solid #FFB6C1";
    		z = z + 1;
		} else {
			document.getElementById("errorfn4").innerHTML = "";
    		document.getElementById("errorfn44").style.removeProperty( 'border' );
    		}
    	}  	
    	
    // Last Name
	
	if (y == "" || y != "") {
    	if (y == "") {
    		document.getElementById("errorln4").innerHTML = "Invalid Last Name.";
    		document.getElementById("errorln44").style.border = "thick solid #FFB6C1";
    		z = z + 1;
    	} else if (last != -1) {
    		document.getElementById("errorln4").innerHTML = "Invalid Character.";
    		document.getElementById("errorln44").style.border = "thick solid #FFB6C1";
    		z = z + 1;
		} else {
			document.getElementById("errorln4").innerHTML = "";
    		document.getElementById("errorln44").style.removeProperty( 'border' );
    		}
    	}
    	
    	
    	
    	// False Failed, True Pass
    	
    	if (z > 0) {
    		check = check - 1;
    		return false;
    	} else {
    		return true;
    		}
    }
    
    
//--------- Street, City, State, Zipcode Validation -----------------
    
function valadd(a,b,c,d) {

	var x = "0";
	
	// Street
	
	var street = indexall(a);
	street = indexodds(a,street);
	
	// City
	
	var city = indexall(b);
	city = indexodds(b,city);
	city = indexnum(b,city);
	city = indexuse(b,city);
	
	// State
	
	var state = indexall(c);
	state = indexodds(c,state);
	state = indexnum(c,state);
	state = indexuse(c,state);
	
	// Zipcode
	
	var zip = indexall(d);
	var zipl = d.length;
	zip = indexodds(d,zip);
	zip = indexalpha(d,zip);
	zip = indexuse(d,zip);
	
	// Street
	
    if (a == "" || a != "") {
    	if (a == "") {
    		document.getElementById("errorse2").innerHTML = "Invalid Street Address.";
    		document.getElementById("errorse3").innerHTML = "Invalid Street Address.";
    		document.getElementById("errorse22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorse33").style.border = "thick solid #FFB6C1";
    		x = x + 1;
    	} else if (street != -1) {
    		document.getElementById("errorse2").innerHTML = "Invalid Character.";
    		document.getElementById("errorse3").innerHTML = "Invalid Character.";
    		document.getElementById("errorse22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorse33").style.border = "thick solid #FFB6C1";
    		x = x + 1;
		} else {
			document.getElementById("errorse2").innerHTML = "";
			document.getElementById("errorse3").innerHTML = "";
			document.getElementById("errorse22").style.removeProperty( 'border' );
    		document.getElementById("errorse33").style.removeProperty( 'border' );
    	}
    }
    	
    // City
    	
    if (b == "" || b != "") {
    	if (b == "") {
    		document.getElementById("errorct2").innerHTML = "Invalid City.";
    		document.getElementById("errorct3").innerHTML = "Invalid City.";
    		document.getElementById("errorct22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorct33").style.border = "thick solid #FFB6C1";
    		x = x + 1;
    	} else if (city != -1) {
    		document.getElementById("errorct2").innerHTML = "Invalid Character.";
    		document.getElementById("errorct3").innerHTML = "Invalid Character.";
    		document.getElementById("errorct22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorct33").style.border = "thick solid #FFB6C1";
    		x = x + 1;
		} else {
			document.getElementById("errorct2").innerHTML = "";
			document.getElementById("errorct3").innerHTML = "";
			document.getElementById("errorct22").style.removeProperty( 'border' );
    		document.getElementById("errorct33").style.removeProperty( 'border' );
    	}
    }
    	
    // State
    	
    if (c == "" || c != "") {
    	if (c == "") {
    		document.getElementById("errorst2").innerHTML = "Invalid State.";
    		document.getElementById("errorst3").innerHTML = "Invalid State.";
    		document.getElementById("errorst22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorst33").style.border = "thick solid #FFB6C1";
    		x = x + 1;
    	} else if (state != -1) {
    		document.getElementById("errorst2").innerHTML = "Invalid Character.";
    		document.getElementById("errorst3").innerHTML = "Invalid Character.";
    		document.getElementById("errorst22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorst33").style.border = "thick solid #FFB6C1";
    		x = x + 1;
		} else {
			document.getElementById("errorst2").innerHTML = "";
			document.getElementById("errorst3").innerHTML = "";
			document.getElementById("errorst22").style.removeProperty( 'border' );
    		document.getElementById("errorst33").style.removeProperty( 'border' );
    	}
    }
    	
    // Zip
    	
    if (d == "" || d != "") {
    	if (d == "") {
    		document.getElementById("errorzp2").innerHTML = "Invalid Zipcode.";
    		document.getElementById("errorzp3").innerHTML = "Invalid Zipcode.";
    		document.getElementById("errorzp22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorzp33").style.border = "thick solid #FFB6C1";
    		x = x + 1;
    	} else if (zip != -1) {
    		document.getElementById("errorzp2").innerHTML = "Invalid Character.";
    		document.getElementById("errorzp3").innerHTML = "Invalid Character.";
    		document.getElementById("errorzp22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorzp33").style.border = "thick solid #FFB6C1";
    		x = x + 1;
    	} else if (zipl != 5) {
    		document.getElementById("errorzp2").innerHTML = "Max: 5 Digits.";
    		document.getElementById("errorzp3").innerHTML = "Max: 5 Digits.";
    		document.getElementById("errorzp22").style.border = "thick solid #FFB6C1";
    		document.getElementById("errorzp33").style.border = "thick solid #FFB6C1";
    		x = x + 1;
		} else {
			document.getElementById("errorzp2").innerHTML = "";
			document.getElementById("errorzp3").innerHTML = "";
			document.getElementById("errorzp22").style.removeProperty( 'border' );
    		document.getElementById("errorzp33").style.removeProperty( 'border' );
    		}
    	}
    	
    // False Failed, True Pass
    	
    	if (x > 0) {
    		check = check - 1;
    		return false;
    	} else {
    		return true;
    		}
    }
    

//------------- Phone, Payment Validation ---------------------------

function valpayph(x, y) {  
    	
    var a = 0;	
    	
    // Phone
	
	var phone = indexall(x);
	phone = indexodds(x,phone);
	phone = indexalpha(x,phone);
    
    // Phone
    	
    if (x == "" || x != "") {
    	if (x == "") {
    		document.getElementById("errorph2").innerHTML = "Invalid Phone Number.";
    		document.getElementById("errorph22").style.border = "thick solid #FFB6C1";
    		a = a + 1;
    	} else if (phone != -1) {
    		document.getElementById("errorph2").innerHTML = "Invalid Character.";
    		document.getElementById("errorph22").style.border = "thick solid #FFB6C1";
    		a = a + 1;
		} else {
			document.getElementById("errorph2").innerHTML = "";
			document.getElementById("errorph22").style.removeProperty( 'border' );
    		}
    	}
    	
    // Payment
    
    if (y == "type") {
    	document.getElementById("errorpy2").innerHTML = "Invalid Payment Type.";
    	document.getElementById("errorpy22").style.border = "thick solid #FFB6C1";
    	a = a + 1;
    } else {
    	document.getElementById("errorpy2").innerHTML = "";
    	document.getElementById("errorpy22").style.removeProperty( 'border' );
    }
    
    // False Failed, True Pass
    	
    	if (a > 0) {
    		check = check - 1;
    		return false;
    	} else {
    		return true;
    		}
 }    



// ------------------ Indexes ---------------------------------------

// ------------------ Symbols ---------------------------------------

function indexall(x) {
	// I tried making it shorter, but I dont know of a better way to validate.
	// (! /[A-Za-z]/.test(b)) worked on the first character, but it didn't work after that. 
	
	
	// Holder initialized
	 
	var holder = -1;
	
		if (x.indexOf("!") > -1) {
		holder ++;
		} else if (x.indexOf("@") > -1) {
		holder ++;
		} else if (x.indexOf("$") > -1) {
		holder ++;
		} else if (x.indexOf("%") > -1) {
		holder ++;
		} else if (x.indexOf("^") > -1) {
		holder ++;
		} else if (x.indexOf("*") > -1) {
		holder ++;
		} else if (x.indexOf("_") > -1) {
		holder ++;
		} else if (x.indexOf("=") > -1) {
		holder ++;
		} else if (x.indexOf("+") > -1) {
		holder ++;
		} else if (x.indexOf("{") > -1) {
		holder ++;
		} else if (x.indexOf("}") > -1) {
		holder ++;
		} else if (x.indexOf("[") > -1) {
		holder ++;
		} else if (x.indexOf("]") > -1) {
		holder ++;
		} else if (x.indexOf(":") > -1) {
		holder ++;
		} else if (x.indexOf(";") > -1) {
		holder ++;
		} else if (x.indexOf('"') > -1) {
		holder ++;
		} else if (x.indexOf("'") > -1) {
		holder ++;
		} else if (x.indexOf("<") > -1) {
		holder ++;
		} else if (x.indexOf(",") > -1) {
		holder ++;
		} else if (x.indexOf(">") > -1) {
		holder ++;
		} else if (x.indexOf("/") > -1) {
		holder ++;
		} else if (x.indexOf("?") > -1) {
		holder ++;
		} else if (x.indexOf("~") > -1) {
		holder ++;
		} else if (x.indexOf("`") > -1) {
		holder ++;
		} else if (x.indexOf("&") > -1) {
		holder ++;
		} else if (x.indexOf(".") > -1) {
		holder ++;
		} 
		
	// Pass -1 back or 0 back.
	
	return holder;
	}
    

// ------------------ Symbol Only for Street -------------------------

function indexodds(x,y) {
	
	// Set holder to previous number.
	
	var holder = y;
	
	if (x.indexOf("#") > -1) {
		holder ++;
		} 
	
	// Pass new value back.
	
	return holder;
	}
	

// ------------------ Symbols for Phone -------------------------------
	
function indexuse(x,y) {

	// Set holder to previous number.
	
	var holder = y;
	
	if (x.indexOf("-") > -1) {
		holder ++;
	} else if (x.indexOf("(") > -1) {
		holder ++;
	} else if (x.indexOf(")") > -1) {
		holder ++;
		}
		
	// Pass new value back.
		
	return holder;
	}
	

// ------------------ Numbers ---------------------------------------
	
function indexnum(x,y) {

	// Set holder to previous number.
	
	var holder = y;
	
	if (x.indexOf("1") > -1) {
		holder ++;
		} else if (x.indexOf("2") > -1) {
		holder ++;
		} else if (x.indexOf("3") > -1) {
		holder ++;
		} else if (x.indexOf("4") > -1) {
		holder ++;
		} else if (x.indexOf("5") > -1) {
		holder ++;
		} else if (x.indexOf("6") > -1) {
		holder ++;
		} else if (x.indexOf("7") > -1) {
		holder ++;
		} else if (x.indexOf("8") > -1) {
		holder ++;
		} else if (x.indexOf("9") > -1) {
		holder ++;
		} else if (x.indexOf("0") > -1) {
		holder ++;
		}
		
		// Pass new value back.
		
		return holder;
	}


// ------------------ Alphabet ---------------------------------------

function indexalpha(x,y) {

	// Set holder to previous number.
	
	var holder = y;
	
	if (x.indexOf("a") > -1) {
		holder ++;
		} else if (x.indexOf("A") > -1) {
		holder ++;
		} else if (x.indexOf("b") > -1) {
		holder ++;
		} else if (x.indexOf("B") > -1) {
		holder ++;
		} else if (x.indexOf("c") > -1) {
		holder ++;
		} else if (x.indexOf("C") > -1) {
		holder ++;
		} else if (x.indexOf("d") > -1) {
		holder ++;
		} else if (x.indexOf("D") > -1) {
		holder ++;
		} else if (x.indexOf("e") > -1) {
		holder ++;
		} else if (x.indexOf("E") > -1) {
		holder ++;
		} else if (x.indexOf("f") > -1) {
		holder ++;
		} else if (x.indexOf("F") > -1) {
		holder ++;
		} else if (x.indexOf("g") > -1) {
		holder ++;
		} else if (x.indexOf("G") > -1) {
		holder ++;
		} else if (x.indexOf("h") > -1) {
		holder ++;
		} else if (x.indexOf("H") > -1) {
		holder ++;
		} else if (x.indexOf("i") > -1) {
		holder ++;
		} else if (x.indexOf("I") > -1) {
		holder ++;
		} else if (x.indexOf("j") > -1) {
		holder ++;
		} else if (x.indexOf("J") > -1) {
		holder ++;
		} else if (x.indexOf("k") > -1) {
		holder ++;
		} else if (x.indexOf("K") > -1) {
		holder ++;
		} else if (x.indexOf("l") > -1) {
		holder ++;
		} else if (x.indexOf("L") > -1) {
		holder ++;
		} else if (x.indexOf("m") > -1) {
		holder ++;
		} else if (x.indexOf("M") > -1) {
		holder ++;
		} else if (x.indexOf("n") > -1) {
		holder ++;
		} else if (x.indexOf("N") > -1) {
		holder ++;
		} else if (x.indexOf("o") > -1) {
		holder ++;
		} else if (x.indexOf("O") > -1) {
		holder ++;
		} else if (x.indexOf("p") > -1) {
		holder ++;
		} else if (x.indexOf("P") > -1) {
		holder ++;
		} else if (x.indexOf("q") > -1) {
		holder ++;
		} else if (x.indexOf("Q") > -1) {
		holder ++;
		} else if (x.indexOf("r") > -1) {
		holder ++;
		} else if (x.indexOf("R") > -1) {
		holder ++;
		} else if (x.indexOf("s") > -1) {
		holder ++;
		} else if (x.indexOf("S") > -1) {
		holder ++;
		} else if (x.indexOf("t") > -1) {
		holder ++;
		} else if (x.indexOf("T") > -1) {
		holder ++;
		} else if (x.indexOf("u") > -1) {
		holder ++;
		} else if (x.indexOf("U") > -1) {
		holder ++;
		} else if (x.indexOf("v") > -1) {
		holder ++;
		} else if (x.indexOf("V") > -1) {
		holder ++;
		} else if (x.indexOf("w") > -1) {
		holder ++;
		} else if (x.indexOf("W") > -1) {
		holder ++;
		} else if (x.indexOf("x") > -1) {
		holder ++;
		} else if (x.indexOf("X") > -1) {
		holder ++;
		} else if (x.indexOf("y") > -1) {
		holder ++;
		} else if (x.indexOf("Y") > -1) {
		holder ++;
		} else if (x.indexOf("z") > -1) {
		holder ++;
		} else if (x.indexOf("Z") > -1) {
		holder ++;
		}
		
		// Pass new value back.
		
		return holder;
	}
	

// ------------------ Local Storage ----------------------------------
	
function greeting(x,y) {	

	// Browser Check

	if (typeof(Storage) !== "undefined") {
    
    // Variable Assignment
    	if (check == 0) {
    		localStorage.setItem("fname", x);
    		document.forms[y].submit();
    		}
    	}
}
	
	
	
	
	
	
// Game

// ------------------ Computer Entry ---------------------------------------

function game(userinput) {

// Displays Results

	gamePlay();
				
// Computer
					
					var c = Math.floor(Math.random() * 3) + 1;
					
					if (c === 1.0) {
						c = "Penny";
					} else if  (c === 2.0) {
						c = "Cloth";
					} else { 
						c = "Morgan";
					}
				
					// removed for radio input over text.
					// var b = c.toUpperCase();
					
// Player Entry
					
					var h = document.getElementById("store").value = userinput;
					// removed for radio input over text.
					// var h = player.toUpperCase();
					
// Comparison
				
					var winner = function(h,c) {
						if (h === c) {
							return "Tie";
							
						} else if (h === "Penny") {
							if (c === "Cloth") {
								return "You Win!";
							} else {
								return "You Lost :(";
								}
						} else if (h === "Cloth") {
							if (c === "Morgan") {
								return "You Win!";
							} else {
								return "You Lost :(";
								}
						} else {
							if (c === "Penny") {
								return "You Win!";
							} else {
								return "You Lost :(";
								} 
							}
						}
					
					// Display
					
					var winlose = winner(h,c);
					
					if (! h) {
						document.write("<p>Error: Please refresh the browser.</p>");
					} else {
						document.getElementById("output1").innerHTML = "You: " + h;
						document.getElementById("output2").innerHTML = "Computer: " + c;
						document.getElementById("output3").innerHTML = "Winner: " + winlose;
						}
					}


 //------------------- Button Selection Game -----------------------------------

function gamePlay() {
    	document.getElementById('gameSelection').style.display = 'none';
    	document.getElementById('gameOutput').style.display = 'block';
    	document.getElementById('gamereset').style.display = 'block';
    }	
    				

 //------------------- Button Reset Game -----------------------------------

function gameReset() {
    	document.getElementById('gameSelection').style.display = 'block';
    	document.getElementById('gameOutput').style.display = 'none';
    	document.getElementById('gamereset').style.display = 'none';
    }
			
    				
// ------------------ Calculator Price --------------------------------------------    				
    	

function valsilver(x) {
    
    // Assign array
    
    var a = x.indexOf(".");
    
    var coins = indexall(x);
    coins = indexcoins(x,coins);
	coins = indexodds(x,coins);
	coins = indexalpha(x,coins);
    
    check = 0; 
    
    // return Bad
    
    if (a > 3 || x.length <= a + 2 || coins != -1) {
    	if (x == "") {
    		document.getElementById("errorsp2").innerHTML = "Invalid Number.";
    		document.getElementById("errorsp22").style.border = "thick solid #FFB6C1";
    		check = check - 1;
        	return false;
    	} else if (coins != -1) {
    		document.getElementById("errorsp2").innerHTML = "Invalid Character.";
    		document.getElementById("errorsp22").style.border = "thick solid #FFB6C1";
    		check = check - 1;
        	return false;
        } else {
        	document.getElementById("errorsp2").innerHTML = "Invalid Number.";
    		document.getElementById("errorsp22").style.border = "thick solid #FFB6C1";
    		check = check - 1;
        	return false;
        }
        
    // Return Good
    
    } else {
    	document.getElementById("errorsp2").innerHTML = "";
    	document.getElementById("errorsp22").style.removeProperty( 'border' );
    	return true;
    	}
    }	
 
// ------------------ Calculator Exception --------------------------------------------     

function indexcoins(x,y) {
	
	// Set holder to previous number.
	
	var holder = y;
	var total = x.split(".").length -1;
	
	if (total > 1) {
		// return error
		return holder;
	} else {
		// correct error
		holder --;
		return holder;
		}		
	}

// ------------------ Coins Exception --------------------------------------------

function valcoins(x) {  
    	
    var a = 0;	
    	
    // Phone
	
	var coins = indexall(x);
	coins = indexodds(x,coins);
	coins = indexalpha(x,coins);
    
    // Phone
    	
    if (x == "" || x != "") {
    	if (x == "") {
    		document.getElementById("errorsp1").innerHTML = "Invalid Number.";
    		document.getElementById("errorsp11").style.border = "thick solid #FFB6C1";
    		a = a + 1;
    	} else if (coins != -1) {
    		document.getElementById("errorsp1").innerHTML = "Invalid Character.";
    		document.getElementById("errorsp11").style.border = "thick solid #FFB6C1";
    		a = a + 1;
		} else {
			document.getElementById("errorsp1").innerHTML = "";
			document.getElementById("errorsp11").style.removeProperty( 'border' );
    		}
    	}
    
    // False Failed, True Pass
    	
    	if (a > 0) {
    		check = check - 1;
    		return false;
    	} else {
    		return true;
    		}
 }    
	
    	
// Quick Calculation    				
    				
function calculator(x,y) {

	var value = x * y;
	
	if (check == 0) {
    	alert("The Melt Value of your coins are: $" + value);
    	}
    }
    

// Map

// I left the code as is from undergrad. It loops through different locations, and adds a number where needed.
    
(function() {
	window.onload = function() {
	
      // Creating an object literal containing the properties
      // we want to pass to the map
      var options = {
        zoom: 3,
        center: new google.maps.LatLng(37.09, -95.71),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
		
      // Creating the map
      var map = new google.maps.Map(document.getElementById('map'), options);
		
      // Creating an array that will contain the coordinates
      // for New York, San Francisco, and Seattle
      var places = [];
    
      // Adding a LatLng object for each city
      places.push(new google.maps.LatLng(39.3938, -76.6092));
    
      // Declare infowindow as a global variable This will be placed
      // outside the for-loop just above it
      var infowindow;
    
      // Looping through the places array
      for (var i = 0; i < places.length; i++) {
    
        // Creating a new marker
        var marker = new google.maps.Marker({
          position: places[i],
          map: map,
          title: 'Morgan Silver Dollars'
        });
      
        (function(i, marker) {
    
          // Adding an event-listener
          google.maps.event.addListener(marker, 'click', function() {
            
            // Check to see if the infowindow already exists
            if (!infowindow) {
              // Create a new InfoWindow object
              infowindow = new google.maps.InfoWindow();
              }
              
            // Setting the content of the InfoWindow
            infowindow.setContent('Morgan Silver Dollars');
            
            // Tying the InfoWindow to the marker
            infowindow.open(map, marker);
          });
            
        })(i, marker);
  
      }
  
    }
  })();