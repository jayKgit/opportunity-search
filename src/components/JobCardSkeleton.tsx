import { Skeleton } from "@/components/ui/skeleton";

const JobCardSkeleton = () => (
  <div className="rounded-xl border border-border bg-card p-5">
    <div className="flex items-start gap-4">
      <Skeleton className="h-12 w-12 rounded-lg" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
    <div className="mt-4 flex gap-2">
      <Skeleton className="h-6 w-20 rounded-full" />
      <Skeleton className="h-6 w-32 rounded-full" />
    </div>
    <Skeleton className="mt-3 h-10 w-full" />
    <div className="mt-4 flex gap-2">
      <Skeleton className="h-9 flex-1" />
      <Skeleton className="h-9 flex-1" />
    </div>
  </div>
);

export default JobCardSkeleton;
