function getConvertedValue(id){
    const element = document.getElementById(id).innerText;
    const convertedElement = parseInt(element);
    return convertedElement;

}

function getUpdatedSum (id, value){
    const element = getConvertedValue(id);
        const sum = element + parseInt(value);
        document.getElementById(id).innerText = sum
}

function getGrandTotalCost(){
    const totalCost = getConvertedValue('total-cost') ;
    document.getElementById('grand-total').innerText = totalCost;
}

function updateCouponCode(status){
    const totalCost = getConvertedValue('total-cost') ;
 if (status === undefined) {
     getGrandTotalCost()
 } else {
    const couponCode = document.getElementById('coupon-code').value;
    if (couponCode === 'love20') {
        const discount = totalCost * 0.20;
        document.getElementById('grand-total').innerText = totalCost - discount;

    } else {
      alert('please inter a valid couponCode') ;
    }
 }
}