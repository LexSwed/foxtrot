import config from 'config';
import Koa from 'koa';

import next from './next';
import router from './router';

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
