import { MoonIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FC } from "react";
export const Navbar: FC = () => {
  return (
    <Flex
      align={"center"}
      bg={"#83BCFF"}
      h={16}
      w="full"
      px={4}
      justify="space-between"
    >
      <Flex align={"center"} w="max-content" gap={4}>
        <Link href={"/"}>
          <Box fontSize={20}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M21 0H3C1.35 0 0 1.35 0 3v3.858s3.854 2.24 4.098 2.38c.31.18.694.177 1.004 0 .26-.147 8.02-4.608 8.136-4.675.279-.161.58-.107.748-.01.164.097.606.348.84.48.232.134.221.502.013.622l-9.712 5.59c-.346.2-.69.204-1.048.002C3.478 10.907.998 9.463 0 8.882v2.02l4.098 2.38c.31.18.694.177 1.004 0 .26-.147 8.02-4.609 8.136-4.676.279-.16.58-.106.748-.008.164.096.606.347.84.48.232.133.221.5.013.62-.208.121-9.288 5.346-9.712 5.59-.346.2-.69.205-1.048.002C3.478 14.951.998 13.506 0 12.926v2.02l4.098 2.38c.31.18.694.177 1.004 0 .26-.147 8.02-4.609 8.136-4.676.279-.16.58-.106.748-.009.164.097.606.348.84.48.232.133.221.502.013.622l-9.712 5.59c-.346.199-.69.204-1.048.001C3.478 18.994.998 17.55 0 16.97V21c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3z"></path>
            </svg>
          </Box>
        </Link>
        <Link href={"/people"}>People</Link>
      </Flex>
      <Box w="50px" h={"40px"} cursor="pointer">
        <Flex
          w="full"
          h="full"
          justify={"center"}
          align="center"
          bg={"gray.100"}
          fontSize="20px"
          borderRadius="lg"
        >
          <MoonIcon />
        </Flex>
      </Box>
    </Flex>
  );
};
