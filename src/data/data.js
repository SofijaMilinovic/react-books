export const genres = {
    genre1: 'Popular psihology',
    genre2: 'Romane',
    genre3: 'Kids',
    genre4: 'Action',
};

export const books = [
    {
        id: 1,
        title: 'Znakovi pored puta',
        author: 'Ivo Andrić',
        price: 10,
        genre: genres.genre2,
        image: 'znakovi-pored-puta.png',
    },
    {
        id: 2,
        title: 'Na Drini ćuprija',
        author: 'Ivo Andrić',
        price: 12,
        genre: genres.genre2,
        image: 'na-drini-cuprija.png',
    },
    {
        id: 3,
        title: 'Zato što te volim',
        author: 'Gijom Muso',
        price: 4,
        genre: genres.genre2,
        image: 'zato-sto-te-volim.png',
    },
    {
        id: 4,
        title: 'Kako bih bez tebe',
        author: 'Gijom Muso',
        price: 4,
        genre: genres.genre2,
        image: 'kako-bih-bez-tebe.png',
    },
    {
        id: 5,
        title: 'Uspavana lepotica',
        author: 'Kejt Najton',
        price: 3,
        genre: genres.genre3,
        image: 'uspavana-lepotica.png',
    },

    {
        id: 6,
        title: 'Mali princ',
        author: 'Anton de Sent Egziperi',
        price: 6,
        genre: genres.genre3,
        image: 'mali-princ.png',
    },
    {
        id: 7,
        title: 'Pop Ćira i pop spira',
        author: 'Stevan Sremac',
        price: 5,
        genre: genres.genre3,
        image: 'pop-cira-pop-spira.png',
    },
    {
        id: 8,
        title: 'Kalimero i školska priredba',
        author: 'Kalimero',
        price: 3,
        genre: genres.genre3,
        image: 'kalimero.png',
    },
    {
        id: 9,
        title: 'Verujte životu',
        author: 'Lujza Hej',
        price: 7,
        genre: genres.genre1,
        image: 'verujte-zivotu.png',
    },
   
    {
        id: 10,
        title: 'Kako da izlečite svoj život',
        author: 'Lujza Hej',
        price: 11,
        genre: genres.genre4,
        image: 'kako-da-izlecite.png',
    },
   
    {
        id: 11,
        title: 'Razgovori s Bogom 2',
        author: 'Nil Donald Volš',
        price: 9,
        genre: genres.genre4,
        image: 'razgovori-s-bogom-2.png',
    },
   
    {
        id: 12,
        title: 'Razgovori s Bogom 1',
        author: 'Nil Donald Volš',
        price: 12,
        genre: genres.genre1,
        image: 'razgovori-s-bogom-1.png',
    },
   
    {
        id: 13,
        title: 'Razgovori s Bogom 3',
        author: 'Nil Donald Volš',
        price: 14,
        genre: genres.genre1,
        image: 'razgovori-s-bogom-3.png',
    },
   
    {
        id: 14,
        title: 'Safari duha',
        author: 'Nada Bučević',
        price: 22,
        genre: genres.genre3,
        image: 'safari-duha.png',
    },
   
    {
        id: 15,
        title: 'Svesno majčinstvo',
        author: 'Nada Bučević',
        price: 15,
        genre: genres.genre1,
        image: 'svesno-majcinstvo.png',
    },
   
    {
        id: 16,
        title: 'Zona Zamfirova',
        author: 'Stevan Sremac',
        price: 8,
        genre: genres.genre2,
        image: 'zona-zamfirova.png',
    },
   
    {
        id: 17,
        title: 'Zov andjela',
        author: 'Gijom Muso',
        price: 8,
        genre: genres.genre4,
        image: 'zov-andjela.png',
    },

];

export const bookImagesPath = '/bookImages';

export const bookPriceLimits = {
    lower: 0,
    upper: 10000
};
  
export default {
    genres,
    books,
    bookImagesPath,
    bookPriceLimits,
}
