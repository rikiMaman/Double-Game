let isFirstInstructions=0;
// let isStartOpen=0;
// let isFirstStart=0;
// let isInstructionsOpen=0;
document.querySelector(".for_instructions").addEventListener("click", () => {
    // if(isStartOpen===1){hideStart();}
    if(isFirstInstructions===0){showInstuctins();}
    else{hideInstructions()}
  });
//   document.querySelector(".for_start").addEventListener("click", () => {
//     if(isInstructionsOpen===1){hideInstructions()}
//     if(isFirstStart===0){showStart()}
//     else{hideStart()}
//   });
function hideInstructions(){
    document.querySelector("#instructions").classList.add("hidden");
        isFirstInstructions=0;isInstructionsOpen=0;
}
// function hideStart(){
//     document.querySelector("#start").classList.add("hidden");
//     isFirstStart=0;
//     isStartOpen=0;
// }
// function showStart(){
//     document.querySelector("#start").classList.remove("hidden");
//     isFirstStart=1;
//     isStartOpen=1;
// }
function showInstuctins(){document.querySelector("#instructions").classList.remove("hidden");
isFirstInstructions=1
isInstructionsOpen=1;
}

// function saveName(){
//     user=event.target.value;
//     console.log(user);

//     localStorage.setItem("lastUser", JSON.stringify(user));
//     // players.push({ name: user_name, best: 0 });


//     // main();
//     // function main() {
//     //     document.querySelector('.user .sign_in').addEventListener('click', (e) => {
//     //         e.preventDefault();
//     //         let input = document.getElementById('input_name');
//     //         user_name = input.value;
//     //         players = JSON.parse(localStorage.getItem('players'));
//     //         if (valid_form(input)) {
//     //             //אם קיים item בשם player
//     //             //אם לא קיים שם משתמש בזיכרון ההמקומי של המחשב
//     //             //נוסיף שם משתמש
//     //             if (players) {
//     //                 if (!players.find(p => p.name == user_name))
//     //                     players.push({ name: user_name, best: 0 });
//     //             }
//     //             else {
//     //                 players = [{ name: user_name, best: 0 }];
//     //             }
//     //             user_best = players.find(p => p.name == user_name).best;
//     //             localStorage.setItem("players", JSON.stringify(players));
//     //              document.querySelector('.container.user').classList.add('hidden');
//     //             document.querySelector('#score .user_name').innerHTML = user_name;
//     //             // init_cards();
//     //         }
//     //     });
//     // }





//     // // הדרך הפשוטה - ישר להכניס את השיא, בלי לבדוק קודם אם הבנאדם כבר ניצח במשחק
//     // const lastuser = user;
//     // data.push(lastuser);
//     // // שמירת השם המעודכן לזיכרון
//     // data_str = JSON.stringify(lastuser);
//     // localStorage.setItem("lastName", data_str);

//     // let data_str = localStorage.getItem("high_score");
//     // let data;
//     // if(!data_str){
//     //     data = [];
//     // } else {
//     //     data = JSON.parse(data_str);
//     // }
//     // console.log(data);

//     // let user_data_index = data.findIndex(obj => obj.name == user);

//     // if(user_data_index === -1){
//     //     const obj = {
//     //         score: 0,
//     //         name: user
//     //     };
//     //     data.push(obj);
//     //     }

//     // // שמירת המערך המעודכן לזיכרון
//     // data_str = JSON.stringify(data);
//     // localStorage.setItem("high_score", data_str);
// }