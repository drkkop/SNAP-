const Footer = () => {
  return <footer className="bg-gradient-secondary border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">SnapMax</h3>
            <p className="text-muted-foreground">
              L'expérience Snapchat premium de confiance. Sécurité garantie, satisfaction assurée.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              
              
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/report-issue" className="hover:text-primary transition-colors">Signaler un problème</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/terms" className="hover:text-primary transition-colors">Conditions d'utilisation</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-colors">Politique de confidentialité</a></li>
              <li><a href="/refunds" className="hover:text-primary transition-colors">Remboursements</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 Snapchat+. Tous droits réservés. </p>
        </div>
      </div>
    </footer>;
};
export default Footer;