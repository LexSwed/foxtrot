import config from 'config';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

export function isAuthorized(ctx: Parameters<GetServerSideProps>[0]) {
  const cookies = parseCookies(ctx);
  const authKey: string = config.get('auth.tokenName');

  return Boolean(cookies[authKey]);
}
