export default [
    {
        id: 1,
        title: "20º Festival da Tainha",
        date: {
            inicio: "09/07",
            fim: "11/07"
        },
        areInterested: true,
        image: require('../assets/example_festa-da-tainha.jpg'),
        description: "A tradicional festa gastronômica celebra a tainha com pratos variados e atrações musicais. Local: Praça de Eventos do Porto Novo.",
        tags: ["Gastronômico", "Cultural", "Música"],
        organizer: {
            name: "Prefeitura Municipal",
            avatar: require('../assets/prefeitura.jpg')
        }
    },
    {
        id: 2,
        title: "Festival de Música Popular Brasileira",
        date: {
            inicio: "15/07",
            fim: "17/07"
        },
        areInterested: false,
        image: require('../assets/example_festa-da-tainha.jpg'),
        description: "Evento reúne talentos da MPB em apresentações ao ar livre no Centro de Eventos do Indaiá.",
        tags: ["Música", "Cultural"],
        organizer: {
            name: "Secretaria de Cultura",
            avatar: require('../assets/prefeitura.jpg')
        }
    },
    {
        id: 3,
        title: "Feira de Artesanato Caiçara",
        date: {
            inicio: "18/07",
            fim: "21/07"
        },
        areInterested: true,
        image: require('../assets/example_festa-da-tainha.jpg'),
        description: "Exposição e venda de peças artesanais feitas por artistas locais, com oficinas gratuitas.",
        tags: ["Cultural"],
        organizer: {
            name: "FUNDACC",
            avatar: require('../assets/prefeitura.jpg')
        }
    },
    {
        id: 4,
        title: "Encontro de Food Trucks",
        date: {
            inicio: "22/07",
            fim: "24/07"
        },
        areInterested: false,
        image: require('../assets/example_festa-da-tainha.jpg'),
        description: "Sabores diversos em um evento com música ao vivo e espaço kids. Local: Praça da Cultura.",
        tags: ["Gastronômico", "Música"],
        organizer: {
            name: "Secretaria de Turismo",
            avatar: require('../assets/prefeitura.jpg')
        }
    },
    {
        id: 5,
        title: "Corrida de Rua Caraguá 10K",
        date: {
            inicio: "27/07",
            fim: "27/07"
        },
        areInterested: true,
        image: require('../assets/example_festa-da-tainha.jpg'),
        description: "Prova esportiva com percurso pela orla da cidade. Inscrições abertas para todas as idades.",
        tags: ["Esporte"],
        organizer: {
            name: "Secretaria de Esportes",
            avatar: require('../assets/prefeitura.jpg')
        }
    },
    {
        id: 6,
        title: "Semana do Meio Ambiente",
        date: {
            inicio: "06/07",
            fim: "02/08"
        },
        areInterested: false,
        image: require('../assets/example_festa-da-tainha.jpg'),
        description: "Palestras, trilhas ecológicas e oficinas educativas em vários pontos da cidade.",
        tags: ["Ambiental", "Educacional"],
        organizer: {
            name: "Secretaria do Meio Ambiente",
            avatar: require('../assets/prefeitura.jpg')
        }
    },
    {
        id: 7,
        title: "Semana do Meio Ambiente",
        date: {
            inicio: "06/07",
            fim: "02/08"
        },
        areInterested: false,
        image: require('../assets/example_festa-da-tainha.jpg'),
        description: "Palestras, trilhas ecológicas e oficinas educativas em vários pontos da cidade.",
        tags: ["Ambiental", "Educacional"],
        organizer: {
            name: "Secretaria do Meio Ambiente",
            avatar: require('../assets/prefeitura.jpg')
        }
    },
]
