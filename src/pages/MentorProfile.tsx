import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mentors } from "@/data/mockData";
import {
  Star,
  Clock,
  IndianRupee,
  GraduationCap,
  Award,
  Languages,
  ArrowLeft,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const MentorProfile = () => {
  const { id } = useParams();
  const mentor = mentors.find((m) => m.id === id);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  if (!mentor) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Mentor not found
          </h1>
          <Button asChild className="mt-4">
            <Link to="/mentors">Browse Mentors</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Generate next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      full: date.toISOString().split("T")[0],
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
    };
  });

  return (
    <Layout>
      <div className="container-custom section-padding">
        <Link
          to="/mentors"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Mentors
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Mentor Info */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="h-32 w-32 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {mentor.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    {mentor.name}
                  </h1>
                  <p className="mt-1 text-muted-foreground">{mentor.title}</p>
                  <p className="text-muted-foreground">{mentor.institution}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-5 w-5 fill-warning text-warning" />
                      <span className="font-medium text-foreground">
                        {mentor.rating.toFixed(1)}
                      </span>
                      <span className="text-muted-foreground">
                        ({mentor.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="h-5 w-5" />
                      <span>{mentor.experience} experience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-8">
                <h2 className="font-heading text-lg font-semibold text-foreground">
                  About
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{mentor.bio}</p>
              </div>

              {/* Education */}
              <div className="mt-8">
                <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </h2>
                <ul className="mt-3 space-y-2">
                  {mentor.education.map((edu, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="mt-8">
                <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                  <Award className="h-5 w-5 text-primary" />
                  Achievements
                </h2>
                <ul className="mt-3 space-y-2">
                  {mentor.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="mt-8">
                <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                  <Languages className="h-5 w-5 text-primary" />
                  Languages
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {mentor.languages.map((language) => (
                    <Badge key={language} variant="outline">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-foreground">
                  <IndianRupee className="h-5 w-5" />
                  <span className="text-3xl font-bold">{mentor.price}</span>
                </div>
                <span className="text-muted-foreground">per session</span>
              </div>

              <div className="mt-6">
                <h3 className="flex items-center gap-2 font-heading font-semibold text-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  Select Date
                </h3>
                <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7 lg:grid-cols-4">
                  {dates.map((date) => (
                    <button
                      key={date.full}
                      onClick={() => setSelectedDate(date.full)}
                      className={`flex flex-col items-center rounded-lg border p-2 text-sm transition-colors ${
                        selectedDate === date.full
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      <span className="text-xs">{date.day}</span>
                      <span className="font-semibold">{date.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="flex items-center gap-2 font-heading font-semibold text-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  Select Time
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {mentor.slots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                        selectedSlot === slot
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                className="mt-6 w-full"
                size="lg"
                disabled={!selectedDate || !selectedSlot}
              >
                Book Session
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                You'll receive a meeting link after payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentorProfile;
