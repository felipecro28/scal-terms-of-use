
import React, { useEffect } from 'react';

const PoliticaDePrivacidade = () => {
  useEffect(() => {
    // Redirect to the external page
    window.location.href = 'https://appscal.com.br/politica-de-privacidade/';
  }, []);

  return (
    <div className="min-h-screen gradient-bg font-funnel flex items-center justify-center">
      <div className="text-center">
        <p className="text-scal-white text-lg">Redirecionando para a Política de Privacidade...</p>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidade;
