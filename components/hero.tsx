import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Clock, Users, Award } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Your Trusted
                <span className="text-primary block">Healthcare Partner</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Professional pharmaceutical services, expert health consultations, and comprehensive wellness solutions.
                Experience healthcare excellence with Wisdam Pharma.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Browse Products
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-4 text-center">
                <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-4 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </Card>
              <Card className="p-4 text-center">
                <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </Card>
              <Card className="p-4 text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Licensed</div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-8">
              <img
                src="/modern-pharmacy-interior-with-professional-pharmac.jpg"
                alt="Modern pharmacy interior"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">Licensed</div>
              <div className="text-sm">Pharmacists</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
