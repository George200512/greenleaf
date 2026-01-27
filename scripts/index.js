$(document).ready(function (event){
	 const default_quote = {
	 		_id: "12221",
	 		content: "The best way to get started is to quit talking and start doing.",
	 		author: "Walt Disney"
	 }
		localStorage.setItem("quote", JSON.stringify(default_quote));
		
		if (navigator.onLine){
				$(".online").css("display", "flex").slideDown(300);
				setTimeout(function (){
						$(".online").slideUp(300);
				}, 3000);
		}else{
				$(".offline").css("display", "flex").slideDown(300);
				setTimeout(function (){
						$(".offline").slideUp(300);
				}, 3000);
		}
		
		$(".quoteBtn").click(function (event){
				event.preventDefault();
				$(".quote-container").css("display", "flex");
				if (navigator.onLine){
						let quote = getQuote();
						$(".quote").text(quote.content);
						$(".author").text(quote.author);
						localStorage.setItem("quote", JSON.stringify(quote));
				}else{
						let quote = JSON.parse(localStorage.getItem("quote"));
						$(".quote").text(quote.content);
						$(".author").text(quote.author);
				}
		});
		
		$(".bi-x").click(function (event){
				$(".quote-container").hide();
		});
		
		
		
});

async function getQuote(){
		/* Get quote from internet using api. */
		
	 let response = await fetch("https://api.quotable.io/random");
		 return response.json();
}
