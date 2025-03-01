const isDevelopment = import.meta.env.MODE === 'development';

const config = {
  development: {
    serverUrl: 'http://localhost:3001',
    apiPaths: {
      base: '/api',
      alumni: '/alumni',
      auth: {
        signup: '/auth/signup',
        login: '/auth/login',
        logout: '/logout',
        verifyEmail: '/auth/verify-email'
      },
      user: {
        profile: '/profile'
      }
    }
  },
  production: {
    // serverUrl: 'https://kw-backend.onrender.com',
    serverUrl: 'https://kiitwallah.live/backend',

    apiPaths: {
      base: '/api',
      alumni: '/alumni',
      auth: {
        signup: '/auth/signup',
        login: '/auth/login',
        logout: '/logout',
        verifyEmail: '/auth/verify-email'
      },
      user: {
        profile: '/profile'
      }
    }
  }
};

const environment = config[isDevelopment ? 'development' : 'production'];

export const getApiUrl = (path) => {
  if (typeof environment.apiPaths[path] === 'string') {
    return `${environment.serverUrl}${environment.apiPaths.base}${environment.apiPaths[path]}`;
  }
  
  const [section, endpoint] = path.split('/');
  return `${environment.serverUrl}${environment.apiPaths.base}${environment.apiPaths[section][endpoint]}`;
};

export default environment; 