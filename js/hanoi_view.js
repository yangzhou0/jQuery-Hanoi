class HanoiView{
  constructor(game,$rootEl){
    this.game = game;
    this.$rootEl = $rootEl;
    this.setupTowers();
  }


  setupTowers(){
    let $pile1 = $('<ul>').addClass('pile');
    let $pile2 = $('<ul>').addClass('pile');
    let $pile3 = $('<ul>').addClass('pile');
    for (let i = 1; i <= 3; i++ ){
      let $disc = $('<li>').addClass('disc').data('num',i);
      $pile1.append($disc);
    }
    this.$rootEl.append($pile1,$pile2,$pile3);
  }
}

module.exports = HanoiView;
