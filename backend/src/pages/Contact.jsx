// src/pages/Contact.jsx - MODIFIER handleSubmit
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  } catch (error) {
    console.error('Erreur:', error);
    setStatus('error');
    setTimeout(() => setStatus('idle'), 5000);
  }
};

// Ajouter état error dans le JSX
{status === 'error' && (
  <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
    ❌ Erreur lors de l'envoi. Veuillez réessayer.
  </div>
)}