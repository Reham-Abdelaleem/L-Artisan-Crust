// PORTFOLIO DATA ARRAY 
const portfolioItems = [
  {
    id: 1,
    title: "كرواسون الزبدة الفرنسي",
    category: "french",
    categoryLabel: "مخبوزات فرنسية",
    desc: "كرواسون مُعدّ بزبدة Normandy الأصيلة، بطبقات رقيقة ومقرمشة لا مثيل لها.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    tags: ["فرنسي", "مخبوز", "فطور"],
    ingredients: ["دقيق فرنسي T45", "زبدة نورماندي", "حليب طازج", "ملح بحري", "خميرة طازجة"],
    rating: 4.9,
    reviews: 214,
    available: true,
    preparationTime: "3 ساعات"
  },
  {
    id: 2,
    title: "كنافة نابلسية بالقشطة",
    category: "oriental",
    categoryLabel: "حلويات شرقية",
    desc: "كنافة شرقية أصيلة بعجينة شعر ناعمة محشوة بالقشطة العربية وقطر الزهر.",
    image: "https://images.unsplash.com/photo-1590080874088-eec64895b423?w=600&q=80",
    tags: ["شرقي", "كنافة", "تقليدي"],
    ingredients: ["عجينة كنافة", "قشطة بلدية", "سمن عربي", "ماء زهر", "قطر"],
    rating: 4.8,
    reviews: 189,
    available: true,
    preparationTime: "45 دقيقة"
  },
  {
    id: 3,
    title: "تورتة الشوكولاتة الداكنة",
    category: "cakes",
    categoryLabel: "كيك وتورتات",
    desc: "تورتة متعددة الطبقات بشوكولاتة بلجيكية 70% وكريمة الغاناش الحريرية.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    tags: ["كيك", "شوكولاتة", "أعياد"],
    ingredients: ["شوكولاتة بلجيكية 70%", "كريمة طازجة", "دقيق", "بيض", "زبدة"],
    rating: 4.9,
    reviews: 302,
    available: true,
    preparationTime: "2 ساعة"
  },
  {
    id: 4,
    title: "بونبون الشوكولاتة الفاخرة",
    category: "chocolate",
    categoryLabel: "شوكولاتة فاخرة",
    desc: "مجموعة من الحلويات الشوكولاتية المحشوة بنكهات راقية: إيرل جراي، توت، كراميل مملح.",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&q=80",
    tags: ["شوكولاتة", "فاخر", "هدايا"],
    ingredients: ["شوكولاتة داكنة", "شاي إيرل جراي", "توت طازج", "كراميل", "ملح هيمالايا"],
    rating: 4.7,
    reviews: 143,
    available: true,
    preparationTime: "60 دقيقة"
  },
  {
    id: 5,
    title: "تارت الفاكهة الموسمي",
    category: "seasonal",
    categoryLabel: "تشكيلة موسمية",
    desc: "تارت باتيسيير طازج مُزيَّن بأفخر فواكه الموسم وكريمة الفانيليا البوربون.",
    image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=600&q=80",
    tags: ["موسمي", "فاكهة", "تارت"],
    ingredients: ["عجينة بريزيه", "كريمة باتيسيير", "فانيليا بوربون", "فراولة", "توت أزرق"],
    rating: 4.8,
    reviews: 176,
    available: true,
    preparationTime: "90 دقيقة"
  },
  {
    id: 6,
    title: "اكلير القهوة والكراميل",
    category: "french",
    categoryLabel: "مخبوزات فرنسية",
    desc: "إكلير باريسي كلاسيكي محشو بكريمة قهوة عربية مع صوص كراميل مملح مُكثَّف.",
    image: "https://images.unsplash.com/photo-1612202951490-f4b30e6a2028?w=600&q=80",
    tags: ["فرنسي", "إكلير", "قهوة"],
    ingredients: ["عجينة شو", "قهوة عربية", "كريمة طازجة", "كراميل", "ملح بحري"],
    rating: 4.8,
    reviews: 97,
    available: true,
    preparationTime: "75 دقيقة"
  },
  {
    id: 7,
    title: "بقلاوة تركية بالفستق",
    category: "oriental",
    categoryLabel: "حلويات شرقية",
    desc: "بقلاوة متعددة الطبقات بعجين الفيلو الرقيق والفستق الحلبي الأخضر الفاخر.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=80",
    tags: ["شرقي", "بقلاوة", "فستق"],
    ingredients: ["عجين فيلو", "فستق حلبي", "سمن", "قطر", "ماء ورد"],
    rating: 4.9,
    reviews: 231,
    available: true,
    preparationTime: "2 ساعة"
  },
  {
    id: 8,
    title: "تورتة الزفاف الملكية",
    category: "cakes",
    categoryLabel: "كيك وتورتات",
    desc: "تورتة زفاف من خمس طبقات مُغطّاة بالفوندان الأبيض ومزينة بالورود السكرية اليدوية.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80",
    tags: ["كيك زفاف", "فاخر", "مناسبات"],
    ingredients: ["إسفنج فانيليا", "فوندان أبيض", "كريمة زبدة", "ورود سكرية", "لؤلؤ سكر"],
    rating: 5.0,
    reviews: 88,
    available: false,
    preparationTime: "3 أيام"
  },
  {
    id: 9,
    title: "تروفل الشوكولاتة الأرمينية",
    category: "chocolate",
    categoryLabel: "شوكولاتة فاخرة",
    desc: "تروفل يدوي الصنع بشوكولاتة أرمينية نادرة مع حشوة الروم والكاجو.",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&q=80",
    tags: ["تروفل", "شوكولاتة", "فاخر"],
    ingredients: ["شوكولاتة أرمينية", "روم ممتاز", "كاجو محمص", "كريمة", "كاكاو"],
    rating: 4.7,
    reviews: 119,
    available: true,
    preparationTime: "40 دقيقة"
  },
  {
    id: 10,
    title: "مافن القرفة والتفاح",
    category: "seasonal",
    categoryLabel: "تشكيلة موسمية",
    desc: "مافن دافئ بروائح الخريف: تفاح طازج، قرفة سيلانية، وعسل أكاسيا.",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80",
    tags: ["موسمي", "تفاح", "قرفة"],
    ingredients: ["دقيق", "تفاح طازج", "قرفة سيلانية", "عسل أكاسيا", "زبدة"],
    rating: 4.6,
    reviews: 134,
    available: true,
    preparationTime: "35 دقيقة"
  },
  {
    id: 11,
    title: "ماكارون باريسي متنوع",
    category: "french",
    categoryLabel: "مخبوزات فرنسية",
    desc: "تشكيلة من الماكارون بألوان باستيل ونكهات: فستق، توت أحمر، لافندر، وليمون.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80",
    tags: ["فرنسي", "ماكارون", "هدايا"],
    ingredients: ["لوز مطحون", "بياض بيض", "سكر بودرة", "صبغات طبيعية", "كريمة زبدة"],
    rating: 4.9,
    reviews: 287,
    available: true,
    preparationTime: "4 ساعات"
  },
  {
    id: 12,
    title: "حلوى المولد النبوي",
    category: "oriental",
    categoryLabel: "حلويات شرقية",
    desc: "تشكيلة تقليدية من حلوى المولد الأصيلة: عسلية، سمسمية، ونقل ملون.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80",
    tags: ["شرقي", "تقليدي", "مناسبات"],
    ingredients: ["سمسم", "عسل نحل", "سكر", "ماء زهر", "مكسرات"],
    rating: 4.8,
    reviews: 162,
    available: true,
    preparationTime: "50 دقيقة"
  },
  {
    id: 13,
    title: "بان أو شوكولا",
    category: "french",
    categoryLabel: "مخبوزات فرنسية",
    desc: "خبز الشوكولاتة الفرنسي بعجينة البريوش المطوية حول قضبان شوكولاتة داكنة.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600&q=80",
    tags: ["فرنسي", "شوكولاتة", "فطور"],
    ingredients: ["دقيق T55", "زبدة", "شوكولاتة داكنة", "خميرة", "بيض"],
    rating: 4.8,
    reviews: 156,
    available: true,
    preparationTime: "3.5 ساعة"
  },
  {
    id: 14,
    title: "تشيز كيك اللوتس",
    category: "cakes",
    categoryLabel: "كيك وتورتات",
    desc: "تشيز كيك كريمي بارد بقاعدة بسكويت لوتس وطبقة كاراميل لوتس غنية.",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&q=80",
    tags: ["تشيز كيك", "لوتس", "بارد"],
    ingredients: ["جبن كريمي", "بسكويت لوتس", "كريمة", "لوتس سبريد", "زبدة"],
    rating: 4.9,
    reviews: 341,
    available: true,
    preparationTime: "6 ساعات"
  },
  {
    id: 15,
    title: "شوكولاتة مينديان",
    category: "chocolate",
    categoryLabel: "شوكولاتة فاخرة",
    desc: "أقراص شوكولاتة فاخرة مُزيَّنة بالمكسرات النادرة والفواكه المجففة.",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80",
    tags: ["شوكولاتة", "مكسرات", "هدايا"],
    ingredients: ["شوكولاتة بلجيكية", "لوز", "فستق", "توت مجفف", "ذهب صالح للأكل"],
    rating: 4.8,
    reviews: 98,
    available: true,
    preparationTime: "30 دقيقة"
  },
  {
    id: 16,
    title: "قطايف رمضانية بالمكسرات",
    category: "oriental",
    categoryLabel: "حلويات شرقية",
    desc: "قطايف طازجة محشوة بمزيج المكسرات والقرفة، مقلية ومغموسة في قطر العسل.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    tags: ["شرقي", "رمضان", "قطايف"],
    ingredients: ["عجينة قطايف", "جوز", "فستق", "قرفة", "عسل"],
    rating: 4.7,
    reviews: 203,
    available: true,
    preparationTime: "45 دقيقة"
  },
  {
    id: 17,
    title: "كيك الجزر بكريمة الجبن",
    category: "cakes",
    categoryLabel: "كيك وتورتات",
    desc: "كيك الجزر الكلاسيكي بالجوز والبهارات الدافئة مع طبقة كريمة الجبن الحريرية.",
    image: "https://images.unsplash.com/photo-1621955964441-c173e01c135b?w=600&q=80",
    tags: ["كيك", "جزر", "كلاسيك"],
    ingredients: ["جزر طازج", "دقيق", "زيت", "جوز", "جبن كريمي"],
    rating: 4.7,
    reviews: 127,
    available: true,
    preparationTime: "80 دقيقة"
  },
  {
    id: 18,
    title: "كوكيز الشوكولاتة الدافئة",
    category: "seasonal",
    categoryLabel: "تشكيلة موسمية",
    desc: "كوكيز طرية من الداخل ومقرمشة من الخارج بقطع شوكولاتة بلجيكية كبيرة.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80",
    tags: ["موسمي", "كوكيز", "شوكولاتة"],
    ingredients: ["دقيق", "زبدة", "سكر بني", "شوكولاتة بلجيكية", "فانيليا"],
    rating: 4.9,
    reviews: 418,
    available: true,
    preparationTime: "25 دقيقة"
  },
  // ─── مخبوزات فرنسية — إضافة ───
  {
    id: 19,
    title: "تارت الليمون الفرنسي",
    category: "french",
    categoryLabel: "مخبوزات فرنسية",
    desc: "تارت ليمون كلاسيكي بقاعدة سابليه مقرمشة وكريمة الليمون الحامضة الحريرية وقبة الميرينغ المحروقة.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=80",
    tags: ["فرنسي", "تارت", "ليمون"],
    ingredients: ["عجينة سابليه", "ليمون طازج", "بيض", "زبدة", "سكر"],
    rating: 4.8,
    reviews: 173,
    available: true,
    preparationTime: "2.5 ساعة"
  },
  {
    id: 20,
    title: "ميل فوي الفانيليا",
    category: "french",
    categoryLabel: "مخبوزات فرنسية",
    desc: "طبقات من عجين النفخ المقرمش تتناوب مع كريمة الفانيليا الطبيعية الكثيفة والفاخرة.",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80",
    tags: ["فرنسي", "نفخ", "كريمة"],
    ingredients: ["عجين نفخ", "فانيليا مدغشقر", "كريمة", "سكر بودرة", "بيض"],
    rating: 4.9,
    reviews: 142,
    available: true,
    preparationTime: "3 ساعات"
  },
  // ─── حلويات شرقية — إضافة ───
  {
    id: 21,
    title: "بسبوسة بالقشطة",
    category: "oriental",
    categoryLabel: "حلويات شرقية",
    desc: "بسبوسة سميد طرية بالسمن البلدي محشوة بطبقة كريمة القشطة الطازجة.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80",
    tags: ["شرقي", "بسبوسة", "قشطة"],
    ingredients: ["سميد", "سمن بلدي", "سكر", "قشطة"],
    rating: 4.8,
    reviews: 195,
    available: true,
    preparationTime: "40 دقيقة"
  },
  {
    id: 22,
    title: "أم علي بالمكسرات الفاخرة",
    category: "oriental",
    categoryLabel: "حلويات شرقية",
    desc: "حلوى مصرية أصيلة بطبقات من عجين الفيلو المقرمش والكريمة الغنية والمكسرات المحمصة.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    tags: ["شرقي", "أم علي", "مناسبات"],
    ingredients: ["عجين فيلو", "كريمة طازجة", "حليب", "فستق", "جوز هند"],
    rating: 4.9,
    reviews: 221,
    available: true,
    preparationTime: "50 دقيقة"
  },
  // ─── كيك وتورتات — إضافة ───
  {
    id: 23,
    title: "تورتة الفراولة والكريمة",
    category: "cakes",
    categoryLabel: "كيك وتورتات",
    desc: "كيك إسفنجي خفيف بطبقات من الكريمة الشانتيه الطازجة والفراولة الموسمية المقطّعة.",
    image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=600&q=80",
    tags: ["كيك", "فراولة", "أعياد ميلاد"],
    ingredients: ["إسفنج فانيليا", "كريمة شانتيه", "فراولة طازجة", "سكر", "بيض"],
    rating: 4.8,
    reviews: 256,
    available: true,
    preparationTime: "90 دقيقة"
  },
  {
    id: 24,
    title: "رول الكيك بالنوتيلا",
    category: "cakes",
    categoryLabel: "كيك وتورتات",
    desc: "رول إسفنجي ناعم محشو بالنوتيلا وكريمة الهيزل نت مع تزيين بالمكسرات المحمصة.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    tags: ["كيك", "نوتيلا", "رول"],
    ingredients: ["بيض", "دقيق", "نوتيلا", "هيزل نت", "كريمة"],
    rating: 4.7,
    reviews: 188,
    available: true,
    preparationTime: "60 دقيقة"
  },
  // ─── شوكولاتة فاخرة — إضافة ───
  {
    id: 25,
    title: "بار الشوكولاتة بالملح والكراميل",
    category: "chocolate",
    categoryLabel: "شوكولاتة فاخرة",
    desc: "بار شوكولاتة داكنة بلجيكية 65% محشو بكراميل سائل مع رشة ملح هيمالايا الوردي.",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80",
    tags: ["شوكولاتة", "كراميل", "هدايا"],
    ingredients: ["شوكولاتة داكنة 65%", "كراميل سائل", "ملح هيمالايا", "زبدة", "سكر"],
    rating: 4.9,
    reviews: 167,
    available: true,
    preparationTime: "45 دقيقة"
  },
  {
    id: 26,
    title: "روشيه بالبندق الفاخر",
    category: "chocolate",
    categoryLabel: "شوكولاتة فاخرة",
    desc: "كرات شوكولاتة بيضاء وداكنة محشوة بكريمة الفندق ومغطاة بالفستق والبندق المقروش.",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&q=80",
    tags: ["شوكولاتة", "فندق", "هدايا فاخرة"],
    ingredients: ["شوكولاتة بيضاء", "بندق محمص", "فستق", "كريمة", "كاكاو"],
    rating: 4.8,
    reviews: 132,
    available: true,
    preparationTime: "50 دقيقة"
  },
  // ─── تشكيلة موسمية — إضافة ───
  {
    id: 27,
    title: "براونيز الشوكولاتة الذائبة",
    category: "seasonal",
    categoryLabel: "تشكيلة موسمية",
    desc: "برونيز طازجة ذائبة من الداخل بشوكولاتة بلجيكية داكنة مع رشة ملح البحر الفرنسي.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80",
    tags: ["موسمي", "برونيز", "شوكولاتة"],
    ingredients: ["شوكولاتة داكنة", "زبدة", "بيض", "سكر بني", "دقيق"],
    rating: 4.9,
    reviews: 304,
    available: true,
    preparationTime: "40 دقيقة"
  },
  {
    id: 28,
    title: "بودينغ التمر والقرفة",
    category: "seasonal",
    categoryLabel: "تشكيلة موسمية",
    desc: "بودينغ دافئ بالتمر المنقوع والقرفة السيلانية مع صوص التوفي الكريمي الساخن.",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80",
    tags: ["موسمي", "تمر", "دافئ"],
    ingredients: ["تمر مدينة منوّر", "قرفة سيلانية", "دقيق", "كريمة", "سكر بني"],
    rating: 4.8,
    reviews: 149,
    available: true,
    preparationTime: "55 دقيقة"
  }
];

