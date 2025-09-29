import { Shield, Lock, CheckCircle, Award } from "lucide-react";

const SecurityBadges = () => {
  const badges = [
    {
      icon: Shield,
      text: "SSL Crypté",
      color: "text-green-500"
    },
    {
      icon: Lock,
      text: "Paiement Sécurisé",
      color: "text-blue-500"
    },
    {
      icon: CheckCircle,
      text: "Vérifié",
      color: "text-primary"
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-4">
      {badges.map((badge, index) => (
        <div 
          key={index}
          className="flex items-center gap-2 bg-card/60 backdrop-blur-sm px-3 py-2 rounded-full border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <badge.icon className={`w-4 h-4 ${badge.color}`} />
          <span className="text-sm font-medium text-card-foreground">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default SecurityBadges;