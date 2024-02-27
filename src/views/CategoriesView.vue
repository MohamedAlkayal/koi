<script setup>
import { ref } from 'vue';
import mainProductCard from '@/components/main/mainProductCard.vue'
</script>

<script>

export default {
    data() {
        return {
            scrollPosition: 0
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrollPosition = window.scrollY;
        }
    }
}

</script>

<template>
    <div class="container">
        <div class="products-hero">
            <div class="products-title">
                <img src="@/assets/images/products/productsHero1.png" alt="products Hero 1">
                <div class="product-title-text">
                    <h3>Products / All</h3>
                    <h1>Products</h1>
                    <h4><i class="fa-solid fa-check"></i> 632 Items Found</h4>
                </div>
            </div>
        </div>
        <div class="products">
            <mainProductCard v-for="item in 24" :key="item"/>
        </div>
    </div>
</template>

<style scoped>

.page-scrolled {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}
.products-hero {
    margin: 120px 0 32px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

}

.products-title {
    position: relative;
    overflow: hidden;
    padding: 0%;
    height: 300px;
    background-size: cover;
    border-radius: 10px;
}

.products-title img {
    z-index: -1;
    width: 100%;
    height: 100%;
    scale: 1.1;
}

.product-title-text {
    top: 50%;
    transform: translateY(-50%);
    left: 8%;
    z-index: 2;
    position: absolute;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.product-title-text h3 {
    font-weight: 300;
    font-size: 16px;
    opacity: 0.98;
}

.product-title-text h1 {
    text-transform: uppercase;
    font-size: 36px;
    font-weight: 600;
    opacity: 0.94;
}

.product-title-text h4 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 300;
    font-size: 16px;
    opacity: 0.98;
}

.products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    margin-bottom: 80px;
}
</style>