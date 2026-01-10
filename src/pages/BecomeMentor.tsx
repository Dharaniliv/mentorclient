import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, CheckCircle, Users, IndianRupee, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BecomeMentor = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted!",
        description:
          "We'll review your application and get back to you within 3-5 business days.",
      });
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 sm:py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Share Your Knowledge,{" "}
              <span className="gradient-text">Earn & Impact Lives</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our community of verified medical mentors and help aspiring
              doctors achieve their dreams
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <IndianRupee className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-foreground">
                Earn Well
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Set your own rates and earn ₹500-2000+ per session
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-foreground">
                Flexible Schedule
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Choose when you're available. Mentor on your own time
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-foreground">
                Make Impact
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Help students crack exams and shape their medical careers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Mentor Application
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill in your details and we'll review your application within 3-5
                business days
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-foreground">
                    Personal Information
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Priya" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Sharma" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="priya.sharma@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                {/* Professional Info */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-heading font-semibold text-foreground">
                    Professional Details
                  </h3>
                  <div>
                    <Label htmlFor="currentRole">Current Role</Label>
                    <Input
                      id="currentRole"
                      placeholder="e.g., Senior Resident, Junior Doctor"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="institution">Current Institution</Label>
                    <Input
                      id="institution"
                      placeholder="e.g., AIIMS Delhi"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="specialization">Specialization</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your specialization" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medicine">Medicine</SelectItem>
                        <SelectItem value="surgery">Surgery</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="radiology">Radiology</SelectItem>
                        <SelectItem value="dermatology">Dermatology</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Mentoring Preferences */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-heading font-semibold text-foreground">
                    Mentoring Preferences
                  </h3>
                  <div>
                    <Label>Categories you can mentor</Label>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {[
                        "NEET-UG",
                        "NEET-PG",
                        "AIIMS",
                        "MBBS Exams",
                        "Career Guidance",
                        "Specialty Selection",
                      ].map((category) => (
                        <div key={category} className="flex items-center gap-2">
                          <Checkbox id={category.toLowerCase().replace(/\s+/g, "-")} />
                          <Label
                            htmlFor={category.toLowerCase().replace(/\s+/g, "-")}
                            className="font-normal"
                          >
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="price">Session Price (₹)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="e.g., 999"
                      min="100"
                      required
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Recommended: ₹500 - ₹2000 per 45-minute session
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="bio">Short Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell students about yourself, your achievements, and why you want to mentor..."
                      rows={4}
                      required
                    />
                  </div>
                </div>

                {/* Document Upload */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-heading font-semibold text-foreground">
                    Verification Documents
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Upload any of the following: Rank letter, College ID, Medical
                    registration certificate, or official proof
                  </p>
                  <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 p-8">
                    <Upload className="h-10 w-10 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Drag and drop files here, or click to browse
                    </p>
                    <Button variant="outline" className="mt-4" type="button">
                      Select Files
                    </Button>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2 pt-4">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm font-normal leading-relaxed">
                    I agree to the{" "}
                    <a href="/terms" className="text-primary underline">
                      Terms of Service
                    </a>{" "}
                    and confirm that the information provided is accurate
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>

            {/* What Happens Next */}
            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading font-semibold text-foreground">
                What happens next?
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm text-muted-foreground">
                    Our team reviews your application within 3-5 business days
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm text-muted-foreground">
                    We verify your credentials and documents
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm text-muted-foreground">
                    Once approved, you can set up your profile and start accepting
                    bookings
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BecomeMentor;
