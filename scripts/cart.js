
export const cart = [];

//JSON.parse(localStorage.getItem('cart'))||[];
import { products } from "./products.js";
import { cartTotal} from "./render-products.js"; 


let prodminused;
let proId;
let prodValue;

 const inputElement = document.querySelectorAll('.js-quantity-input');

inputElement.forEach((inputValue)=>{
  
prodValue = inputValue.value;
proId =  inputValue.dataset.quantityInput;

})

let quantityNum = 1;

const plusButton =  document.querySelectorAll('.js-plus-button');

plusButton.forEach((prodPlus)=>{

const  prodPlused = prodPlus.dataset.plusButton;

 prodPlus.addEventListener('click', ()=>{ 

 //console.log(quantityNum++);

 prodValue.innerHTML = quantityNum++;
 console.log(prodValue);
  

  products.forEach((product)=>{

    if(proId === product.id && prodPlused === product.id){
      
  
  //prodValue = quantityNum++;
  
 
 }

})
})
})
  

 

/*
const minusBtn = document.querySelectorAll('.js-minus-button');

minusBtn.forEach((prodMinus)=>{

 prodminused= prodMinus.dataset.minusButton;

 products.forEach((product)=>{

if(product.id === prodminused){

  prodMinus.addEventListener('click', ()=>{

     //console.log('clicked')

    if(prodValue > 1){

      prodValue --;
      console.log(prodValue);
     
    }
    
  })

}

})

})


*/


  












export function addToCart(){


const addItemElemet = document.querySelectorAll('.js-add-button');

let cartItemCount = 0;


addItemElemet.forEach((addButton)=>{

const productId = addButton.dataset.addProduct;  

let matchingItem;
      
addButton.addEventListener('click',()=>{ 



cart.forEach((cartItem)=>{

if(cartItem.Product === productId){

matchingItem = cartItem;

matchingItem.Quantity++;


console.log(matchingItem);

!cartItemCount;
cartTotal.innerHTML = '';

}

})

  
products.forEach((prod)=>{ 
        
let newItem;
              
if(prod.id === productId){
  
newItem =  {Product:prod.id,

Quantity:1
}
cart.push(newItem);

cartItemCount++;

cartTotal.innerHTML = cartItemCount;
      
/*

cart.push({
Product: prod.id,
Quantity: 1
})
          
*/

console.log(newItem);




}
   




  })


            
  })
         



})
    
 
//localStorage.setItem('cart', JSON.stringify(cart));
  

}

    
  

  


