	
	function slidtext()
	{
		
		var x=document.getElementById("slide-text");
		x.style.transition="all 2s";
		x.style.bottom="30%";
	}

	function scrolltopbotton()
	{
		
		var x=document.getElementById("totop");
		
		if(window.pageYOffset >100)
		{
			x.classList.add("active");
		}
		else
		{
			
			x.classList.remove("active");
		}
	}


	function togglefunction()
	{
		var x=document.getElementById("menu");
		var y=document.getElementById("id");
		
		if(y.classList.contains("open-menu"))
		{
			
			y.classList.remove("open-menu");
		}
		else
		{
			
			y.classList.add("open-menu");
		}
		
	}

	
