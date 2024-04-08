import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLogin } from "@refinedev/core";
import { useNavigation } from "@refinedev/core";

export interface ILoginForm {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { push } = useNavigation();
  const { mutate: login } = useLogin<ILoginForm>();

  const [email, setEmail] = useState("demo@refine.dev");
  const [password, setPassword] = useState("demodemo");

  const onSubmit = () => {
    const params = { email: email, password: password };
    login(params);
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow={{ base: "none", sm: "md" }}
        >
          <Stack spacing="6">
            <Stack spacing="6">
              <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                <Heading size={{ base: "xs", md: "lg" }}>
                  Sign in to your account
                </Heading>
              </Stack>
            </Stack>
            <Divider />
            <form onSubmit={() => onSubmit()}>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <HStack justify="space-between">
                  <Checkbox defaultChecked>Remember me</Checkbox>
                </HStack>
                <Button type="submit">Sign in</Button>
              </Stack>
            </form>
            <HStack justify="space-between">
              <Button
                variant="text"
                size="sm"
                style={{ fontSize: "12px" }}
                onClick={() => push("/forgot-password")}
              >
                Forgot password?
              </Button>
              <Text style={{ fontSize: "12px" }}>
                Don’t have an account? <Link href="/register">Sign up</Link>
              </Text>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
