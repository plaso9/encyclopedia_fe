export class Argument {
  id: string;
  title: string;
  description: string;

  constructor(argumentJson){
    this.id = "not set";
    this.title = argumentJson.argumentTitle;
    this.description = argumentJson.argumentDescription;
  }
}
