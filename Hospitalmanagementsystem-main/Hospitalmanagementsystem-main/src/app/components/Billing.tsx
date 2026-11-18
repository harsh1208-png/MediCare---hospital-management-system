import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Search, DollarSign, Download, Eye } from "lucide-react";

interface Invoice {
  id: string;
  patient: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
  service: string;
  doctor: string;
}

export function Billing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [invoices] = useState<Invoice[]>([
    {
      id: "INV-001",
      patient: "Sarah Johnson",
      date: "2026-04-05",
      amount: 450,
      status: "Paid",
      service: "Cardiac Consultation",
      doctor: "Dr. Michael Chen",
    },
    {
      id: "INV-002",
      patient: "Robert Williams",
      date: "2026-04-08",
      amount: 1250,
      status: "Paid",
      service: "Post-Surgery Checkup",
      doctor: "Dr. Emily Brown",
    },
    {
      id: "INV-003",
      patient: "Maria Garcia",
      date: "2026-04-09",
      amount: 320,
      status: "Pending",
      service: "Orthopedic Consultation",
      doctor: "Dr. James Wilson",
    },
    {
      id: "INV-004",
      patient: "David Martinez",
      date: "2026-04-01",
      amount: 5800,
      status: "Paid",
      service: "Appendectomy Surgery",
      doctor: "Dr. Sarah Davis",
    },
    {
      id: "INV-005",
      patient: "Jennifer Lee",
      date: "2026-03-28",
      amount: 280,
      status: "Overdue",
      service: "General Consultation",
      doctor: "Dr. Michael Chen",
    },
    {
      id: "INV-006",
      patient: "John Smith",
      date: "2026-04-07",
      amount: 420,
      status: "Pending",
      service: "Neurology Consultation",
      doctor: "Dr. Robert Taylor",
    },
  ]);

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Overdue":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const totalRevenue = invoices
    .filter((inv) => inv.status === "Paid")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const pendingAmount = invoices
    .filter((inv) => inv.status === "Pending")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const overdueAmount = invoices
    .filter((inv) => inv.status === "Overdue")
    .reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Billing & Invoices</h1>
        <p className="text-gray-500 mt-1">Manage payments and financial records</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <p className="text-2xl font-semibold text-gray-900 mt-2">
                  ${totalRevenue.toLocaleString()}
                </p>
                <p className="text-sm text-green-600 mt-1">All time</p>
              </div>
              <div className="bg-green-50 text-green-600 p-3 rounded-lg">
                <DollarSign className="size-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending Payments</p>
                <p className="text-2xl font-semibold text-gray-900 mt-2">
                  ${pendingAmount.toLocaleString()}
                </p>
                <p className="text-sm text-yellow-600 mt-1">Awaiting payment</p>
              </div>
              <div className="bg-yellow-50 text-yellow-600 p-3 rounded-lg">
                <DollarSign className="size-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Overdue</p>
                <p className="text-2xl font-semibold text-gray-900 mt-2">
                  ${overdueAmount.toLocaleString()}
                </p>
                <p className="text-sm text-red-600 mt-1">Requires attention</p>
              </div>
              <div className="bg-red-50 text-red-600 p-3 rounded-lg">
                <DollarSign className="size-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
        <Input
          placeholder="Search by patient name or invoice ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Invoices Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                    Invoice ID
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                    Patient
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                    Service
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                    Doctor
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span className="font-semibold text-gray-900">
                        {invoice.id}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{invoice.patient}</td>
                    <td className="py-4 px-4 text-gray-700">{invoice.service}</td>
                    <td className="py-4 px-4 text-gray-700">{invoice.doctor}</td>
                    <td className="py-4 px-4 text-gray-700">{invoice.date}</td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-gray-900">
                        ${invoice.amount.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(invoice.status)}>
                        {invoice.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="size-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredInvoices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No invoices found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
