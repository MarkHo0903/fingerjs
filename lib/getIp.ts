import { getIpByIcanhazip } from 'qiao-get-ip';

const getIp = async () => {
  const ip = await getIpByIcanhazip();
  return ip;
};

export default getIp;
