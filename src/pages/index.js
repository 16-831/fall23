import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const course = [
  {
    description: (
      <>
      Robots need to make sequential decisions to operate in the world and generalize to diverse environments. How can they learn to do so? This is what we call the "robot learning" problem and it spans topics in machine learning, visual learning, and reinforcement learning. In this course, we will learn the fundamentals of topics in machine/deep/visual/reinforcement learning and how such approaches are applied to robot decision-making. We will study fundamentals of 1) machine (deep) learning with an emphasis on approaches relevant to cognition, 2) reinforcement learning: model-based, model-free, on-policy (policy gradients), off-policy (q-learning), etc.; 2) imitation learning: behavior cloning, dagger, inverse RL and offline RL.; 3) visual learning geared towards cognition and decision making including topics like generative models and their use for robotics, learning from human videos, passive internet videos, language models; and 4) leveraging simulations, building differentiable simulations and how to transfer policies from simulation to the real world; 5) we will also briefly touch topics in neuroscience and psychology that provide cognitive motivations for several techniques in decision making. Throughout the course, we will look at many examples of how such methods can be applied to real robotics tasks as well as broader applications of decision-making beyond robotics (such as online dialogue agents, etc.). The course will provide an overview of relevant topics and open questions in the area. There will be a strong emphasis on bridging the gap between many different fields of AI. The goal is for students to get both a high-level understanding of important problems and possible solutions, as well as a low-level understanding of technical solutions. We hope that this course will inspire you to approach problems in cognition and embodied learning from different perspectives in your research.
      </>
    ),
  },
];


const staffs = [
  {
    title: 'Deepak Pathak',
    imageUrl: 'img/deepak.jpeg',
    titleUrl: 'https://www.cs.cmu.edu/~dpathak/',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Lili Chen',
    imageUrl: 'img/lili.jpg',
    titleUrl: 'http://lilichen.me',
    description: (
      <>        
      </>
    ),
  },
  {
    title: 'Tanmay Shankar',
    imageUrl: 'img/tanmay.jpeg',
    titleUrl: 'https://tanmayshankar.github.io/',
    description: (
      <>        
      </>
    ),
  },
  {
    title: 'Eliot Xing',
    imageUrl: 'img/eliot.png',
    titleUrl: 'https://etaoxing.com/',
    description: (
      <>        
      </>
    ),
  },
  {
    title: 'M. Nomaan Qureshi',
    imageUrl: 'img/nomaan.png',
    titleUrl: 'https://qureshinomaan.github.io/',
    description: (
      <>        
      </>
    ),
  },
];

function CourseFeature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--100', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <p>{description}</p>
    </div>
  );
}

function StaffFeature({imageUrl, title, description, titleUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  const fontSizeStyle = { fontSize: '16px' };
  return (
    <div className={clsx('col col--2', styles.feature)}>
      <div className="text--center">
         <h3 style={fontSizeStyle}><a href={titleUrl} target="_blank">{title}</a></h3>
      </div>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {course && course.length > 0 && (
          <section className={styles.course}>
            <div className="container">
            <br></br>
            <h1>Course Description</h1>
              <div className="row">
                {course.map((props, idx) => (
                  <CourseFeature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {staffs && staffs.length > 0 && (
          <section className={styles.staffs}>

            <div className="container">
             <h1>Staff</h1>
              <div className="row">

                {staffs.map((props, idx) => (
                  <StaffFeature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
