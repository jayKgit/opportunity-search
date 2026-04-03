import { SearchX } from "lucide-react";
import JobCard from "./JobCard";
import JobCardSkeleton from "./JobCardSkeleton";
import type { Job } from "@/data/jobs";

interface JobListProps {
  jobs: Job[];
  savedJobs: string[];
  onToggleSave: (id: string) => void;
  loading?: boolean;
}

const JobList = ({ jobs, savedJobs, onToggleSave, loading }: JobListProps) => {
  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
        <SearchX className="mb-4 h-12 w-12 text-muted-foreground/50" />
        <h3 className="text-lg font-semibold text-foreground">No jobs found</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your search terms or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          isSaved={savedJobs.includes(job.id)}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
};

export default JobList;
