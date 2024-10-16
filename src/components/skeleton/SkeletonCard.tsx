import Skeleton from "./Skeleton";

export default function SkeletonCard() {
  return (
    <div className="space-y-4 animate-pulse">
      <Skeleton className="h-12 w-12 rounded-full " />
      <Skeleton className="h-4 w-[250px] border-white/50" />
      <Skeleton className="h-4 w-[250px] border-white/50" />
    </div>
  );
}
