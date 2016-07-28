var numClasses = document.getElementsByClassName("calcButton");
var opClasses = document.getElementsByClassName("calcOp");
var result = '', op = '',x,y,cnt;
var numFunction = function(e){
	e.preventDefault();
	//cnt = 0;
	x = this.innerHTML;
	if(op === '')
{	
	
	if(result == '')
	{document.getElementById('result').innerHTML = x;
	result = x;
	}
	else
	{
	document.getElementById('result').innerHTML += x;
	result+=x;
	}
//cnt=0;
}
	else{
		if(cnt==1)
		{
		document.getElementById('result').innerHTML = x;
		y = x;
		cnt=0;
		}
		else
		{
		document.getElementById('result').innerHTML += x;
		y+=x;
		cnt=0;
		}
	}
};
var opFunction = function(e){
	e.preventDefault();
	if(cnt == 0){
		result = eval(result+op+y);
	}
	temp = this.id;
	cnt=1;
	if(temp == 'divide'){
		if(result == '')
			result+='/'
		else
			op = '/'
	}
	else if(temp === 'product'){
		if(result === '')
			result ='1*'
		else
			op = '*'
	}
	else if(temp === 'subtract'){
		if(result === '')
			result+='-'
		else
			op = '-'
	}
	else if(temp === 'add'){
		if(result === '')
			result+='+'
		else
			op = '+'
	}
	else if(temp === 'final'){
		if(result.toString().indexOf('.') !== -1 && result.toString().substr(result.toString().indexOf('.')).length > 3 )
		document.getElementById('result').innerHTML = result.toFixed(20);
		else
		document.getElementById('result').innerHTML = result;
		//result = '';
		op = '';
	}
	//alert(op);
	
}
document.getElementById('cross').onclick = function(e){
	e.preventDefault();
	document.getElementById('result').innerHTML = '';
	result = '';
	op = '';
}

for (var i = 0; i < numClasses.length; i++){
		numClasses[i].addEventListener('click',numFunction,false);
	}
for (var j = 0; j < opClasses.length; j++){
		opClasses[j].addEventListener('click',opFunction,false);
	}