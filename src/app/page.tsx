import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
    const router = useRouter();

  const handleLogin = async () => {
    router.push("/login");
  };
   return (
    <div className="flex flex-col min-h-screen">
      {/* <div className="justify-center items-center flex flex-col min-h-screen"> */}
      {/* <header className="justify-around items-center flex p-3 bg-amber-200 w-svw"> */}
      {/* <header className="flex justify-around items-center p-3 bg-amber-200 w-full"> */}
      <header className="flex justify-around items-center p-3 w-full">
        <Image
          // className="px-auto"
          src="/image/p.png"
          alt="pref.js logo"
          width={150}
          height={38}
          priority
        />
        <button
          className="bg-blue-500 text-white rounded hover:bg-blue-600 w-16 md:w-22 lg:w-48 text-2xl"
          onClick={handleLogin}
        >
          Login
        </button>
      </header>
      <h1 className="text-center text-gray-700 md:text-2xl lg:text-6xl ">
        Texto h1
      </h1>
      <main className="flex flex-col px-3 md:grid md:grid-cols-2 md:gap-5 md:p-5 lg:grid lg:grid-cols-3 lg:gap-5 lg:p-5">
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
      </main>
    </div>
  );
}
