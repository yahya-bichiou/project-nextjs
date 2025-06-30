export default function Button({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-400 hover:bg-purple-500 transition-colors duration-200 rounded-lg text-white mt-5 px-6 py-3 font-medium"
    >
      {text}
    </button>
  );
}
