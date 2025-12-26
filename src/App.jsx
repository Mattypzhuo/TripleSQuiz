import React, { useState, useEffect } from 'react';
import { 
  Users, Trophy, ChevronRight, Search, Brain, PlayCircle, 
  Cake, Eye, RefreshCw, LayoutGrid, ChevronLeft 
} from 'lucide-react';

// TripleS Cosmos Member Data
const TRIPLE_S_MEMBERS = [
  { s: "S1", name: "Yoon SeoYeon", color: "#2E8B57", birthday: "August 6, 2003", img: "https://kprofiles.com/wp-content/uploads/2022/05/Seoyeon.webp", bio: "The first member of tripleS and the beginning of the journey." },
  { s: "S2", name: "Jeong HyeRin", color: "#87CEEB", birthday: "April 12, 2007", img: "https://kprofiles.com/wp-content/uploads/2022/05/Hyerin-1.webp", bio: "Known for her incredible dance skills and stage presence." },
  { s: "S3", name: "Lee JiWoo", color: "#FFD700", birthday: "October 24, 2005", img: "https://kprofiles.com/wp-content/uploads/2022/05/Jiwoo-1.webp", bio: "A powerful vocalist who participated in 'My Teenage Girl'." },
  { s: "S4", name: "Kim ChaeYeon", color: "#FF69B4", birthday: "December 4, 2004", img: "https://kprofiles.com/wp-content/uploads/2022/06/Chaeyeon.webp", bio: "Former Busters member with extensive experience in the industry." },
  { s: "S5", name: "Kim YooYeon", color: "#FFFFFF", birthday: "February 9, 2001", img: "https://kprofiles.com/wp-content/uploads/2022/07/Yooyeon.webp", bio: "The 'Ewha Goddess' known for her determination and growth." },
  { s: "S6", name: "Kim SooMin", color: "#FFB6C1", birthday: "October 3, 2007", img: "https://kprofiles.com/wp-content/uploads/2022/08/Soomin.webp", bio: "Charming member with a bright personality and lovely visuals." },
  { s: "S7", name: "Kim NaKyoung", color: "#800080", birthday: "February 13, 2002", img: "https://kprofiles.com/wp-content/uploads/2022/08/Nakyoung.webp", bio: "Sister of singer BIBI, possessing a unique and trendy aura." },
  { s: "S8", name: "Gong YuBin", color: "#FF8C00", birthday: "February 3, 2005", img: "https://kprofiles.com/wp-content/uploads/2022/09/Yubin.webp", bio: "The main dancer with sharp movements and charismatic energy." },
  { s: "S9", name: "Kaede", color: "#FFFFE0", birthday: "December 20, 2005", img: "https://kprofiles.com/wp-content/uploads/2022/11/Kaede.webp", bio: "The first Japanese member of tripleS." },
  { s: "S10", name: "Seo DaHyun", color: "#E6E6FA", birthday: "January 8, 2003", img: "https://kprofiles.com/wp-content/uploads/2022/12/Dahyun.webp", bio: "Main vocalist known for her incredible high notes." },
  { s: "S11", name: "Kotone", color: "#F0E68C", birthday: "March 10, 2004", img: "https://kprofiles.com/wp-content/uploads/2023/01/Kotone.webp", bio: "Japanese member who participated in 'Girls Planet 999'." },
  { s: "S12", name: "Kwak YeonJi", color: "#98FB98", birthday: "January 8, 2008", img: "https://kprofiles.com/wp-content/uploads/2023/01/Yeonji.webp", bio: "The youngest member of the early lineup." },
  { s: "S13", name: "Nien", color: "#AFEEEE", birthday: "June 2, 2003", img: "https://kprofiles.com/wp-content/uploads/2023/03/Nien.webp", bio: "The first Taiwanese member." },
  { s: "S14", name: "Park SoHyun", color: "#4B0082", birthday: "August 5, 2002", img: "https://kprofiles.com/wp-content/uploads/2023/04/Sohyun.webp", bio: "A talented producer and dancer." },
  { s: "S15", name: "Xinyu", color: "#FF0000", birthday: "May 25, 2002", img: "https://kprofiles.com/wp-content/uploads/2023/07/Xinyu.webp", bio: "The first Chinese member with elegant visuals." },
  { s: "S16", name: "Mayu", color: "#FFC0CB", birthday: "May 12, 2002", img: "https://kprofiles.com/wp-content/uploads/2023/07/Mayu.webp", bio: "Japanese member known for her soft vocals." },
  { s: "S17", name: "Lynn", color: "#000080", birthday: "January 5, 2006", img: "https://kprofiles.com/wp-content/uploads/2023/12/Lynn.webp", bio: "Powerful performer with strong dance foundations." },
  { s: "S18", name: "Joobin", color: "#B0C4DE", birthday: "January 16, 2009", img: "https://kprofiles.com/wp-content/uploads/2024/04/Joobin.webp", bio: "A young member with a unique vocal tone." },
  { s: "S19", name: "Jeong HaYeon", color: "#F5F5DC", birthday: "August 1, 2007", img: "https://kprofiles.com/wp-content/uploads/2024/04/Hayeon.webp", bio: "Versatile member with great energy." },
  { s: "S20", name: "Park ShiOn", color: "#ADD8E6", birthday: "April 3, 2006", img: "https://kprofiles.com/wp-content/uploads/2024/04/Shion.webp", bio: "Charming member with a sweet voice." },
  { s: "S21", name: "Kim ChaeWon", color: "#00CED1", birthday: "May 2, 2007", img: "https://kprofiles.com/wp-content/uploads/2024/04/Chaewon.webp", bio: "Talented dancer and vocalist." },
  { s: "S22", name: "Sullin", color: "#FFFACD", birthday: "July 2, 2006", img: "https://kprofiles.com/wp-content/uploads/2024/04/Sullin.webp", bio: "The first Thai member of tripleS." },
  { s: "S23", name: "SeoAh", color: "#DB7093", birthday: "June 11, 2010", img: "https://kprofiles.com/wp-content/uploads/2024/04/Seoah.webp", bio: "The current maknae of tripleS." },
  { s: "S24", name: "JiYeon", color: "#778899", birthday: "February 13, 2004", img: "https://kprofiles.com/wp-content/uploads/2024/04/Jiyeon.webp", bio: "The final piece of the 24-member puzzle." }
];

