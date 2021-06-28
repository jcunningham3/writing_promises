/*
function wait3seconds(){
    return new Promise((resolve,reject) => {
      setTimeout(reject, 3000)
    })
}

const h3 = document.querySelector('h3')

function changeColor(el, color){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      el.style.color = color
      resolve()
    }, 1000)
  })
}
changeColor(h3, 'red')
  .then(() => changeColor(h3, 'orange'))
  .then(() => changeColor(h3, 'yellow'))
  .then(() => changeColor(h3, 'green'))
  .then(() => changeColor(h3, 'blue'))
*/

//making a single promise
/*
let mockAjax = new Promise((resolve,reject) => {
  let probSuccess = 0.5;
  let requestTime = 1000;

  setTimeout(function(){
    let randNum = Math.random();
    if(randNum < probSuccess){
      let data = "Here's your data!";
      resolve(data);
    }
    else {
      reject("Request failed!")
    }
  }, requestTime);
});
*/

//making multiple requests with promises
/*
function mockAjax() {
  return new Promise(function(resolve, reject) {
    let probSuccess = 0.5;
    let requestTime = 1000;

    setTimeout(function(){
      let randNum = Math.random();
      if(randNum < probSuccess){
        let data = "Here's your data!";
        resolve(data);
      }
      else {
        reject("Request failed!")
      }
    }, requestTime);
  })
}

mockAjax()
  .then(data => {
    console.log(data);
    return mockAjax()
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))
*/


//ajax rip off get request function
function get(url){
  let request = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    request.onload = function(){
      if(request.readyState !== 4) return;

      if(request.status >= 200 && request.status < 300){
        resolve(JSON.parse(request.response))
      }
      else {
        reject(request.status)
      }
    }
    request.onerror = function handleError() {
      request = null;
      reject('NETWORK ERROR!')
    };
    request.open('GET', url);
    request.send();
  })
}

/*
//making multiple http requests to NUMBER API with promises mimicking ajax
get('http://numbersapi.com/23?json')
  .then(
    res => {
      console.log(res)
      let num1 =  res.text;
      document.querySelector('#numbers').innerHTML += num1 + "<br>";
      return get('http://numbersapi.com/24?json')
    })
  .then(res => {
    console.log(res)
    let num2 =  res.text;
    document.querySelector('#numbers').innerHTML += num2 + "<br>";
    return get('http://numbersapi.com/25?json')
  })
  .then(res => {
    console.log(res)
    let num3 =  res.text;
    document.querySelector('#numbers').innerHTML += num3 + "<br>";
    return get('http://numbersapi.com/26?json')
  })
  .then(res => {
    console.log(res)
    let num4 =  res.text;
    document.querySelector('#numbers').innerHTML += num4 + "<br>";
  })
  .catch(err => console.log(err))

//MAKE 2 REQUESTs TO CARDS API FROM TE SAME DECK
let deck = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
get(deck)
  .then(res => {
    //console the response
    console.log(res)
    //get the card img address
    let card = res.cards[0].image;
    //create and img element
    let img = document.createElement('img');
    //set img element's id = the card
    img.src = card;
    img.style.width = '20%';
    //target the deck id
    let deck = document.querySelector('#card-display');
    //append the img element to the deck div
    deck.appendChild(img)

    //capture the deck_id from res
    console.log(res.deck_id)
    let deck_id = res.deck_id;
    return get('https://deckofcardsapi.com/api/deck/'+ deck_id + '/draw/?count=1')
  })
  .then(res => {
    //console the response
    console.log(res)

    //get the card img address
    let card = res.cards[0].image;

    //create and img element
    let img = document.createElement('img');
    //set img element's id = the card
    img.src = card;
    img.style.width = '20%';
    //target the deck id
    let deck = document.querySelector('#card-display');
    //append the img element to the deck div
    deck.appendChild(img)
  })
  .catch(err => console.log(err))
*/

const my_deck = []
let deck = 'https://deckofcardsapi.com/api/deck/new/draw/?count=26'
get(deck)
  .then(res => {
    //console the response
    console.log(res)
    my_deck[0] = res.cards[0].image;
    my_deck[1] = res.cards[1].image;
    my_deck[2] = res.cards[2].image;
    my_deck[3] = res.cards[3].image;
    my_deck[4] = res.cards[4].image;
    my_deck[5] = res.cards[5].image;
    my_deck[6] = res.cards[6].image;
    my_deck[7] = res.cards[7].image;
    my_deck[8] = res.cards[8].image;
    my_deck[9] = res.cards[9].image;
    my_deck[10] = res.cards[10].image;
    my_deck[11] = res.cards[11].image;
    my_deck[12] = res.cards[12].image;
    my_deck[13] = res.cards[13].image;
    my_deck[14] = res.cards[14].image;
    my_deck[15] = res.cards[15].image;
    my_deck[16] = res.cards[16].image;
    my_deck[17] = res.cards[17].image;
    my_deck[18] = res.cards[18].image;
    my_deck[19] = res.cards[19].image;
    my_deck[20] = res.cards[20].image;
    my_deck[21] = res.cards[21].image;
    my_deck[22] = res.cards[22].image;
    my_deck[23] = res.cards[23].image;
    my_deck[24] = res.cards[24].image;
    my_deck[25] = res.cards[25].image;
  })
  .catch(err => console.log(err))

function hit_me(){
  let i =27;
  let card = Math.floor(Math.random()*i)
  document.querySelector('#card-display').innerHTML = '<img src=' + my_deck[card] + ' style="width:10%;">';
  i--;
  if(i == 0){
    document.querySelector('#card-display').innerHTML = 'sorry empty deck' + '<br>' +
      '<button onclick="get(deck)">play again</button>';

  }
}
