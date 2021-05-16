import React from "react";

export const QA = React.forwardRef((props, ref) => (
  <>
    <h3 ref={ref}>Pytania i Odpowiedzi</h3>
    <ul>
      <li>Czy będzie hotel?</li>
      <li>Tak, będzie hotel</li>
    </ul>
  </>
));
