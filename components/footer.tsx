export default function Footer() {
  return (
    <>
      <footer className="w-full py-6 bg-white relative z-10">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} UT. All rights reserved.
        </p>
      </footer>
    </>
  );
}
