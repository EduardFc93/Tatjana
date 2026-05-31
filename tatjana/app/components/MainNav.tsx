'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MainNav: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav>
            <Link
        href="/search"
        passHref
        className={`hover:text-background px-2 transition duration-300 ${
          pathname === '/search' ? 'underline text-background-dark' : ''
        }`}
      >
        Search Doctors
      </Link>

      <Link
        href="/register"
        passHref
        className={`hover:text-background px-2 transition duration-300 ${
          pathname === '/register' ? 'underline text-background-dark' : ''
        }`}
      >
        Register
      </Link>
      <Link
        href="/login"
        passHref
        className={`hover:text-background px-2 transition duration-300 ${
          pathname === '/login' ? 'underline text-background-dark' : ''
        }`}
      >
        Login
      </Link>


    </nav>
  );
};

export default MainNav;