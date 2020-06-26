class Winner {
  winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  checkWinner(player) {
  // let winner = false;
    console.log(player);
    console.log(this.indexarr);
    for (let i = 0; i < this.winningCondition.length; i++) {
     this.winner = true;
      let firstComb = this.winningCondition[i];
      for(let j = 0;j< firstComb.length;j++){
        let comb = firstComb[j];
        if(this.indexarr[comb] !== player){
          this.winner = false;
          break;
        }
      }
      if(this.winner){
        console.log(this.winner);
        break;
      }
    }
    if(this.winner){
      document.getElementById('Winner').innerHTML = player;
    }
 
  }
}

class printClass extends Winner {
  player1 = true;
  player2 = false;
  indexarr = Array(9).fill("");
  winner = false;
  getElemnt() {
    const section = document.getElementById("container");
    //console.log(section);
    this.divEle = section.querySelectorAll("div");
    //console.log(divEle);
    for (let i = 0; i < this.divEle.length; i++) {
      this.divEle[i].addEventListener(
        "click",
        this.play.bind(this, i, this.divEle[i])
      );
    }
  }

  play(index, div1) {
    //console.log(index);
    //console.log(div1.innerHTML = 'x');
    //console.log(this)
    //console.log(this.player1, this.player2);
    if(this.winner){
      return;
    }
    if (this.player1 && !div1.innerHTML) {
      div1.textContent = "X";
      this.player1 = false;
      this.player2 = true;
      this.indexarr[index] = "X";
      //console.log(this.checkWinner("X"));
      this.checkWinner("X");
    } else if (this.player2 && !div1.innerHTML) {
      div1.textContent = "0";
      this.player1 = true;
      this.player2 = false;
      this.indexarr[index] = "0";
      //console.log(this.checkWinner("0"));
      this.checkWinner("0");
    }
  }
}

const a = new printClass();
a.getElemnt();
