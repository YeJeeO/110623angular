import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
        name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        console.log('credentials', credentials);
              if ('1' === credentials.username && '1' === credentials.password)
          return { id: '1', name: 'Jjjj', email: 'jjjj@example.com' };
        return null;
      }
    })
  ],
};

const resf = NextAuth(authOptions);

export default (...params) => {
  const [req] = params;
  console.log('pages/api/auth/[...nextauth].js ');
  console.log('>> ', req.method, ' запрос на', req.url, req.query);
  return resf(...params);
};