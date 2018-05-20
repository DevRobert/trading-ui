import * as React from 'react'
import { ScoringListProps } from './ScoringList';
import NavListItem from '../shared/NavListItem'

export default class ScoringNavigation extends React.Component {
    props: ScoringListProps
    
    render() {
        return (
            <ul className="nav nav-tabs">
                {
                    this.props.availableTypes.map(type => {
                        return (
                            <NavListItem to={"/scoring/" + type.name}>{type.title}</NavListItem>
                        )
                    })
                }
            </ul>
        )
    }
}
