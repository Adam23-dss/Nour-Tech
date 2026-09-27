import { useEffect, useState } from 'react';
import axios from 'axios';
import { Plus, Pencil, Trash2, X, ImagePlus } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { API_URL, mediaUrl } from '../../utils/api';
import { MediaSlot } from '../../components/ui/MediaSlot';

// Valeur d'un champ telle qu'affichée dans le formulaire
const toFormValue = (field, value) => {
  if (field.type === 'tags') return (value || []).join(', ');
  if (field.type === 'paragraphs') return (value || []).join('\n\n');
  return value ?? '';
};

const inputClass =
  'w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-sky/40 focus:border-brand-sky outline-none';

// Gestion générique d'une liste (projets, articles, équipe) : liste + formulaire avec image
export const ContentManager = ({ title, route, singular, fields, describe }) => {
  const { token } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // null = fermé, {} = nouveau
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const load = () =>
    axios
      .get(`${API_URL}/api/${route}`)
      .then((res) => setItems(res.data))
      .finally(() => setLoading(false));

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  const open = (item = {}) => {
    setEditing(item);
    setForm(Object.fromEntries(fields.map((f) => [f.name, toFormValue(f, item[f.name])])));
    setFile(null);
    setPreview(null);
    setRemoveImage(false);
    setError('');
  };

  const close = () => {
    if (preview) URL.revokeObjectURL(preview);
    setEditing(null);
  };

  const pickFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (preview) URL.revokeObjectURL(preview);
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setRemoveImage(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    const data = new FormData();
    for (const f of fields) data.append(f.name, form[f.name] ?? '');
    if (file) data.append('image', file);
    if (removeImage) data.append('removeImage', 'true');
    try {
      const headers = { Authorization: `Bearer ${token}` };
      if (editing.id) await axios.put(`${API_URL}/api/${route}/${editing.id}`, data, { headers });
      else await axios.post(`${API_URL}/api/${route}`, data, { headers });
      await load();
      close();
    } catch (err) {
      setError(err.response?.data?.error || "Erreur lors de l'enregistrement");
    } finally {
      setSaving(false);
    }
  };

  const remove = async (item) => {
    if (!window.confirm(`Supprimer « ${describe(item).title} » ?`)) return;
    try {
      await axios.delete(`${API_URL}/api/${route}/${item.id}`, { headers: { Authorization: `Bearer ${token}` } });
      setItems((list) => list.filter((i) => i.id !== item.id));
    } catch {
      alert('Erreur lors de la suppression');
    }
  };

  const currentImage = removeImage ? null : preview || mediaUrl(editing?.image);

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-brand-black">{title}</h2>
        <button onClick={() => open()} className="btn-xw !px-5 !py-2.5">
          <Plus className="h-5 w-5" /> Ajouter {singular}
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Chargement...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-500 bg-white rounded-xl p-8 text-center border border-gray-100">Aucun élément pour l'instant.</p>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {items.map((item) => {
            const d = describe(item);
            return (
              <div key={item.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                <div className="h-40 bg-gray-50">
                  <MediaSlot src={mediaUrl(item.image)} alt={d.title} label={d.label} />
                </div>
                <div className="p-4 flex-1">
                  {d.badge && <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">{d.badge}</span>}
                  <h3 className="font-bold text-brand-black">{d.title}</h3>
                  {d.subtitle && <p className="text-sm text-gray-500 line-clamp-2">{d.subtitle}</p>}
                  {!item.image && <p className="text-xs text-amber-600 mt-2">Pas encore d'image</p>}
                </div>
                <div className="flex border-t border-gray-100">
                  <button onClick={() => open(item)} className="flex-1 flex items-center justify-center gap-2 py-2.5 text-brand-blue hover:bg-gray-50">
                    <Pencil className="h-4 w-4" /> Modifier
                  </button>
                  <button onClick={() => remove(item)} className="flex-1 flex items-center justify-center gap-2 py-2.5 text-brand-red hover:bg-red-50 border-l border-gray-100">
                    <Trash2 className="h-4 w-4" /> Supprimer
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <form onSubmit={submit} className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-brand-black">{editing.id ? 'Modifier' : 'Ajouter'} {singular}</h3>
              <button type="button" onClick={close} aria-label="Fermer">
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* IMAGE */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Image</label>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-24 rounded-lg overflow-hidden bg-gray-50 border border-gray-200 flex-shrink-0">
                    <MediaSlot src={currentImage} alt="Aperçu" />
                  </div>
                  <div className="space-y-2">
                    <label className="inline-flex items-center gap-2 px-4 py-2 border-2 border-brand-sky text-brand-blue rounded-lg font-semibold cursor-pointer hover:bg-brand-sky hover:text-white transition">
                      <ImagePlus className="h-4 w-4" /> Choisir une image
                      <input type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif" onChange={pickFile} className="hidden" />
                    </label>
                    {(editing.image || preview) && !removeImage && (
                      <button
                        type="button"
                        onClick={() => {
                          setRemoveImage(true);
                          setFile(null);
                        }}
                        className="block text-sm text-brand-red hover:underline"
                      >
                        Retirer l'image
                      </button>
                    )}
                    <p className="text-xs text-gray-500">JPG, PNG ou WebP, 5 Mo maximum.</p>
                  </div>
                </div>
              </div>

              {fields.map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {f.label} {f.required && <span className="text-brand-red">*</span>}
                  </label>
                  {f.type === 'textarea' || f.type === 'paragraphs' ? (
                    <textarea
                      rows={f.type === 'paragraphs' ? 8 : 3}
                      required={f.required}
                      placeholder={f.placeholder}
                      className={inputClass}
                      value={form[f.name]}
                      onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                    />
                  ) : (
                    <input
                      type={f.type === 'tags' ? 'text' : f.type || 'text'}
                      required={f.required}
                      placeholder={f.placeholder}
                      list={f.suggestions ? `${route}-${f.name}` : undefined}
                      className={inputClass}
                      value={form[f.name]}
                      onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                    />
                  )}
                  {f.suggestions && (
                    <datalist id={`${route}-${f.name}`}>
                      {f.suggestions.map((s) => <option key={s} value={s} />)}
                    </datalist>
                  )}
                  {f.help && <p className="text-xs text-gray-500 mt-1">{f.help}</p>}
                </div>
              ))}

              {error && <p className="text-sm text-brand-red bg-red-50 rounded-lg px-4 py-3">{error}</p>}
            </div>

            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100 sticky bottom-0 bg-white">
              <button type="button" onClick={close} className="px-5 py-2.5 rounded-lg border border-gray-300 font-semibold hover:bg-gray-50">
                Annuler
              </button>
              <button type="submit" disabled={saving} className="btn-xw !px-6 !py-2.5 disabled:opacity-60">
                {saving ? 'Enregistrement...' : 'Enregistrer'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
