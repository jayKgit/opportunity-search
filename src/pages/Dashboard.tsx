import { Bookmark, FileText, User, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { jobs } from "@/data/jobs";

const Dashboard = () => {
  const savedJobs = jobs.slice(0, 3);

  const stats = [
    { label: "Applications", value: "12", icon: FileText },
    { label: "Saved Jobs", value: "3", icon: Bookmark },
    { label: "Profile Views", value: "48", icon: User },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Track your job search progress</p>
          </div>

          {/* Stats */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Saved Jobs */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Saved Jobs</h2>
              <Button variant="ghost" size="sm">View all</Button>
            </div>
            <div className="space-y-3">
              {savedJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                      {job.logo}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{job.title}</p>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{job.type}</Badge>
                    <Button variant="outline" size="sm">Apply</Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mt-8">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Button variant="outline" className="h-auto justify-start gap-3 p-4">
                <User className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium">Edit Profile</p>
                  <p className="text-xs text-muted-foreground">Update your information</p>
                </div>
              </Button>
              <Button variant="outline" className="h-auto justify-start gap-3 p-4">
                <Settings className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium">Preferences</p>
                  <p className="text-xs text-muted-foreground">Job alerts & notifications</p>
                </div>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
