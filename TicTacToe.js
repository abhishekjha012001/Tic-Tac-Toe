var curr=1;
var dcolor="rgb(169, 169, 169)";
var color1=dcolor;
var color2=dcolor;
var noOfMoves=0;

$("#def").on("click",function(){
	var x=Math.floor(Math.random()*255);
	var y=Math.floor(Math.random()*255);
	var z=Math.floor(Math.random()*255);
	color1="rgb("+x+", "+y+", "+z+")";
	$("#p1").val("#"+rgbtohex(x)+rgbtohex(y)+rgbtohex(z));

	var x=Math.floor(Math.random()*255);
	var y=Math.floor(Math.random()*255);
	var z=Math.floor(Math.random()*255);
	color2="rgb("+x+", "+y+", "+z+")";
	$("#p2").val("#"+rgbtohex(x)+rgbtohex(y)+rgbtohex(z));
	$("#try").text("");
});

$(".square").on("click",function(){
	if((color1===dcolor)||(color2===dcolor)){
		$("#try").text("INVALID MOVE!");
	}
	else if(curr===1){
		if($(this).css("background-color")!=dcolor){
			$("#try").text("INVALID MOVE!");
		}
		else{
			$("#try").text("VALID MOVE");
			$(this).css("background-color",color1);
			noOfMoves++;
			if(check()){
				$("#try").text("PLAYER 1 WINS");
				$(".square").css("background-color",color1);
				$("#turn").text("GAME OVER");
				$("h1").css("background-color",color1);
			}
			else{
				curr=2;
				$("#turn").text("Turn: Player 2");
				if(noOfMoves===9){
					$("#try").text("TIE");
					$("#turn").text("GAME OVER");
				}
			}
		}
	}
	else{
		if($(this).css("background-color")!=dcolor){
			$("#try").text("INVALID MOVE!");
		}
		else{
			$("#try").text("VALID MOVE");
			$(this).css("background-color",color2);
			noOfMoves++;
			if(check()){
				$("#try").text("PLAYER 2 WINS");
				$(".square").css("background-color",color2);
				$("#turn").text("GAME OVER");
				$("h1").css("background-color",color2);
			}
			else{
				curr=1;
				$("#turn").text("Turn: Player 1");
				if(noOfMoves===9){
					$("#try").text("TIE");
					$("#turn").text("GAME OVER");
				}
			}
		}
	}
});

$("#p1").change(function(){
	color1=$(this).val();
	console.log(color1);
});


$("#p2").change(function(){
	color2=$(this).val();
	console.log(color2);
});

$("#btn").on("click",function(){
	$(".square").css("background-color","rgb(169, 169, 169)");
	curr=1;
	$("#p1").val("#"+rgbtohex(0)+rgbtohex(0)+rgbtohex(0));
	$("#p2").val("#"+rgbtohex(0)+rgbtohex(0)+rgbtohex(0));
	$("#try").text("NEW GAME");
	$("#turn").text("PLAYER 1");
	noOfMoves=0;

	color1=dcolor;
	color2=dcolor;
	$("h1").css("background-color","rgb(100,149,237)");
});

function check(){
	for(var i=1;i<=9;i+=3){
		if(($("#sqr"+i).css("background-color")===$("#sqr"+(i+1)).css("background-color"))&&
		($("#sqr"+i).css("background-color")===$("#sqr"+(i+2)).css("background-color"))&&
		($("#sqr"+i).css("background-color")!="rgb(169, 169, 169)")){
				return true;
		}
	}

	for(var i=1;i<=3;i++){
		if(($("#sqr"+i).css("background-color")===$("#sqr"+(i+3)).css("background-color"))&&
		($("#sqr"+i).css("background-color")===$("#sqr"+(i+6)).css("background-color"))&&
		($("#sqr"+i).css("background-color")!="rgb(169, 169, 169)")){
				return true;
		}
	}

	if(($("#sqr"+1).css("background-color")===$("#sqr"+5).css("background-color"))&&
		($("#sqr"+1).css("background-color")===$("#sqr"+9).css("background-color"))&&
		($("#sqr"+1).css("background-color")!="rgb(169, 169, 169)")){
				return true;
		}

	if(($("#sqr"+3).css("background-color")===$("#sqr"+5).css("background-color"))&&
		($("#sqr"+3).css("background-color")===$("#sqr"+7).css("background-color"))&&
		($("#sqr"+3).css("background-color")!="rgb(169, 169, 169)")){
				return true;
		}
	return false;
}

var rgbtohex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};