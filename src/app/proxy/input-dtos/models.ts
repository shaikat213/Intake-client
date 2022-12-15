
export interface CustomerInputDto {
  id: number;
  customerName?: string;
  customerPhone?: string;
}

export interface MachineInputDto {
  id: number;
  machineNr?: string;
  machineTypeSerial?: string;
}

export interface TestEntityInputDto {
  id?: string;
  testName?: string;
  testDescription?: string;
}
