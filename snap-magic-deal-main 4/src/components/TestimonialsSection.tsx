import { Card, CardContent } from "@/components/ui/card";
const testimonials = [{
  name: "Marie L.",
  username: "@marie_snap",
  content: "Commande reçue en 2 minutes ! Le processus d'achat est super simple et l'activation automatique. Je recommande ce site !",
  rating: 5
}, {
  name: "Thomas K.",
  username: "@thomas_k",
  content: "Site sérieux, paiement sécurisé et livraison instantanée. J'ai eu Snap+ en quelques clics, parfait !",
  rating: 5
}, {
  name: "Léa M.",
  username: "@lea_stories",
  content: "Meilleur prix du web pour Snap+ ! Service client réactif et activation immédiate après paiement.",
  rating: 5
}, {
  name: "Alex R.",
  username: "@alex_filters",
  content: "Transaction ultra rapide, interface claire et support disponible. J'ai recommandé ce site à tous mes amis !",
  rating: 5
}];
const TestimonialsSection = () => {
  return <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nos utilisateurs adorent{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Snapchat+
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Rejoignez plus de 5,000 utilisateurs satisfaits qui ont transformé leur expérience Snapchat+ Premium</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-card relative overflow-hidden">
              <CardContent className="p-6 relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <span key={i} className="text-primary text-lg group-hover:scale-110 transition-transform duration-300" style={{
                animationDelay: `${i * 100}ms`
              }}>⭐</span>)}
                </div>
                <p className="text-foreground mb-4 italic group-hover:text-foreground/90 transition-colors duration-300">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.username}</p>
                </div>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;