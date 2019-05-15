import React from 'react'
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
  
  const Button = styled.button`
  position: fixed;
  cursor: pointer;
  top: 1rem;
  right: 0.5rem;
  z-index: 1;
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

const Index = () => (
  <>
    <Layout />
    <a href="./CV_AlexandreDoria_en.pdf" download>
    <Button>
      <SVG viewBox='0 0 20 20'>
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
      </SVG>
      Get CV
    </Button>
    </a>
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Alex Dória.
        </BigTitle>
        <Subtitle>I'm creating nice web experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Antônio Novais Filho's Office"
            link="http://antonionovaisfilho.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my entry to Adobe's #ChallengeYourPerspective contest.
          </ProjectCard>
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
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Alex Dória" />
          <AboutSub>
            Born to create & share.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Programmer since 14yo, with experience in the PHP, Javascript and Java languages, also has knowledge in areas such as system modeling, information security, computer networks and project management. In 2018, he became Scrum Master, and since then he realizes the skills of connecting and boosting people.

          Fluent in Portuguese, proficient in English, basic French and beginner in Spanish.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:alexandredoria.01@hotmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/alexandredoria/" target="_blank">Linkedin</a> ,{' '}
            <a href="https://github.com/alexandredoria" target="_blank">Github</a> ,{' '}
            <a href="https://www.instagram.com/alexdoria01/" target="_blank">Instagram</a> &{' '}
            <a href="https://api.whatsapp.com/send?phone=5579998765245" target="_blank">Whatsapp</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Alexandre Dória - Portfolio.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
