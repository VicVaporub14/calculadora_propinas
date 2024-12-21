import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}: OrderTotalProps) {

    const subtotalAmount = useMemo( () => order.reduce( (total, item) => total  + (item.price * item.quantity), 0)
    , [order])

    const tipAmount = useMemo( () => subtotalAmount * tip, [tip, order]);

    const totalAmount = useMemo( () => subtotalAmount + tipAmount, [tip, order]);

    return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-xl">Totales y Propina</h2>

            <p>Subtotal a Pagar: 
                <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
            </p>

            <p>Propina: 
                <span className="font-bold"> {formatCurrency(tipAmount)}</span>
            </p>

            <p>Total a Pagar: 
                <span className="font-bold"> {formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button
            className="bg-teal-400 hover:bg-teal-600 py-4 w-full rounded-lg text-white text-lg font-bold disabled:opacity-50"
            disabled={ totalAmount === 0 }
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}
