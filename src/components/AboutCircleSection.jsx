import { useState, useEffect, useRef } from 'react';  

const MENU_DATA = [
  {
    id: 'kb',
    title: 'Конструкторское бюро',
    text: 'Собственное конструкторское бюро позволяет реализовать индивидуальные проекты клиента.',
    icon: '⚙️',
    coords: { top: '10%', left: '75%' }
  },
  {
    id: 'dev',
    title: 'Разработка',
    text: 'Описание этапа разработки индивидуальных технических решений.',
    icon: '💻',
    coords: { top: '30%', left: '88%' }
  },
  {
    id: 'prod',
    title: 'Производственная база',
    text: 'Современные производственные мощности обеспечивают высокое качество сборки.',
    icon: '🏭',
    coords: { top: '50%', left: '95%' }
  },
  {
    id: 'warranty',
    title: 'Гарантия',
    text: 'Предоставляем официальную гарантию на всю производимую технику.',
    icon: '🛡️',
    coords: { top: '70%', left: '88%' }
  },
  {
    id: 'service',
    title: 'Сервис',
    text: 'Круглосуточная сервисная поддержка и оперативная поставка запчастей.',
    icon: '🛠️',
    coords: { top: '90%', left: '75%' }
  }
];

export default function ArcNavigation() {
  const [activeId, setActiveId] = useState('kb');
  const isClickScrolling = useRef(false); // Tugma bosilgandagi skrollni farqlash uchun

  // Tugma bosilganda kerakli matnga silliq skroll qilish funksiyasi
  const scrollToSection = (id) => {
    isClickScrolling.current = true;
    setActiveId(id);
    
    const element = document.getElementById(`content-${id}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center' // Ekran markaziga olib keladi
      });
    }

    // Skroll tugagach, observer qayta ishlashi uchun vaqt beramiz
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  // Skrollni kuzatish (Intersection Observer)
  useEffect(() => {
    const observerOptions = {
      root: null, // Brauzer oynasiga nisbatan
      rootMargin: '-20% 0px -40% 0px', // Ekranning o'rta qismini aniqlash uchun zona
      threshold: 0.1 // Elementning 10% qismi ko'rinsa ham ishlaydi
    };

    const observerCallback = (entries) => {
      // Agar foydalanuvchi menyuni o'zi bosib skroll qilayotgan bo'lsa, observerni vaqtincha to'xtatamiz
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace('content-', '');
          setActiveId(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Har bir matnli blokni kuzatishga olamiz
    MENU_DATA.forEach((item) => {
      const el = document.getElementById(`content-${item.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect(); // Komponent o'chganda kuzatishni to'xtatish
  }, []);

  return (
    <div className="mx-auto my-20 max-w-6xl px-4 font-sans">
      
      {/* Katta ekranlar uchun Desktop variant (Skroll bo'lganda ishlaydi) */}
      <div className="hidden md:flex md:items-start md:justify-between md:gap-10 relative">
        
        {/* CHAP TARAFI: Ekran skroll bo'lganda joyida qotib turadi (sticky) */}
        <div className="sticky top-20 aspect-square w-7/12 flex items-center justify-center min-h-125">
          
          {/* Orqa fondagi sariq aylana */}
          <div className="absolute inset-[5%] border border-[#ffd000] rounded-full z-10 pointer-events-none" />
          
          {/* Yuk mashinasi rasmi */}
          <img 
            src="your-truck-image.png" 
            alt="Truck Illustration" 
            className="w-8/12 z-20 object-contain" 
          />
          
          {/* Aylanma menyu punktlari */}
          <nav className="absolute inset-0 z-30">
            {MENU_DATA.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  className={`absolute flex items-center -translate-y-1/2 bg-none border-none p-0 cursor-pointer whitespace-nowrap group text-left transition-all duration-300 ${
                    isActive ? 'text-neutral-900 font-semibold scale-105' : 'text-neutral-400 font-normal hover:text-neutral-800'
                  }`}
                  style={{ top: item.coords.top, left: item.coords.left }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {/* Nuqta (Bullet) */}
                  <span className={`w-2.5 h-2.5 border-2 border-[#ffd000] rounded-full mr-3 shrink-0 transition-colors duration-300 ${
                    isActive ? 'bg-[#ffd000]' : 'bg-white group-hover:bg-neutral-100'
                  }`} />
                  
                  <span className="text-[15px]">{item.title}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* O'NG TARAFI: Skroll bo'ladigan matnlar bloki */}
        <div className="w-5/12 border-l-2 border-[#ffd000] pl-8 flex flex-col gap-32 py-[20vh]">
          {MENU_DATA.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div 
                key={item.id} 
                id={`content-${item.id}`}
                className={`transition-all duration-500 scroll-mt-24 ${
                  isActive ? 'opacity-100 translate-x-0' : 'opacity-25 -translate-x-2 blur-[1px]'
                }`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-base leading-relaxed text-neutral-700">{item.text}</p>
              </div>
            );
          })}
        </div>
        
      </div>

      {/* MOBIL VARIANT: Oddiy va qulay ro'yxat, bu ham skrollga qarab aktivlashadi */}
      <div className="flex flex-col gap-6 md:hidden">
        <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-40 py-4 border-b border-neutral-100 flex justify-center">
          <img src="your-truck-image.png" alt="Truck" className="w-1/2 max-w-[180px] h-auto object-contain" />
        </div>

        <div className="flex flex-col gap-10 py-10">
          {MENU_DATA.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div 
                key={item.id}
                id={`content-mob-${item.id}`} // Mobil uchun ham ID (agar alohida kuzatmoqchi bo'lsangiz)
                className={`p-6 border-l-4 transition-all duration-300 rounded-r-xl ${
                  isActive ? 'border-[#ffd000] bg-yellow-50/30' : 'border-neutral-200 bg-neutral-50/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="font-bold text-neutral-800">{item.title}</h4>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
