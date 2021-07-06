import React from "react";
import Card from "react-bootstrap/Card";

export const QA = React.forwardRef((props, ref) => (
  // <Card style={{margin:"20px"}}>
  <>
    <Card style={{ margin: "10px" }}>
      <Card.Header>
        <h3 ref={ref}>Pytania i Odpowiedzi</h3>
      </Card.Header>
      <Card.Body>
        <ul>
          <li>
            <b>Czy będzie nocleg?</b>
          </li>
          <li style={{ listStyleType: "circle" }}>
            Dla gości przyjezdnych na koszt Państwa Młodych zarezerwowane
            zostały pokoje ze śniadaniem w hotelu ELDA. Hotel będzie dostępny od
            godziny ok. 13.00 w sobotę, ale możliwe, że też wcześniej.
            Wymeldowanie z hotelu do godziny 12.00 w niedzielę. Rano w niedzielę
            w hotelu śniadanie będzie dostępne od godziny 9.00.
          </li>
          <li>
            <b>Czy będzie jakiś parking, jak z transportem z hotelu?</b>
          </li>
          <li style={{ listStyleType: "circle" }}>
            Przy kościele znajduje się mało miejsc parkingowych. W okolicach
            kościoła można stanąć przy ulicy Długiej oraz Teofila Magdzińskiego
            (parking w centrum Bydgoszczy w soboty i niedziele jest bezpłatny),
            jednak według nas najlepszym rozwiązaniem jest zostawienie samochodu
            na parkingu podziemnym przy sali weselnej ul. Kręta 3 (wjazd od
            ulicy Podwale) i przejście pieszo do kościoła.
            <br />
            Innym rozwiązaniem jest zostawienie samochodu przy parkingu
            hotelowym, przyjazd do kościoła (i z powrotem) taksówką. Polecamy{" "}
            <a href="http://19629.pl/">RADIO TAXI EXPRESS</a>, telefon do taxi:{" "}
            <a href="tel:523 222 222">523 222 222</a>, koszt około 14 zł za dnia
            i około 20 w nocy. Na terenie Bydgoszczy nie działa aplikacja Uber,
            ale zamiennikiem jest Bolt.
          </li>
          <li>
            <b>Składanie życzeń będzie na sali czy przed kościołem?</b>
          </li>
          <li style={{ listStyleType: "circle" }}>
            Odbędzie się na sali weselnej, po przywitaniu Pary Młodej.
          </li>
          <li>
            <b>Czy są opcje menu dla wegetarian?</b>
          </li>
          <li style={{ listStyleType: "circle" }}>
            Tak, ale prosimy o wcześniejszą informację, że istnieje takie
            zapotrzebowanie.
          </li>
          <li>
            <b>Dodatkowe informacje:</b>
          </li>
          <li style={{ listStyleType: "circle" }}>
            Na sali będą znajdowały się zamykane na klucz szafki dla gości.
            Będzie można tam zostawić podręczne rzeczy typu buty lub torebka.
          </li>
          <li style={{ listStyleType: "circle" }}>
            Sala weselna jest zarezerwowana do godziny 4.00. Na sali będzie
            klimatyzacja oraz winda na piętro.
          </li>
        </ul>
      </Card.Body>
    </Card>
    <Card style={{ margin: "10px" }}>
      <Card.Body style={{textAlign:"center",fontFamily: 'Sacramento'}}>
        <h3 style={{fontWeight:"700", fontSize:"2.5rem"}} >Serdecznie zapraszamy! Czekamy na Was z radością!</h3> 
        <h4 style={{fontWeight:"700", fontSize:"2.5rem"}}>Anna i Mikołaj</h4>
      </Card.Body>
    </Card>
  </>
));
