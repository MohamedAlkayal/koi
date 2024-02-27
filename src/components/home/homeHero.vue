<script setup>

</script>

<template>
    <div class="hero">
        <div class="hero-sec">
            <img class="hero-image" src="@/assets/images/hero/1.png" alt="Koi image 1">
        </div>
        <div class="hero-sec">
            <img class="hero-image" src="@/assets/images/hero/2.png" alt="Koi image 2">
        </div>
        <div class="hero-sec">
            <div class="hero-text">運 繁栄 幸運</div>
            <img class="hero-image" src="@/assets/images/hero/3.png" alt="Koi image 3">
        </div>
    </div>
</template>


<style scoped>
.hero {
    margin: 120px 0 140px;
    display: flex;
    gap: 1px;
    max-width: 100%;
}

.hero-sec {
    position: relative;
}

.hero-text {
    position: absolute;
    color: rgba(255, 255, 255, 0.705);
    font-weight: 200;
    font-size: 12px;
    bottom: 5%;
    right: 5%;
}

.hero-sec img {
    width: 100%;
}
</style>