import { useState, useEffect, useMemo } from "react";
import { TrendingUp, Users, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import JobList from "@/components/JobList";
import { jobs } from "@/data/jobs";

const Index = () => {
  const [query, setQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesQuery =
        !query ||
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase());
      const matchesLocation =
        !locationFilter ||
        job.location.toLowerCase().includes(locationFilter.toLowerCase());
      return matchesQuery && matchesLocation;
    });
  }, [query, locationFilter]);

  const toggleSave = (id: string) => {
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((j) => j !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero px-4 py-16 text-center sm:py-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl">
          Find Your Dream Job
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Discover thousands of job opportunities from top companies. Your next career move starts here.
        </p>
        <div className="mx-auto mt-8 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-1.5">
            <TrendingUp className="h-4 w-4" /> 10,000+ Jobs
          </span>
          <span className="flex items-center gap-1.5">
            <Building2 className="h-4 w-4" /> 3,000+ Companies
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4" /> 50,000+ Candidates
          </span>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="-mt-14 mb-8">
            <SearchBar
              query={query}
              onQueryChange={setQuery}
              location={locationFilter}
              onLocationChange={setLocationFilter}
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {loading ? "Loading..." : `${filteredJobs.length} jobs found`}
            </p>
          </div>

          <JobList
            jobs={filteredJobs}
            savedJobs={savedJobs}
            onToggleSave={toggleSave}
            loading={loading}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
