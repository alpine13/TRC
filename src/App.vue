<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import ScrollToTopBtn from './components/ScrollToTopBtn.vue';

const router = useRouter();

function goToContact() {
  router.push({ name: 'contact' });
}
</script>

<template>
  <div class="font-Poppins relative">
    <!-- Header -->
    <header class="backdrop-blur-xl z-50">
      <nav class="container flex items-center py-4 mt-1 md:mt-2">
        <div class="py-1 w-14 md:w-20 overflow-hidden">
          <img src="./assets/images/logo.png" class="object-contain scale-175" alt="logo" />
        </div>
        <ul
          class="hidden sm:flex flex-1 justify-end items-center gap-12 text-slate-600 uppercase sm:text-md lg:text-base"
        >
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms">
            <RouterLink :to="{ name: 'home' }">Acasă</RouterLink>
          </li>
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms">
            <RouterLink :to="{ name: 'participanti' }">Participanţi</RouterLink>
          </li>
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms">
            <RouterLink :to="{ name: 'regulament' }">Regulament</RouterLink>
          </li>
          <button
            type="button"
            class="btn btn-purple rounded-lg px-7 py-3 uppercase hover:bg-black"
            @click="goToContact"
          >
            Contact
          </button>
        </ul>
        <div class="flex sm:hidden flex-1 justify-end">
          <i class="text-2xl fas fa-bars"></i>
        </div>
      </nav>
    </header>
  </div>
  <scrollToTopBtn></scrollToTopBtn>
  <RouterView></RouterView>
</template>

<style scoped></style>
