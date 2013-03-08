

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Aonde Dormir no Rio App</title>
</head>
<body>
	
	<?php  phpinfo(); ?>

	<script src="js/jquery.js"></script>
	<script src="js/jquery.cookie.js"></script>
	<script src="js/welcomerioapp.js"></script>
	<script>
		$(function(){

			var app, list_results;
			app  = new welcomeRioApp('30a12345bc286658678d7142a94d4c8a','rj1rf-5t9bk-vmnvq'); // Intancia o objeto com as credenciais
			app.auth() ; // Tenta se autenticar no riodatamine.com.br 

			list_results = app.getAllReferences().results; // Obtem em formato JSON as localizações

			for( i = 0; list_results.length > i; i++ ){

				// DESCRIÇÃO list_results[i].description.text
				// NOME list_results[i]
				// SITE list_results[i].contactData.website / .email
				// INFORMAÇÕES DE HORARIO  list_results[i].characteristics.general_info
				// GEOLOCATION list_results[i].geoResult /.address/.neighbourhood/ .point.lat / .point.lng
				// CATEGORIA list_results[i].taxonomies[0].type
				// IMAGEM list_results[i].files[0].file

				console.log( list_results[i] );
			}


		});

		

	</script>
</body>
</html>