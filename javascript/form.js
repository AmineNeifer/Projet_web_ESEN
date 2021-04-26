function verif(){

	var name =  document.getElementById("fname").value();
	var lastname =  document.getElementById("lname").value();
	var email =  document.getElementById("email").value();

	// verification First Name

	it=0;
	errorName =false;
	errorLname =false;
	errorEmail=false;


	if (name.length < 3){
		alert("Enter your name please");
		errorLname = true;
	}
	else {
		for (var i=0; i < name.length; i++)
		{
			if (name.charAt(i).toUpperCase() > 'Z' ||  name.charAt(i).toUpperCase() < 'A')
				{
					errorName = true;
					break;
				}
		}
		if( errorName == true )
		{
			alert("Lastname should only contain characters");
		}
	}

	// verification Last Name

	it=0;

	if (lastname.length < 3){
		alert("Enter your lastname please");
		errorLname = true;
	}
	else {
		for (var i=0; i < lastname.length; i++)
		{
			if (lastname.charAt(i).toUpperCase() > 'Z' ||  lastname.charAt(i).toUpperCase() < 'A')
				{
					errorLname = true;
					break;
				}
		}
		if( errorLname == true )
		{
			alert("Lastname should only contain characters");
		}
	}


	// Verification Email

	if (email.length > 0){
		if (email.indexOf("@")== -1)
		{
			alert("l'email must have @ in it");
			errorRmail = true;
		}
	}
	else {
	alert("Enter your email please");
	errorEmail = true;
	}
}
