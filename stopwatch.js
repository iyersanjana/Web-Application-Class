var sec=0;
var min=0;
var hr=0;
var sec_with=0;
var min_with=0;
var hr_with=0;
var duration=null;
var status="stopped";
function Stopwatch()
{
	sec++;
	if(sec/60 ===1)
	{
		sec=0;
		min++;
		if (min/60 ===1) 
		{
			min=0;
			hr++;
		}
	}
	if(sec<10)
	{
		sec_with='0'+sec.toString();
	}
	else
	{
		sec_with=sec;
	}
	if(min<10)
	{
		min_with='0'+min.toString();
	}
	else
	{
		min_with=min;
	}
	if(hr<10)
	{
		hr_with='0'+hr.toString();
	}
	else
	{
		hr_with=hr;
	}
	document.getElementById('output').innerHTML=hr_with+':'+min_with+':'+sec_with
}
function start()
{
	if (status ==="stopped") 
	{
		duration=window.setInterval(Stopwatch,1000);
		document.getElementById("start").innerHTML="start";
		status="started";
	}
	else
	{
		window.clearInterval(duration);
		document.getElementById("start").innerHTML="start";
		status="stopped";
	}
}
function reset()
{
	window.clearInterval(duration);
	sec=0;
	min=0;
	hr=0;
	document.getElementById("output").innerHTML="00:00:00";
	document.getElementById("start").innerHTML="start";
}
function stop() 
{
    clearInterval(duration);
}