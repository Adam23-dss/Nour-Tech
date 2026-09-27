import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Plus, Pencil, Trash2, Search, X, ImagePlus } from 'lucide-react';
import { API_URL } from '../../utils/api';

const CATEGORIES = { phones: 'Téléphones', computers: 'Ordinateurs', tablets: 'Tablettes', accessories: 'Accessoires' };

// Chemin d'image produit -> URL affichable
const productImageUrl = (image) => {
  if (!image) return null;
  if (image.startsWith('http')) return image;
  if (image.startsWith('/media/')) return `${API_URL}${image}`;
  return `${API_URL}${image.replace('/images/produits', '/uploads')}`;
};

export const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const { token } = useAuth();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      try {
        await axios.delete(`${API_URL}/api/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProducts(products.filter(p => p.id !== id));
      } catch {
        alert('Erreur lors de la suppression');
      }
    }
  };

  const handleOpenModal = (product = null) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const filteredProducts = products.filter(p =>
    (categoryFilter === 'all' || p.category === categoryFilter) &&
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestion des produits</h2>
        <button onClick={() => handleOpenModal()} className="btn-xw !px-5 !py-2.5">
          <Plus className="h-5 w-5" />
          Nouveau produit
        </button>
      </div>

      {/* Search Bar + filtre */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Toutes les catégories ({products.length})</option>
          {Object.entries(CATEGORIES).map(([id, label]) => (
            <option key={id} value={id}>{label} ({products.filter((p) => p.category === id).length})</option>
          ))}
        </select>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Image</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Catégorie</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Prix</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan="5" className="text-center py-10">Chargement...</td></tr>
            ) : filteredProducts.length === 0 ? (
              <tr><td colSpan="5" className="text-center py-10 text-gray-500">Aucun produit trouvé</td></tr>
            ) : filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  {product.image ? (
                    <img
                      src={productImageUrl(product.image)}
                      alt={product.name}
                      className="h-12 w-12 object-contain bg-gray-50 rounded"
                      onError={(e) => { e.target.src = 'https://placehold.co/100x100?text=Product' }}
                    />
                  ) : (
                    <div className="h-12 w-12 bg-gray-50 rounded flex items-center justify-center text-gray-300"><ImagePlus className="h-5 w-5" /></div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-gray-900">{product.name}</div>
                  <div className="text-xs text-gray-500">{product.brand}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {CATEGORIES[product.category] || product.category}
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-gray-900">{product.price} F</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => handleOpenModal(product)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    >
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <ProductForm
          product={editingProduct}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            fetchProducts();
          }}
        />
      )}
    </div>
  );
};

const ProductForm = ({ product, onClose, onSuccess }) => {
  const { token } = useAuth();
  const [formData, setFormData] = useState(product || {
    name: '',
    category: 'phones',
    brand: '',
    price: '',
    oldPrice: '',
    stock: 'En stock',
    warranty: '',
    badge: '',
    badgeColor: 'bg-blue-600',
    features: []
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [featureInput, setFeatureInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData({ ...formData, features: [...(formData.features || []), featureInput.trim()] });
      setFeatureInput('');
    }
  };

  const removeFeature = (index) => {
    const newFeatures = [...formData.features];
    newFeatures.splice(index, 1);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    const readOnly = ['id', 'image', 'createdAt', 'updatedAt'];
    Object.keys(formData).forEach(key => {
      if (readOnly.includes(key)) return;
      if (key === 'features') {
        data.append(key, JSON.stringify(formData[key]));
      } else if (formData[key] !== null && formData[key] !== undefined) {
        data.append(key, formData[key]);
      }
    });

    if (imageFile) {
      data.append('image', imageFile);
    }

    try {
      if (product) {
        await axios.put(`${API_URL}/api/products/${product.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        await axios.post(`${API_URL}/api/products`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
      }
      onSuccess();
    } catch (error) {
      alert(error.response?.data?.error || 'Erreur lors de l\'enregistrement');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-auto">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">
            {product ? 'Modifier le produit' : 'Nouveau produit'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom du produit *</label>
              <input
                type="text" name="name" required value={formData.name} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
              <select
                name="category" value={formData.category} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="phones">Téléphones</option>
                <option value="computers">Ordinateurs</option>
                <option value="tablets">Tablettes</option>
                <option value="accessories">Accessoires</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Marque</label>
              <input
                type="text" name="brand" value={formData.brand} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prix (F CFA) *</label>
              <input
                type="text" name="price" required value={formData.price} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ancien Prix (Optionnel)</label>
              <input
                type="text" name="oldPrice" value={formData.oldPrice} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
              <select
                name="stock" value={formData.stock} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="En stock">En stock</option>
                <option value="Sur commande">Sur commande</option>
                <option value="Rupture de stock">Rupture de stock</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Garantie</label>
              <input
                type="text" name="warranty" value={formData.warranty} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Ex: 12 mois"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Image du produit</label>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {preview || product?.image ? (
                    <img src={preview || productImageUrl(product.image)} alt="Aperçu" className="w-full h-full object-contain" />
                  ) : (
                    <ImagePlus className="h-6 w-6 text-gray-300" />
                  )}
                </div>
                <input
                  type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    if (preview) URL.revokeObjectURL(preview);
                    setImageFile(file);
                    setPreview(URL.createObjectURL(file));
                  }}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">JPG, PNG ou WebP, 5 Mo maximum.</p>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Caractéristiques</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text" value={featureInput} onChange={(e) => setFeatureInput(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Ex: Puce M3, 8 Go RAM..."
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                />
                <button
                  type="button" onClick={addFeature}
                  className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Ajouter
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.features?.map((f, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm flex items-center">
                    {f}
                    <button type="button" onClick={() => removeFeature(i)} className="ml-2 hover:text-red-500">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button" onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              Annuler
            </button>
            <button
              type="submit" disabled={loading}
              className="btn-xw !px-6 !py-2 disabled:opacity-50"
            >
              {loading ? 'Enregistrement...' : 'Enregistrer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
