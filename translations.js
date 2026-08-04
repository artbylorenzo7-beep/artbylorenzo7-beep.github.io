const translations={
 en:{atelier:"Atelier",gallery:"Gallery",artist:"Artist",vision:"Vision",journal:"Journal",title:"Bashar's Atelier",subtitle:"A sanctuary of paintings, stories, and timeless artistic exploration.",button:"Enter the Collection"},
 ar:{atelier:"المرسم",gallery:"المعرض",artist:"الفنان",vision:"الرؤية",journal:"المذكرات",title:"مرسم بشار",subtitle:"ملاذ للوحات والقصص والاستكشاف الفني الخالد.",button:"ادخل إلى المجموعة"},
 de:{atelier:"Atelier",gallery:"Galerie",artist:"Künstler",vision:"Vision",journal:"Tagebuch",title:"Bashars Atelier",subtitle:"Ein Zufluchtsort für Gemälde, Geschichten und zeitlose künstlerische Entdeckungen.",button:"Sammlung betreten"},
 it:{atelier:"Atelier",gallery:"Galleria",artist:"Artista",vision:"Visione",journal:"Diario",title:"Atelier di Bashar",subtitle:"Un santuario di dipinti, storie ed esplorazioni artistiche senza tempo.",button:"Entra nella collezione"},
 es:{atelier:"Atelier",gallery:"Galería",artist:"Artista",vision:"Visión",journal:"Diario",title:"Atelier de Bashar",subtitle:"Un santuario de pinturas, historias y exploración artística atemporal.",button:"Entrar a la colección"},
 fr:{atelier:"Atelier",gallery:"Galerie",artist:"Artiste",vision:"Vision",journal:"Journal",title:"L'Atelier de Bashar",subtitle:"Un sanctuaire de peintures, d'histoires et d'exploration artistique intemporelle.",button:"Entrer dans la collection"},
 ru:{atelier:"Ателье",gallery:"Галерея",artist:"Художник",vision:"Видение",journal:"Дневник",title:"Ателье Башара",subtitle:"Святилище картин, историй и вечного художественного поиска.",button:"Войти в коллекцию"},
 zh:{atelier:"工作室",gallery:"画廊",artist:"艺术家",vision:"理念",journal:"日志",title:"巴沙尔的工作室",subtitle:"一个收藏绘画、故事与永恒艺术探索的空间。",button:"进入收藏"},
 ja:{atelier:"アトリエ",gallery:"ギャラリー",artist:"アーティスト",vision:"理念",journal:"日誌",title:"バシャールのアトリエ",subtitle:"絵画、物語、そして時代を超えた芸術探求の聖域。",button:"コレクションへ"},
 nl:{atelier:"Atelier",gallery:"Galerij",artist:"Kunstenaar",vision:"Visie",journal:"Dagboek",title:"Bashar's Atelier",subtitle:"Een toevluchtsoord van schilderijen, verhalen en tijdloze artistieke verkenning.",button:"Betreed de collectie"},
 el:{atelier:"Ατελιέ",gallery:"Γκαλερί",artist:"Καλλιτέχνης",vision:"Όραμα",journal:"Ημερολόγιο",title:"Το Ατελιέ του Bashar",subtitle:"Ένα καταφύγιο ζωγραφικών έργων, ιστοριών και διαχρονικής καλλιτεχνικής εξερεύνησης.",button:"Είσοδος στη συλλογή"}
};
function setLanguage(lang){localStorage.setItem('basharLanguage',lang);location.reload();}
