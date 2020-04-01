import React, {Fragment} from 'react';

import {TopNav, TopNavLink} from "./ui/TopNav";
import {PageNav, PageNavLink} from "./ui/PageNav";

import TradesPage from "./pages/TradesPage";

function App() {
  return (
    <Fragment>
      <TopNav>
        <TopNavLink title="Buy bitcoins" />
        <TopNavLink title="Sell bitcoins" active={true} />
        <TopNavLink title="Wallet" />
        <TopNavLink title="Support" />
        <TopNavLink title="Your account" />
      </TopNav>
      <PageNav>
        <PageNavLink title="Overview" />
        <PageNavLink title="Trades" active={true} />
        <PageNavLink title="Disputes" />
        <PageNavLink title="Your offers" />
        <PageNavLink title="My team" />
        <PageNavLink title="Trade History" />
      </PageNav>
      <div className="container">
        <TradesPage />
      </div>
    </Fragment>
  );
}

export default App;
