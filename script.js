// =========================
// 🌙 DARK MODE
// =========================

function toggleTheme() {

  document.body.classList.toggle("dark");

  const toggle =
    document.getElementById("themeToggle");

  localStorage.setItem(
    "theme",
    toggle.checked ? "dark" : "light"
  );

}

// =========================
// 🌐 LANGUAGE SWITCH
// =========================

const translations = {

  en: {
    "nav.about": "About Me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "nav.contact": "Contact",

    "hero.greeting": "Hello, i am",
    "hero.btnProjects": "My Projects",
    "hero.btnContact": "Contact",

    "about.title": "About Me",
    "about.text": "I am an IT enthusiast with knowledge of frontend development and IT support. I have practical skills in building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and Bootstrap, and I enjoy continuously improving my technical abilities through personal projects and hands-on experience.\nI also have knowledge based on the CompTIA A+ Core 1 and Core 2 objectives, including computer hardware, Windows operating systems, networking fundamentals, troubleshooting, and Help Desk support. I am familiar with configuring and managing network switches through the command-line interface using PuTTY, and I have a basic understanding of switch configuration, VLANs, and network connectivity.\nI am passionate about technology, enjoy solving technical problems, and am always looking for opportunities to expand my skills and gain practical experience in both frontend development and IT support. I believe that continuous learning is essential in the IT industry. I regularly improve my knowledge by building personal projects, studying modern technologies, and exploring new tools and best practices. I enjoy learning how systems work, solving technical challenges, and finding efficient solutions to real-world problems.\nMy goal is to build a successful career in the IT industry, where I can apply my technical knowledge, continue developing my skills, and contribute to meaningful projects",

    "skills.title": "Skills",
    "skills.troubleshooting": "System Troubleshooting",
    "skills.hwsw": "Hardware & Software Installation",

    "projects.title": "Projects",

    "project1.title": "Movie Tracker",
    "project1.desc": "An advanced movie search application built with the TMDB API. Users can search for movies, explore detailed information including ratings, genres, and plot summaries, watch official trailers.",

    "project2.title": "Notepad",
    "project2.desc": "A modern note-taking application that allows users to create, edit, pin, and delete notes with ease. The application provides an intuitive and responsive interface for organizing personal notes, ensuring quick access to important information.",

    "project3.title": "Registration/Login",
    "project3.desc": "A responsive user authentication system with registration and login functionality powered by Local Storage. The application includes form validation, input restrictions for invalid characters, secure credential verification, and user-friendly error handling.",

    "project4.title": "ABB Web-Site",
    "project4.desc": "A modern banking website built with HTML and CSS, featuring a clean and responsive design",

    "project5.title": "Code Academy Web-Site",
    "project5.desc": "A responsive website built with HTML and Bootstrap, featuring a clean and responsive design",

    "project6.title": "Mini-Shop (In Development)",
    "project6.desc": "A fully functional online store with an admin dashboard that allows administrators to manage the store, add, edit, and delete products, while providing users with registration, login, and a seamless shopping experience using Local Storage.",

    "project.openBtn": "Open Project",

    "cv.title": "CV",
    "cv.btn": "Download CV",

    "contact.title": "Contact",
    "contact.email": "Email: rauf.allahverdievv@mail.ru",
    "contact.phone": "Phone: +994-70-203-43-05"
  },

  ru: {
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.cv": "Резюме",
    "nav.contact": "Контакты",

    "hero.greeting": "Привет, я",
    "hero.btnProjects": "Мои проекты",
    "hero.btnContact": "Связаться",

    "about.title": "Обо мне",
    "about.text": "Я ИТ-энтузиаст со знаниями во фронтенд-разработке и ИТ-поддержке. У меня есть практические навыки создания адаптивных и удобных веб-интерфейсов с использованием HTML, CSS, JavaScript и Bootstrap, и я постоянно совершенствую свои технические навыки через личные проекты и практический опыт.\nТакже у меня есть знания на основе целей CompTIA A+ Core 1 и Core 2, включая компьютерное оборудование, операционные системы Windows, основы сетевых технологий, устранение неполадок и поддержку Help Desk. Я знаком с настройкой и управлением сетевыми коммутаторами через командную строку с помощью PuTTY, а также имею базовое понимание настройки коммутаторов, VLAN и сетевого подключения.\nЯ увлечён технологиями, люблю решать технические задачи и всегда ищу возможности для расширения своих навыков и получения практического опыта как во фронтенд-разработке, так и в ИТ-поддержке. Я считаю, что непрерывное обучение необходимо в ИТ-индустрии. Я регулярно повышаю свои знания, создавая личные проекты, изучая современные технологии и исследуя новые инструменты и лучшие практики. Мне нравится узнавать, как работают системы, решать технические задачи и находить эффективные решения реальных проблем.\nМоя цель — построить успешную карьеру в ИТ-индустрии, где я смогу применять свои технические знания, продолжать развивать свои навыки и участвовать в значимых проектах.",

    "skills.title": "Навыки",
    "skills.troubleshooting": "Устранение неполадок",
    "skills.hwsw": "Установка оборудования и ПО",

    "projects.title": "Проекты",

    "project1.title": "Movie Tracker",
    "project1.desc": "Продвинутое приложение для поиска фильмов, созданное с использованием TMDB API. Пользователи могут искать фильмы, изучать подробную информацию, включая рейтинги, жанры и описания сюжета, а также смотреть официальные трейлеры.",

    "project2.title": "Notepad",
    "project2.desc": "Современное приложение для заметок, позволяющее легко создавать, редактировать, закреплять и удалять заметки. Приложение предоставляет интуитивно понятный и адаптивный интерфейс для организации личных заметок и быстрого доступа к важной информации.",

    "project3.title": "Registration/Login",
    "project3.desc": "Адаптивная система аутентификации пользователей с функциями регистрации и входа на базе Local Storage. Приложение включает валидацию форм, ограничения на ввод недопустимых символов, безопасную проверку учётных данных и удобную обработку ошибок.",

    "project4.title": "ABB Web-Site",
    "project4.desc": "Современный банковский сайт, созданный с использованием HTML и CSS, с чистым и адаптивным дизайном.",

    "project5.title": "Code Academy Web-Site",
    "project5.desc": "Адаптивный сайт, созданный с использованием HTML и Bootstrap, с чистым и адаптивным дизайном.",

    "project6.title": "Mini-Shop (в разработке)",
    "project6.desc": "Полнофункциональный интернет-магазин с панелью администратора, позволяющей добавлять, редактировать и удалять товары, а также предоставляющий пользователям регистрацию, вход и удобный процесс покупок с использованием Local Storage.",

    "project.openBtn": "Открыть проект",

    "cv.title": "Резюме",
    "cv.btn": "Скачать резюме",

    "contact.title": "Контакты",
    "contact.email": "Email: rauf.allahverdievv@mail.ru",
    "contact.phone": "Телефон: +994-70-203-43-05"
  },

  az: {
    "nav.about": "Haqqımda",
    "nav.skills": "Bacarıqlar",
    "nav.projects": "Layihələr",
    "nav.cv": "CV",
    "nav.contact": "Əlaqə",

    "hero.greeting": "Salam, mən",
    "hero.btnProjects": "Layihələrim",
    "hero.btnContact": "Əlaqə",

    "about.title": "Haqqımda",
    "about.text": "Mən frontend inkişafı və İT dəstəyi sahəsində bilikləri olan İT həvəskarıyam. HTML, CSS, JavaScript və Bootstrap istifadə edərək adaptiv və istifadəçi dostu veb interfeyslər qurmaq üzrə praktiki bacarıqlarım var və şəxsi layihələr, praktiki təcrübə vasitəsilə texniki bacarıqlarımı davamlı inkişaf etdirirəm.\nHəmçinin CompTIA A+ Core 1 və Core 2 tələblərinə əsaslanan biliklərim var, o cümlədən kompüter avadanlığı, Windows əməliyyat sistemləri, şəbəkə əsasları, nasazlıqların aradan qaldırılması və Help Desk dəstəyi. PuTTY vasitəsilə əmr sətri interfeysi ilə şəbəkə açarlarının konfiqurasiyası və idarə edilməsi ilə tanışam, həmçinin açar konfiqurasiyası, VLAN-lar və şəbəkə bağlantısı haqqında əsas anlayışa malikəm.\nTexnologiyaya həvəslə yanaşıram, texniki problemləri həll etməyi sevirəm və həm frontend inkişafında, həm də İT dəstəyində bacarıqlarımı genişləndirmək və praktiki təcrübə qazanmaq üçün daim fürsətlər axtarıram. Davamlı öyrənmənin İT sənayesində vacib olduğuna inanıram. Şəxsi layihələr qurmaqla, müasir texnologiyaları öyrənməklə və yeni alətləri, ən yaxşı praktikaları araşdıraraq biliklərimi mütəmadi olaraq artırıram. Sistemlərin necə işlədiyini öyrənməyi, texniki çətinlikləri həll etməyi və real problemlərə səmərəli həllər tapmağı sevirəm.\nMəqsədim İT sənayesində uğurlu karyera qurmaq, texniki biliklərimi tətbiq etmək, bacarıqlarımı inkişaf etdirməyə davam etmək və mənalı layihələrə töhfə verməkdir.",

    "skills.title": "Bacarıqlar",
    "skills.troubleshooting": "Nasazlıqların aradan qaldırılması",
    "skills.hwsw": "Avadanlıq və Proqram Təminatının Quraşdırılması",

    "projects.title": "Layihələr",

    "project1.title": "Movie Tracker",
    "project1.desc": "TMDB API əsasında hazırlanmış qabaqcıl film axtarış tətbiqi. İstifadəçilər filmləri axtara, reytinqlər, janrlar və süjet təsvirləri daxil olmaqla ətraflı məlumatları araşdıra və rəsmi treylerlərə baxa bilərlər.",

    "project2.title": "Notepad",
    "project2.desc": "İstifadəçilərə qeydləri asanlıqla yaratmağa, redaktə etməyə, sabitləməyə və silməyə imkan verən müasir qeyd tətbiqi. Tətbiq şəxsi qeydlərin təşkili və vacib məlumatlara sürətli çıxış üçün intuitiv və adaptiv interfeys təqdim edir.",

    "project3.title": "Registration/Login",
    "project3.desc": "Local Storage əsasında işləyən qeydiyyat və giriş funksiyalı adaptiv istifadəçi autentifikasiya sistemi. Tətbiq form validasiyası, yanlış simvolların girişinin məhdudlaşdırılması, təhlükəsiz məlumat yoxlanışı və istifadəçi dostu xəta idarəetməsini əhatə edir.",

    "project4.title": "ABB Web-Site",
    "project4.desc": "HTML və CSS ilə hazırlanmış, təmiz və adaptiv dizaynlı müasir bank sayt.",

    "project5.title": "Code Academy Web-Site",
    "project5.desc": "HTML və Bootstrap ilə hazırlanmış, təmiz və adaptiv dizaynlı sayt.",

    "project6.title": "Mini-Shop (Hazırlanma mərhələsində)",
    "project6.desc": "Adminlərə mağazanı idarə etməyə, məhsul əlavə etməyə, redaktə etməyə və silməyə imkan verən admin paneli olan tam funksional onlayn mağaza, eyni zamanda istifadəçilərə Local Storage vasitəsilə qeydiyyat, giriş və rahat alış-veriş təcrübəsi təqdim edir.",

    "project.openBtn": "Layihəni Aç",

    "cv.title": "CV",
    "cv.btn": "CV-ni Yüklə",

    "contact.title": "Əlaqə",
    "contact.email": "Email: rauf.allahverdievv@mail.ru",
    "contact.phone": "Telefon: +994-70-203-43-05"
  }

};

