import SectionHeader from "@/components/Shared/SectionHeader"


export default function ShippingPolicy() {
  return (

      <div className="container mx-auto px-4 py-8">
        {/* <SectionTitle>Shipping Information</SectionTitle> */}
        <SectionHeader title="Shipping Information"/>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Shipping Options</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Standard Shipping</h3>
              <p>Delivery within 5-7 business days</p>
              <p>Free for orders over $50, otherwise $4.99</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Express Shipping</h3>
              <p>Delivery within 2-3 business days</p>
              <p>$9.99 for all orders</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Next Day Delivery</h3>
              <p>Order by 2 PM for delivery next business day</p>
              <p>$14.99 for all orders</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Policies</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We ship to all 50 US states and select international destinations</li>
            <li>Orders are processed and shipped Monday through Friday, excluding holidays</li>
            <li>You will receive a shipping confirmation email with tracking information once your order has been shipped</li>
            <li>For international orders, please note that import duties and taxes may apply, and are the responsibility of the customer</li>
          </ul>
        </div>
      </div>

  )
}

