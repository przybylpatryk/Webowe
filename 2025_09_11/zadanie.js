let pies = 'pies';
let szczek = 'hau';

function wydajdzwiek(pies, szczek){
	console.log(pies + ' wydaje dzwieki: ' + szczek);
}

wydajdzwiek(pies, szczek);
console.log('');


let konto_bankowe = 10000;

function kasyno(konto_bankowe){
	let rand;
	for(let i = 0; i < 10; i++){
		rand = Math.ceil(Math.random() * 10);
		if(rand > 5){
			console.log('Wygrałeś!! Mega Jackpot!');
			konto_bankowe += 500;
		}
		else{
			console.log('Przegrałeś!!');
			konto_bankowe -= 500;
		}
	}
	console.log('');
	console.log('Twój stan konta bankowego: ' + konto_bankowe);
}

kasyno(konto_bankowe);
console.log();


const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Ile masz lat?: `, age => {
  console.log('WOW!, masz już aż ' + age + ' lat!');
  rl.close();
});
