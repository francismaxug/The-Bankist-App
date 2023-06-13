'use strict'
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Francis Smartman',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2023-01-26T17:01:17.194Z",
    "2023-01-10T23:36:17.929Z",
    "2023-01-03T10:51:36.790Z",
    "2023-02-08T14:11:59.604Z",
    "2023-04-23T07:42:02.383Z",
    "2023-04-28T09:15:04.904Z",
    "2023-04-30T10:17:24.185Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const overlay = document.querySelector(".overlay")
const good = document.querySelector(".good")
const timess = document.querySelector(".sharp")
const help = document.querySelector(".help")
const mills = document.querySelector(".mills")
const body = document.querySelector("body")


help.addEventListener("click", ()=>{
  overlay.classList.remove("bad")
  body.style.overflow="hidden"
  good.classList.remove("bars")
})

function vusted(){
  overlay.classList.add("bad")
  body.style.overflow=""
  good.classList.add("bars")
}
timess.addEventListener("click", vusted)
overlay.addEventListener("click", vusted)
mills.addEventListener("click", vusted)

document.addEventListener("keydown", (e)=>{
  if(e.key==="Escape" && !good.classList.contains("bad")){
   vusted()
  }
})




/////////////////////////////////////////////////
/////////////////////////////////////////////////
const movemen = [200, 450, -400, 3000, -650, -130, 70, 1300];
// window.onload=Fast
// function Fast(){
//   alert("HOW TO GET STARTED\n 1. On the user input, enter 'js' and enter '1111' as the pin\n 2.Pres Enter\n 3. On the transfer money board, you can perform an activity by transfering money to 'jd' with amount not greater than your balance, else transfer wont be succesful \n 4. Upon a successful transfer, you can go to jd's account to check if he recieved the money you transfered. you can acces his account using user=jd and pin as '4444'\n You can as well transfer money from his account to your 'js' account\n 5. you can also request for a loan on the loan board and also close your acount on the close account board\n 5. Take not of your 'In' , 'Out' and interest balances below the dashboard \n 6. After 3 minutes of inactivity, account automatically close down.")
// }
// containerApp.style.opacity= "1"
// const serc = new Date("2023-04-23T07:42:02.383Z")
// console.log(serc);
// console.log(serc.getDay());
// console.log(serc.getMonth());
// console.log(serc.getFullYear());

// movemen.forEach((val)=>{
//   const local = navigator.language
// const options = {
// style: "currency",
// currency: "GHC"
// }
//   const check = val<0 ? Math.abs(val):val
//   console.log( new Intl.NumberFormat(local, options).format(check))
// })

const dateresults = function(date){
  const NumberOfDays = (date1, date2)=>Math.round(Math.abs(date2-date1) /(1000 * 60 * 60 * 24))
const returnDate= NumberOfDays(new Date(), date)
console.log(returnDate);
  if (returnDate===0)return "Today"
  if (returnDate===1)return "Yesterday"
  if(returnDate<=7) return `${returnDate} days ago`
  else{
    const year = date.getFullYear()
    const month = `${date.getMonth()+1}`.padStart(2,0)
    const day = `${date.getDay()+1}`
     return `${day}/${month}/${year}`
  }
 
}

