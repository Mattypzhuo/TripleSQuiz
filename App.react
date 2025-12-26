import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Trophy, 
  ChevronRight, 
  Search, 
  Brain, 
  PlayCircle, 
  Cake, 
  Eye, 
  Camera, 
  RefreshCw, 
  LayoutGrid, 
  ShieldAlert, 
  Info, 
  ChevronLeft 
} from 'lucide-react';

// TripleS Cosmos Member Data
const TRIPLE_S_MEMBERS = [
  { s: "S1", name: "Yoon SeoYeon", color: "#2E8B57", birthday: "August 6, 2003", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453937371677589767/230806-triples-twitter-update-happy-birthday-s1-seoyeon-v0-38eegqtq0hgb1.webp?ex=694f4432&is=694df2b2&hm=554de2ff8f32f3dc63690a3048d4fc4c7280c81f2d2e87fd0634863e87073283&", bio: "The first member of tripleS and the beginning of the journey." },
  { s: "S2", name: "Jeong HyeRin", color: "#87CEEB", birthday: "April 12, 2007", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453937830547030026/jeong-hyerin-photo-4.png?ex=694f449f&is=694df31f&hm=e10ad3236a333fffe11c3307d85c15414bf7f72601192e0ec30d7b78f7cf2439&", bio: "Known for her incredible dance skills and stage presence." },
  { s: "S3", name: "Lee JiWoo", color: "#FFD700", birthday: "October 24, 2005", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453938604614225930/lee-jiwoo-photo-4.png?ex=694f4558&is=694df3d8&hm=7de8c59cf96d79eb7df0ce2f253d20f75552080ba9860262df420e08b62736a8&", bio: "A powerful vocalist who participated in 'My Teenage Girl'." },
  { s: "S4", name: "Kim ChaeYeon", color: "#FF69B4", birthday: "December 4, 2004", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453939188146770083/250518-triples-chaeyeon-v0-tg0rkkd55m1f1.png?ex=694f45e3&is=694df463&hm=9dfab99270109899fe45fa3edde51856281e0a3b91807fe0993d6f055fd0f6f7&", bio: "Former Busters member with extensive experience in the industry." },
  { s: "S5", name: "Kim YooYeon", color: "#FFFFFF", birthday: "February 9, 2001", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453939281138679940/latest.png?ex=694f45f9&is=694df479&hm=da7b59384c61eaff5da60af0a6299066015c8d9b39a060219f327a113348216a&", bio: "The 'Ewha Goddess' known for her determination and growth." },
  { s: "S6", name: "Kim SooMin", color: "#FFB6C1", birthday: "October 3, 2007", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453939468775198730/240902-triples-instagram-update-with-soomin-v0-wydvf7nd1dmd1.png?ex=694f4626&is=694df4a6&hm=f1054bbfb047fe60707c318a331cdb79154174be665fe82e7cae0a509a6de8f7&", bio: "Charming member with a bright personality and lovely visuals." },
  { s: "S7", name: "Kim NaKyoung", color: "#800080", birthday: "February 13, 2002", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453939739639152691/kpop-idol-nakyoung-from-triples-v0-o7jp8e8iwimd1.png?ex=694f4666&is=694df4e6&hm=82bf62e54c856588714d36414bc7a07806486caa54d815b178da0e95991dbdae&", bio: "Sister of singer BIBI, possessing a unique and trendy aura." },
  { s: "S8", name: "Gong YuBin", color: "#FF8C00", birthday: "February 3, 2005", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453939839622844550/250508-triples-yubin-is-so-beautiful-v0-htc9o7xdmt4f1.png?ex=694f467e&is=694df4fe&hm=c862ea3653e264d8a568d55cd3c0bfee654354e17dae83e5e2e84938a945cea0&", bio: "The main dancer with sharp movements and charismatic energy." },
  { s: "S9", name: "Kaede", color: "#FFFFE0", birthday: "December 20, 2005", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453940039649333308/230109-twitter-update-with-kaede-my-3rd-edition-objekt-has-v0-4qtmx12832ba1.png?ex=694f46ae&is=694df52e&hm=5ba2358a8b7d53e522d67b0ee885cec37ac6df8e56cd2dee19936d6e191a32d8&", bio: "The first Japanese member of tripleS, known for her modeling background." },
  { s: "S10", name: "Seo DaHyun", color: "#E6E6FA", birthday: "January 8, 2003", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453940194787983421/241130_Dahyun_MMA.png?ex=694f46d3&is=694df553&hm=6aeec93767f60b3fb26e5c50f6d134930e78c3540ac9d248568824146a261f0e&", bio: "Main vocalist known for her incredible high notes and stability." },
  { s: "S11", name: "Kotone", color: "#F0E68C", birthday: "March 10, 2004", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453940483939110986/240916-tripleS-Kotone-documents-5.png?ex=694f4718&is=694df598&hm=5fe7c5ac8516a4e6776b1c8a0346cad2be1162eef17db33a7de9d0dd0fa7af4a&", bio: "Japanese member who participated in 'Girls Planet 999'." },
  { s: "S12", name: "Kwak YeonJi", color: "#98FB98", birthday: "January 8, 2008", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453940624062418944/240511-tripleS-YeonJi-documents-1.png?ex=694f4739&is=694df5b9&hm=3a4c3b6f496f87725e095c2481deba3d594abd7021d07e1e93c4135b7a6ba5f8&", bio: "The youngest member of the early lineup with great potential." },
  { s: "S13", name: "Nien", color: "#AFEEEE", birthday: "June 2, 2003", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453940690831540346/250523-tripleS-Nien-on-her-way-to-Music-Bank-documents-1.png?ex=694f4749&is=694df5c9&hm=d4eb65956e0e3d008fd2fe12f75068714a803643154801f08e7ac8a4374dd0c4&", bio: "The first Taiwanese member, bringing global charm to the group." },
  { s: "S14", name: "Park SoHyun", color: "#4B0082", birthday: "August 5, 2002", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453940815612084224/240219-tripleS-Instagram-Twitter-Update-Sohyun-documents-1.png?ex=694f4767&is=694df5e7&hm=3edef62cd1289c237a39912adfe63b3c8c1de2a2aa91b65c7abae69aabddab03&", bio: "A talented producer and dancer who creates her own music." },
  { s: "S15", name: "Xinyu", color: "#FF0000", birthday: "May 25, 2002", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453940904686780456/how-is-xinyu-so-pretty-v0-uel4cm3zlyod1.png?ex=694f477c&is=694df5fc&hm=4da64120901cd03575df5b70f2a3ffbb879ae017173b5a20fb2934b254d8aedc&", bio: "The first Chinese member with elegant visuals and stage presence." },
  { s: "S16", name: "Mayu", color: "#FFC0CB", birthday: "May 12, 2002", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453941109658095668/231113-triples-instagram-update-with-mayu-v0-5mjh8m1iw10c1.png?ex=694f47ad&is=694df62d&hm=d91c61f08ccdcf2a29776b7590aded8bab269d82bf858bc0dc68a55f96bf7a9e&", bio: "Japanese member known for her soft vocals and graceful dance." },
  { s: "S17", name: "Lynn", color: "#000080", birthday: "January 5, 2006", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453941192936128522/240613-triples-instagram-update-with-lynn-v0-12jfhgynsb6d1.png?ex=694f47c1&is=694df641&hm=3cfe671b405df1a0580fe3e7592c882dced1ae65aca10ed04f009c9b02065c6e&", bio: "Powerful performer with strong dance foundations." },
  { s: "S18", name: "Joobin", color: "#B0C4DE", birthday: "January 16, 2009", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453941324922359931/250731-triples-joobin-v0-qtolh85ac7gf1.png?ex=694f47e0&is=694df660&hm=dc3cdad00f03c9459d7bfbc43157994e62827b86e93b19a29495e87414732579&", bio: "A young member with a unique vocal tone and artistic flair." },
  { s: "S19", name: "Jeong HaYeon", color: "#F5F5DC", birthday: "August 1, 2007", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453941409965936862/240323-triples-instagram-update-with-hayeon-v0-1w5zec8d53qc1.png?ex=694f47f5&is=694df675&hm=d7021612f0239b290e564b557087298c8c54ba94c0da2d1fa8e2e2cde3b812dc&", bio: "Versatile member with great energy and performance skills." },
  { s: "S20", name: "Park ShiOn", color: "#ADD8E6", birthday: "April 3, 2006", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453941633254031360/240706-triples-shion-v0-bo1uiewfnpcd1.png?ex=694f482a&is=694df6aa&hm=7d8af0869211bca55c94c576f273cd25e59ce83a55325dc3b510bbfe8b27b1bf&", bio: "Charming member with a sweet voice and warm personality." },
  { s: "S21", name: "Kim ChaeWon", color: "#00CED1", birthday: "May 2, 2007", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453941931041226933/251221-ChaeWon-at-Apple-Music-Fansign-Event-documents-1.png?ex=694f4871&is=694df6f1&hm=05dac4bd5f50aec1ec9760055ba47c19d348bd5fe5cbc394430afe25d573653c&", bio: "Talented dancer and vocalist with a bright future." },
  { s: "S22", name: "Sullin", color: "#FFFACD", birthday: "July 2, 2006", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453941992340979743/240707-triples-sullin-never-has-been-done-with-such-aura-v0-x63sjc165hid1.png?ex=694f487f&is=694df6ff&hm=012ef5ee24118625d0b67f6fb7babdfd9324dac45af90fb36a551f87780e179e&", bio: "The first Thai member of tripleS, adding to the group's diversity." },
  { s: "S23", name: "SeoAh", color: "#DB7093", birthday: "June 11, 2010", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453942054286790718/251016-SeoAh-at-ICN-Airport-documents-1.png?ex=694f488e&is=694df70e&hm=68742deb8b9e61b6f59146504c976e20dce4242889a1a70985f3111991119a09&", bio: "The current maknae of tripleS with lovely charms." },
  { s: "S24", name: "JiYeon", color: "#778899", birthday: "February 13, 2004", img: "https://cdn.discordapp.com/attachments/1447032754930716796/1453942112256135309/240818-triples-jiyeon-v0-8u2rv3ioumjd1.png?ex=694f489c&is=694df71c&hm=fc2f897e49c44b5553ec1e38af12212b829141d29302b67a6b4493efc73ccfb2&", bio: "The final piece of the 24-member puzzle." }
];

const MemberAvatar = ({ member, size = "md", className = "" }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const dimensions = 
    size === "lg" ? "w-full max-w-[320px] aspect-[2/3]" : 
    size === "md" ? "w-32 h-44" : 
    "w-full aspect-[2/3]";
  
  return (
    <div 
      className={`${dimensions} relative flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group ${className}`}
      style={{ boxShadow: `0 0 30px ${member.color}11` }}
    >
      {loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 z-10">
           <RefreshCw className="animate-spin text-white opacity-10" size={24} />
        </div>
      )}

      {error ? (
        <div 
          className="w-full h-full flex flex-col items-center justify-center relative p-4 text-center"
          style={{ background: `linear-gradient(180deg, ${member.color}44 0%, #000 100%)` }}
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(${member.color} 1px, transparent 1px)`, backgroundSize: '10px 10px' }}></div>
          <span className="text-6xl font-black italic tracking-tighter mb-2 opacity-90">{member.s}</span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 leading-tight px-2">{member.name}</span>
          <div className="absolute bottom-6 w-12 h-1.5" style={{ backgroundColor: member.color }}></div>
        </div>
      ) : (
        <img 
          src={member.img} 
          alt={member.name} 
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
        />
      )}
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-[4px] border-white/5 group-hover:border-white/20 transition-all"></div>
      <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md text-white text-[9px] px-2 py-1 font-black z-20 border border-white/10">
        {member.s}
      </div>
    </div>
  );
};

const MODES = { HOME: 'home', GALLERY: 'gallery', QUIZ: 'quiz', RESULT: 'result', CODEX: 'codex' };

const QUIZ_TYPES = {
  FULL: { id: 'full', label: 'Guess the S', description: 'Match Member Names to their S-number', icon: PlayCircle },
  VISUAL: { id: 'visual', label: 'Who is this?', description: 'Identify members by profile image', icon: Eye },
  BIRTHDAY: { id: 'birthday', label: 'Birthday Quiz', description: 'Identify members by their birth date', icon: Cake },
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
    setActiveType(type);
    const pool = [...TRIPLE_S_MEMBERS].sort(() => Math.random() - 0.5);
    setQuizSet(pool);
    setCurrentIndex(0);
    setScore(0);
    setView(MODES.QUIZ);
    generateOptions(pool[0], type);
  };

  const generateOptions = (correctMember, type) => {
    const others = TRIPLE_S_MEMBERS.filter(m => m.s !== correctMember.s)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    const correctVal = type === 'birthday' ? correctMember.birthday : correctMember.name;
    const poolOptions = others.map(m => type === 'birthday' ? m.birthday : m.name);
    
    const shuffledOptions = [...poolOptions, correctVal].sort(() => Math.random() - 0.5);
    setOptions(shuffledOptions);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswer = (optionLabel) => {
    if (isAnswered) return;
    const correctVal = activeType === 'birthday' ? quizSet[currentIndex].birthday : quizSet[currentIndex].name;
    setSelectedAnswer(optionLabel);
    setIsAnswered(true);
    if (optionLabel === correctVal) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < quizSet.length) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      generateOptions(quizSet[nextIdx], activeType);
    } else {
      setView(MODES.RESULT);
    }
  };

  const openCodex = (member) => {
    setSelectedMember(member);
    setView(MODES.CODEX);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black antialiased">
      <nav className="bg-black/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setView(MODES.HOME)}>
          <div className="bg-white text-black px-2 py-0.5 font-black text-xl tracking-tighter uppercase italic">tripleS</div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <span className="font-black text-white/40 uppercase tracking-[0.4em] text-[10px] hidden sm:block">Cosmos Protocol</span>
        </div>
        <div className="flex items-center gap-6">
            <button 
              onClick={() => setView(MODES.GALLERY)}
              className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${view === MODES.GALLERY || view === MODES.CODEX ? 'text-white' : 'text-white/40 hover:text-white'}`}
            >
              <LayoutGrid size={14} /> Assembly
            </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6">
        {view === MODES.HOME && (
          <div className="py-20 flex flex-col items-center text-center space-y-16 animate-in fade-in duration-1000">
            <div className="relative group">
              <div className="absolute -inset-10 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-1000"></div>
              <div className="relative border border-white/10 p-12 rounded-full bg-black">
                <Brain size={64} className="text-white opacity-80" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none">
                TripleS Hub
              </h1>
              <p className="text-white/40 font-bold uppercase text-[10px] tracking-[0.5em] max-w-sm mx-auto">
                How well do you know the members of tripleS?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-10">
              {Object.values(QUIZ_TYPES).map((type) => (
                <button
                  key={type.id}
                  onClick={() => startQuiz(type.id)}
                  className="bg-zinc-900/40 border border-white/5 hover:border-white/20 hover:bg-zinc-900 p-8 rounded-none transition-all text-left group"
                >
                  <div className="mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                      {React.createElement(type.icon, { size: 28 })}
                  </div>
                  <h3 className="font-black text-lg text-white uppercase italic tracking-tight mb-2">{type.label}</h3>
                  <p className="text-white/30 text-[9px] font-black uppercase tracking-widest">{type.description}</p>
                </button>
              ))}
            </div>

            <button 
                onClick={() => setView(MODES.GALLERY)}
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 font-black uppercase text-[10px] tracking-[0.5em] transition-all"
            >
                <Users size={16} /> Explore Member Codex
            </button>
          </div>
        )}

        {view === MODES.GALLERY && (
          <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-700 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
              <div className="space-y-2">
                <span className="text-white/20 font-black uppercase tracking-[0.4em] text-[10px]">WAV Terminal</span>
                <h2 className="text-4xl font-black italic uppercase tracking-tighter">Member Assembly</h2>
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="text"
                  placeholder="ID / NAME..."
                  className="pl-12 pr-6 py-3 bg-zinc-900 border border-white/5 rounded-none w-full md:w-64 focus:border-white focus:outline-none font-black text-[10px] tracking-widest uppercase transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {TRIPLE_S_MEMBERS.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.s.toLowerCase().includes(searchTerm.toLowerCase())).map((member) => (
                <div 
                  key={member.s} 
                  className="group cursor-pointer"
                  onClick={() => openCodex(member)}
                >
                  <MemberAvatar member={member} size="fluid" className="w-full grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="mt-3 flex justify-between items-start px-1">
                    <div className="flex flex-col">
                        <span className="font-black text-[11px] italic uppercase tracking-tighter text-white/80 group-hover:text-white transition-colors">{member.name}</span>
                        <div className="h-0.5 w-0 group-hover:w-full bg-white transition-all duration-300"></div>
                    </div>
                    <span className="text-[9px] font-black text-white/20 uppercase">{member.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === MODES.CODEX && selectedMember && (
          <div className="py-6 md:py-10 animate-in fade-in zoom-in-95 duration-500">
            <button 
              onClick={() => setView(MODES.GALLERY)}
              className="flex items-center gap-2 text-white/40 hover:text-white font-black uppercase text-[10px] tracking-widest mb-10 transition-colors"
            >
              <ChevronLeft size={16} /> Back to Assembly
            </button>

            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              <div className="shrink-0 w-full md:w-auto flex justify-center">
                <MemberAvatar member={selectedMember} size="lg" className="ring-1 ring-white/10" />
              </div>
              
              <div className="flex-1 space-y-8 text-center md:text-left w-full">
                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <span className="bg-white text-black font-black px-3 py-1 text-xs">{selectedMember.s}</span>
                    <div className="h-[1px] w-12 bg-white/20"></div>
                    <span className="text-white/40 font-black uppercase text-[10px] tracking-[0.4em]">Official Status: Confirmed</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none pt-2">
                    {selectedMember.name}
                  </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-zinc-900/50 border border-white/5 p-6 space-y-1">
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Member Cycle</span>
                    <p className="font-black uppercase tracking-tight text-lg italic">{selectedMember.birthday}</p>
                  </div>
                  <div className="bg-zinc-900/50 border border-white/5 p-6 space-y-1">
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Spectrum ID</span>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: selectedMember.color }}></div>
                        <p className="font-black uppercase tracking-tight text-lg italic">{selectedMember.color}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest block">Sync Data</span>
                    <p className="text-white/60 leading-relaxed font-medium italic">
                        {selectedMember.bio}
                    </p>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-wrap gap-4 justify-center md:justify-start">
                    <button 
                        onClick={() => startQuiz('full')}
                        className="flex items-center gap-3 text-white/40 hover:text-white transition-colors font-black uppercase text-[10px] tracking-widest"
                    >
                        <RefreshCw size={14} /> Start Identity Sync
                    </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === MODES.QUIZ && quizSet[currentIndex] && (
          <div className="max-w-2xl mx-auto py-10 animate-in zoom-in-95 duration-500">
            <div className="bg-zinc-950 border border-white/10 p-10 md:p-16 rounded-none text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5">
                 <div className="h-full bg-white transition-all duration-700" style={{ width: `${((currentIndex + 1) / quizSet.length) * 100}%` }}></div>
              </div>

              <div className="flex flex-col items-center space-y-10">
                <div className="font-black text-white/20 text-[10px] uppercase tracking-[0.5em]">
                    Sequence {currentIndex + 1} of {quizSet.length}
                </div>

                {activeType === 'visual' ? (
                  <div className="space-y-8 flex flex-col items-center">
                    <MemberAvatar member={quizSet[currentIndex]} size="lg" className="border-2 border-white/20" />
                    <div className="text-3xl font-black text-white uppercase italic tracking-tighter">Who is this?</div>
                  </div>
                ) : (
                  <div className="text-[10rem] md:text-[14rem] font-black text-white tracking-tighter italic leading-none">
                    {quizSet[currentIndex].s}
                  </div>
                )}

                {activeType !== 'full' && activeType !== 'visual' && (
                  <div className="text-xl font-black text-white/20 border-t border-white/5 pt-6 w-full uppercase italic tracking-widest">
                    {activeType === 'birthday' ? quizSet[currentIndex].name : quizSet[currentIndex].s}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-3 mt-12">
                {options.map((option) => {
                  const correctVal = activeType === 'birthday' ? quizSet[currentIndex].birthday : quizSet[currentIndex].name;
                  const isCorrect = option === correctVal;
                  const isSelected = selectedAnswer === option;

                  return (
                    <button
                      key={option}
                      disabled={isAnswered}
                      onClick={() => handleAnswer(option)}
                      className={`
                        w-full py-5 rounded-none border font-black transition-all text-[11px] tracking-[0.3em] uppercase
                        ${!isAnswered ? 'hover:border-white border-white/10 bg-white/0 hover:bg-white/5' : ''}
                        ${isAnswered && isCorrect ? 'border-emerald-500 bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]' : ''}
                        ${isAnswered && isSelected && !isCorrect ? 'border-red-600 bg-red-600 text-white' : ''}
                        ${isAnswered && !isCorrect && !isSelected ? 'opacity-10 grayscale border-white/5' : ''}
                      `}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <button
                  onClick={nextQuestion}
                  className="mt-10 w-full bg-white text-black py-5 font-black text-[11px] tracking-[0.4em] uppercase flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all italic"
                >
                  Next <ChevronRight size={14} />
                </button>
              )}
            </div>
          </div>
        )}

        {view === MODES.RESULT && (
          <div className="max-w-md mx-auto py-12 text-center animate-in zoom-in-95 duration-700">
            <div className="bg-zinc-900/40 border border-white/10 p-16 rounded-none space-y-12">
              <div className="space-y-4">
                <span className="text-white/20 font-black uppercase text-[10px] tracking-[0.5em]">Session Finished</span>
                <h2 className="text-4xl font-black italic uppercase tracking-tighter">Your Score</h2>
              </div>

              <div>
                <div className="text-[10rem] font-black text-white leading-none tracking-tighter italic">
                   {score}
                </div>
                <p className="text-white/20 font-black uppercase text-[10px] tracking-[0.4em] mt-6">Correct Answers out of {quizSet.length}</p>
              </div>

              <div className="pt-6 space-y-3">
                <button onClick={() => startQuiz(activeType)} className="w-full py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-zinc-200 transition-all italic">
                   Try Again
                </button>
                <button onClick={() => setView(MODES.HOME)} className="w-full py-5 border border-white/10 text-white/30 font-black uppercase text-[10px] tracking-[0.3em] hover:text-white hover:border-white transition-all italic">
                   Return Home
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="text-center py-20 text-white/5 text-[8px] font-black uppercase tracking-[1em] pb-32">
        cosmos // protocol sync // wav network
      </footer>
    </div>
  );
}