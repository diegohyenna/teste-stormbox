export class ModelClass {
  model: any[] = [];

  constructor(model: any) {
    this.model = model;
  }

  getAll() {
    return this.model;
  }

  getById(modelId: number) {
    return this.model.find((md) => md.id == modelId);
  }
}
