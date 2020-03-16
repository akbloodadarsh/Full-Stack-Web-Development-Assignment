var rand =  Math.floor(Math.random()*101);
a = [];

function new_element(){
	num = document.getElementById('array').value;
	n = a.push(num);
	if(n == 10 || num == rand)
	{
		if(n == 10)
			{
				next_time();
			}
		if(num == rand)
			{
				win();
			}
			exit();
	}
	document.getElementById('show').innerHTML = "";
	for(x in a)
	{
		document.getElementById('show').innerHTML += a[x];
		document.getElementById('show').innerHTML += " ";	
	}
}
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