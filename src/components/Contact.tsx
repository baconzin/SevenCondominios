import { useState, FormEvent, ChangeEvent } from 'react';
import { FadeIn } from './FadeIn';
import { WHATSAPP_DISPLAY, SITE_URL, getWhatsAppLink } from '../utils/constants';
import { Phone, Globe, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    condominio: '',
    cidade: '',
    telefone: '',
    email: '',
    unidades: '',
    mensagem: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const message = `Olá, Raphael. Gostaria de solicitar uma apresentação.

Nome: ${formData.nome}
Condomínio: ${formData.condominio}
Cidade: ${formData.cidade}
Telefone: ${formData.telefone}
E-mail: ${formData.email}
Quantidade de unidades: ${formData.unidades}

Mensagem: ${formData.mensagem}`;

    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          <div>
            <FadeIn>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Vamos conversar sobre o seu condomínio?
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Preencha o formulário para enviar suas informações e entraremos em contato rapidamente através do WhatsApp.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">WhatsApp</p>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors">
                      {WHATSAPP_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-full">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Site</p>
                    <a href={`https://${SITE_URL}`} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors">
                      {SITE_URL}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="up" delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-2">Nome</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="condominio" className="block text-sm font-medium text-slate-700 mb-2">Nome do condomínio</label>
                    <input
                      type="text"
                      id="condominio"
                      name="condominio"
                      required
                      value={formData.condominio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Ex: Res. das Flores"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="cidade" className="block text-sm font-medium text-slate-700 mb-2">Cidade</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      required
                      value={formData.cidade}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Sua cidade"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="unidades" className="block text-sm font-medium text-slate-700 mb-2">Quantidade de unidades</label>
                    <input
                      type="text"
                      id="unidades"
                      name="unidades"
                      required
                      value={formData.unidades}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Aprox. de unidades"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="mensagem" className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    placeholder="Como posso ajudar o seu condomínio?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-slate-900/20"
                >
                  <Send size={20} />
                  Enviar para o WhatsApp
                </button>
              </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
