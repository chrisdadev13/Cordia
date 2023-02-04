interface User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  tokens?: string[];
}

interface RegisterValues {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

interface LoginValues {
  username: string;
  password: string;
}
