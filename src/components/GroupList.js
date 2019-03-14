import React from 'react'
import {changeGroup} from '../reducers/groupReducer'
import { connect } from 'react-redux'
import {List ,Grid, Header, Button} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'

const GroupList = (props) => {
    return(
        <Grid verticalAlign='middle'>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                Active Groups
                </Header>
                <List divided relaxed animated>
                    <List.Item> 
                        <List.Content>
                            <List.Header>Group 1</List.Header>
                            <List.Description>Active in room 204 from 10.00 to 11.00</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Group 2</List.Header>
                            <List.Description>Active in room 205 from 10.00 to 11.00</List.Description>
                        </List.Content>
                    </List.Item>
                </List>
                <Link to='/addgroup'>
                    <Button>Add new group</Button>
                </Link>
        </Grid.Column>
        </Grid>
    )
}
const mapStateToProps = (state) => {
    return{
        group: state
    }
}

const mapDispatchToProps =  {
        changeGroup
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupList)