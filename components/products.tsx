import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, Bone, Eye, Thermometer, Badge as Bandage } from "lucide-react"

const categories = [
  {
    icon: Heart,
    title: "Cardiovascular Health",
    description: "Medications and supplements for heart health, blood pressure management, and circulation.",
    products: ["Blood pressure medications", "Cholesterol management", "Heart supplements", "Circulation aids"],
    color: "bg-red-50 text-red-600 border-red-200",
  },
  {
    icon: Brain,
    title: "Mental Health & Wellness",
    description: "Support for mental health, cognitive function, and neurological conditions.",
    products: ["Antidepressants", "Anxiety medications", "Sleep aids", "Cognitive supplements"],
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    icon: Bone,
    title: "Bone & Joint Care",
    description: "Products for bone health, joint support, and mobility enhancement.",
    products: ["Calcium supplements", "Joint pain relief", "Arthritis medications", "Mobility aids"],
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    icon: Eye,
    title: "Vision & Eye Care",
    description: "Comprehensive eye care products and vision health solutions.",
    products: ["Eye drops", "Vision supplements", "Contact solutions", "Reading glasses"],
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    icon: Thermometer,
    title: "Cold & Flu Relief",
    description: "Effective treatments for seasonal illnesses and immune system support.",
    products: ["Cold medications", "Flu treatments", "Immune boosters", "Throat lozenges"],
    color: "bg-green-50 text-green-600 border-green-200",
  },
  {
    icon: Bandage,
    title: "First Aid & Wound Care",
    description: "Essential first aid supplies and wound care products for home and travel.",
    products: ["Bandages & gauze", "Antiseptics", "Pain relievers", "Emergency kits"],
    color: "bg-yellow-50 text-yellow-600 border-yellow-200",
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">Quality Products for Every Health Need</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Browse our comprehensive selection of prescription medications, over-the-counter products, and health
            supplements from trusted pharmaceutical brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {category.products.map((product, productIndex) => (
                    <Badge key={productIndex} variant="secondary" className="mr-2 mb-2">
                      {product}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  View Products
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 bg-primary text-primary-foreground">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Need a Specific Medication?</h3>
              <p className="text-primary-foreground/90 mb-6 text-lg">
                Can't find what you're looking for? Our pharmacists can help you locate any prescription or specialty
                medication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Contact Pharmacist
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Request Medication
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
