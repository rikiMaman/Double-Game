

let arrCard = ["../pictures/1.png", "../pictures/2.png", "../pictures/3.png", "../pictures/4.png", "../pictures/5.webp",
    "../pictures/6.png", "../pictures/7.png", "../pictures/8.png", "../pictures/9.webp", "../pictures/10.webp", "../pictures/11.png",
    "../pictures/12.webp", "../pictures/13.png", "../pictures/14.webp", "../pictures/15.png", "../pictures/16.webp", "../pictures/17.webp",
    "../pictures/18.webp", "../pictures/19.png", "../pictures/20.webp", "../pictures/21.webp", "../pictures/22.png", "../pictures/23.webp",
    "../pictures/24.webp", "../pictures/25.png", "../pictures/26.webp", "../pictures/27.webp", "../pictures/28.webp"];

const card1 = document.querySelector('.circles #a');
const card2 = document.querySelector('.circles #a');

let user_name;
let user_best;
let timer_length=15
let players;
let winner = 50;
let timer = 15;
let life=4;
let error=0;
//לא צריכים להשתנות
const add_to_score = 5;
const sub_from_score = -2;
 main();
function main() {
    document.querySelector('.container.user .sign_in').addEventListener('click', (e) => {
        e.preventDefault();
        let input = document.getElementById('input_name');
        user_name = input.value;
        players = JSON.parse(localStorage.getItem('players'));
        if (valid_form(input)) {
            //אם קיים item בשם player
            //אם לא קיים שם משתמש בזיכרון ההמקומי של המחשב
            //נוסיף שם משתמש
            if (players) {
                if (!players.find(p => p.name == user_name))
                    players.push({ name: user_name, best: 0 });
            }
            else {
                players = [{ name: user_name, best: 0 }];
            }
            user_best = players.find(p => p.name == user_name).best;
            localStorage.setItem("players", JSON.stringify(players));
             document.querySelector('.container.user').classList.add('hidden');
            document.querySelector('#score .user_name').innerHTML = user_name;
            // init_cards();

            // localStorage.setItem("players", JSON.stringify(players));
            // document.querySelector('.container.user').classList.add('hidden');
            // document.querySelector('.container.play').classList.remove('hidden');
            // document.querySelector('#score .user_name').innerHTML = user_name;

        }
    });
}
function fill_cards() {
    index = 1;
    document.getElementById('circles').style.display = 'flex';
    document.getElementById('timer').style.display = 'flex';
    document.getElementById('score').style.display = 'flex';
    document.getElementById('levels').style.display = 'none';
    document.getElementById('log_in').style.display = 'none';
    //מערך עזר בגודל מספר הקלפים המקורי
    let arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 8; i++) {//fil the first circle with imeges
        rand = Math.floor(Math.random() * 28);
        while (arr2[rand] != 0)
            rand = Math.floor(Math.random() * 28);
        //נסמן ב 1 שכבר השתמשנו בקלף
        arr2[rand] = 1;
        document.getElementById('a' + i).src = arrCard[rand];
        document.getElementById('a' + i).setAttribute("class","img")
        document.getElementById('a' + i).addEventListener("click", clickFalse);
    }
    for (let i = 0; i < 8; i++) {//fil the second circle with imeges
        rand = Math.floor(Math.random() * 28);
        while (arr2[rand] != 0)
            rand = Math.floor(Math.random() * 28);
        arr2[rand] = 1;
        document.getElementById('b' + i).src = arrCard[rand];
        document.getElementById('b' + i).setAttribute("class","img")
        document.getElementById('b' + i).addEventListener("click", clickFalse);
    }
    for (var i = 0; i < arr2.length; i++) {//match set
        if (arr2[i] == 0) {
            rand = Math.floor(Math.random() * 8);
            document.getElementById('b' + rand).src = arrCard[i];
            document.getElementById('b' + rand).removeEventListener("click", clickFalse);
            document.getElementById('b' + rand).addEventListener("click", clickTrue);
            document.getElementById('b' + rand).setAttribute("class","img")
            rand1 = Math.floor(Math.random() * 8);
            document.getElementById('a' + rand1).src = arrCard[i];
            document.getElementById('a' + rand1).removeEventListener("click", clickFalse);
            document.getElementById('a' + rand1).setAttribute("class","img")
            document.getElementById('a' + rand1).addEventListener("click", clickTrue);
            break;
        }
    }
    document.querySelector('#score .best label').innerHTML = user_best;
    start_timer();
}

function hide() {
    document.getElementById("wrong_msg").removeChild(d);
    // document.getElementById("timer").style.display = "block";
    //מילוי רנדומלי חדש של הקלפים
    fill_cards();
}
function update_localStorage() {
    players.find(p => p.name == user_name).best = user_best;
    localStorage.setItem("players", JSON.stringify(players));
}


