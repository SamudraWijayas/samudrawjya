import GiscusComments from "./ui/GiscusComments";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function GuestBookPage() {
  return (
    <main
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      id="guestbook"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
        Guestbook & Contact
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Guestbook */}
        <div className="w-full lg:w-2/3 bg-[#10172a]/60 border border-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl z-10">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Guestbook
          </h2>

          <p className="text-gray-300 text-sm mb-4">
            Tinggalkan pesan atau komentar menggunakan akun GitHub kamu! 👋
          </p>
          <div className="p-0 bg-transparent border-none sm:p-6 sm:bg-white/5 sm:border sm:border-white/10 transition rounded-xl">
            <GiscusComments />
          </div>
        </div>

        {/* Contact */}
        <div className="w-full lg:w-1/3 bg-[#10172a]/60 border border-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl z-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
            <span className="h-4 w-4 bg-blue-400 rounded-full animate-pulse"></span>
            Connect With Me
          </h2>

          <div className="space-y-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/samodra-wijaya-samdoria/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden duration-300 group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-blue-900/20 border border-white/10 transition"
            >
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <FaLinkedin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-white font-semibold">LinkedIn</p>
                <p className="text-sm text-gray-300">Samodra Wijaya Samdoria</p>
              </div>
              <span className="absolute inset-0 -left-10 bg-white opacity-6 blur-md transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281931724964"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden duration-300 group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-green-600/20 hover:to-blue-600/20 border border-white/10 transition"
            >
              <div className="bg-green-600/20 p-3 rounded-lg">
                <FaWhatsapp className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-white font-semibold">WhatsApp</p>
                <p className="text-sm text-gray-400">+62 819-3172-4964</p>
              </div>
              <span className="absolute inset-0 -left-10 bg-white opacity-6 blur-md transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SamudraWijayas"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden duration-300 group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-gray-600/20 hover:to-white-600/20 border border-white/10 transition"
            >
              <div className="bg-gray-600/20 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.304 3.495.997.108-.776.418-1.305.76-1.604-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.046.137 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.48 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.192.694.801.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Github</p>
                <p className="text-sm text-gray-400">@SamudraWijayaS</p>
              </div>
              <span className="absolute inset-0 -left-10 bg-white opacity-6 blur-md transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>
            {/* ig */}
            <a
              href="https://www.instagram.com/samudrawjya_?igsh=MWkxaWtsczd2aHZpOQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden duration-300 group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border border-white/10 transition"
            >
              <div className="bg-pink-600/20 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.5 2C4.47 2 2 4.47 2 7.5v9C2 19.53 4.47 22 7.5 22h9c3.03 0 5.5-2.47 5.5-5.5v-9C22 4.47 19.53 2 16.5 2h-9zm0 2h9C18.43 4 20 5.57 20 7.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9C4 5.57 5.57 4 7.5 4zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-2a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Instagram</p>
                <p className="text-sm text-gray-400">@samudrawjya_</p>
              </div>
              <span className="absolute inset-0 -left-10 bg-white opacity-6 blur-md transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
