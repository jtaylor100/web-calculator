import { useEffect, useState } from "react";

export function CalculatorRow({ title, operator, action }) {
  const [start, setStart] = useState(null);
  const [amount, setAmount] = useState(null);
  const [answer, setAnswer] = useState("")

  useEffect(() => {
    async function fetchAnswer() {
      const startInt = parseInt(start)
      const amountInt = parseInt(amount)

      if (isNaN(startInt) || isNaN(amountInt)) {
        return;
      }

      const response = await fetch('api/Calculator/' +action+ '?start=' +startInt+ '&amount=' +amountInt);
      const answerText = await response.text()
      const answerInt = parseInt(answerText)
      if (isNaN(answerInt)) {
        setAnswer("")
      } else {
        setAnswer(answerInt)
      }
    }
    fetchAnswer()
  }, [start, amount])

  function onStartChange(e) {
    setStart(e.target.value)
  }

  function onAmountChange(e) {
    setAmount(e.target.value)
  }

  return (
    <>
      <p className='lead'>{title}</p>
      <div className='mb-4'>
        <input onChange={onStartChange} />
        {operator}
        <input onChange={onAmountChange} />
        =
        <span>{answer}</span>
      </div>
    </>
  );
}