var quotesList = [{
	"msg" : "What we think, we become.",
	"person" : "Buddha"
},{
	"msg" : "The best preparation for tomorrow is doing your best today.",
	"person" : "H. Jackson Brown, Jr."
},
{
	"msg" : "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
	"person" : "Jimmy Dean"
},
{
	"msg" : "Follow your bliss and the universe will open doors where there were only walls.",
	"person" : "Joseph Campbell"
}];
var currentQuote = 0;
function domloaded () {
	var qMsg = document.querySelector("#quote_msg"),
		qPer = document.querySelector("#quote_athr");
	document.querySelector("#anotherQuote").addEventListener("click",function(event){
		var quotesLength = quotesList.length,
			presentQuote;
		do {
			presentQuote = Math.floor((Math.random()*quotesLength));
		} while (presentQuote === currentQuote);
		currentQuote = presentQuote;
	    qMsg.style.opacity = "0";
	    qPer.style.opacity = "0";
	    setTimeout(function(){      
	    	qMsg.innerHTML = quotesList[presentQuote].msg;
			qPer.innerHTML = quotesList[presentQuote].person;
		    setTimeout(function(){
		    	qMsg.style.opacity = "1";
		       	qPer.style.opacity = "1";
		    },200);
	    },1000);
		
    
	});
	document.querySelector("#tweetIt").addEventListener("click",function(event){
		var qMsg = quotesList[currentQuote].msg,
			qPer = quotesList[currentQuote].person;
		window.open("https://twitter.com/intent/tweet?text="+qMsg+" -"+qPer,"_blank");
	});
};
