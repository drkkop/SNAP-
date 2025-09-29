import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const features = [{
  title: "Épingle ton meilleur ami",
  description: "Épingle ton #1 BFF pour rester en contact plus facilement et accéder rapidement à tes conversations.",
  icon: "📌"
}, {
  title: "Story Rewatch Indicator",
  description: "Vois qui a regardé tes Stories plusieurs fois et découvre qui s'intéresse vraiment à ton contenu.",
  icon: "👀"
}, {
  title: "Bitmoji Pets & Cars",
  description: "Donne un animal de compagnie ou une voiture à ton Bitmoji sur la Snap Map pour te démarquer.",
  icon: "🐕"
}, {
  title: "Post View Emoji",
  description: "Vois l'emoji que tes amis utilisent quand ils voient tes Stories pour comprendre leurs réactions.",
  icon: "😊"
}, {
  title: "Priority Story Replies",
  description: "Tes réponses aux Stories publiques sont mises en avant et ont plus de chances d'être vues par les créateurs.",
  icon: "⚡"
}, {
  title: "Friend Solar System",
  description: "Découvre ta position dans le système solaire de tes meilleurs amis et vois à quel point vous êtes proches.",
  icon: "🪐"
}];
const FeaturesSection = () => {
  return <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Fonctionnalités{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Snapchat+</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez toutes les fonctionnalités exclusives de Snapchat+ qui transformeront votre expérience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Card key={index} className="group bg-card border-border hover:border-primary/30 transition-all duration-500 transform hover:scale-105 hover:shadow-elegant relative overflow-hidden rounded-3xl">
              <CardHeader className="text-center relative z-10 pb-4">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <CardDescription className="text-center text-muted-foreground group-hover:text-card-foreground/80 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
              <div className="absolute -inset-1 bg-gradient-primary/10 opacity-0 group-hover:opacity-100 rounded-3xl blur-lg transition-opacity duration-500 -z-10"></div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;