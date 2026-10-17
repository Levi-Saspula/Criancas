import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowDownToLine, ArrowRight, BookOpen, Check, ChevronDown, ChevronRight,
  CircleHelp, Clock3, GraduationCap, Heart, Home, Languages, Lightbulb,
  Menu, Pencil, Search, Shapes, Sparkles, Star, Target, Trophy, X
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

type Module = {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  count: number;
  color: string;
  soft: string;
  icon: typeof BookOpen;
  skills: string[];
  activityTitle: string;
  instruction: string;
  tasks: string[];
  answers: string[];
};

const modules: Module[] = [
  {
    id: "matematica", number: "01", title: "Matemática divertida", short: "Números e raciocínio",
    description: "Contar, comparar quantidades, descobrir padrões e resolver pequenos desafios.",
    count: 30, color: "#287D61", soft: "#E8F4EC", icon: Shapes,
    skills: ["Contagem e números", "Formas e padrões", "Quantidades e operações"],
    activityTitle: "Vamos contar!", instruction: "Conta os objetos de cada grupo e escreve o número na caixa.",
    tasks: ["🍎 🍎 🍎", "⭐ ⭐ ⭐ ⭐ ⭐", "⚽ ⚽", "✏️ ✏️ ✏️ ✏️"],
    answers: ["3", "5", "2", "4"]
  },
  {
    id: "ingles", number: "02", title: "Primeiros passos no Inglês", short: "Palavras do dia a dia",
    description: "Vocabulário inicial com imagens, cores, números, animais e saudações.",
    count: 25, color: "#4776B8", soft: "#EAF1FC", icon: Languages,
    skills: ["Colours & numbers", "Animals & family", "Saudações simples"],
    activityTitle: "Match the animals", instruction: "Liga cada palavra inglesa à imagem correspondente.",
    tasks: ["CAT", "DOG", "FISH", "BIRD"],
    answers: ["Gato", "Cão", "Peixe", "Pássaro"]
  },
  {
    id: "caligrafia", number: "03", title: "Caligrafia e grafismo", short: "Preparar a mão",
    description: "Traçados, linhas, curvas e percursos para praticar o controlo do lápis.",
    count: 25, color: "#D17A35", soft: "#FFF0E3", icon: Pencil,
    skills: ["Linhas e curvas", "Coordenação motora fina", "Padrões gráficos"],
    activityTitle: "Segue o caminho", instruction: "Percorre os traços devagar, tentando manter o lápis dentro das linhas.",
    tasks: ["Linha reta  ─ ─ ─ ─ ─", "Ondas       ∿ ∿ ∿ ∿", "Ziguezague  /\\/\\/\\/"],
    answers: ["Traçar sem pressa", "Seguir as curvas", "Controlar a direção"]
  },
  {
    id: "cursiva", number: "04", title: "Iniciação à letra cursiva", short: "Movimentos da escrita",
    description: "Movimentos preparatórios e primeiras letras, respeitando o ritmo de cada criança.",
    count: 20, color: "#8B65B5", soft: "#F2ECFA", icon: Pencil,
    skills: ["Movimentos ligados", "Formação de letras", "Cópia orientada"],
    activityTitle: "Os movimentos da cursiva", instruction: "Segue o modelo e experimenta repetir o movimento com calma.",
    tasks: ["Curvas suaves", "Arcos repetidos", "Pequenas ligações"],
    answers: ["Valorizar o controlo", "Não exigir velocidade", "Usar um modelo escolar consistente"]
  },
  {
    id: "sons", number: "05", title: "Sons, sílabas e palavras", short: "Preparar para ler",
    description: "Rimas, sons iniciais, divisão oral de sílabas e associação de imagens.",
    count: 25, color: "#C45B69", soft: "#FCECEF", icon: BookOpen,
    skills: ["Sons iniciais", "Rimas e escuta", "Sílabas orais"],
    activityTitle: "Palmas às sílabas!", instruction: "Diz cada palavra devagar e bate uma palma por cada sílaba.",
    tasks: ["CASA", "BANANA", "SOL"],
    answers: ["CA-SA = 2", "BA-NA-NA = 3", "SOL = 1"]
  },
  {
    id: "praticas", number: "06", title: "Aprender com as mãos", short: "Brincar e descobrir",
    description: "Jogos com materiais seguros de casa para observar, classificar e construir.",
    count: 20, color: "#B28A28", soft: "#FBF4D9", icon: Lightbulb,
    skills: ["Classificar objetos", "Construir e contar", "Observar e explicar"],
    activityTitle: "O jogo dos objetos", instruction: "Agrupa objetos por cor, forma ou tamanho. Depois explica como os organizaste.",
    tasks: ["1. Escolhe 6 tampas grandes e seguras.", "2. Faz grupos segundo uma característica.", "3. Conta os objetos de cada grupo."],
    answers: ["A regra de classificação pode variar.", "Pede à criança para explicar a escolha.", "Supervisiona sempre a atividade."]
  }
];

