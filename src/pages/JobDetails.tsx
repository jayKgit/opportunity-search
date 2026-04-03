import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, DollarSign, Clock, Building2, Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { jobs } from "@/data/jobs";
import { toast } from "sonner";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);
  const [saved, setSaved] = useState(false);

  if (!job) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-foreground">Job not found</h2>
          <p className="mt-2 text-muted-foreground">This listing may have been removed.</p>
          <Link to="/" className="mt-4">
            <Button>Back to Jobs</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleApply = () => {
    toast.success("Application submitted!", { description: `You applied to ${job.title} at ${job.company}.` });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to jobs
          </Link>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                  {job.logo}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{job.title}</h1>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Building2 className="h-4 w-4" />{job.company}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{job.posted}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => setSaved(!saved)}>
                  {saved ? <BookmarkCheck className="h-5 w-5 text-primary" /> : <Bookmark className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon" onClick={() => toast.info("Link copied!")}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary">{job.type}</Badge>
              <span className="flex items-center gap-1 text-sm font-medium text-success">
                <DollarSign className="h-4 w-4" />{job.salary}
              </span>
            </div>

            <hr className="my-6 border-border" />

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">About this role</h2>
              <p className="leading-relaxed text-muted-foreground">{job.description}</p>
            </section>

            <section className="mt-6">
              <h2 className="mb-3 text-lg font-semibold text-foreground">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {req}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-8 flex gap-3">
              <Button className="flex-1" onClick={handleApply}>Apply Now</Button>
              <Button variant="outline" onClick={() => setSaved(!saved)}>
                {saved ? "Saved" : "Save Job"}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetails;
