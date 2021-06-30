import React from "react";

export const Info = React.forwardRef((props, ref) => (
  <>
    <h2 ref={ref}>Informacje podstawowe</h2>
    <p>
      Ślub odbędzie się 31.07.2021 o godzinie 15.00 w kościele pw. św. Andrzeja Boboli przy Placu Kościeleckich 7.
    </p>
    <p>
      Wesele odbędzie się w Sali Waniliowej (na 1 piętrze) w restauracji Sowa przy ulicy Mostowej 4 (ok. 350m od kościoła).
    </p>
    <p>
      Dla gości będą zarezerwowane noclegi w hotelu Elda przy ul. Fordońskiej 26 (ok. 3km od sali).
    </p>
    <p>
    Harmonogram szczegółowy:
      <ul> 
        <li>Msza św. 15.00 w kościele św. Andrzeja Boboli</li>
        <li>Po Mszy przemarsz orszakiem weselnym na sale do restauracji Sowa</li>
        <li>Przywitanie pary młodej</li>
        <li>Składanie życzeń przez gości weselnych odbędzie się na sali</li>
        <li>Dalsza zabawa na sali</li>
      </ul>
    </p>
  </>
));
