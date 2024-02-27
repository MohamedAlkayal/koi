<script setup>
import { ref } from 'vue'

let product = ref({
    name: 'Saki Hikari Balance Koi Food',
    shortDescription: 'professional Daily Diet For Show-Grade Koi promotes development of a healthy, voluminous body. We recommend Saki Hikari Balance Diet Koi Food as a daily diet for all championship grade Koi or Koi with championship potential.',
    description: [
            'Saki Hikari Balance Diet Koi Food is a professional Daily Diet For Show-Grade Koi which promotes development of a healthy, voluminous body. We recommend Saki Hikari Balance Diet Koi Food as a daily diet for all championship grade Koi or Koi with championship potential. Saki Hikari Balance Diet Koi Food is a formulation offering a specialized blending of the finest proteins, carbohydrates, amino acids and fats offering improved growth and desirable form.',
            "Saki Hikari Balance Diet Koi Food includes a probiotic, Hikari Germ. This unique, beneficial bacteria overpowers bad bacteria within the intestine reducing it's propagation and ability to lethally infect your fish.Additionally, the proprietary Hikari Germ accelerates the digestive process thereby improving absorption and thereby reducing waste output.Using Saki Hikari Balance Diet Koi Food expect improved water quality and reduced filter maintenance when used as a daily diet.Using Saki Hikari Balance Diet Koi Food expect improved luster, reduced fatalities and fat - deposit - free growth as a result of the perfect ingredient balance."
    ],
    dilevery: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    variations: [
        {
            id: 1,
            info: '1 kg Pellet (KF0278)',
            price: '45.00'
        },
        {
            id: 2,
            info: '2 kg Pellet (KF0279)',
            price: '73.50'
        },
        {
            id: 3,
            info: '3 kg Pellet (KF0290)',
            price: '99.99'
        },
        {
            id: 4,
            info: '5 kg Pellet (KF0300)',
            price: '142.99'
        },
    ]
})


let selectedVariant = ref (null)

function selectVariant(id) {
    selectedVariant.value = id 
}

</script>


<template>
    <div class="container">
        <div class="product">
            <div class="product-image "> <img src="@/assets/images/products/product1.png" alt="Product Image"></div>
            <div class="product-details " >
                <div class="product-name">{{product.name}}</div>
                <div class="product-summry">{{ product.shortDescription }}</div>
                <div class="product-variant" 
                    v-for="variant in product.variations" 
                    :key="variant.id" 
                    :class="selectedVariant === variant.id ? 'selected-variant' : '' " 
                    @click="selectVariant(variant.id)"  
                    >
                    <div class="variant-info">{{ variant.info }}</div>
                    <div class="variant-price"> {{ variant.price }} £</div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.product {
    margin: 120px 0  ;
    display: flex;
    gap: 32px;
}

.product-image {
    width: 100%;
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    border: 1px solid #eee;
    border-radius: 10px;

}


.product-image img {
    position: absolute;
    width: 80%;
    top: 50%;
    transform: translateY(-50%);
}

.product-details {
    width: 100%;
    padding: 20px;
}

.product-name {
    color: var(--dark);
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 8px;
}

.product-summry {
    font-size: 16px;
    margin-bottom: 32px;
}


.product-variant {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border: 2px solid #eee;
    border-radius: 10px;
    font-size: 14px;
    margin-bottom: 8px;
    transition: 300ms;
}

.product-variant:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

.selected-variant {
    border: 2px solid var(--main);
}

</style>
