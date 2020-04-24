var numbersquares=9;
var colors = generate(numbersquares);
var squares =document.querySelectorAll(".square");
var picked= pick();
var display = document.getElementById("display");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var medium =document.querySelector("#medium");
var hard =document.querySelector("#hard");

easy.addEventListener("click",function()
{
	alert("You are now playing easy level of Game");
	medium.classList.remove("selected");
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numbersquares=3;
	colors= generate(numbersquares);
	picked = pick();
	display.textContent=picked;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});
medium.addEventListener("click",function()
{
	alert("You are now playing Medium level game");
	easy.classList.remove("selected");
	medium.classList.add("selected");
	hard.classList.remove("selected");
	numbersquares=6;
	colors= generate(numbersquares);
	picked = pick();
	display.textContent=picked;
	console.log(colors);
	for(var j=0;j<squares.length;j++)
	{
		if(colors[j] && j<3)
		{
			squares[j].style.backgroundColor = colors[j];
		}
		else if(colors[j] && j>=3 && j<6)
		{	
			squares[j].style.display= "block";
		}
		else
		{
			squares[j].style.display="none";
		}
	}
});

hard.addEventListener("click",function()
{
	alert("You are now playing hard level game");	
	easy.classList.remove("selected");
	medium.classList.remove("selected");
	hard.classList.add("selected");
	numbersquares=9;
	colors= generate(numbersquares);
	picked = pick();
	display.textContent=picked;
	for(var i=0;i<squares.length;i++)
	{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display="block";
	}
});
reset.addEventListener("click",function()
{
	colors = generate(numbersquares);
	picked = pick();
	display.textContent=picked;
	this.textContent="New Colors";
	message.textContent="";
	for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor="black";
});
display.textContent = picked;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function()
	{
		var click = this.style.backgroundColor;
		if(click === picked)
		{
			message.textContent="Correct!!!";
			reset.textContent = "Play Again?";
			change(click);
			h1.style.backgroundColor=click;
		}
		else
		{
			this.style.backgroundColor="black";
			message.textContent="Try Again!!";
		}
	});
}
function change(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}
function pick()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generate(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		var r =Math.floor(Math.random()*256);
		var g =Math.floor(Math.random()*256);
		var b =Math.floor(Math.random()*256);
		arr.push("rgb(" + r +", " + g + ", "+ b+ ")");
	}
	return arr;
}