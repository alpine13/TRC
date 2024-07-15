<script setup>
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

function goToInscrieri() {
  router.push({ name: 'inscrieri' });
}

let faqItems = [
  {
    question: 'De ce aş participa la Turnu Roşu Challenge?',
    answer:
      'Pentru că e șansa ta să te bucuri de peisaje superbe, să-ți depășești limitele și să te distrezi într-o aventură de neuitat alături de oameni pasionați de natură și sport.'
  },
  {
    question: 'Cât de solicitante sunt traseele?',
    answer:
      'Traseele pregătite pot fi realizate în timpul maxim admis de 5 ore de orice persoană cu o pregătire fizică minimă şi dornică să exploreze zona comunei Turnu Rosu.'
  },
  {
    question: 'Până când mă pot înscrie?',
    answer:
      'Înscrierile la preţul afişat sunt disponibile până pe data de 15 septembrie 2024. Cei ce doresc să se înscrie după data stabilită, va exista o taxă suplimentară.'
  },
  {
    question: 'Unde pot vedea rezultatele?',
    answer:
      'Rezultatele primelor 5 locuri din fiecare categorie vor fi anunţate la faţa locului, iar ulterior va apărea o secţiune dedicată pe website cu rezultatele complete.'
  }
];
let activeIndex = ref(null);
function changeActiveIndex(i) {
  activeIndex.value = i;
}
</script>

