function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  // Important to get the first letter upcase to
  // ensure we are passing 'menu' and using <menu>
  const ButtonContainer = buttonsContainer;

  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}

export default Tabs;
