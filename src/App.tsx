import { useEffect } from 'react';
import { getFinger } from '../lib';

export default function App() {
  useEffect(() => {
    Promise.resolve(getFinger()).then((data) => {
      console.log('finger', data);
    });

    // Promise.resolve(getBaseFinger()).then((data) => {
    //   console.log('print', data);
    // });
  }, []);

  return <h1>getFinger</h1>;
}
