export class Tasks{
    task: string;
    time: string;
    /**
     *
     */
    constructor(taskActivity:string, taskTime: string) {
        this.task = taskActivity;
        this.time = taskTime;
    }
}