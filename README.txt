
***	Make your internet browser to auto-scroll the scroll bar for you!!! ***	
***	Scroll.js is really simple to use. 									***




*** Pre-setup ***

1) Import the "scroll-v0.2.js" file into the html file

e.g.
	<head>
		<script src="scroll-v0.2.js" type="text/javascript">
	</head>



*** How to Use ***

1) scroll.scrollPage(your_desired_y_position, scrolling_speed);

e.g.
	<body>
		<p onClick="function(){
						//scroll to y position of '500' with the speed of '30'
						scroll.scrollPage(500, 30);
					}
		">
			button
		</p>
	</body>