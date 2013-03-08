/*
 * Objeto de Autenticação(welcomeRioApp)
 * Parâmetro appId = Id da aplicação
 * Parâmetro appSecret = Código appSecret da aplicação
 */

var welcomeRioApp =  function( appId, appSecret ){

	var _appId, _appSecret, _accessToken, _accessTokenExpires;

	_appId     = appId;
	_appSecret = appSecret;


	function getAppId(){
		return _appId;
	}

	function getAppSecret(){
		return _appSecret;
	}

	function getAccessToken(){
		return _accessToken;
	}

	function getAccessTokenExpires(){
		return _accessTokenExpires;
	}
 	
 	function auth(){

 		var next_expires, token_date, verify;

 		verify = false;
 		if( !$.cookie('_accessTokenExpires') ) { 
 			verify = true; // Token não existe e precisa cria-lo,  deve se autenticar.
		}else {
	 		next_expires = new Date();
	 		next_expires = next_expires.getTime();

	 		token_date = new Date( $.cookie('_accessTokenExpires') * 1000);
	 		token_date.setHours( token_date.getHours() + 6 );
	 		token_date = token_date.getTime();	
	 		

			_accessToken        = $.cookie('_accessToken');
			_accessTokenExpires = $.cookie('_accessTokenExpires');

	 		if(next_expires > token_date ) verify = true; // Token expirado, deve se autenticar novamente.

		}		

		if( verify ) {

			$.ajax({

				url     : 'http://api.riodatamine.com.br/rest/request-token',
				data    : { 'app-id' : _appId, 'app-secret' : _appSecret, 'redirect_uri' : '' },
				type    : 'GET',
				async   : false,
				success : function( data, status, request){

					$.cookie('_accessToken',request.getResponseHeader('X-Access-Token'));
					$.cookie('_accessTokenExpires',request.getResponseHeader('X-Access-Token-Expires'));
				}
			}).done(function(msg){
				console.log( msg );
			});

		}	

 	}

 	function getAllReferences(){

 		var content ;
 		$.ajax({

 			url  : 'http://api.riodatamine.com.br/rest/visitar-rio/o-que-fazer',
 			type : 'GET',
 			async : false,
 			headers : { 'Authorization' : _accessToken }

 		}).always( function( data ){
 			content = data;
 		});
 		return ( content );
 	}

 	return {
 		auth : auth,
 		getAppId : getAppId,
 		getAppSecret : getAppSecret,
 		getAccessToken : getAccessToken,
		getAllReferences : getAllReferences, 		
 		getAccessTokenExpires: getAccessTokenExpires
 	};

};
