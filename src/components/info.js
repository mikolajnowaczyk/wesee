import React from "react";
import Card from "react-bootstrap/Card";

export const Info = React.forwardRef((props, ref) => (
  <>
    <Card style={{ margin: "10px"}}>
      <Card.Header style={{ padding: "5px !important"}}>
        <h2 ref={ref}>Informacje podstawowe</h2>
      </Card.Header>
      <Card.Body>
        <p>
          Ślub odbędzie się 31.07.2021 o godzinie 15:00 w kościele pw. św.
          Andrzeja Boboli przy Placu Kościeleckich 7 w Bydgoszczy.
        </p>
        <p>
          Wesele odbędzie się w Sali Waniliowej (na 1 piętrze) w restauracji
          Sowa przy ulicy Mostowej 4 (ok. 350m od kościoła).
        </p>
        <p>
          Dla gości będą zarezerwowane noclegi w hotelu{" "}
          <a href="https://www.hotelelda.pl/">ELDA</a> przy ul. Fordońskiej 26
          (ok. 3km od sali weselnej).
        </p>
        <p>
          Harmonogram szczegółowy:
          <ul>
            <li>Msza Święta godzina 15:00 w kościele św. Andrzeja Boboli</li>
            <li>
              Po Mszy Nowożeńcy wraz z goścmi przemaszerują orszakiem weselnym
              na salę do restauracji Sowa
            </li>
            <li>Przywitanie Pary Młodej</li>
            <li>Składanie życzeń przez gości weselnych odbędzie się na sali</li>
            <li>Dalsza zabawa na sali</li>
          </ul>
        </p>
      </Card.Body>
    </Card>
  </>
));
