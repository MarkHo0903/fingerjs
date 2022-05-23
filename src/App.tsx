import { useEffect, useState } from 'react';
import { getFinger } from '../lib';

import ReactJson from 'react-json-view';

export default function App() {
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    Promise.resolve(getFinger()).then((data) => {
      console.log('finger', data);
      setJsonData(data);
    });

    // Promise.resolve(getBaseFinger()).then((data) => {
    //   console.log('print', data);
    // });
  }, []);

  return <ReactJson src={jsonData} />;
}
