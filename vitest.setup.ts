import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./src/__mocks__/node.ts";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
