import React from "react";
import { BsFilter } from "react-icons/bs";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Radio,
  Stack,
  RadioGroup,
} from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import MarketPlace from "./MarketPlace";
const Toggle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  return (
    <div className="drawer-bg">
      <Button className="filter-btn my-3 ms-3" colorScheme="blue" onClick={onOpen}>
        <BsFilter className="filter-icon" />
      </Button>
      <MarketPlace/>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerContent>
          <DrawerBody>
            <Dashboard />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Toggle;
