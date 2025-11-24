"use client";

import { useState, useEffect } from "react";
import {
  Sparkles,
  Brain,
  Zap,
  Heart,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  Frown,
  PartyPopper,
  BarChart3,
  LineChart,
} from "lucide-react";

import confetti from "canvas-confetti";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart as ReLineChart,
} from "recharts";

export default function NeuroReveal() {
  const [stage, setStage] = useState("intro");
  const [countdown, setCountdown] = useState(3);

  const startReveal = () => {
    setStage("countdown");
  };

  useEffect(() => {
    let timer: any;

    if (stage === "countdown" && countdown > 0) {
      timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    } else if (stage === "countdown" && countdown === 0) {
      setStage("reveal");
      setTimeout(() => {
        confetti({
          particleCount: 180,
          spread: 90,
          origin: { y: 0.3 },
        });
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [stage, countdown]);

  // ——————————————————————
  // GRÁFICOS
  // ——————————————————————

  const percentilData = [
    { area: "Inteligência", p: 87 },
    { area: "Memória verbal", p: 95 },
    { area: "Atenção dividida", p: 25 },
    { area: "Atenção alternada", p: 70 },
    { area: "Regulação emocional", p: 99 },
  ];

  const ansiedadeDepressao = [
    { name: "BDI-II (Depressão)", score: 42 },
    { name: "BAI (Ansiedade)", score: 28 },
  ];

  // ——————————————————————
  // CONFETTI EXTRA
  // ——————————————————————

  const fireConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.4 },
    });
  };

  // ——————————————————————
  // JSX PRINCIPAL
  // ——————————————————————

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex flex-col items-center justify-center p-4 overflow-hidden relative font-sans text-slate-900">

      {/* ELEMENTOS DE FUNDO */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-white relative z-10">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Chá Revelação Neuropsicológico
          </h1>
          <p className="text-slate-600 text-sm uppercase tracking-widest font-semibold">
            da Babi
          </p>
        </div>

        {/* ——————————————————————
            INTRO
        —————————————————————— */}
        {stage === "intro" && (
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <div className="w-48 h-48 rounded-full flex items-center justify-center shadow-inner border-4 border-dashed border-slate-400 overflow-hidden bg-slate-200">
                <iframe 
                  src="https://tenor.com/embed/12583581146583200089" 
                  width="192" 
                  height="192" 
                  className="rounded-full"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                É TDAH?
              </div>
              <div className="absolute -bottom-2 -left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce animation-delay-1000">
                É Autismo?
              </div>
            </div>

            <p className="text-lg text-slate-700 max-w-md">
              O laudo saiu. O mistério acabou. O que se passa na cabeça da Babiellen?
            </p>

            <button
              onClick={startReveal}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={20} /> REVELAR O CAOS <Sparkles size={20} />
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition duration-700"></div>
            </button>
          </div>
        )}

        {/* ——————————————————————
            COUNTDOWN
        —————————————————————— */}
        {stage === "countdown" && (
          <div className="flex flex-col items-center justify-center h-64 animate-pulse">
            <span className="text-9xl font-black">{countdown}</span>
            <p className="mt-4 text-purple-600 font-bold text-xl">Preparando laudo...</p>
          </div>
        )}

        {/* ——————————————————————
            REVEAL
        —————————————————————— */}
        {stage === "reveal" && (
          <div className="flex flex-col animate-fadeIn items-center space-y-8">

            {/* TOPO — TÍTULO ORIGINAL DO GEMINI */}
            <div className="text-center space-y-4">
              <div className="inline-block p-4 bg-green-100 rounded-full text-green-600 shadow-sm animate-bounce">
                <PartyPopper size={48} />
              </div>

              <h2 className="text-5xl font-black leading-tight text-slate-900">
                Gatinha Inteligente <br />
                <span className="text-purple-600 text-3xl font-bold">
                  &amp; Bastante Depressiva
                </span>
              </h2>

              {/* TEXTO AMARELO */}
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 italic rounded-r-lg text-lg">
                &quot;Muito depressiva pra descobrir o que sou, perdi o dinheiro, e volto em 12 meses pra tentar de novo 🤡&quot;
              </div>
            </div>

            {/* ——————————————————————
                QUADRADINHOS ORIGINAIS DO GEMINI
            —————————————————————— */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

              {/* Nem TDAH nem TEA */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3 hover:shadow-md transition">
                <XCircle className="text-red-500" size={32} />
                <div>
                  <h3 className="font-bold text-slate-900">Nem TDAH, Nem TEA</h3>
                  <p className="text-xs text-slate-600">
                    Atenção concentrada está ótima. O problema é a vontade de viver.
                  </p>
                </div>
              </div>

              {/* QI */}
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 flex items-center gap-3 hover:shadow-md transition">
                <Brain className="text-purple-600" size={32} />
                <div>
                  <h3 className="font-bold text-purple-900">QI: Médio Superior (117)</h3>
                  <p className="text-xs text-purple-600">
                    Inteligente pra caralho (laudo oficial), mais que 87% da população hehe.
                  </p>
                </div>
              </div>

              {/* Depressão */}
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 flex items-center gap-3 hover:shadow-md transition">
                <Frown className="text-blue-600" size={32} />
                <div>
                  <h3 className="font-bold text-blue-900">
                    Depressão Premium e Ansiedade no talo
                  </h3>
                  <p className="text-xs text-blue-600">
                    Nível Grave. Mas tudo isso a gente já sabia :D!.
                  </p>
                </div>
              </div>

              {/* Sensibilidade */}
              <div className="bg-pink-50 p-4 rounded-xl border border-pink-200 flex items-center gap-3 hover:shadow-md transition">
                <Heart className="text-pink-600" size={32} />
                <div>
                  <h3 className="font-bold text-pink-900">Sensibilidade: 1000%</h3>
                  <p className="text-xs text-pink-600">
                    Neuroticismo &gt;95. Chora fácil, sente muito, ama intenso. SOFRIDA!
                  </p>
                </div>
              </div>
            </div>

            {/* ——————————————————————
                SEÇÃO EXTRA — RESUMO REAL DO LAUDO
            —————————————————————— */}
            <div className="w-full mt-12 space-y-4">
              <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <AlertTriangle className="text-purple-600" /> Resumo Neuropsicológico Oficial
              </h3>

              <ul className="text-slate-800 leading-relaxed space-y-2 text-md">
                <li>• Inteligência geral dentro do intervalo médio-superior (QI 117).</li>
                <li>• Memória verbal acima da média (percentil 95).</li>
                <li>• Atenção dividida inferior (percentil 25).</li>
                <li>• Atenção alternada preservada (percentil ~70).</li>
                <li>• Regulação emocional extremamente prejudicada (percentil 99).</li>
                <li>• Ansiedade moderada (BAI = 28).</li>
                <li>• Depressão grave (BDI-II = 42).</li>
                <li>
                  • EPF-TDAH: impacto doméstico severo (T &gt; 90), acadêmico leve (T = 73).
                </li>
                <li>
                  • Conclusão clínica: quadro afetivo-ansioso grave; sem critérios formais para TEA ou TDAH estrutural.
                </li>
              </ul>
            </div>

            {/* ——————————————————————
                GRÁFICO DE PERCENTIS
            —————————————————————— */}
            <div className="w-full mt-12">
              <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2 mb-4">
                <BarChart3 className="text-blue-600" /> Percentis Cognitivos
              </h3>

              <div className="w-full h-64 bg-white rounded-xl shadow p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={percentilData}>
                    <XAxis dataKey="area" stroke="#444" />
                    <YAxis stroke="#444" />
                    <Tooltip />
                    <Bar dataKey="p" fill="#a855f7" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* ——————————————————————
                GRÁFICO DE ANSIEDADE / DEPRESSÃO
            —————————————————————— */}
            <div className="w-full mt-12">
              <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2 mb-4">
                <LineChart className="text-red-600" /> Ansiedade vs Depressão
              </h3>

              <div className="w-full h-64 bg-white rounded-xl shadow p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <ReLineChart data={ansiedadeDepressao}>
                    <XAxis dataKey="name" stroke="#444" />
                    <YAxis stroke="#444" />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#e11d48" strokeWidth={3} />
                  </ReLineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* ——————————————————————
                BOTÃO PARA REFAZER
            —————————————————————— */}
            <div className="mt-12 text-center">
              <button
                onClick={() => {
                  fireConfetti();
                  setStage("intro");
                  setCountdown(3);
                }}
                className="text-purple-600 hover:text-purple-900 font-bold underline"
              >
                Resetar para mostrar de novo
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ——————————————————————
          ANIMAÇÕES CSS
      —————————————————————— */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
