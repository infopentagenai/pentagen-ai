type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 shadow-lg shadow-cyan-500/20",
    secondary:
      "border border-slate-700 text-white hover:border-cyan-400 hover:bg-slate-900",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}