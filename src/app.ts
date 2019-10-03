import express, { json, urlencoded } from 'express';
import { resMsg, port } from 'rober19-config';
import { errors } from 'celebrate';
// import MemberRoutes from './components/members/member.routes';
import morgan from 'morgan';
import _config, { yellow } from './config/config';
import helmet from 'helmet';
import cors from 'cors';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.appConfig();
    this.routes();
  }

  appConfig() {
    this.app.set('port', process.env.PORT || port[1]);
    this.app.use(morgan('dev'));
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
    this.app.use(helmet());
    this.app.use(cors());
  }

  routes() {
    // new MemberRoutes(this.app);
    //errors() debe estár despues de asignar todas las rutas
    this.app.use(errors());
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      // console.log(123)
      console.log(
        `${_config.log('ok', undefined, resMsg.serverOn)} [Port:${yellow(
          ` ${this.app.get('port')}`,
        )}]`,
      );
    });
  }
}

export default new Server;