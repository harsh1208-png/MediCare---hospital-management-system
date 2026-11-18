import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Calendar, Plus, Clock, User, Stethoscope } from "lucide-react";
import { toast } from "sonner";

interface Appointment {
  id: number;
  patient: string;
  doctor: string;
  date: string;
  time: string;
  type: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Cancelled";
  reason: string;
}

export function Appointments() {
  const [appointments] = useState<Appointment[]>([
    {
      id: 1,
      patient: "Sarah Johnson",
      doctor: "Dr. Michael Chen",
      date: "2026-04-09",
      time: "09:00 AM",
      type: "Consultation",
      status: "Scheduled",
      reason: "Regular checkup",
    },
    {
      id: 2,
      patient: "Robert Williams",
      doctor: "Dr. Emily Brown",
      date: "2026-04-09",
      time: "10:30 AM",
      type: "Follow-up",
      status: "In Progress",
      reason: "Post-surgery checkup",
    },
    {
      id: 3,
      patient: "Maria Garcia",
      doctor: "Dr. James Wilson",
      date: "2026-04-09",
      time: "11:00 AM",
      type: "Check-up",
      status: "Scheduled",
      reason: "Knee pain assessment",
    },
    {
      id: 4,
      patient: "David Martinez",
      doctor: "Dr. Sarah Davis",
      date: "2026-04-09",
      time: "02:00 PM",
      type: "Surgery",
      status: "Scheduled",
      reason: "Appendectomy",
    },
    {
      id: 5,
      patient: "Jennifer Lee",
      doctor: "Dr. Michael Chen",
      date: "2026-04-09",
      time: "03:30 PM",
      type: "Consultation",
      status: "Scheduled",
      reason: "Cardiac consultation",
    },
    {
      id: 6,
      patient: "John Smith",
      doctor: "Dr. Robert Taylor",
      date: "2026-04-10",
      time: "09:00 AM",
      type: "Consultation",
      status: "Scheduled",
      reason: "Headache assessment",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled":
        return "bg-blue-100 text-blue-700";
      case "In Progress":
        return "bg-green-100 text-green-700";
      case "Completed":
        return "bg-gray-100 text-gray-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleScheduleAppointment = () => {
    toast.success("Appointment scheduled successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Appointments</h1>
          <p className="text-gray-500 mt-1">Schedule and manage appointments</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="size-4 mr-2" />
              New Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Schedule New Appointment</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleScheduleAppointment();
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patient">Patient</Label>
                  <select
                    id="patient"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors"
                    required
                  >
                    <option value="">Select patient</option>
                    <option value="1">Sarah Johnson</option>
                    <option value="2">Robert Williams</option>
                    <option value="3">Maria Garcia</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor">Doctor</Label>
                  <select
                    id="doctor"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors"
                    required
                  >
                    <option value="">Select doctor</option>
                    <option value="1">Dr. Michael Chen (Cardiology)</option>
                    <option value="2">Dr. Emily Brown (Pediatrics)</option>
                    <option value="3">Dr. James Wilson (Orthopedics)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Appointment Type</Label>
                  <select
                    id="type"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="consultation">Consultation</option>
                    <option value="followup">Follow-up</option>
                    <option value="checkup">Check-up</option>
                    <option value="surgery">Surgery</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors"
                    required
                  >
                    <option value="scheduled">Scheduled</option>
                    <option value="confirmed">Confirmed</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Visit</Label>
                <Input id="reason" placeholder="Brief description" required />
              </div>
              <div className="flex justify-end gap-3">
                <DialogTrigger asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogTrigger>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Schedule Appointment
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <Card key={appointment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 flex-1">
                  {/* Patient Info */}
                  <div className="flex items-center gap-3">
                    <div className="size-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {appointment.patient
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <User className="size-4 text-gray-500" />
                        <p className="font-semibold text-gray-900">
                          {appointment.patient}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {appointment.reason}
                      </p>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex items-center gap-2 min-w-[200px]">
                    <Stethoscope className="size-4 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {appointment.doctor}
                      </p>
                      <p className="text-sm text-gray-500">{appointment.type}</p>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4 text-gray-500" />
                      <span className="text-sm text-gray-700">
                        {appointment.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4 text-gray-500" />
                      <span className="text-sm text-gray-700">
                        {appointment.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center gap-3">
                  <Badge className={getStatusColor(appointment.status)}>
                    {appointment.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
