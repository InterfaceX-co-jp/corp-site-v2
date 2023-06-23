import { AbsoluteCenter, Box, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import Stars from "@/webgl/Stars";

export default function MainVisual() {
  return (
    <>
      <Box
        w={"100vw"}
        h={"50vh"}
        backgroundColor={"#12071f"}
        position={"relative"}
      >
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
        <Box
          position={"absolute"}
          top={{ sm: "14vh", md: "18vh" }}
          w={"100vw"}
          left={{ sm: "4vw", md: "22%", xl: "30%" }}
        >
          <Text
            bgGradient="linear(to-t, #c850c0, #ffcc70)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Build minimum, <br />
            Scale to million.
          </Text>
        </Box>
      </Box>
    </>
  );
}
