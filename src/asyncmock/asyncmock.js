const Breed = [
    {
        id: 1,
        name: "Affenpinscher",
        weight: "14",
        height: "23",
        image: "https://lucasylola.es/blog/wp-content/uploads/2019/04/affenpinscher-1-min.jpg"
    },
    {
        id: 2,
        name: "Sabueso Afgano",
        weight: "29",
        height: "64",
        image: "https://espree.com/sites/default/files/2019-10/AfghanHound.png"
    },
    {
        id: 3,
        name: "Licaón",
        weight: "29",
        height: "76",
        image: "https://reidparkzoo.org/wp-content/uploads/2020/11/African-Wild-Dogs-square-scaled.jpg"
    },
    {
        id: 4,
        name: "Airedale Terrier",
        weight: "29",
        height: "61",
        image: "https://www.asociacioncanina.org/razasestandaired01.jpg"
    },
    {
        id: 5,
        name: "Akita",
        weight: "29",
        height: "65",
        image: "https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2023-05image-text-component-akita-1_0.jpg?itok=frUNw7ru"
    },
    {
        id: 6,
        name: "Doberman",
        weight: "40",
        height: "68",
        image: "https://espree.com/sites/default/files/2019-10/DobermanPinscher.png"
    },
    {
        id: 7,
        name: "Bulldog Americano",
        weight: "54",
        height: "56",
        image: "https://i.pinimg.com/originals/08/08/6f/08086fff5ac7aedca9599a6c0bd4445f.jpg"
    },
    {
        id: 8,
        name: "Bully Americano",
        weight: "14",
        height: "43",
        image: "https://t2.uc.ltmcdn.com/es/posts/4/6/7/el_pelaje_39764_2_600.jpg"
    },
    {
        id: 9,
        name: "Bull Terrier",
        weight: "14",
        height: "35",
        image: "https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Bull20Terrier20Miniature2.jpg?itok=eJ33OuME"
    },
    {
        id: 10,
        name: "Rottweiler",
        weight: "50",
        height: "61",
        image: "https://www.bunko.pet/__export/1678209236649/sites/debate/img/2023/03/07/nombres-perros-rottweiler.jpg_423682103.jpg"
    },
    {
        id: 11,
        name: "Water Spaniel",
        weight: "11",
        height: "38",
        image: "https://breed-assets.wisdompanel.com/dog/irish-water-spaniel/Irish_Water_Spaniel1.png"
    },
    {
        id: 12,
        name: "Pastor de Anatolia",
        weight: "36",
        height: "69",
        image: "https://fordogtrainers.es/images/razas-de-perros/P/perro_de_raza_Pastor_de_Anatolia.jpg"
    },
    {
        id: 13,
        name: "Dogo Argentino",
        weight: "36",
        height: "60",
        image: "https://scontent.fmdz7-1.fna.fbcdn.net/v/t39.30808-6/305653999_473483691490926_3246988577886747357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=8wvj7LT_kNkQ7kNvgE-Lmd5&_nc_ht=scontent.fmdz7-1.fna&oh=00_AYDWag2rfpmqqJ2GIEu_QjKBsXBc9swkHrmScgDcde1_TQ&oe=66AD6746"
    },
    {
        id: 14,
        name: "Gran Danés",
        weight: "68",
        height: "71",
        image: "https://erch2014.com/images/dom-i-semya/datskij-dog-luchshij-drug-cheloveka.jpg"
    },
    {
        id: 15,
        name: "San Bernardo",
        weight: "82",
        height: "65",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Rey_nieve.jpg"
    },
    {
        id: 16,
        name: "Beagle",
        weight: "9",
        height: "33",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXsoSG8hFPTaAhk4i69Tj0zd5ARyreueUxg&s"
    },
    {
        id: 17,
        name: "Pastor Alemán",
        weight: "40",
        height: "55",
        image: "https://lirp.cdn-website.com/2e9ff875/dms3rep/multi/opt/pastor+aleman+en+venta+pic+40-360w.jpg"
    },
    {
        id: 18,
        name: "Dalmata",
        weight: "25",
        height: "48",
        image: "https://lucasylola.es/blog/wp-content/uploads/2021/01/dalmata-14.jpg"
    },
   
    {
        id: 19,
        name: "Cocker Spaniel",
        weight: "9",
        height: "36",
        image: "https://pcdn.bellfordev.pro/image/cache/catalog/Blog/Blog-Pictures/cocker-spaniel-w690-h690.jpg"
    },
    {
        id: 20,
        name: "Pug",
        weight: "6",
        height: "25",
        image: "https://www.orchardroadanimalhospital.com/sites/default/files/styles/large/public/pug-dog-breed-info.jpg?itok=U-h35_8o"
    },
    {
        id: 21,
        name: "Poodle",
        weight: "20",
        height: "45",
        image: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-09/Poodle%20standard.jpg?h=aeae8ad0&itok=b5-byouI"
    },
    {
        id: 22,
        name: "Chihuahua",
        weight: "1",
        height: "15",
        image: "https://www.rover.com/blog/wp-content/uploads/2019/09/Chihuahua-min-1.jpg"
    },
    {
        id: 23,
        name: "Husky Siberiano",
        weight: "20",
        height: "51",
        image: "https://www.pdsa.org.uk/media/7892/husky-gallery-outdoors-1-min.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132179622120000000"
    },
    {
        id: 24,
        name: "Labrador Retriever",
        weight: "30",
        height: "55",
        image: "https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09labrador20retriever.jpg?itok=VVWHGD7o"
    }
];
