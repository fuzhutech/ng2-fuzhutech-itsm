import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray, NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {DeviceService} from '../service/device.service';
import {Device} from '../model/device.model';

@Component({
    templateUrl: './device-dialog.component.html',
    styleUrls: ['./device-dialog.component.css']
})
export class DeviceDialogComponent extends ComponentDialog<DeviceDialogComponent, Device, DeviceService> {

    color = 'primary';

    registerForm: FormGroup;


    constructor(dialogRef: MdDialogRef<DeviceDialogComponent>, private formBuilder: FormBuilder) {
        super(dialogRef);

        this.registerForm = this.formBuilder.group({
            //每一个input都是一个FormControl,key是formControlName,value是构建FormControl的参数，
            // 第一个参数是input的默认值，第二个参数是校验器数组
            'serialNumber': ['', [Validators.required, Validators.minLength(4)]],
            //'email': ['', [Validators.required, Validators.pattern("[\\w]+?@[\\w]+?\\.[a-z]+?")]],
            //默认选中男性
            'status': ['0', [Validators.required]],
        });
    }

    handleReset(theForm: NgForm) {
        theForm.reset();
        return false;
    }

}
