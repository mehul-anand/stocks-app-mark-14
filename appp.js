const initialPrice = document.querySelector("#initial-price");
const numOfStock = document.querySelector("#num-of-stocks");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check")
const output = document.querySelector("#output")

function checkNegatives() {
    if (Number(initialPrice.value) == 0 || Number(numOfStock.value) == 0){
        output.innerText="Please fill all the fields"
    }else{
        if(Number(initialPrice.value)<=0){
            output.innerText="Initial price should be positive and non-zero"
        }else if(Number(numOfStock.value)<=0){
            output.innerText="No of Stocks should be positive and non-zero"
        }else if(Number(currentPrice.value) < 0 ){
            output.innerText="Current price can't be negative"
        }else{
            return "Positive"
        }
    }
}

function calcLoss(a, b) {
    const loss = a - b
    const percentageLoss = (loss / a) * 100
    return [loss, percentageLoss]
}

function calcProfit(a, b) {
    const profit = b - a
    const percentageProfit = (profit / a) * 100
    return [profit, percentageProfit]
}



function findReturns() {
    const checker = checkNegatives()
    if (checker === "Positive") {
        const newInitailPrice = Number(initialPrice.value) * Number(numOfStock.value)
        const newCurrentPrice = Number(currentPrice.value) * Number(numOfStock.value)
        if (newInitailPrice > newCurrentPrice) {
            var lostList = calcLoss(newInitailPrice, newCurrentPrice)
            output.style.color="#DA4644"
            output.innerText = "Oh no you have suffered a loss of ₹ " + lostList[0] + " your percentage loss is :- " + (lostList[1].toFixed(2)) + "%  📉"
        } else if (newInitailPrice < newCurrentPrice) {
            var profitList = calcProfit(newInitailPrice, newCurrentPrice)
            output.style.color="#D1F141"
            output.innerText = "Congratulations you have made a profit of ₹ " + profitList[0] + " your percentage profit is :- " + (profitList[1].toFixed(2)) + "%  📈"
        } else {
            output.style.color="#F1DB4B"
            output.innerText = "No Profit or Loss a perfect balance - Thanos (probably) "
        }
    }
}

checkBtn.addEventListener("click", findReturns)

