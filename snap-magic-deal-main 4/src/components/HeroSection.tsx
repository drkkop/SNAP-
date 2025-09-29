import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/snap-plus-hero.jpg";
const HeroSection = () => {
  const navigate = useNavigate();
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      <div className="absolute inset-0 bg-gradient-secondary/30" />
      
      <div className="container mx-auto px-6 relative z-10 my-[50px]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground animate-fade-in">
              Débloquez 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Snapchat+</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in [animation-delay:200ms]">Accédez aux fonctionnalités exclusives de Snapchat+ : Stories personnalisées, mode Ghost et bien plus encore !</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in [animation-delay:400ms]">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-glow transition-all duration-500 transform hover:scale-105 shadow-elegant text-lg px-8 py-6 font-semibold relative overflow-hidden group rounded-full" onClick={() => navigate("/purchase")}>
                <span className="relative z-10">Obtenir Snapchat+</span>
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary hover:shadow-card transition-all duration-500 text-lg px-8 py-6 font-medium backdrop-blur-sm rounded-full" onClick={() => navigate("/about")}>
                Découvrir les fonctionnalités
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm animate-fade-in [animation-delay:600ms] rounded-none bg-transparent">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-card">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:200ms]"></div>
                <span className="font-medium text-card-foreground">Prix mini</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-card">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:400ms]"></div>
                <span className="font-medium text-card-foreground">Accès instantané</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg animate-fade-in [animation-delay:800ms]">
            <div className="relative group">
              <img src={heroImage} alt="Fonctionnalités Premium Snapchat+" className="w-full h-auto rounded-3xl shadow-elegant group-hover:shadow-hover transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-3xl group-hover:bg-gradient-primary/20 transition-all duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-primary/20 rounded-3xl blur-xl group-hover:bg-gradient-primary/30 transition-all duration-500 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;