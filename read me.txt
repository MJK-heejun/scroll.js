
Pre-setup

1) Import the jquery script into the html file

	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>

2) Import the "scroll-v0.1.js" file into the html file

	<script src="scroll.js" type="text/javascript">



How to Use

1) Create an instance

	//argument1: The 'y' position of the screen
	//argument2: The speed of scrolling
	var myScroll = new scrollWindow(1000, 30);

2) Run the instance

	myScroll.scrollPage();

   or if you want to add a call back function....

	myScroll.scrollPage(function(){
	    //whatever you want to run
	});

