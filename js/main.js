// ALL Elements select
const selectedSeat = document.getElementById('selected-seat');
const totalPrice = document.getElementById('total-price');
const totalBooked = document.getElementById('total-booked');
const availableSeat = document.getElementById('available-seat');
const defaultText = document.getElementById('default-text');
const couponField = document.getElementById('coupon-field');
const couponBtn = document.getElementById('coupon-btn');
const showDiscount = document.getElementById('show-discount');
const showCouponPrice = document.getElementById('show-coupon-price');




let selectedSeats = []
let perSeatPrice = 0;
function handleSelectSeat(e) {
   // remove default Text
     defaultText.classList.add('hidden')

    //  let selectedSeats = []
    if(selectedSeats.includes(e.innerText)){
        alert("Already Booked!");
        return;
    }else{
        selectedSeats.push(e.innerText)
    }
    

    if(selectedSeats.length > 4){
        alert("You can not get more seats");
        return;
    }
    else{
        e.classList.add('bg-primary')
            // set tektite
    selectedSeat.innerHTML += `
    <div class="flex justify-between text-2xl">
     <p>${e.innerText}</p>
     <p>Economy</p>
     <p>550</p>
    </div>
    `;
    
    if(selectedSeats.length === 3){
        couponField.removeAttribute('disabled');
        couponBtn.removeAttribute('disabled');
    }
    }
    totalBooked.innerText = selectedSeats.length;
    availableSeat.innerText = parseFloat(availableSeat.innerText) - 1;
    totalPrice.innerText = perSeatPrice += 550;
}
// ============================================================================
// set coupon
couponBtn.addEventListener('click', function(){ 
   
const disCount15 = parseFloat(totalPrice.innerText) * .15;
const disCount20 = parseFloat(totalPrice.innerText) * .20;
const totalDiscount15 = parseFloat(totalPrice.innerText) - disCount15
const totalDiscount20 = parseFloat(totalPrice.innerText) - disCount20

  
  if(couponField.value === 'NEW50' || couponField.value === 'Couple 20'){
        if(couponField.value === 'NEW50'){
            showDiscount.innerHTML = `
            <div class=" text-lg font-semibold flex justify-between">
               <p>Discount:</p> <p>- BDT ${disCount15.toFixed(2)}</p>
            </div>
            <div class=" text-lg font-semibold flex justify-between mt-3">
               <p>Grand Price </p>  <p>BDT: ${totalDiscount15.toFixed(2)}</p>
            </div>
            `;
        }else if(couponField.value === 'Couple 20'){
            showDiscount.innerHTML = `
            <div class=" text-lg font-semibold flex justify-between">
               <p>Discount:</p> <p>- BDT ${disCount20.toFixed(2)}</p>
            </div>
            <div class=" text-lg font-semibold flex justify-between mt-3">
               <p>Grand Price </p>  <p>BDT: ${totalDiscount20.toFixed(2)}</p>
            </div>
            `;

        }
  }else{
    alert("Wrong coupons!");
  }

showCouponPrice.removeChild(couponField)
showCouponPrice.removeChild(couponBtn)
});


