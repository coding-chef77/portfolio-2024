// import { useState, useEffect } from "react";
// import {
//   Box,
//   Heading,
//   VStack,
//   Link,
//   Spinner,
//   Container,
// } from "@chakra-ui/react";

// const StarWarsPage = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://swapi.dev/api/");
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Container maxW="container.md" py={4}>
//       <Heading mb={4}>Star Wars API</Heading>
//       {isLoading ? (
//         <Spinner
//           size="xl"
//           thickness="4px"
//           speed="0.65s"
//           emptyColor="gray.200"
//           color="blue.500"
//         />
//       ) : (
//         <VStack spacing={4} align="stretch">
//           {data &&
//             Object.entries(data).map(([key, value], index) => (
//               <Box key={index} p={5} shadow="md" borderWidth="1px">
//                 <Heading fontSize="xl">
//                   {key.charAt(0).toUpperCase() + key.slice(1)}
//                 </Heading>
//                 <Link href={value} isExternal color="blue.500">
//                   {value}
//                 </Link>
//               </Box>
//             ))}
//         </VStack>
//       )}
//     </Container>
//   );
// };

// export default StarWarsPage;
