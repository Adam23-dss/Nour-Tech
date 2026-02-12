// src/pages/Contact.jsx - METTRE À JOUR LE HANDLESUBMIT
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
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        subject: '', 
        message: '' 
      });
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