import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/common/header';
import Inbox from './components/inbox/inboxPage';
import About from './components/about/aboutPage';
import Home from './components/home/homePage';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/inbox" component={Inbox} />
                <Route exact path="/inbox/conversations/:conversationId" component={Inbox} />
                <Route exact path="/inbox/conversations/:conversationId/messages/:messageId" component={Inbox} />
            </div>
        </Router>
    );
}

export default AppRouter;