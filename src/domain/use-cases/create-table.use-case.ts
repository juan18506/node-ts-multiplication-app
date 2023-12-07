interface CreateTableUseCase {
  execute: (option: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit }: CreateTableOptions): string {
    let outputMessage: string = '';

    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }

    return outputMessage;
  }
}
