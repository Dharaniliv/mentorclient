import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import MentorCard from "@/components/MentorCard";
import { Button } from "@/components/ui/button";
import { mentors, categories } from "@/data/mockData";
import { ArrowLeft } from "lucide-react";

const Category = () => {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Category not found
          </h1>
          <Button asChild className="mt-4">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const categoryMentors = mentors.filter((mentor) =>
    mentor.categories.some(
      (cat) => cat.toLowerCase().replace(/\s+/g, "-") === slug
    )
  );

  return (
    <Layout>
      <div className="container-custom section-padding">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Categories
        </Link>

        <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 sm:p-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <category.icon className="h-7 w-7" />
          </div>
          <h1 className="mt-6 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {category.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {category.description}
          </p>
          <p className="mt-4 text-sm font-medium text-primary">
            {categoryMentors.length} mentors available
          </p>
        </div>

        {categoryMentors.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryMentors.map((mentor) => (
              <MentorCard key={mentor.id} {...mentor} />
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              No mentors available in this category yet
            </p>
            <Button asChild className="mt-4">
              <Link to="/mentors">Browse All Mentors</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Category;
