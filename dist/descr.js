import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
// Lista de instrumentos detalhes
const instrumentos = [
    {
        idInstrumento: 1,
        nome: 'Violão Yamaha C40',
        preco: 888.00,
        tipo: 'Violão',
        descricao: 'O Violão Yamaha C40MII é um instrumento com modelo Clássico com uma ótima caixa de ressonância, tornam este Instrumento perfeito para músicos que buscam um Violão para tocar em casa, no churrasco com os amigos, para estudo e iniciação no Violão. Constituído com tampo em Spruce, lateral e fundo em Meranti, este modelo proporciona excelente tocabilidade e timbre perfeito. A história da Yamaha começou por volta do ano de 1887 pelo fundador Torakusu Yamaha, iniciando a produção de instrumentos ocidentais no Japão. O primeiro instrumento foi um órgão de bambu do Japão, e consequentemente a inspiração veio de forma natural para a criação de outros instrumentos. Atualmente, a marca é uma das maiores fabricantes de instrumentos musicais do mundo, buscando entregar qualidade e inspirar cada vez mais as pessoas a se apaixonar pelo mundo da música.',
        especificacoes: 'Tipo de Corda e Formato do Corpo: Nylon (Clássico/Espanhol, sem cutaway); Principal Configuração Eletrônica (Captação/Pré): Acústico Puro (Sem sistema elétrico/captador); Material do Tampo (Top): Abeto Laminado (Spruce); Comprimento de Escala / Orientação: 650 mm (Padrão Clássico Mão Destra); Material da Escala: Rosewood (Jacarandá).',
        imagem: [
            'src/Imagens/produtos/Violão/Violão Yamaha C40-1.jpg',
            'src/Imagens/produtos/Violão/Violão Yamaha C40-2.jpg',
            'src/Imagens/produtos/Violão/Violão Yamaha C40-3.jpg'
        ]
    },
    {
        idInstrumento: 2,
        nome: 'Violão Tagima Kansas',
        preco: 1439.00,
        tipo: 'Violão',
        descricao: 'Violão Tagima Kansas NT estilo Folk. Eletro Acústico com Cutaway. Pré Tagima TEQ-8, ativo de 5 bandas e afinador. Disponível na cor Natural. Marcio Zaganin o maior Luthier do Brasil e entre os melhores do mundo, é o atual responsável pela produção e desenvolvimento de novos produtos e controle total de qualidade dos instrumentos Tagima. Seja de instrumentos fabricados no Brasil ou dos produtos cuidadosamente desenvolvidos na empresa e fabricados no mais alto padrão de controle de qualidade no exterior. A fabricação desses produtos em outros países é rigorosamente acompanhada de perto por representantes técnicos da empresa, e muitas vezes pelo próprio Márcio.',
        especificacoes: 'Tipo de Corda e Formato do Corpo: Aço (Folk Dreadnought, sem cutaway, eletro-acústico); Principal Configuração Eletrônica (Captação/Pré): Pré Tagima TEQ-5 (Ativo, 5 bandas e afinador); Material do Tampo (Top): Mahogany (Mogno); Comprimento de Escala / Orientação: 25.5” (Padrão Folk/Strat, Mão Destra); Material da Escala: Rosewood (Jacarandá).',
        imagem: [
            'src/Imagens/produtos/Violão/Violão Tagima Kansas-1.jpg',
            'src/Imagens/produtos/Violão/Violão Tagima Kansas-2.jpg',
            'src/Imagens/produtos/Violão/Violão Tagima Kansas-3.jpg'
        ]
    },
    {
        idInstrumento: 3,
        nome: 'Violão Gianinni GF-1D CE',
        preco: 690.54,
        tipo: 'Violão',
        descricao: 'Uma de nossas campeãs de vendas, e muito querida pelo público exatamente por sua versatilidade, a série Performance apresenta ampla variedade de modelos, para todos os gostos, necessidades e estilos. Reúne formatos consagrados como Dreadnought, Grand Auditorium, Mini-Jumbo e Flat, e madeiras como Spruce, Sapele, Agathis e Zebra Wood, para violões com cordas de aço e náilon. Pré-amplificações exclusivas Giannini (GN-3T e GS-3T), acabamento fosco/brilhante e uma extensa gama de cores e tamanhos complementam essa linha tão abrangente. Diversificação aliada à qualidade – aqui, é impossível não encontrar o que você procura!',
        especificacoes: 'Tipo de Corda e Formato do Corpo: Aço (Folk Dreadnought com Cutaway, eletro-acústico); Principal Configuração Eletrônica (Captação/Pré): Equalizador Giannini GN-3T (Ativo, 3 bandas e afinador); Material do Tampo (Top): Agathis (Agathis); Comprimento de Escala / Orientação: 648 mm (25.5”) (Padrão Folk, Mão Destra); Material da Escala: Techwood (Madeira tecnológica).',
        imagem: [
            'src/Imagens/produtos/Violão/Violão Gianinni GF-1D-1.jpg',
            'src/Imagens/produtos/Violão/Violão Gianinni GF-1D-2.jpg',
            'src/Imagens/produtos/Violão/Violão Gianinni GF-1D-3.jpg'
        ]
    },
    {
        idInstrumento: 4,
        nome: 'Violão Elétrico Michael Galaxy Folk Vm925dtc',
        preco: 1181.00,
        tipo: 'Violão',
        descricao: 'O violão elétrico Michael Galaxy VM925DTC, de cordas em aço, combina alto padrão sonoro e beleza! É um folk cutaway construído com madeiras nobres (Spruce e/ou Mahogany) e que se destaca também pelo lindo visual, com detalhes refinados, como o escudo flower, os marcadores de escala em madrepérola, os filetes múltiplos ABS e as opções de cores foscas e brilhantes. Oferece ainda equalizador de 4 bandas (com afinador), saída XLR/P10 e captação Piezo! Compre o VM925DTC e mostre toda sua personalidade musical O Michael VM925DTC é composto com madeiras diferenciadas, com destaque para as opções de tampos em Spruce ou Mahogany, que já vêm com tratamento especial para dar mais projeção e equilíbrio ao timbre. O violão Galaxy Michael possui tensor Dual Action, recurso que regula a curvatura do braço, deixando-o retilíneo, garantindo uma pegada precisa e confortável. É um violão de visual arrebatador! Detalhes como os filetes ABS, o escudo do tipo "Flower Decorado”, o cavalete e headstock com design exclusivo da Michael e os marcadores de escala em madrepérola realçam muito sua beleza. O VM925DTC possui captação Piezo, que garante fidelidade sonora quando plugado! Vem com saída XLR/P10 balanceada, além de equalizador Michael, de 4 bandas, para ajuste preciso do timbre. Seu afinador cromático possui função mute para ajustes discretos. O violão elétrico VM925DTC é modelo folk cutaway, ou seja, possui corte no corpo que facilita o acesso às notas mais agudas, trazendo mais conforto e precisão aos seus solos! É instrumento musical com sonoridade encorpada e incrível projeção! Feito na medida para violonistas exigentes, é um dos preferidos de quem curte sertanejo, rock, blues, country, e soulmusic. Irá atendê-lo nos palcos, ensaios e outras ocasiões.',
        especificacoes: 'Tipo de Corda e Formato do Corpo: Aço (Folk com Cutaway, com design "Flower Decorado"); Principal Configuração Eletrônica (Captação/Pré): Equalizador Michael (4 bandas com afinador, Phase e saídas P10/XLR); Material do Tampo (Top): Spruce (Abeto); Comprimento de Escala / Orientação: Não especificado (Padrão Folk), Mão Destra, com Tensor Dual-Action; Material da Escala: Não especificado (Com Marcadores Paralelogramos Madrepérola).',
        imagem: [
            'src/Imagens/produtos/Violão/Violão Michael VM925-1.jpg',
            'src/Imagens/produtos/Violão/Violão Michael VM925-2.jpg',
            'src/Imagens/produtos/Violão/Violão Michael VM925-3.jpg'
        ]
    },
    {
        idInstrumento: 5,
        nome: 'Violão Strinberg SD200C',
        preco: 1139.05,
        tipo: 'Violão',
        descricao: 'O violão Strinberg SD200C possui encordoamento de aço, madeira do tampo em Sapele, escala Technical Wood, tarraxas Cromadas e Pré SE50. Sem dúvida nenhuma um excelente violão para quem procura um instrumento de qualidade, design bonito e bom custo-benefício. A Strinberg nasceu na década de 90 com o intuito de oferecer aos músicos uma linha de instrumentos de cordas diferenciada e com estilo próprio. Seguindo os padrões de qualidade exigidos pelo mercado americano, a marca possui em sua alma a essência da musicalidade brasileira. Com produtos modernos e sofisticados, a Strinberg conta com uma extensa linha de instrumentos musicais como guitarras, contrabaixos, violões e diversos acessórios.',
        especificacoes: 'Tipo de Corda e Formato do Corpo: Aço (Folk com Cutaway); Principal Configuração Eletrônica (Captação/Pré): Pré Strinberg SE-60 (Com Volume, EQ 5 bandas, Notch Filter e Phase); Material do Tampo (Top): Spruce Laminado (Abeto); Comprimento de Escala / Orientação: Não especificado (Padrão Folk), Mão Destra; Material da Escala: Indian Laurel (Louro Indiano).',
        imagem: [
            'src/Imagens/produtos/Violão/Violão Strinberg-1.jpg',
            'src/Imagens/produtos/Violão/Violão Strinberg-2.jpg',
            'src/Imagens/produtos/Violão/Violão Strinberg-3.jpg'
        ]
    },
    {
        idInstrumento: 6,
        nome: 'Guitarra Tagima TG-530',
        preco: 1494.40,
        tipo: 'Guitarra/Baixo',
        descricao: 'A guitarra TG-530 da Tagima é um clássico com um toque moderno, perfeito para músicos que apreciam estilo e versatilidade. Com um corpo de basswood e braço de maple em formato C, esta guitarra oferece uma sensação confortável ao tocar e uma resposta sonora suave e precisa. A escala em Tech wood, com 22 trastes e acabamento em verniz vintage, adiciona um toque retrô ao design, ao mesmo tempo que garante durabilidade e estabilidade. Equipada com três captadores single coils cerâmicos by Tagima, a TG-530 oferece uma variedade de timbres, desde sons brilhantes até tons mais quentes, ideais para uma ampla gama de gêneros musicais, como rock, blues e pop. Os controles de chave de 5 posições, volume e tonalidade oferecem flexibilidade total para moldar seu som conforme seu estilo e criatividade. Disponível em cores vibrantes como Olympic white, Black, Sunburst, Metallic red, Surf green, e Lake placid blue, esta guitarra se adapta a qualquer personalidade no palco. Se você busca um instrumento que combine design clássico com uma escala clara e versátil, a TG-530 é a escolha certa para levar sua música ao próximo nível.',
        especificacoes: 'Formato do Corpo e Configuração de Captadores: Stratocaster (SSS); Material Principal do Corpo: Basswood; Material do Braço e Escala: Braço: Maple / Escala: Maple; Comprimento de Escala / Tipo de Ponte: Ponte Tremolo Cromada; Controles Eletrônicos / Circuito: 1 Volume, 2 Tonalidades, Chave 5 Posições',
        imagem: [
            'src/Imagens/produtos/Guitarra/Guitarra Tagima TG-530-1.jpg',
            'src/Imagens/produtos/Guitarra/Guitarra Tagima TG-530-2.jpg',
            'src/Imagens/produtos/Guitarra/Guitarra Tagima TG-530-3.jpg'
        ]
    },
    {
        idInstrumento: 7,
        nome: 'Squier Affinity Stratocaster',
        preco: 2409.99,
        tipo: 'Guitarra',
        descricao: 'Uma excelente porta de entrada para a consagrada família Fender, a Squier Stratocaster Afinnity Series oferece um design lendário e um excelente timbre. Este modelo apresenta vários refinamentos que auxiliam na tocabilidade do guitarrista, como um corpo fino e leve, um perfil de braço fino e confortável em forma de "C", uma ponte tremolo de 2 pivôs, tarraxas blindadas e trastes médio jumbo. Carregado com dois captadores Squier single-coil Strat com chave seletora de 5 posições para uma ampla variedade sonora, este modelo está pronto para acompanhar qualquer músico. O modelo de guitarra Stratocaster é usado por alguns dos guitarristas mais renomados mundialmente, como Jimi Hendrix, John Mayer e Eric Clapton.',
        especificacoes: 'Formato do Corpo e Configuração de Captadores: Stratocaster (SSS); Material Principal do Corpo: Poplar; Material do Braço e Escala: Braço: Maple / Escala: Indian Laurel; Comprimento de Escala / Tipo de Ponte: Ponte Tremolo de 2 Pinos; Controles Eletrônicos / Circuito: 1 Volume, 2 Tonalidades, Chave 5 Posições',
        imagem: [
            'src/Imagens/produtos/Guitarra/Squier Affinity Stratocaster-1.jpg',
            'src/Imagens/produtos/Guitarra/Squier Affinity Stratocaster-2.jpg',
            'src/Imagens/produtos/Guitarra/Squier Affinity Stratocaster-3.jpg'
        ]
    },
    {
        idInstrumento: 8,
        nome: 'Epiphone Les Paul Special VE Vintage',
        preco: 1590.00,
        tipo: 'Guitarra',
        descricao: 'Epiphone apresenta a nova Les Paul Special VE (Vintage Edition) com o perfil clássico da Les Paul com um corpo ultra leve em Poplar. A Les Paul Special VE é equipada com captadores Epiphone Humbuckers Open Coil e é disponível no belo acabamento “Vintage Worn” nas cores Cherry Vintage, Black, Heritage Cherry Sunburst, Vintage Sunburst e Walnut Vintage. Durante décadas a Les Paul Special tem sido uma das mais vendidas da Epiphone. E agora a Les Paul Special VE continua esta tradição, dando tanto aos novos guitarristas quantos aos profissinoais uma verdadeira Les Paul por um preço acessível à todos!',
        especificacoes: 'Formato do Corpo e Configuração de Captadores: Les Paul Special (HH); Material Principal do Corpo: Poplar; Material do Braço e Escala: Braço: Mogno / Escala: Rosewood; Comprimento de Escala / Tipo de Ponte: Ponte Tune-O-Matic e Stopbar; Controles Eletrônicos / Circuito: 2 Volumes, 2 Tonalidades, Chave 3 Posições',
        imagem: [
            'src/Imagens/produtos/Guitarra/GUITARRA EPIPHONE LES PAUL VE VINTAGE SUNBURST-1.jpg',
            'src/Imagens/produtos/Guitarra/GUITARRA EPIPHONE LES PAUL VE VINTAGE SUNBURST-2.jpg',
            'src/Imagens/produtos/Guitarra/GUITARRA EPIPHONE LES PAUL VE VINTAGE SUNBURST-3.jpg'
        ]
    },
    {
        idInstrumento: 9,
        nome: 'Guitarra Tagima T-635 Classic',
        preco: 1529.10,
        tipo: 'Guitarra',
        descricao: 'A linha Tagima Classic traz modelos de guitarras consagradas como a Les Paul e as Stratocasters com madeiramento que consagraram esses modelos. As Guitarras Tagima T635 estilo strato são fabricadas com a tradicional combinação de alder no corpo com maple no braço (alguns modelos com escala em maple e outros com escala em technical wood). A Tagima 635 possui o braço um pouco diferente das stratos convencionais: um pouco mais largo no nut (1 mm a mais) e também um pouco mais espesso ("grosso"). Além disso, a escala também possui um raio de curvatura um pouco maior (não especificado pela Tagima) que o tradicional raio 9.5 polegadas das guitarras Fender Standard, o que favorece uma ação de cordas mais baixa e facilita o dedilhado em solos. Fabricado em diversas cores que podem atender a praticamente qualquer gosto: preto, sunburst, vermelho metálico (semelhante ao candy apple red), verde pastel (semelhante ao surf green), branco vintage (semelhante ao vintage white) e diversos escudos. A Tagima T635 pode ser usado para rock, blues, jazz, funk e estilos semelhantes, pois é equipado com captadores alnicos de ganho moderado. Uma observação importante para quem quiser trocar os captadores futuramente é que eles não tem tamanhos iguais (o da ponte é maior que o do meio que é maior que o do braço). Dessa forma, se você comprar captadores padrão Fender, você não poderá manter as capinhas atuais.',
        especificacoes: 'Formato do Corpo e Configuração de Captadores: Stratocaster (SSS); Material Principal do Corpo: Alder; Material do Braço e Escala: Braço: Maple / Escala: Technical Wood; Comprimento de Escala / Tipo de Ponte: Ponte Tremolo (2 Pivôs); Controles Eletrônicos / Circuito: 1 Volume, 2 Tonalidades, Chave 5 Posições',
        imagem: [
            'src/Imagens/produtos/Guitarra/Guitarra Tagima T635 Classic White-1.jpg',
            'src/Imagens/produtos/Guitarra/Guitarra Tagima T635 Classic White-2.jpg',
            'src/Imagens/produtos/Guitarra/Guitarra Tagima T635 Classic White-3.jpg'
        ]
    },
    {
        idInstrumento: 10,
        nome: 'Guitarra Epiphone Flying V Korina 1958 – Aged Natural',
        preco: 12319.00,
        tipo: 'Guitarra',
        descricao: 'Feita em parceria com a Gibson™ Custom Shop, a 1958 Korina Flying V™ da Epiphone é uma recriação impressionante de uma das guitarras vintage mais famosas e valiosas de todos os tempos. Ela traz os detalhes autênticos da Flying V de 1958 para guitarristas de todo o mundo. Assim como os raríssimos modelos originais da Gibson lançados em 1958, esta guitarra apresenta um corpo sólido de Korina, braço de Korina com encaixe profundo (long tenon) e o clássico perfil de braço Flying V 1958. Conta ainda com escala em laurel indiano, hardware dourado e eletrônica de altíssimo nível: captadores Gibson Burstbucker™ 2 e Burstbucker 3, ligados a controles de volume individuais, controle master de tom com potenciômetros CTS®, capacitor Mallory™, chave seletora Switchcraft® de 3 posições e saída 1/4″.',
        especificacoes: 'Formato do Corpo e Configuração de Captadores: Flying V (HH); Material Principal do Corpo: Korina Maciça; Material do Braço e Escala: Braço: Korina / Escala: Laurel; Comprimento de Escala / Tipo de Ponte: Ponte ABR-1 / Placa Flying V Latão; Controles Eletrônicos / Circuito: 2 Volumes, 1 Tom Master, Chave 3 Posições (CTS)',
        imagem: [
            'src/Imagens/produtos/Guitarra/Guitarra Epiphone Flying V Korina-1.jpg',
            'src/Imagens/produtos/Guitarra/Guitarra Epiphone Flying V Korina-2.jpg',
            'src/Imagens/produtos/Guitarra/Guitarra Epiphone Flying V Korina-3.jpg'
        ]
    },
    {
        idInstrumento: 11,
        nome: 'Contrabaixo Fender Squier Affinity Jazz Bass',
        preco: 2709.00,
        tipo: 'Baixo',
        descricao: 'Uma excelente porta de entrada para a consagrada família Fender, o baixo Squier Affinity Series Jazz Bass entrega um design lendário e timbre excelente para o baixista de hoje. Este contrabaixo Jazz Bass apresenta vários refinamentos - principalmente para o músico iniciante - como um corpo fino e leve, um fino e confortável braço em formato "C" e tarraxas no estilo vintage para uma afinação precisa. Possui dois captadores Squier single-coil J Bass para uma variedade de sons. O Squier Affinity Series Jazz Bass mantém o design clássico, característico do modelo, a ponte padrão de 4-Saddles (carrinhos), o captador Ceramic Single-Coil Jazz Bass, trastes Médio Jumbo, e a escala de raio 9.5" (241 mm). Oferece o maior conforto e versatilidade, ideal para todos os estilos e gêneros musicais. O modelo de baixo Jazz Bass foi usado por alguns dos baixistas mais renomados mundialmente, como Geddy Lee (Rush), John Paul Jones (Led Zeppelin) e Jaco Pastorius.',
        especificacoes: 'Formato do Corpo e Configuração de Captadores: Jazz Bass (SS); Material Principal do Corpo: Poplar; Material do Braço e Escala: Braço: Maple / Escala: Indian Laurel; Comprimento de Escala / Tipo de Ponte: Escala 34" (Padrão) / Ponte Standard; Controles Eletrônicos / Circuito: 2 Volumes, 1 Tonalidade (Passivo)',
        imagem: [
            'src/Imagens/produtos/Baixo/Contrabaixo Fender Squier Affinity Jazz Bass-1.jpg',
            'src/Imagens/produtos/Baixo/Contrabaixo Fender Squier Affinity Jazz Bass-2.jpg',
            'src/Imagens/produtos/Baixo/Contrabaixo Fender Squier Affinity Jazz Bass-3.jpg'
        ]
    },
    {
        idInstrumento: 12,
        nome: 'Baixo Tagima TW-66',
        preco: 1439.91,
        tipo: 'Baixo',
        descricao: 'O TW-66 é a escolha ideal para quem busca um design vintage e timbres clássicos. Com um corpo de poplar e um braço de maple no formato C, este contrabaixo proporciona uma tocabilidade suave e confortável. A escala de maple com 21 trastes e o nut de osso garantem precisão e ressonância, tornando o TW-66 um instrumento confiável para diversas situações musicais. Equipado com captador P model cerâmico by Tagima, o TW-66 oferece timbres profundos e ricos, perfeitos para gêneros como rock, blues e funk. Com controles simples de volume e tonalidade, você tem total controle sobre seu som, permitindo moldar seu tom para se adaptar ao seu estilo. A ponte e as tarraxas vintage adicionam um toque de elegância e tradição ao design do instrumento.',
        especificacoes: 'Formato do Corpo e Configuração de Captadores: Precision Bass (P); Material Principal do Corpo: Poplar; Material do Braço e Escala: Braço: Maple / Escala: Maple; Comprimento de Escala / Tipo de Ponte: Escala Padrão / Ponte Standard; Controles Eletrônicos / Circuito: 1 Volume, 1 Tonalidade (Passivo)',
        imagem: [
            'src/Imagens/produtos/Baixo/Baixo Tagima TW-66-1.jpg',
            'src/Imagens/produtos/Baixo/Baixo Tagima TW-66-2.jpg',
            'src/Imagens/produtos/Baixo/Baixo Tagima TW-66-3.jpg'
        ]
    },
    {
        idInstrumento: 13,
        nome: 'Baixo Yamaha TRBX 174',
        preco: 1944.90,
        tipo: 'Baixo',
        descricao: 'O baixo Yamaha TRBX174 é um excelente valor para o baixista moderno. A série TRBX é um dos baixos mais populares da Yamaha, e por um bom motivo. Este baixo de ótima aparência e excelente som oferece um formato de corpo Yamaha confortável e um braço de bordo aparafusado de ação rápida com uma escala de sonokeling suave. Você obtém um timbre forte e contundente do arranjo P / J de captadores split-coil / single-coil. Com base no hardware sólido e na variedade de acabamentos excelentes, você tem um baixo atraente e apelativo com o Yamaha TRBX174. Corpo confortável com estilo progressivo, arranjo de captação P / J para um universo de ótimos tons de baixa, qualidade Yamaha, por completo. Basta olhar para o baixo elétrico Yamaha TRBX174 e saber que ele significa negócios. Um corte profundo dá a você acesso limpo aos registros mais altos para solar, enquanto o ataque mais pronunciado fornece equilíbrio (e parece legal). Você vai adorar a aparência e o comportamento do TRBX174! O Yamaha TRBX174 apresenta um layout de captador clássico: uma bobina dividida na posição intermediária e uma bobina única na ponte. A bobina dividida no estilo Precision serve a carne bovina, fornecendo fundamentos sólidos e profundos. o single de estilo Jazz emite o rosnado, com médios e agudos fortes (principalmente se você tiver feridas redondas). Como você combina os captadores é com você, mas uma coisa é certa - você tem toneladas de opções de tons! O baixo Yamaha TRBX174 é coberto pela garantia vitalícia limitada da empresa. A Yamaha fabrica instrumentos de classe mundial há mais de um século e está extremamente confiante na qualidade dos materiais e na fabricação de seus produtos. Você pode ficar tranquilo, pois tomou uma decisão sólida ao comprar o baixo elétrico Yamaha TRBX174.',
        especificacoes: 'Formato do Corpo e Configuração de Captadores: Design Moderno (PJ); Material Principal do Corpo: Alder (ou Mogno); Material do Braço e Escala: Braço: Maple / Escala: Rosewood; Comprimento de Escala / Tipo de Ponte: 34” (863.6 mm) / Ponte Vintage Style; Controles Eletrônicos / Circuito: Controles de Volume e Tom (Passivo)',
        imagem: [
            'src/Imagens/produtos/Baixo/Baixo Yamaha TRBX 174-1.jpg',
            'src/Imagens/produtos/Baixo/Baixo Yamaha TRBX 174-2.jpg',
            'src/Imagens/produtos/Baixo/Baixo Yamaha TRBX 174-3.jpg'
        ]
    },
    {
        idInstrumento: 14,
        nome: 'Contra Baixo Strinberg JBS40 SB Jazz 11162',
        preco: 1510.50,
        tipo: 'Baixo',
        descricao: 'A Strinberg teve seu legado iniciado na década de 90 com o objetivo de projetar uma linha de instrumentos de cordas com estilo original. Desde então ela oferece uma ampla gama de produtos que vão desde violões, guitarras, baixos, encordoamentos, acessórios e muito mais. Seus produtos são fabricados com os mais altos padrões de qualidade e as mais modernas técnicas. Portanto, se você está à procura de instrumentos musicais de alto padrão, a Strinberg é uma ótima opção.',
        especificacoes: 'Formato do Corpo e Configuração de Captadores: Jazz Bass (JJ); Material Principal do Corpo: Basswood; Material do Braço e Escala: Braço: Maple / Escala: Rosewood; Comprimento de Escala / Tipo de Ponte: Escala Padrão / Ponte Standard; Controles Eletrônicos / Circuito: 2 Volumes, 1 Tonalidade (Passivo)',
        imagem: [
            'src/Imagens/produtos/Baixo/Baixo Strinberg JBS40 SB Jazz 11162-1.jpg',
            'src/Imagens/produtos/Baixo/Baixo Strinberg JBS40 SB Jazz 11162-2.jpg',
            'src/Imagens/produtos/Baixo/Baixo Strinberg JBS40 SB Jazz 11162-3.jpg'
        ]
    },
    {
        idInstrumento: 15,
        nome: 'Baixo Michael BM675',
        preco: 1349.00,
        tipo: 'Baixo',
        descricao: 'O contrabaixo JB Michael BM675N, de 4 cordas e sistema passivo, impressiona pelo timbre vintage e visual arrebatador! É um modelo estilo Jazz Bass construído com corpo sólido em Basswood, braço em Hard Maple e duas opções de madeiras na escala. Seu visual é realçado pelo escudo Pickup Cover e também pelas marcações de escala Square Block. Vem ainda com trastes Extra-Jumbo, tensor Dual-Action e 2 captadores Single Coil. Compre o BM675N e impulsione seus slaps e pizzicatos! O BM675N possui corpo sólido em Basswood, braço em Hard Maple, além de modelos com escala em Blackwood ou Hard Maple. Esta combinação de madeiras valoriza a definição sonora, trazendo uma sonoridade imponente Um dos destaques do BM675N é a combinação do circuito passivo com 2 captadores Single-Coil. O resultado é um sinal vintage, mais orgânico, que dá mais vitalidade aos pizzicatos e tappings, além de um “estalado” impactante aos slaps. O BM675N possui um visual vintage arrebatador, com destaque para as marcações de escala "Square Block”, madrepérola ou preta, e o escudo prateado Este contrabaixo Michael, estilo Jazz Bass, possui trastes Extra-Jumbo, componentes que dão firmeza aos baixistas. Vem ainda com o Pickup Cover, escudo metálico, excelente para dar apoio à mão direita, trazendo mais conforto. O BM675N oferece tensor Dual-Action, recurso que regula a curvatura do braço, deixando a escala mais retilínea para uma pegada mais precisa. O contrabaixo JB BM675N, de 4 cordas, é muito procurado por baixistas que gostam de sonoridades “clássicas”, como jazz, rock, funk music, fusion e MPB. Indicado para shows, gravações, ensaios e outras ocasiões.',
        especificacoes: 'Formato do Corpo e Configuração de Captadores: Jazz Bass (JJ); Material Principal do Corpo: Basswood; Material do Braço e Escala: Braço: Hard Maple / Escala: Blackwood/Hard Maple; Comprimento de Escala / Tipo de Ponte: Escala Padrão / Ponte Standard; Controles Eletrônicos / Circuito: 2 Volumes, 1 Tonalidade (Passivo)',
        imagem: [
            'src/Imagens/produtos/Baixo/Baixo Michael BM675-1.jpg',
            'src/Imagens/produtos/Baixo/Baixo Michael BM675-2.jpg',
            'src/Imagens/produtos/Baixo/Baixo Michael BM675-3.jpg'
        ]
    },
];
// API
app.get("/", (req, res) => {
    res.json({
        mensagem: "API da Loja de Instrumentos",
        totalInstrumentos: instrumentos.length
    });
});
app.get("/instrumentos", (req, res) => {
    res.json(instrumentos);
});
app.get("/instrumentos/:id", (req, res) => {
    const id = Number(req.params.id);
    const instrumento = instrumentos.find(i => i.idInstrumento === id);
    if (!instrumento) {
        return res.status(404).json({ erro: "Instrumento não encontrado" });
    }
    res.json(instrumento);
});
// Criar novo instrumento
app.post('/instrumentos', (req, res) => {
    var _a, _b, _c;
    const body = req.body;
    if (!body.nome || body.preco == null || !body.tipo) {
        return res.status(400).json({ erro: 'Dados incompletos' });
    }
    const novoId = instrumentos.length ? Math.max(...instrumentos.map(i => i.idInstrumento)) + 1 : 1;
    const novoInstrumento = {
        idInstrumento: novoId,
        nome: body.nome,
        preco: Number(body.preco),
        tipo: body.tipo,
        imagem: (_a = body.imagem) !== null && _a !== void 0 ? _a : [],
        descricao: (_b = body.descricao) !== null && _b !== void 0 ? _b : '',
        especificacoes: (_c = body.especificacoes) !== null && _c !== void 0 ? _c : ''
    };
    instrumentos.push(novoInstrumento);
    res.status(201).json(novoInstrumento);
});
// Atualizar instrumento
app.put('/instrumentos/:id', (req, res) => {
    var _a, _b, _c, _d, _e, _f;
    const id = Number(req.params.id);
    const index = instrumentos.findIndex(i => i.idInstrumento === id);
    if (index === -1)
        return res.status(404).json({ erro: 'Instrumento não encontrado' });
    const body = req.body;
    const existente = instrumentos[index];
    const atualizado = {
        idInstrumento: existente.idInstrumento,
        nome: (_a = body.nome) !== null && _a !== void 0 ? _a : existente.nome,
        preco: (_b = body.preco) !== null && _b !== void 0 ? _b : existente.preco,
        tipo: (_c = body.tipo) !== null && _c !== void 0 ? _c : existente.tipo,
        imagem: (_d = body.imagem) !== null && _d !== void 0 ? _d : existente.imagem,
        descricao: (_e = body.descricao) !== null && _e !== void 0 ? _e : existente.descricao,
        especificacoes: (_f = body.especificacoes) !== null && _f !== void 0 ? _f : existente.especificacoes
    };
    instrumentos[index] = atualizado;
    res.json(atualizado);
});
// Deletar instrumento
app.delete('/instrumentos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = instrumentos.findIndex(i => i.idInstrumento === id);
    if (index === -1)
        return res.status(404).json({ erro: 'Instrumento não encontrado' });
    instrumentos.splice(index, 1);
    res.status(204).send();
});
app.get("/instrumentos/tipo/:tipo", (req, res) => {
    const tipo = req.params.tipo;
    const instrumentosFiltrados = instrumentos.filter(i => i.tipo.toLowerCase() === tipo.toLowerCase());
    res.json(instrumentosFiltrados);
});
// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`);
});
