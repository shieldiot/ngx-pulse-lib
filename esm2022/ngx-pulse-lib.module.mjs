import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Services } from './lib/services/services.export';
import { RestUtil } from './utils/rest-util';
import * as i0 from "@angular/core";
// @NgModule({
//   imports: [CommonModule, HttpClientModule]
// })
// export class NgxPulseLibModule {
//   static forRoot(config: PulseConfig): ModuleWithProviders<NgxPulseLibModule> {
//     return {
//       ngModule: NgxPulseLibModule,
//       providers: [
//         { provide: 'config', useValue: config },
//         RestUtil,
//         ...Services
//       ]
//     };
//   }
// }
export class NgxPulseLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxPulseLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NgxPulseLibModule, imports: [CommonModule, HttpClientModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxPulseLibModule, providers: [RestUtil, RestUtil, ...Services], imports: [CommonModule, HttpClientModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxPulseLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule],
                    providers: [RestUtil, RestUtil, ...Services]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXB1bHNlLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9uZ3gtcHVsc2UtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFHN0MsY0FBYztBQUNkLDhDQUE4QztBQUM5QyxLQUFLO0FBQ0wsbUNBQW1DO0FBQ25DLGtGQUFrRjtBQUNsRixlQUFlO0FBQ2YscUNBQXFDO0FBQ3JDLHFCQUFxQjtBQUNyQixtREFBbUQ7QUFDbkQsb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0QixVQUFVO0FBQ1YsU0FBUztBQUNULE1BQU07QUFDTixJQUFJO0FBTUosTUFBTSxPQUFPLGlCQUFpQjsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsWUFIbEIsWUFBWSxFQUFFLGdCQUFnQjtnSEFHN0IsaUJBQWlCLGFBRmpCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLFFBQVEsQ0FBQyxZQURsQyxZQUFZLEVBQUUsZ0JBQWdCOzs0RkFHN0IsaUJBQWlCO2tCQUo3QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztvQkFDekMsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLFFBQVEsQ0FBQztpQkFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4vbGliL3NlcnZpY2VzL3NlcnZpY2VzLmV4cG9ydCc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IFB1bHNlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG4vLyBATmdNb2R1bGUoe1xuLy8gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXVxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBOZ3hQdWxzZUxpYk1vZHVsZSB7XG4vLyAgIHN0YXRpYyBmb3JSb290KGNvbmZpZzogUHVsc2VDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neFB1bHNlTGliTW9kdWxlPiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIG5nTW9kdWxlOiBOZ3hQdWxzZUxpYk1vZHVsZSxcbi8vICAgICAgIHByb3ZpZGVyczogW1xuLy8gICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4vLyAgICAgICAgIFJlc3RVdGlsLFxuLy8gICAgICAgICAuLi5TZXJ2aWNlc1xuLy8gICAgICAgXVxuLy8gICAgIH07XG4vLyAgIH1cbi8vIH1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1Jlc3RVdGlsLCBSZXN0VXRpbCwgLi4uU2VydmljZXNdXG59KVxuZXhwb3J0IGNsYXNzIE5neFB1bHNlTGliTW9kdWxlIHsgfVxuIl19