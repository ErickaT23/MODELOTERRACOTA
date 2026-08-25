const firebaseConfig = {
  apiKey: "AIzaSyAqOZQ5YFOdhL6dblHI5wIx10m6n4xt2Fg",
  authDomain: "buenosdeseos-twodesign.firebaseapp.com",
  databaseURL: "https://buenosdeseos-twodesign-default-rtdb.firebaseio.com",
  projectId: "buenosdeseos-twodesign",
  storageBucket: "buenosdeseos-twodesign.firebasestorage.app",
  messagingSenderId: "577908051871",
  appId: "1:577908051871:web:27fbd4e06b3d18da14b7aa"
};

const config = {
  event: {
    defaultEventId: "gabyjose2026",
    databaseURL: firebaseConfig.databaseURL,
    eventIdParam: "eventId",
    dateISO: "2026-11-14T16:00:00-06:00",
    legacyFallback: {
      read: false,
      write: false,
      subscribe: false
    }
  },
  admin: {
    adminKey: "twodesign123",
    keyParam: "key",
    legacyKeyParam: "admin"
  },
  seo: {
    titulo: "Gaby & Jose | 14.11.2026",
    descripcion: "Boda de Gaby y Jose - 14 de noviembre de 2026 en Antigua Guatemala",
    autor: "Two Design",
    keywords: "invitacion de boda, Gaby, Jose, boda, Antigua Guatemala, celebracion",
    ogImage: "Images/E2.png"
  },
  pareja: {
    nombres: "Gaby & Jose",
    portadaEtiqueta: "Nos casamos",
    novia: "Gaby",
    novio: "Jose",
    fecha: "14-11-2026",
    fechaVisible: "14.11.2026",
    fechaDestacada: "14 . 11 . 2026",
    cierreSubtitulo: "con amor"
  },
  ceremonia: {
    mensaje: "Uniremos nuestra vida en matrimonio con la bendición de Dios y de nuestros amados padres.",
    padresNoviaTitulo: "Padres de la Novia",
    padresNovia: "Roberto Carranza & Amalia de Carranza",
    padresNovioTitulo: "Padres del Novio",
    padresNovio: "Marco Antonio Garcia & Isabel de Garcia"
  },
  musica: {
    titulo: "Nuestra Canción",
    archivo: "music.mp3"
  },
  evento: {
    ceremonia: {
      titulo: "Ceremonia",
      lugar: "San Francisco el Grande",
      hora: "4:00 PM",
      direccion: "7a Calle Oriente y Calle de los Pasos, La Antigua Guatemala",
      ubicacionUrl: "https://www.google.com/maps/search/?api=1&query=San+Francisco+el+Grande%2C+7a+Calle+Oriente+y+Calle+de+los+Pasos%2C+La+Antigua+Guatemala"
    },
    recepcion: {
      titulo: "Recepción",
      lugar: "Conceptio",
      hora: "6:00 PM",
      direccion: "Antigua Guatemala",
      ubicacionUrl: "https://maps.app.goo.gl/Xsf621ZbtQx2e2rM8"
    },
    calendario: {
      detalle: "Nos encantará compartir este día contigo.",
      ubicacion: "San Francisco el Grande, La Antigua Guatemala"
    }
  },
  itinerario: {
    titulo: "Itinerario",
    items: [
      { icono: "Images/ICONO-1.png", alt: "Ceremonia", hora: "4:00 PM", texto: "Ceremonia" },
      { icono: "Images/ICONO-2.png", alt: "Ingreso de los esposos", hora: "6:00 PM", texto: "Ingreso de los esposos a la recepción" },
      { icono: "Images/ICONO-3.png", alt: "Brindis", hora: "6:30 PM", texto: "Brindis" },
      { icono: "Images/ICONO-4.png", alt: "Servicio de cena", hora: "7:00 PM", texto: "Servicio de cena" },
      { icono: "Images/ICONO-5.png", alt: "Inicio de la fiesta", hora: "8:00 PM", texto: "Inicio de la fiesta" },
      { icono: "Images/ICONO-6.png", alt: "Despedida de los novios", hora: "11:00 PM", texto: "Despedida de los novios" }
    ]
  },
  dressCode: {
    titulo: "Dress Code",
    subtitulo: "Traje formal y de gala",
    descripcion: "Los colores blanco, dorado, zapote y corinto quedan exclusivamente reservados para la novia y su corte. Nuestra boda será en un jardín y al aire libre, por lo que no olvides abrigarte bien y llevar zapatos cómodos.",
    coloresReservados: [
      { nombre: "Blanco", color: "#FFFFFF" },
      { nombre: "Dorado", color: "#D4AF37" },
      { nombre: "Zapote", color: "#DD6E42" },
      { nombre: "Corinto", color: "#66023C" }
    ]
  },
  regalo: {
    titulo: "Regalo",
    descripcion: "Nuestra mayor alegría es contar con tu compañía. Si deseas tener un detalle con nosotros, agradeceremos con mucho cariño tu obsequio en nuestra lluvia de sobres.",
    transferencia: {
      titular: "",
      medio: "",
      cuenta: "",
      tipo: ""
    }
  },
  textos: {
    mensajeInvitado: "Para nosotros será un privilegio compartir contigo un momento tan especial.",
    mensajePases: "Hemos reservado {pases} lugares en su honor",
    fechaLabel: "Nuestro gran día"
  },
  deseos: {
    titulo: "Buenos deseos",
    intro: "Déjanos un mensaje especial para este día tan importante."
  },
  adultos: {
    titulo: "Solo adultos",
    descripcion: "",
    mostrar: false
  },
  rsvp: {
    titulo: "Confirmar Asistencia",
    mensaje: "Para nosotros es muy importante que confirmes tu asistencia lo antes posible, o bien indicarnos si no podrás acompañarnos."
  },
  galeria: {
    portadaPrincipal: "Images/E2.png",
    historia: ["Images/S1.png", "Images/S2.png"],
    celebracion: ["Images/C1.png", "Images/C2.png"],
    pareja: ["Images/F1.png", "Images/F2.png"]
  },
  footer: {
    hashtag: "#GabyYJose",
    instagramUrl: "https://www.instagram.com/thetwodesign",
    facebookUrl: "https://www.facebook.com/thetwodesign",
    marcaTexto: "Diseño",
    marcaNombre: "Two Design",
    marcaUrl: "https://twodesign.com"
  }
};

window.config = config;
window.firebaseConfig = firebaseConfig;
