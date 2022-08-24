function $(elem) {
  return document.querySelector(elem)
}

class Actor {
  constructor(hp, str) {
    this.hp = hp
    this.str = str
  }

  raiseStr = () => this.str += 5

  raiseHp = () => this.str += 10
}


class Hero extends Actor {
  activateHero = () => {
    $('.hero-hp').innerText = this.hp

    $('.hit-button').addEventListener('click', (e) => {

      $('.hero').classList.add('hit')
      $('.hit-button').disabled = true

      if ($('.body').getBoundingClientRect().left < 495) {
        game.heroHit()

        $('.monster-hp').innerText = game.monster.hp

        if (game.monster.hp <= 0) {
          $('#start_game').innerText = 'TRY AGAIN?'
          game.heroWin()
        } else {
          $('.monster').classList.add('hited')
        }
      }

      if (!$('.monster').classList.contains('defeated')) {
        setTimeout(() => {
          $('.hero').classList.remove('hit')
          $('.monster').classList.remove('hited')

          $('.hit-button').disabled = false
        }, 800)
      }
    })
  }
}

class Monster extends Actor {
  activateMonster = () => {
    $('.monster-hp').innerText = this.hp

    $('.monster').classList.add('move')

    setInterval(() => {
      if ($('.body').getBoundingClientRect().left < 480) {
        game.increaseRound()

        game.monsterHit()
        $('.hero-hp').innerText = game.hero.hp

        if (game.hero.hp <= 0) {
          $('#start_game').innerText = 'TRY AGAIN?'

          game.heroDefeated()
        } else {
          $('.hero').classList.add('hited')
        }
        $('.hit-button').disabled = true

        if (!$('.hero').classList.contains('defeated')) {
          setTimeout(() => {
            $('.hero').classList.remove('hited')
            $('.hit-button').disabled = false
          }, 1500)
        }
      }

      const monsterPosition = 500
      const displayWidth = document.body.clientWidth
    }, 1000);
  }
}


class Game {
  hero = new Hero(30, 25)
  monster = new Monster(50, 6)
  round = 0
  heroScore = 0
  monsterScore = 0

  state = {
    gameStates: ['started', 'hero_win', 'hero_defeated', 'stoped'],
    current: 'stoped'
  }

  gameStarts = () => {
    this.round += 1

    if (this.round > 1) {
      $('.monster').classList.add('angry')

      $('.game-wrapper').classList.add('night')
      $('.flash').classList.add('active')
    }
    this.displayResults()

    this.hero.hp = 30;
    this.monster.hp = 50;

    $('#game').classList.remove('hero_win', 'hero_defeated', 'stoped')
    $('#game').classList.add('started')

    this.monster.activateMonster()
    this.hero.activateHero()

    $('.hit-button').disabled = false

    this.state.current = 'started'
  }

  heroWin = () => {
    game.heroScore += 1
    this.state.current = 'hero_win'
    $('#game').classList.remove('started', 'hero_defeated')
    $('#game').classList.add('hero_win')

    $('.monster').classList.remove('move')
  }

  heroDefeated = () => {
    game.monsterScore += 1
    this.state.current = 'hero_defeated'
    $('#game').classList.remove('started', 'hero_win')
    $('#game').classList.add('hero_defeated')

    $('.monster').classList.remove('move')
  }

  gameStoped = () => {
    $('#game').classList.remove('hero_win', 'hero_defeated', 'started')
    $('#game').classList.add('stoped')

    this.state.current = 'stoped'
  }

  displayResults = () => {
    $('#score').innerText = `SCORE: ${this.heroScore} - ${this.monsterScore}`
  }

  increaseRound = () => this.round++

  heroHit = () => this.monster.hp -= this.hero.str

  monsterHit = () => this.hero.hp -= this.monster.str
}

const game = new Game()

$('#start_game').addEventListener('click', e => {
  game.gameStarts()
})