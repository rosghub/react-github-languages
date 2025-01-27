import * as React from 'react'
import * as colors from './colors.json'

const LINE_HEIGHT = 7;

export interface GithubLanguagesProps {
  data: Record<string, number>;
  textColor?: string;
  lightColor?: string;
  className?: string | undefined
}

export default function GithubLanguages(props: GithubLanguagesProps) {
  const { data } = props;

  if (data) {
    let total = 0;
    Object.keys(data).forEach((lang: string) => {
      total += data[lang];
    });

    return (
      <div style={{ display: "flex-col" }} className={props.className}>
        <div>
          <ul style={{ display: "flex", listStyleType: "none", margin: 0, padding: 0, overflow: 'hidden' }}>
            {Object.keys(data).map((language: string) => {
              return (
                <li
                  key={language}
                  style={{
                    width: `${Math.max(data[language] / total * 100, 1)}%`,
                  }}>
                  <div
                    style={{
                      backgroundColor: colors[language]["color"],
                      height: LINE_HEIGHT,
                      marginRight: '0.1rem'
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul style={{ display: "flex", flexWrap: "wrap", listStyleType: "none", margin: 0, padding: 0, overflow: 'hidden' }}>
            {Object.keys(data).map((language: string) => {
              return (
                <li
                  key={`${language}-name`}
                  style={{
                    margin: '0.1rem 0.6rem 0.1rem 0',
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center"
                  }}
                >
                  <span
                    style={{
                      height: LINE_HEIGHT,
                      width: LINE_HEIGHT,
                      backgroundColor: colors[language]["color"],
                      display: "inline-block"
                    }}
                  />
                  <span
                    style={{
                      fontWeight: 700,
                      marginLeft: 5,
                      marginRight: 5,
                      color: props.textColor || "black"
                    }}
                  >
                    {language}
                  </span>
                  <span style={{ color: props.lightColor || "gray" }}>
                    {((data[language] / total) * 100).toFixed(1)}%
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );

  } else return null
}
