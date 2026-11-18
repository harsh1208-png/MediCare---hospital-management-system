import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Dashboard } from "./components/Dashboard";
import { Patients } from "./components/Patients";
import { Doctors } from "./components/Doctors";
import { Appointments } from "./components/Appointments";
import { Billing } from "./components/Billing";
import { MedicalRecords } from "./components/MedicalRecords";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "patients", Component: Patients },
      { path: "doctors", Component: Doctors },
      { path: "appointments", Component: Appointments },
      { path: "billing", Component: Billing },
      { path: "medical-records", Component: MedicalRecords },
      { path: "*", Component: NotFound },
    ],
  },
]);