//  RENDER PORTFOLIO CARDS 
function renderCards(items) {
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = items.map(item => `
        <div class="portfolio-card overflow-hidden" data-category="${item.category}">
          <img src="${item.image}" alt="${item.title}" class="portfolio-card-img w-100 object-fit-cover" loading="lazy"/>
          <div class="portfolio-card-body">
            <div class="portfolio-card-category d-inline-block fw-bold text-uppercase">${item.categoryLabel}</div>
            <h3 class="portfolio-card-title fw-bold">${item.title}</h3>
            <p class="portfolio-card-desc mb-3">${item.desc}</p>
            <div class="portfolio-card-footer pt-3 d-flex justify-content-between align-items-center">
              <div class="portfolio-card-rating d-flex align-items-center gap-1">
                <i class="bi bi-star-fill"></i>
                <span>${item.rating} (${item.reviews})</span>
              </div>
              <span>${item.preparationTime}</span>
            </div>
          </div>
        </div>`).join('');
}

renderCards(portfolioItems);

// FILTER LOGIC
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;
    const cards = document.querySelectorAll('.portfolio-card');

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        card.style.animation = 'fadeIn 0.4s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Add fade-in keyframe 
const style = document.createElement('style');
style.textContent = `@keyframes fadeIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`;
document.head.appendChild(style);

