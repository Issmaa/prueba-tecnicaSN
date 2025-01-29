import { render } from "@testing-library/react";
import Result from "../components/Result";
import "@testing-library/jest-dom";

test("renders content", () => {
  const component = render(<Result result={25}/>);

  console.log(component);
});

