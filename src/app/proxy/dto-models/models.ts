
export interface CustomerDto {
  id: number;
  customerName?: string;
  customerPhone?: string;
}

export interface MachineDto {
  id: number;
  machineNr?: string;
  machineTypeSerial?: string;
}

export interface TestEntityDto {
  id?: string;
  testName?: string;
  testDescription?: string;
}
