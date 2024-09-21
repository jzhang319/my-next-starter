import "./globals.css";

export const metadata = {
  title: "My Starter",
  description: "Generate My Starter App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
      />
      <body>{children}</body>
    </html>
  );
}
