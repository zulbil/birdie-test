import Dashboard, { DispatchProps } from "./Dashboard";
import { AppState } from "@App/store/reducers";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getHistory, getMoods } from "@App/store/statistics/statisticsActions";
import { StatisticsState } from "@App/store/statistics/types";
import { signOut } from "@App/store/auth/authActions";

const mapStateToProps = (state: AppState): StatisticsState => ({
  events: state.statistics.events,
  moods: state.statistics.moods
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getHistory: () => dispatch(getHistory()),
  getMoods: () => dispatch(getMoods()),
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
