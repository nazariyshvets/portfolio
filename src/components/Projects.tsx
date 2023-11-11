import SingleProject from "./SingleProject";
import { useLang } from "../hooks/hooks";
import {
  CineTrailTr,
  WordyTr,
  RhythmicReelTr,
  InterTechTr,
} from "../translations/translations";

const Projects = () => {
  const lang = useLang();

  const PROJECTS = [
    {
      video: "cinetrail.mp4",
      link: "https://cinetrail-4d12a.web.app/",
      desc: (
        <>
          <p>
            <span className="font-medium text-red">
              {CineTrailTr.brand[lang]}
            </span>{" "}
            {CineTrailTr.desc[lang]}
          </p>
          <ul className="list-inside list-disc">
            <li>{CineTrailTr.signup[lang]}</li>
            <li>{CineTrailTr.watch[lang]}</li>
            <li>{CineTrailTr.add[lang]}</li>
            <li>{CineTrailTr.search[lang]}</li>
            <li>{CineTrailTr.view[lang]}</li>
            <li>{CineTrailTr.upload[lang]}</li>
            <li>{CineTrailTr.select[lang]}</li>
          </ul>
        </>
      ),
    },
    {
      video: "wordy.mp4",
      link: "https://wordy-16943.web.app/",
      desc: (
        <>
          <p>
            <span className="font-medium text-red">{WordyTr.brand[lang]}</span>{" "}
            {WordyTr.desc[lang]}
          </p>
          <ul className="list-inside list-disc">
            <li>{WordyTr.create[lang]}</li>
            <li>{WordyTr.learn[lang]}</li>
            <ol className="list-inside list-decimal px-4">
              <li>{WordyTr.flashcards[lang]}</li>
              <li>{WordyTr.writing[lang]}</li>
              <li>{WordyTr.listening[lang]}</li>
              <li>{WordyTr.multipleChoice[lang]}</li>
              <li>{WordyTr.multipleMatch[lang]}</li>
            </ol>
            <li>{WordyTr.upload[lang]}</li>
            <li>{WordyTr.customize[lang]}</li>
          </ul>
        </>
      ),
    },
    {
      video: "rhythmicreel.mp4",
      link: "https://rhythmicreel.web.app/",
      desc: (
        <>
          <p>
            <span className="font-medium text-red">
              {RhythmicReelTr.brand[lang]}
            </span>{" "}
            {RhythmicReelTr.desc[lang]}
          </p>
          <ul className="list-inside list-disc">
            <li>{RhythmicReelTr.musicPlayer[lang]}</li>
            <li>{RhythmicReelTr.bg[lang]}</li>
            <li>{RhythmicReelTr.search[lang]}</li>
          </ul>
        </>
      ),
    },
    {
      video: "intertech.mp4",
      link: "https://webstore-eta.vercel.app/",
      desc: (
        <>
          <p>
            <span className="font-medium text-red">
              {InterTechTr.brand[lang]}
            </span>{" "}
            {InterTechTr.desc[lang]}
          </p>
          <ul className="list-inside list-disc">
            <li>{InterTechTr.signupLogin[lang]}</li>
            <li>{InterTechTr.userProfile[lang]}</li>
            <li>{InterTechTr.userInfo[lang]}</li>
            <li>{InterTechTr.salesReports[lang]}</li>
            <li>{InterTechTr.search[lang]}</li>
            <li>{InterTechTr.commodityLimit[lang]}</li>
            <li>{InterTechTr.comment[lang]}</li>
            <li>{InterTechTr.purchase[lang]}</li>
          </ul>
        </>
      ),
    },
  ];

  const projects = PROJECTS.map(({ video, link, desc }, i) => (
    <SingleProject
      key={link}
      video={video}
      link={link}
      desc={desc}
      isVideoOnLeft={i % 2 == 0}
    />
  ));

  return <div className="flex flex-col gap-y-8">{projects}</div>;
};

export default Projects;
