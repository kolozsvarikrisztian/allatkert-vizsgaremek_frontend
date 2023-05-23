import Home from "../Home";
const { render, screen } = require("@testing-library/react");

test("home page main parts", () => {
    render(<Home />);    
    const logoImg = screen.getByRole("img", {name: "logo"});
    const heading1 = screen.getByRole("heading", {name: "Üdvözöljük az Erdőkilátó Állatkert és Szabadidő Park oldalán!"});
    const heading2 = screen.getByRole("heading", {name: "Kellemes kikapcsolódást és böngészést kíván az állatkert egész csapata,"});
    const heading3 = screen.getByRole("heading", {name: "Kapcsolat"});
    const heading4 = screen.getByRole("heading", {name: "Friss hírek"});    
    const footer = screen.getByRole("contentinfo");
    expect(logoImg).toBeInTheDocument();
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    expect(heading3).toBeInTheDocument();
    expect(heading4).toBeInTheDocument();
    expect(footer).toBeInTheDocument();    
});

test("loading animals", async () => {
  await render(<Home />);   
  const allatHeading1 = await screen.findByRole("heading", {name: "Gímszarvas"});
  const allatHeading2 = await screen.findByRole("heading", {name: "Hullámos papagáj"}); 
  expect(allatHeading1).toBeInTheDocument();
  expect(allatHeading2).toBeInTheDocument();  
});

