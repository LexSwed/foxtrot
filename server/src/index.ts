import Koa from 'koa';
import config from 'config';
import router from './router';
import next from './next';

const PORT = config.get('port');

async function init() {
  const server = new Koa();

  await next(router);

  server.use(router.routes());

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
}

init();
