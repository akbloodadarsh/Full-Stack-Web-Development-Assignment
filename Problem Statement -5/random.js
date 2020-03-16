var rand =  Math.floor(Math.random()*101);
a = [];

function next_time()
{
	alert("Maybe next time universe is gonna be with you");
}

function win()
{
	alert("ok you win");
}

function exit()
{
	location.reload();
}

function new_element(){
	num = document.getElementById('array');
	n = a.push(num);
	if(n == 10 || num == rand)
	{
		if(n == 10)next_time();
		else win();
		exit();
	}
	for(x in a)
	{
		console.log(document.getElementById('array'));
		// document.getElementById('show') + x + ' ';	
	}
}