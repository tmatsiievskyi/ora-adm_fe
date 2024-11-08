export const API_ROUTES = {
  auth: {
    signIn: 'api/auth/sign-in',
    signUp: 'api/auth/sign-up',
    signOut: 'api/auth/sign-out',
    refresh: 'api/auth/refresh',
  },
  users: {
    me: 'api/users/me',
  },
  employees: {
    all: 'api/employees',
  },
  qr: {
    generate: 'api/qr/generate',
  },
} as const;
