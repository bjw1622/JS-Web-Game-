const $ = selector => document.querySelector(selector);

// 자바스크립트 데이터와 화면이 같이 바뀌어야 한다!

// 객체(연관이 있는 것) 추가
const hero = {
  name: '',
  lev: 1,
  maxHp: 100,
  hp: 100,
  xp: 0,
  att: 10,
};

let monster = null;
const monsterList = [
  { name: '슬라임', hp: 25, att: 10, xp: 10 },
  { name: '스켈레톤', hp: 50, att: 15, xp: 20 },
  { name: '마왕', hp: 150, att: 35, xp: 50 },
];
// 이름 입력 후 화면 전환
$('#start-screen').addEventListener('submit', event => {
  event.preventDefault();
  const name = event.target['name-input'].value;
  // const name = $('#name-input').value;
  $('#start-screen').style.display = 'none';
  $('#game-menu').style.display = 'block';
  $('#hero-name').textContent = name;
  hero.name = name;
  $('#hero-level').textContent = `${hero.lev}LEV`;
  $('#hero-hp').textContent = `HP: ${hero.xp}/${hero.maxHp}`;
  $('#hero-xp').textContent = `XP: ${hero.xp}/${15 * hero.lev}`;
  $('#hero-att').textContent = `ATT: ${hero.att}`;
});

$('#game-menu').addEventListener('submit', event => {
  event.preventDefault();
  const input = event.target['menu-input'].value;
  // 모험
  if (input === '1') {
    $('#game-menu').style.display = 'none';
    $('#battle-menu').style.display = 'block';
    // 깊은 복사
    monster = JSON.parse(
      JSON.stringify(
        monsterList[Math.floor(Math.random() * monsterList.length)]
      )
    );
    monster.maxHp = monster.hp;
    $('#monster-name').textContent = monster.name;
    $('#monster-hp').textContent = `HP: ${monster.hp}/${monster.maxHp}`;
    $('#monster-att').textContent = `ATT: ${monster.att}`;
  }
  // 휴식
  else if (input === '2') {
  }
  // 종료
  else if (input === '3') {
  }
});

$('#battle-menu').addEventListener('submit', event => {
  const input = event.target['battle-input'].value;
  if (input === '1') {
  } else if (input === '2') {
  } else if (input === '3') {
  }
});
