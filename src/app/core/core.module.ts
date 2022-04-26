import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LocalStorage } from './injection_tokens';
import { AuthActivate } from './guards/auth_activate';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    {
      provide: LocalStorage,
      useFactory: (PLATFORM_ID: Object) => {
        if (isPlatformBrowser(PLATFORM_ID)) {
          return window.localStorage;
        }

        return class implements Storage {
          length = 0;
          private data: Record<string, string> = {};

          clear(): void {
            this.data = {};
          }

          getItem(key: string): string | null {
            return this.data[key];
          }

          key(index: number): string | null {
            throw new Error('Method not implemented.');
          }

          removeItem(key: string): void {
            const { [key]: removedItem, ...others } = this.data
            this.data = others;
          }

          setItem(key: string, value: string): void {
            this.data[key] = value;
          }

        }
      },
      deps: [PLATFORM_ID]
    },
    AuthActivate
  ],
  
})
export class CoreModule { }
