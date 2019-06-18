var pathPrefix = ''
var codeLang = pathPrefix ? pathPrefix : 'en'
var languages = {
    pt: {
        website: {
            pathPrefix: "/pt",
            siteTitle: "Alexandre Dória - Portfólio",
            siteHeadline: "Misturando a beleza da arte com eficiência da tecnologia",
            siteLanguage: "pt-br",
            siteDescription: "Ideias implementadas por Alexandre Dória",
            ogLanguage: "pt_BR"
        },
        language: "Português",
        CV: "Baixar currículo",
        hero: {
            bigTitle: "Olá, </br>Sou Alex Dória.",
            subTitle: "Eu crio boas experiências na web para a próxima geração de empresas voltadas para o consumidor."
        },
        projects: {
            title: "Projetos",
            ProjectCard: [
                {
                    title: "Escritório de advocacia Antônio Novais Filho",
                    desc: "Freelance de desing, SEO e desenvolvimento...",
                    link: "http://antonionovaisfilho.com/",
                    bg: "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                }
            ]
        },
        about: {
            title: "Sobre",
            subtitle: "Nascido para criar e compartilhar.",
            desc: "Programador desde os 14 anos, com experiência nas linguagens PHP, Javascript e Java, também possui conhecimento em áreas como modelagem de sistemas, segurança da informação, redes de computadores e gerenciamento de projetos. Em 2018, se tornou Scrum Master e desde então ele percebe as habilidades de conectar e impulsionar as pessoas.<p>Fluente em português, proficiente em <ShadowSpan><b>inglês</b></ShadowSpan>, <ShadowSpan><b>francês</b></ShadowSpan> básico e iniciante em <ShadowSpan><b>espanhol</b></ShadowSpan>.</p>Então, por que não entra em contato comigo?",
        },
        contact: {
            title: "Entrar em contato",
            text: "Mande um <a href=\"mailto:alexandredoria.01@hotmail.com\">Oi</a> ou me encontre em outras plataformas: ",
            footer: "por Alexandre Dória - Portfólio."
        }
    },
    en: {
        website: {
            pathPrefix: "/en",
            siteTitle: "Alexandre Dória - Portfolio",
            siteHeadline: "Creating marvelous art & blazginly fast websites",
            siteLanguage: "en",
            siteDescription: "Ideas implemented by Alex Dória",
            ogLanguage: "en_US"
        },
        language: "English",
        CV: "Get CV",
        hero: {
            bigTitle: "Hello, <br /> I'm Alex Dória.",
            subTitle: "I'm creating nice web experiences for the next generation of consumer-facing companies."
        },
        projects: {
            title: "Projects",
            ProjectCard: [
                {
                    title: "Antonio Novais Filho's Office",
                    desc: "Desing, SEO and software development...",
                    link: "http://antonionovaisfilho.com/",
                    bg: "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                }
            ]
        },
        about: {
            title: "About",
            subtitle: "Born to create & share.",
            desc: "Programmer since 14yo, with experience in the PHP, Javascript and Java languages, also has knowledge in areas such as system modeling, information security, computer networks and project management. In 2018, he became Scrum Master, and since then he realizes the skills of connecting and boosting people. <p>Fluent in <ShadowSpan><b>Portuguese</b></ShadowSpan>, proficient in <ShadowSpan><b>English</b></ShadowSpan>, basic <ShadowSpan><b>French</b></ShadowSpan> and beginner in <ShadowSpan><b>Spanish</b></ShadowSpan></p>.So why not get in touch with me?",
        },
        contact: {
            title: "Get in touch",
            text: "Say <a href=\"mailto:alexandredoria.01@hotmail.com\">Hi</a> or find me on other platforms: ",
            footer: "by Alexandre Dória - Portfolio."
        }
    },
    fr: {
        website: {
            pathPrefix: "/fr", 
            siteTitle: "Alexandre Dória - Portefeuille",
            siteHeadline: "Fusionner la beauté de l'art avec l'efficacité de la technologie",
            siteLanguage: "fr",
            siteDescription: "Idées mises en œuvre par Alex Dória",
            ogLanguage: "fr_FR"
        },
        language: "Français",
        CV: "Obtenir le CV",
        hero:{
            bigTitle: "Salut, <br /> je suis Alex Doria.",
            subTitle: "Je crée de belles expériences Web pour la prochaine génération d'entreprises axées sur le consommateur."
        },
        projects: {
            title: "Projects",
            ProjectCard: [
                {
                    title: "Bureau d'Antônio Novais Filho", 
                    desc: "Désing, SEO et développement de logiciels...",
                    link: "http://antonionovaisfilho.com/", 
                    bg: "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                }
            ]
        },
        about: {
            title: "À propos",
            subtitle: "Né pour créer et partager.",
            desc: "Programmeur depuis 14 ans, expérimenté dans les langages PHP, Javascript et Java, il possède également des connaissances dans des domaines tels que la modélisation de systèmes, la sécurité de l'information, les réseaux informatiques et la gestion de projets. En 2018, il est devenu Scrum Master et depuis lors, il réalise les compétences nécessaires pour connecter et stimuler les gens.<p>Parlant couramment le portugais, maîtrisant l'<ShadowSpan><b>anglais</b></ShadowSpan> et le <ShadowSpan><b>français</b></ShadowSpan> de base et débutant en <ShadowSpan><b>espagnol</b></ShadowSpan>.</p>Alors pourquoi ne pas me contacter?", 
        }, 
        contact: {
            title: "Entrer en contact",
            text: "Dites <a href=\"mailto:alexandredoria.01@hotmail.com\">bonjour</a> ou retrouvez-moi sur d'autres plateformes: ",
            footer: "par Alexandre Dória - Portefeuille."
        }
    }, 
    es: {
        website: {
            pathPrefix: "/es",
            siteTitle: "Alexandre Dória - Portafolio",
            siteHeadline: "Mezclando la belleza del arte con la eficiencia de la tecnología.",
            siteLanguage: "es",
            siteDescription: "Ideas implementadas por Alex Dória.",
            ogLanguage: "es_ES"
        },
        language: "Español",
        CV: "Descargar CV",
        hero: {
            bigTitle: "Hola, </br> Soy Alex Dória.",
            subTitle: "Creo buenas experiencias web para la próxima generación de empresas orientadas al consumidor."
        },
        projects: {
            title: "Proyectos",
            ProjectCard: [
                {
                    title: "Oficina de Abogados de Antônio Novais Filho",
                    desc: "Freelance de desiño, SEO y desarrollo de software...",
                    link: "http://antonionovaisfilho.com/",
                    bg: "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                }
            ]
        },
        about: {
            title: "Acerca de",
            subtitle: "Nacido para crear y compartir.",
            desc: "Programador desde los 14 años, con experiencia en los lenguajes PHP, Javascript y Java, también posee conocimiento en áreas como modelado de sistemas, seguridad de la información, redes de computadoras y gestión de proyectos. En 2018, se convirtió en Scrum Master y desde entonces percibe las habilidades de conectar e impulsar a las personas. <p>Fluido en <ShadowSpan><b>Portugués</b></ShadowSpan>, competentes en <ShadowSpan><b>Inglés</b></ShadowSpan>, <ShadowSpan><b>Francés</b></ShadowSpan> básico y principiante en Español.</p>Entonces, ¿por qué no entrar en contacto conmigo?",
        },
        contact: {
            title: "Entrar en contacto",
            text: "Envíale un <a href=\"mailto:alexandredoria.01@hotmail.com\">bonjour</a> o me encuentre en otras plataformas: ",
            footer: "por Alexandre Dória - Portafolio."
        }
    }
}

module.exports = {
    content: languages[codeLang],
    codeLang: codeLang,
    pathPrefix: pathPrefix
}