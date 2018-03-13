$().ready(function() {
	$("#myForm").validate({
		rules: {
			email: {
				required: true,
				email:true
			},
			password: {
				required: true,
				minlength: 5
			},
			age: "required",
				
			check: "required"
		},
		messages: {
			email: {
				required: "Please enter your email adderess",
				email: "Please provide a valid email address"
			},
			password: {
				required: "Please enter your password",
			    minlength: "Your password must be at least 5 characters"
			},
			age:"Please enter your age",
			check: "Please tick this box"
		},


	});
});