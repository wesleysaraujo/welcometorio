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

 		var next_expires, token_date;

 		next_expires = new Date();
 		next_expires.setHours( next_expires.getHours() + 6 );
 		next_expires = next_expires.getTime();

 		token_date = new Date( $.cookie('_accessTokenExpires') * 1000);
 		token_date = token_date.getTime();

 		if( next_expires > token_date ){

			$.ajax({

				url     : 'http://api.riodatamine.com.br/rest/request-token',
				data    : { 'app-id' : _appId, 'app-secret' : _appSecret, 'redirect_uri' : '' },
				type    : 'GET',
				async : false,
				success : function( data, status, request){

					_accessToken        = request.getResponseHeader('X-Access-Token');
					_accessTokenExpires = request.getResponseHeader('X-Access-Token-Expires');

					$.cookie('_accessToken',_accessToken);
					$.cookie('_accessTokenExpires',_accessTokenExpires);

				}	

			}); 

		}		

 	}

 	return {
 		auth : auth,
 		getAppId : getAppId,
 		getAppSecret : getAppSecret,
 		getAccessToken : getAccessToken,
 		getAccessTokenExpires: getAccessTokenExpires
 	};

};
