import React from 'react';

interface LegalSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  level?: 2 | 3 | 4;
}

const LegalSection: React.FC<LegalSectionProps> = ({ 
  id, 
  title, 
  children, 
  level = 2 
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const headingClasses = {
    2: 'text-2xl font-bold text-gray-900 mb-4',
    3: 'text-xl font-semibold text-gray-900 mb-3',
    4: 'text-lg font-semibold text-gray-900 mb-2'
  };

  return (
    <section id={id} className="mb-8 scroll-mt-8">
      <HeadingTag className={headingClasses[level]}>
        {title}
      </HeadingTag>
      <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default LegalSection;