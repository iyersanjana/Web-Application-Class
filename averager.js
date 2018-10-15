function findtheavg()
{
	var no=document.getElementById('findavg').value;
	no=no.split('').map(Number);
	if(no.length>1)
	{
		var result=no.reduce((accumulator, value) => accumulator+value);
		var no_of_elements=no.length;
		var fres=(result/no_of_elements).toFixed(2);
	document.getElementById('displayno').innerHTML='Average is:' +fres;
	}
	else
	{
		document.getElementById('displayno').innerHTML='Enter no.';
	}
}
function reset()
{
	document.getElementById('displayno').innerHTML='Enter no.';
	document.getElementById('findavg').value='';
}