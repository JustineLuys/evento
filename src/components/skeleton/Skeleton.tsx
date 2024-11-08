import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};
export default function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("rounded-md bg-white/5", className)}></div>;
}
