




// noakhali donate section

document.getElementById('donate-now-btn').addEventListener('click', function(event){
    event.preventDefault();
    const noakhaliDonateInput = document.getElementById('noakhali-donate-input').value;
    const donateAmount = document.getElementById('donate-amount').innerText;
    const userAmount = document.getElementById('user-amount').innerText;
    
    if(!isNaN(noakhaliDonateInput)){
        const noakhaliDonateInputNumber = parseFloat(noakhaliDonateInput);
        const donateAmountNumber = parseFloat(donateAmount);
        const userAmountNumber = parseFloat(userAmount);

        const balance = userAmountNumber - noakhaliDonateInputNumber;
        document.getElementById('user-amount').innerText = balance;

        const total = noakhaliDonateInputNumber + donateAmountNumber;
        document.getElementById('donate-amount').innerText = total;
        const specificDate = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
            <div class = 'border-2 rounded-xl p-5 w-10/12 mx-auto h-28 space-y-3 mt-6'>
                <h1 class = 'font-extrabold text-2xl'>${noakhaliDonateInput} Taka is donated for famine-2024 at Noakhali, Bangladesh</h1>
                <p>Date: ${specificDate}</p>
            </div>
        `

        document.getElementById('history-section').appendChild(div);
        if(noakhaliDonateInput === ''){
            alert('Invalid Input');
            location.reload();
            document.getElementById('my_modal_1').classList.add('hidden');
            return;
        }else if(noakhaliDonateInputNumber > userAmountNumber){
            alert('Your amount is not enough')
            location.reload();
            document.getElementById('my_modal_1').classList.add('hidden');
            return;
        }
    }else{
        alert('Your Amount Is Not Valid');
        location.reload();
        document.getElementById('my_modal_1').classList.add('hidden');
        return;
    }


    // console.log('oi mama na plz')
})


// feni donate section

document.getElementById('donate-now-btn2').addEventListener('click', function(event){
    event.preventDefault();
    const feniDonateInput = document.getElementById('feni-donate-input').value;
    const donateAmount2 = document.getElementById('donate-amount2').innerText;
    const userAmount2 = document.getElementById('user-amount').innerText;
    
    if(!isNaN(feniDonateInput)){
        const feniDonateInputNumber = parseFloat(feniDonateInput);
        const donateAmountNumber2 = parseFloat(donateAmount2);
        const userAmountNumber2 = parseFloat(userAmount2);

        const balance = userAmountNumber2 - feniDonateInputNumber;
        document.getElementById('user-amount').innerText = balance;

        const total2 = feniDonateInputNumber + donateAmountNumber2;
        document.getElementById('donate-amount2').innerText = total2;
        const specificDate = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
            <div class = 'border-2 rounded-xl p-5 w-10/12 mx-auto h-28 space-y-3 mt-6'>
                <h1 class = 'font-extrabold text-2xl'>${feniDonateInput} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
                <p>Date: ${specificDate}</p>
            </div>
        `

        document.getElementById('history-section').appendChild(div);
        
        if(feniDonateInput === ''){
            alert('Invalid Input');
            location.reload();
            document.getElementById('my_modal_1').classList.add('hidden');
            return;
        }else if(feniDonateInputNumber > userAmountNumber2){
            alert('Your amount is not enough')
            location.reload();
            document.getElementById('my_modal_1').classList.add('hidden');
            return;
        }
    }else{
        alert('Your Amount Is Not Valid');
        location.reload();
        document.getElementById('my_modal_1').classList.add('hidden');
        return;
    }


    // console.log('oi mama na plz')

})


// quota donate section

document.getElementById('donate-now-btn3').addEventListener('click', function(event){
    event.preventDefault();
    const quotaDonateInput = document.getElementById('quota-donate-input').value;
    const donateAmount3 = document.getElementById('donate-amount3').innerText;
    const userAmount3 = document.getElementById('user-amount').innerText;
    
    if(!isNaN(quotaDonateInput)){
        const quotaDonateInputNumber = parseFloat(quotaDonateInput);
        const donateAmountNumber3 = parseFloat(donateAmount3);
        const userAmountNumber3 = parseFloat(userAmount3);

        const balance = userAmountNumber3 - quotaDonateInputNumber;
        document.getElementById('user-amount').innerText = balance;

        const total3 = quotaDonateInputNumber + donateAmountNumber3;
        document.getElementById('donate-amount3').innerText = total3;
        const specificDate = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
            <div class = 'border-2 rounded-xl p-5 w-10/12 mx-auto h-28 space-y-3 mt-6'>
                <h1 class = 'font-extrabold text-2xl'>${quotaDonateInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                <p>Date: ${specificDate}</p>
            </div>
        `

        document.getElementById('history-section').appendChild(div);
        if(quotaDonateInput === ''){
            alert('Invalid Input');
            location.reload();
            document.getElementById('my_modal_1').classList.add('hidden');
            return;
        }else if(quotaDonateInputNumber > userAmountNumber3){
            alert('Your amount is not enough')
            location.reload();
            document.getElementById('my_modal_1').classList.add('hidden');
            return;
        }
    }else{
        alert('Your Amount Is Not Valid');
        location.reload();
        document.getElementById('my_modal_1').classList.add('hidden');
        return;
    }

})



const donationPage = document.getElementById('donation-btn');
const historyPage = document.getElementById('history-btn');

historyPage.addEventListener('click', function(){
    historyPage.classList.add('bg-yellow-200');
    donationPage.classList.remove('bg-yellow-200');
    document.getElementById('section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('footer-section').classList.add('hidden');
});

donationPage.addEventListener('click', function(){
    historyPage.classList.remove('bg-yellow-200');
    donationPage.classList.add('bg-yellow-200');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('section').classList.remove('hidden');
    document.getElementById('footer-section').classList.remove('hidden');
})