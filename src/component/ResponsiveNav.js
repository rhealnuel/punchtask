import React from "react";
import logo from "../assets/logo.svg";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
 
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


 
function NavListMenu() {

}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Find Work</ListItem>
      </Typography>
      <NavListMenu />

      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Find Talent
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Article
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          About Us
        </ListItem>
      </Typography>
      
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
      
    </List>
  );
}
 
export default function ResponsiveNav() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2  bg-[#525AA0]">
      <div className="flex items-center justify-between text-white">
        
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="white">
            Log In
          </Button>
          <Button variant="white" size="sm" className="bg-white text-black">
            Join Us
          </Button>
        </div>
        <IconButton
          variant="text"
          color="white"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" fullWidth className="text-white border-white">
            Log In
          </Button>
          <Button  size="sm" fullWidth className="bg-white text-black">
            Join Us
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}