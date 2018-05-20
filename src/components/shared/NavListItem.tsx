import * as React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

interface NavListItemProps {
    to: string,
    active?: string
}

class NavListItem extends React.Component<NavListItemProps & RouteComponentProps<{}>> {
    render() {
        let checkPath = this.props.to

        if(this.props.active) {
            checkPath = this.props.active
        }

        const isActive = this.props.location.pathname.indexOf(checkPath) === 0
        const className = isActive ? 'active' : ''

        return (
            <li className={className}>
                <Link to={this.props.to}>
                    {this.props.children}
                </Link>
            </li>
        )
    }
}

export default withRouter(NavListItem)
