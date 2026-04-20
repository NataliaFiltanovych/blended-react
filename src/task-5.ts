// interface CreateUserParams {
//   name: string;
//   age: number;
// }

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

// function createUser({ name, age }: CreateUserParams, email: string): User {
//   console.log(email);
//   return {
//     name,
//     age,
//     isAdmin: false,
//   };
// }

function createUser(
  { name, age }: { name: string; age: number },
  email: string
): User {
  console.log(email);
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 }, "alex@gmail.com");