//  CONTACT FORM VALIDATION 
function submitForm() {
  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const service = document.getElementById('service');
  const message = document.getElementById('message');

  [name, email, service, message].forEach(el => el.classList.remove('is-invalid'));

  if (!name.value.trim() || name.value.trim().length < 3) {
    name.classList.add('is-invalid');
    valid = false;
  }
  if (!validateEmail(email.value.trim())) {
    email.classList.add('is-invalid');
    valid = false;
  }

  if (!service.value) {
    service.classList.add('is-invalid');
    valid = false;
  }

  if (!message.value.trim() || message.value.trim().length < 10) {
    message.classList.add('is-invalid');
    valid = false;
  }

  if (valid) {
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }
}


/* NAVBAR SCROLL */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  const btn = document.getElementById('backToTop');
  if (window.scrollY > 400) btn.classList.add('visible');
  else btn.classList.remove('visible');
});

document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// REVIEWS DATA & CAROUSEL
const reviews = [
  {
    name: "سارة المنصوري",
    initials: "سم",
    location: "القاهرة",
    date: "مارس 2026",
    rating: 5,
    product: "ماكارون باريسي",
    text: "تجربة لا تُنسى! الماكارون كان طازجاً وطريّاً بشكل مذهل، النكهات متوازنة تماماً. أهدته لصديقتي في عيد ميلادها وكان الجميع مبهوراً من التغليف قبل حتى أن يتذوقوا!",
    verified: true
  },
  {
    name: "أحمد الرشيدي",
    initials: "أر",
    location: "الإسكندرية",
    date: "أبريل 2026",
    rating: 5,
    product: "تورتة الشوكولاتة الداكنة",
    text: "طلبت التورتة لحفلة خطوبة وكانت تحفة فنية حقيقية. الشوكولاتة البلجيكية واضح جداً في النكهة العميقة. الجميع سألني من أين أحضرتها!",
    verified: true
  },
  {
    name: "نور الحسيني",
    initials: "نح",
    location: "الزمالك، القاهرة",
    date: "فبراير 2026",
    rating: 5,
    product: "كرواسون الزبدة الفرنسي",
    text: "أكلت كرواسون في باريس نفسها وأقسم أن هذا لا يختلف! الطبقات الرقيقة، رائحة الزبدة الأصيلة — صباحي أصبح أجمل بسبب L'Artisan Crust.",
    verified: true
  },
  {
    name: "ليلى العمري",
    initials: "لع",
    location: "مدينة نصر",
    date: "مارس 2026",
    rating: 5,
    product: "تشيز كيك اللوتس",
    text: "ما توقعتش إن تشيز كيك ممكن يكون بالمستوى ده! القوام كريمي جداً والقاعدة مقرمشة بشكل مثالي. والكميات كبيرة وكفت الجميع في التجمع العائلي.",
    verified: true
  },
  {
    name: "محمد السعيد",
    initials: "مس",
    location: "المعادي",
    date: "يناير 2026",
    rating: 5,
    product: "بقلاوة تركية بالفستق",
    text: "الفستق الحلبي الأخضر حقيقي مش مغشوش، العجين رقيق زي الورق، والقطر بالمقدار الصح — مش حلو أوي ولا ناقص. هذه هي البقلاوة الحقيقية!",
    verified: true
  },
  {
    name: "ريم الفاروقي",
    initials: "رف",
    location: "التجمع الخامس",
    date: "أبريل 2026",
    rating: 5,
    product: "كوكيز الشوكولاتة",
    text: "طلبت 24 حبة كوكيز لمكتبنا ووصلوا دافئين في وقتهم تماماً. الجميع جنّ جنوناً بيهم! طلبات الأسبوع الجاي موجودة بالفعل 😂",
    verified: true
  },
  {
    name: "فاطمة الزهراء",
    initials: "فز",
    location: "حلوان",
    date: "مارس 2026",
    rating: 4,
    product: "تارت الفاكهة الموسمي",
    text: "جميل جداً من الشكل والطعم. الفاكهة طازجة وكريمة الباتيسيير خفيفة ومش ثقيلة. نقطة واحدة بس — ياريت الحجم يبقى أكبر شوية للسعر ده.",
    verified: true
  },
  {
    name: "عمر طارق",
    initials: "عط",
    location: "مصر الجديدة",
    date: "فبراير 2026",
    rating: 5,
    product: "بونبون الشوكولاتة",
    text: "أهدیت صندوق البونبون لزوجتي وكانت سعادتها لا توصف من التغليف الفاخر. والطعم؟ شوكولاتة حقيقية بنكهات مدهشة — الكراميل المملح كان الأجمل!",
    verified: true
  },
  {
    name: "دينا مصطفى",
    initials: "دم",
    location: "الدقي",
    date: "أبريل 2026",
    rating: 5,
    product: "كنافة نابلسية",
    text: "أكلت كنافة في كل مكان بالقاهرة وهذه هي الأفضل على الإطلاق. القشطة كريمية وطازجة، والعجينة بالمقاس الصح — لا ناشفة ولا طرية أوي.",
    verified: true
  },
  {
    name: "خديجة الأنصاري",
    initials: "خا",
    location: "الشيخ زايد",
    date: "مايو 2026",
    rating: 5,
    product: "إكلير القهوة العربية",
    text: "أول مرة أتذوق إكلير بقهوة عربية وكان مزيج عبقري! القهوة ما تطغى على الطعم، والكريمة حريرية. طلبت 30 حبة لحفل تخرج ابنتي والكل طلب الرقم!",
    verified: true
  },
  {
    name: "يوسف الشرقاوي",
    initials: "يش",
    location: "النيل الخضراء",
    date: "أبريل 2026",
    rating: 5,
    product: "تورتة الزفاف",
    text: "طلبنا تورتة الزفاف لحفلتنا وكانت أجمل ما رأيناه! الديكور والورود السكرية فنية جداً. الضيوف ما كانوا يصدقون إنها حقيقية وليست مجسم!",
    verified: true
  },
  {
    name: "منى الكيلاني",
    initials: "منك",
    location: "مدينة بدر",
    date: "مارس 2026",
    rating: 4,
    product: "مافن التفاح والقرفة",
    text: "المافن طازج وعطري جداً. التفاح حقيقي والقرفة تحس بيها بشكل واضح. الحجم كويس والسعر معقول. ياريت يكون في نكهات موسمية أكتر!",
    verified: true
  },
  {
    name: "علي الحمادي",
    initials: "علح",
    location: "الجيزة",
    date: "فبراير 2026",
    rating: 5,
    product: "تروفل الشوكولاتة",
    text: "التروفل بالشوكولاتة الأرمينية كان تجربة فاخرة حقيقية. كل حبة مختلفة والحشوات متنوعة. هدايا رائعة للعملاء والأصدقاء الكرام!",
    verified: true
  },
  {
    name: "سلمى الحسن",
    initials: "سح",
    location: "التجمع الأول",
    date: "أبريل 2026",
    rating: 5,
    product: "حلويات المولد التقليدية",
    text: "حلويات المولد بتذكرني بطفولتي! الطعم أصلي والمكونات واضح إنها جودة عالية. طلبت كميات كبيرة للعزومة وكل الناس طلبت الرقم!",
    verified: true
  },
  {
    name: "إبراهيم فرج",
    initials: "إف",
    location: "الزمالك",
    date: "يناير 2026",
    rating: 5,
    product: "خبز الشوكولاتة الفرنسي",
    text: "الخبز الفرنسي بالشوكولاتة كان فطور مثالي! الطبقات الرقيقة والشوكولاتة الداكنة توازن مثالي. أصبحت عميل دائم من أول مرة!",
    verified: true
  },
  {
    name: "ياسمين محمود",
    initials: "يم",
    location: "مصر الجديدة",
    date: "مارس 2026",
    rating: 5,
    product: "أقراص الشوكولاتة الفاخرة",
    text: "الأقراص الشوكولاتية بالمكسرات النادرة كانت هدية مثالية. التغليف فاخر والطعم لا يُنسى. زوجي طلب كمية تانية بعد أسبوع!",
    verified: true
  },
  {
    name: "كريم السيد",
    initials: "كس",
    location: "المعادي",
    date: "أبريل 2026",
    rating: 5,
    product: "قطايف رمضانية",
    text: "القطايف الرمضانية بالمكسرات والقرفة كانت الأفضل في الموسم! طازجة ومقلية بشكل مثالي. طلبت يومياً طول الشهر!",
    verified: true
  },
  {
    name: "لينا العابدين",
    initials: "لع",
    location: "الدقي",
    date: "فبراير 2026",
    rating: 5,
    product: "كيك الجزر بكريمة الجبن",
    text: "كيك الجزر كان رطب وطري بشكل مذهل! كريمة الجبن حريرية والنكهات متوازنة. طلبت نسخة لحفلة عيد ميلادي وكان نجاح كبير!",
    verified: true
  },
  {
    name: "هشام الأمين",
    initials: "ها",
    location: "القاهرة الجديدة",
    date: "مارس 2026",
    rating: 5,
    product: "كوكيز الشوكولاتة الدافئة",
    text: "الكوكيز الدافئ بقطع الشوكولاتة الكبيرة كان إدمان! طرية من الداخل ومقرمشة من الخارج. أفضل من أي كوكيز جربته قبل كده!",
    verified: true
  },
  {
    name: "نادية الشريف",
    initials: "نش",
    location: "حلوان",
    date: "أبريل 2026",
    rating: 4,
    product: "ماكارون متنوع",
    text: "الماكارون بالنكهات المختلفة كانت تجربة جميلة جداً. الألوان جذابة والطعم لذيذ. السعر شوية غالي لكن الجودة تستحق!",
    verified: true
  }
];

