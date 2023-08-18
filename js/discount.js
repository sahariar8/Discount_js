document.getElementById("btn").addEventListener("click", function(){
    //get input value
    const getField = document.getElementById("value");
    const getFieldValue = getField.value;
    const intValue = parseFloat(getFieldValue);
    
    //set value in Price
    const price = document.getElementById("price").innerText = intValue;
    getField.value = "";

    //set Discount Price

    const discount = price * .3;
    const afterDiscount = price - discount;
    document.getElementById("discount").innerText = afterDiscount;

   

   
})