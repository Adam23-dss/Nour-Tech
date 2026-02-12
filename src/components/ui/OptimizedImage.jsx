// src/components/ui/OptimizedImage.jsx
export const OptimizedImage = ({ src, alt, className }) => {
  return (
    <picture>
      <source 
        srcSet={src.replace(/\.(jpg|png)$/, '.webp')} 
        type="image/webp"
      />
      <img 
        src={src} 
        alt={alt} 
        className={className}
        loading="lazy"
      />
    </picture>
  );
};