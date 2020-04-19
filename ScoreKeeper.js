var p1b=document.getElementById("p1");
var p2b=document.getElementById("p2");
var p1d=document.getElementById("p1display");
var p2d=document.getElementById("p2display");
var resetb=document.getElementById("reset"  );
var numi=document.querySelector("input");
var winningScoredisplay=document.getElementById("final");

var p1Score=0;
var p2Score=0;
var gameOver=false;
var winningScore=5;


p1b.addEventListener("click",function() {
	if(!gameOver)
	{
		p1Score++;
			if(p1Score===winningScore)
			{
				p1d.classList.add("winner");
				gameOver=true;
			}
	}
	p1d.textContent=p1Score;
});

p2b.addEventListener("click",function() {
	if(!gameOver)
	{
		p2Score++;
			if(p2Score===winningScore)
			{
				p2d.classList.add("winner");
				gameOver=true;
			}
	}
	p2d.textContent=p2Score;
});

resetb.addEventListener("click",function(){
	reset();
});

function reset(){
	p1Score=0;
	p2Score=0;
	p1d.textContent=0;
	p2d.textContent=0;
	p1d.classList.remove("winner");
	p2d.classList.remove("winner");
	gameOver=false;

}
numi.addEventListener("change",function(){
 	winningScoredisplay.textContent=numi.value;
 	winningScore=Number(numi.value);
 	reset();
});