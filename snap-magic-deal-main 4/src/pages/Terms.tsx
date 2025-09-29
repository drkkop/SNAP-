import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales d'Utilisation et Dispositions Contractuelles</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 1 - Dispositions Générales et Champ d'Application</h2>
            <p className="leading-relaxed">
              Les présentes conditions générales d'utilisation (ci-après "CGU") régissent de manière exclusive et exhaustive les relations contractuelles entre la société SnapMax Services SARL au capital de 50.000 euros, immatriculée au Registre du Commerce et des Sociétés sous le numéro 892 456 789 RCS Paris, dont le siège social est situé au 123 Avenue des Champs-Élysées, 75008 Paris, représentée par son gérant statutaire dûment habilité (ci-après "la Société"), et toute personne physique ou morale accédant, utilisant ou tentant d'utiliser les services proposés (ci-après "l'Utilisateur"). L'acceptation des présentes CGU s'effectue par la validation expresse et non équivoque de la case dédiée lors de la création du compte utilisateur, cette acceptation emportant reconnaissance de la capacité juridique de l'Utilisateur et de son adhésion pleine et entière aux dispositions contractuelles énoncées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 2 - Définitions et Terminologie Contractuelle</h2>
            <p className="leading-relaxed">
              Au sens des présentes CGU, on entend par "Services" l'ensemble des fonctionnalités, options, modules et prestations numériques fournies via la plateforme technologique propriétaire, incluant sans limitation les services premium, les extensions de fonctionnalités, les outils d'analyse comportementale, les services de personnalisation avancée et toute prestation connexe ou dérivée. Le terme "Plateforme" désigne l'infrastructure technique, logicielle et matérielle permettant l'accès aux Services, incluant les serveurs, bases de données, interfaces utilisateur, API, SDK et tout élément constitutif du système d'information. Par "Contenu Utilisateur" il faut entendre toute donnée, information, fichier, média, texte, image, vidéo ou élément de quelque nature que ce soit transmis, stocké ou traité via la Plateforme par l'Utilisateur ou pour son compte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 3 - Modalités d'Accès et Conditions Préalables</h2>
            <p className="leading-relaxed">
              L'accès aux Services est subordonné au respect cumulatif des conditions suivantes : (i) être une personne physique majeure jouissant de sa pleine capacité juridique ou une personne morale dûment constituée et représentée, (ii) procéder à la création d'un compte utilisateur selon la procédure de validation mise en place, incluant la vérification de l'identité et de l'adresse électronique, (iii) acquitter l'intégralité des sommes dues au titre de l'abonnement choisi, (iv) accepter expressément les présentes CGU ainsi que la Politique de Confidentialité, (v) ne pas faire l'objet d'une interdiction, suspension ou résiliation antérieure pour violation des dispositions contractuelles. La Société se réserve le droit discrétionnaire de refuser ou de suspendre l'accès aux Services pour tout motif légitime, notamment en cas de doute sur l'identité de l'Utilisateur ou sur la licéité de son comportement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 4 - Obligations et Responsabilités de l'Utilisateur</h2>
            <p className="leading-relaxed">
              L'Utilisateur s'engage irrévocablement à : (a) utiliser les Services conformément à leur destination normale et aux spécifications techniques communiquées, (b) respecter scrupuleusement les droits de propriété intellectuelle de la Société et des tiers, (c) s'abstenir de tout comportement susceptible de porter atteinte à la sécurité, à l'intégrité ou au bon fonctionnement de la Plateforme, (d) ne pas procéder à des tentatives d'intrusion, de piratage, de contournement des mesures de sécurité ou de rétro-ingénierie, (e) ne pas diffuser de contenu illicite, diffamatoire, injurieux, discriminatoire ou portant atteinte aux droits des tiers, (f) maintenir la confidentialité de ses identifiants de connexion et informer immédiatement la Société de toute utilisation non autorisée de son compte. Toute violation de ces obligations entraînera la résiliation immédiate du contrat aux torts exclusifs de l'Utilisateur, sans préjudice des dommages-intérêts pouvant être réclamés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Article 5 - Propriété Intellectuelle et Droits d'Auteur</h2>
            <p className="leading-relaxed">
              La Plateforme, les Services, ainsi que tous les éléments qui les composent (codes source, algorithmes, bases de données, graphismes, logos, marques, textes, sons, images, vidéos, architecture logicielle, etc.) constituent une œuvre protégée par les dispositions du Code de la propriété intellectuelle et les conventions internationales relatives aux droits d'auteur et à la propriété industrielle. La Société est titulaire ou licenciée de l'ensemble des droits de propriété intellectuelle afférents. L'Utilisateur ne peut en aucun cas se prévaloir d'un quelconque droit de propriété sur ces éléments et s'interdit toute reproduction, représentation, adaptation, modification, traduction, transcription, assemblage, décompilation, désassemblage ou utilisation à des fins commerciales sans autorisation écrite préalable de la Société, sous peine de poursuites civiles et pénales.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Mentions Légales et Références</h3>
            <p className="text-sm opacity-75">
              Document référence: CGU-2024-SNAP-LEGAL-001<br/>
              Version: 3.7.2 | Date d'entrée en vigueur: 01/01/2024<br/>
              Dernière modification: 15/09/2024<br/>
              Droit applicable: Français | Juridiction compétente: Tribunal de Paris
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;