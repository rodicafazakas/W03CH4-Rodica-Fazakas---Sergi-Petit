import Componente from "./Componente.js";

describe("Given a Componente class", () => {
  describe("when it receives a div container, a test class y a pa tag", () => {
    test("Then it should render a p element with a test class inside the div container", () => {
      const container = document.createElement("div");
      const className = "text";
      const Tag = "p";
      const p = new Componente(container, className, Tag);
      const pFound = container.querySelector("p.test");
      expect(pFound).not.toBeNull();
    });
  });
});



