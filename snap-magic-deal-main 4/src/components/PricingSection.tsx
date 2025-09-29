import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Clock, Zap, Eye, RotateCcw, Smartphone, MapPin, Star } from "lucide-react";

const PricingSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Snapchat+ à Prix{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Exclusif
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un prix unique pour débloquer toutes les fonctionnalités premium de Snapchat+
          </p>
        </div>
        
        <div className="max-w-sm mx-auto">
          <Card className="bg-gradient-primary border-none shadow-glow relative overflow-hidden rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 animate-fade-in">
            {/* Floating elements decoration */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/5 rounded-full" />
            <div className="absolute top-20 left-4 w-4 h-4 bg-white/10 rounded-full" />
            {/* Header */}
            <CardHeader className="text-center p-0 mb-8 relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/15 rounded-full mb-4 backdrop-blur-sm">
                <Star className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-4xl font-black text-primary-foreground mb-2 hover-scale">
                Snapchat+
              </CardTitle>
              <p className="text-lg text-primary-foreground/90 font-medium">
                Toutes les fonctionnalités
              </p>
            </CardHeader>
            
            {/* Price */}
            <div className="text-center mb-10 relative z-10">
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-7xl font-black text-primary-foreground hover:scale-110 transition-transform duration-300 cursor-default">2€</span>
                <span className="text-xl text-primary-foreground/90 ml-2 font-semibold">seulement</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-white" />
                <p className="text-base text-primary-foreground/90 font-medium">
                  Accès un an • Aucun abonnement
                </p>
              </div>
            </div>
            
            {/* Features */}
            <CardContent className="p-0 mb-8 relative z-10">
              <div className="space-y-4">
                {[
                  { text: "Bitmoji 3D personnalisé", icon: Zap, color: "text-blue-300" },
                  { text: "Mode Ghost invisible", icon: Eye, color: "text-purple-300" }, 
                  { text: "Replay illimité de Snaps", icon: RotateCcw, color: "text-green-300" },
                  { text: "Icônes d'app exclusives", icon: Smartphone, color: "text-pink-300" },
                  { text: "Snap Map personnalisée", icon: MapPin, color: "text-orange-300" },
                  { text: "Stories premium exclusives", icon: Star, color: "text-yellow-300" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 text-primary-foreground hover:translate-x-2 transition-all duration-300 group" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                      <feature.icon className={`w-4 h-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-lg py-6 font-bold rounded-2xl border-2 border-transparent hover:border-white/20 relative z-10 group" 
              onClick={() => navigate("/purchase")}
            >
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Débloquer Snapchat+
            </Button>
            
            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6 text-primary-foreground/80 relative z-10">
              <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-default">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-3 h-3 text-green-300" />
                </div>
                <span className="text-sm font-medium">Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-default">
                <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-300" />
                </div>
                <span className="text-sm font-medium">Garantie 30 jours</span>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;