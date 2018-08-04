import config from 'config';
import { url } from 'inspector';

console.log(process.env.NODE_ENV);
console.log(config.get('url.shopping'));