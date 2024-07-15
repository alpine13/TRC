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
  <div class="sm:w-3/4 lg:w-8/12 mx-auto px-3 container mt-16 mb-28 lg:mb-56 font-Poppins">
    <h1 class="text-4xl md:text-5xl text-center text-gray-800 font-Lucky">Participanti</h1>
    <p class="text-center text-gray-700 mt-6 mb-10 md:mb-16">
      Lista cu persoanele deja înscrise la ediţia curentă a concursul de alergare montană şi hiking
      <strong>Turnu Roşu Challenge.</strong>
    </p>
    <div class="table-wrapper">
      <table
        class="bg-gray-600 w-full text-white border-none font-normal text-xs md:text-base ml-0"
      >
        <thead class="bg-gray-800 rounded-xl">
          <tr>
            <th
              class="py-2 px-2 sm:px-4 border-b font-normal md:font-semibold border-gray-400 w-[6%]"
            >
              Nr.
            </th>
            <th
              class="py-2 px-2 sm:px-4 border-b font-normal md:font-semibold border-gray-400 w-[28%]"
            >
              Nume şi prenume
            </th>
            <th
              class="py-2 px-2 sm:px-4 border-b font-normal md:font-semibold border-gray-400 w-[17%]"
            >
              Traseu
            </th>
            <th
              class="py-2 px-2 sm:px-4 border-b font-normal md:font-semibold border-gray-400 w-[10%]"
            >
              Categorie
            </th>
            <th
              class="py-2 px-2 sm:px-4 border-b font-normal md:font-semibold border-gray-400 w-[25%]"
            >
              Reşedinţa
            </th>
            <th class="py-2 px-2 sm:px-4 border-b font-normal md:font-semibold border-gray-400">
              Confirmat
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(participant, index) in participanti"
            :key="participant.id"
            :class="{ 'bg-gray-700': (index + 1) % 2 == 0 }"
          >
            <td class="py-2 px-2 border-b border-r border-gray-400 sm:px-4">{{ index + 1 }}</td>
            <td class="py-2 px-2 border-b border-r border-gray-400 sm:px-4">
              {{ participant.nume }} {{ participant.prenume }}
            </td>
            <td class="py-2 px-2 border-b border-r border-gray-400 sm:px-4">
              {{ participant.cursa }}
            </td>
            <td class="py-2 px-2 border-b border-r border-gray-400 sm:px-4">
              {{ participant.categoria }}
            </td>
            <td class="py-2 px-2 border-b border-r border-gray-400 sm:px-4">
              {{ participant.localitate }}
            </td>
            <td class="py-2 px-2 border-b sm:px-4">{{ participant.confirmat }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
th {
  text-align: left;
}

.table-wrapper {
  overflow-x: auto; /* Enable horizontal scrolling */
  max-width: 100%; /* Ensure table does not overflow its container */
  margin-bottom: 1rem; /* Optional: Add space below the table */
}

table {
  width: 100%; /* Ensure table takes up full width of its container */
  border-collapse: collapse; /* Collapse borders for a cleaner look */
}

th,
td {
  padding: 0.5rem; /* Add padding to cells for better readability */
  border: 1px solid #ddd; /* Optional: Add borders around cells */
  text-align: left; /* Optional: Align text left */
}
</style>
