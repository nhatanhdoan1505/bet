export interface ICornerData {
  position: number;
  team: string;
  played: number;
  allCorFor: number;
  allCorAgst: number;
  perGameCorFor: number;
  perGameCorAgst: number;
}

export enum league {
  ESL = "E0",
  EC = "E1",
  Bundesliga = "D1",
  Seria = "I1",
  Laliga = "SP1",
  League1 = "F1",
}

export enum venue {
  all = "T",
  home = "H",
  away = "A",
}
export interface IPayload {
  league: league;
  venue: venue;
  season: string;
  go: "Go!";
}

export const style = {
  heading: {
    font: { bold: true, color: "FF0000" },
    alignment: {
      justifyLastLine: true,
      wrapText: true,
    },
  },
  teamHome: {
    font: { bold: true, color: "00C1D4" },
    alignment: {
      horizontal: ["center"],
      justifyLastLine: true,
      wrapText: true,
    },
  },
  teamAway: {
    font: { bold: true, color: "512D6D" },
    alignment: {
      horizontal: ["center"],
      justifyLastLine: true,
      wrapText: true,
    },
  },
  statHome: {
    font: { bold: true, color: "00C1D4" },
    alignment: {
      horizontal: ["center"],
      vertical: ["center"],
    },
  },
  statAway: {
    font: { bold: true, color: "512D6D" },
    alignment: {
      horizontal: ["center"],
      vertical: ["center"],
    },
  },
  totalStat: {
    font: { bold: true, color: "FF2442" },
    alignment: {
      horizontal: ["center"],
      vertical: ["center"],
    },
  },
  round: {
    font: { bold: true, color: "012443" },
  },
};

export interface IDataRespone {
  round: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  homeFHCorner: number;
  awayFHCorner: number;
  homeCorner: number;
  awayCorner: number;
  homeShot: number;
  awayShot: number;
  homeShotOT: number;
  awayShotOT: number;
  homePossession: number;
  awayPossession: number;
  homeAttack: number;
  awayAttack: number;
}

