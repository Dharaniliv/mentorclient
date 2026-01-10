import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CategoryCard from "@/components/CategoryCard";
import MentorCard from "@/components/MentorCard";
import { categories, mentors, testimonials } from "@/data/mockData";
import { ArrowRight, CheckCircle, Users, Calendar, FileText, Shield } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Learn from{" "}
              <span className="gradient-text">Top Medical Mentors</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Book 1-on-1 sessions with verified doctors and NEET toppers. 
              Get personalized guidance for NEET-UG, NEET-PG, AIIMS, and more.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/mentors">
                  Find a Mentor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/become-mentor">Join as Mentor</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Verified Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Session Recording</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Browse by Category
            </h2>
            <p className="mt-4 text-muted-foreground">
              Find the right mentor for your specific preparation needs
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mentors Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Top Mentors
              </h2>
              <p className="mt-4 text-muted-foreground">
                Highly rated mentors trusted by thousands of students
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link to="/mentors">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.slice(0, 6).map((mentor) => (
              <MentorCard key={mentor.id} {...mentor} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/mentors">
                View All Mentors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground">
              Get started with personalized mentorship in 4 simple steps
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Choose a Mentor</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Browse verified mentors by category, rating, and price
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Calendar className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Book a Session</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Select a convenient time slot and complete payment
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Attend Session</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Join via Google Meet or Zoom link sent to your email
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Get Takeaways</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Receive session notes saved to your learning portfolio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              What Students Say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join thousands of successful students
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="text-muted-foreground">"{testimonial.content}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="rounded-2xl bg-primary px-8 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Join thousands of students who have accelerated their medical career with personalized mentorship
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/mentors">Find Your Mentor</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/become-mentor">Apply as Mentor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
