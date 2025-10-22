import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link href="#home" className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo.jpg" // Assumes /public/YM_logo.jpg
                alt="YM Solutions Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg shadow-md"
              />
              <h4 className="text-2xl font-bold text-white">Solutions</h4>
            </Link>
            <p className="text-sm text-gray-400">
              Your dedicated partner in digital growth, delivering measurable
              results through technology and creative excellence.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-corporate-accent">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="#mission"
                  className="hover:text-corporate-accent transition duration-150"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="hover:text-corporate-accent transition duration-150"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-corporate-accent transition duration-150"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-corporate-accent transition duration-150"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-corporate-accent">
              Expertise
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>Game Development</li>
              <li>Video Editing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-corporate-accent">
              Connect
            </h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575130954126"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-corporate-accent transition duration-150"
                title="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ymsolutionsofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-corporate-accent transition duration-150"
                title="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118a4.182 4.182 0 100 8.364 4.182 4.182 0 000-8.364zM12 14.828a2.828 2.828 0 110-5.656 2.828 2.828 0 010 5.656zM16.802 6.118a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ymsolutionsofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-corporate-accent transition duration-150"
                title="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Email: contact@ymsolutions.in
            </p>
            <p className="text-sm text-gray-400">Phone: +91 93102 56281</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} YM Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
