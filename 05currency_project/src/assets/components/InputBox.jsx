import React, { useId } from 'react'

const InputBox = ({label , currencyOptions=[] , amount , selectCurrency , onAmountChange , onCurrencyChange , amountDisable=false , currencyDisable }) => {

  const amountInputId = useId()
  return (
    <div className='w-full flex items-center gap-5 justify-between bg-white p-5 text-black rounded-lg'>
      <div className="flex flex-col items-baseline justify-evenly">
        <label htmlFor={amountInputId}>{label}</label>
        <input id={amountInputId} type="number" value={amount} disabled={amountDisable} onChange={(e => onAmountChange && onAmountChange(Number(e.target.value)))} placeholder='amount' className='outline-none py-2 px-1 bg-transparent ' />
      </div>
      <div className="flex  flex-col gap-1">
        <label htmlFor="">Currency Type</label>
        <select disabled={currencyDisable} value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
          {
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default InputBox

