// DOM documnets
const form = document.querySelector('#loan-form');
const card = document.querySelector('.card.card-body.text-center.mt-5');
const loanAmount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const calculatorBtn = document.querySelector('.btn.btn-dark.btn-block');


// Result doc

const monthly_P = document.querySelector('#monthly-payment');
const total = document.querySelector('#total-payment');
const total_in = document.querySelector('#total-interest');


form.addEventListener('submit', function(e){
    e.preventDefault();
    // // Hide result
    document.querySelector('#results').style.display = 'none';

    // // Show loading
    document.querySelector('#loading').style.display = 'block';
    setTimeout(display, 2000);


});

function display(){
    let loan_Value = loanAmount.value;
    let interest_Value = interest.value;
    let years_Value = years.value;
    resultCalculator(loan_Value, interest_Value, years_Value);
}





// Calculation function
function resultCalculator(amount, intrest, years){
    let monthly = 0, total_Payment = 0, total_Interest = 0;
    amount = parseFloat(amount);
    intrest = parseFloat(intrest) / 100 / 12;
    years = parseFloat(years) * 12;
    monthly = (amount*intrest*Math.pow(1 + intrest, years))/(Math.pow(1 + intrest, years) - 1);
    total_Payment = monthly * years;
    total_Interest = ((monthly * years) - amount);
    
    if(isFinite(monthly)){
        monthly_P.value = monthly.toFixed(2);
        total.value = total_Payment.toFixed(2);
        total_in.value = total_Interest.toFixed(2);
        // Show result
        document.querySelector('#results').style.display = 'block';

         // hide loading
        document.querySelector('#loading').style.display = 'none';
    } else {
        showError('Please Check Your Numbers');
    }
    
}


function showError(errorMasage){
    // hide loading
    document.querySelector('#loading').style.display = 'none';
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // creat errorDiv
    const  errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(errorMasage));
    card.insertBefore(errorDiv, heading);
    setTimeout(clearError, 3000);

}

function clearError() {
    document.querySelector('.alert').remove();
}







// console.log(form);
// document.addEventListener('click', function(e){
//     console.log(e.target);
// })