function Index() {
  const [activeModule, setActiveModule] = useState("matematica");
  const [showAnswers, setShowAnswers] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const selected = modules.find((item) => item.id === activeModule) ?? modules[0];
  const filteredModules = useMemo(
    () => modules.filter((item) => (item.title + " " + item.short + " " + item.description).toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const chooseModule = (id: string) => {
    setActiveModule(id);
    setShowAnswers(false);
    setMobileMenu(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F8F4] text-[#202B25]">
      <header className="sticky top-0 z-30 border-b border-[#E5E9E2] bg-[#F7F8F4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-7 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Pequenos Grandes Aprendizes - início">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#236A50] text-white shadow-sm"><BookOpen size={21} /></div>
            <div>
              <div className="text-sm font-extrabold tracking-tight sm:text-base">Pequenos Grandes Aprendizes</div>
              <div className="text-[11px] font-medium text-[#718078]">Coleção educativa · 5–6 anos</div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#647168] md:flex">
            <a className="transition hover:text-[#236A50]" href="#colecao">A coleção</a>
            <a className="transition hover:text-[#236A50]" href="#amostra">Ver uma atividade</a>
            <a className="transition hover:text-[#236A50]" href="#para-adultos">Para adultos</a>
          </nav>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="rounded-xl border border-[#E0E6DE] p-2 md:hidden" aria-label={mobileMenu ? "Fechar menu" : "Abrir menu"}>
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a href="#amostra" className="hidden items-center gap-2 rounded-full bg-[#236A50] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#18553E] md:inline-flex">Explorar atividades <ArrowRight size={16} /></a>
        </div>
        {mobileMenu && <div className="border-t border-[#E5E9E2] px-5 py-3 md:hidden"><div className="flex flex-col gap-3 text-sm font-semibold"><a href="#colecao" onClick={() => setMobileMenu(false)}>A coleção</a><a href="#amostra" onClick={() => setMobileMenu(false)}>Ver uma atividade</a><a href="#para-adultos" onClick={() => setMobileMenu(false)}>Para adultos</a></div></div>}
      </header>

      <main id="inicio">
        <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 pb-14 pt-10 sm:px-7 sm:pt-14 lg:grid-cols-[1.04fr_.96fr] lg:px-10 lg:pb-20 lg:pt-16">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9E9DC] bg-white px-3 py-1.5 text-xs font-bold text-[#236A50] shadow-sm"><Sparkles size={14} /> Aprender pode ser uma aventura</div>
            <h1 className="text-4xl font-black leading-[1.08] tracking-[-.045em] text-[#20352A] sm:text-5xl lg:text-[62px]">Pequenos passos.<br/><span className="text-[#287D61]">Grandes descobertas.</span></h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#647168] sm:text-lg">Uma coleção prática de atividades para crianças dos 5 aos 6 anos — para explorar números, palavras, escrita e criatividade em casa ou na sala de aula.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#colecao" className="inline-flex items-center gap-2 rounded-full bg-[#236A50] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(35,106,80,.18)] transition hover:-translate-y-0.5 hover:bg-[#18553E]">Explorar a coleção <ArrowRight size={17}/></a>
              <a href="#amostra" className="inline-flex items-center gap-2 rounded-full border border-[#DCE3DB] bg-white px-5 py-3 text-sm font-bold text-[#31473A] transition hover:bg-[#EEF4EC]"><BookOpen size={17}/> Ver atividade de exemplo</a>
              <a href="/ebook/pequenos-grandes-aprendizes.html" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#DCE3DB] bg-white px-5 py-3 text-sm font-bold text-[#236A50] transition hover:bg-[#EEF4EC]"><BookOpen size={17}/> Pré-visualizar caderno completo</a>
              <a href="/ebook/pequenos-grandes-aprendizes.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#DCE3DB] bg-white px-5 py-3 text-sm font-bold text-[#236A50] transition hover:bg-[#EEF4EC]"><ArrowDownToLine size={17}/> Abrir caderno PDF</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#647168]">
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-[#287D61}"/> 6 áreas de aprendizagem</span>
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-[#287D61}"/> Para casa e escola</span>
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-[#287D61}"/> Ritmo adaptado à criança</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="absolute -right-2 top-5 h-28 w-28 rounded-full bg-[#F1D47C]/50 blur-2xl sm:right-5"/>
            <div className="absolute -bottom-2 left-1 h-32 w-32 rounded-full bg-[#C8E4D0]/70 blur-2xl"/>
            <div className="relative rounded-[30px] border border-[#E3E8DE] bg-white p-4 shadow-[0_25px_70px_rgba(44,66,49,.10)] sm:p-6">
              <div className="grid grid-cols-[.92fr_1.08fr] gap-4 sm:gap-5">
                <div className="flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#236A50] p-5 text-white sm:min-h-[350px] sm:p-6">
                  <div><div className="text-[10px] font-bold uppercase tracking-[.2em] text-[#CFE8D6]">Coleção de atividades</div><div className="mt-7 text-2xl font-black leading-tight sm:text-3xl">Pequenos<br/>Grandes<br/><span className="text-[#F6D879]">Aprendizes</span></div><p className="mt-4 text-xs leading-5 text-[#E0F0E4]">Descobrir · praticar · crescer</p></div>
                  <div className="relative mt-6 flex h-24 items-end justify-center gap-2">
                    <div className="flex h-16 w-16 rotate-[-9deg] items-center justify-center rounded-2xl bg-[#F5D879] text-[#24583F]"><Shapes size={31}/></div>
                    <div className="flex h-20 w-20 rotate-[5deg] items-center justify-center rounded-2xl bg-[#F7F7E9] text-[#4776B8]"><Pencil size={34}/></div>
                    <div className="absolute bottom-0 right-0 flex h-11 w-11 items-center justify-center rounded-full bg-[#E99C69] text-white"><Star size={21} fill="currentColor"/></div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 py-1">
                  <div className="rounded-2xl bg-[#F4F7F0] p-3 sm:p-4"><div className="mb-2 flex items-center gap-2 text-xs font-bold text-[#287D61]"><Shapes size={15}/> MATEMÁTICA</div><div className="text-sm font-extrabold">Vamos contar!</div><div className="mt-3 flex gap-1 text-xl">🍎 🍎 🍎</div><div className="mt-2 h-1.5 rounded-full bg-[#DCE8DC]"><div className="h-1.5 w-2/3 rounded-full bg-[#287D61]"/></div></div>
                  <div className="rounded-2xl bg-[#F0F4FC] p-3 sm:p-4"><div className="mb-2 flex items-center gap-2 text-xs font-bold text-[#4776B8]"><Languages size={15}/> INGLÊS</div><div className="text-sm font-extrabold">Learn new words</div><div className="mt-3 flex items-center justify-between rounded-xl bg-white px-3 py-2"><span className="text-sm font-bold">CAT</span><span className="text-2xl">🐈</span></div></div>
                  <div className="rounded-2xl bg-[#FFF3E8] p-3 sm:p-4"><div className="mb-2 flex items-center gap-2 text-xs font-bold text-[#C56C2B]"><Pencil size={15}/> CALIGRAFIA</div><div className="text-sm font-extrabold">Traça com calma</div><div className="mt-3 text-lg tracking-[.22em] text-[#9BA79D]">∿ ∿ ∿ ∿</div></div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[#EDF0EA] pt-4 text-xs text-[#718078]"><span className="inline-flex items-center gap-2"><Heart size={14} className="text-[#D4777E}"/> Feito para aprender com carinho</span><span className="font-semibold">Edição para 5–6 anos</span></div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E8ECE5] bg-white py-6">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-5 px-4 sm:px-7 md:grid-cols-4 lg:px-10">
            {[{n:"6",label:"áreas de aprendizagem"},{n:"145",label:"fichas planeadas"},{n:"5–6",label:"anos de idade"},{n:"1",label:"coleção integrada"}].map((stat) => <div key={stat.label} className="text-center"><div className="text-2xl font-black tracking-tight text-[#236A50] sm:text-3xl">{stat.n}</div><div className="mt-1 text-xs font-medium text-[#718078] sm:text-sm">{stat.label}</div></div>)}
          </div>
        </section>

        <section id="colecao" className="mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><div className="text-xs font-extrabold uppercase tracking-[.18em] text-[#287D61]">Dentro da coleção</div><h2 className="mt-3 text-3xl font-black tracking-tight text-[#20352A] sm:text-4xl">Seis formas de aprender.</h2><p className="mt-3 max-w-2xl leading-7 text-[#647168]">Escolhe uma área para conhecer os objetivos e experimentar uma atividade. Cada caderno tem uma progressão pensada para praticar sem sobrecarregar.</p></div>
            <div className="relative w-full sm:max-w-xs"><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#829087]"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Procurar uma área..." className="w-full rounded-full border border-[#DDE5DA] bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#6FA58A] focus:ring-4 focus:ring-[#DDEFE3]"/></div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredModules.map((item) => {
              const Icon = item.icon;
              const active = item.id === activeModule;
              return <button key={item.id} onClick={() => { chooseModule(item.id); document.getElementById("amostra")?.scrollIntoView({ behavior: "smooth", block: "start" }); }} className={`group relative overflow-hidden rounded-[24px] border p-5 text-left transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(40,64,45,.08)] sm:p-6 ${active ? "border-[#7BAE91] bg-[#FBFDF9] shadow-[0_8px_25px_rgba(40,64,45,.06)]" : "border-[#E3E9E0] bg-white"}`}>
                <div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{backgroundColor:item.soft,color:item.color}}><Icon size={23}/></div><span className="text-xs font-extrabold tracking-[.15em] text-[#A1ACA2]">{item.number}</span></div>
                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-[#263A2E]">{item.title}</h3><p className="mt-2 min-h-[48px] text-sm leading-6 text-[#718078]">{item.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-[#EDF0EA] pt-4"><span className="text-xs font-bold text-[#647168]">{item.count} fichas planeadas</span><span className="inline-flex items-center gap-1 text-sm font-bold" style={{color:item.color}}>Explorar <ChevronRight size={16}/></span></div>
              </button>;
            })}
          </div>
          {filteredModules.length === 0 && <div className="mt-5 rounded-2xl border border-dashed border-[#DDE5DA] bg-white p-8 text-center text-sm text-[#718078]">Não encontrámos uma área com esse nome. Experimenta “Inglês”, “Matemática” ou “sons”.</div>}
        </section>

        <section id="amostra" className="scroll-mt-24 bg-[#EAF1E9] py-14 sm:py-18 lg:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:px-7 lg:grid-cols-[.8fr_1.2fr] lg:gap-14 lg:px-10">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D3E4D4] bg-white/80 px-3 py-1.5 text-xs font-bold text-[#287D61]"><BookOpen size={14}/> Amostra interativa</div>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#20352A] sm:text-4xl">Experimenta uma atividade.</h2>
              <p className="mt-4 leading-7 text-[#647168]">Seleciona uma área, lê a instrução e explora o exemplo. O adulto pode consultar as respostas ou orientações quando necessário.</p>
              <div className="mt-6 flex flex-wrap gap-2">{modules.map((item) => <button key={item.id} onClick={() => chooseModule(item.id)} className={`rounded-full px-3 py-2 text-xs font-bold transition ${activeModule === item.id ? "bg-[#236A50] text-white shadow-sm" : "border border-[#D5E0D3] bg-white text-[#536459] hover:bg-[#F7FAF5]"}`}>{item.title}</button>)}</div>
              <div className="mt-7 rounded-2xl border border-[#D7E3D6] bg-white/80 p-4">
                <div className="flex items-center gap-2 text-sm font-extrabold text-[#304A38]"><Target size={17} style={{color:selected.color}}/> O que vamos praticar</div>
                <ul className="mt-3 space-y-2">{selected.skills.map((skill) => <li key={skill} className="flex items-start gap-2 text-sm text-[#647168]"><Check size={16} className="mt-0.5 shrink-0" style={{color:selected.color}}/>{skill}</li>)}</ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-[#E1E7DD] bg-white shadow-[0_20px_55px_rgba(44,66,49,.10)]">
              <div className="flex items-center justify-between px-5 py-4 sm:px-7" style={{backgroundColor:selected.soft}}>
                <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white" style={{color:selected.color}}>{(() => { const Icon = selected.icon; return <Icon size={21}/>; })()}</div><div><div className="text-[10px] font-extrabold uppercase tracking-[.15em]" style={{color:selected.color}}>Ficha {selected.number} · Amostra</div><div className="mt-0.5 text-sm font-extrabold text-[#263A2E]">{selected.title}</div></div></div>
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#647168]">5–6 anos</span>
              </div>
              <div className="p-5 sm:p-8">
                <div className="text-center"><div className="text-xs font-bold uppercase tracking-[.16em] text-[#89958B]">Pequenos Grandes Aprendizes</div><h3 className="mt-2 text-2xl font-black tracking-tight text-[#263A2E]">{selected.activityTitle}</h3><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#647168]">{selected.instruction}</p></div>
                <div className="mx-auto mt-7 max-w-lg space-y-3">
                  {selected.tasks.map((task, index) => <div key={task} className="flex items-center gap-3 rounded-2xl border border-[#E8ECE5] bg-[#FCFDFB] p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-extrabold" style={{backgroundColor:selected.soft,color:selected.color}}>{index+1}</span><div className="min-w-0 flex-1 text-base font-bold text-[#304136]">{task}</div>{activeModule === "matematica" ? <div className="h-10 w-12 rounded-lg border-2 border-dashed border-[#C8D4C7]"/> : <ChevronDown size={17} className="text-[#A1ACA2]"/>}</div>)}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button onClick={() => setShowAnswers(!showAnswers)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#DCE5DA] bg-white px-4 py-3 text-sm font-bold text-[#344A39] transition hover:bg-[#F5F8F3]"><CircleHelp size={17}/>{showAnswers ? "Ocultar respostas" : "Ver respostas / orientação"}</button>
                  <button onClick={() => window.print()} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-white transition hover:brightness-95" style={{backgroundColor:selected.color}}><ArrowDownToLine size={17}/> Imprimir esta amostra</button>
                </div>
                {showAnswers && <div className="mt-4 rounded-2xl border p-4" style={{borderColor:selected.soft,backgroundColor:selected.soft}}><div className="mb-2 text-sm font-extrabold" style={{color:selected.color}}>Respostas e orientação para o adulto</div><ul className="space-y-2">{selected.answers.map((answer,index) => <li key={answer} className="flex gap-2 text-sm leading-6 text-[#435348]"><Check size={16} className="mt-1 shrink-0" style={{color:selected.color}}/>{answer}</li>)}</ul></div>}
                <div className="mt-6 border-t border-[#EDF0EA] pt-4 text-center text-xs leading-5 text-[#89958B]">Amostra demonstrativa. A coleção completa está em desenvolvimento e deve ser revista por um educador antes da publicação.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="para-adultos" className="mx-auto max-w-[1200px] px-4 py-14 sm:px-7 lg:px-10 lg:py-20">
          <div className="text-center"><div className="text-xs font-extrabold uppercase tracking-[.18em] text-[#287D61]">Pensado para acompanhar</div><h2 className="mt-3 text-3xl font-black tracking-tight text-[#20352A] sm:text-4xl">Também ajuda quem ensina.</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-[#647168]">As atividades são uma ferramenta complementar. A presença de um adulto transforma a ficha num momento de conversa, prática e descoberta.</p></div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {[{icon:Home,title:"Para aprender em casa",body:"Sugestões simples para pais e encarregados de educação praticarem com a criança usando materiais do dia a dia."},{icon:GraduationCap,title:"Para apoiar as aulas",body:"Atividades organizadas por área, com objetivos claros e orientações que facilitam a preparação."},{icon:Clock3,title:"Ao ritmo da criança",body:"Sessões curtas, espaço para experimentar e liberdade para repetir quando uma competência ainda precisa de prática."}].map((item) => { const Icon = item.icon; return <div key={item.title} className="rounded-[24px] border border-[#E3E9E0] bg-white p-6"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F4EC] text-[#287D61]"><Icon size={23}/></div><h3 className="mt-5 text-lg font-extrabold text-[#263A2E]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#718078]">{item.body}</p></div>; })}
          </div>
          <div className="mt-8 rounded-[26px] bg-[#236A50] p-6 text-white sm:flex sm:items-center sm:justify-between sm:p-8"><div><div className="flex items-center gap-2 text-sm font-bold text-[#D2EBDD]"><Trophy size={17}/> Um bom começo para grandes aprendizagens</div><h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Aprender, praticar e descobrir.</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-[#DDEEE2]">Explora as seis áreas e escolhe uma atividade para começar hoje.</p></div><a href="#colecao" className="mt-5 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#F6D879] px-5 py-3 text-sm font-extrabold text-[#244A36] transition hover:bg-[#FFE69C] sm:mt-0">Ver cadernos <ArrowRight size={16}/></a></div>
        </section>
      </main>
      <footer className="border-t border-[#E3E9E0] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-6 text-xs text-[#849087] sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-10"><div className="font-bold text-[#526257]">Pequenos Grandes Aprendizes</div><div>Materiais educativos complementares para crianças dos 5 aos 6 anos.</div><div>Feito para aprender com carinho.</div></div>
      </footer>
    </div>
  );
}
