import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pill, Stethoscope, Heart, Truck, Phone, FileText } from "lucide-react"

const services = [
  {
    icon: Pill,
    title: "Prescription Services",
    description:
      "Expert prescription filling, medication counseling, and drug interaction checks by licensed pharmacists.",
    features: ["Same-day filling", "Insurance processing", "Generic alternatives", "Medication reviews"],
  },
  {
    icon: Stethoscope,
    title: "Health Consultations",
    description: "Professional health screenings, wellness consultations, and preventive care services.",
    features: ["Blood pressure checks", "Diabetes screening", "Cholesterol testing", "Health assessments"],
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    description: "Comprehensive wellness programs designed to help you maintain optimal health and prevent illness.",
    features: ["Vaccination services", "Health monitoring", "Lifestyle counseling", "Nutrition guidance"],
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Convenient medication delivery service bringing your prescriptions directly to your doorstep.",
    features: ["Free local delivery", "Scheduled deliveries", "Secure packaging", "Real-time tracking"],
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock pharmaceutical support and emergency consultation services.",
    features: ["Emergency hotline", "Medication reminders", "Refill notifications", "Health advice"],
  },
  {
    icon: FileText,
    title: "Insurance Services",
    description: "Complete insurance processing and prior authorization assistance for all major providers.",
    features: ["Claims processing", "Prior authorizations", "Coverage verification", "Cost optimization"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">Comprehensive Healthcare Services</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            From prescription services to wellness programs, we provide complete pharmaceutical care tailored to your
            individual health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
