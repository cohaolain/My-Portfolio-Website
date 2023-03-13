import React, { useState } from "react";
import { Container, Grid, Icon, Segment } from "semantic-ui-react";

import "./App.scss";

import { Background } from "./components/Background.js";

function App() {
  const c1 = "Ciarán Ó hAoláin.";
  const c2 = "I create software.";

  const [cp1, ucp1] = useState("C");
  const [cp2, ucp2] = useState("");
  const delay = 30;

  setTimeout(
    () => {
      if (cp1.length < c1.length) ucp1(cp1 + c1.charAt(cp1.length));
      else if (cp2.length < c2.length) {
        if (cp2 === " ") {
          ucp2(c2.charAt(0));
        } else ucp2(cp2 + c2.charAt(cp2.length));
      }
    },
    cp1.length === c1.length && cp2 === " " ? delay + 350 : delay
  );

  return (
    <div className="App">
      <Background />
      <div className="header-container">
        <h1 className="typewriter primary">{cp1}</h1>
        <h3 className="typewriter secondary">{cp2}</h3>
        <br />
        <br />
        <br />
        <br />
        <Icon
          size="huge"
          name="arrow alternate circle down outline"
          onClick={() =>
            document
              .getElementById("content")
              .scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>

      <Container>
        <Grid centered padded>
          <Segment inverted>
            <div id="content">
              <h1>Hi!</h1>
              <p>
                I'm Ciarán. I'm a software engineer and full-stack developer
                based in Dublin, Ireland.
              </p>
              <p>
                I am a Technology Associate (Software Engineer) at Susquehanna
                International Group LLC. (SIG), a global quantitative trading
                firm.
              </p>
              <p>
                I hold a BSc (Hons) Computational Thinking from Maynooth
                University. I graduated in 2020 with a First Class Honours
                degree.
              </p>
              <p>
                I build high-quality applications with a focus on scalability
                and reliability.
              </p>
              <p>
                I am experienced in designing and innovating highly-available
                web applications, specialist utility applications and much more.
              </p>
              <p>I love travelling!</p>
              <p>
                <a href="mailto:ciaran@cohaolain.ie">Email me</a> if you'd like
                to get in touch, or message me over on{" "}
                <a href="https://www.linkedin.com/in/cohaolain/">LinkedIn</a>.
              </p>
              <p>
                You can also check out my{" "}
                <a href="https://github.com/cohaolain">GitHub</a> to see a small
                sample of some projects I've worked on in the past.
              </p>
            </div>
          </Segment>
        </Grid>
      </Container>
      <div className="footer">
        <p>© Ciarán Ó hAoláin {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
