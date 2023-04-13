<script>
  export let tipology = ""; 
  function setTipology(event) {
    tipology = event.srcElement.attributes.value.value;
    window.location.replace("questions.html?value=" + tipology); 
  }
</script>

<div class="p-10 bg-yellow-200">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-8">
    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Sport</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button
            value="sport"
            class="btn btn-primary bg-yellow-200 text-black border-yellow-100 shadow-2xl hover:bg-yellow-200 hover:font-bold hover:border-yellow-100 hover:outline-none hover:ring hover:ring-yellow-300"
            on:click={setTipology}
          >
            Gioca
          </button>
        </div>
      </div>
    </div>

    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Storia</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button
            class="btn transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 btn-primary bg-yellow-200 text-black border-yellow-100 shadow-2xl hover:bg-yellow-200 hover:border-yellow-100 hover:outline-none hover:ring hover:ring-yellow-300"
            value="storia"
            on:click={setTipology}
            >Gioca
          </button>
        </div>
      </div>
    </div>

    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Scienze</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button
            value="scienze"
            on:click={setTipology}
            class="btn btn-primary bg-yellow-200 text-black border-yellow-100 shadow-2xl hover:bg-yellow-200 hover:border-yellow-100 hover:outline-none hover:ring hover:ring-yellow-300"
          >
            Gioca</button
          >
        </div>
      </div>
    </div>

    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Film</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button
            value="film"
            on:click={setTipology}
            class="btn btn-primary bg-yellow-200 text-black border-yellow-100 shadow-2xl hover:bg-yellow-200 hover:border-yellow-100 hover:outline-none hover:ring hover:ring-yellow-300"
          >
            Gioca
          </button>
        </div>
      </div>
    </div>

    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Geografia</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button
            value="geografia"
            on:click={setTipology}
            class="btn btn-primary bg-yellow-200 text-black border-yellow-100 shadow-2xl hover:bg-yellow-200 hover:border-yellow-100 hover:outline-none hover:ring hover:ring-yellow-300"
            >Gioca</button
          >
        </div>
      </div>
    </div>

    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Videogiochi</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button
            value="videogiochi"
            on:click={setTipology}
            class="btn btn-primary bg-yellow-200 text-black border-yellow-100 shadow-2xl hover:bg-yellow-200 hover:border-yellow-100 hover:outline-none hover:ring hover:ring-yellow-300"
          >
            Gioca</button
          >
        </div>
      </div>
    </div>

    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Arte</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button
            value="arte"
            on:click={setTipology}
            class="btn btn-primary bg-yellow-200 text-black border-yellow-100 shadow-2xl hover:bg-yellow-200 hover:border-yellow-100 hover:outline-none hover:ring hover:ring-yellow-300"
          >
            Gioca</button
          >
        </div>
      </div>
    </div>

    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Cultura generale</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button
            value="cultura_generale"
            on:click={setTipology}
            class="btn btn-primary bg-yellow-200 text-black border-yellow-100 shadow-2xl hover:bg-yellow-200 hover:border-yellow-100 hover:outline-none hover:ring hover:ring-yellow-300"
          >
            Gioca
          </button>
        </div>
      </div>
    </div>

    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Letteratura italiana</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button
            value="letteratura_italiana"
            on:click={setTipology}
            class="btn btn-primary bg-yellow-200 text-black border-yellow-100 shadow-2xl hover:bg-yellow-200 hover:border-yellow-100 hover:outline-none hover:ring hover:ring-yellow-300"
          >
            Gioca
          </button>
        </div>
      </div>
    </div>

    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Mitologia</h2>
        <p>If a dog chews shoes whose shoes does he choos?</p>
        <div class="card-actions justify-end">
          <button
            value="mitologia"
            on:click={setTipology}
            class="btn btn-primary bg-yellow-200 text-black border-yellow-100 shadow-2xl hover:bg-yellow-200 hover:border-yellow-100 hover:outline-none hover:ring hover:ring-yellow-300"
          >
            Gioca</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
