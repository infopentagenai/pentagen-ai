type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <Card>
  ...
</Card>
      {children}
    </div>
  );
}