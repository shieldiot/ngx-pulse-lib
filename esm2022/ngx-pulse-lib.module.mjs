import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Services } from './lib/services/services.export';
import { RestUtil } from './utils/rest-util';
import * as i0 from "@angular/core";
export class NgxPulseLibModule {
    static forRoot(config) {
        return {
            ngModule: NgxPulseLibModule,
            providers: [
                { provide: 'config', useValue: config },
                RestUtil,
                ...Services
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxPulseLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxPulseLibModule, imports: [CommonModule, HttpClientModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxPulseLibModule, imports: [CommonModule, HttpClientModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxPulseLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXB1bHNlLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9uZ3gtcHVsc2UtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFNN0MsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQW1CO1FBQ2hDLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDdkMsUUFBUTtnQkFDUixHQUFHLFFBQVE7YUFDWjtTQUNGLENBQUM7SUFDSixDQUFDOzhHQVZVLGlCQUFpQjsrR0FBakIsaUJBQWlCLFlBRmxCLFlBQVksRUFBRSxnQkFBZ0I7K0dBRTdCLGlCQUFpQixZQUZsQixZQUFZLEVBQUUsZ0JBQWdCOzsyRkFFN0IsaUJBQWlCO2tCQUg3QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztpQkFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4vbGliL3NlcnZpY2VzL3NlcnZpY2VzLmV4cG9ydCc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IFB1bHNlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hQdWxzZUxpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogUHVsc2VDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neFB1bHNlTGliTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hQdWxzZUxpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICAgIFJlc3RVdGlsLFxuICAgICAgICAuLi5TZXJ2aWNlc1xuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuLy8gQE5nTW9kdWxlKHtcbi8vICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4vLyAgIHByb3ZpZGVyczogW1Jlc3RVdGlsLCBSZXN0VXRpbCwgLi4uU2VydmljZXNdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIE5neFB1bHNlTGliTW9kdWxlIHsgfVxuIl19