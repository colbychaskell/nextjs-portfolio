import '@/app/ui/global.css'
import SideNav from '@/app/ui/nav/sidenav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <SideNav />
          <div className="flex-grow p-6 md:p-12 md:ml-64">{children}</div>
        </div>
      </body>
    </html>
  );
}