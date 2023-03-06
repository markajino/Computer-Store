let currencyText = document.querySelector(".currency").innerText;
let val = currencyText.replace(/[^0-9,.-]/g, "").replace(",", ".");
// console.log(Number(val))
let crr = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val);
currencyText.innerText = crr;

    // console.log(val)

function $(ele){
    return document.querySelectorAll(ele);
}

function buy_now(){
    if(Number(replacestring($(".currency")[0].innerText)) >= Number(replacestring($("#price")[0].innerText))){
        let balance = Number(replacestring($(".currency")[0].innerText)) - Number(replacestring($("#price")[0].innerText))
        $(".currency")[0].innerText = `€ ${balance}`;
        alert("you are now the owner of the new laptop!");
    }else{
        alert("you cannot afford the laptop");
    }
}

    let get_a_loan = () => {
        // const bankBalance = window.prompt("Please enter your bank balance:", `${val}`);
        // const balance = parseFloat(bankBalance);
        const maxLoan = Number(replacestring($(".currency")[0].innerText)) * 2.00;
        const loanAmount = window.prompt(`Please enter your loan amount (maximum: ${maxLoan}):`);
        const loan = parseFloat(loanAmount);
        if(loanAmount == null || loanAmount == 0){return}
        if (loan > maxLoan) {
            window.alert(`Error: Loan amount cannot be more than ${maxLoan}`);
        }else{
            $("#banker_btn")[0].innerHTML = `<button class="repay_loan py-3 px-2 rounded-lg w-full mt-4" onclick="repay_loan ()">Repay Loan</button>`;
            $(".joe_banker")[0].innerHTML += `<div class="flex flex-row justify-between loantxt">
                                                    <p>Loan Amount</p>
                                                    <p class="loan_amt">€ ${loan}</p>
                                                </div>`
            $(".currency")[0].innerText = `€ ${Number(replacestring($(".currency")[0].innerText)) + loan}`;
        }
    }

    let toggleloan = () => {
        $(".repay_loan")[0].innerHTML = '';
        $(".loantxt")[0].remove();
        $("#banker_btn")[0].innerHTML = `<button class="get_a_loan py-3 px-2 rounded-lg w-full" onclick="get_a_loan()">Get a Loan</button>`;
    }

    function repay_loan(){
        

        let work_pay = Number(replacestring($(".work_currency")[0].innerText));
        let currency = Number(replacestring($(".currency")[0].innerText));
        let loan_amt = Number(replacestring($(".loan_amt")[0].innerText));

        if(work_pay>loan_amt){
            // $(".work_currency")[0].innerText = `€ ${work_pay-loan_amt}`;
            $(".currency")[0].innerText = `€ ${Number(replacestring($(".currency")[0].innerText)) + (work_pay-loan_amt)}`;
            $(".work_currency")[0].innerText = `€ 0`;
            $(".loan_amt")[0].innerText = '€ 0';
            $(".loantxt")[0].remove();
            toggleloan()
            
        }else if(work_pay < 0){
            // return
            if(Number(replacestring($(".loan_amt")[0].innerText)) < 0){
                return
            }else{
                $(".currency")[0].innerText = `€ ${Number(replacestring($(".currency")[0].innerText)) - loan_amt}`;
                $(".loan_amt")[0].innerText = '€ 0';
                $(".loantxt")[0].remove();
                toggleloan()
            }
        }else if(currency<loan_amt){
            $(".loan_amt")[0].innerText = `€ ${loan_amt-currency}`;
            $(".work_currency")[0].innerText = '€ 0';
            $(".currency")[0].innerText = '€ 0';
        }
        else{
            // alert("fd")
            // console.log(loan_amt +"-"+)
            $(".currency")[0].innerText = `€ ${currency-loan_amt}`;
            $(".work_currency")[0].innerText = '€ 0';
            $(".loantxt")[0].remove()
            $("#banker_btn")[0].innerHTML = '';
            $("#banker_btn")[0].innerHTML = `<button class="get_a_loan py-3 px-2 rounded-lg w-full" onclick="get_a_loan()">Get a Loan</button>`;
        }
    }

    let working_bank = () => {

        if($(".loan_amt")[0]){
            let workCurr = Number(replacestring($(".work_currency")[0].innerText));
            if(workCurr != 0){
                let loanamt = Number(replacestring($(".loan_amt")[0].innerText));
                let cur_rency = Number(replacestring($(".currency")[0].innerText));
                let ten = workCurr*10/100;
                let remaining = loanamt - ten;
                // console.log(remaining)
                if(remaining == 0){
                    let rest = workCurr+cur_rency;
                    $(".currency")[0].innerText = `€ ${rest}`;
                    $(".work_currency")[0].innerText = `€ 0`;
                    $(".loantxt")[0].remove();
                    $("#banker_btn")[0].innerHTML = '';
                    $("#banker_btn")[0].innerHTML = `<button class="get_a_loan py-3 px-2 rounded-lg w-full" onclick="get_a_loan()">Get a Loan</button>`;
                    // alert("remaining == 0")
                }
                // else if(){

                // }
                else{
                    // alert("else part")
                    let rest = (workCurr - ten)+cur_rency;
                    $(".currency")[0].innerText = `€ ${rest}`;
                    $(".loan_amt")[0].innerHTML = `€ ${remaining}`;
                    $(".work_currency")[0].innerText = `€ 0`;
                }
            }

            
        }else{
            if(Number(replacestring($(".work_currency")[0].innerText) == 0)){
                return;
            }else{
                    $(".currency")[0].innerText = '€ '+ (Number(replacestring($(".currency")[0].innerText)) + Number(replacestring($(".work_currency")[0].innerText)));
                    $(".work_currency")[0].innerText = '€ '+ 0;
                    
            }
        }
    }

    let balance = 0;
    let working_btn = () => {
        
      
        $(".work_currency")[0].innerText = `€ ${Number(replacestring($(".work_currency")[0].innerText)) + 100}`;
 
        if($(".loan_amt")[0] != null){
            if(Number(replacestring($(".work_currency")[0].innerText)) == 0){
                return
            }else{


            }

            // if(currPay > loan_amt){
             
            // }else{
            

            // }
     
        }else{
        }
    }


    function replacestring(txt){
        return txt.replace(/[^0-9,.-]/g, "").replace(",", ".");
    }



    let features = document.querySelector("#features");
    let select_laptop = document.querySelector("#select_laptop");

        let data = fetch("https://hickory-quilled-actress.glitch.me/computers")
                    .then(dt => dt.json())
                    .then(res => {
                        // console.log(res)
                        for(let i=0;i<res.length;i++){
                            select_laptop.innerHTML += `<option class='titlename' id='${res[i]['id']}'>${res[i]['title']}</option>`;
                        }
                        $("#title_desc>p")[0].innerText = res[0].title;
                        $("#title_desc>p")[1].innerText = res[0].description;
                        $("#price")[0].innerText = res[0].price + " €";
                        $("#lapimg").src = "https://hickory-quilled-actress.glitch.me/"+res[0].image;
                        for(let i=0;i<res[0]['specs'].length;i++){
                            $("#features")[0].innerHTML += `<p>${res[0]['specs'][i]}</p>`;
                        }
                    })


    function updateSelection() {
        

        let select = select_laptop.getAttribute("data-id");
        let id = select_laptop.options[select_laptop.selectedIndex].id;
        let title_desc = document.querySelectorAll("#title_desc>p");
        let price = document.querySelector("#price");
        let lapimg = document.querySelector("#lapimg");
        fetch("https://hickory-quilled-actress.glitch.me/computers")
                    .then(dt => dt.json())
                    .then(res => {
                        let data = res[Number(id)-1];

                    data.specs.forEach(spec => {
                        features.innerHTML += `<p>${spec}</p>`;
                    });

                    title_desc[0].innerText = data.title;
                    title_desc[1].innerText = data.description;
                    price.innerText = data.price + " €";
                    const index = data.image.indexOf("5.jpg")
                    
                    index !== -1 ? lapimg.src = "https://m.media-amazon.com/images/I/611D4Es9L2S._SY450_.jpg" : lapimg.src = "https://hickory-quilled-actress.glitch.me/"+data.image;

        })
        features.innerText = '';
    }