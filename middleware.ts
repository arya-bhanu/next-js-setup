import withAuth from 'next-auth/middleware';
import { pages } from './config/pagesNextAuthOptions';
export default withAuth({ pages: pages });
export const config = { matcher: ['/example'] };
