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
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Button
              className="filter-btn mt-5 ms-3 "
              colorScheme="blue"
              onClick={onOpen}
            >
              <BsFilter className="filter-icon" />
            </Button>
          </div>
          <div className="col-md-10">
            <MarketPlace />
          </div>
        </div>
      </div>
      {/* <div className="d-flex"> */}

      {/* </div> */}

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
