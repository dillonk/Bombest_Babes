// JavaScript Document
var reg = 0;
var logn = 0;
var fade = 0;
var share = 0;

  function clearMe(formfield){
   if (formfield.defaultValue==formfield.value){
    formfield.value = "";
   }
  }

  function unClearMe(formfield){
   if (formfield.value==""){
	formfield.value = formfield.defaultValue;
   }
  }
  function RegDispOn() {
  if (fade == 0){
	  document.getElementById('fade').style.display = 'block';
	  document.getElementById('reg').style.display = 'block';
	  fade = 1;
	  reg = 1;
  }
  }
  function RegDispOff(){
  if (reg == 1){
	  document.getElementById('fade').style.display = 'none';
	  document.getElementById('reg').style.display = 'none';
	  fade = 0;
	  reg = 0;
  }
  }
  
    function LogDispOn() {
  if (fade == 0){
	  document.getElementById('fade').style.display = 'block';
	  document.getElementById('log').style.display = 'block';
	  fade = 1;
	  logn = 1;
  }
  }
  function LogDispOff(){
  if (logn == 1){
	  document.getElementById('fade').style.display = 'none';
	  document.getElementById('log').style.display = 'none';
	  fade = 0;
	  logn = 0;
  }
  }
  function ShareDispOn(){
	  document.getElementById('fade').style.display = 'block';
	  document.getElementById('sharing').style.display = 'block';
	  fade = 1;
	  share = 1;
  }
    function ShareDispOff(){
	  document.getElementById('fade').style.display = 'none';
	  document.getElementById('sharing').style.display = 'none';
	  fade = 0;
	  share = 0;
  }
	function blankfunction(){
		var useless="nothing";
	}
	
	
$(document).ready( function (){
		usrsess();
		
	
	            jQuery(function(){
               jQuery("#Fname").validate({
                    expression: "if (document.signup.Fname.value == '') return false; else return true;",
                    message: "Please enter the Required field"
                });
				jQuery("#Lname").validate({
                    expression: "if (document.signup.Lname.value == '') return false; else return true;",
                    message: "Please enter the Required field"
                });

                jQuery("#usrage").validate({
                    expression: "if (!isNaN(VAL) && VAL && VAL > 12) return true; else return false;",
                    message: "You must be 13 or older to sign up"
                });

                jQuery("#email").validate({
                    expression: "if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;",
                    message: "Please enter a valid Email"
                });
                jQuery("#password").validate({
                    expression: "if (VAL.length > 5 && VAL) return true; else return false;",
                    message: "Please enter a valid Password longer than 5 characters"
                });
                jQuery("#password2").validate({
                    expression: "if ((VAL == jQuery('#password').val()) && VAL) return true; else return false;",
                    message: "Passwords do not match"
                });
            });
	
});