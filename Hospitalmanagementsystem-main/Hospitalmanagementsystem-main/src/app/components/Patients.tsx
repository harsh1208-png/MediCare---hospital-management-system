import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Search, Plus, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  address: string;
  bloodType: string;
  lastVisit: string;
  status: "Active" | "Inactive";
}

export function Patients() {
  const [searchQuery, setSearchQuery] = useState("");
  const [patients] = useState<Patient[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      age: 34,
      gender: "Female",
      phone: "+1 234-567-8901",
      email: "sarah.j@email.com",
      address: "123 Main St, New York, NY",
      bloodType: "O+",
      lastVisit: "2026-04-05",
      status: "Active",
    },
    {
      id: 2,
      name: "Robert Williams",
      age: 45,
      gender: "Male",
      phone: "+1 234-567-8902",
      email: "robert.w@email.com",
      address: "456 Oak Ave, Los Angeles, CA",
      bloodType: "A+",
      lastVisit: "2026-04-08",
      status: "Active",
    },
    {
      id: 3,
      name: "Maria Garcia",
      age: 28,
      gender: "Female",
      phone: "+1 234-567-8903",
      email: "maria.g@email.com",
      address: "789 Pine Rd, Chicago, IL",
      bloodType: "B+",
      lastVisit: "2026-03-15",
      status: "Active",
    },
    {
      id: 4,
      name: "David Martinez",
      age: 52,
      gender: "Male",
      phone: "+1 234-567-8904",
      email: "david.m@email.com",
      address: "321 Elm St, Houston, TX",
      bloodType: "AB+",
      lastVisit: "2026-04-01",
      status: "Active",
    },
    {
      id: 5,
      name: "Jennifer Lee",
      age: 39,
      gender: "Female",
      phone: "+1 234-567-8905",
      email: "jennifer.l@email.com",
      address: "654 Maple Dr, Phoenix, AZ",
      bloodType: "O-",
      lastVisit: "2026-02-20",
      status: "Inactive",
    },
  ]);

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddPatient = () => {
    toast.success("Patient registered successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Patients</h1>
          <p className="text-gray-500 mt-1">Manage patient records and information</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="size-4 mr-2" />
              Add Patient
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Register New Patient</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddPatient();
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="Enter age" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <select
                    id="gender"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blood">Blood Type</Label>
                  <Input id="blood" placeholder="e.g., O+" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+1 234-567-8900" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter full address" required />
              </div>
              <div className="flex justify-end gap-3">
                <DialogTrigger asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogTrigger>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Register Patient
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
        <Input
          placeholder="Search patients by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Patients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {patient.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{patient.name}</CardTitle>
                    <p className="text-sm text-gray-500">
                      {patient.age} years • {patient.gender}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={patient.status === "Active" ? "default" : "secondary"}
                >
                  {patient.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="size-4" />
                {patient.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="size-4" />
                {patient.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="size-4" />
                {patient.address}
              </div>
              <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Blood Type</p>
                  <p className="font-semibold text-gray-900">{patient.bloodType}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Last Visit</p>
                  <p className="font-semibold text-gray-900">{patient.lastVisit}</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-2">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No patients found</p>
        </div>
      )}
    </div>
  );
}
