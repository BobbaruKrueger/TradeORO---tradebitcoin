jQuery(document).ready(function ($) {
	
	setTimeout(function(){
		var btcC  = parseFloat( $("#bitcoinprice_usd").html() );
		var btcC2 = btcC.toFixed(2);
		$("#bitcoinprice_usd").html(btcC2);
	}, 400);
	
});