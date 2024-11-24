import Image from 'next/image';
import pfhscLogo from '/public/pfhsc-logo.png';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-start py-6 mb-8">
      <div className="relative w-[200px] h-16">
        <Image
          src={pfhscLogo}
          alt="PFHSC Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </nav>
  );
}