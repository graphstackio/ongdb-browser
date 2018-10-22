/*
 * Copyright (c) 2002-2018 "Neo4j, Inc"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  SyncDisconnectedBanner,
  StyledCancelLink,
  StyledSyncReminderSpan,
  StyledSyncReminderButtonContainer,
  SyncSignInBarButton
} from './styled'
import {
  CONNECTED_STATE,
  getConnectionState
} from 'shared/modules/connections/connectionsDuck'
import Render from 'browser-components/Render'
import { toggle } from 'shared/modules/sidebar/sidebarDuck'
import {
  optOutSync,
  getUserAuthStatus,
  SIGNED_IN
} from 'shared/modules/sync/syncDuck'

class SyncReminderBanner extends Component {
  render () {
    const {
      dbConnectionState,
      syncConsent,
      optOutSync,
      authStatus
    } = this.props
    const dbConnected = dbConnectionState === CONNECTED_STATE
    const syncConsentGiven = syncConsent && syncConsent.consented === true

    /* const visible =
      dbConnected &&
      !syncConsentGiven &&
      authStatus !== SIGNED_IN &&
      !syncConsent.optedOut
    */
    const visible = false

    return (
      <Render if={visible}>
        <SyncDisconnectedBanner height='100px'>
          <StyledSyncReminderSpan>
            To enjoy the full ONgDB Browser experience, we advise you to use
            <SyncSignInBarButton onClick={this.props.onGetstartedClicked}>
              ONgDB Browser Sync
            </SyncSignInBarButton>
          </StyledSyncReminderSpan>
          <StyledSyncReminderButtonContainer>
            <StyledCancelLink onClick={() => optOutSync()}>X</StyledCancelLink>
          </StyledSyncReminderButtonContainer>
        </SyncDisconnectedBanner>
      </Render>
    )
  }
}

const mapStateToProps = state => {
  return {
    syncConsent: state.syncConsent,
    authStatus: getUserAuthStatus(state),
    dbConnectionState: getConnectionState(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    optOutSync: () => {
      dispatch(optOutSync())
    },
    onGetstartedClicked: () => {
      dispatch(toggle('sync'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SyncReminderBanner)
