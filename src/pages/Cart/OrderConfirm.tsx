
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function OrderConfirm() {
  const navigate = useNavigate()

//   useEffect(() => {
//     // In a real application, you would fetch the order details here
//   }, [])

  return (

      <div className="container mx-auto px-4 py-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        {/* <SectionTitle>Order Confirmed</SectionTitle> */}
        <p className="text-xl mb-8">Thank you for your purchase!</p>
        <p className="mb-4">Your order number is: #123456</p>
        <p className="mb-8">We've sent a confirmation email to your registered email address.</p>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>

  )
}

