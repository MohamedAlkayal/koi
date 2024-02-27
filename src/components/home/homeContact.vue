<template>
    <div class="contact">
        <div class="contact-form">
            <div class="text">
                <h3>CONTACT US</h3>
                <h2>WE CAN HELP</h2>
            </div>
            <form action="">
                <div class="personal-info">
                    <input type="text" id="name" placeholder="Name">
                <input type="email" id="mail" placeholder="Email">
                </div>
                <textarea name="messeage" id="messeage" cols="30" rows="10" placeholder="Message"></textarea>
                <button>Send Message</button>
            </form>
        </div>
        <div class="contact-info">
            <div class="info-sec">
                <h3>Get in touch</h3>
                <p>We're always here to help. Contact us if you are experiencing issues with out product or have any
                    questions. </p>
            </div>
            <div class="info-sec">
                <h3>Address</h3>
                <p>78 Cadogan Avenue</p>
                <p>West Horndon</p>
                <p>Brentwood, Essex.</p>
            </div>
            <div class="info-sec">
                <p class="contact-link">01277 810870</p>
                <p class="contact-link">Info@koimports.co.uk</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact {
    display: flex;
    align-items: flex-start;
    gap: 32px;
}

.contact-form h3 {
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 12px;
}

.contact-form h2 {
    text-transform: uppercase;
    margin-bottom: 24px;
    font-size: 38px;
    color: var(--dark);
}

.personal-info {
    display: flex;
}

.contact-form input {
    padding: 16px;
    border: none;
    border-radius: 10px;
    outline-color: var(--main);
    font-size: 18px;
    margin-right: 8px;
    width: 300px;
    margin-bottom: 16px;
    background-color: white;
}

.contact-form textarea {
    width: 608px;
    height: 400px;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    outline-color: var(--main);
    resize: none;
    padding: 16px;
    font-family: sans-serif;
    background-color: white;

}

.contact-form button {
    margin: 16px 0;
    display: block;
    width: 608px;
    border: none;
    background-color: var(--main);
    color: white;
    padding: 16px;
    border-radius: 10px;
    font-size: 18px;
}

.contact-info {
    transform: translateY(180px);
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0 16px;
}

.contact-info .info-sec h3 {
    color: var(--dark);
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 8px;

}

.contact-info .info-sec p {
    max-width: 75%;
    margin-bottom: 8px;
}

.contact-info .info-sec .contact-link {
    cursor: pointer;
    margin-bottom: 20px;
    color: var(--dark-lite);
    text-decoration: underline;
    font-size: 18px;
    transition: 300ms;
}

.contact-info .info-sec .contact-link:hover {
    color: blue;
}
</style>