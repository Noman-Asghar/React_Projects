import { useState } from 'react'
import bgImg from './assets/banner.jpg'
import InputBox from './assets/components/InputBox'
import useCurrencyInfo from './assets/hooks/currency'

function App() {
 
const [amount , setAmount] = useState(0)
const [from , setFrom] = useState("USD")
const [to , setTo] = useState("PKR")
const [convertAmount , setConvertAmount] = useState(0)


const { rates: currencyInfo, allCurrencies: options } = useCurrencyInfo(from);


const swap = () => {
  setFrom(to)
  setTo(from)
  setAmount(convertAmount)
  setConvertAmount(amount)
}

const convert = () => {
  if (currencyInfo && currencyInfo[to]) {
    setConvertAmount((amount * currencyInfo[to]).toFixed(2));
  } else {
    setConvertAmount(0);
  }
};


  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center  overflow-hidden bg-cover" style={{backgroundImage : `url('${bgImg}')`}}>
      <div className="w-full ">
        <div className="w-full max-w-xl mx-auto border  border-gray-700 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }} className='w-full flex flex-col gap-1  justify-center'>
          <div className=" mb-1">
          <InputBox currencyOptions={options} label="from" selectCurrency={from} amount={amount}  onCurrencyChange={setFrom}  onAmountChange={setAmount} />
          </div>
          <div className="flex justify-center items-center my-2"><button onClick={swap} className='bg-blue-700 w-[100px] text-white py-3 px-5'>Swap</button></div>
          <div className=" mb-1">
          <InputBox currencyOptions={options} label="to" selectCurrency={to}  amountDisable amount={convertAmount}   onCurrencyChange={setTo}  />
          </div>
          <button type='submit' className='bg-blue-800 py-3 text-white font-bold '>Converted {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default App
