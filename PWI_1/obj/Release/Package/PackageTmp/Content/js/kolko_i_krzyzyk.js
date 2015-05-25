var board=new Array(new Array(3),new Array(3),new Array(3));
var scoreLabels=new Array(2);
var player='X';
var nameX='X';
var nameO='O';
var winsX=0;
var winsO=0;

function clear() {
	var tds=document.getElementsByTagName('td');
	for(var i=0;i<tds.length;i++) {
		tds[i].innerText='';
		board=new Array(new Array(3),new Array(3),new Array(3));
		player='X';
	}
}

function setNames() {
	nameX=prompt("Podaj imię pierwszego gracza (X): ","gracz 1");
	nameO=prompt("Podaj imię drugiego gracza (O): ","gracz 2");

	if(nameX===null) { 
		nameX='gracz 1';
		nameO='gracz 2'; 
	}
	
	if(nameO===null) {
		nameO='gracz 2';
	}
}

function start() {
	document.getElementById('startBtn').style.display = 'none';

	var tds=document.getElementsByTagName('td');
	setNames();
	var players = document.getElementsByTagName('h3')[0];
	players.innerText = nameX + "    vs    " + nameO;

	for(var i=0;i<tds.length;i++) {
		var tdi=tds[i];
		
		tdi.x=i%3;
		tdi.y=Math.floor(i/3);
		
		tds[i].addEventListener('click',function(e) {
			var x=this.x;
			var y=this.y;
			
			if(!board[x][y]) {
				board[x][y]=player;
				this.innerText=player;
				win(player);
				
				if(player==='O') { player='X'; }
				else { player='O';} 
			}
			else {
				alert('Niedozwolony ruch');
			}
		},false);
	}
}

function draw() {
	for(var i=0;i<3;i++) {
		for(var j=0;j<3;j++) {
			if(!board[i][j]) {return false;}
		}
	}
	alert("Remis");
	clear();
	return true;
}

function whoWon() {
	if(player==='X') {
		alert('Wygrywa '+nameX+'!!!');
		alert("Rundę zaczyna "+nameO);
	}
	else {
		alert('Wygrywa '+nameO+'!!!');
		alert("Rundę zaczyna "+nameX);
	}
}

function win(player) {
	if((board[0][0]===player)&&(board[1][1]===player)&&(board[2][2]===player)) {
		whoWon();
		clear();
		return true;
	}
	if((board[0][2]===player)&&(board[1][1]===player)&&(board[2][0]===player)) {
		whoWon();
		clear();
		return true;
	}
	for(var i=0;i<3;i++) {
		if((board[i][0]===player)&&(board[i][1]===player)&&(board[i][2]===player)) {
			whoWon();
			clear();
			return true;
		}
		if((board[0][i]===player)&&(board[1][i]===player)&&(board[2][i]===player)) {
			whoWon();
			clear();
			return true;
		}
	}
	draw();
	return false;
}