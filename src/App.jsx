import React, { useState } from 'react';
import { 
  Users, Trophy, ChevronRight, Search, Brain, PlayCircle, 
  Cake, Eye, RefreshCw, LayoutGrid, ChevronLeft 
} from 'lucide-react';

// TripleS Cosmos Member Data
const TRIPLE_S_MEMBERS = [
  { s: "S1", name: "Yoon SeoYeon", color: "#2E8B57", birthday: "August 6, 2003", nationality: "Korean", img: "https://preview.redd.it/230806-triples-twitter-update-happy-birthday-s1-seoyeon-v0-38eegqtq0hgb1.jpg?auto=webp&s=f910be1c7683f6c5dc9aea4d7b010314e156b99b", bio: "The first member of tripleS and the beginning of the journey." },
  { s: "S2", name: "Jeong HyeRin", color: "#87CEEB", birthday: "April 12, 2007", nationality: "Korean", img: "https://kpopsingers.com/wp-content/uploads/2024/01/jeong-hyerin-photo-4.jpg", bio: "Known for her incredible dance skills and stage presence." },
  { s: "S3", name: "Lee JiWoo", color: "#FFD700", birthday: "October 24, 2005", nationality: "Korean", img: "https://i.namu.wiki/i/UPljbWSl1t8wSWTIzGUTQhNqE5WORkKrGmq2HPp6I-olnLr-nakYVCbRx8V6450OEccl3d7-GJMID-RpcIMFMA.webp", bio: "A powerful vocalist who participated in 'My Teenage Girl'." },
  { s: "S4", name: "Kim ChaeYeon", color: "#FF69B4", birthday: "December 4, 2004", nationality: "Korean", img: "https://preview.redd.it/250518-triples-chaeyeon-v0-tg0rkkd55m1f1.jpg?width=640&crop=smart&auto=webp&s=d82b63e1162972d248db4279f31572ab47c979eb", bio: "Former Busters member with extensive experience in the industry." },
  { s: "S5", name: "Kim YooYeon", color: "#FFFFFF", birthday: "February 9, 2001", nationality: "Korean", img: "https://preview.redd.it/250920-triples-yooyeon-v0-mkp91hgu4hqf1.jpg?width=640&crop=smart&auto=webp&s=edda64a32569e0241963bd54cd09a198fa87ddd7", bio: "The 'Ewha Goddess' known for her determination and growth." },
  { s: "S6", name: "Kim SooMin", color: "#FFB6C1", birthday: "October 3, 2007", nationality: "Korean", img: "https://preview.redd.it/240902-triples-instagram-update-with-soomin-v0-rp0yjand1dmd1.jpg?width=640&crop=smart&auto=webp&s=c4c3a6126393b26de2f62fca9a821990b9f3c8d4", bio: "Charming member with a bright personality and lovely visuals." },
  { s: "S7", name: "Kim NaKyoung", color: "#800080", birthday: "February 13, 2002", nationality: "Korean", img: "https://i.pinimg.com/736x/55/56/5b/55565b74af9a5b5574418ed01396467e.jpg", bio: "Sister of singer BIBI, possessing a unique and trendy aura." },
  { s: "S8", name: "Gong YuBin", color: "#FF8C00", birthday: "February 3, 2005", nationality: "Korean", img: "https://i.redd.it/250508-triples-yubin-is-so-beautiful-v0-htc9o7xdmt4f1.jpg?width=1668&format=pjpg&auto=webp&s=7d566c013ad74887fec4eed371c36fa53dfa5fce", bio: "The main dancer with sharp movements and charismatic energy." },
  { s: "S9", name: "Kaede", color: "#FFFFE0", birthday: "December 20, 2005", nationality: "Japanese", img: "https://preview.redd.it/230109-twitter-update-with-kaede-my-3rd-edition-objekt-has-v0-4qtmx12832ba1.jpg?width=640&crop=smart&auto=webp&s=4d898216f40484b18edd003efb7edf2a04d4e1f6", bio: "The first Japanese member of tripleS." },
  { s: "S10", name: "Seo DaHyun", color: "#E6E6FA", birthday: "January 8, 2003", nationality: "Korean", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/241130_Dahyun_MMA.jpg", bio: "Main vocalist known for her incredible high notes." },
  { s: "S11", name: "Kotone", color: "#F0E68C", birthday: "March 10, 2004", nationality: "Japanese", img: "https://preview.redd.it/240916-triples-kotone-v0-oc9a3r85edpd1.jpg?width=640&crop=smart&auto=webp&s=4f0d1cb049c459f6dafc1b467ec6ad16588dace2", bio: "Japanese member who participated in 'Girls Planet 999'." },
  { s: "S12", name: "Kwak YeonJi", color: "#98FB98", birthday: "January 8, 2008", nationality: "Korean", img: "https://kpopping.com/documents/9a/1/800/240511-tripleS-YeonJi-documents-1.jpeg?v=d965b", bio: "The youngest member of the early lineup." },
  { s: "S13", name: "Nien", color: "#AFEEEE", birthday: "June 2, 2003", nationality: "Taiwanese-Vietnamese", img: "https://kpopping.com/documents/5c/2/800/250523-tripleS-Nien-on-her-way-to-Music-Bank-documents-1.jpeg", bio: "The first Taiwanese member." },
  { s: "S14", name: "Park SoHyun", color: "#4B0082", birthday: "August 5, 2002", nationality: "Korean", img: "https://i.pinimg.com/736x/f0/f6/bc/f0f6bc9489d73a9e5e710b05f3b42da6.jpg", bio: "A talented producer and dancer." },
  { s: "S15", name: "Xinyu", color: "#FF0000", birthday: "May 25, 2002", nationality: "Chinese", img: "https://preview.redd.it/240629-triples-xinyu-v0-yn547vxib4yd1.jpg?width=1080&crop=smart&auto=webp&s=ff0e9c8014ee20232bfda9858b022a69662cd6c9", bio: "The first Chinese member with elegant visuals." },
  { s: "S16", name: "Mayu", color: "#FFC0CB", birthday: "May 12, 2002", nationality: "Japanese", img: "https://i.redd.it/231113-triples-instagram-update-with-mayu-v0-7xw8xk1iw10c1.jpg?width=1080&format=pjpg&auto=webp&s=35b8905ee38ea5927b1d2672ff0a97605ddfe81a", bio: "Japanese member known for her soft vocals." },
  { s: "S17", name: "Lynn", color: "#000080", birthday: "January 5, 2006", nationality: "Japanese", img: "https://i.redd.it/240613-triples-instagram-update-with-lynn-v0-12jfhgynsb6d1.jpg?width=1080&format=pjpg&auto=webp&s=8b9aa8928b7d63fca6f5e4a64264a423e39814bb", bio: "Powerful performer with strong dance foundations." },
  { s: "S18", name: "Joobin", color: "#B0C4DE", birthday: "January 16, 2009", nationality: "Korean", img: "https://i.redd.it/250731-triples-joobin-v0-qtolh85ac7gf1.jpg?width=2160&format=pjpg&auto=webp&s=96eabf0d0fb7dbbebf707ba6d611b360f6352132", bio: "A young member with a unique vocal tone." },
  { s: "S19", name: "Jeong HaYeon", color: "#F5F5DC", birthday: "August 1, 2007", nationality: "Korean", img: "https://preview.redd.it/240323-triples-instagram-update-with-hayeon-v0-1w5zec8d53qc1.jpeg?auto=webp&s=5b85481b91fedfb5c89d296081d27ac11e12d678", bio: "Versatile member with great energy." },
  { s: "S20", name: "Park ShiOn", color: "#ADD8E6", birthday: "April 3, 2006", nationality: "Korean", img: "https://preview.redd.it/240706-triples-shion-v0-bo1uiewfnpcd1.jpeg?auto=webp&s=a9271b6fa2005c187ad130acca447f8ca427afae", bio: "Charming member with a sweet voice." },
  { s: "S21", name: "Kim ChaeWon", color: "#00CED1", birthday: "May 2, 2007", nationality: "Korean", img: "https://kpopsingers.com/wp-content/uploads/2024/10/chaewon-triples-1-3.jpg", bio: "Talented dancer and vocalist." },
  { s: "S22", name: "Sullin", color: "#FFFACD", birthday: "July 2, 2006", nationality: "Thai", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wNBwbioR77DkoNOt5mmaVcxyZU4RnUGZgQ&s", bio: "The first Thai member of tripleS." },
  { s: "S23", name: "SeoAh", color: "#DB7093", birthday: "June 11, 2010", nationality: "Korean", img: "https://preview.redd.it/240621-triples-seoah-v0-w4kddwobe4gd1.jpg?width=640&crop=smart&auto=webp&s=150695e3926bb50c4dda78cf31ba547915712c4c", bio: "The current maknae of tripleS." },
  { s: "S24", name: "JiYeon", color: "#778899", birthday: "February 13, 2004", nationality: "Korean", img: "https://i.redd.it/240818-triples-jiyeon-v0-8u2rv3ioumjd1.png?width=2333&format=png&auto=webp&s=59c977e64daace00057b76c83417193b5ad424c5", bio: "The final piece of the 24-member puzzle." }
];

const MODES = { HOME: 'home', GALLERY: 'gallery', QUIZ: 'quiz', RESULT: 'result', CODEX: 'codex' };

const QUIZ_TYPES = {
  FULL: { id: 'full', label: 'Guess the S', description: 'Match Names to S-number', icon: PlayCircle },
  VISUAL: { id: 'visual', label: 'Who is this?', description: 'Identify by profile image', icon: Eye },
  BIRTHDAY: { id: 'birthday', label: 'Birthday Quiz', description: 'Identify by birth date', icon: Cake },
};

const MemberAvatar = ({ member, size = "md", className = "" }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const dimensions = size === "lg" ? "w-full max-w-[320px] aspect-[2/3]" : "w-full aspect-[2/3]";
  
  return (
    <div 
      className={`member-card-glow relative flex items-center justify-center overflow-hidden border border-white/10 bg-zinc-900 ${dimensions} ${className}`}
      style={{ boxShadow: `0 0 30px ${member.color}11` }}
    >
      {loading && !error && <RefreshCw className="animate-spin text-white opacity-10" />}
      {error ? (
        <div className="text-center p-4">
          <span className="text-4xl font-black italic">{member.s}</span>
        </div>
      ) : (
        <img 
          src={member.img} 
          alt={member.name} 
          className={`w-full h-full object-cover transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          onError={() => { setError(true); setLoading(false); }}
        />
      )}
      <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 text-[9px] font-black border border-white/10">{member.s}</div>
    </div>
  );
};

// Inline styles to fix compilation error in Canvas preview
const Styles = () => (
  <style>{`
    @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
    
    :root {
      --cosmos-black: #000000;
      --cosmos-zinc: #09090b;
      --cosmos-border: rgba(255, 255, 255, 0.1);
    }

    body {
      background-color: var(--cosmos-black);
      color: white;
      overflow-x: hidden;
      margin: 0;
    }

    .cosmos-font-tracking {
      letter-spacing: 0.4em;
      text-transform: uppercase;
      font-weight: 900;
    }

    .glass-panel {
      background: rgba(9, 9, 11, 0.4);
      backdrop-filter: blur(12px);
      border: 1px solid var(--cosmos-border);
    }

    .member-card-glow {
      transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .member-card-glow:hover {
      border-color: rgba(255, 255, 255, 0.3);
      transform: scale(1.02);
    }

    @keyframes fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-cosmos {
      animation: fade-in 0.7s ease-out forwards;
    }

    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      background: var(--cosmos-black);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--cosmos-border);
    }
  `}</style>
);

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
      <Styles />
      <nav className="glass-panel sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView(MODES.HOME)}>
          <div className="bg-white text-black px-2 py-0.5 font-black text-xl italic">tripleS</div>
          <span className="cosmos-font-tracking text-[10px] text-white/40 hidden sm:block">Cosmos Protocol</span>
        </div>
        <button onClick={() => setView(MODES.GALLERY)} className="cosmos-font-tracking text-[10px] flex items-center gap-2">
          <LayoutGrid size={14} /> Assembly
        </button>
      </nav>

      <main className="max-w-5xl mx-auto p-6 animate-cosmos">
        {view === MODES.HOME && (
          <div className="py-20 flex flex-col items-center text-center space-y-16">
            <div className="relative border border-white/10 p-12 rounded-full bg-black">
              <Brain size={64} className="opacity-80" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter">TripleS Hub</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {Object.values(QUIZ_TYPES).map(type => (
                <button key={type.id} onClick={() => startQuiz(type.id)} className="glass-panel p-8 text-left hover:bg-zinc-900 transition-all">
                  <type.icon size={28} className="mb-6 opacity-30" />
                  <h3 className="font-black text-lg italic uppercase">{type.label}</h3>
                  <p className="text-white/30 text-[9px] cosmos-font-tracking">{type.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === MODES.GALLERY && (
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-white/5 pb-10">
              <h2 className="text-4xl font-black italic uppercase">Member Assembly</h2>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="text" placeholder="ID / NAME..." 
                  className="pl-12 pr-6 py-3 bg-zinc-900 border border-white/5 w-full md:w-64 focus:border-white outline-none cosmos-font-tracking text-[10px]"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {TRIPLE_S_MEMBERS.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase())).map(member => (
                <div key={member.s} onClick={() => { setSelectedMember(member); setView(MODES.CODEX); }} className="cursor-pointer group">
                  <MemberAvatar member={member} className="grayscale group-hover:grayscale-0" />
                  <div className="mt-3 flex justify-between font-black text-[11px] italic">
                    <span>{member.name}</span>
                    <span className="opacity-20">{member.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === MODES.CODEX && selectedMember && (
          <div className="py-6 md:py-10">
            <button onClick={() => setView(MODES.GALLERY)} className="flex items-center gap-2 text-white/40 hover:text-white font-black uppercase text-[10px] tracking-widest mb-10 transition-colors">
              <ChevronLeft size={16} /> Back to Assembly
            </button>
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              <MemberAvatar member={selectedMember} size="lg" className="shrink-0" />
              <div className="flex-1 space-y-8 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">{selectedMember.name}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass-panel p-6"><span className="text-[9px] opacity-20 block mb-1">BIRTHDAY</span>{selectedMember.birthday}</div>
                  <div className="glass-panel p-6"><span className="text-[9px] opacity-20 block mb-1">COLOR</span>{selectedMember.color}</div>
                  <div className="glass-panel p-6"><span className="text-[9px] opacity-20 block mb-1">NATIONALITY</span>{selectedMember.nationality}</div>
                </div>
                <p className="text-white/60 italic">{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        )}

        {view === MODES.QUIZ && (
          <div className="max-w-2xl mx-auto glass-panel p-10 text-center">
            <div className="cosmos-font-tracking text-[10px] opacity-20 mb-10">Sequence {currentIndex + 1} / {quizSet.length}</div>
            {activeType === 'visual' ? <MemberAvatar member={quizSet[currentIndex]} size="lg" className="mx-auto mb-8" /> : <div className="text-[10rem] font-black italic">{quizSet[currentIndex].s}</div>}
            <div className="grid grid-cols-1 gap-3 mt-12">
              {options.map(opt => (
                <button 
                  key={opt} disabled={isAnswered} onClick={() => handleAnswer(opt)}
                  className={`py-5 border font-black text-[11px] cosmos-font-tracking ${isAnswered && opt === (activeType === 'birthday' ? quizSet[currentIndex].birthday : quizSet[currentIndex].name) ? 'bg-emerald-500 text-black border-emerald-500' : 'border-white/10'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {isAnswered && <button onClick={() => currentIndex + 1 < quizSet.length ? (setCurrentIndex(currentIndex + 1), generateOptions(quizSet[currentIndex + 1], activeType)) : setView(MODES.RESULT)} className="mt-10 w-full bg-white text-black py-5 font-black italic">NEXT</button>}
          </div>
        )}

        {view === MODES.RESULT && (
          <div className="max-w-md mx-auto py-12 text-center glass-panel p-16">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-8">Score: {score}</h2>
            <button onClick={() => setView(MODES.HOME)} className="w-full py-5 bg-white text-black font-black italic uppercase">Return Home</button>
          </div>
        )}
      </main>
    </div>
  );
}