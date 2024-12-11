import SectionHeader from "@/components/Shared/SectionHeader"



export default function ReturnsPolicy() {
  return (

      <div className="container mx-auto px-4 py-8">
        {/* <SectionTitle>Returns Policy</SectionTitle> */}
        <SectionHeader title="Returns Policy"/>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Our 30-Day Return Policy</h2>
          <p className="mb-4">
            We want you to be completely satisfied with your purchase. If you're not happy with your order, we offer a 30-day return policy for most items.
          </p>
          <h3 className="text-xl font-semibold mb-2">How to Return an Item</h3>
          <ol className="list-decimal list-inside mb-4">
            <li>Ensure the item is unused and in its original packaging</li>
            <li>Log in to your account and go to the "Orders" section</li>
            <li>Select the item you wish to return and follow the prompts</li>
            <li>Print the provided return label</li>
            <li>Pack the item securely and attach the return label</li>
            <li>Drop off the package at your nearest post office or courier location</li>
          </ol>
          <h3 className="text-xl font-semibold mb-2">Refund Process</h3>
          <p className="mb-4">
            Once we receive and inspect the returned item, we'll process your refund. The refund will be credited to your original payment method within 5-10 business days.
          </p>
          <h3 className="text-xl font-semibold mb-2">Exceptions</h3>
          <p>
            Some items, such as personalized products or perishable goods, may not be eligible for return. Please check the product description for specific return policy information.
          </p>
        </div>
      </div>

  )
}

