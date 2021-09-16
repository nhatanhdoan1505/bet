import cheerio from "cheerio";
import { ICornerData, IPayload } from "../type";
import ObjectsToCsv from "objects-to-csv";

export class Services {
  getDataCorner(html: string): { data: ICornerData[]; content: string } {
    const $ = cheerio.load(html);
    let data: ICornerData[] = [];
    let content: string = $(
      "#blog > div > div > div:nth-child(2) > div:nth-child(1) > table > caption"
    )
      .text()

    data = $("table > tbody > tr")
      .map((index, e) => {
        let tds = $(e).find("td");
        return [
          ...data,
          {
            position: +$(tds[0]).text(),
            team: $(tds[1]).text(),
            played: +$(tds[2]).text(),
            allCorFor: +$(tds[3]).text(),
            allCorAgst: +$(tds[4]).text(),
            perGameCorFor: +$(tds[5]).text(),
            perGameCorAgst: +$(tds[6]).text(),
          },
        ];
      })
      .get();

    return { data, content };
  }

  getEndpoint({ league, venue, season }) {
    return `https://www.footcharts.co.uk/index.cfm?task=basics_corners&league=${league}&venue=${venue}&season=${season}`;
  }

  getPayload({ league, venue, season }): IPayload {
    return { go: "Go!", league, venue, season };
  }
}
