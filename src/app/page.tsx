"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  <Image
                    src="/image/Brasao_de_Aracaju.png"
                    alt="Brasão"
                    className="h-8 w-8"
                    width={32}
                    height={32}
                  />
                </span>
              </div>
              <div className="md:hidden">
                <span className="text-xl font-semibold text-gray-800">
                  <Image
                    src="/image/Logo_prefaju.png"
                    alt="Brasão"
                    className="mx-6"
                    width={150}
                    height={38}
                  />
                </span>
              </div>
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                <span className="text-xl font-semibold text-gray-800">
                  <Image
                    src="/image/Logo_prefaju.png"
                    alt="Brasão"
                    width={150}
                    height={38}
                  />
                </span>
              </Link>
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <button className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t ${menuOpen ? "block" : "hidden"
            }`}
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            {/* <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 text-gray-600 hover:text-blue-600">
              Sobre
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 text-gray-600 hover:text-blue-600">
              Services
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 text-gray-600 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 text-gray-600 hover:text-blue-600">
              Contact
            </Link> */}

            <div className="flex flex-col space-y-2 pt-2 ">
              {/* <div className="flex flex-col space-y-2 pt-2 border-t"> */}
              <Link href="/login">
                <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  {/* <button className="w-full py-2 text-gray-600 hover:text-blue-600 text-left"> */}
                  Login
                </button>
              </Link>
              <Link href="/usuario/criar">
                <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header >
      <h1 className="text-center md:text-2xl lg:text-6xl ">
        Aracaju uma nova cidade
      </h1>
      <main className="flex flex-col px-5">
        {/* <main className="flex flex-col px-3 md:grid md:grid-cols-2 md:gap-5 md:p-5 lg:grid lg:grid-cols-3 lg:gap-5 lg:p-5"> */}
        {/* <p className="text-justify ">
          Uma equipe internacional de cientistas anunciou a descoberta de três
          planetas do tamanho da Terra no sistema estelar binário TOI-2267, que
          fica a cerca de 190 anos-luz de distância Impressão artística de
          TOI-2267 Mario Sucerquia (Universidade de Grenoble Alpes). Crédito:
          Mario Sucerquia (Universidade de Grenoble Alpes). O estudo, publicado
          na revista *Astronomy & Astrophysics*, revela detalhes surpreendentes
          sobre como planetas podem se formar e sobreviver em sistemas com duas
          estrelas, algo que antes era considerado muito difícil devido à
          instabilidade gravitacional. Um Sistema Estelar Diferente O TOI-2267 é
          um sistema binário compacto, ou seja, duas estrelas que giram muito
          próximas uma da outra, criando um ambiente caótico para a formação de
          planetas. Mesmo assim, os pesquisadores encontraram três planetas do
          tamanho da Terra em órbitas curtas. Dois desses planetas orbitam uma
          das estrelas, enquanto o terceiro orbita a outra. Isso faz do TOI-2267
          o primeiro sistema binário conhecido com planetas transitando
          (passando na frente de) ambas as estrelas. “Essa descoberta é única
          porque mostra uma configuração rara: dois planetas transitam uma
          estrela, e o terceiro transita a outra”, explica Sebastián
          Zúñiga-Fernández, pesquisador da Universidade de Liège, na Bélgica, e
          principal autor do estudo. “É o sistema binário mais compacto e frio
          com planetas que conhecemos.” Como os Planetas Foram Encontrados? A
          descoberta começou com dados do telescópio espacial TESS, da NASA, que
          observa estrelas para detectar planetas que passam na frente delas,
          causando pequenas quedas na luz estelar. Dois dos três planetas foram
          inicialmente identificados por astrônomos da Universidade de Liège e
          do Instituto de Astrofísica de Andalucía (IAA-CSIC), na Espanha,
          usando um software chamado SHERLOCK, criado por eles. Depois disso, a
          equipe realizou uma série de observações com telescópios terrestres,
          incluindo os telescópios robóticos SPECULOOS e TRAPPIST, liderados
          pela Universidade de Liège. Esses telescópios são especializados em
          estudar planetas pequenos ao redor de estrelas frias e fracas, e foram
          essenciais para confirmar que os sinais detectados eram realmente
          planetas e para entender melhor o sistema. Um Laboratório Natural
          “Encontrar três planetas do tamanho da Terra em um sistema binário tão
          compacto é uma chance única”, diz Zúñiga-Fernández. “Isso nos ajuda a
          testar os limites das teorias sobre como planetas se formam em
          ambientes complexos e a entender a variedade de sistemas planetários
          na nossa galáxia.” Francisco J. Pozuelos, co-líder do estudo e
          pesquisador do IAA-CSIC, complementa: “Esse sistema é como um
          laboratório natural para estudar como planetas rochosos podem surgir e
          sobreviver em condições extremas, onde achávamos que eles não
          resistiriam.” O Que Vem Depois? Essa descoberta levanta novas
          perguntas sobre como planetas se formam em sistemas de duas estrelas e
          abre portas para mais estudos. Futuras observações com o Telescópio
          Espacial James Webb (James Webb) e telescópios terrestres gigantes
          poderão medir a massa, a densidade e até a composição da atmosfera
          desses planetas distantes. Além de ser impressionante, essa descoberta
          mostra o poder de combinar missões espaciais, como o TESS, com
          telescópios terrestres especializados, como o SPECULOOS e o TRAPPIST.
          Juntos, eles estão expandindo os limites da ciência dos exoplanetas.
          Resumindo Cientistas descobriram três planetas do tamanho da Terra em
          um sistema de duas estrelas chamado TOI-2267, a 190 anos-luz de
          distância. Dois planetas orbitam uma estrela, e o terceiro orbita a
          outra, algo nunca visto antes. Essa descoberta desafia ideias sobre
          como planetas podem se formar em ambientes instáveis e oferece uma
          chance única de estudar a formação de planetas rochosos, com ajuda de
          telescópios espaciais e terrestres.
        </p>
        <p className="text-justify ">
          Uma equipe internacional de cientistas anunciou a descoberta de três
          planetas do tamanho da Terra no sistema estelar binário TOI-2267, que
          fica a cerca de 190 anos-luz de distância Impressão artística de
          TOI-2267 Mario Sucerquia (Universidade de Grenoble Alpes). Crédito:
          Mario Sucerquia (Universidade de Grenoble Alpes). O estudo, publicado
          na revista *Astronomy & Astrophysics*, revela detalhes surpreendentes
          sobre como planetas podem se formar e sobreviver em sistemas com duas
          estrelas, algo que antes era considerado muito difícil devido à
          instabilidade gravitacional. Um Sistema Estelar Diferente O TOI-2267 é
          um sistema binário compacto, ou seja, duas estrelas que giram muito
          próximas uma da outra, criando um ambiente caótico para a formação de
          planetas. Mesmo assim, os pesquisadores encontraram três planetas do
          tamanho da Terra em órbitas curtas. Dois desses planetas orbitam uma
          das estrelas, enquanto o terceiro orbita a outra. Isso faz do TOI-2267
          o primeiro sistema binário conhecido com planetas transitando
          (passando na frente de) ambas as estrelas. “Essa descoberta é única
          porque mostra uma configuração rara: dois planetas transitam uma
          estrela, e o terceiro transita a outra”, explica Sebastián
          Zúñiga-Fernández, pesquisador da Universidade de Liège, na Bélgica, e
          principal autor do estudo. “É o sistema binário mais compacto e frio
          com planetas que conhecemos.” Como os Planetas Foram Encontrados? A
          descoberta começou com dados do telescópio espacial TESS, da NASA, que
          observa estrelas para detectar planetas que passam na frente delas,
          causando pequenas quedas na luz estelar. Dois dos três planetas foram
          inicialmente identificados por astrônomos da Universidade de Liège e
          do Instituto de Astrofísica de Andalucía (IAA-CSIC), na Espanha,
          usando um software chamado SHERLOCK, criado por eles. Depois disso, a
          equipe realizou uma série de observações com telescópios terrestres,
          incluindo os telescópios robóticos SPECULOOS e TRAPPIST, liderados
          pela Universidade de Liège. Esses telescópios são especializados em
          estudar planetas pequenos ao redor de estrelas frias e fracas, e foram
          essenciais para confirmar que os sinais detectados eram realmente
          planetas e para entender melhor o sistema. Um Laboratório Natural
          “Encontrar três planetas do tamanho da Terra em um sistema binário tão
          compacto é uma chance única”, diz Zúñiga-Fernández. “Isso nos ajuda a
          testar os limites das teorias sobre como planetas se formam em
          ambientes complexos e a entender a variedade de sistemas planetários
          na nossa galáxia.” Francisco J. Pozuelos, co-líder do estudo e
          pesquisador do IAA-CSIC, complementa: “Esse sistema é como um
          laboratório natural para estudar como planetas rochosos podem surgir e
          sobreviver em condições extremas, onde achávamos que eles não
          resistiriam.” O Que Vem Depois? Essa descoberta levanta novas
          perguntas sobre como planetas se formam em sistemas de duas estrelas e
          abre portas para mais estudos. Futuras observações com o Telescópio
          Espacial James Webb (James Webb) e telescópios terrestres gigantes
          poderão medir a massa, a densidade e até a composição da atmosfera
          desses planetas distantes. Além de ser impressionante, essa descoberta
          mostra o poder de combinar missões espaciais, como o TESS, com
          telescópios terrestres especializados, como o SPECULOOS e o TRAPPIST.
          Juntos, eles estão expandindo os limites da ciência dos exoplanetas.
          Resumindo Cientistas descobriram três planetas do tamanho da Terra em
          um sistema de duas estrelas chamado TOI-2267, a 190 anos-luz de
          distância. Dois planetas orbitam uma estrela, e o terceiro orbita a
          outra, algo nunca visto antes. Essa descoberta desafia ideias sobre
          como planetas podem se formar em ambientes instáveis e oferece uma
          chance única de estudar a formação de planetas rochosos, com ajuda de
          telescópios espaciais e terrestres.
        </p>
        <p className="text-justify ">
          Uma equipe internacional de cientistas anunciou a descoberta de três
          planetas do tamanho da Terra no sistema estelar binário TOI-2267, que
          fica a cerca de 190 anos-luz de distância Impressão artística de
          TOI-2267 Mario Sucerquia (Universidade de Grenoble Alpes). Crédito:
          Mario Sucerquia (Universidade de Grenoble Alpes). O estudo, publicado
          na revista *Astronomy & Astrophysics*, revela detalhes surpreendentes
          sobre como planetas podem se formar e sobreviver em sistemas com duas
          estrelas, algo que antes era considerado muito difícil devido à
          instabilidade gravitacional. Um Sistema Estelar Diferente O TOI-2267 é
          um sistema binário compacto, ou seja, duas estrelas que giram muito
          próximas uma da outra, criando um ambiente caótico para a formação de
          planetas. Mesmo assim, os pesquisadores encontraram três planetas do
          tamanho da Terra em órbitas curtas. Dois desses planetas orbitam uma
          das estrelas, enquanto o terceiro orbita a outra. Isso faz do TOI-2267
          o primeiro sistema binário conhecido com planetas transitando
          (passando na frente de) ambas as estrelas. “Essa descoberta é única
          porque mostra uma configuração rara: dois planetas transitam uma
          estrela, e o terceiro transita a outra”, explica Sebastián
          Zúñiga-Fernández, pesquisador da Universidade de Liège, na Bélgica, e
          principal autor do estudo. “É o sistema binário mais compacto e frio
          com planetas que conhecemos.” Como os Planetas Foram Encontrados? A
          descoberta começou com dados do telescópio espacial TESS, da NASA, que
          observa estrelas para detectar planetas que passam na frente delas,
          causando pequenas quedas na luz estelar. Dois dos três planetas foram
          inicialmente identificados por astrônomos da Universidade de Liège e
          do Instituto de Astrofísica de Andalucía (IAA-CSIC), na Espanha,
          usando um software chamado SHERLOCK, criado por eles. Depois disso, a
          equipe realizou uma série de observações com telescópios terrestres,
          incluindo os telescópios robóticos SPECULOOS e TRAPPIST, liderados
          pela Universidade de Liège. Esses telescópios são especializados em
          estudar planetas pequenos ao redor de estrelas frias e fracas, e foram
          essenciais para confirmar que os sinais detectados eram realmente
          planetas e para entender melhor o sistema. Um Laboratório Natural
          “Encontrar três planetas do tamanho da Terra em um sistema binário tão
          compacto é uma chance única”, diz Zúñiga-Fernández. “Isso nos ajuda a
          testar os limites das teorias sobre como planetas se formam em
          ambientes complexos e a entender a variedade de sistemas planetários
          na nossa galáxia.” Francisco J. Pozuelos, co-líder do estudo e
          pesquisador do IAA-CSIC, complementa: “Esse sistema é como um
          laboratório natural para estudar como planetas rochosos podem surgir e
          sobreviver em condições extremas, onde achávamos que eles não
          resistiriam.” O Que Vem Depois? Essa descoberta levanta novas
          perguntas sobre como planetas se formam em sistemas de duas estrelas e
          abre portas para mais estudos. Futuras observações com o Telescópio
          Espacial James Webb (James Webb) e telescópios terrestres gigantes
          poderão medir a massa, a densidade e até a composição da atmosfera
          desses planetas distantes. Além de ser impressionante, essa descoberta
          mostra o poder de combinar missões espaciais, como o TESS, com
          telescópios terrestres especializados, como o SPECULOOS e o TRAPPIST.
          Juntos, eles estão expandindo os limites da ciência dos exoplanetas.
          Resumindo Cientistas descobriram três planetas do tamanho da Terra em
          um sistema de duas estrelas chamado TOI-2267, a 190 anos-luz de
          distância. Dois planetas orbitam uma estrela, e o terceiro orbita a
          outra, algo nunca visto antes. Essa descoberta desafia ideias sobre
          como planetas podem se formar em ambientes instáveis e oferece uma
          chance única de estudar a formação de planetas rochosos, com ajuda de
          telescópios espaciais e terrestres.
        </p> */}

        <section id="introducao"></section>

        <section id="historia">
          <h2 className="text-center text-4xl">História de Aracaju</h2>
          <p className="text-justify">
            Aracaju, cujo nome tem origem na língua tupi e significa
            &quot;cajueiro de araras&quot;, possui uma história singular por ser
            uma das poucas capitais brasileiras a ser <strong>planejada</strong>
            . Sua fundação e elevação à categoria de capital ocorreram em{" "}
            <strong>17 de março de 1855</strong>, substituindo a antiga capital,
            São Cristóvão.
          </p>

          <h3 className="text-center text-3xl">A Capital Planejada</h3>
          <p className="text-justify">
            O local onde a cidade se desenvolveu era historicamente a residência
            oficial do cacique Serigy. A mudança de capital foi motivada por
            questões políticas e econômicas, visando facilitar o escoamento da
            produção açucareira através do Porto de Aracaju. O projeto
            urbanístico de Aracaju, concebido pelo engenheiro{" "}
            <strong>Sebastião Basílio Pirro</strong>, era inovador para a época.
            Ele implementou um <strong>traçado geométrico e retilíneo</strong>,
            semelhante a um tabuleiro de xadrez, permitindo uma expansão mais
            ordenada.
          </p>
          <p className="text-justify">
            A nova capital enfrentou adversidades nos primeiros anos, mas se
            firmou em 1865. O desenvolvimento industrial teve início com a
            primeira fábrica de tecidos em 1884. No início do século XX, a
            cidade demonstrou pioneirismo com a inauguração de serviços de água
            encanada (1908), esgotos sanitários (1914) e a chegada da estrada de
            ferro.
          </p>
        </section>

        <section id="geografia">
          <h2 className="text-center text-3xl">
            Dados Geográficos e Ambientais
          </h2>
          <p className="text-justify">
            Aracaju está localizada no litoral leste do Nordeste do Brasil,
            sendo banhada pelo Oceano Atlântico.
          </p>

          <h3 className="text-center text-3xl">Localização e Limites</h3>
          <ul>
            <li>
              <strong>Unidade Federativa:</strong> Sergipe (SE)
            </li>
            <li>
              <strong>Região Geográfica:</strong> Nordeste
            </li>
            <li>
              <strong>Área Total:</strong> Aproximadamente 182,163 km² (IBGE
              2022)
            </li>
            <li>
              <strong>Altitude Média:</strong> 4 metros
            </li>
            <li>
              <strong>Fuso Horário:</strong> UTC−3 (Hora de Brasília)
            </li>
            <li>
              <strong>Municípios Limítrofes:</strong> Barra dos Coqueiros,
              Itaporanga d&apos; Ajuda, Nossa Senhora do Socorro, Santo Amaro
              das Brotas e São Cristóvão.
            </li>
          </ul>

          <h3 className="text-center text-3xl">Hidrografia e Relevo</h3>
          <p className="text-justify">
            A cidade é cortada por importantes rios: o{" "}
            <strong>Rio Sergipe</strong>, principal elemento geográfico que
            separa Aracaju de Barra dos Coqueiros, e o{" "}
            <strong>Rio Vaza-Barris</strong>, que banha a porção sul da cidade.
            O relevo é caracterizado por <strong>planícies</strong> e{" "}
            <strong>tabuleiros litorâneos</strong>, o que explica sua baixa
            altitude.
          </p>

          <h3 className="text-center text-3xl">Clima e Vegetação</h3>
          <ul>
            <li>
              <strong>Clima:</strong> Tropical Litorâneo, classificado como
              Tropical Semiúmido. Caracteriza-se por altas temperaturas e alta
              umidade.
            </li>
            <li>
              <strong>Temperatura Média Anual:</strong> Cerca de 26 graus
              Celsius.
            </li>
            <li>
              <strong>Período Chuvoso:</strong> Geralmente de março a agosto.
            </li>
            <li>
              <strong>Bioma:</strong> Integra o bioma Mata Atlântica. A
              vegetação inclui Floresta Tropical, Manguezais (nos estuários) e
              Restinga (na área litorânea).
            </li>
          </ul>
        </section>

        <section id="sociais">
          <h2 className="text-center text-3xl">
            Demografia e Aspectos Sociais
          </h2>
          <p className="text-justify">
            Aracaju é a cidade mais populosa de Sergipe.
          </p>
          <ul>
            <li>
              <strong>População Total (IBGE 2022):</strong> 602.757 habitantes.
            </li>
            <li>
              <strong>Densidade Demográfica (IBGE 2022):</strong> 3.308,89
              habitantes por km².
            </li>
            <li>
              <strong>Taxa de Urbanização:</strong> 100%.
            </li>
            <li>
              <strong>Gentílico:</strong> Aracajuano.
            </li>
            <li>
              <strong>Composição Étnica:</strong> A maioria da população se
              autodeclara parda (aproximadamente 55,4%), seguida por brancos
              (cerca de 29,7%) e pretos (14,4%).
            </li>
          </ul>

          <h3 className="text-center text-3xl">
            Índice de Desenvolvimento Humano (IDH)
          </h3>
          <p className="text-justify">
            Aracaju historicamente se destaca como uma das capitais com melhor
            qualidade de vida na Região Nordeste.
          </p>
          <ul>
            <li>
              <strong>IDH (2010):</strong> 0,770 (Considerado Alto).
            </li>
          </ul>
          <h4>Componentes do IDH (2010):</h4>
          <ul>
            <li>
              <strong>IDHM - Longevidade:</strong> 0,823
            </li>
            <li>
              <strong>IDHM - Educação:</strong> 0,708
            </li>
            <li>
              <strong>IDHM - Renda:</strong> 0,784
            </li>
          </ul>
        </section>

        <section id="politica-economia">
          <h2 className="text-center text-4xl">
            Estrutura Política e Economia
          </h2>

          <h3 className="text-center text-3xl">Política e Administração</h3>
          <p className="text-justify">
            Como capital do estado, Aracaju concentra as sedes dos poderes
            Executivo (Prefeitura), Legislativo (Câmara Municipal) e Judiciário
            estaduais. Aracaju é o núcleo da{" "}
            <strong>Região Metropolitana de Aracaju</strong>, que inclui os
            municípios de Barra dos Coqueiros, Nossa Senhora do Socorro e São
            Cristóvão.
          </p>

          <h3 className="text-center text-3xl">Economia</h3>
          <p>A economia de Aracaju é a mais importante do estado de Sergipe.</p>
          <ul>
            <li>
              <strong>PIB (2021):</strong> R$ 18,4 bilhões (aproximadamente
              35,5% do PIB sergipano).
            </li>
            <li>
              <strong>PIB per capita (2021):</strong> R$ 27.364,4.
            </li>
            <li>
              <strong>Setor Predominante:</strong> O{" "}
              <strong>Setor Terciário</strong> (Serviços e Comércio) é o líder
              absoluto da economia, com grande destaque para a atividade
              turística.
            </li>
          </ul>
        </section>

        <section id="turismo-cultura">
          <h2 className="text-center text-4xl">Turismo e Cultura</h2>
          <p className="text-justify">
            O turismo é um pilar econômico de Aracaju, aproveitando a beleza de
            seu litoral e sua riqueza cultural. ## Turismo em Aracaju: A Orla
            Mais Estruturada do Nordeste Aracaju, a capital de Sergipe,
            destaca-se no cenário turístico nordestino por sua organização
            urbana planejada e pela excelência de sua infraestrutura litorânea.
            O turismo na cidade é fortemente ancorado no sol, mar e na rica
            cultura sergipana, oferecendo uma experiência agradável e acessível
            aos visitantes. O principal cartão-postal da cidade é a **Orla de
            Atalaia**. Considerada por muitos a mais bem estruturada do Nordeste
            brasileiro, a orla estende-se por vários quilômetros, oferecendo
            lazer completo. Ela conta com calçadões amplos, ciclovias extensas,
            quadras poliesportivas, lagos artificiais com pedalinhos, e o
            **Monumento aos Formadores de Sergipe** (os famosos Arcos de
            Atalaia). A segurança e a limpeza constante tornam o local ideal
            para passeios a qualquer hora do dia. Integrada à orla está a
            **Passarela do Caranguejo**, um polo gastronômico vibrante onde o
            crustáceo, preparado de diversas formas, é a estrela principal. A
            passarela é conhecida pela sua vida noturna agitada, com bares e
            restaurantes que servem pratos regionais e internacionais, sempre
            embalados por música ao vivo, frequentemente o forró, ritmo que
            domina o estado. Além da praia principal, o turismo em Aracaju se
            estende aos seus rios. Passeios de catamarã são populares no **Rio
            Sergipe** e no **Rio Vaza-Barris**, levando os visitantes a locais
            de beleza natural como a **Croa do Goré** e a **Ilha dos
            Namorados**, bancos de areia que emergem nas águas tranquilas dos
            estuários. O centro da cidade oferece um mergulho na cultura e
            história local, com o complexo de **Mercados Municipais** (Antônio
            Franco e Thales Ferraz) sendo um ponto de parada obrigatório. Ali, é
            possível encontrar artesanato, rendas, cerâmicas e experimentar a
            culinária sergipana autêntica, como a moqueca e a carne de sol, além
            de provar frutas típicas e doces regionais. O **Centro Histórico**
            planejado, com sua arquitetura reta e organizada, abriga importantes
            edifícios como a Catedral Metropolitana e o Palácio Museu Olímpio
            Campos. O calendário de eventos é outro atrativo. Sergipe é
            conhecido como o &quot;País do Forró&quot;, e as festividades
            juninas em Aracaju, que se estendem por todo o mês de junho, atraem
            turistas de todo o país com grandes shows, quadrilhas e farta
            culinária típica. Aracaju se consolidou como um destino que combina
            a tranquilidade de uma capital menor com a conveniência de uma
            grande cidade turística, sendo a porta de entrada para a descoberta
            das belezas naturais e tradições do interior de Sergipe.
          </p>

          <h3 className="text-center text-3xl">
            Principais Atrações Turísticas
          </h3>
          <ul>
            <li>
              <strong>Orla de Atalaia:</strong>A Orla de Atalaia é o ponto
              turístico mais famoso e emblemático de Aracaju. Sua principal
              característica é a estrutura planejada e moderna, sendo
              frequentemente citada como uma das orlas urbanas mais completas e
              seguras do Brasil.Considerada uma das mais bem estruturadas do
              Brasil, com calçadões, ciclovias e o Monumento aos Formadores de
              Sergipe.
              <ul>
                <li>
                  Infraestrutura e Lazer: A orla estende-se por mais de 6
                  quilômetros e oferece uma vasta gama de opções de lazer
                  gratuito. Inclui amplos calçadões, extensas ciclovias e pistas
                  de caminhada, quadras de vôlei de praia e de tênis, além de
                  chuveiros e postos de salvamento. É um local perfeito tanto
                  para a prática esportiva diurna quanto para o lazer noturno.
                </li>
                <li>
                  Complexos de Lazer: A orla abriga diversos complexos, como o
                  Centro de Arte e Cultura de Sergipe e o Oceanário de Aracaju
                  (projeto do Tamar), que é um dos maiores tanques marinhos do
                  Nordeste.
                </li>
                <li>
                  Monumento aos Formadores de Sergipe: Localizado no início da
                  orla, este é o famoso conjunto de arcos, um símbolo
                  arquitetônico da cidade que rende belas fotos e marca o ponto
                  de entrada da área mais turística.
                </li>
                <li>
                  Lagos da Orla: Possui lagos artificiais onde é possível alugar
                  pedalinhos. Próximo a eles, há o Parque da Cidade (não
                  confundir com o Parque da Cidade do morro), uma área verde com
                  parquinho infantil e áreas de convivência.
                </li>
              </ul>
            </li>
            <li>
              <strong>Passarela do Caranguejo:</strong> Polo gastronômico famoso
              por seus bares e restaurantes. Passarela do Caranguejo: O Coração
              Gastronômico
              <ol>
                <li>
                  Localizada dentro do complexo da Orla de Atalaia, a Passarela
                  do Caranguejo é o principal polo da vida noturna e da
                  gastronomia de Aracaju.
                </li>
                <li>
                  Foco Gastronômico: Seu nome deriva do prato que é a estrela do
                  local: o caranguejo, servido geralmente cozido e temperado,
                  acompanhado de uma tigela de pirão e molho de pimenta.
                </li>
                <li>
                  Diversidade: Além do caranguejo, a Passarela é repleta de
                  restaurantes, bares e quiosques que oferecem o melhor da
                  culinária sergipana, incluindo moquecas de frutos do mar,
                  peixes frescos e a carne de sol, bem como cozinha
                  contemporânea.
                </li>
                <li>
                  Vida Noturna: É o centro de entretenimento noturno, com muitos
                  estabelecimentos oferecendo música ao vivo (predominantemente
                  forró e MPB) e mesas ao ar livre, criando um ambiente festivo
                  e acolhedor.
                </li>
                <li>
                  Símbolo: A passarela é facilmente identificável por abrigar
                  uma escultura gigante de um caranguejo, um ponto popular para
                  fotos dos turistas.
                </li>
              </ol>
            </li>
            <li>
              <strong>
                Mercado Municipal (Antônio Franco e Thales Ferraz):
              </strong>{" "}
              Centro cultural e comercial para artesanato e culinária local.
              Mercado Municipal (Antônio Franco e Thales Ferraz): Imersão na Cultura Local
              <ol>
                <li>O complexo de Mercados Centrais de Aracaju é o verdadeiro coração comercial e cultural da cidade, essencial para quem busca uma experiência autêntica.</li>
                <li>Estrutura Tripla: O complexo é composto por três grandes mercados interligados ou próximos: Antônio Franco, Thales Ferraz e Albano Franco.</li>
                <li>Mercado Thales Ferraz (Artesanato): É o principal foco do turismo de compras. Ali, encontram-se o riquíssimo artesanato sergipano – como cerâmicas, rendas, bordados, produtos de couro, redes e peças regionais –, além de lembrancinhas.</li>
                <li>Mercado Antônio Franco (Produtos Secos e Bares): Este mercado histórico (com estruturas de ferro do início do século XX) é famoso pelas lojas de ervas medicinais, temperos, cereais, e pela concentração de bares populares que servem a culinária do dia a dia.</li>
                <li>Culinária Típica: Nos mercados, o turista pode saborear o autêntico cuscuz, tapioca, bolos regionais e caldos, comendo lado a lado com os moradores locais. É o melhor lugar para comprar especiarias e doces caseiros.</li>
              </ol>
            </li>
            <li>
              <strong>Rios Sergipe e Vaza-Barris:</strong> Oferecem passeios de
              catamarã. Rios Sergipe e Vaza-Barris: Roteiros Fluviais
              <ol>
                <li>Os estuários dos dois principais rios de Aracaju oferecem passeios náuticos relaxantes e acesso a belezas naturais únicas.</li>
                <li>Passeios de Catamarã: A principal forma de explorar os rios é através de confortáveis catamarãs que partem principalmente do píer da Orla do Bairro Industrial (Rio Sergipe) ou de pontos próximos à Orla do Vaza-Barris.</li>
                <li>Rio Vaza-Barris - Rota da Croa do Goré: Este é o passeio fluvial mais famoso. O catamarã navega pelo rio Vaza-Barris até a Croa do Goré, um banco de areia que se forma durante a maré baixa. A croa é um &quot;bar flutuante&quot; no meio do rio, ideal para banhos em águas mornas e tranquilas. O passeio geralmente inclui uma parada na Ilha dos Namorados, outra formação de areia com estrutura de apoio.</li>
                <li>Rio Sergipe: Os passeios por este rio geralmente focam na travessia para a vizinha Barra dos Coqueiros ou em roteiros que exploram a beleza dos manguezais, mostrando a rica biodiversidade da foz do rio.</li>
              </ol>
            </li>
          </ul>

          <h3 className="text-center text-3xl">Cultura e Festividades</h3>
          <p className="text-justify">
            A cultura aracajuana é marcada pelas tradições nordestinas.
          </p>
          <ul>
            <li>
              <strong>Festejos Juninos:</strong> Grandes eventos de forró e
              quadrilhas durante o mês de junho (São João).
            </li>
            <li>
              <strong>Artesanato:</strong> Destaques para cerâmica e bordado.
            </li>
            <li>
              <strong>Culinária:</strong> Rica em frutos do mar (caranguejo,
              peixes) e pratos típicos como moqueca e carne de sol.
            </li>
          </ul>
        </section>

        <section id="resumo">
          <h2 className="text-center text-4xl">Resumo de Dados Chave</h2>
          <ul>
            <li>
              <strong>População Total (IBGE 2022):</strong> 602.757 habitantes
            </li>
            <li>
              <strong>Área Total (IBGE 2022):</strong> 182,163 km²
            </li>
            <li>
              <strong>IDH (PNUD 2010):</strong> 0,770 (Alto)
            </li>
            <li>
              <strong>PIB (2021):</strong> R$ 18,4 bilhões
            </li>
          </ul>
        </section>
      </main>
    </div >
  );
}
