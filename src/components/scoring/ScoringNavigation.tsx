import * as React from 'react'
import { NavLink } from 'react-router-dom';
import { ScoringListProps } from './ScoringList';

export default class ScoringNavigation extends React.Component {
    props: ScoringListProps
    
    render() {
        return (
            <ul className="nav nav-tabs">
                {
                    this.props.availableTypes.map(type => {
                        return (
                            <li>
                                <NavLink to={"/scoring/" + type.name}>{type.title}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
