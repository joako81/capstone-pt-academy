import React from "react";
import { Image, Container } from "semantic-ui-react";

import "./About.scss";

export function About() {
  return (
    <Container>
      <div className="about-page">
        <h1>ABOUT PT ACADEMY</h1>
        <div className="about-page-part1">
          <Image
            src={
              process.env.PUBLIC_URL +
              "/media_files/images_about/aboutpart1.jpg"
            }
            alt="Instructor talking students"
          />
          <p>
            <br></br>
            Founded in 2009, PT Academy was, and still is, the only fitness
            education company to use active personal trainers as part of its
            expert delivery team. From the beginning, our philosophy has always
            been that our students learn best from qualified personal trainers.
            Personal trainers know exactly what it takes to grow a successful
            personal training business as they’ve done it themselves. This firm
            belief has resulted in the development of our flagship learning
            method, the Flexi-Learner programme, where students are assigned an
            active personal trainer in their local region who guides them
            through their Level 2 and 3 personal trainer qualifications. The
            success of the Flexi-Learner method has meant that in just a few
            years our team has expanded. We now have over 200 active trainers
            across the UK and the highest number of assessment centres, making
            PT Academy the largest fitness education provider in the UK.
          </p>
        </div>
        <div className="about-page-part2">
          <p>
            <strong>For Trainers, By Trainers…</strong>
            <br />
            <br />
            We are PT Academy. 9 years on and having partnered with several gym
            chains including: The Gym Group, Bannantynes, Xercise 4 Less, Virgin
            Active and many other gym chains - Personal Trainer Academy is now
            the largest and fastest growing fitness education company in the UK.
            Recognised as the UK’s leading fitness and personal training course
            providers, we have the largest number of assessment centres and
            venues than any other UK training provider. We are the first
            education company to use active trainers as mentors, assessors and
            tutors of our courses. We are committed to raising standards
            throughout the health and fitness industry by innovating learning
            methods, competitive prices and high quality graduates. PT Academy
            is committed to giving people of all backgrounds the opportunity to
            become a qualified personal trainer through our competitive pricing
            and innovative learning methods. In doing this we’re producing
            high-quality graduates for the health and fitness industry. Our
            qualifications are OFQUAL regulated and certificated by NCFE, YMCA
            Awards, 1st4Sport and VTCT awarding organisations. This ensures full
            recognition from employers, the Register of Exercise Professionals
            (EREPS) and CIMSPA.
          </p>

          <Image
            src={
              process.env.PUBLIC_URL +
              "/media_files/images_about/copy-of-copy-of-untitled-1-w500.png"
            }
            alt="Instructor talking students"
          />
        </div>
      </div>
    </Container>
  );
}
