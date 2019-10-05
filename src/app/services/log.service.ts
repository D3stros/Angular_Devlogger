import { Injectable } from "@angular/core";
import { Log } from "../models/Log";

@Injectable({
  providedIn: "root"
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: "1",
        text: "Generated components",
        date: new Date("12/10/2017 12:30:52")
      },
      {
        id: "2",
        text: "Added Bootstrap",
        date: new Date("08/11/2017 10:30:52")
      },
      {
        id: "3",
        text: "Added logs component",
        date: new Date("02/05/2017 12:04:59")
      }
    ];
  }

  getLogs() {
    return this.logs;
  }
}
