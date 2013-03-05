

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Aonde Dormir no Rio App</title>
</head>
<body>
	


	<script src="js/jquery.js"></script>
	<script src="js/jquery.cookie.js"></script>
	<script src="js/util.js"></script>
	<script>
		$(function(){

			// call the auth
			//auth();
			
			//auth.setAppId( 332221 );
			var app  = new  welcomeRioApp('30a12345bc286658678d7142a94d4c8a','rj1rf-5t9bk-vmnvq');
			  app.auth() ;
			
			//app.getAppSecret();


		});

		

	</script>
</body>
</html>