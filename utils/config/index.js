const dev = process.env.VERCEL_ENV !== 'production';

// fix VERCEL URL to something that works
export const server = dev ? 'http://localhost:3000' : process.env.SERVER;
