		// JQUERY code based off of - http://codepen.io/hellogareth/pen/XJOvBB
		// I tried to write this completely on my own, but I could not get the time to display
		// properly. I was missing the ".getHours()" section, but since I looked it up, 
		// I posted the link since it is almost identical to what I was working on.
		// I think I have a better understanding of JQUERY now, but it will still take some work.
		
		// On load, this line launches the JQUERY function.
		$( window ).on( "load", function() {
		
		// Variables are assigned in this section.
		
		var name = localStorage.getItem("fname");
		var time = new Date().getHours();
		var x;
		var a = ('Good Morning');
		var b = ('Good Afternoon');
		var c = ('Good Evening');
		
		// This is where the time of day is filtered, and the variable "x" receives
		// its value.

		if (time >= 0 && time < 12) {
			x = a; 

		} else if (time >= 12 && time < 16) {
			x = b;

		} else if (time >= 16 && time < 24) {
			x = c;
		}
		
		// Where the personalized message is displayed in an alert box.
		
		if (name !== null) {
		
			//Alert message only if visited before.
			
			//alert(x + ", " + name );
			
			// Here is where the variable is passed onto the HTML5 page, to be displayed.
			
			$('.welcome').append(x + ", " + name + "!");
		} else {
		
			// Here is where the variable is passed onto the HTML5 page, to be displayed.
			
			$('.welcome').append(x);
			}		
		});