import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import MarketPlace from "./MarketPlace";

const Dashboard = () => {
  return (

    <div className="sidebar pt-3">
      <div className="container-fluid">
{/* 
<span className="fw-bold ps-5 ms-4 explore">Explore</span>      */}
        <div className="row">
          <div className="col-md-12 sidbar-col">
            <ProSidebarProvider>
              <Sidebar>
                <Menu>
                <MenuItem> Explore </MenuItem>
                  <SubMenu label="Listing Type">
                    <MenuItem> Buy Now </MenuItem>
                    <MenuItem> Auction </MenuItem>
                  </SubMenu>
                  <SubMenu label="Curation">
                    <MenuItem> Curated </MenuItem>
                    <MenuItem> Non-Curated </MenuItem>
                  </SubMenu>
                  <SubMenu label="Price">
                    <MenuItem>
                      <input type="text" label="Minimum" />
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="text" label="Minimum" />{" "}
                    </MenuItem>
                  </SubMenu>
                  <SubMenu label="Collections">
                    <MenuItem> Art Blcoks </MenuItem>
                    <MenuItem> Mutant Ape Yacht Club </MenuItem>
                    <MenuItem> Bored Ape Yacht Club </MenuItem>
                    <MenuItem> Otherdeed for Otherside</MenuItem>
                    <MenuItem> Meebits </MenuItem>
                    <MenuItem> CLONE X - X TAKASHI </MenuItem>
                    <MenuItem> Bored Ape Kennel Club </MenuItem>
                    <MenuItem> Moonbirds </MenuItem>
                    <MenuItem> RENGA </MenuItem>
                  </SubMenu>
                  <SubMenu label="Chains">
                    <MenuItem> Crypto.org Chain </MenuItem>
                    <MenuItem> Cronos </MenuItem>
                    <MenuItem> Ethereum </MenuItem>
                    <MenuItem> Polygon </MenuItem>
                    <MenuItem> Solana </MenuItem>
                  </SubMenu>
                  <SubMenu label="Categories">
                    <MenuItem> Art </MenuItem>
                    <MenuItem> Celebrites </MenuItem>
                    <MenuItem> Gaming </MenuItem>
                    <MenuItem> Spot </MenuItem>
                    <MenuItem> Music </MenuItem>
                    <MenuItem> Crypto </MenuItem>
                    <MenuItem> Cross Chain </MenuItem>
                    <MenuItem> PFP </MenuItem>
                  </SubMenu>
                </Menu>
              </Sidebar>
            </ProSidebarProvider>
          </div>
          <div className="col-md-9">
            {/* <MarketPlace /> */}
          </div>
        </div>
        </div>
     
    </div>
  );
};

export default Dashboard;
