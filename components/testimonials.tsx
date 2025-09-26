import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    content:
      "Wisdam Pharma has been my go-to pharmacy for over 5 years. The staff is incredibly knowledgeable and always takes time to explain my medications. Their home delivery service has been a lifesaver!",
    rating: 5,
    image: "/professional-woman-smiling.png",
  },
  {
    name: "Michael Chen",
    role: "Diabetes Patient",
    content:
      "The pharmacists here really care about their patients. They helped me understand my diabetes medications and even provided valuable lifestyle advice. Excellent service and genuine care.",
    rating: 5,
    image: "/middle-aged-man-smiling.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Senior Citizen",
    content:
      "As a senior, I appreciate the patience and respect I receive here. They always ensure I understand my medications and offer helpful reminders. The consultation services are outstanding.",
    rating: 5,
    image: "/elderly-woman-smiling.png",
  },
  {
    name: "David Thompson",
    role: "Family Customer",
    content:
      "Wisdam Pharma takes care of my entire family's pharmaceutical needs. From pediatric medications to adult prescriptions, they handle everything with professionalism and care.",
    rating: 5,
    image: "/professional-man-with-family.jpg",
  },
  {
    name: "Lisa Park",
    role: "Healthcare Worker",
    content:
      "Even as a healthcare professional, I trust Wisdam Pharma for my medication needs. Their attention to detail and commitment to patient safety is impressive. Highly recommended!",
    rating: 5,
    image: "/healthcare-professional-woman.jpg",
  },
  {
    name: "Robert Williams",
    role: "Chronic Care Patient",
    content:
      "Managing multiple chronic conditions is challenging, but the team at Wisdam Pharma makes it easier. They coordinate with my doctors and ensure all my medications work well together.",
    rating: 5,
    image: "/mature-man-smiling-confidently.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with
            Wisdam Pharma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-accent mb-4" />

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-8 bg-accent text-accent-foreground">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Customers</h3>
              <p className="text-accent-foreground/90 mb-6 text-lg">
                Experience the Wisdam Pharma difference. Professional care, personalized service, and your health as our
                top priority.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
                <span className="text-accent-foreground/70">from 2,500+ reviews</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
