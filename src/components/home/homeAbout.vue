<template>
    <div class="about">
        <div class="about-title">
            <h3>We Provide</h3>
            <h2>All What You Need</h2>
            <p>We have secured many sole rights and agent deals for some of the best and well know brands available for the
                construction of a Koi pond</p>
        </div>
        <div class="about-cards">
            <div class="about-card">
                <img src="@/assets/images/about/support.png" alt="support icon">
                <h4>Support</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p>
            </div>
            <div class="about-card">
                <img src="@/assets/images/about/quality.png" alt="quality icon">
                <h4>Quality</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. </p>
            </div>
            <div class="about-card">
                <img src="@/assets/images/about/trust.png" alt="trust icon">
                <h4>Trust</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 240px;
}

.about-title {
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-title h3 {
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 16px;
}

.about-title h2 {
    text-transform: uppercase;
    margin-bottom: 16px;
    font-size: 38px;
    color: var(--dark);
}

.about-title p {
    font-size: 18px;
    font-weight: 400;
    width: 80%;
    text-align: center;
}


.about-cards {
    margin: 32px 0;
    display: flex;
    justify-content: space-between;
    gap: 8px;
}

.about-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
}

.about-card img {
    width: 80px;
    margin-bottom: 48px;
}

.about-card h4 {
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 8px;
    color: var(--dark);
    font-size: 24px;
    margin-bottom: 18px;

}

.about-card p {
    text-align: center;
    line-height: 1.6;
    width: 92%;
    font-size: 18px;
}
</style>