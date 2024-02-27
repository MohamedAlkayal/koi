<script>

export default {

}

</script>


<template>
     <RouterLink class="product-link" to="/product">
            <div class="product-card">
                <div class="product-image">
                    <img src="@/assets/images/products/product1.png" alt="Product Image">
                    <div class="overlay"></div>
                </div>
                <div class="product-tag">
                    <p class="name">test</p>
                    <p class="price">99.99 £</p>
                </div>
            </div>
    </RouterLink>
</template>


<style scoped>
.product-link {
    text-decoration: none;
    color: #333;

}

.product-card {
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    padding: 24px;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    transition: 300ms;
}

.product-card:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

}

.product-image {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 16px 0;
    width: 100%;
    max-height: 200px;
    overflow: hidden;
    transition: 300ms;
    transform: scale(1.05);
}

.product-card:hover .product-image {
    transform: scale(1.1);
}

.product-image .overlay {
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 40px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 98.38%);
    transition: 300ms;
}

.product-card:hover .overlay {
    height: 60px;

}

.product-image img {
    width: 60%;
    align-self: center;
}

.product-tag {
    text-align: center;
}

.product-tag .name {
    color: var(--dark);
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 500;
}

.product-tag .price {
    font-size: 14px;
}
</style>