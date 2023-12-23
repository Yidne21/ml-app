import { DEV_BASE_URL, PROD_BASE_URL } from '@env';

const Base_url = __DEV__ ? DEV_BASE_URL : PROD_BASE_URL;

console.log('env1', Base_url);
export default Base_url;
