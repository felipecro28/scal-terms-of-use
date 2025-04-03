import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }),
  whatsapp: z.string().min(10, { message: "WhatsApp inválido" }),
  businessType: z.string().min(1, { message: "Selecione o tipo de negócio" }),
  role: z.string().min(1, { message: "Selecione sua função" }),
  teamSize: z.string().min(1, { message: "Selecione o tamanho da equipe" }),
  marketing: z.boolean().default(false),
  privacy: z.boolean().refine(value => value === true, {
    message: "Você precisa aceitar a política de privacidade",
  }),
});

type FormData = z.infer<typeof formSchema>;

const DemoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      businessType: "",
      role: "",
      teamSize: "",
      marketing: false,
      privacy: false,
    }
  });

  function onSubmit(data: FormData) {
    setIsSubmitting(true);
    
    // Simulando envio de formulário
    console.log("Form data submitted:", data);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      
      // Construir a URL do WhatsApp
      const whatsappMessage = `Olá, gostaria de agendar uma demonstração do sistema Scal. Meus dados são:\nNome: ${data.name}\nEmail: ${data.email}\nWhatsApp: ${data.whatsapp}\nTipo de negócio: ${data.businessType}\nFunção: ${data.role}\nTamanho da equipe: ${data.teamSize}`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=5585989371016&text=${encodeURIComponent(whatsappMessage)}`;
      
      // Redirecionar para o WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      form.reset();
    }, 1500);
  }

  return (
    <div id="demo-form">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-scal-white">Nome completo</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Seu nome" 
                      className="bg-scal-dark-jungle/50 border-scal-green-cyan/20 text-scal-white focus:border-scal-lime-green" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-scal-white">E-mail</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="seu@email.com" 
                      type="email"
                      className="bg-scal-dark-jungle/50 border-scal-green-cyan/20 text-scal-white focus:border-scal-lime-green" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-scal-white">WhatsApp</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(00) 00000-0000" 
                      className="bg-scal-dark-jungle/50 border-scal-green-cyan/20 text-scal-white focus:border-scal-lime-green" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-scal-white">Tipo de negócio</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-scal-dark-jungle/50 border-scal-green-cyan/20 text-scal-white focus:border-scal-lime-green">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-scal-dark-green border-scal-green-cyan/20">
                      <SelectItem value="clinica_medica" className="text-scal-white hover:bg-scal-dark-jungle/50">Clínica Médica</SelectItem>
                      <SelectItem value="clinica_odonto" className="text-scal-white hover:bg-scal-dark-jungle/50">Clínica Odontológica</SelectItem>
                      <SelectItem value="clinica_fisio" className="text-scal-white hover:bg-scal-dark-jungle/50">Clínica de Fisioterapia</SelectItem>
                      <SelectItem value="clinica_estetica" className="text-scal-white hover:bg-scal-dark-jungle/50">Clínica Estética</SelectItem>
                      <SelectItem value="clinica_psico" className="text-scal-white hover:bg-scal-dark-jungle/50">Clínica Psicológica</SelectItem>
                      <SelectItem value="outro" className="text-scal-white hover:bg-scal-dark-jungle/50">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-scal-white">Função</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-scal-dark-jungle/50 border-scal-green-cyan/20 text-scal-white focus:border-scal-lime-green">
                        <SelectValue placeholder="Selecione sua função" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-scal-dark-green border-scal-green-cyan/20">
                      <SelectItem value="proprietario" className="text-scal-white hover:bg-scal-dark-jungle/50">Proprietário</SelectItem>
                      <SelectItem value="gestor" className="text-scal-white hover:bg-scal-dark-jungle/50">Gestor</SelectItem>
                      <SelectItem value="medico" className="text-scal-white hover:bg-scal-dark-jungle/50">Médico</SelectItem>
                      <SelectItem value="dentista" className="text-scal-white hover:bg-scal-dark-jungle/50">Dentista</SelectItem>
                      <SelectItem value="fisioterapeuta" className="text-scal-white hover:bg-scal-dark-jungle/50">Fisioterapeuta</SelectItem>
                      <SelectItem value="administrativo" className="text-scal-white hover:bg-scal-dark-jungle/50">Administrativo</SelectItem>
                      <SelectItem value="outro" className="text-scal-white hover:bg-scal-dark-jungle/50">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="teamSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-scal-white">Tamanho da equipe</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-scal-dark-jungle/50 border-scal-green-cyan/20 text-scal-white focus:border-scal-lime-green">
                        <SelectValue placeholder="Selecione o tamanho" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-scal-dark-green border-scal-green-cyan/20">
                      <SelectItem value="1" className="text-scal-white hover:bg-scal-dark-jungle/50">Apenas 1 profissional</SelectItem>
                      <SelectItem value="2-5" className="text-scal-white hover:bg-scal-dark-jungle/50">2 a 5 profissionais</SelectItem>
                      <SelectItem value="6-10" className="text-scal-white hover:bg-scal-dark-jungle/50">6 a 10 profissionais</SelectItem>
                      <SelectItem value="11-20" className="text-scal-white hover:bg-scal-dark-jungle/50">11 a 20 profissionais</SelectItem>
                      <SelectItem value="21+" className="text-scal-white hover:bg-scal-dark-jungle/50">Mais de 20 profissionais</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="marketing"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-scal-lime-green data-[state=checked]:border-scal-lime-green" 
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-scal-white">
                      Aceito receber materiais de comunicação e marketing
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="privacy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-scal-lime-green data-[state=checked]:border-scal-lime-green" 
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-scal-white">
                      Concordo com a <Link to="/politica-de-privacidade" className="text-scal-lime-green hover:underline" target="_blank">Política de Privacidade</Link>
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          
          <div className="pt-4 flex justify-center">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-scal-lime-green hover:bg-scal-lime-green/90 text-scal-dark-jungle font-medium py-3 px-8 rounded-md transition-colors w-full md:w-auto"
              size="lg"
            >
              {isSubmitting ? "Enviando..." : "Agendar demonstração gratuita"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DemoForm;
