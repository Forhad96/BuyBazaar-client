import { Users, User, Car, Briefcase } from 'lucide-react'
import SectionHeader from '../Shared/SectionHeader'

export default function StatsSection() {
  const stats = [
    {
      number: "4500+",
      label: "Client Served",
      icon: Users,
    },
    {
      number: "2750+",
      label: "Happy Customers",
      icon: User,
    },
    {
      number: "600+",
      label: "Vehicle In Stock Cars",
      icon: Car,
    },
    {
      number: "12+",
      label: "Years Experience",
      icon: Briefcase,
    },
  ]

  return (
    <div className="w-full py-12 px-4">
        <SectionHeader size='large' title="We are proud to share our milestones <br/>  and successes with you." subtitle='Our Achievements'/>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-6 rounded-lg overflow-hidden"
          >
            {/* Orange corner accent */}
            <div className="absolute bg-primary top-0 left-0 w-4 h-8 bg- rounded-br-xl" />
            
            {/* Icon */}
            <div className="mb-4">
              <stat.icon className="w-8 h-8 text-gray-700" />
            </div>
            
            {/* Number */}
            <h3 className="text-4xl font-bold text-primary mb-2">
              {stat.number}
            </h3>
            
            {/* Label */}
            <p className="text-gray-600 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

