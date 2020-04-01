import React, {Fragment} from 'react';

import {useTrades} from "./hooks";

import {TopNav, TopNavLink} from "./ui/TopNav";
import {PageNav, PageNavLink} from "./ui/PageNav";

import TradesPage from "./pages/TradesPage";

function App() {
  const {loading, error, trades} = useTrades();

  if (error) {
    return (<p>{error.message}</p>)
  }
  if (loading) {
    return (<p>Loading...</p>);
  }

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
        <TradesPage trades={trades} />
      </div>
    </Fragment>
  );
}

export default App;
