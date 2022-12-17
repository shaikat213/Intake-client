import { ToasterService } from '@abp/ng.theme.shared';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Common } from '../../../shared/common/common';
import { CommonModalService } from '../../../shared/services/common-modal.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProcessDto } from 'src/app/proxy/dto-models';
import { ProcessService } from 'src/app/proxy/services';
import { SubSink } from 'subsink';
import { CreateUpdateProcessModalComponent } from '../create-update-process-modal/create-update-process-modal.component';
import { ViewProcessModalComponent } from '../view-process-modal/view-process-modal.component';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  subs = new SubSink();
  isLoading: boolean;
  processs: ProcessDto[] = [];
  // filter: FilterModel = {
  //     offset: 0,
  //     limit: 0,
  //     pageNo: 1,
  //     pageSize: 10,
  //     sortBy: 'name',
  //     sortOrder: 'asc',
  //     isDesc: false,
  // };

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private cdRef: ChangeDetectorRef,
    private processService: ProcessService,
    private fb: FormBuilder,
    private toaster: ToasterService,
    private commonModalService: CommonModalService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.isLoading = true;
    // this.filter.limit = this.filter.pageSize;
    // this.filter.offset = (this.filter.pageNo - 1) * this.filter.pageSize;

    this.subs.sink = this.processService
      .getList()
      .subscribe((response: ProcessDto[]) => {
        this.isLoading = false;
        this.processs = response;
        this.cdRef.detectChanges();
      });
  }

  create() {
    this.edit(undefined);
  }

  edit(id: string): void {
    const modalRef = this.modalService.open(CreateUpdateProcessModalComponent, {
      size: 'md',
    });
    modalRef.componentInstance.id = id;
    modalRef.result.then(
      () => {
        this.load();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  delete(process: ProcessDto) {
    const data = Common.GetDeleteModalConfigurationObject(process.processName);
    this.commonModalService.confirm(data).then(
      (result: any) => {
        this.subs.sink = this.processService.delete(process.id).subscribe(
          (reponseData) => {
            this.load();
            this.toaster.success('Data deleted successfully.', 'Success');
          },
          (err: any) => {
            const alertData = {
              title: 'Notification',
              body: 'Unable to perform delete operation.',
              size: null,
              backdrop: true,
              keyboard: true,
              okButtonText: 'Ok',
              okButtonClass: 'btn-primary padding-left-30 padding-right-30',
            };
            this.commonModalService.alert(alertData);
          }
        );
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  //delete(id: string): void {
  //  const modalRef = this.modalService.open(DeleteTestModalComponent);
  //  modalRef.componentInstance.id = id;
  //  modalRef.result.then(
  //    () => {
  //      this.load();
  //    },
  //    (error: any) => {
  //      console.log(error);
  //    }
  //  );
  //}

  view(id: string): void {
    const modalRef = this.modalService.open(ViewProcessModalComponent, {
      size: 'md',
    });
    modalRef.componentInstance.id = id;
    modalRef.result.then(() => {
      this.load();
    });
  }

  // pageChanged($event: any) {
  //     this.filter.pageNo = $event;
  //     this.load();
  // }

  // pageSizeChanged($event: any) {
  //     this.filter.pageNo = 1;
  //     this.filter.pageSize = $event;
  //     this.load();
  // }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
