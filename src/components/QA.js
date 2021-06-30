import React from "react";
import Card from "react-bootstrap/Card";

export const QA = React.forwardRef((props, ref) => (
  // <Card style={{margin:"20px"}}>
  <Card style={{margin:"10px"}}>
    <Card.Header>
      <h3 ref={ref}>Pytania i Odpowiedzi</h3>
    </Card.Header>
    <Card.Body>
      <ul>
        <b>Czy będzie nocleg?</b>
        <li>
          Dla gości przyjezdnych zarezerwowane zostały pokoje w hotelu ELDA.
          Hotel będzie dostępny od godziny ok. 13.00 w sobotę, ale możliwe że
          też wcześniej. Wymeldowanie z hotelu do godziny 12.00 w niedzielę.
          Rano w niedzielę w hotelu będzie także opłacone śniadanie, dostępne od
          godziny 9.00.
        </li>
        <b>Czy będzie jakiś parking, jak z transportem z hotelu?</b>
        <li>
          Przy kościele znajduje się mało miejsc parkingowych. W okolicach
          kościoła można stanąć przy ulicy Długiej oraz Teofila Magdzińskiego
          (parking w centrum w soboty i niedziele jest bezpłatny), jednak według
          nas najlepszym rozwiązaniem jest zostawienie samochodu na parkingu
          podziemnym przy hotelu ul. Kręta 3 (wjazd od ulicy Podwale) i
          przejście pieszo do kościoła.
          <br />
          Innym rozwiązaniem jest zostawienie samochodu przy parkingu hotelowym,
          przyjazd do kościoła (i z powrotem) taksówką. Polecamy{" "}
          <a href="http://19629.pl/">RADIO TAXI EXPRESS</a>. Na terenie
          Bydgoszczy nie działa aplikacja Uber, ale zamiennikiem jest Bolt.
        </li>
        <b>Składanie życzeń będzie na sali czy przed kościołem?</b>
        <li>Odbędzie się na sali weselnej, po przywitaniu pary młodej.</li>
        <b>Czy są opcje dla wegetarian?</b>
        <li>
          Tak, ale prosimy o wcześniejszą informację, że istnieje takie
          zapotrzebowanie.
        </li>
        <b>Dodatkowe informacje:</b>
        <li>
          Na sali będą znajdowały się zakluczane szafki dla gości. Będzie można
          tam zostawić podręczne rzeczy typu buty lub torebka.
        </li>
        <li>
          Sala weselna jest zarezerwowana do godziny 4.00. Na sali będzie
          klimatyzacja oraz winda na piętro.
        </li>
      </ul>
    </Card.Body>
  </Card>
));
