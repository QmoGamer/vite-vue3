<template>
  <p>searchName: {{ searchName }}</p>
  <p>searchType: {{ searchType }}</p>
  <SearchBar v-model:searchName="searchName" @test="changeSearchType" />
</template>

<script setup>
import useSearch from '@/use/useSearch';
import SearchBar from '@/components/SearchBar';

const { searchName, searchType } = useSearch();
const changeSearchType = (value) => {
  console.log(value);
  searchType.value = value;
}
</script>