const pract = function (acc, sorted=false){
  containerMovements.innerHTML=""
  // const moves = sorted ? acc.movements.slice().sort((a,b)=>a-b): acc.movements
  const moves = acc.movements
  moves.forEach(function(val, i, arr){
    const Dates = new Date(acc.movementsDates[i])
    const displayDates = dateresults(Dates)
    const type = val<0 ? "withdrawal" : "deposit"
    const local = navigator.language
    const options = {
    style: "currency",
    currency: "GHC"
    }
    const sell = new Intl.NumberFormat(local, options).format(val)
    setTimeout(() => {
      const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__date">${displayDates}</div>
      <div class="movements__value">${sell}</div>
    </div>
      `
      containerMovements.insertAdjacentHTML("afterbegin", html)
    }, 500);

  })
}

const kakra = function(acc){
acc.balance = acc.movements.reduce((accu,arr)=>accu+arr,0)
const newB = acc.balance.toFixed(2)
const local = navigator.language
const options = {
style: "currency",
currency: "GHC"
}
labelBalance.textContent = new Intl.NumberFormat(local,options).format(newB)

  // labelBalance.textContent = `${acc.balance.toFixed(2)} GHC`
  // acc.sorted = acc.movements.sort((a,b)=>a-b)
  // console.log(acc.sorted)
}

const variousData = function (clones){
const local = navigator.language
const options = {
style: "currency",
currency: "GHC"
}

  const deposit = clones.movements.filter((great)=>great>0).reduce((accu,add)=> accu+add,0)
  labelSumIn.textContent = new Intl.NumberFormat(local,options).format(deposit)
  // labelSumIn.textContent = `${deposit.toFixed(2)} GHC`

  const withdrawal = clones.movements.filter((great)=>great<0).reduce((accu,add)=> accu+add,0)
  labelSumOut.textContent = new Intl.NumberFormat(local,options).format(Math.abs(withdrawal))
  // labelSumOut.textContent = `${Math.abs( withdrawal).toFixed(2)} GHC` 

  const interest = clones.movements.filter((now)=> now>0).map((onw)=> onw* clones.interestRate/100).reduce((accu, num)=> accu+num,0)
  labelSumInterest.textContent = new Intl.NumberFormat(local,options).format(interest)
  // labelSumInterest.textContent = `${interest.toFixed(2)} GHC`
}

const newAddintion = function (started){
  started.forEach((val)=>{
    val.username = val.owner.toLowerCase().split(" ").map((game)=>game[0]).join("") 
  })
}
newAddintion(accounts)
console.log(accounts);

const updateUi= function(aacc){
  pract(aacc)
    variousData(aacc)
    kakra(aacc)
}

const timer = function(){
  // let time = 240
  // const vast = setInterval(() => {
  //   const min=String(Math.trunc(time/60)).padStart(2,0)
  //   const sec=String(time%60).padStart(2,0)
   
  //   labelTimer.textContent=`${min}:${sec}`
  //   time--

  //   if(time===0){
  //     containerApp.style.opacity=0
  //     labelWelcome.textContent=`Login to get Started`
  //     clearInterval(vast)
  //   }
  // }, 1000);

  //Now we want the time to start exactly at the given time so we change the above function and call it immediately when the function is called. we do that below.
  let time = 240
  const saver = () => {
    const min=String(Math.trunc(time/60)).padStart(2,0)
    const sec=String(time%60).padStart(2,0)
   
    labelTimer.textContent=`${min}:${sec}`
    if(time===0){
      containerApp.style.opacity=0
      labelWelcome.textContent=`Login to get Started`
      clearInterval(vast)
    }
    time--
  }
 
  saver()
  const vast = setInterval(saver,1000)
  //we want to use this value of the vast variable somewer so we return it.
  return vast
}

let manual, times;
btnLogin.addEventListener("click", (e)=>{
  e.preventDefault()
  console.log("Hello js");
  manual = accounts.find((find)=>
  find.username === inputLoginUsername.value
 )
 console.log(manual);

  if(manual?.pin === +inputLoginPin.value){

    const setnewDate= new Date()
    const options = {
      hour: "numeric",
      minute: 'numeric',
      year: "numeric",
      month: "long",
      day: "2-digit",
      weekday: "long"
    }
    const local = navigator.language
    console.log(local)
    labelDate.textContent= new Intl.DateTimeFormat(local,options).format(setnewDate)

    //Apart from the above , we can also use the one below

    // const date = new Date()
    // const hours = `${date.getHours()}`.padStart(2,0)
    // const minutes = `${date.getMinutes()}`.padStart(2,0)
    // const year = date.getFullYear()
    // const month = `${date.getMonth()+1}`.padStart(2,0)
    // const day = `${date.getDay()}`.padStart(2,0)
    // labelDate.textContent= `${day} / ${month} / ${year},  ${hours} : ${minutes}`

    inputLoginPin.blur()
    //displayimg UI
    containerApp.style.opacity="1"

    //we again dnt want or timer to class with other logins so we stop the timer and if it exist and return it again after a new login
    if(times) clearInterval(times)
    times = timer()
    updateUi(manual)
    //without using the function, we can also do this
    /*
    pract(manual.movements)
    variousData(manual)
    kakra(manual)
*/

// setInterval(() => {
//   const int = new Date()
//       // const hour = int.getHours()
//       const minute = int.setMinutes()
//       const seconds = int.getSeconds()
//      labelTimer.textContent = `${minute}:${seconds} `
//   }, 1000)

    const name=manual.owner.split(" ")[0]
    labelWelcome.textContent=`Welcome back, ${name}`
    inputLoginUsername.value=""
    inputLoginPin.value=""
    
  }
})




btnTransfer.addEventListener("click", (e)=>{
  e.preventDefault()
  const transFarTo= +inputTransferAmount.value
  const transferToWho = accounts.find((m)=> m.username === inputTransferTo.value
  )
  console.log(transFarTo)
  console.log(transferToWho)

  if(transFarTo>0 && manual.balance>= transFarTo && transferToWho && transferToWho?.username !== manual.username  ){

    inputTransferAmount.blur()
    manual.movementsDates.push(new Date().toISOString())
    transferToWho.movementsDates.push(new Date().toISOString())
    console.log(accounts)
    console.log(transferToWho)
    console.log(manual.movements)
    transferToWho.movements.push(transFarTo)
    manual.movements.push(-(transFarTo))

    clearInterval(times)
    times= timer()

    updateUi(manual)
    
    //without using the function, we
    /*
    pract(manual.movements)
    variousData(manual)
    kakra(manual)
    */
}})

btnClose.addEventListener("click", (e)=>{
  e.preventDefault()
    const logOutNmae= inputCloseUsername.value
    const logOutPin = +inputClosePin.value
    console.log(logOutNmae, logOutPin);
  if(manual.username===logOutNmae && manual.pin===logOutPin){
    //find account
    const findIndex = accounts.findIndex((b)=>b.username === logOutNmae)
    console.log(findIndex)
    //close acccount
   const cool =  accounts.splice(findIndex, 1)
   console.log(cool); 
   //taking off UI
   containerApp.style.opacity= "0"
   inputCloseUsername.value = inputClosePin.value =""
  }
  console.log(accounts);
})

btnLoan.addEventListener("click", (e)=>{
  e.preventDefault()
  const amount = Math.floor(inputLoanAmount.value)
  //Check condition to see if requsted amount is 10% of the loan amount
  if(amount> 0 && manual.movements.some((get)=> get>= amount*0.1)){
    setTimeout(() => {
      manual.movements.push(amount)
      manual.movementsDates.push(new Date().toISOString())
      updateUi(manual)
    }, 1000);
    clearInterval(times)
    times= timer()

}})

// let sortedMovements=false
// btnSort.addEventListener("click", (e)=>{
//   e.preventDefault()
// //  const set= manual.sorted = manual.movements
// // btnSort.classList.remove("acc")
// // pract(manual.sorted)

// //  if(!btnSort.classList.contains("acc"))
// //   pract(manual.movements)
// pract(manual.movements, !sortedMovements)
// sortedMovements = !sortedMovements
// })



/////////////////////////////////////////////////
