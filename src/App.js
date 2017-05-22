import React, { Component } from 'react';
import superagent from 'superagent';

class MessageListComponent extends Component {
    render(){
        return (
            <div className="messageListContainter">
                {this.props.messageList}
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.getMessages = this.getMessages.bind(this);
    }
    state = {
        messages: null
    };

    componentWillMount() {
        this.getMessages().then((res) => {
            this.setState({ messageList: res });
            console.log("resp", this.state);
        })
    }

    getMessages() {
        return new Promise((resolve, reject) => {
            superagent
                .get('//fe-test.preventure.com/api/v1/gyms')
                .set('Accept', 'application/json')
                .set('Access-Control-Allow-Origin', '*')
                .end((err, res) => {
                    if (err) {
                        reject('Error getting messages');
                    } else {
                        console.log("promise", res.text);
                        resolve(res.text);
                    }
                });
        });
    }

    render() {
        return (
            <div className="App">
                <MessageListComponent messageList={this.state.messageList} />
            </div>
        );
    }
}

export default App;