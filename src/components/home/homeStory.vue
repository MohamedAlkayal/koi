<template>
    <div class="story">
        <div class="text">
            <h3>OUR STORY</h3>
            <h2>Over 25 years of passion, knowledge, and experience. </h2>
            <p>The company was established in 1990. The founder Keith O’Riley, an enthusiastic Koi hobbyist, formed
                KOImports Ltd which has now evolved to be one of the longest established Koi wholesalers in the UK. We
                understand the passion and commitment that our customers have for their beloved Koi, and we strive to
                support them in every way we can.</p>
            <div class="story-more"><span>Read More</span> <i class="fa-solid fa-angle-right"></i></div>
        </div>
        <img src="@/assets/images/hero/story.png" alt="our story image">
    </div>
</template>

<style scoped>
.story {
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(245, 251, 255, 0.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 48px;
    margin-bottom: 200px;
}

.story .text {
    width: 42%;
}

.story .text h3 {
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 16px;
}

.story .text h2 {
    color: var(--dark);
    margin-bottom: 16px;
}

.story .text p {
    line-height: 1.6;
    margin-bottom: 16px;

}

.story img {
    position: absolute;
    width: 620px;
    right: 0;
    top: 40%;
    transform: translateY(-50%);
}
</style>