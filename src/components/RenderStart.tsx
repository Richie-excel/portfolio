import {
  Star,
  StarHalf,
} from "lucide-react";

export const RenderStars = (rating: number) => {
  const stars = [];

  const fullStars = Math.floor(rating);

  const hasHalfStar =
    rating % 1 !== 0;

  const emptyStars =
    5 - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className="w-4 h-4 fill-emerald-400 text-emerald-400"
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <StarHalf
        key="half"
        className="w-4 h-4 fill-emerald-400 text-emerald-400"
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star
        key={`empty-${i}`}
        className="w-4 h-4 text-slate-600"
      />
    );
  }

  return stars;
};