import { Providers } from "@/components";
import "../styles/global.css";

export const metadata = {
  title: "Esmart-test Frontend",
  description: "Bienvenido a Esmart-test Frontend",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: "0px" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
