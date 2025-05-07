import GiscusComments from "./ui/GiscusComments";

export default function GuestBookPage() {
  return (
    <main className="max-w-full sm:max-w-xl md:max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 bg-black py-10" id="guestbook">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">📖 Guestbook</h1>
      <p className="text-white mb-6 text-sm sm:text-base">
        Tinggalkan pesan atau komentar menggunakan akun GitHub kamu! 👋
      </p>
      <GiscusComments />
    </main>
  );
}
