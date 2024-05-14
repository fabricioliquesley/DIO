function calculateVictoryBalance(victory, defeat) {
  return victory - defeat;
}

function showMessage(balance) {
  let message = `O Herói tem de saldo de ${balance} está no nível de `;

  if (balance <= 10) return message + "Ferro";
  else if (balance >= 11 && balance <= 20) return message + "Bronze";
  else if (balance >= 21 && balance <= 50) return message + "Prata";
  else if (balance >= 51 && balance <= 80) return message + "Ouro";
  else if (balance >= 81 && balance <= 90) return message + "Diamante";
  else if (balance >= 91 && balance <= 100) return message + "Lendário";
  else if (balance >= 101) return message + "Imortal";
}

const victoryBalance = calculateVictoryBalance(70, 5);
console.log(showMessage(victoryBalance));
