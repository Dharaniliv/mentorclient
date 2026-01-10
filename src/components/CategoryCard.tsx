import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  mentorCount: number;
}

const CategoryCard = ({ title, description, icon: Icon, slug, mentorCount }: CategoryCardProps) => {
  return (
    <Link
      to={`/category/${slug}`}
      className="group rounded-xl border border-border bg-card p-6 card-hover"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <p className="mt-4 text-sm font-medium text-primary">{mentorCount} mentors available</p>
    </Link>
  );
};

export default CategoryCard;
