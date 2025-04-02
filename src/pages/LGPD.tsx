
import React, { useEffect } from 'react';

const LGPD = () => {
  useEffect(() => {
    // Redirect to the external page
    window.location.href = 'https://appscal.com.br/lgpd/';
  }, []);

  return (
    <div className="min-h-screen gradient-bg font-funnel flex items-center justify-center">
      <div className="text-center">
        <p className="text-scal-white text-lg">Redirecionando para a página de LGPD...</p>
      </div>
    </div>
  );
};

export default LGPD;
