import React from 'react'
import {changeGroup} from '../reducers/groupReducer'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import { Button 
        ,Grid
        ,Header
        ,Segment
        ,Form
        ,Select} from 'semantic-ui-react'


const Body = (props) => {

    const addGroup =(event) => {
        event.preventDefault()
        const newGroup = {
            name: event.target.groupname.value,
            creatorName: event.target.username.value,
            Location: 'A111',
            startTime: new Date().toLocaleTimeString(),
            active: true,
            id: 2
        }
        props.changeGroup(newGroup)
        props.history.push('/')

    }
    return(
        <Grid centered verticalAlign='middle'>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                Add A Group
                </Header>
                <Segment>
                    <Form onSubmit={addGroup}>
                        <Form.Field>
                            <label>Group Name</label>
                            <input name='groupname' placeholder="Group Name" />
                        </Form.Field>
                        <Form.Field>
                            <label>Username</label>
                            <input name='username' placeholder="Username" />
                        </Form.Field>
                        <Form.Field>
                            <label>Telegram Group</label>
                            <Select 
                                options={[{value: 'Group', text: 'Designing Interactive Systems'}]}/>
                        </Form.Field>
                        <Button type='submit'>Add</Button>
                    </Form>
                </Segment>
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
)(withRouter(Body))