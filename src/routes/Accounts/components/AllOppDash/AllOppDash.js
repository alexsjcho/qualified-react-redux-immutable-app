import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import OpportunityRow from "../OpportunityRow";
import account from "../../data/account.json";

export default class AllOppDash extends React.PureComponent {
  render() {
    const {
      closeDateData,
      companyNameData,
      moneyValueData,
      // opportunityIdData,
      opportunityNameData,
      currentStageData,
      scoreData,
      indexData
    } = account;

    return (
      <Container>
        <h1>All Accounts</h1>
        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Opportunity</th>
              <th>Company</th>
              <th>Close Date</th>
              <th>Dollar Value</th>
              <th>Stage</th>
              <th>Score</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{indexData}</td>
              <td>{opportunityNameData}</td>
              <td>{companyNameData}</td>
              <td> {closeDateData}</td>
              <td>{moneyValueData}</td>
              <td>{currentStageData}</td>
              <td>{scoreData}</td>
            </tr>

            {this.props.opportunitiesList.map((opportunity, index) => {
              return (
                <OpportunityRow
                  key={opportunity.opportunityId}
                  index={index}
                  opportunity={opportunity}
                  allStageTotalScore={this.props.allStageTotalScore}
                  history={this.props.history}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
}
