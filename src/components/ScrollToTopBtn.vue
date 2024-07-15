<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
let scrollTopButton = ref(null);

const handleScroll = () => {
  if (window.scrollY > 300) {
    scrollTopButton.value.classList.remove('invisible');
  } else {
    scrollTopButton.value.classList.add('invisible');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
<template>
  <div
    ref="scrollTopButton"
    class="z-50 fixed w-9 h-9 flex justify-center bottom-4 right-5 p-[3px] transition invisible bg-gray-700 rounded-full hover:bg-orange-400"
  >
    <div class="text-white w-auto h-auto transition text-xl">
      <button @click="scrollToTop()"><i class="fa-solid fa-arrow-up"></i></button>
    </div>
  </div>
</template>
