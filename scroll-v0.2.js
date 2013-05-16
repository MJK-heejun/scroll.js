
var scroll = new scrollWindow();

function scrollWindow(){
	this._positionY;
	this._speed;
	this._click_flag = 1;
}


_p = scrollWindow.prototype;

//initializes either 'ScrollDown' or 'ScrollUp' function depending on its current location
_p.scrollPage = function(y, sp, callBack){
   this._positionY = y;
   this._speed = sp;
   if(window.pageYOffset < this._positionY){
	   _p.scrollDown(this._positionY, this._speed, callBack);
   }
   else if(window.pageYOffset > this._positionY){
	   _p.scrollUp(this._positionY, -this._speed, callBack);
   }else{//buttons are clickble again iff the current location == position
	   this._click_flag = 1;
   }
}


_p.scrollDown = function(position, speed, callBack){
    	window.scrollBy(0,speed); // horizontal and vertical scroll increments
		if(window.pageYOffset < position){
			//recursive
    	    setTimeout('_p.scrollDown('+position+', '+speed+', '+callBack+')',1); // scrolls every 100 milliseconds
		}else{
			//adjust the difference
			_p.postScroll(position, callBack);
		}
}

_p.scrollUp = function(position, speed, callBack) {
    	window.scrollBy(0,speed); // horizontal and vertical scroll increments
		if(window.pageYOffset > position){
			//recursive
			setTimeout('_p.scrollUp('+position+', '+speed+', '+callBack+')',1); // scrolls every 100 milliseconds
		}else{
			//adjust the difference
			_p.postScroll(position, callBack);
		}    	
}


//adjusting function
_p.postScroll = function(position, callBack){
   if(window.pageYOffset < position){
	   _p.scrollDown(position, 1, callBack);
   }
   else if(window.pageYOffset > position){
	   _p.scrollUp(position, -1, callBack);
   }else{
	   this._click_flag = 1;
	   //run the call back function
	   if(callBack && typeof(callBack) === "function"){
		   callBack();
	   }
   }
}
