// Setto le proprietà globali del gioco
var grid = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]; // L'array della griglia, contiene 10 posizioni che verrano riempite con l'id del giocatore che ha cliccato nella cella
var turn = 1; // Il turno di gioco, contiene l'id del giocatore a cui spetta il turno
var movesNum = 0; // Numero di mosse eseguite
var playerName = document.getElementById( 'player-in-turn' );
			
// Funzione che al click assegna la cella, cambia turno, verifica condizioni di vittoria e nel caso segnala e resetta il gioco
function printData( cellId ) {
				
	// Setto una variabile per controllare la vittoria e l'id della cella cliccata
	var isWin = false;
	var spanId = document.getElementById( cellId );
				
	// Se il giocatore clicca su una cella già usata, ritorno
	if( grid[ cellId ] !== 0 ) {
		console.log( "player" + turn + "ha cliccato una cella già occupata, annullo.\nTocca ancora a player" + turn + "." );
		return;
	}
				
	// Se è il turno del giocatore 1...
	if( turn == 1 ) {
		
		// ...gli assegno la casella e passo il turno a 2
		grid[ cellId ] = 1;
		spanId.innerHTML = "X";
		turn = 2;
		playerName.innerHTML = "O";
		console.log( "Ha giocato player1, ha messo una X in posizione " + cellId + ".\nTocca a player2." );
		
	}
	// Altrimenti, è il turno del giocatore 2 quindi...
	else {
		
		// ...gli assegno la casella e passo il turno a 1
		grid[ cellId ] = 2;
		spanId.innerHTML = "O";
		turn = 1;
		playerName.innerHTML = "X";
		console.log( "Ha giocato player2, ha messo una O in posizione " + cellId + ".\nTocca a player1." );
		
	}
	
	// Controllo eventuali vittorie
	// Ciclo per verificare un tris in orizzontale
	for( var i = 1; i <= 7; i = i + 3 ) {
		
		// Se la cella è uguale a quella a fianco e a quella successiva, è un tris
		if( ( grid[ i ] == grid[ i + 1 ] ) && ( grid[ i ] == grid[ i + 2 ] ) && ( grid[ i ] != 0 ) ) {
			
			console.log( "Tris in orizzontale nelle Caselle " + i + ", " + ( i + 1 ) + " e " + ( i + 2 ) + "!" );
			isWin = true;
			
		}
		
	}
	
	// Ciclo per verificare un tris in verticale
	for( var j = 1; j <= 3; j++ ) {
		
		// Se la cella è uguale a quella di sotto e a quella successiva, è un tris
		if( ( grid[ j ] == grid[ j + 3 ] ) && ( grid[ j ] == grid[ j + 6 ] ) && ( grid[ j ] != 0 ) ) {
			
			console.log( "Tris in verticale nelle Caselle " + j + ", " + (j + 3) + " e " + ( j + 6 ) + "!" );
			isWin = true;
			
		}
		
	}
	
	// Se la cella è uguale a quella sotto a destra e a quella successiva, è un tris
	if( ( grid[ 1 ] == grid[ 5 ] ) && ( grid[ 1 ] == grid[ 9 ] ) && ( grid[ 5 ] != 0 ) ) {
		
		console.log( "Tris in diagonale nelle Caselle 1, 5 e 9!" );
		isWin = true;
			
	}
	
	// Se la cella è uguale a quella sotto a sinistra e a quella successiva, è un tris
	if( ( grid[ 3 ] == grid[ 5 ] ) && ( grid[ 3 ] == grid[ 7 ] ) && ( grid[ 5 ] != 0 ) ) {
		
		console.log( "Tris in diagonale nelle Caselle 3, 5 e 7!" );
		isWin = true;
			
	}
	
	// In ogni caso aumento il numero di mosse giocate
	movesNum++;
	
	// Se c'è una vittoria oppure le mosse sono arrivate a 9 (il massimo)...
	if( isWin || movesNum == 9 ) {
		
		var resultString;
		
		//... Se è una vittoria...
		if( isWin ) {
			
			// ...Se il turno successivo sarebbe stato del giocatore 1, allora ha vinto il giocatore 2
			if( turn == 1 ) {
				
				resultString = "Ha vinto O!";
				turn = 2;
				
			}
			/// Altrimenti, il contrario
			else {
				
				resultString = "Ha vinto X!";
				turn = 1;
				
			}
			
		}
		// Altrimenti vuol dire che si è raggiunto il numero di mosse massimo
		else {
			
			resultString = "Patta";
			
		}
		
		// Segnalo il risultato
		console.log( resultString );
		alert( resultString );
		
		// Resetto il gioco
		grid = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]; // La griglia deve essere azzerata
		movesNum = 0; // Numero di mosse = 0
		
		// Resetto il messaggio di a chi tocca
		if( turn == 1 ) {
			playerName.innerHTML = "X";
		}
		else {
			playerName.innerHTML = "O";
		}
		
		// Per ogni cella, rimuovo il segno e risetto il numero della cella
		for( var k = 1; k <= 9; k++ ) {
			window.document.getElementById( k ).innerHTML = '&nbsp;';
		}
		
	}
	
}