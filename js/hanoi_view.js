class HanoiView {
  constructor(game, $rootEl) {
    this.game = game;
    this.$rootEl = $rootEl;
    this.setupTowers();
    this.clickTower();
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
    let $pile1 = $("<ul>").addClass("pile").data('pos',0);
    let $pile2 = $("<ul>").addClass("pile").data('pos',1);
    let $pile3 = $("<ul>").addClass("pile").data('pos',2);
    for (let i = 0; i < this.game.towers.length; i++) {
      for (let j = 0; j < this.game.towers[i].length; j ++){
        let $disc = $("<li>")
          .addClass(`disc${this.game.towers[i][j]}`)
          .data("num", i);
        $pile1.prepend($disc);
      }
    }
    this.$rootEl.append($pile1, $pile2, $pile3);
  }

  render() {}
}

module.exports = HanoiView;
