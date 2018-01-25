/* eslint react/prop-types: 0 */
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {selectUser} from "../../actions/actions"
import "./UserList.scss"

class UserList extends Component {
  createListItems() {
    return this.props.users.map((user, i) => {
      return (
        <li key={i}
            onClick={() => this.props.selectUser(user)}
            >
          {user.first} {user.last}
        </li>
      )
    })
  }

  render() {
    return <ul>{this.createListItems()}</ul>
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
