export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-5 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <h1 className="text-2xl font-bold text-blue-500">
        Pentagen AI
      </h1>

      <div className="flex gap-8 text-gray-300">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>

      <button className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
        Login
      </button>
    </nav>
  );
}