import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        translation: {
          nav: {
            home: 'Accueil',
            shop: 'Boutique',
            services: 'Services',
            projects: 'Projets',
            blog: 'Blog',
            about: 'À propos',
            contact: 'Contact',
            quote: 'Devis gratuit'
          },
          hero: {
            title: "L'avenir de la",
            titleAccent: "Tech au Tchad",
            subtitle: "Solutions digitales, développement web & mobile, vente et maintenance high-tech. Une expertise locale, des standards internationaux.",
            cta: "Explorer le shop",
            devis: "Demander un devis"
          },
          categories: {
            all: "Tous",
            phones: "Téléphones",
            computers: "Ordinateurs",
            tablets: "Tablettes",
            accessories: "Accessoires",
            import: "Import Spécial",
            repair: "Maintenance"
          },
          about: {
            title: "Plus qu'une boutique,",
            titleAccent: "Une Vision.",
            subtitle: "Nour Tech est né de la volonté de transformer le paysage technologique au Tchad en apportant authenticité et expertise.",
            stats: {
              launch: "Lancement",
              clients: "Clients",
              sales: "Ventes",
              support: "Support"
            }
          },
          cart: {
            title: "Mon Panier",
            empty: "Votre panier est vide",
            checkout: "Confirmer la commande"
          },
          compare: {
            title: "Comparer les",
            titleAccent: "Produits",
            empty: "Liste de comparaison vide",
            start: "Lancer la comparaison",
            add: "Ajouter un produit"
          },
          common: {
            back: "Retour",
            buy: "Acheter",
            specifications: "Spécifications",
            warranty: "Garantie",
            stock: "Stock"
          },
          errors: {
            notFound: "Produit non trouvé"
          }
        }
      },
      en: {
        translation: {
          nav: {
            home: 'Home',
            shop: 'Shop',
            services: 'Services',
            projects: 'Projects',
            blog: 'Blog',
            about: 'About',
            contact: 'Contact',
            quote: 'Free Quote'
          },
          hero: {
            title: "The Future of",
            titleAccent: "Tech in Chad",
            subtitle: "Digital solutions, web & mobile development, high-tech sales and maintenance. Local expertise, international standards.",
            cta: "Explore shop",
            devis: "Request a quote"
          },
          categories: {
            all: "All",
            phones: "Phones",
            computers: "Computers",
            tablets: "Tablets",
            accessories: "Accessories",
            import: "Special Import",
            repair: "Maintenance"
          },
          about: {
            title: "More than a shop,",
            titleAccent: "A Vision.",
            subtitle: "Nour Tech was born from the desire to transform the technological landscape in Chad by bringing authenticity and expertise.",
            stats: {
              launch: "Launch",
              clients: "Clients",
              sales: "Sales",
              support: "Support"
            }
          },
          cart: {
            title: "My Cart",
            empty: "Your cart is empty",
            checkout: "Confirm Order"
          },
          compare: {
            title: "Compare",
            titleAccent: "Products",
            empty: "Comparison list is empty",
            start: "Start comparison",
            add: "Add a product"
          },
          common: {
            back: "Back",
            buy: "Buy",
            specifications: "Specifications",
            warranty: "Warranty",
            stock: "Stock"
          },
          errors: {
            notFound: "Product not found"
          }
        }
      },
      ar: {
        translation: {
          nav: {
            home: 'الرئيسية',
            shop: 'المتجر',
            services: 'خدماتنا',
            projects: 'مشاريعنا',
            blog: 'المدونة',
            about: 'من نحن',
            contact: 'اتصل بنا',
            quote: 'طلب عرض سعر'
          },
          hero: {
            title: "مستقبل",
            titleAccent: "التكنولوجيا في تشاد",
            subtitle: "بيع واستيراد وصيانة المنتجات التقنية المتطورة. خبرة محلية بمعايير دولية.",
            cta: "استكشف المتجر",
            devis: "اطلب عرض سعر"
          },
          categories: {
            all: "الكل",
            phones: "الهواتف",
            computers: "الحواسيب",
            tablets: "الأجهزة اللوحية",
            accessories: "الإكسسوارات",
            import: "استيراد خاص",
            repair: "الصيانة"
          },
          about: {
            title: "أكثر من مجرد متجر،",
            titleAccent: "رؤية.",
            subtitle: "ولدت نور تك من الرغبة في تحويل المشهد التكنولوجي في تشاد من خلال تقديم الأصالة والخبرة.",
            stats: {
              launch: "الانطلاق",
              clients: "العملاء",
              sales: "المبيعات",
              support: "الدعم"
            }
          },
          cart: {
            title: "سلة التسوق",
            empty: "سلتك فارغة",
            checkout: "تأكيد الطلب"
          },
          compare: {
            title: "مقارنة",
            titleAccent: "المنتجات",
            empty: "قائمة المقارنة فارغة",
            start: "بدء المقارنة",
            add: "أضف منتجًا"
          },
          common: {
            back: "رجوع",
            buy: "شراء",
            specifications: "المواصفات",
            warranty: "الضمان",
            stock: "المخزون"
          },
          errors: {
            notFound: "المنتج غير موجود"
          }
        }
      }
    }
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;