<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import homeSliderCard from '@/components/home/homeSliderCard.vue'
import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
    name: 'Breakpoints',
    components: {
        Carousel,
        Slide,
        Navigation,
        homeSliderCard,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'start',
        },
        breakpoints: {
            700: {
                itemsToShow: 3.5,
                snapAlign: 'start',
            },
            1024: {
                itemsToShow: 4,
                snapAlign: 'start',
            },
        },
    }),
    props: {
        cat: {
            type: Object
        }
    }
})
</script>

<template>
    <div class="slider-main">
        <div class="slider-cat">
            <div class="cat-name">{{cat.catName}}</div>
            <div class="cat-more"> <span>see more</span> <i class="fa-solid fa-angle-right"></i>
            </div>
        </div>
        <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="product in cat.catProducts" :key="product">
                <homeSliderCard :product="product" />
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>


<style scoped>
.slider-main {
    margin-bottom: 100px;
}

.slider-cat {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.cat-name {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 22px;
    padding-left: 8px;
}

.cat-more {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 18px;
    color: var(--main);
    transition: 300ms;
}


.cat-more:hover {
    color: var(--hover);
}

.slider-item {
    background-color: azure;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
</style>