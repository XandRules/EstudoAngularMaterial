import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule,MatTabsModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatSelectModule, MatProgressSpinnerModule } from "@angular/material";
@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatSelectModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatSelectModule,
        MatProgressSpinnerModule
    ],
    providers: [  
        MatDatepickerModule,
        MatNativeDateModule  
    ],

})
export class MaterialModule {}