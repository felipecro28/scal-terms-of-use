
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-scal-dark-green bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 border border-scal-green-cyan/20 transition-all duration-300 hover:shadow-lg hover:shadow-scal-lime-green/20 h-full">
      <div className="text-scal-lime-green mb-4 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-museo font-semibold text-scal-white mb-3">
        {title}
      </h3>
      <p className="text-scal-white/80">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