<template>
  <section class="relative lg:overflow-hidden">
    <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-[84px]">
      <!-- Content -->
      <div class="flex flex-1 flex-col items-center lg:items-start">
        <h2
          class="text-slate-800 text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left mb-6 font-Lucky"
        >
          Turnu Rosu Challenge
        </h2>
        <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
          Înscrie-te la Turnu Roșu Challenge pe
          <span class="text-orange-400">22 septembrie!</span> Explorează trasee montane uimitoare la
          a doua ediție a evenimentului nostru de alergare și hiking!
        </p>
        <div class="flex justify-center flex-wrap gap-6 font-Lucky tracking-widest">
          <button type="button" class="join-btn" @click="goToInscrieri">Inscrieri</button>
        </div>
      </div>
      <!-- Image -->
      <div class="flex justify-center flex-1 mb-6 md:mb-16 lg:mb-0 z-10">
        <img
          class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full max-w-[550px]"
          src="../assets/images/mountain.png"
          alt=""
        />
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="bg-bookmark-white py-20 mt-20 lg:mt-60 lg:overflow-hidden">
    <!-- Heading -->
    <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 class="text-4xl text-center text-bookmark-blue font-Lucky">Info</h1>
      <p class="text-center text-bookmark-grey mt-4">
        Our aim is to make it quick and easy for you to access your favourite websites. Your
        bookmarks sync between your devices so you can access them on the go.
      </p>
    </div>
    <!-- Feature #1 -->
    <div class="relative mt-20 lg:mt-24">
      <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
        <!-- Image -->
        <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="" alt="" />
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h1 class="text-3xl text-bookmark-blue">Bookmark in one click</h1>
          <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
            complete control over how you manage your favourite sites.
          </p>
          <button
            type="button"
            class="btn text-white bg-gray-900 hover:bg-white hover:text-black hover:shadow-xl"
          >
            Detalii
          </button>
        </div>
      </div>
      <!-- Rounded Rectangle -->
      <div
        class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"
      ></div>
    </div>
    <!-- Feature #2 -->
    <div class="relative mt-20 lg:mt-52">
      <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
        <!-- Image -->
        <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="" alt="" />
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h1 class="text-3xl text-bookmark-blue">Intelligent search</h1>
          <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            Our powerful search feature will help you find saved sites in no time at all. No need to
            crawl through all of your bookmarks.
          </p>
          <button
            type="button"
            class="btn text-white bg-gray-900 hover:bg-white hover:text-black hover:shadow-xl"
          >
            Detalii
          </button>
        </div>
      </div>
      <!-- Rounded Rectangle -->
      <div
        class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-36"
      ></div>
    </div>
    <!-- Feature #3 -->
    <div class="relative mt-20 lg:mt-52">
      <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
        <!-- Image -->
        <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="" alt="" />
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h1 class="text-3xl text-bookmark-blue">Share your bookmarks</h1>
          <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            Easily share your bookmarks and collections with others. Create a shareable link that
            you can send at the click of a button.
          </p>
          <button
            type="button"
            class="btn text-white bg-gray-900 hover:bg-white hover:text-black hover:shadow-xl"
          >
            Detalii
          </button>
        </div>
      </div>
      <!-- Rounded Rectangle -->
      <div
        class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"
      ></div>
    </div>
  </section>

  <!-- Download -->
  <section class="py-20 mt-20">
    <!-- Heading -->
    <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 class="text-4xl text-center text-bookmark-blue font-Lucky">Atelier de pictura</h1>
      <p class="text-center text-bookmark-grey mt-4">
        Atelierul de pictură revine şi în cadrul celei de a 2-a ediţie a Turu Rosu Challenge.
        Alege-ţi kit-ul care vi se potriveşte!
      </p>
    </div>
    <!-- Cards -->
    <div
      class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16"
    >
      <!-- Card 1 -->
      <div
        class="flex flex-col rounded-xl shadow-xl hover:shadow-orange-300 hover:scale-98 lg:mb-16 bg-gray-100"
      >
        <div class="p-6 flex flex-col items-center">
          <img class="w-48" src="../assets/images/painter1.png" alt="" />
          <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Pictură pe șablon</h3>
          <p class="mb-2 text-bookmark-grey font-light">50 RON / persoană</p>
          <p class="mt-5 text-sm text-bookmark-blue text-center">
            Kit-ul conține : Pânză pre-imprimată cu un șablon jucăuș, set de culori vibrante și
            pensula. Este ușor de pictat pentru copii, fiind necesar doar ca aceștia să umple
            spațiile pre-imprimate.
          </p>
        </div>
        <hr class="border-b border-bookmark-white" />
        <div class="flex p-6">
          <button
            type="button"
            class="flex-1 btn text-white bg-gray-900 hover:bg-bookmark-white hover:text-black"
          >
            Înscrie-te!
          </button>
        </div>
      </div>
      <!-- Card 2 -->
      <div
        class="flex flex-col rounded-xl shadow-xl hover:shadow-orange-300 hover:scale-98 lg:mb-16 bg-gray-100"
      >
        <div class="p-6 flex flex-col items-center">
          <img class="w-48" src="../assets/images/painter2.png" alt="" />
          <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Pictură pe numere</h3>
          <p class="mb-2 text-bookmark-grey font-light">100 RON / persoană</p>
          <p class="mt-5 text-sm text-bookmark-blue text-center">
            Kit-ul conține : Pânză pre-imprimată cu un design complex, împărțit în zone numerotate ,
            set de culori numerotate corespunzător zonelor de pe pânză și pensule de diferite
            dimensiuni . Este ușor de urmat pentru toată lumea, iar la final veți crea o operă de
            artă uimitoare .
          </p>
        </div>
        <hr class="border-b border-bookmark-white" />
        <div class="flex p-6">
          <button
            type="button"
            class="flex-1 btn text-white bg-bookmark-purple hover:bg-bookmark-white hover:text-black"
          >
            Înscrie-te!
          </button>
        </div>
      </div>
      <!-- Card 3 -->
      <div
        class="flex flex-col rounded-xl shadow-xl hover:shadow-orange-300 hover:scale-98 lg:mb-16 bg-gray-100"
      >
        <div class="p-6 flex flex-col items-center">
          <img class="w-48" src="../assets/images/painter3.png" alt="" />
          <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Pictură liberă</h3>
          <p class="mb-2 text-bookmark-grey font-light">50 RON / persoană</p>
          <p class="mt-5 text-sm text-bookmark-blue text-center">
            Spre deosebire de variantele precedente , pornind de la pânza goală, vom crea o pictură
            unică folosind elemente din natură (frunze, flori, conuri) pe care le vom colora si
            imprima pe pânză .Culorile și pensulile vor fi puse la dispoziție de noi pentru
            realizarea picturii.
          </p>
        </div>
        <hr class="border-b border-bookmark-white" />
        <div class="flex p-6">
          <button
            type="button"
            class="flex-1 btn text-white bg-gray-900 hover:bg-bookmark-white hover:text-black"
          >
            Înscrie-te!
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="bg-bookmark-white py-20">
    <div class="container">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-bookmark-blue font-Lucky">
          Frequently Asked Questions
        </h1>
        <p class="text-center text-bookmark-grey mt-4">
          Aici sunt câteva dintre întrebările puse cel mai frecvent. Dacă aveţi altele pe lângă cele
          prezentate nu ezitaţi să ne contactaţi!
        </p>
      </div>
      <!-- FAQ Items -->
      <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
        <div v-for="(item, index) in faqItems" :key="index" class="">
          <div class="flex items-center border-b py-4">
            <span class="flex-1" :class="{ 'font-semibold': index === activeIndex }">{{
              item.question
            }}</span>
            <i
              @click="changeActiveIndex(index)"
              class="text-bookmark-purple fas fa-chevron-down cursor-pointer"
            ></i>
          </div>
          <p v-show="index == activeIndex" class="grow-1 mb-4 mt-2 text-gray-700">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 mt-20">
    <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 class="text-4xl text-center text-bookmark-blue font-Lucky">Parteneri</h1>
      <p class="text-center text-bookmark-grey mt-4">
        Mulţumim partenerilor noştri pentru implicarea în realizarea, promovarea şi dezvoltarea
        celei de a II-a ediţii a concursului Turnu Roşu Challenge
      </p>
    </div>
  </section>

  <!-- Contact Us -->
  <section class="bg-bookmark-purple text-white py-20 mt-5">
    <div class="container">
      <div class="sm:w-3/4 lg:w-2/4 mx-auto">
        <p class="font-light uppercase text-center mb-8">200+ PARTICIPANŢI</p>
        <h1 class="text-3xl text-center">Contactează-ne dacă doreşti mai multe detalii</h1>
        <div class="flex flex-col sm:flex-row gap-6 mt-8">
          <input
            type="text"
            placeholder="Enter your email address"
            class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
          />
          <button type="button" class="btn bg-gray-900 hover:bg-bookmark-white hover:text-black">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </section>

  <RouterView></RouterView>
</template>

<style scoped>
.accordion-content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
}
.accordion-content.show {
  max-height: 150px; /* Adjust to fit your content height */
  opacity: 1;
}
</style>
