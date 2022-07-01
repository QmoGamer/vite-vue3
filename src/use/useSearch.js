import { ref } from 'vue';

export default () => {
  const searchName = ref('1');
  const searchType = ref(1);

  return {
    searchName,
    searchType,
  };
};