const MODES = { HOME: 'home', GALLERY: 'gallery', QUIZ: 'quiz', RESULT: 'result', CODEX: 'codex' };

const QUIZ_TYPES = {
  FULL: { id: 'full', label: 'Guess the S', description: 'Match Names to S-number', icon: PlayCircle },
  VISUAL: { id: 'visual', label: 'Who is this?', description: 'Identify by profile image', icon: Eye },
  BIRTHDAY: { id: 'birthday', label: 'Birthday Quiz', description: 'Identify by birth date', icon: Cake },
};

// Inline styles component to handle CSS without otdelen fail
const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
    
    :root {
      --cosmos-black: #000000;
      --cosmos-zinc: #09090b;
      --cosmos-border: rgba(255, 255, 255, 0.1);
    }

    body {
      background-color: var(--cosmos-black);
      color: white;
      font-family: 'Inter', sans-serif;
      margin: 0;
      overflow-x: hidden;
    }

    .cosmos-font-tracking {
      letter-spacing: 0.4em;
      text-transform: uppercase;
      font-weight: 900;
    }

    .glass-panel {
      background: rgba(15, 15, 20, 0.7);
      backdrop-filter: blur(12px);
      border: 1px solid var(--cosmos-border);
      border-radius: 4px;
    }

    .member-card-glow {
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .member-card-glow:hover {
      border-color: rgba(255, 255, 255, 0.4);
      transform: scale(1.03);
      z-index: 10;
    }

    @keyframes fade-in {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-cosmos {
      animation: fade-in 0.6s ease-out forwards;
    }

    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      background: #000;
    }
    ::-webkit-scrollbar-thumb {
      background: #333;
    }
  `}} />
);

const MemberAvatar = ({ member, size = "md", className = "" }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const dimensions = size === "lg" ? "w-full max-w-[320px] aspect-[2/3]" : "w-full aspect-[2/3]";
  
  return (
    <div 
      className={`member-card-glow relative flex items-center justify-center overflow-hidden border border-white/10 bg-zinc-900 ${dimensions} ${className}`}
      style={{ 
        boxShadow: `0 10px 40px ${member.color}15`,
        borderColor: error ? `${member.color}30` : 'rgba(255,255,255,0.1)'
      }}
    >
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
          <RefreshCw className="animate-spin text-white opacity-20" />
        </div>
      )}
      
      {error ? (
        <div className="flex flex-col items-center justify-center text-center p-4 bg-zinc-950 inset-0 absolute">
          <span className="text-6xl font-black italic opacity-20 select-none" style={{ color: member.color }}>{member.s}</span>
          <span className="text-[10px] cosmos-font-tracking opacity-40 mt-2">Signal Lost</span>
        </div>
      ) : (
        <img 
          src={member.img} 
          alt={member.name} 
          className={`w-full h-full object-cover transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          onError={() => { 
            console.warn(`Failed to load image for ${member.s}`);
            setError(true); 
            setLoading(false); 
          }}
        />
      )}
      <div className="absolute top-2 left-2 bg-black/90 px-2 py-1 text-[10px] font-black border border-white/10 z-20">
        {member.s}
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState(MODES.HOME);
  const [activeType, setActiveType] = useState('full');
  const [quizSet, setQuizSet] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const startQuiz = (type) => {
    const pool = [...TRIPLE_S_MEMBERS].sort(() => Math.random() - 0.5);
    setActiveType(type);
    setQuizSet(pool);
    setCurrentIndex(0);
    setScore(0);
    setView(MODES.QUIZ);
    generateOptions(pool[0], type);
  };

  const generateOptions = (correctMember, type) => {
    const others = TRIPLE_S_MEMBERS.filter(m => m.s !== correctMember.s).sort(() => Math.random() - 0.5).slice(0, 3);
    const correctVal = type === 'birthday' ? correctMember.birthday : correctMember.name;
    const poolOptions = others.map(m => type === 'birthday' ? m.birthday : m.name);
    setOptions([...poolOptions, correctVal].sort(() => Math.random() - 0.5));
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswer = (option) => {
    if (isAnswered) return;
    const correctVal = activeType === 'birthday' ? quizSet[currentIndex].birthday : quizSet[currentIndex].name;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === correctVal) setScore(s => s + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <GlobalStyles />
      <nav className="glass-panel sticky top-0 z-50 px-6 py-4 flex justify-between items-center mx-4 mt-4">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView(MODES.HOME)}>
          <div className="bg-white text-black px-2 py-0.5 font-black text-xl italic leading-none">tripleS</div>
          <span className="cosmos-font-tracking text-[9px] text-white/40 hidden sm:block">Cosmos Protocol</span>
        </div>
        <div className="flex gap-6">
          <button onClick={() => setView(MODES.GALLERY)} className="cosmos-font-tracking text-[9px] flex items-center gap-2 hover:text-white/60 transition-colors">
            <LayoutGrid size={14} /> Assembly
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 animate-cosmos">
        {view === MODES.HOME && (
          <div className="py-24 flex flex-col items-center text-center space-y-16">
            <div className="relative border border-white/10 p-14 rounded-full bg-zinc-900/30">
              <Brain size={80} className="opacity-40" />
            </div>
            <div>
              <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-4">TripleS Hub</h1>
              <p className="cosmos-font-tracking text-[10px] text-white/30">Evaluate your synchronicity with the cosmos</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              {Object.values(QUIZ_TYPES).map(type => (
                <button key={type.id} onClick={() => startQuiz(type.id)} className="glass-panel p-10 text-left hover:bg-zinc-900/50 transition-all group">
                  <type.icon size={32} className="mb-8 opacity-30 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-black text-xl italic uppercase mb-2">{type.label}</h3>
                  <p className="text-white/40 text-[10px] cosmos-font-tracking leading-relaxed">{type.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === MODES.GALLERY && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
              <div>
                <h2 className="text-5xl font-black italic uppercase tracking-tight">Member Assembly</h2>
                <p className="text-white/20 cosmos-font-tracking text-[9px] mt-2">Active Signals: {TRIPLE_S_MEMBERS.length}</p>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="text" placeholder="SEARCH IDENTITY..." 
                  className="pl-12 pr-6 py-4 bg-zinc-900/50 border border-white/10 w-full focus:border-white/40 outline-none cosmos-font-tracking text-[10px] transition-all"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {TRIPLE_S_MEMBERS.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.s.toLowerCase().includes(searchTerm.toLowerCase())).map(member => (
                <div key={member.s} onClick={() => { setSelectedMember(member); setView(MODES.CODEX); }} className="cursor-pointer group animate-cosmos">
                  <MemberAvatar member={member} className="grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="mt-4 flex justify-between items-center px-1">
                    <span className="font-black text-[10px] italic uppercase tracking-tight">{member.name.split(' ')[1] || member.name}</span>
                    <span className="text-[9px] font-bold opacity-20">{member.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === MODES.CODEX && selectedMember && (
          <div className="py-12">
            <button onClick={() => setView(MODES.GALLERY)} className="flex items-center gap-3 text-white/30 hover:text-white font-black uppercase text-[10px] tracking-widest mb-16 transition-colors">
              <ChevronLeft size={16} /> Back to Assembly
            </button>
            <div className="flex flex-col md:flex-row gap-16 items-center md:items-start">
              <MemberAvatar member={selectedMember} size="lg" className="shrink-0 shadow-2xl" />
              <div className="flex-1 space-y-10 text-center md:text-left">
                <div>
                  <span className="inline-block bg-white text-black font-black italic px-3 py-1 text-sm mb-4 uppercase">{selectedMember.s}</span>
                  <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">{selectedMember.name}</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="glass-panel p-8">
                    <span className="text-[9px] opacity-30 block mb-2 cosmos-font-tracking">Birth Signal</span>
                    <span className="text-xl font-bold">{selectedMember.birthday}</span>
                  </div>
                  <div className="glass-panel p-8">
                    <span className="text-[9px] opacity-30 block mb-2 cosmos-font-tracking">Spectrum Color</span>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-white/20" style={{ backgroundColor: selectedMember.color }}></div>
                      <span className="text-xl font-bold uppercase">{selectedMember.color}</span>
                    </div>
                  </div>
                </div>
                <div className="glass-panel p-8">
                   <span className="text-[9px] opacity-30 block mb-4 cosmos-font-tracking">Transmission Data</span>
                   <p className="text-white/70 leading-relaxed text-lg italic">"{selectedMember.bio}"</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === MODES.QUIZ && (
          <div className="max-w-2xl mx-auto glass-panel p-12 text-center mt-10">
            <div className="flex justify-between items-center mb-16 px-2">
              <div className="cosmos-font-tracking text-[10px] opacity-40">Stage {currentIndex + 1} of {quizSet.length}</div>
              <div className="cosmos-font-tracking text-[10px] text-emerald-500">Sync: {Math.round((score / (currentIndex || 1)) * 100)}%</div>
            </div>
            
            <div className="min-h-[300px] flex items-center justify-center mb-16">
              {activeType === 'visual' ? (
                <MemberAvatar member={quizSet[currentIndex]} size="lg" className="mx-auto" />
              ) : (
                <div className="text-[12rem] font-black italic leading-none tracking-tighter animate-cosmos">
                  {quizSet[currentIndex].s}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {options.map(opt => {
                const correctVal = activeType === 'birthday' ? quizSet[currentIndex].birthday : quizSet[currentIndex].name;
                const isCorrect = opt === correctVal;
                const isThisSelected = selectedAnswer === opt;
                
                let btnClass = "border-white/10 hover:border-white/30";
                if (isAnswered) {
                  if (isCorrect) btnClass = "bg-emerald-500 text-black border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]";
                  else if (isThisSelected) btnClass = "bg-red-500 text-white border-red-500 opacity-50";
                  else btnClass = "opacity-20 border-white/5";
                }

                return (
                  <button 
                    key={opt} disabled={isAnswered} onClick={() => handleAnswer(opt)}
                    className={`py-6 border font-black text-[12px] cosmos-font-tracking transition-all duration-300 ${btnClass}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <button 
                onClick={() => currentIndex + 1 < quizSet.length ? (setCurrentIndex(currentIndex + 1), generateOptions(quizSet[currentIndex + 1], activeType)) : setView(MODES.RESULT)} 
                className="mt-12 w-full bg-white text-black py-6 font-black italic tracking-widest hover:bg-white/90 transition-colors animate-cosmos"
              >
                NEXT SIGNAL <ChevronRight className="inline-block ml-2" size={18} />
              </button>
            )}
          </div>
        )}

        {view === MODES.RESULT && (
          <div className="max-w-xl mx-auto py-24 text-center glass-panel p-20 mt-10">
            <Trophy size={60} className="mx-auto mb-10 text-yellow-500 opacity-50" />
            <h2 className="text-2xl cosmos-font-tracking opacity-40 mb-2">Final Synchronicity</h2>
            <div className="text-8xl font-black italic uppercase tracking-tighter mb-16">
              {score}/{quizSet.length}
            </div>
            <div className="space-y-4">
              <button onClick={() => startQuiz(activeType)} className="w-full py-6 border border-white/20 font-black italic uppercase tracking-widest hover:bg-white/5 transition-all">Restart Protocol</button>
              <button onClick={() => setView(MODES.HOME)} className="w-full py-6 bg-white text-black font-black italic uppercase tracking-widest hover:bg-white/90 transition-all">Return Home</button>
            </div>
          </div>
        )}
      </main>
      
      <footer className="py-12 text-center opacity-20">
        <p className="cosmos-font-tracking text-[8px]">MODHAUS / tripleS Cosmos Database v2.4.0</p>
      </footer>
    </div>
  );
}