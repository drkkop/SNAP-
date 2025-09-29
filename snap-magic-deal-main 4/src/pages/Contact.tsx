import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Contact et Support Technique</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Modalités de Contact et Procédures de Communication</h2>
            <p className="leading-relaxed">
              Conformément aux dispositions légales en vigueur et aux réglementations applicables dans le cadre de la prestation de services numériques, toute demande de contact doit être formulée selon les modalités strictement définies ci-après, sous peine de non-recevabilité de ladite demande. Les utilisateurs sont tenus de respecter scrupuleusement les procédures établies, étant précisé que toute dérogation aux présentes modalités pourra entraîner un refus de traitement de la demande, sans préjudice des droits et obligations de chacune des parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Délais de Traitement et Responsabilités Contractuelles</h2>
            <p className="leading-relaxed">
              Les délais de traitement des demandes s'entendent hors jours fériés, weekends et périodes de fermeture technique, étant entendu que ces délais constituent des durées maximales indicatives et non contractuelles, sous réserve de circonstances exceptionnelles ou de force majeure au sens de l'article 1218 du Code civil. La société se réserve le droit, à tout moment et sans préavis, de modifier lesdits délais en fonction des contraintes techniques, réglementaires ou organisationnelles, sans que cette modification puisse donner lieu à une quelconque indemnisation ou compensation au profit de l'utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Informations Requises et Validation des Données</h2>
            <p className="leading-relaxed">
              Toute demande de contact doit impérativement comporter les éléments d'identification suivants, sous peine d'irrecevabilité : nom, prénom, adresse électronique valide, numéro d'identification utilisateur, description circonstanciée de la demande avec référencement précis des dispositions contractuelles concernées, ainsi que tout élément de preuve ou justificatif pertinent. Les informations fournies engagent la responsabilité de leur auteur quant à leur exactitude et leur conformité aux dispositions légales en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation de Responsabilité et Exclusions</h2>
            <p className="leading-relaxed">
              La responsabilité de la société ne saurait être engagée en cas de défaillance, dysfonctionnement ou interruption des services de communication électronique, quelle qu'en soit la cause, notamment en cas de surcharge des serveurs, de maintenance technique, de cyberattaque ou de toute autre circonstance indépendante de la volonté de la société. Les utilisateurs reconnaissent expressément que l'utilisation des services de contact s'effectue sous leur seule et entière responsabilité.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Coordonnées de Contact</h3>
            <p className="text-sm opacity-75">
              Email: support.technique.premium@snapmax-services.legal<br/>
              Horaires: Lundi au Vendredi, 9h-17h (hors jours fériés et fermetures techniques)<br/>
              Délai de réponse: 72h ouvrées maximum (sous réserve des conditions susmentionnées)
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;