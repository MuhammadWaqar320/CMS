import '../globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xlg:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="app-logo" width={32} height={32} />
          <span className="hidden lg:block">EduManage</span>
        </Link>
        <Menu />
      </div>
      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xlg:w-[86%] bg-[#F7F8FA] over-flow-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
