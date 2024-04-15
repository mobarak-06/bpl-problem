const allBtn = document.getElementsByClassName('btn');
for (const btn of allBtn) {
    btn.addEventListener('click',function(event){
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;

        const bgc = event.target.parentNode.style.backGroundColor = 'black';
        // console.log(bgc);
        
        const selectedPlayer = document.getElementById('selected player container');

        event.target.setAttribute('disabled',false)

       
        // const firstCart = getConvertedValue('left');
        // if (firstCart -1 < 0) {
        //     alert('limit finish left');
        //     return;
        // }
     
     
        
     
        const budget = getConvertedValue('Budget');
        const updatedBudget = budget - parseInt(price);
        const showBudget =  document.getElementById('Budget').innerText=updatedBudget;
        if (showBudget < 0) {
            alert('finish budget');
            return 
        }
     
        
        event.target.parentNode.style.backgroundColor = 'green'

        

        
        



       
       
       const cart = getConvertedValue('cart');
       const updatedCart = cart + 1;
       document.getElementById('cart').innerText = updatedCart;

       const left = getConvertedValue('left');
       const updatedLeft = left - 1;
        document.getElementById('left').innerText = updatedLeft;

       
       


        const div = document.createElement('div');
        div.classList.add('selected-player');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedPlayer.appendChild(div)

        getUpdatedSum('total-cost', price);
       getGrandTotalCost();
       updateCouponCode();
    })
     
 }

 
 
