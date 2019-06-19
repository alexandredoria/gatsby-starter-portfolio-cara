import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

import { hidden } from '../styles/utils'
import flag from '../images/flag-sprite.svg'
import social from '../images/social-sprite.svg'
import { content, codeLang } from '../content.js'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`
const StickRightSide = styled.div`
position: fixed;
top: 1rem;
right: 0.5rem;
z-index: 1;
cursor: pointer;
`
const Button = styled.button`
  background: #9561e2;
  color: white;
  font-size: 1em;
  font-weight: bold;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid #9561e2;
  border-radius: 3px;
  :hover{
    background: #352465;
  }
  :active{
    background: #1f133f;
  }
`
const SVG = styled.svg`
${tw`align-middle`};
  color: white;
  width: 16px;
  fill: white;
  margin-right: 0.5em;
`
const ChangeLanguage = styled.span`
  ${tw`font-sans text-white `};
  text-shadow: 0 5px 10px rgba(255, 255, 255, 0.15);
  position: relative;
  horizontal-align: middle;
  padding: 8px;
`
const Language = styled.ul`
  display: none;
  min-width: 215px;
  position: absolute;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  background: #fff;
  color: #3c3c3c;
  padding: 15px 0;
  right: 0;
  top: 20px;
  width: 10%;
  :hover{
    display: block;
  }
  ${ChangeLanguage}:hover & {
    display: block;
  }
  :after {
    border: 10px solid transparent;
    border-bottom: 10px solid #fff;
    content: "";
    display: block;
    height: 0;
    left: 21px;
    position: absolute;
    top: -19px;
    width: 0;
    left: auto !important;
    right: 14px;
  }
`
const Country = styled.li`
  display: inline;
  float: left;
  line-height: 1.5em;
  width: 100%;
  padding: 8px;
  & a {
    -ms-flex-align: center;
    align-items: center;
    color: #3c3c3c;
    display: -ms-flexbox;
    display: flex;
    font-size: 15px;
    font-weight: 500;
    padding: 0 15px;
    white-space: nowrap;
  }
  :hover{
    background: #e9e9e9;
    border-radius: 16px
  }
`
const Flag = styled.span`
  zoom: 0.33;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  margin-top: 10px;
  margin-right: 20px;
  display: inline-block;
  vertical-align: text-bottom;
  height: 65px;
  width: 78px;
  &.pt { background: url(${flag}) no-repeat -2px -201px; }
  &.en { background: url(${flag}) no-repeat -2px -3px; }
  &.fr { background: url(${flag}) no-repeat -2px -135px; }
  &.es { background: url(${flag}) no-repeat -2px -69px; }
`

const Social = styled.span`
  zoom: 0.33;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  margin-right: 40px;
  display: inline-block;
  &.github { background: url(${social}) no-repeat -5px 0; width: 170px; height: 170px; }
  &.skype { background: url(${social}) no-repeat 0 -176px; width: 180px; height: 160px; }
  &.whatsapp { background: url(${social}) no-repeat -4px -341px; width: 172px; height: 173px; }
  &.instagram { background: url(${social}) no-repeat -4px -518px; width: 172px; height: 172px; }
  &.twitter { background: url(${social}) no-repeat -5px -695px; width: 170px; height: 146px; }
  &.linkedin { background: url(${social}) no-repeat -4px -847px; width: 172px; height: 170px; }
  &.shake {
    @keyframes shake {
      0%, 100% {transform: translateX(0);} 
      10%, 30%, 50%, 70%, 90% {transform: translateX(-2.5px);} 
      20%, 40%, 60%, 80% {transform: translateX(2.5px);} 
    }
    animation: shake 2s; animation-iteration-count: infinite; 
  }
`

const SiteLanguage = styled.span`
vertical-align: text-top;
font-weight: bold;
`
const Index = () => (
  <>
    <Layout />
    <StickRightSide>
      <ChangeLanguage>
        <SiteLanguage><Flag className={codeLang}></Flag><SiteLanguage>{content.language}</SiteLanguage>&nbsp;</SiteLanguage>
        <SVG viewBox='0 0 650 650'>
          <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
        </SVG>
        <Language>
          <Country> <a href="http://pt.alexandredoria.com/"><Flag className="pt"></Flag><span>Português</span> </a> </Country>
          <Country> <a href="http://en.alexandredoria.com/"><Flag className="en"></Flag><span>English</span></a> </Country>
          <Country> <a href="http://fr.alexandredoria.com/"><Flag className="fr"></Flag><span>Français</span></a> </Country>
          <Country> <a href="http://es.alexandredoria.com/"><Flag className="es"></Flag><span>Español</span></a> </Country>
        </Language>
      </ChangeLanguage>
      <a href={"./CV_AlexandreDoria_" + codeLang + ".pdf"} download>
      <Button>
        <SVG viewBox='0 0 20 20'>
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
        </SVG>
        {content.CV}
      </Button>
      </a>
    </StickRightSide>
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          <span dangerouslySetInnerHTML={{ __html: content.hero.bigTitle }} />
        </BigTitle>
        <Subtitle>
          <span dangerouslySetInnerHTML={{ __html: content.hero.subTitle }} />
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>
          <span dangerouslySetInnerHTML={{ __html: content.projects.title }} />
        </Title>
        <ProjectsWrapper>
          {content.projects.ProjectCard.map((props, i) => (
              <ProjectCard key={'pc'+i}
                title={props.title}
                link={props.link}
                bg={props.bg}
              >
                {props.desc}
              </ProjectCard>
          ))}
          
         {/*  <ProjectCard
            title="Harry Potter"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I entered the DOCMA 2017 award with this Harry Potter inspired image.
          </ProjectCard>
          <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard> */}
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>
          <span dangerouslySetInnerHTML={{ __html: content.about.title }} />
        </Title>
        <AboutHero>
          <Avatar src={avatar} alt="Alex Dória" />
          <AboutSub>
            <span dangerouslySetInnerHTML={{ __html: content.about.subtitle }} />
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          <span dangerouslySetInnerHTML={{ __html: content.about.desc }} />
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>
            <span dangerouslySetInnerHTML={{ __html: content.contact.title }} />
          </Title>
          <ContactText>
            <span dangerouslySetInnerHTML={{ __html: content.contact.text }} />
          
          </ContactText>
        </Inner>
        <Footer>
          <p>
            <a href="https://www.twitter.com/alexdoria01/" target="_blank">
              <Social className="twitter" alt="Twitter"></Social>
            </a>
            <a href="https://www.instagram.com/alexdoria01/" target="_blank">
              <Social className="instagram" alt="Instagram"></Social>
            </a>
            <a href="https://www.linkedin.com/in/alexandredoria/" target="_blank">
              <Social className="linkedin" alt="Linkedin"></Social>
            </a>
            <a href="https://github.com/alexandredoria" target="_blank">
              <Social className="github" alt="Github"></Social>
            </a>
            <a className="skype-button bubble" data-contact-id="alexandredoria.01">
              <Social className="skype shake" alt="Skype"></Social>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5579998765245" target="_blank">
              <Social className="whatsapp shake" alt="Whatsapp"></Social>
            </a>
          </p>
          &copy; {new Date().getFullYear() + ' ' + content.contact.footer}
        </Footer>
      </Contact>
    </Parallax>
    <Helmet>
      <script defer="defer" src="https://swc.cdn.skype.com/sdk/v1/sdk.min.js"></script>
    </Helmet>
  </>
)

export default Index
