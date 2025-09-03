<script setup>
import ImgTable from '@/components/widgets/ImgTable.vue';
import './common_view.css';


const headers = [
    { width: 300, title: 'Title', key: 'title', align: 'start', sortable: true },
    { width: 250, title: 'Director', key: 'director' },
    { width: 150, title: 'Genre', key: 'genre' },
    { width: 100, title: 'Year', key: 'year', align: 'end' },
    { width: 140, title: 'Runtime(min)', key: 'runtime', align: 'end' },
    { width: 1, key: 'data-table-expand', align: 'end' }, // optional, to keep it as short as possible
]

const items = [
    {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        genre: 'Drama',
        year: 1994,
        runtime: 142,
        details: {
        synopsis: 'Two imprisoned men bond over years, finding solace and redemption through acts of decency.',
        cast: ['Tim Robbins', 'Morgan Freeman'],
        rating: 3.5,
        },
    },
    {
        title: 'Inception',
        director: 'Christopher Nolan',
        genre: 'Sci-Fi',
        year: 2010,
        runtime: 148,
        details: {
        synopsis: 'A thief with the ability to enter dreams is tasked with stealing a secret from the subconscious.',
        cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
        rating: 5,
        },
    },
    {
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        genre: 'Crime',
        year: 1972,
        runtime: 175,
        details: {
        synopsis: 'The aging patriarch of a crime dynasty transfers control to his reluctant son.',
        cast: ['Marlon Brando', 'Al Pacino'],
        rating: 4.5,
        },
    },
    {
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        genre: 'Crime',
        year: 1994,
        runtime: 154,
        details: {
        synopsis: 'Interwoven stories of criminals, violence, and redemption in Los Angeles.',
        cast: ['John Travolta', 'Samuel L. Jackson'],
        rating: 4.5,
        },
    },
    {
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        genre: 'Action',
        year: 2008,
        runtime: 152,
        details: {
        synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        cast: ['Christian Bale', 'Heath Ledger'],
        rating: 4,
        },
    },
]

</script>


<template>
  <div id="common_body">
    <div class="text">
      <div class="view_title">OpenAPIs List</div>
        <img-table
          :headers="headers"
          :items="items">
        </img-table>
      </div>
    </div>
</template>


<style scoped>
  .text {
      padding: 12px 60px;
  /* padding: 12px 60px; */ /* 원래 이거임 */
  }

</style>