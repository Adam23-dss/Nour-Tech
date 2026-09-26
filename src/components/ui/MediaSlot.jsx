import { PhotoIcon } from '@heroicons/react/24/outline';

// Affiche l'image si elle existe, sinon un emplacement neutre en attendant la vraie photo.
export const MediaSlot = ({ src, alt = '', label, className = '', imgClassName = 'w-full h-full object-cover' }) => {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`${imgClassName} ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={alt || 'Image à venir'}
      className={`w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-blue/10 to-brand-sky/10 dark:from-brand-blue/30 dark:to-[#1a1a1a] text-brand-sky ${className}`}
    >
      {label ? (
        <span className="font-display font-black text-4xl uppercase tracking-tight">{label}</span>
      ) : (
        <PhotoIcon className="h-12 w-12 opacity-60" />
      )}
    </div>
  );
};
