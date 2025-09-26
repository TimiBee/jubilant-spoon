export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Wisdam Pharma</h1>
        <p className="text-xl mb-4">Your Trusted Healthcare Partner</p>
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Our Pharmacy</h2>
          <p className="text-muted-foreground">
            Professional pharmaceutical services, prescription medications, 
            health consultations, and wellness products. Your health is our priority.
          </p>
        </div>
      </div>
    </main>
  )
}
