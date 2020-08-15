import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Card, CardContent, Hidden, IconButton } from '@material-ui/core'
import { Facebook, LinkedIn, Twitter, GitHub } from '@material-ui/icons'

import profile from '../components/profile'

import { Experience, Qualifications, ResearchPublications } from '../data/about'

const About = styled.div`
  line-height: 1.5;
`

const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const MB2 = styled.div`
  margin-bottom: 0.125;
`

const MB4 = styled.div`
  margin-bottom: 0.25rem;
`

const MB8 = styled.div`
  margin-bottom: 0.5rem;
`

const MB8SM32 = styled.div`
  margin-bottom: 0.5rem;

  @media (min-width: 600px) {
    margin-bottom: 2rem;
  }
`

const MB16 = styled.div`
  margin-bottom: 1rem;
`

const MB24 = styled.div`
  margin-bottom: 1.5rem;
`

const MB32 = styled.div`
  margin-bottom: 2rem;
`

const MB40 = styled.div`
  margin-bottom: 2.5rem;
`

const Profile = styled(profile)`
  width: 10rem;
`

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const ProfileContentItem = styled.div``

const ProfileContentTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 4rem;
  }
`

const ProfileWrapper = styled.div`
  @media (min-width: 600px) {
    min-width: 324px;
    width: 35%;
    height: 35%;
  }
`

const PublicationsTitle = styled.span`
  font-weight: 500;
`

const PublicationsWrapper = styled.div``

const QualificationWrapper = styled.div`
  align-items: flex-center;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    align-items: flex-end;
    flex-direction: row;
  }
`
const QualificationDate = styled.div`
  font-size: 0.75rem;

  @media (min-width: 600px) {
    padding-left: 0.5rem;
    padding-bottom: 0.2rem;
  }
`

const QualificationDescription = styled.div`
  @media (min-width: 600px) {
    font-style: italic;
    padding-left: 0.25rem;
  }
`

const QualificationInstitution = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  width: 6rem;
`

const Skill = styled.div`
  margin-left: 0;
`

const SkillDates = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
`

const SkillTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`

const SkillTitleDescription = styled.div`
  @media (min-width: 600px) {
    padding-left: 0.25rem;
  }
`

const SkillTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;

  @media (min-width: 600px) {
    align-items: flex-end;
    flex-direction: row;
    flex-flow: row wrap;
  }
`

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
`

const StyledCard = styled(Card)`
  border-radius: 0;
  margin: 0;
  max-width: 60rem;
  padding: 0;

  @media (min-width: 600px) {
    border-radius: 6px;
  }
`

const StyledCardContent = styled(CardContent)`
  padding: 0;

  @media (min-width: 600px) {
    padding: 1rem;
  }
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  font-color: black;
  height: 100%;
  justify-content: center;
  line-height: 1.5;
  margin: 0;
  padding: 0;

  @media (min-width: 600px) {
    padding: 1rem;
  }
`

const Education = (): JSX.Element => (
  <>
    {Qualifications.map((qualification, index) => (
      <div key={index}>
        <QualificationWrapper>
          <QualificationInstitution>
            {qualification.institution}
          </QualificationInstitution>
          <MB4 />
          {/* <Hidden xsDown> - </Hidden> */}
          <QualificationDescription>
            {qualification.description}
          </QualificationDescription>
          <MB4 />
          <QualificationDate>
            <Hidden xsDown>(</Hidden>
            {qualification.date}
            <Hidden xsDown>)</Hidden>
          </QualificationDate>
        </QualificationWrapper>
        <MB16 />
      </div>
    ))}
  </>
)

const Publications = (): JSX.Element => (
  <>
    {ResearchPublications.map((publication, index) => (
      <div key={index}>
        <PublicationsWrapper>
          <PublicationsTitle>Published:</PublicationsTitle>
          <span>{publication}</span>
        </PublicationsWrapper>
        <MB16 />
      </div>
    ))}
  </>
)

const WorkExperience = (): JSX.Element => (
  <>
    {Experience.map((experience, index) => (
      <Skill key={index}>
        <SkillDates>{experience.dates}</SkillDates>
        <MB4 />
        <SkillTitleWrapper>
          <SkillTitle>{experience.title}</SkillTitle>
          <MB2 />
          <SkillTitleDescription>
            <Hidden xsDown> - </Hidden>
            {experience.titleDescription}
          </SkillTitleDescription>
        </SkillTitleWrapper>
        <MB8 />

        {experience.description && <MB4 />}
        <div>{experience.description}</div>
        <MB24 />
      </Skill>
    ))}
  </>
)

const SecondPage = () => (
  <Layout>
    <SEO title='About' />
    <Wrapper>
      <StyledCard>
        <StyledCardContent>
          <Header>
            <ProfileWrapper>
              <Profile />
            </ProfileWrapper>
            <ProfileContent>
              <ProfileContentTitle>Taariq Mullins</ProfileContentTitle>
              <MB32 />
              <ProfileContentItem>
                Founder and GOD of{' '}
                <a
                  href='https://figornaartjie.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  figornaartjie
                </a>
                .
              </ProfileContentItem>
              <MB8 />

              <ProfileContentItem>
                Creator of{' '}
                <a
                  href='https://receiptsandinvoices.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Receipts And Invoices
                </a>
                .
              </ProfileContentItem>
              <MB8SM32 />
              <ProfileContentItem>
                <SocialMediaIcons>
                  <IconButton
                    aria-label='linked-in'
                    href='https://www.linkedin.com/in/taariq-mullins-902a298/'
                    target='_blank'
                  >
                    <LinkedIn fontSize='large' />
                  </IconButton>
                  <IconButton
                    aria-label='facebook'
                    href='https://www.facebook.com/tjma2001'
                    target='_blank'
                  >
                    <Facebook fontSize='large' />
                  </IconButton>
                  <IconButton
                    aria-label='twitter'
                    href='https://twitter.com/tjma2001'
                    target='_blank'
                  >
                    <Twitter fontSize='large' />
                  </IconButton>
                  <IconButton
                    aria-label='github'
                    href='https://github.com/tjma2001'
                    target='_blank'
                  >
                    <GitHub fontSize='large' />
                  </IconButton>
                </SocialMediaIcons>
              </ProfileContentItem>
            </ProfileContent>
          </Header>
          <BodyContent>
            <MB24 />
            <Title>About</Title>
            <MB16 />
            <About>
              <p>
                I have strong skills in project management and the ability to
                handle the entire lifecycle of a project. This applies to the
                entire stack from project conception, continuous integration,
                and deployment.
              </p>
              <MB16 />

              <p>
                I would also consider myself a maker at heart. When I am not
                spending time developing solutions for clients, you can find me
                tinkering away at various hydroponic and farming experiments.
                Almost always involving some IoT components. It must be my
                fascination with connecting the digital and physical worlds.
              </p>
              <MB16 />

              <p>
                I am currently slowly working through a Ph.D. in this very area
                hoping to slowly see the light in my research.
              </p>
            </About>
            <MB40 />

            <Title>Experience</Title>
            <MB16 />
            <WorkExperience />
            <MB40 />

            <Title>Education</Title>
            <MB16 />
            <Education />
            <MB40 />

            <Title>Research Publications</Title>
            <MB16 />
            <Publications />
            <MB24 />
          </BodyContent>
        </StyledCardContent>
      </StyledCard>
    </Wrapper>
  </Layout>
)

export default SecondPage
