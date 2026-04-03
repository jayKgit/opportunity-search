import { Link } from "react-router-dom";
import { Bookmark, BookmarkCheck, MapPin, DollarSign, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Job } from "@/data/jobs";

interface JobCardProps {
  job: Job;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

const typeVariantMap: Record<string, string> = {
  "Full-time": "bg-primary/10 text-primary",
  "Part-time": "bg-warning/10 text-warning",
  "Contract": "bg-accent/10 text-accent",
  "Remote": "bg-success/10 text-success",
};

const JobCard = ({ job, isSaved, onToggleSave }: JobCardProps) => {
  return (
    <div className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-semibold text-primary text-sm">
            {job.logo}
          </div>
          <div className="min-w-0">
            <Link to={`/job/${job.id}`} className="block">
              <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                {job.title}
              </h3>
            </Link>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5" />
                {job.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {job.location}
              </span>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0"
          onClick={() => onToggleSave(job.id)}
        >
          {isSaved ? (
            <BookmarkCheck className="h-5 w-5 text-primary" />
          ) : (
            <Bookmark className="h-5 w-5 text-muted-foreground" />
          )}
        </Button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className={typeVariantMap[job.type] || ""}>
          {job.type}
        </Badge>
        <span className="flex items-center gap-1 text-sm font-medium text-success">
          <DollarSign className="h-3.5 w-3.5" />
          {job.salary}
        </span>
        <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {job.posted}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
        {job.description}
      </p>

      <div className="mt-4 flex gap-2">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            View Details
          </Button>
        </Link>
        <Button size="sm" className="flex-1">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
