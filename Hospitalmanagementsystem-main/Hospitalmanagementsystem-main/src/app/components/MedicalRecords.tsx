import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Search, FileText, Download, Eye, Plus } from "lucide-react";

interface MedicalRecord {
  id: string;
  patient: string;
  doctor: string;
  date: string;
  diagnosis: string;
  type: "Consultation" | "Surgery" | "Lab Report" | "Prescription" | "X-Ray";
  notes: string;
}

export function MedicalRecords() {
  const [searchQuery, setSearchQuery] = useState("");
  const [records] = useState<MedicalRecord[]>([
    {
      id: "MR-001",
      patient: "Sarah Johnson",
      doctor: "Dr. Michael Chen",
      date: "2026-04-05",
      diagnosis: "Hypertension - Stage 1",
      type: "Consultation",
      notes: "Patient advised to monitor blood pressure daily. Prescribed medication and lifestyle changes.",
    },
    {
      id: "MR-002",
      patient: "Robert Williams",
      doctor: "Dr. Emily Brown",
      date: "2026-04-08",
      diagnosis: "Post-operative recovery",
      type: "Surgery",
      notes: "Appendectomy performed successfully. Patient recovering well with no complications.",
    },
    {
      id: "MR-003",
      patient: "Maria Garcia",
      doctor: "Dr. James Wilson",
      date: "2026-04-09",
      diagnosis: "Osteoarthritis - Knee",
      type: "X-Ray",
      notes: "X-ray shows moderate joint degeneration. Recommended physical therapy.",
    },
    {
      id: "MR-004",
      patient: "David Martinez",
      doctor: "Dr. Sarah Davis",
      date: "2026-04-01",
      diagnosis: "Acute Appendicitis",
      type: "Surgery",
      notes: "Emergency appendectomy. Pre-operative labs normal. Surgery completed without complications.",
    },
    {
      id: "MR-005",
      patient: "Jennifer Lee",
      doctor: "Dr. Michael Chen",
      date: "2026-03-28",
      diagnosis: "Cardiac Arrhythmia",
      type: "Lab Report",
      notes: "ECG shows irregular heartbeat. Further monitoring required. Blood work within normal range.",
    },
    {
      id: "MR-006",
      patient: "John Smith",
      doctor: "Dr. Robert Taylor",
      date: "2026-04-07",
      diagnosis: "Migraine",
      type: "Prescription",
      notes: "Prescribed pain medication and advised to avoid trigger foods.",
    },
  ]);

  const filteredRecords = records.filter(
    (record) =>
      record.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.diagnosis.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Consultation":
        return "bg-blue-100 text-blue-700";
      case "Surgery":
        return "bg-red-100 text-red-700";
      case "Lab Report":
        return "bg-purple-100 text-purple-700";
      case "Prescription":
        return "bg-green-100 text-green-700";
      case "X-Ray":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Medical Records</h1>
          <p className="text-gray-500 mt-1">Access and manage patient medical histories</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="size-4 mr-2" />
          Add Record
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
        <Input
          placeholder="Search by patient, record ID, or diagnosis..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Records List */}
      <div className="space-y-4">
        {filteredRecords.map((record) => (
          <Card key={record.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <FileText className="size-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-lg">{record.id}</CardTitle>
                      <Badge className={getTypeColor(record.type)}>
                        {record.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {record.date} • {record.doctor}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="size-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="size-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Patient</p>
                <p className="font-semibold text-gray-900">{record.patient}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Diagnosis</p>
                <p className="font-semibold text-gray-900">{record.diagnosis}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Notes</p>
                <p className="text-gray-700">{record.notes}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRecords.length === 0 && (
        <div className="text-center py-12">
          <FileText className="size-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No medical records found</p>
        </div>
      )}
    </div>
  );
}
