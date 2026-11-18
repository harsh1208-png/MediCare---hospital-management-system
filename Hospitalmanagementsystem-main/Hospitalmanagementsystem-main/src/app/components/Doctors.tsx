import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Search, Plus, Phone, Mail, Stethoscope } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  phone: string;
  email: string;
  availability: "Available" | "Busy" | "Off Duty";
  patients: number;
  rating: number;
}

export function Doctors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors] = useState<Doctor[]>([
    {
      id: 1,
      name: "Dr. Michael Chen",
      specialization: "Cardiology",
      experience: 15,
      phone: "+1 234-567-9001",
      email: "m.chen@medicare.com",
      availability: "Available",
      patients: 247,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Dr. Emily Brown",
      specialization: "Pediatrics",
      experience: 12,
      phone: "+1 234-567-9002",
      email: "e.brown@medicare.com",
      availability: "Busy",
      patients: 312,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Dr. James Wilson",
      specialization: "Orthopedics",
      experience: 18,
      phone: "+1 234-567-9003",
      email: "j.wilson@medicare.com",
      availability: "Available",
      patients: 198,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Dr. Sarah Davis",
      specialization: "Surgery",
      experience: 20,
      phone: "+1 234-567-9004",
      email: "s.davis@medicare.com",
      availability: "Busy",
      patients: 156,
      rating: 4.9,
    },
    {
      id: 5,
      name: "Dr. Robert Taylor",
      specialization: "Neurology",
      experience: 14,
      phone: "+1 234-567-9005",
      email: "r.taylor@medicare.com",
      availability: "Available",
      patients: 223,
      rating: 4.8,
    },
    {
      id: 6,
      name: "Dr. Lisa Anderson",
      specialization: "Dermatology",
      experience: 10,
      phone: "+1 234-567-9006",
      email: "l.anderson@medicare.com",
      availability: "Off Duty",
      patients: 178,
      rating: 4.6,
    },
  ]);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-100 text-green-700";
      case "Busy":
        return "bg-yellow-100 text-yellow-700";
      case "Off Duty":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Doctors</h1>
          <p className="text-gray-500 mt-1">Manage medical staff and specialists</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="size-4 mr-2" />
          Add Doctor
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
        <Input
          placeholder="Search doctors by name or specialization..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-semibold">
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{doctor.name}</CardTitle>
                    <div className="flex items-center gap-1 mt-1">
                      <Stethoscope className="size-3 text-gray-500" />
                      <p className="text-sm text-gray-500">
                        {doctor.specialization}
                      </p>
                    </div>
                  </div>
                </div>
                <Badge className={getAvailabilityColor(doctor.availability)}>
                  {doctor.availability}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="size-4" />
                {doctor.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="size-4" />
                {doctor.email}
              </div>
              <div className="pt-3 border-t border-gray-200 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs text-gray-500">Experience</p>
                  <p className="font-semibold text-gray-900">
                    {doctor.experience}y
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Patients</p>
                  <p className="font-semibold text-gray-900">{doctor.patients}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Rating</p>
                  <p className="font-semibold text-gray-900">⭐ {doctor.rating}</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-2">
                View Schedule
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No doctors found</p>
        </div>
      )}
    </div>
  );
}
