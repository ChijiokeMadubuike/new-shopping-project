import { products,saveToStorage } from "./products.js";



 let productImage =  '';

const fileInput = document.querySelector('.js-image-file');

const imageBox = document.querySelector('.js-new-image');



fileInput.addEventListener('change', ()=>{

  const selectedFile = fileInput.files[0];

  const frInstance = new FileReader();

   frInstance.readAsDataURL(selectedFile);

  frInstance.addEventListener('load', ()=>{

    const url = frInstance.result;
    
  
    productImage = function(){
      
      return imageBox.src = url;
    }

    productImage();

    /*

    newImageInstance.src = url;

    productImage = function(){ document.body.appendChild(newImageInstance);
      
    }

    productImage();

    */

  })

   //frInstance.readAsDataURL(selectedFile);



})


export const myNewObj = {};


function newProduct(object,propertyName, propertyValue){

object[propertyName] = propertyValue;
 
}


function formValue(valueVariable, fieldClass, objectProperty){

 valueVariable = document.querySelector(fieldClass).value;

  newProduct(myNewObj, objectProperty, valueVariable);

}


const submitButton = document.querySelector('.js-submit-button')

submitButton.addEventListener('click', ()=>{

let productId;
let productName;
let productBrand;
let productVendorPrice;
let ourProductPrice;



formValue(productId,'.js-product-id', 'id'  );

productImage = productImage();

newProduct(myNewObj, 'image', productImage );

formValue(productName,'.js-product-name', 'name' );

formValue(productBrand,'.js-product-brand', 'brand');

formValue(productVendorPrice,'.js-vendor-price', 'vendorPriceCent');

formValue(ourProductPrice,'.js-our-price', 'ourPriceCent'  );

products.unshift(myNewObj);

console.log(products);

saveToStorage();



});



