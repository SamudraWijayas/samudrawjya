import GiscusComments from "./ui/GiscusComments";

export default function GuestBookPage() {
  return (
    <main
      className="w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-black py-10"
      id="guestbook"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">📖 Guestbook</h1>
      <p className="text-white mb-6 text-xs sm:text-sm md:text-base">
        Tinggalkan pesan atau komentar menggunakan akun GitHub kamu! 👋
      </p>
      <GiscusComments />
    </main>
  );
}
