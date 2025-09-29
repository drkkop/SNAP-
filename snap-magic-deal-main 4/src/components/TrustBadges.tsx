import { Shield, Lock, Clock, Headphones, Star, Trophy } from "lucide-react";
const TrustBadges = () => {
  const badges = [{
    icon: Shield,
    title: "Paiement 100% sécurisé",
    description: "Protection SSL & cryptage avancé"
  }, {
    icon: Clock,
    title: "Activation instantanée",
    description: "Profitez de Snapchat+ immédiatement"
  }, {
    icon: Headphones,
    title: "Support 24/7",
    description: "Assistance dédiée à tout moment"
  }, {
    icon: Star,
    title: "5,000+ clients satisfaits",
    description: "Note moyenne de 4.9/5 étoiles"
  }, {
    icon: Lock,
    title: "Garantie remboursement",
    description: "30 jours pour changer d'avis"
  }, {
    icon: Trophy,
    title: "Service premium",
    description: "Qualité & fiabilité garanties"
  }];
  return <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Pourquoi choisir SnapMax ?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous nous engageons à vous offrir la meilleure expérience possible avec nos garanties de qualité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => <div key={index} className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {badge.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TrustBadges;