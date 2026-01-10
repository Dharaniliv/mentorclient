import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, IndianRupee } from "lucide-react";

interface MentorCardProps {
  id: string;
  name: string;
  avatar: string;
  title: string;
  institution: string;
  rating: number;
  reviewCount: number;
  price: number;
  categories: string[];
  experience: string;
}

const MentorCard = ({
  id,
  name,
  avatar,
  title,
  institution,
  rating,
  reviewCount,
  price,
  categories,
  experience,
}: MentorCardProps) => {
  return (
    <Link
      to={`/mentor/${id}`}
      className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden card-hover"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={avatar}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {categories.slice(0, 2).map((category) => (
            <Badge key={category} variant="secondary" className="text-xs font-medium">
              {category}
            </Badge>
          ))}
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{institution}</p>
        
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
              <span className="text-sm text-muted-foreground">({reviewCount})</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{experience}</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <div className="flex items-center text-foreground">
              <IndianRupee className="h-4 w-4" />
              <span className="text-lg font-semibold">{price}</span>
              <span className="text-sm text-muted-foreground">/session</span>
            </div>
            <span className="text-sm font-medium text-primary">Book Now →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MentorCard;
