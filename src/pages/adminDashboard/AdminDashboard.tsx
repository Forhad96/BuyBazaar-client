
import { useState } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { DollarSign, Users, ShoppingBag, TrendingUp } from 'lucide-react'
import { StatCard } from './components/StatCard'

// Mock data for the chart
const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
]

export default function AdminDashboard() {
  const [stats] = useState({
    totalRevenue: 287946.55,
    totalUsers: 10483,
    totalOrders: 5731,
    conversionRate: 3.67,
  })

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Revenue"
              value={`$${stats.totalRevenue.toLocaleString()}`}
              icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
              description="+20.1% from last month"
            />
            <StatCard
              title="Total Users"
              value={stats.totalUsers.toLocaleString()}
              icon={<Users className="h-4 w-4 text-muted-foreground" />}
              description="+180 new users"
            />
            <StatCard
              title="Total Orders"
              value={stats.totalOrders.toLocaleString()}
              icon={<ShoppingBag className="h-4 w-4 text-muted-foreground" />}
              description="+19% from last month"
            />
            <StatCard
              title="Conversion Rate"
              value={`${stats.conversionRate}%`}
              icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
              description="+1.2% from last month"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={data}>
                    <XAxis
                      dataKey="name"
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Add recent sales items here */}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

