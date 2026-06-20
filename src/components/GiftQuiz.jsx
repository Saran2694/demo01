import React, { useState } from 'react';

const QUIZ_QUESTIONS = [
  {
    question: "Who is this luxury hamper for?",
    options: [
      { text: "My Significant Other", score: { couple: 3, selfcare: 1 } },
      { text: "A Dear Friend", score: { friendship: 3, birthday: 1 } },
      { text: "A Valued Colleague or Client", score: { corporate: 3 } },
      { text: "Myself (Self-love is key!)", score: { selfcare: 3 } }
    ]
  },
  {
    question: "What is the primary theme or vibe you want to express?",
    options: [
      { text: "Relaxation, Mindfulness & Rest", score: { selfcare: 3 } },
      { text: "Grand Celebration, Birthday & Joy", score: { birthday: 3, festive: 1 } },
      { text: "Deep Romance, Love & Luxury", score: { couple: 3 } },
      { text: "Refined Professional Gratitude", score: { corporate: 3 } }
    ]
  },
  {
    question: "What is your preferred budget range?",
    options: [
      { text: "Under ₹3,000 (Minimal & Aesthetic)", budget: "low" },
      { text: "₹3,000 - ₹5,000 (Luxurious Selection)", budget: "mid" },
      { text: "Above ₹5,000 (Ultimate Indulgence)", budget: "high" }
    ]
  }
];

const BESTSELLERS_MATCH = [
  { id: 1, name: 'The Golden Serenity Hamper', price: 3499, category: 'selfcare', image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=600&q=80', desc: 'A rich relaxation set containing handcrafted soy candle, gold tea set, and organic lavender oil.' },
  { id: 2, name: 'Velvet Midnight Couple Box', price: 4999, category: 'couple', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80', desc: 'Midnight wine glasses, velvet eye masks, premium dark chocolates, and couple bracelets.' },
  { id: 3, name: 'Classic Rose Gold Birthday', price: 2999, category: 'birthday', image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=600&q=80', desc: 'Handcrafted soaps, rose bath salt, name mug, and gold decor.' },
  { id: 4, name: 'Artisan Corporate Welcome', price: 4299, category: 'corporate', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', desc: 'Leather journal, premium pen, brass tumbler, and high-altitude coffee.' }
];

export default function GiftQuiz({ addToCart }) {
  const [quizActive, setQuizActive] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizScores, setQuizScores] = useState({ birthday: 0, couple: 0, selfcare: 0, friendship: 0, corporate: 0, festive: 0 });
  const [quizBudget, setQuizBudget] = useState('mid');
  const [recommendedGift, setRecommendedGift] = useState(null);

  const handleQuizOption = (option) => {
    if (option.score) {
      setQuizScores(prev => {
        const updated = { ...prev };
        Object.keys(option.score).forEach(key => {
          updated[key] = (updated[key] || 0) + option.score[key];
        });
        return updated;
      });
    }
    if (option.budget) {
      setQuizBudget(option.budget);
    }

    if (quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(prev => prev + 1);
    } else {
      let bestCategory = 'selfcare';
      let maxScore = -1;
      Object.keys(quizScores).forEach(cat => {
        if (quizScores[cat] > maxScore) {
          maxScore = quizScores[cat];
          bestCategory = cat;
        }
      });

      let match = BESTSELLERS_MATCH.find(b => b.category === bestCategory);
      if (!match) match = BESTSELLERS_MATCH[0];
      setRecommendedGift(match);
      setQuizStep(prev => prev + 1);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizScores({ birthday: 0, couple: 0, selfcare: 0, friendship: 0, corporate: 0, festive: 0 });
    setRecommendedGift(null);
    setQuizActive(true);
  };

  return (
    <section id="quiz" className="py-24 max-w-4xl mx-auto px-6 w-full">
      <div className="bg-white dark:bg-velourabrown-dark rounded-[2.5rem] shadow-luxury-xl p-8 md:p-16 border border-beige-100/40 dark:border-velourabrown/10 text-center relative overflow-hidden">
        {!quizActive ? (
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold">Veloura AI Gifting Advisor</span>
            <h2 className="text-4xl font-serif text-velourabrown-dark dark:text-cream-100">Find The Perfect Gift Hamper</h2>
            <p className="text-sm text-velourabrown/70 dark:text-cream-200/70 max-w-md mx-auto leading-relaxed">
              Unsure which aesthetic or products fit your recipient? Take our short AI recommendation quiz to match their personality with our bestsellers.
            </p>
            <button
              onClick={() => setQuizActive(true)}
              className="px-8 py-4 gold-gradient text-velourabrown-deep rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all duration-300"
            >
              Start AI Matcher
            </button>
          </div>
        ) : recommendedGift ? (
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold">Your Perfect Match</span>
            <h3 className="text-3xl font-serif text-velourabrown-dark dark:text-cream-100">{recommendedGift.name}</h3>
            <div className="flex justify-center max-h-60 overflow-hidden rounded-2xl w-60 mx-auto border shadow-sm">
              <img src={recommendedGift.image} alt={recommendedGift.name} className="object-cover w-full h-full" />
            </div>
            <p className="text-xs text-velourabrown/75 dark:text-cream-200/75 max-w-md mx-auto leading-relaxed">
              Based on your choices, they will absolutely adore this hamper: {recommendedGift.desc}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => addToCart({ ...recommendedGift, uniqueId: `quiz-${recommendedGift.id}` })}
                className="px-6 py-3 gold-gradient text-velourabrown-deep rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90"
              >
                Add To Cart • ₹{recommendedGift.price}
              </button>
              <button
                onClick={resetQuiz}
                className="px-6 py-3 border border-beige-200 rounded-full text-xs font-bold uppercase tracking-wider hover:border-gold"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold">Question {quizStep + 1} of {QUIZ_QUESTIONS.length}</span>
            <h3 className="text-2xl font-serif text-velourabrown-dark dark:text-cream-100 max-w-lg mx-auto">
              {QUIZ_QUESTIONS[quizStep].question}
            </h3>
            <div className="space-y-3 max-w-md mx-auto">
              {QUIZ_QUESTIONS[quizStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuizOption(opt)}
                  className="w-full text-left py-4 px-6 rounded-2xl border border-beige-100 dark:border-velourabrown/30 hover:border-gold hover:bg-gold-100/10 dark:hover:bg-gold/10 transition-all text-xs font-semibold uppercase tracking-wider"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
