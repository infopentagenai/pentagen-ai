export default function Footer() {
  return (
    <footer className="bg-[#030617] border-t border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-blue-500">
            Pentagen AI
          </h2>

          <p className="text-gray-400 mt-2">
            Five AI Powers. One Platform.
          </p>
        </div>

        <div className="flex gap-8 mt-6 md:mt-0 text-gray-400">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>

      </div>
    </footer>
  );
}