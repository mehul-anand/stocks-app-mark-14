# stocks-app-mark-14
### A web app that calculates how much profit or loss you have made from the stocks that you bought! including the value and percentage 

## Contents
- Header
- Label of initial price , no. of stocks & current price
- Their input boxes w/ type as `number`
- Check button
- Footer

## Working
- First the user will give us the initial price , no. of stocks & current price
- For the check button we will use `.addEventListener()` w/ a `click` to call a function when clicked
- Then we will link HTML w/ JS using `document.querySelector`
- Then we will get the value of initial price , no. of stocks & current price using `.value`
- Then we will check wether initial price & no. of stocks are positive and greater than 0 or not
- Then we will check wether current price wether it's positive or not
- Then we will see wether initial price is greater or the current price and calculate the profit and loss accordingly and their percentages 👇
  
  `(difference/initial price) * 100`
  
  ### Resources
  - [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
  - [document.querySelector](https://www.w3schools.com/jsref/met_document_queryselector.asp)
  - [.value](https://www.w3schools.com/jsref/prop_text_value.asp)
  - [.addEventListener()](https://www.w3schools.com/jsref/met_document_addeventlistener.asp)
