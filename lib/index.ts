import getDetector from './getDetector';
import getBaseFinger, { BaseFingerProps } from './getBaseFinger';
import getIp from './getIp';
import getGeoLg from './getGeoLg';

export interface FingerProps extends BaseFingerProps {
  webgl: {
    cpu: any;
    gpu: any;
  };
  ip: string;
  location: any;
}

async function getFinger(): Promise<FingerProps> {
  const detector = getDetector();
  let lg = {};
  try {
    const cpu = detector.cpu;
    const gpu = detector.gpu;
    getGeoLg(function (data) {
      lg = data;
    });
    const ip = await getIp();
    const baseFinger = await getBaseFinger();

    return { ...baseFinger, webgl: { cpu, gpu }, ip, location: lg };
  } catch (error) {
    throw error;
  }
}

export { getDetector, getBaseFinger, getIp, getFinger, getGeoLg };
export default { getDetector, getBaseFinger, getIp, getFinger, getGeoLg };
