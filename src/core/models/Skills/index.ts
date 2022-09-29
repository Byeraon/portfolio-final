import { BaseModel } from "sjs-base-model";

export default class Skills extends BaseModel {
  public id: number = 0;
  public name: string = "";
  public color: string = "";
  public percent: number = 0;
  public createdAt: string = "";
  public updatedAt: string = "";
  public publishedAt: string = "";

  constructor(data: Partial<Skills>) {
    super({ expand: true });

    this.update(data);
  }
}
