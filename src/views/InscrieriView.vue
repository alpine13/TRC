<script setup>
import { db } from '../firebase.js';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref } from 'vue';

// References to form elements
const nume = ref('');
const prenume = ref('');
const cnp = ref('');
const sex = ref('');
const localitate = ref('');
const tipCursa = ref('');
const categorie = ref('');
const email = ref('');
const telefon = ref('');
const errorMessage = ref('');
const tricou = ref(false);

// Function to handle form submission
async function inscriereParticipant() {
  const emailValue = email.value;

  const docRef = doc(db, 'participanti', emailValue);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      errorMessage.value = 'Un participant cu acest email există deja.';
    } else {
      await setDoc(docRef, {
        nume: nume.value,
        prenume: prenume.value,
        cnp: cnp.value,
        sex: sex.value,
        localitate: localitate.value,
        cursa: tipCursa.value,
        categoria: categorie.value,
        email: email.value,
        telefon: telefon.value,
        confirmat: 'Nu',
        tricou: tricou.value ? 1 : 0
      });
      console.log('Document successfully written!');
      errorMessage.value = ''; // Clear any previous error message
      window.location.reload();
    }
  } catch (error) {
    console.error('Error writing document: ', error);
    errorMessage.value = 'A apărut o eroare la înscriere.';
  }
}
</script>

<template>
  <div
    class="sm:w-3/4 lg:w-8/12 mx-auto px-3 container mt-16 mb-20 lg:mb-40 font-Poppins flex justify-center items-center"
  >
    <div class="w-[90%] sm:w-3/4 mx-auto bg-gray-700 p-6 rounded-3xl shadow-lg">
      <h1 class="text-2xl md:text-3xl font-bold mb-6 mt-3 pt-1 md:pt-4 text-center text-gray-100">
        Formular de înscriere
      </h1>
      <form class="py-8 px-1 sm:px-5 lg:px-10" @submit.prevent="inscriereParticipant">
        <div class="mb-6">
          <label for="nume" class="block text-white font-semibold mb-2">Nume</label>
          <input
            v-model="nume"
            type="text"
            id="nume"
            name="nume"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          />
        </div>

        <div class="mb-6">
          <label for="prenume" class="block text-white font-semibold mb-2">Prenume</label>
          <input
            v-model="prenume"
            type="text"
            id="prenume"
            name="prenume"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          />
        </div>

        <div class="mb-6">
          <label for="cnp" class="block text-white font-semibold mb-2">CNP</label>
          <input
            v-model="cnp"
            type="text"
            id="cnp"
            name="cnp"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          />
        </div>

        <div class="mb-6">
          <label for="sex" class="block text-white font-semibold mb-2">Sex</label>
          <select
            v-model="sex"
            id="sex"
            name="sex"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          >
            <option value="masculin">Masculin</option>
            <option value="feminin">Feminin</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="localitate" class="block text-white font-semibold mb-2">Localitate</label>
          <input
            v-model="localitate"
            type="text"
            id="localitate"
            name="localitate"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          />
        </div>

        <div class="mb-6">
          <label for="tip_cursa" class="block text-white font-semibold mb-2">Tipul cursei</label>
          <select
            v-model="tipCursa"
            id="tip_cursa"
            name="tip_cursa"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          >
            <option value="Cros">Cros</option>
            <option value="Semi Maraton">Semi Maraton</option>
            <option value="Hiking">Power Hiking</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="categorie" class="block text-white font-semibold mb-2">Categoria</label>
          <select
            v-model="categorie"
            id="categorie"
            name="categorie"
            class="red w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          >
            <option value="18-29">18-29</option>
            <option value="30-39">30-39</option>
            <option value="40-49">40-49</option>
            <option value="30-39">50-59</option>
            <option value="40-49">60-69</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="email" class="block text-white font-semibold mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          />
        </div>

        <div class="mb-6">
          <label for="telefon" class="block text-white font-semibold mb-2">Număr de telefon</label>
          <input
            v-model="telefon"
            type="tel"
            id="telefon"
            name="telefon"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          />
        </div>

        <div class="mb-6">
          <div class="flex items-start">
            <input
              type="checkbox"
              id="checkbox1"
              name="checkbox1"
              class="h-4 w-4 text-orange-600 focus:ring-bookmark-red border-gray-300 rounded mt-2c red"
              required
            />
            <label for="checkbox1" class="ml-2 block text-white"
              >Sunt de acord cu utilizarea de către organizator, precum și de către partenerii și
              sponsorii săi, a numelui meu, a fotografiilor/înregistrărilor audio/video și a
              declarațiilor mele, în scopuri de marketing sau activități promoționale în sprijinul
              organizațiilor sau cooperative. Sunt de acord că fotografiile și înregistrările
              audio/video în care sunt implicat sunt și vor fi proprietatea exclusivă a
              organizatorului, care poate decide cum să le utilizeze.</label
            >
          </div>
          <div class="flex items-start mt-6">
            <input
              type="checkbox"
              id="checkbox2"
              name="checkbox2"
              class="h-4 w-4 text-blue-600 focus:ring-bookmark-red border-gray-300 rounded mt-2 red"
              required
            />
            <label for="checkbox2" class="ml-2 block text-white"
              >Sunt de acord ca organizatorul să colecteze și să prelucreze datele mele personale
              (nume, prenume, CNP, e-mail) conform „Regulamentului (UE) 2016/679 privind protecția
              persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și
              privind libera circulație a acestor date”, precum si asupra faptului ca datele
              furnizate vor fi tratate confidențial, vor fi protejate, nu vor fi transmise catre
              nicio terta parte decat in temei legal.</label
            >
          </div>
          <div class="flex items-start mt-6">
            <input
              type="checkbox"
              id="checkbox3"
              v-model="tricou"
              name="checkbox3"
              class="h-4 w-4 text-blue-600 focus:ring-bookmark-red border-gray-300 rounded mt-1 red"
            />
            <label for="checkbox3" class="ml-2 block text-white"
              >Doresc tricou tehnic - 80 RON</label
            >
          </div>
        </div>

        <div v-if="errorMessage" class="text-red-500 text-center mb-4">{{ errorMessage }}</div>

        <div class="mt-12 text-center">
          <button
            type="submit"
            class="w-5/6 bg-orange-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Înregistrează-te
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.red {
  accent-color: rgb(243, 66, 66);
}
</style>
