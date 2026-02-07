export default function Background({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
      {children}
    </div>
  );
}
