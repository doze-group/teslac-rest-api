import fs from 'fs';
const write = require('write');
import chalk from 'chalk';
import { resMsg, port } from 'rober19-config';
import dotenv from 'dotenv'

dotenv.config({ path: './credentials/.env' });

class Config {

  public app_data = {
    proyect_name: require('../../package.json').name,
  };

  log(
    type: string,
    name: string = this.app_data.proyect_name,
    msg: string = 'default message',
  ): String {
    const { green, cyan, red } = chalk;

    switch (type) {
      case 'ok':
        return `${cyan(`[${name}]`)} ${green(`[${msg.toUpperCase()}]`)}`;
        break;
      case 'err':
        return `${cyan(`[${name}]`)} ${red(`[${msg}]`)} `;
        break;

      default:
        return `INVALID TYPE`;
        break;
    }

    return '';
  }

}

export default new Config();


export const credentials = JSON.parse(process.env.API_KEYS as string);

export const { green, cyan, red, yellow } = chalk;