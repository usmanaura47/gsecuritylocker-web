---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
permalink: /contact/
image: "img/parallax5.jpg"
main_title: "Contact Us"
sub_title: "We are always waiting for your message"
downloads: false
---

<div class="w3-display-container w3-padding-64">
	<div class="w3-container">
		<div class="content">
			<h3 class="w3-wide w3-center">Please Fill Out The Form Below</h3>
			<hr/>
			<form id="msgform" method="POST">
				<p>
					<label for="Name"> Your Name </label>
					<input class="w3-input w3-border" type="text" name="name" placeholder="Please Enter Your Name" maxlength="40" required>
				</p>
				<p>
					<label for="Email"> Your Email </label>
					<input class="w3-input w3-border" type="email" name="_replyto" placeholder="Please Enter Your Email" maxlength="50" required>
				</p>
				<p>
				<label for="Name"> Your Message </label>
				<textarea class="w3-input w3-border" name="message" placeholder="Please Enter Your Message" maxlength="200" required></textarea>
				</p>
				<input type="hidden" name="product" value="G Security" />
				<input class="w3-button w3-green" type="submit" value="Send" />
				<input class="w3-button w3-red" type="reset" value="Clear" />	
			</form>
			
			<script type="text/javascript">
				var contactform =  document.getElementById('msgform');
				contactform.setAttribute('action', '//formspree.io/' + 'usmanaura47' + '@' + 'gmail' + '.' + 'com');
			</script>	

			<h3 class="w3-wide w3-center">Or Contact Us Directly</h3>
			<hr/>
			<p class="w3-center w3-padding">
				<a href="https://leosoftwares4u.tk" class="w3-button w3-green w3-round-large" target="_blank"><i class="fa fa-globe fa-fw" aria-hidden="true"></i>Our Website</a>
				<a href="https://www.facebook.com/leosoftwarespak/" class="w3-button w3-green w3-round-large" target="_blank"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i>Facebook</a>
				<a href="https://twitter.com/LeoSoftwaresPak" class="w3-button w3-green w3-round-large" target="_blank"><i class="fa fa-twitter fa-fw" aria-hidden="true"></i>Twitter</a>
				<a href="https://plus.google.com/+MalikUsmanAura" class="w3-button w3-green w3-round-large" target="_blank"><i class="fa fa-google-plus-official fa-fw" aria-hidden="true"></i>Google Plus</a>
			</p>
		</div>
	</div>
</div>