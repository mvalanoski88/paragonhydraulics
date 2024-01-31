import { ref, onMounted, onUnmounted } from 'vue';

export const useMobileCheck = () => {
  const viewportWidth = ref(window.innerWidth);

  const handleResize = () => {
    viewportWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return { viewportWidth };
};