function clickFalse() {
    update_score(false);
    if (life > 0) {// כאן תקפוץ המילה טעות על המסך
        d = document.createElement("img");
        d.setAttribute("class", "winer");
        d.setAttribute("id", "wrong");
        d.setAttribute("src", "../pictures/WRONG.png");
        document.getElementById("wrong_msg").appendChild(d);
        // document.getElementById("timer").style.display = "none";
         y = new Audio("../audio/wrong.mp3");
         y.play();
        //מסיר לחיצות
        document.getElementById('b' + rand).removeEventListener("click", clickTrue);
        document.getElementById('a' + rand1).removeEventListener("click", clickTrue);
        for (let i = 0; i < rand; i++) {
            document.getElementById('b' + i).removeEventListener("click", clickFalse);
        }
        for (i = rand + 1; i < 8; i++) {
            document.getElementById('b' + i).removeEventListener("click", clickFalse);
        }
        for (let i = 0; i < rand1; i++) {
            document.getElementById('a' + i).removeEventListener("click", clickFalse);
        }
        for (let i = rand1 + 1; i < 8; i++) {
            document.getElementById('a' + i).removeEventListener("click", clickFalse);
        }
         setTimeout(hide, 1000);
        // clearInterval(p);
        // clearInterval(id111);
        // document.getElementById('life' + countlife).style.display = 'none';
        life--;
    }

    else {//מציג gameover

        //  document.getElementById("result").innerHTML = localStorage.getItem('nameL') + " הצלחת " + count + " מתוך " + (count +4);
        // document.getElementById("id02").removeAttribute("id");
        // document.getElementById("timer").style.display = "none";
        // document.getElementById("bo").removeChild(document.getElementById("a"));
        // document.getElementById("bo").removeChild(document.getElementById("b"));
        // document.getElementById("bo").removeChild(document.getElementById("left"));
        // y = new Audio("picture/end.mp3");
        // y.play();
        // setTimeout(hide, 1000);
    }







}
function clickTrue()
{
    // count++;
    //מציג תמונת מצויין
    update_score(true);
    d = document.createElement("img")
    d.setAttribute("class", "winer");
    d.setAttribute("src", "../pictures/WELL DONE 2.png");
    document.getElementById("wrong_msg").appendChild(d);
    // document.getElementById("timer").style.display = "none";
    y = new Audio("../audio/message.WAV");
    y.play();
     setTimeout(hide, 1000);
    // clearInterval(p);
    // clearInterval(id111);
    //מסיר לחיצות
    document.getElementById('b' + rand).removeEventListener("click",  clickTrue);
    document.getElementById('a' + rand1).removeEventListener("click",  clickTrue);
    for (let i = 0; i < rand; i++) {
        document.getElementById('b' + i).removeEventListener("click", clickFalse);
    }
    for (i = rand + 1; i < 8; i++) {
        document.getElementById('b' + i).removeEventListener("click", clickFalse);
    }
    for (let i = 0; i < rand1; i++) {
        document.getElementById('a' + i).removeEventListener("click", clickFalse);
    }
    for (let i = rand1 + 1; i < 8; i++) {
        document.getElementById('a' + i).removeEventListener("click", clickFalse);
    }

}
function valid_form(input) {
    let is_valid = true;
    //תקינות קלט של שם משתמש
    let msg_coteiner = document.getElementById('msg_container');
    if (input.value == '') {
        msg_coteiner.innerHTML = 'זהו שדה חובה';
        is_valid = false;
    }
    else {
        let pattern = input.dataset.pattern;
        if (!new RegExp("^" + pattern + "$").test(input.value)) {
            msg_coteiner.innerHTML = input.dataset.error_msg;
            is_valid = false;
        }
    }
    return is_valid;
}

function check_if_pairs(e) {
    if ((e.currentTarget.dataset.card == 1 && e.currentTarget.dataset.index == index_pair1) ||
        (e.currentTarget.dataset.card == 2 && e.currentTarget.dataset.index == index_pair2)) {
        document.getElementById("corect_card").play();
        update_score(true);
        // init_cards();
        // init_timer();
    }
    else {
        update_score(false);
    }

}
function update_score(isWin) {
    const score = document.querySelector('#score .score label');
    const best = document.querySelector('#score .best label');
    let source = parseInt(score.innerHTML);
    //אם היה ניצחון
    if (isWin) {
        score.innerHTML = source + add_to_score;
        if (user_best < score.innerHTML)
            user_best = parseInt(score.innerHTML);
        if (score.innerHTML > winner) {
            // winner_status();
        }
    }
    //אם היה כישלון, ניבדוק אם הניקוד פלוס
    //הפחתה על כישלון קטן מאפס- נציג 0
    else if (source + sub_from_score < 0) {
        score.innerHTML = 0;
    }
    else {
        score.innerHTML = source + sub_from_score;
        if (score.innerHTML < winner - 50)
            winner -= 50;
    }
    best.innerHTML = user_best;
    update_userbest();
}

function update_userbest() {
    players.find(p => p.name == user_name).best = user_best;
    localStorage.setItem("players", JSON.stringify(players));
}

function winner_status() {
    document.querySelector('.winner').classList.remove('hidden');
    document.querySelector('.winner').style.width = '160px';
    document.querySelector('.winner img').style.width = '160px';
    document.querySelector('.winner img').style.left = '0';
    setTimeout(() => {
        document.querySelector('.winner img').style.width = '0';
        document.querySelector('.winner img').style.left = '300%';
    }, 2000);
    winner += 50;
}
function start_timer() {
    clearInterval(timer);
    let index = document.getElementById('timer');
    index.classList.remove('blink');
    let counter = timer_length;
    timer = setInterval(function () {
        index.innerHTML = counter--;
        if (counter == 5) {
            index.classList.add('blink');
        }
        if (counter == -1) {
            clearInterval(timer);
            index.innerHTML = '0';
            end_game();
        }
    }, 1000);
}
function end_game()
{
    document.getElementById("game_over").play();
    error++;
    let live = document.querySelector('#score .live label');
    live.innerHTML = parseInt(live.innerHTML) - 1;

    if (error == 4) {
        document.querySelector('.container.game_over').classList.remove('hidden');
        document.querySelector('.container.play').classList.add('hidden');
        // let opacity_in_game_over = document.getElementById('opacity_in_game_over');
        // opacity_in_game_over.style.position = 'absolute';
        live.innerHTML = 0;
        clearInterval(timer);
        error = 0;
    }
    else fill_cards();
}
