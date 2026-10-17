import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownToLine, BookOpen, Check, Circle, Languages, Pencil, Shapes, Star } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const sections = [
  { number: "01", title: "Matemática divertida", detail: "Contagem, números, formas, padrões e pequenos problemas.", icon: Shapes, color: "#39785C", pale: "#EAF2E8" },
  { number: "02", title: "Primeiros passos no Inglês", detail: "Cores, números, animais, família e saudações simples.", icon: Languages, color: "#4D6FA7", pale: "#EDF1F9" },
  { number: "03", title: "Caligrafia e grafismo", detail: "Linhas, curvas, percursos e coordenação do lápis.", icon: Pencil, color: "#B76E3C", pale: "#FAF0E7" },
  { number: "04", title: "Iniciação à letra cursiva", detail: "Movimentos preparatórios e primeiras formas ligadas.", icon: Pencil, color: "#8468A5", pale: "#F2EDF7" },
  { number: "05", title: "Sons, sílabas e palavras", detail: "Rimas, sons iniciais, palmas às sílabas e escuta.", icon: BookOpen, color: "#B35C68", pale: "#F9ECEE" },
  { number: "06", title: "Aprender com as mãos", detail: "Jogos práticos, atenção, observação e criatividade.", icon: Star, color: "#997824", pale: "#F8F2DF" },
];

