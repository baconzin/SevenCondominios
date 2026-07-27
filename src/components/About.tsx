import { FadeIn } from './FadeIn';

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <FadeIn>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight uppercase">
                Experiência <span className="text-amber-600">administrativa</span> aliada ao conhecimento <span className="text-amber-600">técnico</span>
              </h2>
              
              <div className="space-y-5 text-lg text-slate-600 font-medium">
                <p>
                  Raphael Pascon atua na administração de condomínios desde 2014, com experiência prática em gestão administrativa, financeira, operacional e no relacionamento com moradores.
                </p>
                <p>
                  Sua formação em Administração e seu conhecimento técnico em obras permitem uma atuação completa, envolvendo planejamento financeiro, acompanhamento de manutenções, fiscalização de serviços, contratação de fornecedores e organização da rotina condominial.
                </p>
                <p>
                  O trabalho é desenvolvido com proximidade, transparência e foco em soluções eficientes para cada condomínio.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f0/018_Sao_Paulo_cityscape_in_Brazil_-_aerial_photo_of_Sao_Paulo.jpg"
                  alt="São Paulo - Experiência condominial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 rounded-2xl"></div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}
