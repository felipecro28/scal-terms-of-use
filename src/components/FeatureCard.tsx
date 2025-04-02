
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="feature-card p-6 h-full">
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

export default FeatureCard;
