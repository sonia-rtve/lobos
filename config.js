var config = {
    style: 'mapbox://styles/sonia-mapbox/cmctavaq803cl01s19hnc606j',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoic29uaWEtbWFwYm94IiwiYSI6ImNtY2c4MG5hZjBleW0ybXF1NTloZzczcnEifQ.tjasole-HuuTPi-3K338mw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'El lobo (Canis Lupus)',
    subtitle: 'Población y distribución de la especia en España',
    byline: 'Sonia Agudo',
    footer: 'Fuentes: source citations, etc. <br> Creado con la plantilla <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    chapters: [
        
        {
            id: 'intro1',
            alignment: 'left',
            hidden: false,
            title: 'En nuestro imaginario colectivo: el lobo Feroz',
            image: 'https://cdn.essentiels.bnf.fr/media/images/cache/cache/rc/w1N3eiSE/uploads/media/image/20201205085604000000_dor_225.jpg',
            description: 'Cuando leemos o oímos la palabra <i>lobo</i> puede que nos venga a la mente la imagen de un animal peligroso, como el que aparece en el cuento de <i>Caperucita Roja</i> (Charles Perrault, <i>Cuentos de antaño</i>, 1697) o en el de <i>Pedro y el Lobo</i> (Serguéi Prokófiev, 1936).<br/><br/> <i>Caperucita Roja</i> (grabado de Gustave Doré, 1862) <br/>(Fuente: <a href="https://es.wikipedia.org/wiki/Caperucita_Roja" target="_blank">Wikipedia</a>)',
            location: {
                center: [4.95523, 45.09993],
                zoom: 6.62,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro2',
            alignment: 'left',
            hidden: false,
            title: 'En nuestro imaginario colectivo: la loba Luperca',
            image: 'https://content-historia.nationalgeographic.com.es/medio/2023/01/13/romulo-y-remo-cuadro-pintado-por-peter-paul-rubens-en-el-ano-1615-o-1616-museos-capitolinos-roma_d8da464c_230113102828_800x803.jpg',
            description: 'Pero también puede que nos venga a la mente la imagen de la loba Luperca que amamantó a los hermanos gemelos Rómulo y Remo, salvándoles de una muerte segura, y permitiendo que años más tarde, según el mito romano, Rómulo fundara la ciudad de Roma.<br/><br/> <i>Rómulo y Remo</i>, Rubens (Museos Capitolinos, Roma) <br/> (Fuente: <a href="https://es.wikipedia.org/wiki/R%C3%B3mulo_y_Remo" target="_blank">Wikipedia</a>)',
            location: {
                center: [11.28624, 41.96514],
                zoom: 6.62,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro3',
            alignment: 'left',
            hidden: false,
            title: 'En nuestro imaginario colectivo: un animal tótem',
            image: '',
            description: '<p align="center"><iframe width="283" height="496" src="assets/bailando-con-lobos.mp4" title="Bailando con Lobos" frameborder="0" allowfullscreen></iframe></p>Y si viajamos con la mente hasta Estados Unidos, puede que esa palabra nos evoque un animal respetado por muchos pueblos nativos de América, como por ejemplo los pueblos Lakota y Pawnee. <br/><br/> (Fuente: <a href="https://en.wikipedia.org/wiki/Wolves_in_folklore,_religion_and_mythology" target="_blank">Wikipedia)</a>',
            location: {
                center: [-101.63967, 38.99694],
                zoom: 4.54,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro4',
            alignment: 'left',
            hidden: false,
            title: 'El lobo, un animal fundamental',        
            image: 'https://www.miteco.gob.es/content/dam/miteco/es/prensa/2025062_Censo%20lobo.jpg',
            description: 'En todo caso, y pese a despertar sentimientos contradictorios, el lobo es un animal clave en el equilibrio de los ecosistemas y en la reducción de las enfermedades que pueden transmitirse de los animales a los humanos (enfermedades zoonóticas). <br/><br/> 1)&nbsp;<u>Equilibrio de los ecosistemas</u> <br/>Según el biólogo de la Estación Biológica de Doñana del Centro Superior de Investigaciones Científicas (CSIC), Alberto Fernández Gil, si el lobo desapareciese de los ecosistemas españoles, las poblaciones de ungulados crecerían desproporcionadamente, aumentando la presión sobre la vegetación, pudiendo provocar la desertificación de un territorio. <br/><br/> 2)&nbsp;<u>Enfermedades zoonóticas</u> <br/>Según Yolanda Cortés, responsable del Programa de Especies de WWF, el lobo puede sin duda contribuir a reducir el riesgo de pandemias, ya que depreda a los animales enfermos.<br/><br/>&#x21d2; Lobo ibérico (Fuente: <a href="https://www.miteco.gob.es/es/prensa/ultimas-noticias/2025/junio/el-censo-nacional-del-lobo-2021-2024-arroja-una-cifra-total-de-3.html" target="_blank">Ministerio de la transición ecológica</a>) <br/>&#x21d2; El lobo, un <i>sanitario</i> de la naturaliza (Fuente: <a href="https://efeverde.com/lobo-sanitario-naturaleza/" target="_blank">EFE:Verde)</a><br/>&#x21d2; Pérdida de naturaleza y pandemias (Fuente: <a href="https://www.wwf.es/?54120/Perdida-de-naturaleza-y-pandemias-Un-planeta-sano-por-la-salud-de-la-humanidad" target="_blank">WWF</a>)',
            location: {
                center: [-8.64987, 40.36586],
                zoom: 5.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro5',
            alignment: 'left',
            hidden: false,
            title: 'Censo nacional',        
            image: '',
            description: 'En el censo nacional de 2021-2024 se registraron 333 manadas en toda España: 296 manadas exclusivas* y 37 manadas compartidas* contabilizadas una sola vez. Es decir, 36 manadas más con respecto al censo anterior de 2012-2014, en el que 297 manadas fueron registradas: 278 manadas exclusivas* y 19 manadas compartidas* contabilizadas una sola vez.<br/><br/><i>Metodología</i><br/>Los censos se han desarrollado a través de la metodología acordada por el Grupo de Trabajo del Lobo, permitiendo la comparación de los datos.<br/><br/><iframe src="https://flo.uri.sh/visualisation/24052947/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:315px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe> <br/>&#x21d2; Ver mapa en <a href="https://public.flourish.studio/visualisation/24052947/" target="_blank">Flourish</a><br/><br/><iframe src="https://flo.uri.sh/visualisation/24181291/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:315px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><br/>&#x21d2; Ver mapa en <a href="https://public.flourish.studio/visualisation/24181291/" target="_blank">Flourish</a> <br/><br/><i>*Manada exclusiva</i>: manada cuyo territorio se distribuye en una única comunidad autónoma.<br/><i>*Manada compartida</i>: manada que comparte territorio con más de una comunidad autónoma.',
            location: {
                center: [-8.64987, 40.36586],
                zoom: 5.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Castilla y León',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/24230926/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:180px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><br/><br/>En el censo de 2021-2024, con respecto al censo de 2012-2014, se registró  en Castilla y León una disminución de 3 manadas exclusivas y un aumento de 17 manadas compartidas. Estos datos podrían indicar que las 3 manadas exclusivas no registradas en el censo de 2021-2024 han extendido o desplazado su territorio hacia otras comunidades autónomas.',
            location: {
                center: [-5.07667, 41.80270],
                zoom: 8.19,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Galicia',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/24231277/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:180px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><br/><br/>En el censo de 2021-2024, con respecto al censo de 2012-2014, se registró en Galicia un incremento de 6 manadas exclusivas (+7,8%) y 3 manadas compartidas (+42,8%); lo que podría sugerir que Galicia es un territorio atractivo para el lobo, con una población asentada en la comunidad, y en crecimiento.',
            location: {
                center: [-8.82253, 42.77765],
                zoom: 7.89,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Asturias',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/24231484/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:180px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe> <br/><br/> En el censo de 2021-2024, con respecto al censo de 2012-2014, se registró en Asturias un incremento de 5 manadas exclusivas (+17,8%) y 3 manadas compartidas (+33,3%); lo que podría sugerir que Asturias es un territorio muy atractivo para el lobo.',
            location: {
                center: [-6.57303, 43.39344],
                zoom: 8.65,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Cantabria',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/24231577/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:180px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe> <br/><br/> En Cantabria, las poblaciones de lobos, tanto las poblaciones exclusivas como las poblaciones compartidas, se han incrementado respectivamente en un 75% y en un 125%. Estos datos podrían señalar que el lobo se está asentando en Cantabria.',
            location: {
                center: [-4.064941, 43.052834],
                zoom: 8.95,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'País Vasco',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/24231638/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:180px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><br/><br/>El País Vasco no tiene manadas exclusivas. Las 2 manadas registradas en el censo de 2021-2024 necesitan desplazarse a otras comunidades para satisfacer sus necesidades.',
            location: {
                center: [-2.592773, 42.98054],
                zoom: 8.95,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'La Rioja',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/24231857/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:180px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><br/><br/>En los 12 años que abarcan los censos de 2012-2014 y 2021-2024, sólo una manada se ha establecido en La Rioja.',
            location: {
                center: [-2.70392, 42.30350],
                zoom: 8.65,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Madrid',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/24231926/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:180px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe>Según el censo de 2021-2024, y con respecto al censo de 2012-2014, 2 nuevas manadas se han estabecido en Madrid.',
            location: {
                center: [-4.42853, 40.70362],
                zoom: 8.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Castilla La Mancha',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/24231991/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:180px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><br/><br/>Según el censo de 2021-2024, una nueva manada se ha establecido en Castilla la Mancha.',
            location: {
                center: [-2.26198, 40.50159],
                zoom: 8.82,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nineth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Extremadura',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/24232039/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:180px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><br/><br/>En Extremadura sólo se ha registrado una manada que comparte territorio con otras comunidades. Posiblemente con Castilla y León y/o Castilla-la Mancha, comunidades limítrofes con Extremadura.',
            location: {
                center: [-6.28446, 39.62730],
                zoom: 7.79,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'final-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Conclusión',
            image: 'https://www.miteco.gob.es/es/prensa/ultimas-noticias/2025/junio/el-censo-nacional-del-lobo-2021-2024-arroja-una-cifra-total-de-3/_jcr_content/root/container/container-main/container-content/image.coreimg.png/1751019813360/imagen11111.png',
            description: 'El aumento poblacional de la especie (12% con respecto al censo anterior de 2012-2014) se considera moderado. También su expansión territorial, ya que sus efectivos se mantienen en las áreas de distribución históricas: Castilla y León, Galicia y Asturias.<br/>Es importante destacar que el periodo de censo ha coincidido con un momento en el que la especie ha disfrutado de protección especial en toda España, lo que sin duda ha contribuido a la mejora poblacional observada.<br/><br/>Desgraciadamente, el cambio normativo reciente ha propiciado que las comunidades autónomas hayan anunciado su intención de reanudar la caza del lobo.<br/><br/>Teniendo en cuenta que los científicos consideran que 500 manadas son necesarias para asegurar la estabilidad genética de la especie a largo plazo, parece necesario volver a incluir el lobo en el Listado de Especies Silvestres en Régimen de Protección Especial (LESPRE).<br/><br/><b>Comisión Europea</b><br/>Los datos de este censo serán incluídos en el informe sexenal que el Gobierno debe remitir a la Comisión Europea el 31 de julio de 2025, y servirán para establecer si el estado de conservación de la especie es favorable o desfavorable, de acuerdo con los criterios fijados por la Unión Europea.<br/><br/>(Fuente: <a href="https://www.miteco.gob.es/es/prensa/ultimas-noticias/2025/junio/el-censo-nacional-del-lobo-2021-2024-arroja-una-cifra-total-de-3.html" target="_blank">Ministerio de la transición ecológica</a>)',
            location: {
                center: [-8.64987, 40.36586],
                zoom: 5.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
        ,
        {
            id: 'final-chapter',
            alignment: 'left',
            hidden: false,
            title: '¡Última hora!',
            image: 'https://img.europapress.es/fotoweb/fotonoticia_20250718103650_690.jpg',
            description: 'Tras recibir el 17 de julio de 2025 una petición de suspensión de convocatoria por parte de asociaciones que presentaron quejas ante el Defensor del Pueblo —motivando a la institución a presentar un recurso de inconstitucionalidad contra las disposiciones* de la Ley de Prevención de las pérdidas y el desperdicio alimentario, que en la práctica permiten la caza del lobo—, Transición Ecológica ha desconvocado la Comisión y la Conferencia Sectorial donde debían ser debatidos y aprobados los informes sexenales antes de ser remitidos a la Comisión Europea.<br/><br/>*Las disposiciones de la Ley de Prevención de las pérdidas y el desperdicio alimentario incluyen la disposición que se refiere al procedimiento de aprobación del informe sexenal.<br/><br/>(Fuente: <a href="https://www.europapress.es/sociedad/noticia-miteco-desconvoca-comision-sectorial-donde-iba-debatir-informe-sexenal-lobo-20250718103650.html" target="_blank">Europa Press</a>)',
            location: {
                center: [-8.64987, 40.36586],
                zoom: 5.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
