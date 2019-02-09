function checkUserName(){
		var user = $('#userName').val();
	if(user=='monir khan'){
		$('#userError').text('');
	
	}else{
		$('#userError').text('User name dosn\'t match.');
		user_error = true;
	}	
}
$('#userName').blur(function(){
	checkUserName()
});

$('#userName').keydown(function(){
	checkUserName()
});


//for password


function passwordCheck(){
	var password = $('#psd').val();
	if(password==12345 ){
		$('#psdError').text('');
	}else{
		$('#psdError').text('Password dosn\'t match;.');
		password_error = true;
	}
}

$('#psd').blur(function(){
	passwordCheck();
});





//for submit

$('#loginForm').submit(function(){
	user_error = false;
	password_error = false;


	checkUserName();
	passwordCheck();

	if(user_error==false && password_error==false){
		return true;
	}else{
		return false;
	}

})



