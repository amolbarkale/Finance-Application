export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("children:", children);
  return (
    <main>
      SIDEBAR
      {children}
    </main>
  );
}
