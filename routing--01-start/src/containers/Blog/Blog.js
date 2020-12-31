import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';
// import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});
class Blog extends Component {
    state = {
        auth: true
    }
    render() {
        return (
            <div >
                <header className="Blog">
                    <nav>
                        <ul>
                            {/* <li> <NavLink to="/"
                                exact
                                // activeClassName="newOne"
                                activeStyle={{
                                    color: "teal",
                                    textDecoration: 'underline'
                                }}
                            >Home</NavLink></li> */}
                            <li> <NavLink
                                to={{
                                    pathname: "/posts",
                                    hash: '#submit',
                                    search: '?quick-submit=true',
                                }}  >Posts</NavLink></li>
                            <li> <NavLink
                                to={{
                                    pathname: "/new-post",
                                    hash: '#submit',
                                    search: '?quick-submit=true',
                                }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact render={() => <h1>Home</h1>} />
                    {/* <Route path="/posts" exact render={() => <Posts></Posts>} /> */}
                    {/* <Route path="/new-post" exact component={NewPost} ></Route>  */}
                    {this.state.auth ?
                        <Route path="/new-post" exact component={AsyncNewPost} ></Route>
                        :
                        <Route path="/new-post" exact
                            render={() => {
                                return <div>
                                    <h1>Need to Login</h1>
                                    <button onClick={() => {
                                        this.setState({
                                            auth: true
                                        });
                                    }}>login</button>
                                </div>
                            }} ></Route>
                    }
                    <Route path="/posts" component={Posts} ></Route>
                    <Route render={() => <h1>404 Not Found....</h1>}></Route>
                    {/* <Redirect from="/" to="/posts" component={Posts} ></Redirect> */}
                    {/* <Route path="/" component={Posts} ></Route> */}
                    {/* <Route path="/:id" exact component={FullPost} ></Route> */}
                </Switch>
            </div >
        );
    }
}

export default Blog;