import fs from 'node:fs';
import { SaveFile } from './save-file.use-case';

describe('SaveFileUseCase', () => {
  const customOptions = {
    fileContent: 'custom content',
    fileDestination: 'custom-outputs/file-destination',
    fileName: 'custom-table-name',
  };

  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

  afterEach(() => {
    const outputFolderExists = fs.existsSync('outputs');
    if (outputFolderExists) fs.rmSync('outputs', { recursive: true });

    const customOutputFolderExists = fs.existsSync('custom-outputs');
    if (customOutputFolderExists) fs.rmSync('custom-outputs', { recursive: true });
  });

  test('should save file with default values', () => {
    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';
    const options = {
      fileContent: 'test content',
    };

    const result = saveFile.execute(options);
    expect(result).toBeTruthy();

    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

    expect(fileExists).toBeTruthy();
    expect(fileContent).toBe(options.fileContent);
  });

  test('should save file with custom values', () => {
    const saveFile = new SaveFile();

    const result = saveFile.execute(customOptions);
    expect(result).toBeTruthy();

    const fileExists = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });

    expect(fileExists).toBeTruthy();
    expect(fileContent).toBe(customOptions.fileContent);
  });
});
