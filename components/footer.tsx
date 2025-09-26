import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  services: [
    "Prescription Services",
    "Health Consultations",
    "Wellness Programs",
    "Home Delivery",
    "Insurance Services",
    "Emergency Support",
  ],
  quickLinks: ["About Us", "Our Team", "Services", "Products", "Contact", "Careers"],
  resources: [
    "Health Tips",
    "Medication Guide",
    "Insurance Info",
    "Patient Forms",
    "Privacy Policy",
    "Terms of Service",
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">W</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Wisdam Pharma</h3>
                <p className="text-sm text-primary-foreground/80">Your Health, Our Priority</p>
              </div>
            </div>

            <p className="text-primary-foreground/90 leading-relaxed">
              Professional pharmaceutical services with a personal touch. Serving our community with excellence for over
              15 years.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Health Street, Medical District</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@wisdampharma.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Mon-Sat: 8AM-10PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Subscribe to our newsletter for health tips, medication reminders, and pharmacy updates.
            </p>

            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>

            <div className="space-y-4">
              <h5 className="font-medium">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/80">
            © 2025 Wisdam Pharma. All rights reserved. Licensed Pharmacy #PH12345
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
