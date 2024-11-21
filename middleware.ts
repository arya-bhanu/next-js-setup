import withAuth from 'next-auth/middleware';
import { pages } from './config/pages';
export default withAuth({ pages: pages });
export const config = { matcher: ['/example'] };
