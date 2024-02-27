<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
    <div class="header" :class="{ 'page-scrolled': scrollPosition !== 0 }">
        <div class="container">
            <div class="head">
                <div class="head-sec">
                    <div class="logo"><span></span><router-link to="/" class="logo-text">KOImports Ltd.</router-link></div>
                    <ul>
                        <li class="cat-nav">
                            <router-link  to="/categories" class="menu-text">Products</router-link>
                                <div class="drop-menu-arrow"></div>
                                <ul class="drop-menu">
                                    <li>All Products</li>
                                    <li>Koi Food</li>
                                    <li class="health-cat">
                                        Koi Health 
                                        <i class="fa-solid fa-angle-right"></i>
                                            <ul class="health-sub-cats">
                                                <li v-for="subCat in 6">Health Category {{ subCat }}</li>
                                            </ul>
                                    </li>
                                    <li class="equipment-cat">
                                        Pond Equipment 
                                        <i class="fa-solid fa-angle-right"></i>
                                        <ul class="equipment-sub-cats">
                                            <li v-for="subCat in 6">Equipment Category {{ subCat }}</li>
                                        </ul>
                                    </li>
                                </ul>
                        </li>
                        <li><router-link to="/terms" class="menu-text">Terms & Conditions</router-link></li>
                        <li><router-link to="/about" class="menu-text">About us</router-link></li>
                    </ul>
                </div>
                <div class="head-sec">
                    <button>Login</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.cat-nav {
    position: relative;
}

.drop-menu {
    display: none !important;
    position: absolute;
    flex-direction: column;
    width: 240px;
    background-color: white;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    left: -16px;
    top: 42px;
}
.drop-menu li {
    position: relative;
    padding: 8px;
    width: 100%;
    text-align: start;
    transition: 300ms;
    display: flex;
    justify-content: space-between;
}

.drop-menu-arrow {
    position: absolute;
    height: 32px;
    width: 240px;
}

.drop-menu li:hover {
    color: var(--main);  
}

.health-sub-cats {
    display: none !important;
    color: #333;   
    background-color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 240px;
    top: -16px;
    right: -240px;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.equipment-sub-cats {
    display: none !important;
    color: #333;   
    background-color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 240px;
    top: -16px;
    right: -240px;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.equipment-cat:hover .equipment-sub-cats {
        display: flex !important;

}

.health-cat:hover .health-sub-cats {
    display: flex !important;
}

.cat-nav:hover .drop-menu {
    display: flex !important;
}

.header {
    top: 0;
    position: fixed;
    transition: 300ms;
    z-index: 120;
    background-color: white;
    width: 100%;
}

.header:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

.page-scrolled {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

}

.head {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 32px 0 32px;
    transition: 300ms;
}



.head-sec {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
}

.head-sec ul {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 22px;
    transform: translateY(2px);
}


.head-sec ul li .menu-text {
    font-size: 16px;
    font-weight: 300;
    transition: 300ms;
    letter-spacing: 0.5px;
    color: #333;
    text-decoration: none;
}

.head-sec ul li .menu-text:hover {
    color: var(--main);
}

.head-sec button {
    cursor: pointer;
    padding: 8px 16px;
    min-width: 120px;
    background-color: var(--main);
    color: white;
    border: none;
    border-radius: 6px;
    transition: 300ms;
}

.head-sec button:hover {
    background-color: var(--hover);
}

.logo {

    margin-right: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 22px;
    font-weight: 600;
    line-height: 1;
}


.logo .logo-text {
    color: #333;
    text-decoration: none;
}

.logo span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--main);
}
</style>