import config from 'config';
import { GetServerSideProps } from 'next';
import { Cookie } from 'next-cookie';

export function isAuthorized(ctx: Parameters<GetServerSideProps>[0]) {
  const token = new Cookie(ctx as any).get(config.get('auth.tokenName'));

  return Boolean(token);
}
