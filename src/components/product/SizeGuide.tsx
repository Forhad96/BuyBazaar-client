type SizeGuideProps = {
  onClose: () => void
}

export default function SizeGuide({ onClose }: SizeGuideProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">Size Guide</h2>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Size</th>
              <th className="border px-4 py-2">Chest (inches)</th>
              <th className="border px-4 py-2">Waist (inches)</th>
              <th className="border px-4 py-2">Hip (inches)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">S</td>
              <td className="border px-4 py-2">34-36</td>
              <td className="border px-4 py-2">28-30</td>
              <td className="border px-4 py-2">34-36</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">M</td>
              <td className="border px-4 py-2">38-40</td>
              <td className="border px-4 py-2">32-34</td>
              <td className="border px-4 py-2">38-40</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">L</td>
              <td className="border px-4 py-2">42-44</td>
              <td className="border px-4 py-2">36-38</td>
              <td className="border px-4 py-2">42-44</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-full hover:opacity-90 transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  )
}

