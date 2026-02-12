// src/components/ui/ImagePlaceholder.jsx
export const ImagePlaceholder = ({ type, className }) => {
  const placeholders = {
    product: '📱',
    team: '👥',
    repair: '🔧',
    store: '🏪',
    default: '🖼️'
  };

  return (
    <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
      <span className="text-4xl">{placeholders[type] || placeholders.default}</span>
    </div>
  );
};