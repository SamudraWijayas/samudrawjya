import GiscusComments from "./ui/GiscusComments";

export default function GuestBookPage() {
  return (
    <main className="max-w-2xl mx-auto p-5 lg:p-6 bg-black py-10" id="guestbook">
      <h1 className="text-3xl font-bold mb-4 text-white">📖 Guestbook</h1>
      <p className="text-white mb-6">
        Tinggalkan pesan atau komentar menggunakan akun GitHub kamu! 👋
      </p>
      <GiscusComments />
    </main>
  );
}
