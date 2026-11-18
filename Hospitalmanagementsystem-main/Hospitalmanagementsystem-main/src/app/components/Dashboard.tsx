import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Users,
  UserCheck,
  Calendar,
  TrendingUp,
  AlertCircle,
  Clock,
} from "lucide-react";

export function Dashboard() {
  const stats = [
    {
      title: "Total Patients",
      value: "2,847",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Doctors",
      value: "42",
      change: "+2",
      icon: UserCheck,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Appointments Today",
      value: "124",
      change: "+8.3%",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Revenue (This Month)",
      value: "$145,280",
      change: "+18.2%",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const recentAppointments = [
    {
      id: 1,
      patient: "Sarah Johnson",
      doctor: "Dr. Michael Chen",
      time: "09:00 AM",
      status: "Scheduled",
      type: "Consultation",
    },
    {
      id: 2,
      patient: "Robert Williams",
      doctor: "Dr. Emily Brown",
      time: "10:30 AM",
      status: "In Progress",
      type: "Follow-up",
    },
    {
      id: 3,
      patient: "Maria Garcia",
      doctor: "Dr. James Wilson",
      time: "11:00 AM",
      status: "Scheduled",
      type: "Check-up",
    },
    {
      id: 4,
      patient: "David Martinez",
      doctor: "Dr. Sarah Davis",
      time: "02:00 PM",
      status: "Scheduled",
      type: "Surgery",
    },
    {
      id: 5,
      patient: "Jennifer Lee",
      doctor: "Dr. Michael Chen",
      time: "03:30 PM",
      status: "Scheduled",
      type: "Consultation",
    },
  ];

  const alerts = [
    {
      id: 1,
      type: "critical",
      message: "Patient John Doe requires immediate attention in Room 305",
      time: "5 minutes ago",
    },
    {
      id: 2,
      type: "warning",
      message: "Low stock alert: Insulin - only 15 units remaining",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "info",
      message: "Dr. Wilson's schedule has been updated for tomorrow",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's your hospital overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-semibold text-gray-900 mt-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                  </div>
                  <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                    <Icon className="size-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Appointments */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="size-5" />
              Today's Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-10 bg-blue-600 text-white rounded-full font-semibold">
                      {appointment.patient
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {appointment.patient}
                      </p>
                      <p className="text-sm text-gray-500">{appointment.doctor}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="size-4" />
                      {appointment.time}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {appointment.type}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        appointment.status === "In Progress"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="size-5" />
              Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    alert.type === "critical"
                      ? "bg-red-50 border-red-500"
                      : alert.type === "warning"
                      ? "bg-yellow-50 border-yellow-500"
                      : "bg-blue-50 border-blue-500"
                  }`}
                >
                  <p className="text-sm text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
