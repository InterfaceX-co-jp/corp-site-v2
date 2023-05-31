import { Container, Stack, Heading, Text, Box, Tag } from "@chakra-ui/react";

interface FeatureProps {
  value: string;
  label: string;
}

const Row = ({ value, label }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Tag colorScheme="teal" size="sm">
        {label}
      </Tag>
      <Text fontWeight={600}>{value}</Text>
    </Stack>
  );
};
export default function Contact() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          会社概要
        </Heading>
      </Stack>
      <Container maxW={"5xl"} py={12}>
        <Stack spacing={4}>
          <Row value={"合同会社InterfaceX"} label={"社名"} />
          <Row value={"楠原 彰悟"} label={"代表社員"} />
          <Row value={"大阪府大阪市北区豊崎４−１−１５"} label={"所在地"} />
        </Stack>
      </Container>
    </Box>
  );
}
