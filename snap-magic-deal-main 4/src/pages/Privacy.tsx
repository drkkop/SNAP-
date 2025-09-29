import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité et Protection des Données Personnelles</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 1 - Cadre Réglementaire et Responsable de Traitement</h2>
            <p className="leading-relaxed">
              La présente politique de confidentialité est établie en conformité avec les dispositions du Règlement Général sur la Protection des Données (RGPD) n° 2016/679 du 27 avril 2016, de la Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés modifiée, ainsi que de toute réglementation applicable en matière de protection des données personnelles. SnapMax Services SARL, société au capital de 50.000 euros, immatriculée sous le numéro 892 456 789 RCS Paris, sise 123 Avenue des Champs-Élysées, 75008 Paris, agit en qualité de responsable de traitement au sens de l'article 4.7 du RGPD pour l'ensemble des traitements de données personnelles mis en œuvre dans le cadre de la fourniture des services. Le Délégué à la Protection des Données peut être contacté à l'adresse électronique: dpo@snapmax-legal.eu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 2 - Finalités et Bases Légales des Traitements</h2>
            <p className="leading-relaxed">
              Les données personnelles collectées font l'objet de traitements ayant pour finalités principales : (i) la gestion des comptes utilisateurs et l'authentification, fondée sur l'exécution du contrat (art. 6.1.b RGPD), (ii) la fourniture et l'amélioration des services premium, basée sur l'exécution du contrat et l'intérêt légitime (art. 6.1.b et 6.1.f RGPD), (iii) la personnalisation de l'expérience utilisateur moyennant le consentement explicite (art. 6.1.a RGPD), (iv) la prévention de la fraude et la sécurisation des systèmes, justifiée par l'intérêt légitime (art. 6.1.f RGPD), (v) le respect des obligations légales et réglementaires (art. 6.1.c RGPD), (vi) les analyses statistiques et d'audience anonymisées, fondées sur l'intérêt légitime (art. 6.1.f RGPD). Chaque traitement fait l'objet d'une analyse d'impact sur la protection des données conforme à l'article 35 du RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 3 - Catégories de Données et Modalités de Collecte</h2>
            <p className="leading-relaxed">
              Les catégories de données personnelles traitées comprennent : (a) données d'identification : nom, prénoms, pseudonyme, adresse électronique, numéro de téléphone, date de naissance, (b) données de connexion et d'usage : adresses IP, identifiants de session, logs de connexion, données de géolocalisation approximative, (c) données techniques : type d'appareil, système d'exploitation, navigateur, résolution d'écran, plugins installés, (d) données comportementales : préférences utilisateur, historique d'utilisation, interactions avec l'interface, (e) données financières : informations de facturation (collectées et traitées par le prestataire de paiement certifié PCI-DSS), (f) cookies et traceurs : conformément à la réglementation applicable. La collecte s'effectue directement auprès de l'utilisateur lors de l'inscription et de l'utilisation des services, ainsi qu'indirectement via des technologies de suivi préalablement consenties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 4 - Destinataires et Transferts Internationaux</h2>
            <p className="leading-relaxed">
              Les données personnelles peuvent être communiquées aux catégories de destinataires suivants, dans la limite de leurs attributions respectives : (i) personnel autorisé de la Société soumis à des obligations de confidentialité renforcées, (ii) prestataires techniques sous-traitants liés par des accords de traitement conformes à l'article 28 du RGPD (hébergement, maintenance, support technique), (iii) prestataires de services de paiement certifiés et régulés, (iv) autorités judiciaires et administratives compétentes en cas de réquisition légale. Tout transfert de données personnelles vers des pays tiers à l'Union Européenne s'effectue exclusivement vers des pays reconnus comme adéquats par la Commission Européenne ou dans le cadre de garanties appropriées (clauses contractuelles types, règles d'entreprise contraignantes, certifications approuvées) conformément aux articles 44 et suivants du RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 5 - Droits des Personnes Concernées et Modalités d'Exercice</h2>
            <p className="leading-relaxed">
              Conformément aux dispositions des articles 15 à 22 du RGPD, toute personne concernée dispose des droits suivants : droit d'accès aux données la concernant et aux informations relatives au traitement, droit de rectification des données inexactes ou incomplètes, droit à l'effacement dans les conditions légalement prévues, droit à la limitation du traitement, droit à la portabilité des données, droit d'opposition pour motifs légitimes, droit de ne pas faire l'objet d'une décision automatisée. Ces droits s'exercent par demande écrite adressée au Délégué à la Protection des Données à l'adresse dpo@snapmax-legal.eu, accompagnée d'une copie d'un titre d'identité. La Société dispose d'un délai d'un mois pour répondre, prorogeable de deux mois en cas de complexité. Toute personne dispose également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 6 - Sécurité et Conservation des Données</h2>
            <p className="leading-relaxed">
              La Société met en œuvre des mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque, incluant notamment : chiffrement des données en transit et au repos (AES-256), contrôles d'accès stricts basés sur le principe du moindre privilège, surveillance continue des systèmes et détection des intrusions, sauvegardes régulières avec tests de restauration, formation et sensibilisation du personnel, audits de sécurité périodiques par des organismes indépendants. Les durées de conservation sont déterminées en fonction des finalités du traitement et des obligations légales : données de compte actif (durée de la relation contractuelle + 3 ans), logs de sécurité (1 an), données de facturation (10 ans), cookies (13 mois maximum). À l'expiration de ces délais, les données sont supprimées de manière sécurisée ou anonymisées à des fins statistiques.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Informations de Contact - Protection des Données</h3>
            <p className="text-sm opacity-75">
              Délégué à la Protection des Données: dpo@snapmax-legal.eu<br/>
              Service Juridique: legal@snapmax-services.org<br/>
              Version: RGPD-2024-SNAP-003 | Dernière mise à jour: 15/09/2024<br/>
              CNIL - Commission Nationale de l'Informatique et des Libertés: www.cnil.fr
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;