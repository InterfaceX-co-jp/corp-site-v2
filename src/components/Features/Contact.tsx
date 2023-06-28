import { Container, Stack, Heading, Text, Box, Tag } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FeatureProps {
  label: string;
  value?: string;
  children?: ReactNode;
}

const Row = ({ value, label, children }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"flex-start"} gap={8}>
      <Tag colorScheme="teal" size="sm" w={"80px"} justifyContent={"center"}>
        {label}
      </Tag>
      {value && <Text fontWeight={600}>{value}</Text>}
      {children && children}
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
          <Row value={"InterfaceX合同会社"} label={"社名"} />
          <Row
            value={"大阪府大阪市北区豊崎４−１−１７ オリーブコート２０１"}
            label={"所在地"}
          />
          <Row value={"楠原 彰悟"} label={"代表社員"} />
          <Row label={"事業内容"}>
            <Box w={"400px"}>
              <Text>
                (1)コンピュータのソフトウェア及びハードウェアの企画、研究、開発、設計、製造、販
                売、保守、リース、賃貸、輸出入並びにそれらに関するコンサルティング業務
              </Text>
              <Text>
                (2)ＥＣ（電子商取引）サイト、その他各種ウェブサイトの企画、制作、販売、配信、運
                営及び管理
              </Text>
              <Text>(3)人材育成、能力開発のための教育事業</Text>
              <Text>(4)前各号に附帯関連する一切の事業</Text>
            </Box>
          </Row>
        </Stack>
      </Container>
    </Box>
  );
}
