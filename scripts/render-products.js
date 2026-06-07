import { products, saveToStorage } from "./products.js";
import { addToCart, cart } from "./cart.js";


let productsHtml = '';

export function renderProducts(){

products.forEach((product)=>{

  productsHtml += `
<div class="product-container js-product-container">

 <div class="image-container">
  <img class="image-test" src="${product.image }">
  
    </div>
    
    <div class="product-details">
  
<div class="item-description">
  <p class="product-name">
  ${product.name}
 </p>

</div>

<div class="brand-name-container">
 <p class="brand-name">${product.brand}</p>
</div>

<div class="item-price">
 
  <p class="vendor-price">
    
    Vendor Price: £${product.vendorPriceCent/100}
  </p>

  <p class="our-price">
    
    Our price: £${product.ourPriceCent/100}
  </p>

</div>

<div class="size-quantity-list">
   
  <div> 

    <label for="sizes">
      Size:
    </label>
    <select>
  <option value="small">
     S
  </option>
  <option value="medium">
     M
  </option>
  <option value="large">
     L
  </option>
  <option value="extralarge">
     XL
  </option>
</select>


</div>

<div class = "quantity-label-container">
<p class = "Quatity-label">

Qauntity:

 </p>

 </div>

<div class = "quantity-count-container">


<div class = "minus-button-container">   
<button class = "minus-button js-minus-button" data-minus-button = "${product.id}"> -
 </button>
</div>

<div class = "input-quantity-container"> 

   <input class = "quantity-input js-quantity-input" data-quantity-input = "${product.id}"  type = "number" value = "1" readonly>
  
   </div>

<div class = "plus-button-container">
 
   <button class= "plus-button js-plus-button" data-plus-button = "${product.id}"> + </button>

</div>

</div>




</div>

  <div class="add-delete-button-container">
<div>
 <button class="add-button js-add-button" data-add-product = "${product.id}">
      Add to Basket

    </button>
</div>

<a href = "test-page.html">
<div class = "delete-button">
     <button class="delete-button js-delete-button" data-delete-product="${product.id}">
      Delete Item

    </button>

   </a>

    </div>
  </div>

  </div>

</div>
</div>`


})



document.querySelector('.js-product-display-grid')
.innerHTML = productsHtml;


}


renderProducts();






export const cartTotal = document.querySelector('.js-cart-number');
  

addToCart();



const deleteButtonElement = document.querySelectorAll('.js-delete-button');

deleteButtonElement.forEach((button)=>{

   let cartNumber = '';

button.addEventListener('click', ()=>{

const productId = button.dataset.deleteProduct;

products.forEach((prod,index)=>{

if(productId === prod.id){

   products.splice(index,1);
   saveToStorage();

   cartNumber = cart.length - 1;
   cartNumber = cart.length;

   

    
cartTotal.innerHTML = cartNumber;

 //localStorage.setItem('cart', JSON.stringify(cart));

}
      
   })

})


})




/*

const addItemElemet = document.querySelectorAll('.js-add-button');



addItemElemet.forEach((addButton)=>{

   
  let cartNumber = '';
 
   addButton.addEventListener('click',()=>{

      const productId = addButton.dataset.addProduct;

      
      
   products.forEach((prod)=>{
   
      if(prod.id === productId){

         cart.push({
            Product: prod.name,
            Quantity: 1
         })

        cartNumber =  cart.length


         //localStorage.setItem('cart', JSON.stringify(cart));

         
cartTotal.innerHTML = cartNumber;


      }


   })
      
      
   })
})

*/