import React, { useState, useEffect } from 'react';
import {
    Building2,
    HardHat,
    FileText,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    Menu,
    X,
    Download,
    CheckCircle2,
    Users,
    LayoutDashboard,
    Droplets,
    Milestone, // Cambiado de 'Road' a 'Milestone' para evitar errores de exportación
    Factory
} from 'lucide-react';

// --- Tipos para el Proyecto ---
interface Proyecto {
    id: number;
    titulo: string;
    categoria: 'Vial' | 'Hidráulica' | 'Estructural' | 'Industrial';
    ingenieroLider: string;
    descripcion: string;
    urlPDF: string;
    imagen: string;
}

interface MiembroEquipo {
    id: number;
    nombre: string;
    cargo: string;
    especialidad: string;
    bio: string;
}

// --- Datos Simulados ---
const projectsData: Proyecto[] = [
    {
        id: 1,
        titulo: "Viaducto Metropolitano Norte",
        categoria: "Vial",
        ingenieroLider: "Ing. Roberto Sanz",
        descripcion: "Diseño integral de infraestructura vial con optimización de flujo vehicular y materiales sostenibles.",
        urlPDF: "#",
        imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        titulo: "Sistema de Riego Pampa Sur",
        categoria: "Hidráulica",
        ingenieroLider: "Ing. Elena Martínez",
        descripcion: "Ingeniería de detalle para canalización y distribución hídrica eficiente en zonas áridas.",
        urlPDF: "#",
        imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        titulo: "Complejo Logístico Industrial",
        categoria: "Industrial",
        ingenieroLider: "Ing. Marco Aurelio",
        descripcion: "Estructuras metálicas de alta resistencia y cimentaciones especiales para maquinaria pesada.",
        urlPDF: "#",
        imagen: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    }
];

const teamData: MiembroEquipo[] = [
    {
        id: 1,
        nombre: "Ing. Alberto Valdivia",
        cargo: "Director de Proyectos",
        especialidad: "Estructuras y Puentes",
        bio: "Más de 20 años de experiencia liderando consultorías internacionales."
    },
    {
        id: 2,
        nombre: "Ing. Claudia Fuentes",
        cargo: "Ingeniera Civil Senior",
        especialidad: "Sostenibilidad e Hidráulica",
        bio: "Experta en modelado hídrico y optimización de recursos ambientales."
    }
];

// --- Componentes Modulares ---

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Proyectos", href: "#proyectos" },
        { name: "Equipo", href: "#equipo" },
        { name: "Servicios", href: "#servicios" },
        { name: "Contacto", href: "#contacto" }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-xl py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="bg-orange-600 p-2 rounded">
                            <Building2 className="text-white w-6 h-6" />
                        </div>
                        <span className="text-white font-bold text-xl tracking-tighter">CIVIL<span className="text-orange-500 underline decoration-2 underline-offset-4">CORE</span></span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-slate-300 hover:text-orange-500 font-medium transition-colors">
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-sm font-semibold text-sm transition-all transform active:scale-95">
                            CONSULTA TÉCNICA
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-in fade-in slide-in-from-top-4">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="block px-3 py-2 text-slate-300 hover:bg-slate-800 rounded-md" onClick={() => setIsOpen(false)}>
                                {link.name}
                            </a>
                        ))}
                        <button className="w-full text-left px-3 py-2 bg-orange-600 text-white font-semibold">
                            CONSULTA TÉCNICA
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Hero = () => (
    <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000"
                alt="Construcción Civil"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-2xl">
        <span className="inline-block px-3 py-1 bg-orange-600 text-[10px] font-bold tracking-widest uppercase mb-4 rounded-sm">
          Innovación Estructural
        </span>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    Diseñando la <span className="text-orange-500">Infraestructura</span> del Mañana
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                    Especialistas en consultoría de alta complejidad. Combinamos precisión técnica con estándares globales de sostenibilidad para transformar el territorio.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-orange-600 hover:bg-orange-700 px-8 py-4 text-white font-bold flex items-center justify-center transition-all">
                        Nuestros Proyectos <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                    <button className="border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-slate-900 px-8 py-4 font-bold transition-all">
                        Ficha Técnica Corporativa
                    </button>
                </div>
            </div>
        </div>
    </section>
);

const ProjectCard = ({ project }: { project: Proyecto }) => {
    const Icon = () => {
        switch (project.categoria) {
            case 'Vial': return <Milestone className="w-5 h-5 text-orange-500" />;
            case 'Hidráulica': return <Droplets className="w-5 h-5 text-orange-500" />;
            case 'Industrial': return <Factory className="w-5 h-5 text-orange-500" />;
            default: return <LayoutDashboard className="w-5 h-5 text-orange-500" />;
        }
    };

    return (
        <div className="group bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.imagen}
                    alt={project.titulo}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
          <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 flex items-center space-x-1">
            <Icon />
            <span>{project.categoria.toUpperCase()}</span>
          </span>
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {project.titulo}
                </h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                    {project.descripcion}
                </p>
                <div className="flex items-center space-x-2 mb-6 p-2 bg-slate-50 rounded text-xs text-slate-600 italic">
                    <HardHat className="w-4 h-4 text-slate-400" />
                    <span>Líder: {project.ingenieroLider}</span>
                </div>
                <button className="w-full flex items-center justify-center space-x-2 bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 py-3 font-bold transition-all border border-transparent hover:border-orange-500">
                    <Download className="w-4 h-4" />
                    <span>Descargar Ficha Técnica (PDF)</span>
                </button>
            </div>
        </div>
    );
};

