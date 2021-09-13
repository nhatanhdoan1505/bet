// import puppeteer from "puppeteer";
import cheerio from "cheerio";
import { DataEntity, IDataRespone } from "type";
import excel4node from "excel4node";
import { max } from "lodash";
import { style } from "../type";

export class ClawController {
  private html: string;

  // startBrower(url: string) {
  //   (async () => {
  //     const browser = await puppeteer.launch();
  //     const page = await browser.newPage();
  //     await page.goto(url, { waitUntil: "networkidle2" });

  //     const bodyHandle = await page.$("body");

  //     const html = await page.evaluate((body) => {
  //       return body.innerHTML;
  //     }, bodyHandle);

  //     this.html = html;
  //     await browser.close();
  //   })();
  // }

  // loadHTML() {
  //   let match = this.html.slice(
  //     this.html.indexOf("live-table") + 'live-table">'.length,
  //     this.html.indexOf('<div class="notificationsDialog "')
  //   );
  //   console.log(match);
  //   const $ = cheerio.load(match.toString());
  //   let round: any = $("div.sportName");
  //   console.log(round[0].children[10]);
  // }

  optimizeResult(data: DataEntity[]): IDataRespone[] {
    let dataResponse: IDataRespone[] = data.map((d: DataEntity) => {
      return {
        round: d.game_week,
        homeTeam: d.home_name,
        awayTeam: d.away_name,
        homeScore: d.homeGoalCount,
        awayScore: d.awayGoalCount,
        homeCorner: d.team_a_corners,
        awayCorner: d.team_b_corners,
        homeFHCorner: d.team_a_fh_corners,
        awayFHCorner: d.team_b_fh_corners,
        homeShot: d.team_a_shots,
        awayShot: d.team_b_shots,
        homeShotOT: d.team_a_shotsOnTarget,
        awayShotOT: d.team_b_shotsOnTarget,
        homePossession: d.team_a_possession,
        awayPossession: d.team_b_possession,
        homeAttack: d.team_a_attacks,
        awayAttack: d.team_b_attacks,
      };
    });
    return dataResponse;
  }

  createEcelFile(data?: IDataRespone[]) {
    const wb = new excel4node.Workbook();
    let ws = wb.addWorksheet("ESL");
    let maxRound: number = max(data.map((d) => d.round));

    ws.column(1).setWidth(20);
    ws.column(2).setWidth(20);
    ws.cell(1, 1).string("Đội nhà").style(style.heading);
    ws.cell(1, 2).string("Đội khách").style(style.heading);
    ws.cell(1, 3).string("Bàn thắng đội nhà").style(style.heading);
    ws.cell(1, 4).string("Bàn thắng đội khách").style(style.heading);
    ws.cell(1, 5).string("Phạt góc hiệp 1 đội nhà").style(style.heading);
    ws.cell(1, 6).string("Phạt góc hiệp 1 đội khách").style(style.heading);
    ws.cell(1, 7).string("Phạt góc đội nhà").style(style.heading);
    ws.cell(1, 8).string("Phạt góc đội khách").style(style.heading);
    ws.cell(1, 9).string("Tổng số phạt góc h1").style(style.heading);
    ws.cell(1, 10).string("Tổng số phạt góc").style(style.heading);
    ws.cell(1, 11)
      .string("Tổng số cú sút trúng đích đội nhà")
      .style(style.heading);
    ws.cell(1, 12)
      .string("Tổng số cú sút trúng đích đội khách")
      .style(style.heading);
    ws.cell(1, 13).string("Tổng số cú sút đội nhà").style(style.heading);
    ws.cell(1, 14).string("Tổng số cú sút đội khách").style(style.heading);
    ws.cell(1, 15).string("Kiểm soát bóng đội nhà").style(style.heading);
    ws.cell(1, 16).string("Kiểm soát bóng đội khách").style(style.heading);
    ws.cell(1, 17).string("Đợt tấn công đội nhà").style(style.heading);
    ws.cell(1, 18).string("Đợt tấn công đội khách").style(style.heading);
    ws.cell(1, 19).string("Tổng số đợt tấn công").style(style.heading);

    let firstRow = 2;
    for (let i = 1; i <= maxRound; i++) {
      ws.cell(firstRow, 1).string(`Vòng ${i}`).style(style.round);
      firstRow += 1;
      let matchOfRound = data.filter((d) => d.round === i);
      matchOfRound.map((m) => {
        ws.cell(firstRow, 1).string(m.homeTeam).style(style.teamHome);
        ws.cell(firstRow, 2).string(m.awayTeam).style(style.teamAway);
        ws.cell(firstRow, 3).number(m.homeScore).style(style.statHome);
        ws.cell(firstRow, 4).number(m.awayScore).style(style.statAway);
        ws.cell(firstRow, 5).number(m.homeFHCorner).style(style.statHome);
        ws.cell(firstRow, 6).number(m.awayFHCorner).style(style.statAway);
        ws.cell(firstRow, 7).number(m.homeCorner).style(style.statHome);
        ws.cell(firstRow, 8).number(m.awayCorner).style(style.statAway);
        ws.cell(firstRow, 9)
          .number(m.homeFHCorner + m.awayFHCorner)
          .style(style.totalStat);
        ws.cell(firstRow, 10)
          .number(m.homeCorner + m.awayCorner)
          .style(style.totalStat);
        ws.cell(firstRow, 11).number(m.homeShotOT).style(style.statHome);
        ws.cell(firstRow, 12).number(m.awayShotOT).style(style.statAway);
        ws.cell(firstRow, 13).number(m.homeShot).style(style.statHome);
        ws.cell(firstRow, 14).number(m.awayShot).style(style.statAway);
        ws.cell(firstRow, 15).number(m.homePossession).style(style.statHome);
        ws.cell(firstRow, 16).number(m.awayPossession).style(style.statAway);
        ws.cell(firstRow, 17).number(m.homeAttack).style(style.statHome);
        ws.cell(firstRow, 18).number(m.awayAttack).style(style.statAway);
        ws.cell(firstRow, 19)
          .number(m.homeAttack + m.awayAttack)
          .style(style.totalStat);

        firstRow += 1;
      });
      firstRow += 1;
    }
    wb.write("./src/match.xlsx");
  }
}
