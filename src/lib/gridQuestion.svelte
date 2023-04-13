<script>
  let totalpoints = 0;
  let punteggio = 500;
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get("value");

  let counter = 0;
  let sec = 25;
  let ten = 0;
  let answer = "";
  let i = 0;
  let id = 0;
  /*
  var data = { category: "sport"}
  fetch('https://projectdocker-1.lvplaka.repl.co/get_question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  */
  
  setInterval(() => {
    if (sec > 0) {
      sec--;
    }
    if (sec == 0) {
      checkAnswer();
      //window.location.replace("category.html?");
    }
    document
      .getElementById("counterElement")
      .style.setProperty("--value", "" + sec);
  }, 1000);

  setInterval(() => {
    counter++;
    if (counter != 0) {
      ten = counter - sec * 10;
    }
    switch (true) {
      case sec >= 16 && sec <= 22:
        punteggio -= 1;
        break;
      case sec >= 11 && sec < 16:
        punteggio -= 2;
        break;
      case sec >= 0 && sec < 11:
        punteggio -= 3;
        break;
    }
  }, 100);
  
  let question = [{
    question: "Chi ha vinto i mondiali 2006?",
    answers: ["Francia", "Germania", "Italia", "Inghilterra"],
    correct: "Italia"
  },{
    question: "Chi ha vinto i mondiali 2020?",
    answers: ["Francia", "Germania", "Italia", "Inghilterra"],
    correct: "Francia"
  },{
    question: "Chi ha vinto i mondiali 2006?",
    answers: ["Francia", "Germania", "Italia", "Inghilterra"],
    correct: "Italia"
  },{
    question: "Chi ha vinto i mondiali 2020?",
    answers: ["Francia", "Germania", "Italia", "Inghilterra"],
    correct: "Francia"
  },{
    question: "Chi ha vinto i mondiali 2020?",
    answers: ["Francia", "Germania", "Italia", "Inghilterra"],
    correct: "Francia"
  }]

  function reset(){
     sec = 25;
     punteggio = 500;
     ten = 0;
  }
  
  function checkAnswer(){
    if(event != undefined){
       id = event.target.id;
    answer = document.getElementById(id).value;
    
    }
    else
      answer = "c";
    
    if(question[i].correct == answer){
      totalpoints += punteggio;
    }
    reset();
    i++;
  }
</script>

{#if i <= 4}
<div class="bg-white">
  <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-15 lg:px-8">
    <div
      class="relative isolate overflow-hidden bg-yellow-200 px-6 pt-16 shadow-2xl                             sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 "
    >
      <svg
        viewBox="0 0 1024 1024"
        class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -                translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]                    sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-                    1/2"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fill-opacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#FFFFFF" />
            <stop offset="1" stop-color="#FFFFFF" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto text-center  lg:flex-auto lg:py-32 lg:text-center">
        <div class="countdown font-mono text-6xl">
          <div id="counterElement" style="--value:sec;" />
        </div>
        <h2 class="text-4xl font-bold tracking-tight text-black sm:text-4xl">
          Question #{i+1}
        </h2>
        <div class="mt-10 flex items-center justify-center ">
          <div class="mx-auto flex items-center justify-center flex-col">
            <h3
              class="mt-3 p-5 font-bold text-3xl flex items-center justify-center"
            >
              {question[i].question}
            </h3>
            
            <div
              class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 font-bold"
            >
              <div class="">
                <button on:click = {checkAnswer} value= {question[i].answers[0]}
                  id="0"
                  class="w-full bg-white  hover:outline-none hover:ring hover:ring-yellow-300 border-solid px-10 py-5 rounded-t-lg rounded-b-lg"
                >
                  {question[i].answers[0]}</button
                >
              </div>
              <div class="">
                <button on:click = {checkAnswer} value= {question[i].answers[1]}                       id="1"
                  class="w-full bg-white hover:outline-none hover:ring hover:ring-yellow-300 border-solid px-10 py-5 rounded-t-lg rounded-b-lg"
                  >{question[i].answers[1]}</button
                >
              </div>
              <div class="">
                <button on:click = {checkAnswer} value= {question[i].answers[2]}                       id="2"
                  class="w-full bg-white hover:outline-none hover:ring hover:ring-yellow-300 border-solid px-10 py-5 rounded-t-lg rounded-b-lg"
                  >{question[i].answers[2]}</button
                >
              </div>
              <div class="">
                <button on:click = {checkAnswer} value= {question[i].answers[3]}
                  id="3"
                  class="w-full bg-white hover:outline-none hover:ring hover:ring-yellow-300 border-solid px-10 py-5 rounded-t-lg rounded-b-lg"
                  >{question[i].answers[3]}</button
                >
              </div>
            </div>
          </div>
          <div class="relative mt-16 vh-8 lg:mt-8" />
        </div>
      </div>
    </div>
  </div>
</div>
{/if}
{#if i >= 5}
  <div class="bg-white ">
  <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-20 lg:px-8 flex flex-col">
    <div class="relative isolate overflow-hidden bg-yellow-200 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 ">
      <svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#FFFFFF" />
            <stop offset="1" stop-color="#FFFFFF" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto text-center  lg:flex-auto lg:py-32 lg:text-center">
        <h2 class="	select-none font-bold tracking-tight text-black sm:text-4xl">Your Score is {totalpoints}</h2>
        <h3 class=" select-none font-bold tracking-tight text-black sm:text-2xl">If you want to save your score into the leaderboard, insert your name and save</h3>
        <div class="mt-10 flex items-center justify-center flex flex-col">
          <form action="leaderboard.html" class="mx-auto">
          <div class="pb-10">
            <input type="text" id="name" class=" text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Wick" >
        </div>
            
          
            <button class="rounded-md bg-white w-full py-2.5 basis-1/5 text-base font-semibold text-gray-900 shadow-sm hover:outline-none hover:ring hover:ring-white ">Save</button>
              
          </form>
          <button class="rounded-md bg-white w-40 mt-5 py-2.5 basis-1/5 text-base font-semibold text-gray-900 shadow-sm hover:outline-none hover:ring hover:ring-white "><a href="index.html">Home</a></button>
        </div>
      </div>
      <div class="relative mt-16 vh-8 lg:mt-8">
        
      </div>
    </div>
  </div>
</div>
{/if}