import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-light-bg text-center px-4">
      <div className="max-w-md w-full">
        <h1 className="text-9xl font-extrabold text-corporate-navy tracking-tighter">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-corporate-accent mt-2 mb-4">
          Page Not Found
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved, deleted, or maybe you just mistyped the URL.
        </p>
        <Link
          href="/"
          className="cta-button-pro inline-block bg-corporate-navy text-white font-bold px-8 py-3 rounded-lg text-lg hover:bg-corporate-accent transition duration-300 transform shadow-xl"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}