const ContactForm = () => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        setTimeout(() => setFormState('success'), 1500);
    };

    if (formState === 'success') {
        return (
            <div className="bg-white p-12 text-center shadow-xl border border-slate-100 flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitud Enviada</h3>
                <p className="text-slate-500">Un ingeniero consultor se pondrá en contacto con usted en menos de 24 horas.</p>
                <button onClick={() => setFormState('idle')} className="mt-8 text-orange-600 font-bold hover:underline">Enviar otra consulta</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nombre Completo</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Correo Corporativo</label>
                    <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" placeholder="j.perez@empresa.com" />
                </div>
            </div>
            <div className="mb-6">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tipo de Proyecto</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all">
                    <option>Infraestructura Vial</option>
                    <option>Ingeniería Hidráulica</option>
                    <option>Consultoría Estructural</option>
                    <option>Auditoría de Obra</option>
                    <option>Otros</option>
                </select>
            </div>
            <div className="mb-8">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Descripción del Requerimiento</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" placeholder="Detalle técnico breve..."></textarea>
            </div>
            <button
                disabled={formState === 'submitting'}
                className="w-full bg-slate-900 hover:bg-orange-600 text-white font-bold py-4 transition-all flex items-center justify-center space-x-2 disabled:bg-slate-400"
            >
                {formState === 'submitting' ? 'PROCESANDO...' : (
                    <>
                        <Mail className="w-5 h-5" />
                        <span>SOLICITAR CONSULTA TÉCNICA</span>
                    </>
                )}
            </button>
        </form>
    );
};

// --- Componente Principal ---

export default function App() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-200 selection:text-orange-900">
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* Servicios / Características */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: <CheckCircle2 className="w-8 h-8 text-orange-600" />, title: "Precisión Técnica", desc: "Cálculos estocásticos y modelado BIM avanzado para máxima fiabilidad." },
                            { icon: <FileText className="w-8 h-8 text-orange-600" />, title: "Cumplimiento Normativo", desc: "Aseguramos que cada plano cumpla con normativas locales e internacionales." },
                            { icon: <Users className="w-8 h-8 text-orange-600" />, title: "Enfoque Colaborativo", desc: "Comunicación fluida entre ingenieros, arquitectos y clientes." }
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6">
                                <div className="mb-4">{feature.icon}</div>
                                <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">{feature.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proyectos Section */}
            <section id="proyectos" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4">
                        <div className="max-w-xl">
                            <h2 className="text-sm font-bold text-orange-600 tracking-[0.2em] uppercase mb-2">Portafolio</h2>
                            <h3 className="text-4xl font-bold">Proyectos Emblemáticos</h3>
                            <p className="text-slate-500 mt-4">Nuestra trayectoria habla a través de estructuras que perduran y optimizan la vida ciudadana.</p>
                        </div>
                        <button className="text-slate-900 font-bold flex items-center hover:text-orange-600 transition-colors">
                            Ver todos los proyectos <ChevronRight className="ml-1 w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipo Section */}
            <section id="equipo" className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/5 -skew-x-12 transform translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-orange-500 tracking-[0.2em] uppercase mb-2">Capital Humano</h2>
                        <h3 className="text-4xl font-bold italic">Liderazgo y Experiencia</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {teamData.map((member) => (
                            <div key={member.id} className="flex flex-col items-center p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-orange-500 transition-all group text-center">
                                <div className="w-32 h-32 rounded-full bg-slate-700 mb-6 flex items-center justify-center border-4 border-slate-900 group-hover:border-orange-600 transition-all overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                                        <Users className="w-12 h-12 text-slate-400" />
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold mb-1">{member.nombre}</h4>
                                <p className="text-orange-500 font-bold text-sm uppercase mb-4 tracking-wider">{member.cargo}</p>
                                <div className="w-12 h-0.5 bg-slate-600 mb-4 group-hover:w-24 transition-all duration-500"></div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-2 font-semibold">{member.especialidad}</p>
                                <p className="text-slate-500 text-xs italic">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contacto Section */}
            <section id="contacto" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <h2 className="text-sm font-bold text-orange-600 tracking-[0.2em] uppercase mb-2">Contacto</h2>
                            <h3 className="text-4xl font-bold mb-6">Iniciemos su Próximo Desafío</h3>
                            <p className="text-slate-500 mb-10 leading-relaxed">
                                Estamos listos para aportar el rigor técnico que su proyecto necesita. Solicite una consulta inicial sin compromiso.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white p-3 shadow-md">
                                        <MapPin className="text-orange-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900 uppercase text-xs mb-1">Oficina Central</h5>
                                        <p className="text-slate-500 text-sm">Av. de la Ingeniería 450, Distrito Tecnológico</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white p-3 shadow-md">
                                        <Phone className="text-orange-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900 uppercase text-xs mb-1">Atención Directa</h5>
                                        <p className="text-slate-500 text-sm">+34 900 123 456</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white p-3 shadow-md">
                                        <Mail className="text-orange-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900 uppercase text-xs mb-1">Email Corporativo</h5>
                                        <p className="text-slate-500 text-sm">proyectos@civilcore.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <Building2 className="text-orange-500 w-6 h-6" />
                            <span className="font-bold tracking-tighter">CIVILCORE <span className="text-slate-500 font-normal">CONSULTING</span></span>
                        </div>
                        <div className="flex space-x-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
                            <a href="#" className="hover:text-white">Legal</a>
                            <a href="#" className="hover:text-white">Privacidad</a>
                            <a href="#" className="hover:text-white">Sostenibilidad</a>
                        </div>
                        <p className="text-slate-500 text-xs">© {new Date().getFullYear()} CivilCore Ltd. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}