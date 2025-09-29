import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Comment fonctionne Snapchat+ ?",
      answer: "Snapchat+ est un abonnement premium qui débloque des fonctionnalités exclusives comme les Stories personnalisées, le mode Ghost, et bien plus encore. L'activation est instantanée après paiement."
    },
    {
      question: "Est-ce vraiment sécurisé ?",
      answer: "Oui, 100% sécurisé ! Nous utilisons un cryptage SSL de niveau bancaire et tous les paiements sont traités par des processeurs de paiement certifiés. Garantie 30 jours satisfait ou remboursé."
    },
    {
      question: "Combien de temps dure l'abonnement ?",
      answer: "Notre offre vous donne accès à Snapchat+ Premium pendant 1 an complet. Pas de renouvellement automatique, pas de frais cachés."
    },
    {
      question: "Puis-je annuler à tout moment ?",
      answer: "Vous disposez de 30 jours pour changer d'avis et demander un remboursement complet, sans justification. Notre support client est disponible 24/7."
    },
    {
      question: "Pourquoi un prix si bas ?",
      answer: "Grâce à un partenariat temporaire, l'abonnement annuel est subventionné et proposé à seulement 2 €."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Snapchat+ Premium
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-2xl px-6 shadow-card hover:shadow-hover transition-all duration-300">
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;