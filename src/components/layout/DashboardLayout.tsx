import { ReactNode, useState } from 'react'
import { Home, Package, Users, Settings, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

type DashboardLayoutProps = {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)


  const handleLogout = () => {
    // In a real application, you would implement proper logout logic here
    console.log('Logging out')
    // router.push('/login')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-purple-700 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <nav>
          <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-600">
            <Home className="inline-block mr-2" size={20} />
            Dashboard
          </Link>
          <Link to="/dashboard/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-600">
            <Package className="inline-block mr-2" size={20} />
            Products
          </Link>
          <Link to="/dashboard/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-600">
            <Users className="inline-block mr-2" size={20} />
            Users
          </Link>
          <Link to="/dashboard/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-600">
            <Settings className="inline-block mr-2" size={20} />
            Settings
          </Link>
        </nav>
        <button
          onClick={handleLogout}
          className="block w-full py-2.5 px-4 rounded transition duration-200 hover:bg-purple-600 text-left"
        >
          <LogOut className="inline-block mr-2" size={20} />
          Logout
        </button>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden bg-purple-600 text-white p-2 rounded-md"
            >
              {isSidebarOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

