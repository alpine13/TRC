<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import ScrollToTopBtn from './components/ScrollToTopBtn.vue';

const router = useRouter();

function goToInscrieri() {
  router.push({ name: 'inscrieri' });
}

function goToHome() {
  router.push({ name: 'home' });
}
</script>

<template>
  <div class="font-Poppins relative">
    <!-- Header -->
    <header class="backdrop-blur-xl z-50">
      <nav class="container flex items-center py-4 mt-1 md:mt-2">
        <div class="py-1 w-14 md:w-20 overflow-hidden">
          <img
            @click="goToHome()"
            src="./assets/images/logo.png"
            class="object-contain scale-175 cursor-pointer"
            alt="logo"
          />
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
            @click="goToInscrieri()"
          >
            Inscrieri
          </button>
        </ul>
        <div class="flex sm:hidden flex-1 justify-end">
          <i class="text-2xl fas fa-bars"></i>
        </div>
      </nav>
      <!-- <div v-show="" class="w-1/2 mx-auto mt-2 bg-gray-300 h-[2px]"></div> -->
    </header>
  </div>
  <scrollToTopBtn></scrollToTopBtn>
  <RouterView></RouterView>
  <!-- Footer -->
  <footer class="bg-gray-900 py-8">
    <div class="container flex flex-col md:flex-row items-center">
      <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
        <h3 class="text-white text-xl"><a>Turnu Rosu Challenge</a></h3>
        <ul class="flex text-white uppercase gap-12 text-xs tracking-wide">
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms white">
            <RouterLink :to="{ name: 'inscrieri' }">Înscrieri</RouterLink>
          </li>
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms white">
            <RouterLink :to="{ name: 'regulament' }">Regulament</RouterLink>
          </li>
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms white">
            <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex gap-10 mt-12 md:mt-0">
        <li>
          <a
            href="https://www.instagram.com/turnurosuchallenge?igsh=MXNsbWgyZzRlOTVpcw=="
            target="_blank"
            ><i class="text-white text-2xl fab fa-instagram"></i
          ></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/people/Turnu-Ro%C8%99u-Challenge/61550549625676/"
            target="_blank"
            ><i class="text-white text-2xl fab fa-facebook-square"></i
          ></a>
        </li>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.white {
  color: white !important;
}
</style>