export interface Weather {
  success: boolean;
  pager: Pager;
  metadata: Metadata;
  data?: DataEntity[] | null;
  message: string;
}
export interface Pager {
  current_page: number;
  max_page: number;
  results_per_page: number;
  total_results: number;
}
export interface Metadata {
  request_limit?: null;
  request_remaining?: null;
  request_reset_message: string;
}
export interface DataEntity {
  id: number;
  homeID: number;
  awayID: number;
  season: string;
  status: string;
  roundID: number;
  game_week: number;
  revised_game_week: number;
  homeGoals?: (string | null)[] | null;
  awayGoals?: (string | null)[] | null;
  homeGoalCount: number;
  awayGoalCount: number;
  totalGoalCount: number;
  team_a_corners: number;
  team_b_corners: number;
  totalCornerCount: number;
  team_a_offsides: number;
  team_b_offsides: number;
  team_a_yellow_cards: number;
  team_b_yellow_cards: number;
  team_a_red_cards: number;
  team_b_red_cards: number;
  team_a_shotsOnTarget: number;
  team_b_shotsOnTarget: number;
  team_a_shotsOffTarget: number;
  team_b_shotsOffTarget: number;
  team_a_shots: number;
  team_b_shots: number;
  team_a_fouls: number;
  team_b_fouls: number;
  team_a_possession: number;
  team_b_possession: number;
  refereeID: number;
  coach_a_ID: number;
  coach_b_ID: number;
  stadium_name: string;
  stadium_location: string;
  team_a_cards_num: number;
  team_b_cards_num: number;
  odds_ft_1: number;
  odds_ft_x: number;
  odds_ft_2: number;
  odds_ft_over05: number;
  odds_ft_over15: number;
  odds_ft_over25: number;
  odds_ft_over35: number;
  odds_ft_over45: number;
  odds_ft_under05: number;
  odds_ft_under15: number;
  odds_ft_under25: number;
  odds_ft_under35: number;
  odds_ft_under45: number;
  odds_btts_yes: number;
  odds_btts_no: number;
  odds_team_a_cs_yes: number;
  odds_team_a_cs_no: number;
  odds_team_b_cs_yes: number;
  odds_team_b_cs_no: number;
  odds_doublechance_1x: number;
  odds_doublechance_12: number;
  odds_doublechance_x2: number;
  odds_1st_half_result_1: number;
  odds_1st_half_result_x: number;
  odds_1st_half_result_2: number;
  odds_2nd_half_result_1: number;
  odds_2nd_half_result_x: number;
  odds_2nd_half_result_2: number;
  odds_dnb_1: number;
  odds_dnb_2: number;
  odds_corners_over_75: number;
  odds_corners_over_85: number;
  odds_corners_over_95: number;
  odds_corners_over_105: number;
  odds_corners_over_115: number;
  odds_corners_under_75: number;
  odds_corners_under_85: number;
  odds_corners_under_95: number;
  odds_corners_under_105: number;
  odds_corners_under_115: number;
  odds_corners_1: number;
  odds_corners_x: number;
  odds_corners_2: number;
  odds_team_to_score_first_1: number;
  odds_team_to_score_first_x: number;
  odds_team_to_score_first_2: number;
  odds_win_to_nil_1: number;
  odds_win_to_nil_2: number;
  odds_1st_half_over05: number;
  odds_1st_half_over15: number;
  odds_1st_half_over25: number;
  odds_1st_half_over35: number;
  odds_1st_half_under05: number;
  odds_1st_half_under15: number;
  odds_1st_half_under25: number;
  odds_1st_half_under35: number;
  odds_2nd_half_over05: number;
  odds_2nd_half_over15: number;
  odds_2nd_half_over25: number;
  odds_2nd_half_over35: number;
  odds_2nd_half_under05: number;
  odds_2nd_half_under15: number;
  odds_2nd_half_under25: number;
  odds_2nd_half_under35: number;
  odds_btts_1st_half_yes: number;
  odds_btts_1st_half_no: number;
  odds_btts_2nd_half_yes: number;
  odds_btts_2nd_half_no: number;
  overallGoalCount: number;
  ht_goals_team_a: number;
  ht_goals_team_b: number;
  goals_2hg_team_a: number;
  goals_2hg_team_b: number;
  GoalCount_2hg: number;
  HTGoalCount: number;
  date_unix: number;
  winningTeam: number;
  no_home_away: number;
  btts_potential: number;
  btts_fhg_potential: number;
  btts_2hg_potential: number;
  goalTimingDisabled: number;
  attendance: number;
  corner_timings_recorded: number;
  card_timings_recorded: number;
  team_a_fh_corners: number;
  team_b_fh_corners: number;
  team_a_2h_corners: number;
  team_b_2h_corners: number;
  corner_fh_count: number;
  corner_2h_count: number;
  team_a_fh_cards: number;
  team_b_fh_cards: number;
  team_a_2h_cards: number;
  team_b_2h_cards: number;
  total_fh_cards: number;
  total_2h_cards: number;
  attacks_recorded: number;
  team_a_dangerous_attacks: number;
  team_b_dangerous_attacks: number;
  team_a_attacks: number;
  team_b_attacks: number;
  team_a_xg: number;
  team_b_xg: number;
  total_xg: number;
  team_a_penalties_won: number;
  team_b_penalties_won: number;
  team_a_penalty_goals: number;
  team_b_penalty_goals: number;
  team_a_penalty_missed: number;
  team_b_penalty_missed: number;
  pens_recorded: number;
  goal_timings_recorded: number;
  team_a_0_10_min_goals: number;
  team_b_0_10_min_goals: number;
  team_a_corners_0_10_min: number;
  team_b_corners_0_10_min: number;
  team_a_cards_0_10_min: number;
  team_b_cards_0_10_min: number;
  throwins_recorded: number;
  team_a_throwins: number;
  team_b_throwins: number;
  freekicks_recorded: number;
  team_a_freekicks: number;
  team_b_freekicks: number;
  goalkicks_recorded: number;
  team_a_goalkicks: number;
  team_b_goalkicks: number;
  o45_potential: number;
  o35_potential: number;
  o25_potential: number;
  o15_potential: number;
  o05_potential: number;
  o15HT_potential: number;
  o05HT_potential: number;
  o05_2H_potential: number;
  o15_2H_potential: number;
  corners_potential: number;
  offsides_potential: number;
  cards_potential: number;
  avg_potential: number;
  home_url: string;
  home_image: string;
  home_name: string;
  away_url: string;
  away_image: string;
  away_name: string;
  home_ppg: number;
  away_ppg: number;
  pre_match_home_ppg: number;
  pre_match_away_ppg: number;
  pre_match_teamA_overall_ppg: number;
  pre_match_teamB_overall_ppg: number;
  u45_potential: number;
  u35_potential: number;
  u25_potential: number;
  u15_potential: number;
  u05_potential: number;
  corners_o85_potential: number;
  corners_o95_potential: number;
  corners_o105_potential: number;
  team_a_xg_prematch: number;
  team_b_xg_prematch: number;
  total_xg_prematch: number;
  match_url: string;
  competition_id: number;
  matches_completed_minimum: number;
  over05: boolean;
  over15: boolean;
  over25: boolean;
  over35: boolean;
  over45: boolean;
  over55: boolean;
  btts: boolean;
}
