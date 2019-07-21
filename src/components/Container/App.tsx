import React, { useEffect, useState } from "react";
import { AppWrapper, Title, Subtitle, AppFooter } from "./App.styled";
import geolocation from "../../utils/geolocation";
import Icon from "../Elements/Icon";
import Loader from "../Elements/Loader";

const content = {
  datetime: "2019-07-21T20:05:39.201Z",
  condition: "Humid",
  icon: "moon",
  temperature: 26,
  sensation: 27,
  color: "#FF0F66",
  highlight: ["fucking"],
  title: "It's|fucking|car wash|time.",
  subtitle: "Exactly! It's going to be hot as shit.",
  humidity: "85%",
  wind: "4 km/h",
  location: "Barcelona"
};

const App: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  async function getLocation() {
    try {
      const res = await geolocation();
      console.log("we have it", res);
      return res;
    } catch (err) {
      console.log("Fail to get location", err);
    }
  }
  useEffect(() => {
    getLocation();
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      console.log("Unmount");
    };
  }, []);

  return (
    <AppWrapper>
      {!isLoading ? (
        <>
          <header>
            <Icon icon={content.icon} />
            <span>
              {content.location} / {content.datetime}
            </span>
            <strong>
              {content.temperature}º/{content.sensation}º
            </strong>
          </header>
          <section>
            <Title>
              {content.title.split("|").map((line: string, index: number) => {
                const color: string = content.highlight.includes(line)
                  ? content.color
                  : "inherit";
                return (
                  <span key={index} style={{ color }}>
                    {index === 0 ? null : <br />}
                    {line}
                  </span>
                );
              })}
            </Title>
            <Subtitle>{content.subtitle}</Subtitle>
          </section>
        </>
      ) : (
        <Loader />
      )}
      <AppFooter>
        Inspired by{" "}
        <a href="https://twitter.com/schneidertobias">@schneidertobias</a> &
        created by <a href="https://twitter.com/rafaelllycan">@rafaelllycan</a>.
      </AppFooter>
    </AppWrapper>
  );
};

export default App;
