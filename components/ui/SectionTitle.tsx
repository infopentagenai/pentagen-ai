import SectionTitle from "./ui/SectionTitle";
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
    <SectionTitle
  badge="AI Suite"
  title="Everything You Need,"
  highlight="One Platform"
  description="Powerful AI tools designed for creators, developers, students and businesses."
/>
  );
}