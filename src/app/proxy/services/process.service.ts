import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ProcessDto } from '../dto-models/models';

@Injectable({
  providedIn: 'root',
})
export class ProcessService {
  apiName = 'Default';

  create = (input: ProcessDto) =>
    this.restService.request<any, ProcessDto>({
      method: 'POST',
      url: '/api/app/process',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/process/${id}`,
    },
    { apiName: this.apiName });

  get = (id: number) =>
    this.restService.request<any, ProcessDto>({
      method: 'GET',
      url: `/api/app/process/${id}`,
    },
    { apiName: this.apiName });

  getList = () =>
    this.restService.request<any, ProcessDto[]>({
      method: 'GET',
      url: '/api/app/process',
    },
    { apiName: this.apiName });

  update = (input: ProcessDto) =>
    this.restService.request<any, ProcessDto>({
      method: 'PUT',
      url: '/api/app/process',
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
