import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReportIssue = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Procédure de Signalement d'Incidents et Dysfonctionnements</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cadre Juridique et Définitions Préliminaires</h2>
            <p className="leading-relaxed">
              Le présent document établit les modalités strictes de signalement des incidents, dysfonctionnements, anomalies techniques ou comportements non conformes aux spécifications contractuelles, conformément aux articles L. 224-25 et suivants du Code de la consommation et aux dispositions du Règlement Général sur la Protection des Données (RGPD) n° 2016/679. Tout signalement effectué en dehors du cadre procédural défini ci-après sera considéré comme non avenu et ne pourra donner lieu à aucun traitement ni suivi, sans préjudice des obligations légales de la société.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Classification des Incidents et Priorités de Traitement</h2>
            <p className="leading-relaxed">
              Les incidents sont classifiés selon une grille de criticité à quatre niveaux : Critique (C1) pour les dysfonctionnements bloquants affectant l'intégrité des données utilisateur, Majeur (C2) pour les anomalies impactant significativement l'expérience utilisateur, Mineur (C3) pour les dysfonctionnements n'affectant pas les fonctionnalités essentielles, et Informatif (C4) pour les améliorations suggérées. Cette classification détermine l'ordre de priorité de traitement et les délais d'intervention applicables, étant précisé que seuls les incidents de niveau C1 et C2 font l'objet d'un engagement de délai contractuel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Éléments Techniques Obligatoires et Documentation</h2>
            <p className="leading-relaxed">
              Tout signalement doit impérativement comporter les éléments techniques suivants sous peine d'irrecevabilité : identifiant de session utilisateur, timestamp précis de l'incident (format ISO 8601), description détaillée du comportement observé versus comportement attendu, reproduction step-by-step de l'anomalie, captures d'écran horodatées, logs système pertinents, configuration matérielle et logicielle de l'environnement utilisateur, ainsi que toute information complémentaire susceptible de faciliter le diagnostic technique. L'absence de l'un de ces éléments entraînera automatiquement le rejet du signalement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Obligations de l'Utilisateur et Responsabilités Associées</h2>
            <p className="leading-relaxed">
              L'utilisateur s'engage à fournir des informations exactes, complètes et de bonne foi, et à coopérer activement aux investigations techniques nécessaires à la résolution de l'incident signalé. Il s'interdit formellement de procéder à des signalements abusifs, répétitifs ou malveillants, sous peine de suspension immédiate de son accès aux services et de poursuites judiciaires le cas échéant. L'utilisateur reconnaît que la résolution d'un incident peut nécessiter des interventions de maintenance susceptibles d'interrompre temporairement l'accès aux services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Traçabilité et Conservation des Données</h2>
            <p className="leading-relaxed">
              Conformément aux obligations légales de traçabilité et aux exigences de sécurité informatique, tous les signalements font l'objet d'un archivage sécurisé pour une durée minimale de trois ans, sauf disposition légale contraire. Ces données peuvent être communiquées aux autorités compétentes en cas de réquisition judiciaire ou dans le cadre d'investigations de sécurité. L'utilisateur dispose d'un droit d'accès, de rectification et de suppression de ses données personnelles, sous réserve des obligations légales de conservation.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Formulaire de Signalement Technique</h3>
            <p className="text-sm opacity-75">
              Les signalements doivent être transmis exclusivement via le formulaire sécurisé accessible à l'adresse : incidents.technique@snapmax-legal-services.org<br/>
              Reference: Art. L.224-25 Code de la consommation | RGPD Art. 12-15<br/>
              Délais de traitement: C1: 4h | C2: 24h | C3: 72h | C4: Best effort
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportIssue;