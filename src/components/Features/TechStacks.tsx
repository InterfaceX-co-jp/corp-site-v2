import { staticPath } from "@/lib/$path";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Divider,
} from "@chakra-ui/react";

export default function TechStacks() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          技術スタック
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          特にNode.jsに強みがあります。生産性を最大化できるよう常にブラッシュアップしています。
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={12}>
        <Box mb={4}>
          <Heading as={"h4"} size="md" textColor={"gray"} mb={4}>
            Frontend
          </Heading>
          <Flex gap={4}>
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.typescript_png}
              alt={"TypeScript logo"}
            />
            <Image
              h={"100px"}
              w={"auto"}
              src={staticPath.next_png}
              alt={"next.js logo"}
            />
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.nuxt_png}
              alt={"nuxt.js logo"}
            />
          </Flex>
        </Box>
        <Box mb={4}>
          <Heading as={"h4"} size="md" textColor={"gray"}>
            Design Ops
          </Heading>
          <Flex gap={4} alignItems={"center"}>
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.storybook_png}
              alt={"storybook logo"}
            />
            <Image
              w={"auto"}
              h={"70px"}
              src={staticPath.figma_png}
              alt={"figma logo"}
            />
          </Flex>
        </Box>
        <Box mb={4}>
          <Heading as={"h4"} size="md" textColor={"gray"} mb={4}>
            Fullstack Frameworks / Backends
          </Heading>
          <Flex gap={4} alignItems={"center"}>
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.go_png}
              alt={"golang logo"}
            />
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.frourio_png}
              alt={"frourio logo"}
            />
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.graphql_png}
              alt={"graphql logo"}
            />
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.laravel_png}
              alt={"laravel logo"}
            />
          </Flex>
        </Box>
        <Box mb={4}>
          <Heading as={"h4"} size="md" textColor={"gray"} mb={4}>
            Database / Middlewares / Protocols
          </Heading>
          <Flex gap={8} alignItems={"center"}>
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.mongodb_png}
              alt={"mongodb logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.mysql_png}
              alt={"mysql logo"}
            />
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.grpc_png}
              alt={"grpc logo"}
            />
            <Image
              w={"auto"}
              h={"50px"}
              src={staticPath.elasticsearch_png}
              alt={"elasticsearch logo"}
            />
          </Flex>
        </Box>
        <Box mb={4}>
          <Heading as={"h4"} size="md" textColor={"gray"} mb={4}>
            Infrastructures
          </Heading>
          <Flex gap={8} alignItems={"center"}>
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.aws_jpg}
              alt={"aws logo"}
            />
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.terraform_png}
              alt={"terraform logo"}
            />
            <Image
              w={"auto"}
              h={"80px"}
              src={staticPath.firebase_png}
              alt={"firebase logo"}
            />
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.mongodb_atlas_png}
              alt={"mongodb atlas logo"}
            />
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.docker_png}
              alt={"docker logo"}
            />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
