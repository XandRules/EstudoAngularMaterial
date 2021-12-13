import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule,MatTabsModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule } from "@angular/material";
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
        MatTabsModule
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
        MatTabsModule
    ],
    providers: [  
        MatDatepickerModule,
        MatNativeDateModule  
    ],

})
export class MaterialModule {}