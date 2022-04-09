export class Todo {
  constructor(
    public text: string,
    readonly id: number,
    public isDone: boolean
  ) {}
}
