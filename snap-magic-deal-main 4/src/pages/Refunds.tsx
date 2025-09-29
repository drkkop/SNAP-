import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Refunds = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Politique de Remboursement et Procédures de Rétractation</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 1 - Cadre Légal et Dispositions Applicables</h2>
            <p className="leading-relaxed">
              La présente politique de remboursement est établie en stricte conformité avec les dispositions du Code de la consommation, notamment les articles L. 221-1 et suivants relatifs au droit de rétractation, les articles L. 224-25 et suivants concernant les contrats de fourniture de contenu numérique, ainsi que la Directive 2011/83/UE relative aux droits des consommateurs transposée en droit français. Les modalités de remboursement varient selon la nature juridique de l'acquéreur (consommateur au sens de l'article liminaire du Code de la consommation versus professionnel), le type de prestation fournie (services numériques instantanés versus prestations différées), et les circonstances particulières de la demande. Toute demande de remboursement doit être formalisée selon les procédures strictement définies ci-après, sous peine d'irrecevabilité automatique de la demande.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 2 - Droit de Rétractation et Exceptions Légales</h2>
            <p className="leading-relaxed">
              Conformément à l'article L. 221-18 du Code de la consommation, le consommateur dispose d'un délai de quatorze (14) jours francs pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités, ce délai courant à compter de la conclusion du contrat pour les prestations de services. Toutefois, ce droit est expressément exclu dans les cas prévus par l'article L. 221-28, notamment pour la fourniture de contenu numérique non fourni sur un support matériel dont l'exécution a commencé avec l'accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation. L'exercice du droit de rétractation s'effectue par l'envoi du formulaire de rétractation disponible en annexe ou de toute autre déclaration dénuée d'ambiguïté exprimant la volonté de se rétracter, adressée par lettre recommandée avec accusé de réception.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 3 - Conditions et Modalités de Remboursement</h2>
            <p className="leading-relaxed">
              Les remboursements sont effectués selon les modalités suivantes : (i) remboursement intégral dans les cas de rétractation légale exercée dans les délais, sous déduction des frais de traitement bancaire non récupérables, (ii) remboursement au prorata temporis pour les abonnements annuels résiliés après utilisation partielle des services, calculé sur la base du nombre de jours d'utilisation effective, (iii) remboursement exceptionnel en cas de défaillance technique majeure imputable à la Société, sous réserve de la démonstration du préjudice subi et de l'absence de solution alternative proposée. Les remboursements s'effectuent par virement bancaire sur le compte ayant servi au paiement initial, dans un délai maximum de quatorze (14) jours ouvrés suivant la validation de la demande, étant précisé que ce délai peut être prolongé en cas de vérifications complémentaires nécessaires ou de circonstances exceptionnelles indépendantes de la volonté de la Société.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 4 - Exclusions et Limitations du Droit au Remboursement</h2>
            <p className="leading-relaxed">
              Sont expressément exclus du droit au remboursement : (a) les prestations entièrement exécutées avant la fin du délai de rétractation avec accord préalable exprès du consommateur, (b) les services personnalisés ou configurés selon les spécifications particulières de l'utilisateur, (c) les prestations dont le prix dépend de fluctuations du marché financier que la Société ne peut contrôler, (d) les biens ou services dont la valeur dépend de fluctuations du marché que le professionnel ne peut contrôler et qui sont susceptibles de se produire pendant le délai de rétractation, (e) les cas de résiliation pour faute grave de l'utilisateur, notamment violation des conditions générales d'utilisation, comportement frauduleux ou usage abusif des services. En outre, aucun remboursement ne pourra être accordé pour les préjudices indirects, pertes de données, manques à gagner ou autres dommages consécutifs à l'utilisation ou à l'impossibilité d'utiliser les services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 5 - Procédure de Demande et Pièces Justificatives</h2>
            <p className="leading-relaxed">
              Toute demande de remboursement doit être adressée par courrier électronique à l'adresse remboursements@snapmax-legal.eu, en utilisant impérativement le formulaire standardisé disponible en téléchargement sur l'espace client, accompagné des pièces justificatives suivantes : (i) copie de la facture ou du reçu de paiement, (ii) justificatif d'identité de l'acquéreur, (iii) relevé d'identité bancaire du compte à créditer, (iv) description circonstanciée des motifs de la demande avec références aux dispositions contractuelles ou légales invoquées, (v) tout élément de preuve pertinent (captures d'écran, correspondances, logs techniques). La Société dispose d'un délai de trente (30) jours ouvrés pour instruire la demande et notifier sa décision motivée. En cas de refus, le demandeur peut saisir le médiateur de la consommation compétent ou les juridictions civiles dans les conditions de droit commun.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 6 - Médiation et Résolution des Litiges</h2>
            <p className="leading-relaxed">
              En cas de litige relatif à l'exécution de la présente politique de remboursement, le consommateur peut recourir gratuitement au service de médiation de l'Association des Médiateurs Européens (AME), sise 12 Rue de la Paix, 75002 Paris, accessible par voie électronique à l'adresse mediation@ame-europe.org ou par voie postale. La saisine du médiateur doit intervenir dans un délai d'un an à compter de la réclamation écrite adressée préalablement à la Société. Cette procédure de médiation constitue un préalable obligatoire à toute action judiciaire, conformément aux dispositions de l'article L. 612-1 du Code de la consommation. Les parties s'engagent à coopérer de bonne foi à la résolution amiable du différend et à fournir au médiateur tous les éléments nécessaires à sa mission.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Références Légales et Contacts</h3>
            <p className="text-sm opacity-75">
              Service Remboursements: remboursements@snapmax-legal.eu<br/>
              Médiation: AME - mediation@ame-europe.org<br/>
              Code de la consommation: Articles L.221-1 à L.221-28 et L.224-25 et s.<br/>
              Délais: Rétractation 14j | Instruction 30j | Remboursement 14j ouvrés
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Refunds;