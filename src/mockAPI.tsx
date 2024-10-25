export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  address: {
    street: string;
    state: string;
    city: string;
  };
}

export interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

function getUsers(page: number, pageSize: number): PaginatedResponse<User> {
  const allUsers: User[] = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      age: 30,
      address: {
        street: "123 Main St",
        state: "CA",
        city: "Los Angeles",
      },
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      age: 25,
      address: {
        street: "456 Elm St",
        state: "NY",
        city: "New York",
      },
    },
    {
      id: "3",
      firstName: "Alice",
      lastName: "Johnson",
      age: 28,
      address: {
        street: "789 Maple Ave",
        state: "IL",
        city: "Chicago",
      },
    },
    {
      id: "4",
      firstName: "Bob",
      lastName: "Williams",
      age: 35,
      address: {
        street: "101 Oak Rd",
        state: "TX",
        city: "Houston",
      },
    },
    {
      id: "5",
      firstName: "Emma",
      lastName: "Brown",
      age: 22,
      address: {
        street: "202 Pine St",
        state: "FL",
        city: "Miami",
      },
    },
    {
      id: "6",
      firstName: "Michael",
      lastName: "Davis",
      age: 40,
      address: {
        street: "303 Cedar Ave",
        state: "WA",
        city: "Seattle",
      },
    },
    {
      id: "7",
      firstName: "Sophia",
      lastName: "Miller",
      age: 33,
      address: {
        street: "404 Birch Ln",
        state: "MA",
        city: "Boston",
      },
    },
    {
      id: "8",
      firstName: "David",
      lastName: "Wilson",
      age: 45,
      address: {
        street: "505 Spruce Dr",
        state: "PA",
        city: "Philadelphia",
      },
    },
    {
      id: "9",
      firstName: "Olivia",
      lastName: "Taylor",
      age: 29,
      address: {
        street: "606 Fir Blvd",
        state: "AZ",
        city: "Phoenix",
      },
    },
    {
      id: "10",
      firstName: "Daniel",
      lastName: "Anderson",
      age: 37,
      address: {
        street: "707 Redwood Ct",
        state: "GA",
        city: "Atlanta",
      },
    },
    {
      id: "11",
      firstName: "Emily",
      lastName: "Thomas",
      age: 31,
      address: {
        street: "808 Sequoia Pl",
        state: "MI",
        city: "Detroit",
      },
    },
    {
      id: "12",
      firstName: "James",
      lastName: "Jackson",
      age: 42,
      address: {
        street: "909 Willow Way",
        state: "OH",
        city: "Columbus",
      },
    },
    {
      id: "13",
      firstName: "Ava",
      lastName: "White",
      age: 27,
      address: {
        street: "1010 Aspen Ave",
        state: "NC",
        city: "Charlotte",
      },
    },
    {
      id: "14",
      firstName: "William",
      lastName: "Harris",
      age: 39,
      address: {
        street: "1111 Sycamore St",
        state: "CO",
        city: "Denver",
      },
    },
    {
      id: "15",
      firstName: "Sofia",
      lastName: "Martin",
      age: 34,
      address: {
        street: "1212 Magnolia Dr",
        state: "OR",
        city: "Portland",
      },
    },
  ];

  const startIndex = (page - 1) * pageSize;
  const paginatedUsers = allUsers.slice(startIndex, startIndex + pageSize);

  return {
    data: paginatedUsers,
    totalCount: allUsers.length,
    currentPage: page,
    totalPages: Math.ceil(allUsers.length / pageSize),
  };
}

export default getUsers;
