class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  introduceYourself() {
    const message = `O Herói de nome ${this.name} está no nível de `;

    if (this.xp < 1000) {
      return console.log(message + "Ferro");
    }
    else if (this.xp > 1001 && this.xp <= 2000) {
      return console.log(message + "Bronze");
    }
    else if (this.xp > 2001 && this.xp <= 5000) {
      return console.log(message + "Prata");
    }
    else if (this.xp > 5001 && this.xp <= 7000) {
      return console.log(message + "Ouro");
    }
    else if (this.xp > 7001 && this.xp <= 8000) {
      return console.log(message + "Platina");
    }
    else if (this.xp > 8001 && this.xp <= 9000) {
      return console.log(message + "Ascendente");
    }
    else if (this.xp > 9001 && this.xp <= 10000) {
      return console.log(message + "Imortal");
    }
    else if (this.xp > 10001) {
      return console.log(message + "Radiante");
    }
  }
}

const joker = new Hero("Joker", 10003)
joker.introduceYourself()