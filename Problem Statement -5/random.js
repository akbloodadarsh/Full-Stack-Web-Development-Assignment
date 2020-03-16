var rand =  Math.floor(Math.random()*101);

class all{
	a = [];
	new_element(num){
		n = a.push(num);
		document.getElementById('array') = "";
		for(x in a)
		{
			document.getElementById('array') + = x;
		}
		if(num == rand)
		{
			win();
		}
		if(n == 10)
		{
			next_time();
		}
	}

	next_time()
	{
		alert("Maybe next time universe is gonna be with you");
		exit();
	}

	win()
	{
		alert("ok");
		exit();
	}

	exit()
	{
		location.reload();
	}
}
