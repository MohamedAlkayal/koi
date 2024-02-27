<script setup>
import homeHero from '@/components/home/homeHero.vue'
import homeSlider from '@/components/home/homeSlider.vue'
import homeAbout from '@/components/home/homeAbout.vue'
import homeStory from '@/components/home/homeStory.vue'
import homeContact from '@/components/home/homeContact.vue'
import { ref } from 'vue'


let homeCats = ref( [

  {
    catName: 'KOI FOOD',
    catSlug: 'koi_food',
    catProducts: [
      {
        productName: 'Food Example 1',
        productPrice: '99.99'
      },
      {
        productName: 'Food Example 2',
        productPrice: '99.99'
      },
      {
        productName: 'Food Example 3',
        productPrice: '99.99'
      },
      {
        productName: 'Food Example 4',
        productPrice: '99.99'
      },
      {
        productName: 'Food Example 5',
        productPrice: '99.99'
      },
      {
        productName: 'Food Example 6',
        productPrice: '99.99'
      },
      {
        productName: 'Food Example 7',
        productPrice: '99.99'
      },
    ]
  },
  {
    catName: 'KOI HEALTH',
    catProducts: [
      {
        productName: 'Example 1',
        productPrice: '99.99'
      },
      {
        productName: 'Example 2',
        productPrice: '99.99'
      },
      {
        productName: 'Example 3',
        productPrice: '99.99'
      },
      {
        productName: 'Example 4',
        productPrice: '99.99'
      },
      {
        productName: 'Example 5',
        productPrice: '99.99'
      },
      {
        productName: 'Example 6',
        productPrice: '99.99'
      },
      {
        productName: 'Example 7',
        productPrice: '99.99'
      },
    ]
  },
  {
    catName: 'POND EQUIPMENT',
    catProducts: [
      {
        productName: 'Example 1',
        productPrice: '99.99'
      },
      {
        productName: 'Example 2',
        productPrice: '99.99'
      },
      {
        productName: 'Example 3',
        productPrice: '99.99'
      },
      {
        productName: 'Example 4',
        productPrice: '99.99'
      },
      {
        productName: 'Example 5',
        productPrice: '99.99'
      },
      {
        productName: 'Example 6',
        productPrice: '99.99'
      },
      {
        productName: 'Example 7',
        productPrice: '99.99'
      },
    ]
  }
])


</script>



<template>
  <main>
    <div class="container">
      <homeHero />
      <homeSlider v-for="homeCat in homeCats" :key="homeCat" :cat="homeCat"/>
      <div class="explore-btn"><button>Explore Products</button></div>
      <homeAbout />
    </div>
    <div class="story-bg">
      <div class="container">
        <homeStory />
      </div>
    </div>
    <div class="contact-bg">
      <div class="container">
        <homeContact />
      </div>
    </div>
  </main>
</template>


<style scoped>
.explore-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 220px;
}

.explore-btn button {
  cursor: pointer;
  border: none;
  border-radius: 6px;
  background-color: var(--main);
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 16px;
  width: 200px;
  transition: 300ms;
}


.explore-btn button:hover {
  background-color: var(--hover);
}

.story-bg {
  padding: 100px 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 15.22%, rgba(227, 245, 255, 0.4) 100%);
}

.contact-bg {
  padding: 100px 0;
  background: #F3FAFF;
}
</style>

