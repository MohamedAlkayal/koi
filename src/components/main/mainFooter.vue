<template>
    <div class="delivery-bg">
        <div class="container">
            <h3>DELIVERY INFORMATION</h3>
            <p>Next Day Package Upto 20 Kg £8.50 + VatPipework is excluded from standard delivery charges due to its
                length.Next Day Pallet £35.00 + VatCollection Welcome From our Warehouse by arrangement.</p>
        </div>
    </div>
    <div class="footer-bg">
        <div class="container">
            <div class="footer">
                <div class="copy">© Copyright <span>KOImports Ltd.</span></div>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Terms and Conditions </li>
                </ul>
            </div>

        </div>
    </div>
</template>


<style scoped>
.delivery-bg {
    padding: 60px 0;
    background-color: var(--dark-lite);
    color: var(--light);
}

.delivery-bg h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
}

.delivery-bg p {
    line-height: 1.6;
    font-size: 18px;
    font-weight: 300;
}

.footer-bg {
    background-color: var(--dark);
    color: var(--light);
    padding: 32px;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer .copy span {
    font-weight: 500;
    cursor: pointer;
}

.footer ul {
    display: flex;
    gap: 48px;

}

.footer ul li {
    cursor: pointer;

}
</style>