import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, User, Shield, Zap, CheckCircle, Star, Crown, Eye, MessageCircle, Heart, Loader2, Gift, Search, Sparkles, Medal, Gem } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SecurityBadges from "@/components/SecurityBadges";
// Force refresh to clear Lightning import cache

const Purchase = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const navigate = useNavigate();
  const handleStepOne = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    setCurrentStep(2);
  };
  const handleLoadingComplete = async () => {
    setIsLoading(true);
    setLoadingProgress(0);
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 100 / 35;
      });
    }, 100);
    await new Promise(resolve => setTimeout(resolve, 3500));
    setIsLoading(false);
    setLoadingProgress(0);
    setCurrentStep(3);
  };
  const handleFinalPurchase = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setCurrentStep(4);
  };
  useEffect(() => {
    if (currentStep === 2) {
      handleLoadingComplete();
    }
  }, [currentStep]);
  const StepIndicator = () => <div className="flex items-center justify-center mb-6 md:mb-12 px-4">
      {[1, 2, 3, 4].map(step => <div key={step} className="flex items-center">
          <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-500 ${currentStep >= step ? 'bg-gradient-primary text-white shadow-[0_0_15px_hsl(var(--primary)/0.4)] transform scale-105 md:scale-110' : 'bg-muted text-muted-foreground'}`}>
            {currentStep > step ? <CheckCircle className="w-4 h-4 md:w-6 md:h-6" /> : step}
          </div>
          {step < 4 && <div className={`w-8 md:w-16 h-0.5 md:h-1 mx-2 md:mx-4 rounded-full transition-all duration-500 ${currentStep > step ? 'bg-gradient-primary shadow-glow' : 'bg-muted'}`} />}
        </div>)}
    </div>;
  const stepTitles = ["Votre nom d'utilisateur", "Recherche en cours...", "Compte trouvé !", "Commande confirmée !"];
  const renderStepOne = () => <div className="w-full max-w-sm md:max-w-lg mx-auto px-4 md:px-0">
      <Card className="bg-card/95 backdrop-blur-xl border-0 shadow-[0_15px_35px_-5px_hsl(var(--primary)/0.2)] md:shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.3)] animate-fade-in overflow-hidden">
        <div className="bg-gradient-primary p-6 md:p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 backdrop-blur-sm border border-white/30">
              <User className="w-8 h-8 md:w-12 md:h-12 text-white" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">Snapchat+</CardTitle>
            <CardDescription className="text-white/90 text-base md:text-lg">
              Entrez votre nom d'utilisateur pour commencer
            </CardDescription>
          </div>
        </div>

        <CardContent className="p-6 md:p-10 space-y-6 md:space-y-8">
          <form onSubmit={handleStepOne} className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <Label htmlFor="username" className="text-foreground font-semibold text-base md:text-lg">
                Nom d'utilisateur Snapchat
              </Label>
              <div className="relative">
                <Input id="username" type="text" placeholder="@username" value={username} onChange={e => setUsername(e.target.value)} className="h-12 md:h-16 text-lg md:text-xl pl-12 md:pl-14 bg-background/50 border-2 border-border/50 focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] transition-all duration-300 rounded-xl md:rounded-2xl" required />
                <User className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                Vos informations sont protégées par cryptage SSL
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-foreground text-lg">Activation instantanée</p>
                  <p className="text-muted-foreground">Snapchat+ activé en moins de 2 minutes</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-green-500/5 to-emerald-500/10 border border-green-500/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Medal className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-foreground text-lg">Garantie satisfait</p>
                  <p className="text-muted-foreground">Remboursé sous 30 jours</p>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full h-12 md:h-16 bg-gradient-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] md:hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 transform hover:scale-[1.02] text-lg md:text-xl font-bold rounded-xl md:rounded-2xl" disabled={!username.trim()}>
              <Search className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
              Rechercher mon compte
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            En continuant, vous acceptez nos conditions d'utilisation
          </p>
        </CardContent>
      </Card>
    </div>;
  const renderStepTwo = () => <div className="w-full max-w-sm md:max-w-lg mx-auto px-4 md:px-0">
      <Card className="bg-card/95 backdrop-blur-xl border-0 shadow-[0_15px_35px_-5px_hsl(var(--primary)/0.2)] md:shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.3)] animate-fade-in overflow-hidden">
        <div className="bg-gradient-primary p-6 md:p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 backdrop-blur-sm border border-white/30">
              <div className="relative">
                <Search className="w-10 h-10 md:w-14 md:h-14 text-white animate-pulse" />
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white/80 absolute -top-2 -right-2 md:-top-3 md:-right-3 animate-bounce" />
              </div>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">Recherche en cours</CardTitle>
            <CardDescription className="text-white/90 text-lg md:text-xl">
              Vérification de @{username}
            </CardDescription>
          </div>
        </div>

        <CardContent className="p-10 space-y-10">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                {[0, 150, 300].map((delay, index) => <div key={index} className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{
                animationDelay: `${delay}ms`
              }} />)}
              </div>
              
              <p className="text-xl font-semibold text-foreground">
                {loadingProgress < 30 ? "Connexion sécurisée..." : loadingProgress < 60 ? "Vérification du profil..." : loadingProgress < 90 ? "Validation des données..." : "Finalisation..."}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-full bg-muted rounded-full h-6 overflow-hidden shadow-inner">
                <div className="bg-gradient-primary h-6 rounded-full transition-all duration-100 ease-out shadow-lg relative overflow-hidden" style={{
                width: `${loadingProgress}%`
              }}>
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
              <p className="text-lg font-bold text-primary">{Math.round(loadingProgress)}%</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-5 p-5 rounded-2xl bg-green-500/5 border border-green-500/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground text-lg">Connexion SSL sécurisée</p>
                <p className="text-muted-foreground">Vos données sont chiffrées</p>
              </div>
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            
            <div className="flex items-center gap-5 p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground text-lg">Vérification automatique</p>
                <p className="text-muted-foreground">Processus optimisé</p>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-blue-600 border-t-transparent animate-spin"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
  const renderStepThree = () => <div className="w-full max-w-sm md:max-w-lg mx-auto px-4 md:px-0">
      <Card className="bg-card/95 backdrop-blur-xl border-0 shadow-[0_15px_35px_-5px_hsl(var(--primary)/0.2)] md:shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.3)] animate-fade-in overflow-hidden">
        <div className="bg-gradient-primary p-6 md:p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 backdrop-blur-sm border border-white/30">
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Compte trouvé !</CardTitle>
            <CardDescription className="text-white/90 text-lg md:text-xl">
              @{username} • Prêt pour l'activation
            </CardDescription>
          </div>
        </div>

        <CardContent className="p-6 md:p-10 space-y-6 md:space-y-8">
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-12 translate-x-12 md:-translate-y-16 md:translate-x-16"></div>
            <div className="relative">
              <h3 className="font-bold text-primary mb-4 md:mb-6 flex items-center gap-2 md:gap-3 text-xl md:text-2xl">
                <Crown className="w-6 h-6 md:w-8 md:h-8" />
                Snapchat+
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {[{
                icon: Star,
                text: "Snap Map exclusif",
                color: "yellow"
              }, {
                icon: Eye,
                text: "Voir qui revisite votre story",
                color: "blue"
              }, {
                icon: MessageCircle,
                text: "Épingler votre meilleur ami",
                color: "green"
              }, {
                icon: Gem,
                text: "Badge premium visible",
                color: "purple"
              }].map((feature, index) => <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 border border-primary/20 hover:shadow-lg transition-all duration-300">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${feature.color === 'yellow' ? 'bg-yellow-500/20' : feature.color === 'blue' ? 'bg-blue-500/20' : feature.color === 'green' ? 'bg-green-500/20' : 'bg-purple-500/20'}`}>
                      <feature.icon className={`w-5 h-5 stroke-2 ${feature.color === 'yellow' ? 'text-yellow-600' : feature.color === 'blue' ? 'text-blue-600' : feature.color === 'green' ? 'text-green-600' : 'text-purple-600'}`} />
                    </div>
                    <span className="font-semibold text-foreground text-lg">{feature.text}</span>
                  </div>)}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border-2 border-green-500/30 rounded-2xl md:rounded-3xl p-4 md:p-8 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/20 rounded-full"></div>
            <div className="relative text-center md:text-left">
              <p className="text-base md:text-lg font-bold text-green-600 mb-3 md:mb-2">🎉 Prix spécial limité</p>
              <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4 mb-3 md:mb-2">
                <span className="text-4xl md:text-5xl font-black text-green-600">2,00€</span>
                <span className="text-xl md:text-2xl text-muted-foreground line-through">47,88€</span>
              </div>
              <p className="text-green-600 font-semibold text-sm md:text-base">Économisez 95% aujourd'hui seulement !</p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-3xl p-8 border border-border/50">
            
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold bg-gradient-primary bg-clip-text text-transparent text-xl">Snapchat+</p>
                <p className="text-muted-foreground text-lg">pour @{username}</p>
              </div>
              
            </div>
          </div>

          <Button onClick={() => window.location.href = 'https://t.trklinkx.com/sl?id=689de8882e092fb7bd1d8eb0&pid=4764'} size="lg" className="w-full h-20 bg-gradient-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 transform hover:scale-[1.02] text-2xl font-black rounded-3xl" disabled={isLoading}>
            {isLoading ? <div className="flex items-center gap-4">
                <Loader2 className="w-8 h-8 animate-spin" />
                <span>Traitement...</span>
              </div> : <div className="flex items-center gap-4">
                <span>Payer 2,00€</span>
                <div className="text-3xl">💳</div>
              </div>}
          </Button>

          <SecurityBadges />
        </CardContent>
      </Card>
    </div>;
  const renderStepFour = () => <div className="w-full max-w-lg mx-auto">
      <Card className="bg-card/95 backdrop-blur-xl border-0 shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.3)] animate-fade-in overflow-hidden">
        <div className="bg-gradient-primary p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative">
            <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/30">
              <Gift className="w-14 h-14 text-white" />
            </div>
            <CardTitle className="text-4xl font-bold text-white mb-4">Félicitations !</CardTitle>
            <CardDescription className="text-white/90 text-xl">
              Snapchat+ Premium est maintenant activé sur @{username}
            </CardDescription>
          </div>
        </div>

        <CardContent className="p-10 space-y-8 text-center">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl p-8 border border-green-500/30">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h3 className="font-bold text-green-600 mb-4 text-2xl">Activation réussie !</h3>
            <p className="text-muted-foreground text-lg">
              Toutes les fonctionnalités Snapchat+ Premium sont maintenant disponibles dans votre app.
            </p>
          </div>

          <div className="space-y-4">
            {[{
            label: "Statut",
            value: "Activé",
            color: "green"
          }, {
            label: "Compte",
            value: `@${username}`,
            color: "primary"
          }, {
            label: "Montant payé",
            value: "2,00€",
            color: "primary"
          }].map((item, index) => <div key={index} className="flex items-center justify-between p-5 bg-gradient-accent rounded-2xl border border-border/30">
                <span className="font-semibold text-lg">{item.label}</span>
                <span className={`font-bold text-lg ${item.color === 'green' ? 'text-green-600' : 'text-primary'} flex items-center gap-2`}>
                  {item.color === 'green' && <CheckCircle className="w-5 h-5" />}
                  {item.value}
                </span>
              </div>)}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
            <h4 className="font-bold text-primary mb-4 text-xl">📱 Prochaines étapes :</h4>
            <ol className="text-left space-y-3 text-muted-foreground text-lg">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">1</span>
                Ouvrez votre app Snapchat
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">2</span>
                Les nouvelles fonctionnalités apparaîtront automatiquement
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">3</span>
                Profitez de votre expérience premium !
              </li>
            </ol>
          </div>

          <Button onClick={() => navigate("/")} size="lg" className="w-full h-16 bg-gradient-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 transform hover:scale-[1.02] text-xl font-bold rounded-2xl">
            <span>Retour à l'accueil</span>
            <span className="text-2xl ml-3">🏠</span>
          </Button>

          <div className="text-center">
            <p className="text-muted-foreground">
              Besoin d'aide ? Contactez notre support 24/7
            </p>
          </div>
        </CardContent>
      </Card>
    </div>;
  return <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl relative z-10">
        <Button onClick={() => navigate("/")} variant="ghost" className="mb-6 md:mb-8 hover:bg-primary/10 transition-all duration-300 text-base md:text-lg font-semibold px-4 py-2">
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Retour
        </Button>

        <div className="text-center mb-8 md:mb-12 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 md:mb-4">
            {stepTitles[currentStep - 1]}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground px-4">
            {currentStep === 1 && "Commencez votre expérience premium"}
            {currentStep === 2 && "Nous vérifions votre compte Snapchat"}
            {currentStep === 3 && "Votre compte est prêt pour l'activation"}
            {currentStep === 4 && "Votre abonnement premium est actif"}
          </p>
        </div>

        <StepIndicator />

        <div className="flex justify-center">
          {currentStep === 1 && renderStepOne()}
          {currentStep === 2 && renderStepTwo()}
          {currentStep === 3 && renderStepThree()}
          {currentStep === 4 && renderStepFour()}
        </div>
      </div>
    </div>;
};
export default Purchase;