import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

const Header = () => {
  const logo =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///+wsLBmZmbm5uYeHh719fXy8vLj4+P6+vrW1tagoKDb29vr6+v39/fPz8+RkZG3t7eIiIisrKxTU1NgYGDHx8eZmZm/v78yMjJEREQrKytaWlp7e3tubm45OTl2dnaCgoImJiZJSUkTExMLCwsYGBhFRUXyG6wjAAANRUlEQVR4nO2d53bqOhCFxQmhJBBSgBPSMC3n/d/wUlKM/Y3qCJOsu39lrRjQtqTpIxnzP3TxVoybHkJWTFpbDOZNDyMf/rT26N82PZBMuO23PjH8jUt1NmiV8bBpekDauG5VcHPR9JBUsepVCW7x+Ium8Q/w26L7WyTOuMsEt7hqemwquBP57bBoenjJeB1aCW71/1PTQ0zC5dTBb4e/TY8yAUXfzW+L4XPTA43EvO3Fb4dp02ONwl9vfjtMmh5uMF5cEqY2jcumhxwGQcdb8ZP0/5us4234MY7jeoDjvy4b35MRPvOn6bF74R7HvvUIyyv3Qnrs/CXOmCfn1ZgKQ7PmvfrYNAMHHnDUV+vd/yoMt/KWt2vRJAEHBAlzf/hvjSH4xXsMzlZxPNqXHTA0c3KNz1Vx3N/QWNvF1wPEUDJ9BucX43i+wpFelx5hhub9ZygOljC9WfkZgeHWh+zQh29eT0vBijlP4MPxUyJDaQefzzSyRBxdVh6zMJRiOeexG99wbP232oM2huI6P4MYB8cp7t7rT9oZSoqj6RjHG8Yphri6HAwlxdFr1ONgCSO8didDSeI88MMnALsHbemdezAUNvXwJRcFK1asqQvxAz4MJYlzpz9+J3gkI5A5En9qBA9hGteoGHpRQIg8j7EnCjcmvQIYv6ENfZZoFQOYiM3+6GwOYhMzf7gbA5iE7pJ8JnUQOIvWE2wweQi8Il+Izl3qPg9TfTf3E+DpYKFX2xGnZySOjfoZQOYiMz9RBGEKIzvQpAGPc05bERmr3Uf6D9AAAAAElFTkSuQmCC";

  return (
    <Container position="static">
      <Toolbar>
        <img src={logo} alt="Logo" />
      </Toolbar>
    </Container>
  );
};

export default Header;