function Index() {
  return (
    <main className="min-h-screen bg-[#F3F0E8] px-4 py-6 text-[#292F29] sm:px-8 sm:py-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 flex items-center justify-between gap-4">
          <a href="#capa" className="text-xs font-bold uppercase tracking-[.2em] text-[#526A58] sm:text-sm">Pequenos Grandes Aprendizes</a>
          <a href="/ebook/pequenos-grandes-aprendizes.html" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#C8D1C5] bg-[#FBFAF6] px-4 py-2 text-xs font-bold text-[#355D45] transition hover:bg-white sm:text-sm">
            <BookOpen size={16} /> Abrir caderno completo
          </a>
        </header>

        <section id="capa" className="relative isolate overflow-hidden rounded-sm bg-[#285B43] px-7 py-10 text-white shadow-[0_18px_55px_rgba(47,57,44,.15)] sm:px-14 sm:py-16 lg:px-20 lg:py-20">
          <div aria-hidden="true" className="absolute -right-16 -top-16 -z-10 h-72 w-72 rounded-full border-[36px] border-[#497A58]/50" />
          <div aria-hidden="true" className="absolute -bottom-20 right-24 -z-10 h-52 w-52 rotate-12 rounded-[45px] bg-[#E9C66C]" />
          <div className="max-w-2xl">
            <p className="mb-8 text-xs font-bold uppercase tracking-[.28em] text-[#D7E5D6] sm:text-sm">Caderno de atividades · 5–6 anos</p>
            <h1 className="max-w-xl text-4xl font-black leading-[1.04] tracking-[-.04em] sm:text-6xl lg:text-7xl">Pequenos<br />Grandes <span className="text-[#F0D580]">Aprendizes</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#E8F0E6] sm:text-xl sm:leading-8">Um caderno para contar, descobrir palavras, preparar a escrita e aprender através da brincadeira.</p>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-semibold text-[#F6F4E8]">
              <span className="rounded-full border border-white/30 px-4 py-2">Matemática</span>
              <span className="rounded-full border border-white/30 px-4 py-2">Inglês</span>
              <span className="rounded-full border border-white/30 px-4 py-2">Escrita e sons</span>
              <span className="rounded-full border border-white/30 px-4 py-2">Jogos práticos</span>
            </div>
          </div>
          <div className="mt-12 flex items-end justify-end gap-3 sm:absolute sm:bottom-10 sm:right-12 sm:mt-0 lg:bottom-14 lg:right-16" aria-hidden="true">
            <div className="flex h-16 w-16 -rotate-6 items-center justify-center rounded-2xl bg-[#F0D580] text-2xl font-black text-[#285B43] sm:h-20 sm:w-20 sm:text-3xl">1 2</div>
            <div className="flex h-20 w-20 rotate-3 items-center justify-center rounded-2xl bg-[#F8F6EC] text-3xl font-black text-[#4D6FA7] sm:h-24 sm:w-24 sm:text-4xl">Aa</div>
            <div className="flex h-14 w-14 rotate-6 items-center justify-center rounded-2xl bg-[#D9956A] text-3xl text-white sm:h-16 sm:w-16">★</div>
          </div>
          <div className="mt-12 border-t border-white/25 pt-5 text-xs tracking-wide text-[#D7E5D6] sm:mt-16">OBSERVAR · EXPERIMENTAR · PRATICAR · DESCOBRIR</div>
        </section>

        <section className="mx-auto max-w-3xl py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-[#6D816E]">Antes de começar</p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">Aprender com calma, brincar com intenção.</h2>
          <p className="mt-5 text-base leading-7 text-[#5D665C]">Este material foi pensado para apoiar crianças dos 5 aos 6 anos em casa ou na sala de aula. Escolha uma atividade de cada vez, leia as instruções em voz alta e dê espaço para a criança experimentar. O objetivo é desenvolver confiança e curiosidade — não terminar depressa.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["Lápis de escrever e lápis de cor", "Folhas e uma superfície confortável", "Acompanhamento paciente de um adulto"].map((item) => <div key={item} className="flex gap-3 border-t border-[#D7DCD2] py-3 text-sm leading-6 text-[#475448]"><Check size={18} className="mt-1 shrink-0 text-[#39785C]" />{item}</div>)}
          </div>
        </section>

        <section id="indice" className="border-y border-[#D8DCD2] py-12 sm:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-[#6D816E]">Índice do caderno</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Seis áreas para descobrir</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#6B7469]">Cada secção trabalha competências diferentes e pode ser utilizada ao ritmo da criança.</p>
          </div>
          <div className="divide-y divide-[#D8DCD2]">
            {sections.map((section) => {
              const Icon = section.icon;
              return <article key={section.number} className="grid gap-4 py-5 sm:grid-cols-[64px_1fr] sm:items-center sm:gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: section.pale, color: section.color }}><Icon size={25} strokeWidth={1.8} /></div>
                <div>
                  <div className="mb-1 text-xs font-bold tracking-[.18em] text-[#849082]">SECÇÃO {section.number}</div>
                  <h3 className="text-lg font-extrabold sm:text-xl">{section.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#687166]">{section.detail}</p>
                </div>
              </article>;
            })}
          </div>
        </section>

        <section id="amostra" className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.24em] text-[#6D816E]">Uma página de exemplo</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">Vamos contar!</h2>
            <p className="mt-4 leading-7 text-[#5D665C]">Conta os objectos, toca em cada um enquanto dizes o número e escreve a resposta. Um adulto pode demonstrar o primeiro exemplo.</p>
            <a href="/ebook/pequenos-grandes-aprendizes.html" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#285B43] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1D4933]"><ArrowDownToLine size={17} /> Imprimir ou guardar como PDF</a>
          </div>
          <div className="rotate-[.5deg] border border-[#D9DDD4] bg-[#FFFEFA] p-6 shadow-[0_12px_35px_rgba(47,57,44,.09)] sm:p-9">
            <div className="flex items-start justify-between border-b border-[#D9DDD4] pb-4">
              <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#6D816E]">Área 1 · Matemática</p><h3 className="mt-2 text-2xl font-black">1. Contar e associar</h3></div>
              <span className="text-xs text-[#818A7F]">Nome: __________</span>
            </div>
            <p className="mt-5 text-sm leading-6">Conta cada grupo e escreve o número na linha.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {[{ label: "A. Quantas maçãs?", objects: "● ● ●" }, { label: "B. Quantas estrelas?", objects: "☆ ☆ ☆ ☆ ☆" }, { label: "C. Quantas bolas?", objects: "○ ○" }, { label: "D. Desenha quatro círculos.", objects: "" }].map((task) => <div key={task.label} className="border border-[#D9DDD4] p-4">
                <p className="text-sm font-bold">{task.label}</p>
                {task.objects ? <div className="my-4 text-2xl tracking-[.12em] text-[#285B43]">{task.objects}</div> : <div className="my-3 h-12 border-b border-dashed border-[#C5CEC1]" />}
                <div className="mt-4 flex items-end gap-2 text-sm">Resposta: <span className="inline-block h-6 flex-1 border-b border-[#9AA698]" /></div>
              </div>)}
            </div>
            <p className="mt-6 border-t border-[#D9DDD4] pt-3 text-xs text-[#7B8579]">Pequenos Grandes Aprendizes · Matemática</p>
          </div>
        </section>

        <footer id="para-adultos" className="border-t border-[#D8DCD2] py-8 text-sm text-[#687166]">
          <p className="font-bold text-[#394B3B]">Uma nota para pais e educadores</p>
          <p className="mt-2 max-w-3xl leading-6">As crianças desenvolvem competências a ritmos diferentes. Se uma tarefa for difícil, simplifique-a, demonstre um exemplo e tente novamente noutro dia. Supervisione as atividades práticas e siga o modelo de letra cursiva utilizado pela escola.</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#D8DCD2] pt-4 text-xs">
            <span>Pequenos Grandes Aprendizes · Material educativo para 5–6 anos</span>
            <a className="font-bold text-[#285B43] underline underline-offset-4" href="/ebook/pequenos-grandes-aprendizes.html" target="_blank" rel="noreferrer">Abrir versão completa para impressão</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
