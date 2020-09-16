import React from "react";
import { useDencrypt } from "use-dencrypt-effect";

import "./TitleDencrypt.scss";

const values = ["литье алюминия под давлением"];

const Example = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 1250);

    return () => clearInterval(action);
  }, []);

  return <h1 className='al__dencrypt'>{result}</h1>;
};

export default Example;
