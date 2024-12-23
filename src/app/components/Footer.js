export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Mondher. All Rights Reserved.</p>
        <p>
          Built with <span className="text-indigo-500">Tailwind CSS</span> and{" "}
          <span className="text-indigo-500">Next.js</span>.
        </p>
      </div>
    </footer>
  );
}
