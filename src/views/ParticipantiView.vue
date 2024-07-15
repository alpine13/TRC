<script setup>
import { db } from '../firebase.js';
import { getDocs, collection } from 'firebase/firestore';
import { ref, onMounted } from 'vue';

const participanti = ref([]);

onMounted(async () => {
  try {
    const participantiCollection = await getDocs(collection(db, 'participanti'));
    participantiCollection.forEach((person) => {
      participanti.value.push({ ...person.data(), id: person.id });
    });
  } catch (error) {
    console.error('Error fetching documents: ', error);
  }
});
</script>
<template>
  <div class="sm:w-3/4 lg:w-8/12 mx-auto px-3 container mt-16 mb-20 font-Poppins">
    <h1 class="text-4xl md:text-5xl text-center text-gray-800 font-Lucky">Participanti</h1>
    <p class="text-center text-gray-700 mt-6 mb-10 md:mb-16">
      Lista cu persoanele deja înscrise la ediţia curentă a concursul de alergare montană şi hiking
      <strong>Turnu Roşu Challenge.</strong>
    </p>
    <table
      class="bg-gray-600 w-full text-white border-none font-normal rounded-xl text-xs md:text-base m-4 ml-2"
    >
      <thead>
        <tr>
          <th class="py-2 px-2 sm:px-4 border-b border-gray-400 w-[6%]">Nr.</th>
          <th class="py-2 px-2 sm:px-4 border-b border-gray-400 w-[30%]">Nume şi prenume</th>
          <th class="py-2 px-2 sm:px-4 border-b border-gray-400 w-[15%]">Traseu</th>
          <th class="py-2 px-2 sm:px-4 border-b border-gray-400 w-[10%]">Categorie</th>
          <th class="py-2 px-2 sm:px-4 border-b border-gray-400 w-[25%]">Reşedinţa</th>
          <th class="py-2 px-2 sm:px-4 border-b border-gray-400">Confirmat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="participant in participanti" :key="participant.id">
          <td class="py-2 px-2 border-r border-gray-400 sm:px-4">1</td>
          <td class="py-2 px-2 border-r border-gray-400 sm:px-4">
            {{ participant.nume }} {{ participant.prenume }}
          </td>
          <td class="py-2 px-2 border-r border-gray-400 sm:px-4">{{ participant.cursa }}</td>
          <td class="py-2 px-2 border-r border-gray-400 sm:px-4">{{ participant.categoria }}</td>
          <td class="py-2 px-2 border-r border-gray-400 sm:px-4">{{ participant.localitate }}</td>
          <td class="py-2 px-2 sm:px-4">{{ participant.confirmat }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
th {
  text-align: left;
}
</style>
