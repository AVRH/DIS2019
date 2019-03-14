import React from 'react'
import {changeGroup} from '../reducers/groupReducer'
import { connect } from 'react-redux'
import { Button 
        ,Grid
        ,Header
        ,Segment
        ,Form
        ,Select} from 'semantic-ui-react'


const GroupSelector = ({group}) => {
    return(
        <option value={group}>{group}</option>
    )
}
const Body = (props) => {
    const selectGroup =(event) => {
        props.changeGroup(event.target.value)
    }
    return(
        <Grid centered verticalAlign='middle'>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                Add A Group
                </Header>
                <Segment>
                    <Form>
                        <Form.Field>
                            <label>Group Name</label>
                            <input placeholder="Group Name" />
                        </Form.Field>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder="Username" />
                        </Form.Field>
                        <Form.Field>
                            <label>Telegram Group</label>
                            <Select 
                                options={[{value: 'Group', text: 'Designing Interactive Systems'}]}
                                onChange={selectGroup}/>
                        </Form.Field>
                        <Button>Add group</Button>
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
)(Body)