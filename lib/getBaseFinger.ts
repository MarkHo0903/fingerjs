import FingerprintJS from '@fingerprintjs/fingerprintjs';

export interface BaseFingerProps {
  components: any;
  visitorId: string;
  version: string;
  confidence: any;
}

async function getBaseFinger(): Promise<BaseFingerProps> {
  const result = await FingerprintJS.load().then(async (fp) => {
    // The FingerprintJS agent is ready.
    // Get a visitor identifier when you'd like to.
    const data = await fp.get();
    return data;
  });

  return result;
}

export default getBaseFinger;
