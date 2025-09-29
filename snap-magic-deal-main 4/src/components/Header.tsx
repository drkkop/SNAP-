import { Shield, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import snapchatLogo from "@/assets/snapchat-logo-transparent.png";
const Header = () => {
  const navigate = useNavigate();
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <img src={snapchatLogo} alt="SnapMax Logo" className="w-12 h-12" />
          </div>
          <span className="text-xl font-bold text-foreground ml-1 hidden md:inline">SnapMax</span>
        </div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <div className="flex items-center space-x-4 lg:space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span className="hidden lg:inline">50,000+ utilisateurs</span>
              <span className="lg:hidden">50k+</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-primary" />
              <span>4.9/5</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-primary" />
              <span className="hidden lg:inline">100% sécurisé</span>
              <span className="lg:hidden">Sécurisé</span>
            </div>
          </div>
        </nav>

        <Button onClick={() => navigate("/purchase")} className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-sm lg:text-base px-4 lg:px-6">
          Obtenir Snapchat+
        </Button>
      </div>
    </header>;
};
export default Header;