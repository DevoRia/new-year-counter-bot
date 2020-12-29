export interface ICron {
  setCron(job: () => void): void;
  registry(): void;
}