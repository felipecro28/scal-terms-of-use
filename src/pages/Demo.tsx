
import React from "react";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
      
      // Reset success message after a delay
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen gradient-bg font-funnel">
      {/* Header Space */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-scal-white hover:text-scal-lime-green transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Voltar para a página inicial
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-scal-dark-green/50 backdrop-blur-md rounded-xl p-8 border border-scal-green-cyan/20 shadow-lg mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-scal-white">Solicite uma Demonstração</h1>
            <p className="text-scal-white/80 mb-8">
              Preencha o formulário abaixo para solicitar uma demonstração personalizada do sistema Scal. 
              Nossa equipe entrará em contato com você em breve.
            </p>
            
            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                <p className="text-green-400 font-medium">
                  Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-scal-white/90">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-scal-dark-jungle/50 border border-scal-green-cyan/20 rounded-md focus:outline-none focus:ring-2 focus:ring-scal-lime-green/50 text-scal-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-scal-white/90">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-scal-dark-jungle/50 border border-scal-green-cyan/20 rounded-md focus:outline-none focus:ring-2 focus:ring-scal-lime-green/50 text-scal-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-scal-white/90">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-scal-dark-jungle/50 border border-scal-green-cyan/20 rounded-md focus:outline-none focus:ring-2 focus:ring-scal-lime-green/50 text-scal-white"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-scal-white/90">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-scal-dark-jungle/50 border border-scal-green-cyan/20 rounded-md focus:outline-none focus:ring-2 focus:ring-scal-lime-green/50 text-scal-white"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-scal-white/90">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-scal-dark-jungle/50 border border-scal-green-cyan/20 rounded-md focus:outline-none focus:ring-2 focus:ring-scal-lime-green/50 text-scal-white"
                    placeholder="Conte-nos um pouco sobre suas necessidades..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    disabled={submitting}
                    className="bg-scal-lime-green hover:bg-scal-lime-green/90 text-scal-dark-jungle font-medium py-2 px-6 rounded-md transition-colors"
                  >
                    {submitting ? "Enviando..." : "Enviar solicitação"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
