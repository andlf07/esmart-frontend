import { LayoutDashboard } from "@/components";
import "../../styles/global.css";

export const metadata = {
  title: "Esmart-Test Dashboard",
  description: "Bienvenido al Esmart-Test Dashboard",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutDashboard>{children}</LayoutDashboard>;
}