function buildReviewCard(r) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    `<i class="bi bi-star${i < r.rating ? '-fill' : (i < r.rating + 0.5 ? '-half' : '')}"></i>`
  ).join('');
  return `
        <div class="item">
          <div class="review-card position-relative">
            <div class="review-quote mb-2 fs-1">"</div>
            <div class="review-product-badge d-inline-flex align-items-center fw-bold mb-3"><i class="bi bi-bag-heart-fill"></i>${r.product}</div>
            <div class="review-text fst-italic fs-6">${r.text}</div>
            <div class="review-stars mb-3">${stars}</div>
            <div class="review-footer pt-3 d-flex align-items-center">
              <div class="review-avatar d-flex align-items-center justify-content-center flex-shrink-0 fs-6 fw-bold rounded-circle">${r.initials}</div>
              <div>
                <div class="review-name fw-bold">${r.name}</div>
                <div class="review-meta">${r.location} · ${r.date}</div>
              </div>
              ${r.verified ? '<div class="review-verified d-flex align-items-center ms-auto"><i class="bi bi-patch-check-fill"></i> موثّق</div>' : ''}
            </div>
          </div>
        </div>`;
}

// Initialize Owl Carousel
$(document).ready(function () {
  const carousel = $("#reviewsCarousel");
  carousel.html(reviews.map(buildReviewCard).join(''));

  carousel.owlCarousel({
    loop: true,
    margin: 22,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    rtl: true,
    navText: [
      '<i class="bi bi-chevron-right"></i>',
      '<i class="bi bi-chevron-left"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});

//  SCROLL REVEAL + COUNTER ANIMATION 
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const isFloat = target % 1 !== 0;
  const duration = 1800;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  let step = 0;
  const timer = setInterval(() => {
    step++;
    current = Math.min(increment * step, target);
    el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
    if (step >= steps) clearInterval(timer);
  }, duration / steps);
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger counters inside this element
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left').forEach(el => revealObserver.observe(el));

/* CONTACT FORM VALIDATION */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submitForm() {
  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const service = document.getElementById('service');
  const message = document.getElementById('message');

  // Reset
  [name, email, service, message].forEach(el => {
    if (el) el.classList.remove('is-invalid');
  });

  if (!name || !name.value.trim() || name.value.trim().length < 3) {
    if (name) name.classList.add('is-invalid');
    valid = false;
  }
  if (!email || !validateEmail(email.value.trim())) {
    if (email) email.classList.add('is-invalid');
    valid = false;
  }
  if (!service || !service.value) {
    if (service) service.classList.add('is-invalid');
    valid = false;
  }
  if (!message || !message.value.trim() || message.value.trim().length < 10) {
    if (message) message.classList.add('is-invalid');
    valid = false;
  }

  if (valid) {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    if (contactForm) contactForm.style.display = 'none';
    if (formSuccess) formSuccess.style.display = 'block';
    console.log("تم الإرسال بنجاح!");
  }
}