function setLanguage(lang) {

  if (!translations[lang]) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {

    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];

    if (value) {
      el.textContent = value;
    }

  });

  document.documentElement.lang = lang;

  const label = document.getElementById("langLabel");
  if (label) {
    label.textContent = lang.toUpperCase();
  }

  document.querySelectorAll("#langMenu button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);

  closeLangMenu();

}

function toggleLangMenu(event) {

  event.stopPropagation();

  const menu = document.getElementById("langMenu");
  const btn = document.getElementById("langBtn");

  const isOpen = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");

}

function closeLangMenu() {

  const menu = document.getElementById("langMenu");
  const btn = document.getElementById("langBtn");

  if (menu) menu.classList.remove("open");
  if (btn) btn.setAttribute("aria-expanded", "false");

}

document.addEventListener("click", (event) => {

  const switcher = document.getElementById("langSwitch");

  if (switcher && !switcher.contains(event.target)) {
    closeLangMenu();
  }

});

// =========================
// 🚀 PAGE LOAD
// =========================

window.addEventListener("load", () => {

  const saved =
    localStorage.getItem("theme");

  const toggle =
    document.getElementById("themeToggle");

  if (saved === "dark") {

    document.body.classList.add("dark");

    if (toggle) {
      toggle.checked = true;
    }

  }

  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

});

// =========================
// ✨ SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver(
(entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

},
{
  threshold: 0.15
});

document.querySelectorAll(
  ".card, .project-card"
).forEach(el => {
  observer.observe(el);
});
