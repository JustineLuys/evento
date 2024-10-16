import SkeletonCard from "./SkeletonCard";

export default function SkeletonCards() {
  return (
    <div className="flex flex-wrap max-w-[1000px] mx-auto px-[20px] py-24 gap-20">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
