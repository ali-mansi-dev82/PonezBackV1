import { HttpError } from "http-error";

class Service {
  #model;
  async checkExistById(id) {
    const category = this.#model.findById(id);
    if (!category) throw new HttpError("Not found");
    return category;
  }
}
module.exports = Service;
