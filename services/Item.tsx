import { B_URL } from "../environment";

export class ItemsClass {
  private path;

  constructor() {
    this.path = B_URL;
  }

  //   addItem(item: any) {
  //     return fetch(this.path + "/api/items", {
  //       method: "Post",
  //       body: JSON.stringify([item]),
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   }

  async getItems() {
    try {
      const data = await fetch("api/items");
      if (data.ok) return await data.json();
    } catch (err) {
      console.log("error", err);
      return JSON.stringify(err);
    }
  }
}
