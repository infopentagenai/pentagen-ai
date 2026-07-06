type SectionTitleProps = {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
};

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge && (
        <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}