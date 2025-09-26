import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Clock } from "lucide-react"

const achievements = [
  { icon: Users, number: "50,000+", label: "Satisfied Customers" },
  { icon: Award, number: "15+", label: "Years of Excellence" },
  { icon: CheckCircle, number: "99.9%", label: "Accuracy Rate" },
  { icon: Clock, number: "24/7", label: "Available Support" },
]

const values = [
  "Patient-centered care and personalized service",
  "Highest quality pharmaceutical standards",
  "Continuous professional development and training",
  "Community health and wellness advocacy",
  "Ethical business practices and transparency",
  "Innovation in healthcare delivery",
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">
                Dedicated to Your
                <span className="text-primary block">Health & Wellness</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 15 years, Wisdam Pharma has been a cornerstone of healthcare in our community. We combine
                traditional pharmaceutical expertise with modern healthcare solutions to provide comprehensive care that
                goes beyond just filling prescriptions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of licensed pharmacists and healthcare professionals is committed to ensuring you receive the
                highest quality care, personalized attention, and expert guidance for all your health and wellness
                needs.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Core Values</h3>
              <div className="grid gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="text-lg px-8">
              Meet Our Team
            </Button>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img
                src="/professional-pharmacy-team-consultation.jpg"
                alt="Professional pharmacy team"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <achievement.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
