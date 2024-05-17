export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("LAYOUT!!!!");

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
