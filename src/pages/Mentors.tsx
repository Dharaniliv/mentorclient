import Layout from "@/components/Layout";
import MentorCard from "@/components/MentorCard";
import { mentors, categories } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const Mentors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.institution.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory ||
      mentor.categories.some(
        (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
      );

    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container-custom section-padding">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Find Your Perfect Mentor
          </h1>
          <p className="mt-4 text-muted-foreground">
            Browse our verified mentors and book a 1-on-1 session
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mt-10">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name, title, or institution..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Category Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !selectedCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.title)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  selectedCategory === category.title
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mt-8">
          <p className="text-sm text-muted-foreground">
            Showing {filteredMentors.length} mentors
          </p>
          {filteredMentors.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMentors.map((mentor) => (
                <MentorCard key={mentor.id} {...mentor} />
              ))}
            </div>
          ) : (
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground">
                No mentors found matching your criteria
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Mentors;
