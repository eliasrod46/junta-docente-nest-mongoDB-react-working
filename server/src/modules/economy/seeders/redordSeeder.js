import { Record } from "../models/admin/recordModel.js";

const redords = [
  {
    head: "test",
    body: "test",
    location: "test",
    user: "test",
    description: "test",
  },
  {
    head: "test",
    body: "test",
    location: "test",
    user: "test",
    description: "test",
  },
];

export async function recordsSeed() {
  redords.forEach(async function (redord) {
    await Record.create({
      head: redord.head,
      body: redord.body,
      location: redord.location,
      user: redord.user,
      description: redord.description,
    });
  });
}
