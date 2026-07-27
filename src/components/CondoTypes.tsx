import { FadeIn } from './FadeIn';

const condoTypes = [
  {
    title: 'Condomínios verticais',
    desc: 'Gestão administrativa, financeira e operacional para edifícios residenciais e comerciais.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/S%C3%A3o_Paulo_CBD.jpg'
  },
  {
    title: 'Condomínios horizontais',
    desc: 'Organização, manutenção, segurança, prestação de contas e relacionamento com proprietários.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Residencial_Alphaville_Campinas.jpg'
  },
  {
    title: 'Condomínios de alto padrão',
    desc: 'Gestão personalizada, atendimento próximo e elevado cuidado com patrimônio, serviços e fornecedores.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Skyscraper_in_Balne%C3%A1rio_Cambori%C3%BA_-_1.jpg'
  },
  {
    title: 'Condomínios populares',
    desc: 'Controle rigoroso de custos, organização financeira e soluções compatíveis com a realidade dos moradores.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Programa_Minha_Casa_Minha_Vida_entrega_conjunto_residencial_%285039528032%29.jpg'
  },
  {
    title: 'Condomínios de chácaras e lazer',
    desc: 'Administração de áreas comuns, infraestrutura, segurança, manutenção e regularização.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Ch%C3%A1caras_de_Bonfim_Paulista_sendo_cercadas_pelos_luxuosos_condom%C3%ADnios_fechados._-_panoramio.jpg'
  },
  {
    title: 'Condomínios comerciais',
    desc: 'Gestão voltada à continuidade operacional, manutenção predial e relacionamento entre lojistas ou proprietários.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Berrini_Brooklin_Novo.JPG'
  }
];

export function CondoTypes() {
  return (
    <section id="condominios" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Atuação adaptada à <span className="text-amber-600">realidade</span> de cada condomínio
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {condoTypes.map((type, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-900/5 group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
