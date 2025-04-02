
import React, { useEffect } from 'react';

const TermosDeUso = () => {
  useEffect(() => {
    // Redirect to the external page
    window.location.href = 'https://appscal.com.br/termos-de-uso/';
  }, []);

  return (
    <div className="min-h-screen gradient-bg font-funnel flex items-center justify-center">
      <div className="text-center">
        <p className="text-scal-white text-lg">Redirecionando para os Termos de Uso...</p>
      </div>
    </div>
  );
};

export default TermosDeUso;
