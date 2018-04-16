import * as React from 'react'

export class Application extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="logo"><img src="static/logo.png" /></div>
                    <div className="text">Trading Command and Control Center</div>
                </div>

                <div className="clear"></div>

                <div className="body">
                    Todo
                </div>
            </div>
        );
    }
}
