import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  query: string;
  onQueryChange: (q: string) => void;
  location: string;
  onLocationChange: (l: string) => void;
}

const SearchBar = ({ query, onQueryChange, location, onLocationChange }: SearchBarProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Job title, keyword, or company"
          className="border-0 bg-transparent pl-10 shadow-none focus-visible:ring-0"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>
      <div className="hidden h-8 w-px bg-border sm:block" />
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="City, state, or 'Remote'"
          className="border-0 bg-transparent pl-10 shadow-none focus-visible:ring-0"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
        />
      </div>
      <Button className="shrink-0">
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
