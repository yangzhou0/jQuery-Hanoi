class HanoiView {
  constructor(game, $rootEl) {
    this.game = game;
    this.$rootEl = $rootEl;
    this.setupTowers();
    this.clickTower();
    this.render();
    this.fromNum;
    this.toNum;
  }

  clickTower() {
    let game = this.game;
    let board = this;
    $("ul").on("click", function(e) {
      if(!board.fromNum){
        let $selectedPile = $(e.currentTarget);
        let $discToMove = $selectedPile.children().first();
        board.fromNum = $discToMove.data('num');
        $selectedPile.addClass("selected");
      }
      else{
        let $destinationPile = $(e.currentTarget);

        let $discToLandOn = $selectedPile.children().first();
      }

    });
  }
  setupTowers() {
    for (let i = 0; i < this.game.towers.length; i++){
      let $pile = $("<ul>").addClass("pile").data('pos',i);
      this.$rootEl.append($pile);
    }
    for (let i = 0; i < this.game.towers.length; i++) {
      for (let j = 0; j < this.game.towers[i].length; j ++){
        let $disc = $("<li>")
          .addClass(`disc${this.game.towers[i][j]}`)
          .data("num", `${this.game.towers[i][j]}`);
        $(`.hanoi ul:nth-child(${i+1})`).prepend($disc);
      }
    }
  }

  render() {
    $('li').remove();
    for (let i = 0; i < this.game.towers.length; i++) {
      for (let j = 0; j < this.game.towers[i].length; j ++){
        let $disc = $("<li>")
          .addClass(`disc${this.game.towers[i][j]}`)
          .data("num", `${this.game.towers[i][j]}`);
        $(`.hanoi ul:nth-child(${i+1})`).prepend($disc);
      }
    }
  }
  
}

module.exports = HanoiView;
