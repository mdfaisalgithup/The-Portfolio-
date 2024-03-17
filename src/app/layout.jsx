import "./globals.css";

export const metadata = {
  title: "The Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

<html lang="en">
<link rel="icon" href="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.523418798.1710633600&semt=ais" sizes="any" />
<body>{children}
</body>
    </html>

  );
}
