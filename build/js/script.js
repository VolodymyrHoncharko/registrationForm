$(document).ready(function () {
	let $submit = $('.contacts_submit');
	let $form = $('.contacts');
	let $closeOverlay = $('.message_done');
	let $overlay = $('.overlay_win')[0];
	let $inputs = $('.contacts_input');

	$submit.on('click', function () {
		$form.validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				password: {
					required: true,
					minlength: 5
				},
				phone: {
					required: true,
					minlength: 12,
					maxlength: 12
				}
			},
			messages: {
				name: {
					required: "Please enter your name",
				},
				email: {
					required: "Please enter your email",
					email: "Please enter your email correctly"
				},
				password: {
					required: "Please enter your password",
					minlength: "Enter at least 5 characters "
				},
				phone: {
					required: "Please enter your password",
					minlength: "Please enter 12 characters",
					maxlength: "Please enter 12 characters"
				}
			},
			submitHandler: function (form) {
				$.ajax({
					type: 'post',
					url: 'build/js/register.php',
					data: $(form).serialize(),
					success: function (data) {
						$overlay.style.display = 'block';
						$inputs.val('');
					},
					error: function () {
						console.log('Ajax request not recieved!');
					}
				});
				// resets fields

				return false;
			}

		})
	});

	$closeOverlay.click(function () {
		$overlay.style.display = 'none';
	});


});