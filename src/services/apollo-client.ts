import { ApolloClient, InMemoryCache } from "@apollo/client";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5jMDlFOHN1eTMiLCJuZXR3b3JrSWQiOiJTWm5Zb0E3RmFQIiwibmV0d29ya0RvbWFpbiI6ImJhc2ljLTNzdWdtZHhyLmJldHRlcm1vZGUuaW8iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoiQk9QSlJzTzJGaVpsMFN2aHJmV1NKbnNsb3A4ck02OTRYTkVRSzBNakEwVWI0a3EwWjQiLCJpYXQiOjE3MzIyNzU4NjIsImV4cCI6MTczNDg2Nzg2Mn0.pNHKsecDQ1JF3NZ6P7aSi7S72098jpiRx1yskTEITig`;

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_BASE_API,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default apolloClient;
