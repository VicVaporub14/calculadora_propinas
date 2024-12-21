import { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

export default function TipForm({setTip, tip} : TipFormProps) {
  return (
    <div>
        <h2 className="font-black text-xl">Propinas</h2>

        <form>
            {tipOptions.map( tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <input 
                        id={tipOption.id}
                        type="radio" 
                        name="tip"
                        value={tipOption.value}
                        onChange={ e => setTip(+e.target.value) }
                        checked={tipOption.value === tip}
                    />
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    
                </div>
            ))}
        </form>
    </div>
  )
}
