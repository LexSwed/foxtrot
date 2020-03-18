import Router from '@koa/router';
import config from 'config';
import next from 'next';
import path from 'path';

const app = next({
  dev: config.get('isDev'),
  dir: path.join(__dirname, '../../client')
});
const handle = app.getRequestHandler();

async function prepare(router: Router) {
  await app.prepare();

  router.all('*', async ctx => {
    await handle(ctx.req, ctx.res);

    ctx.respond = false;
  });
}

export default prepare;
