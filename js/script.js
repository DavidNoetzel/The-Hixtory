// JavaScript Document

$(document).ready(function(){
	
	$('.parallax-layer').parallax({
        mouseport: $("body")
    });


	var FirstPlayer = new CirclePlayer("#jquery_jplayer_1",
			{
				m4a: "001/audio/track01.m4a",
				oga: "001/audio.track01.ogg"
			}, {
				cssSelectorAncestor: "#cp_container_1",
				swfPath: "plugins",
				wmode: "window"
			});

			// This code creates a 2nd instance. Delete if not required.

			var SecondPlayer = new CirclePlayer("#jquery_jplayer_2",
			{
				m4a: "001/audio/track02.m4a",
				oga: "001/audio.track02.ogg"
				}, {
				cssSelectorAncestor: "#cp_container_2",
				swfPath: "plugins",
				wmode: "window"
			});
	
	
			var ThirdPlayer = new CirclePlayer("#jquery_jplayer_3",
				{
					m4a: "001/audio/track03.m4a",
					oga: "001/audio.track03.ogg"
					}, {
					cssSelectorAncestor: "#cp_container_3",
					swfPath: "plugins",
					wmode: "window"
				});
				
				
			var FourthPlayer = new CirclePlayer("#jquery_jplayer_4",
				{
					m4a: "001/audio/track04.m4a",
					oga: "001/audio.track04.ogg"
					}, {
					cssSelectorAncestor: "#cp_container_4",
					swfPath: "plugins",
					wmode: "window"
				});
							
							
			var FifthPlayer = new CirclePlayer("#jquery_jplayer_5",
				{
					m4a: "001/audio/track05.m4a",
					oga: "001/audio.track05.ogg"
					}, {
					cssSelectorAncestor: "#cp_container_5",
					swfPath: "plugins",
					wmode: "window"
			});	
		
});