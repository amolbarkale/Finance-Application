import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Amol", lastName: "Barkale" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex sixe-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
